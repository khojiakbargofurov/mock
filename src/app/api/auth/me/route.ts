import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readSessionToken, SESSION_COOKIE } from "@/lib/auth/session";

/** Joriy sessiya — mijoz tomondagi `useSession` shu yerdan o'qiydi */
export async function GET() {
  const store = await cookies();
  const user = readSessionToken(store.get(SESSION_COOKIE)?.value);
  return NextResponse.json({ user });
}
