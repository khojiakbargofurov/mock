import { NextResponse } from "next/server";
import { loginStatus, takeApprovedUser } from "@/lib/auth/requests";
import {
  createSessionToken,
  SESSION_COOKIE,
  sessionCookieOptions,
} from "@/lib/auth/session";

/**
 * Brauzer shu yo'lni so'rab turadi. Bot tasdiqlagan bo'lsa —
 * sessiya cookie'si o'rnatiladi va token bekor qilinadi.
 */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "token-required" }, { status: 400 });
  }

  const status = await loginStatus(token);
  if (status !== "approved") {
    return NextResponse.json({ status });
  }

  const user = await takeApprovedUser(token);
  if (!user) return NextResponse.json({ status: "expired" });

  const response = NextResponse.json({ status: "approved", user });
  response.cookies.set(
    SESSION_COOKIE,
    createSessionToken(user),
    sessionCookieOptions(),
  );
  return response;
}
