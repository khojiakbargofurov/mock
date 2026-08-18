import crypto from "node:crypto";
import { cookies } from "next/headers";

/**
 * Admin sessiyasi — asosiy ilovadan butunlay ajratilgan:
 * boshqa cookie nomi, boshqa imzo kaliti, boshqa domen.
 * Kirish huquqi Telegram id bo'yicha ro'yxatdan tekshiriladi.
 */
export const ADMIN_COOKIE = "gmt_admin";
const MAX_AGE = 60 * 60 * 12; // 12 soat — panel uchun qisqa muddat yetarli

export interface AdminUser {
  telegramId: number;
  firstName: string;
  username?: string;
}

interface Payload extends AdminUser {
  exp: number;
}

function secret(): string {
  const value = process.env.ADMIN_SECRET;
  if (!value || value.length < 16) {
    throw new Error("ADMIN_SECRET yo'q yoki juda qisqa (kamida 16 belgi)");
  }
  return value;
}

/** Kimga ruxsat berilgan — vergul bilan ajratilgan Telegram id lar */
export function allowedIds(): number[] {
  return (process.env.ADMIN_TELEGRAM_IDS ?? "")
    .split(",")
    .map((x) => Number(x.trim()))
    .filter((x) => Number.isFinite(x) && x > 0);
}

export function isAllowed(telegramId: number): boolean {
  return allowedIds().includes(telegramId);
}

function b64(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sign(data: string): string {
  return b64(crypto.createHmac("sha256", secret()).update(data).digest());
}

export function createToken(user: AdminUser): string {
  const payload: Payload = {
    ...user,
    exp: Math.floor(Date.now() / 1000) + MAX_AGE,
  };
  const body = b64(JSON.stringify(payload));
  return `${body}.${sign(body)}`;
}

export function readToken(token: string | undefined): AdminUser | null {
  if (!token) return null;

  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  const a = Buffer.from(signature);
  const b = Buffer.from(sign(body));
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as Payload;
    if (payload.exp * 1000 < Date.now()) return null;
    // Ro'yxat o'zgargan bo'lsa, eski cookie ham kuchini yo'qotadi
    if (!isAllowed(payload.telegramId)) return null;

    return {
      telegramId: payload.telegramId,
      firstName: payload.firstName,
      username: payload.username,
    };
  } catch {
    return null;
  }
}

export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  };
}

/** Sahifalar uchun: sessiya bo'lmasa null qaytaradi */
export async function currentAdmin(): Promise<AdminUser | null> {
  const store = await cookies();
  return readToken(store.get(ADMIN_COOKIE)?.value);
}
