import type { SessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db/client";

/**
 * Foydalanuvchi va kirish so'rovlari bilan ishlash.
 * Baza sozlanmagan bo'lsa, funksiyalar `null` qaytaradi va chaqiruvchi kod
 * xotira rejimiga tushadi (`src/lib/auth/requests.ts`).
 */

interface UserRow {
  id: string;
  telegram_id: number;
  first_name: string;
  last_name: string | null;
  username: string | null;
  photo_url: string | null;
  created_at: string;
}

function toUser(row: UserRow): SessionUser {
  return {
    id: row.id,
    telegramId: Number(row.telegram_id),
    firstName: row.first_name,
    lastName: row.last_name ?? undefined,
    username: row.username ?? undefined,
    photoUrl: row.photo_url ?? undefined,
    createdAt: new Date(row.created_at).getTime(),
  };
}

/** Foydalanuvchini yozadi yoki yangilaydi. Ro'yxatdan o'tgan sana saqlanadi. */
export async function upsertUser(
  user: SessionUser,
): Promise<{ user: SessionUser; isNew: boolean } | null> {
  const client = db();
  if (!client) return null;

  const { data: existing } = await client
    .from("users")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<UserRow>();

  const { data, error } = await client
    .from("users")
    .upsert(
      {
        id: user.id,
        telegram_id: user.telegramId,
        first_name: user.firstName,
        last_name: user.lastName ?? null,
        username: user.username ?? null,
        photo_url: user.photoUrl ?? null,
        // Mavjud bo'lsa, birinchi kirish sanasi o'zgarmaydi
        ...(existing ? {} : { created_at: new Date().toISOString() }),
        last_seen_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    )
    .select("*")
    .single<UserRow>();

  if (error || !data) {
    console.error("[db] upsertUser:", error?.message);
    return null;
  }

  return { user: toUser(data), isNew: !existing };
}

export async function findUser(id: string): Promise<SessionUser | null> {
  const client = db();
  if (!client) return null;

  const { data } = await client
    .from("users")
    .select("*")
    .eq("id", id)
    .maybeSingle<UserRow>();

  return data ? toUser(data) : null;
}

/* ── Kirish so'rovlari ──────────────────────────────────────────────────── */

export async function dbCreateLoginRequest(token: string): Promise<boolean> {
  const client = db();
  if (!client) return false;

  const { error } = await client.from("login_requests").insert({ token });
  if (error) {
    console.error("[db] createLoginRequest:", error.message);
    return false;
  }

  // Eskilarini tozalab turamiz (5 daqiqadan oshganlari)
  const deadline = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  await client.from("login_requests").delete().lt("created_at", deadline);
  return true;
}

export async function dbApproveLoginRequest(
  token: string,
  user: SessionUser,
): Promise<boolean> {
  const client = db();
  if (!client) return false;

  const saved = await upsertUser(user);
  if (!saved) return false;

  const { data, error } = await client
    .from("login_requests")
    .update({ approved_user_id: saved.user.id })
    .eq("token", token)
    .is("approved_user_id", null)
    .select("token");

  if (error) {
    console.error("[db] approveLoginRequest:", error.message);
    return false;
  }
  return (data?.length ?? 0) > 0;
}

export async function dbLoginStatus(
  token: string,
): Promise<"pending" | "approved" | "expired" | "unknown" | null> {
  const client = db();
  if (!client) return null;

  const { data } = await client
    .from("login_requests")
    .select("created_at, approved_user_id")
    .eq("token", token)
    .maybeSingle<{ created_at: string; approved_user_id: string | null }>();

  if (!data) return "unknown";
  if (data.approved_user_id) return "approved";

  const age = Date.now() - new Date(data.created_at).getTime();
  return age > 5 * 60 * 1000 ? "expired" : "pending";
}

/** Tasdiqlangan foydalanuvchini oladi va tokenni o'chiradi (bir martalik) */
export async function dbTakeApprovedUser(
  token: string,
): Promise<SessionUser | null> {
  const client = db();
  if (!client) return null;

  const { data } = await client
    .from("login_requests")
    .select("approved_user_id")
    .eq("token", token)
    .maybeSingle<{ approved_user_id: string | null }>();

  if (!data?.approved_user_id) return null;

  await client.from("login_requests").delete().eq("token", token);
  return findUser(data.approved_user_id);
}
