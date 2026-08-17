import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readSessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { dbReady } from "@/lib/db/client";
import { mergeStates, pullState, pushState, type SyncState } from "@/lib/db/sync";
import { upsertUser } from "@/lib/db/repo";

/** Sessiyadan foydalanuvchini oladi */
async function currentUser() {
  const store = await cookies();
  return readSessionToken(store.get(SESSION_COOKIE)?.value);
}

/** Serverdagi holatni o'qish (ilova ochilganda) */
export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!dbReady()) return NextResponse.json({ error: "db-not-configured" }, { status: 503 });

  const state = await pullState(user.id);
  return NextResponse.json({ state });
}

/**
 * Qurilma holatini yuborish. Server uni o'zinikiga qo'shib, birlashtirilgan
 * natijani qaytaradi — shu tariqa ikkala tomon ham to'liq ma'lumotga ega bo'ladi.
 */
export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!dbReady()) return NextResponse.json({ error: "db-not-configured" }, { status: 503 });

  let incoming: SyncState;
  try {
    incoming = (await request.json()) as SyncState;
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  // Sessiya bazadan oldin yaratilgan bo'lishi mumkin (yoki baza yangi) —
  // shuning uchun avval foydalanuvchi satri borligiga ishonch hosil qilamiz,
  // aks holda tashqi kalit cheklovi barcha yozuvni rad etadi
  await upsertUser(user);

  const server = (await pullState(user.id)) ?? {};
  const merged = mergeStates(server, incoming);
  const result = await pushState(user.id, merged);

  return NextResponse.json({
    state: merged,
    saved: result.ok,
    ...(result.ok ? {} : { errors: result.errors }),
  });
}
