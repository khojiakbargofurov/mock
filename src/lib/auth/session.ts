import crypto from "node:crypto";

/**
 * Sessiya — imzolangan cookie (JWT emas, lekin xuddi shu tamoyilda):
 * `base64url(payload).base64url(hmac)`. Tashqi kutubxona kerak emas.
 */
export const SESSION_COOKIE = "gmt_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 kun

export interface SessionUser {
  /** Ichki id: "tg:123456789" */
  id: string;
  telegramId: number;
  firstName: string;
  lastName?: string;
  username?: string;
  photoUrl?: string;
  /** Birinchi marta kirgan vaqt — "ro'yxatdan o'tgan" sanasi */
  createdAt: number;
}

interface SessionPayload extends SessionUser {
  /** Amal qilish muddati (soniyalarda, Unix) */
  exp: number;
}

/**
 * Imzo kaliti. Ishlab chiqarishda `AUTH_SECRET` majburiy;
 * lokal ishlab chiqishda barqaror vaqtinchalik kalit ishlatiladi,
 * shunda server qayta ishga tushganda ham sessiya buzilmaydi.
 */
function secret(): string {
  const value = process.env.AUTH_SECRET;
  if (value && value.length >= 16) return value;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "AUTH_SECRET o'rnatilmagan — sessiyani imzolab bo'lmaydi (kamida 16 belgi).",
    );
  }
  return "dev-secret-do-not-use-in-production";
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sign(data: string): string {
  return base64url(
    crypto.createHmac("sha256", secret()).update(data).digest(),
  );
}

export function createSessionToken(
  user: SessionUser,
  maxAgeSec = SESSION_MAX_AGE,
): string {
  const payload: SessionPayload = {
    ...user,
    exp: Math.floor(Date.now() / 1000) + maxAgeSec,
  };
  const body = base64url(JSON.stringify(payload));
  return `${body}.${sign(body)}`;
}

export function readSessionToken(token: string | undefined): SessionUser | null {
  if (!token) return null;

  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  const expected = sign(body);
  // Vaqt bo'yicha hujumdan himoya: uzunlik teng bo'lmasa ham xato bermaydi
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (payload.exp * 1000 < Date.now()) return null;

    return {
      id: payload.id,
      telegramId: payload.telegramId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.username,
      photoUrl: payload.photoUrl,
      createdAt: payload.createdAt,
    };
  } catch {
    return null;
  }
}

/** Cookie sozlamalari — httpOnly, prodda faqat HTTPS orqali */
export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}
