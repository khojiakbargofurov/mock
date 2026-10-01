import { NextResponse } from "next/server";
import { approveLoginRequest, isKnownUser } from "@/lib/auth/requests";
import { createSessionToken } from "@/lib/auth/session";
import {
  parseStartToken,
  sendMessage,
  toSessionUser,
  webhookSecretOk,
  type TelegramUpdate,
} from "@/lib/auth/telegram";

/**
 * Bot webhooki.
 *
 * Foydalanuvchi botda "Start" bosganda Telegram shu yo'lga
 * `/start <token>` xabarini yuboradi. Token to'g'ri bo'lsa, kirish
 * so'rovi tasdiqlanadi va brauzer keyingi so'rovda sessiyani oladi.
 *
 * Lokal ishlab chiqishda tunnel shart emas: `npm run bot:dev` skripti
 * getUpdates orqali xabarlarni olib, shu yo'lga uzatadi.
 */
export async function POST(request: Request) {
  if (!webhookSecretOk(request)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let update: TelegramUpdate;
  try {
    update = (await request.json()) as TelegramUpdate;
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  const message = update.message;
  const from = message?.from;
  const chatId = message?.chat?.id;

  if (!message || !from) return NextResponse.json({ ok: true });

  const token = parseStartToken(message.text);

  // Tokensiz "/start" yoki boshqa xabar — qisqa yo'riqnoma
  if (!token) {
    if (chatId) {
      await sendMessage(
        chatId,
        "Salom! Ilovaga kirish uchun saytdagi <b>“Telegram orqali kirish”</b> tugmasini bosing — men sizni shu yerda tanib olaman.",
      );
    }
    return NextResponse.json({ ok: true });
  }

  const user = toSessionUser(from);
  const isNew = !(await isKnownUser(user.id));
  const approved = await approveLoginRequest(token, user);

  if (chatId) {
    // Serverless instance'lar umumiy xotira ulashmaydi. Baza vaqtincha
    // ishlamasa, bot foydalanuvchining Telegram identifikatoridan 5 daqiqalik
    // imzolangan ticket yaratadi. Callback ticketni tekshirib sessiya cookie'si
    // beradi — maxfiy kalit ham, Telegram tokeni ham URL'ga chiqmaydi.
    const appUrl = (process.env.APP_URL ?? "https://prufung.uz").replace(/\/$/, "");
    const setup = token.startsWith("r_");
    const ticket = createSessionToken(user, 5 * 60);
    const fallbackUrl = `${appUrl}/api/auth/telegram/callback?ticket=${encodeURIComponent(ticket)}${setup ? "&setup=1" : ""}`;
    const fallbackHref = fallbackUrl.replace(/&/g, "&amp;");

    await sendMessage(
      chatId,
      approved
        ? isNew
          ? "Hisobingiz yaratildi ✅\nBrauzerga qayting — kirish tayyor."
          : "Kirish tasdiqlandi ✅\nBrauzerga qayting."
        : `Kirishni yakunlash uchun <a href="${fallbackHref}">saytga qaytish</a> tugmasini bosing.\nHavola 5 daqiqa amal qiladi.`,
    );
  }

  return NextResponse.json({ ok: true, approved });
}
