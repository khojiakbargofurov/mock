import { NextResponse } from "next/server";
import {
  createSessionToken,
  readSessionToken,
  SESSION_COOKIE,
  sessionCookieOptions,
} from "@/lib/auth/session";

/**
 * Telegram bot fallback havolasi.
 *
 * Supabase vaqtincha ishlamasa, webhook foydalanuvchi ma'lumotidan qisqa
 * muddatli imzolangan ticket yaratadi. Bu endpoint ticketni tekshiradi,
 * odatiy 30 kunlik sessiya cookie'siga almashtiradi va ticketni URL'dan olib
 * tashlab ilovaga qaytaradi.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const user = readSessionToken(url.searchParams.get("ticket") ?? undefined);

  if (!user) {
    return NextResponse.redirect(new URL("/login?telegram=expired", url));
  }

  const destination = url.searchParams.get("setup") === "1"
    ? "/register"
    : "/uebersicht";
  const response = NextResponse.redirect(new URL(destination, url));
  response.cookies.set(
    SESSION_COOKIE,
    createSessionToken(user),
    sessionCookieOptions(),
  );
  return response;
}
