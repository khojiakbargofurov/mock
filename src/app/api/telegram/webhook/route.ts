import { NextResponse } from "next/server";
import { approveLoginRequest, isKnownUser } from "@/lib/auth/requests";
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

  const isNew = !(await isKnownUser(`tg:${from.id}`));
  const approved = await approveLoginRequest(token, toSessionUser(from));

  if (chatId) {
    await sendMessage(
      chatId,
      approved
        ? isNew
          ? "Hisobingiz yaratildi ✅\nBrauzerga qayting — kirish tayyor."
          : "Kirish tasdiqlandi ✅\nBrauzerga qayting."
        : "Bu havolaning muddati tugagan. Saytda tugmani qaytadan bosing.",
    );
  }

  return NextResponse.json({ ok: true, approved });
}
