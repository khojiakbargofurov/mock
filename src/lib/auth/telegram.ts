import crypto from "node:crypto";
import type { SessionUser } from "@/lib/auth/session";

export function botToken(): string | undefined {
  return process.env.TELEGRAM_BOT_TOKEN;
}

export function botUsername(): string | undefined {
  return (
    process.env.TELEGRAM_BOT_USERNAME ??
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME
  );
}

/** Webhook so'rovi haqiqatan Telegram'dan kelganini tekshiradi */
export function webhookSecretOk(request: Request): boolean {
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!expected) return process.env.NODE_ENV !== "production";
  return request.headers.get("x-telegram-bot-api-secret-token") === expected;
}

/* ── Telegram Login Widget imzosini tekshirish ──────────────────────────── */

/**
 * Widget qaytargan ma'lumot haqiqiyligini tekshiradi.
 * Algoritm (rasmiy hujjat): secret = SHA256(bot_token),
 * hash = HMAC_SHA256(data_check_string, secret).
 */
export function verifyWidgetPayload(
  data: Record<string, string>,
  token = botToken(),
): boolean {
  if (!token) return false;
  const { hash, ...rest } = data;
  if (!hash) return false;

  const checkString = Object.keys(rest)
    .sort()
    .map((key) => `${key}=${rest[key]}`)
    .join("\n");

  const secret = crypto.createHash("sha256").update(token).digest();
  const computed = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  const a = Buffer.from(computed);
  const b = Buffer.from(hash);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;

  // Eski imzoni qayta ishlatishning oldini olamiz (24 soat)
  const authDate = Number(rest.auth_date ?? 0);
  return Date.now() / 1000 - authDate < 86_400;
}

/* ── Bot xabarlari ──────────────────────────────────────────────────────── */

export interface TelegramFrom {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
}

export interface TelegramUpdate {
  message?: {
    text?: string;
    chat?: { id: number };
    from?: TelegramFrom;
  };
}

/** "/start ABC123" dan tokenni ajratadi */
export function parseStartToken(text: string | undefined): string | null {
  if (!text) return null;
  const match = /^\/start(?:@\w+)?\s+([A-Za-z0-9_-]{6,64})$/.exec(text.trim());
  return match ? match[1] : null;
}

export function toSessionUser(from: TelegramFrom): SessionUser {
  return {
    id: `tg:${from.id}`,
    telegramId: from.id,
    firstName: from.first_name ?? "Foydalanuvchi",
    lastName: from.last_name,
    username: from.username,
    createdAt: Date.now(),
  };
}

/** Botdan foydalanuvchiga xabar yuboradi (token bo'lmasa jim o'tadi) */
export async function sendMessage(chatId: number, text: string) {
  const token = botToken();
  if (!token) return;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (error) {
    // Xabar yuborilmasa ham kirish jarayoni to'xtamasligi kerak
    console.error("[telegram] sendMessage:", error);
  }
}

/** Foydalanuvchini botga olib boradigan havola */
export function deepLink(token: string): string | null {
  const name = botUsername();
  return name ? `https://t.me/${name.replace(/^@/, "")}?start=${token}` : null;
}
