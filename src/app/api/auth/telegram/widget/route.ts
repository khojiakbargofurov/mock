import { NextResponse } from "next/server";
import { isKnownUser, rememberUser } from "@/lib/auth/requests";
import {
  createSessionToken,
  SESSION_COOKIE,
  sessionCookieOptions,
  type SessionUser,
} from "@/lib/auth/session";
import { toSessionUser, verifyWidgetPayload } from "@/lib/auth/telegram";

/**
 * Telegram Login Widget uchun.
 *
 * Deep-link oqimidan farqi: bu yerda foydalanuvchi ma'lumotini Telegram
 * to'g'ridan-to'g'ri brauzerga qaytaradi, biz esa imzoni bot tokeni bilan
 * tekshiramiz. Widget faqat BotFather'da domen ro'yxatdan o'tkazilgan
 * bo'lsa ishlaydi (localhost'da ishlamaydi).
 */
export async function POST(request: Request) {
  let payload: Record<string, string>;
  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  if (!verifyWidgetPayload(payload)) {
    return NextResponse.json({ error: "invalid-signature" }, { status: 401 });
  }

  const user: SessionUser = toSessionUser({
    id: Number(payload.id),
    first_name: payload.first_name,
    last_name: payload.last_name,
    username: payload.username,
  });
  if (payload.photo_url) user.photoUrl = payload.photo_url;

  const isNew = !(await isKnownUser(user.id));
  const saved = await rememberUser(user);

  const response = NextResponse.json({ user: saved, isNew });
  response.cookies.set(
    SESSION_COOKIE,
    createSessionToken(saved),
    sessionCookieOptions(),
  );
  return response;
}
