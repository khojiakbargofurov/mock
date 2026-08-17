import { NextResponse } from "next/server";
import { createLoginRequest } from "@/lib/auth/requests";
import { botUsername, deepLink } from "@/lib/auth/telegram";

/** Brauzer kirish so'rovini boshlaydi: token + botga havola qaytariladi */
export async function POST() {
  if (!botUsername()) {
    return NextResponse.json(
      {
        error: "bot-not-configured",
        message:
          "TELEGRAM_BOT_USERNAME o'rnatilmagan. .env.local faylini to'ldiring.",
      },
      { status: 503 },
    );
  }

  const { token, expiresIn } = await createLoginRequest();

  return NextResponse.json({
    token,
    expiresIn,
    link: deepLink(token),
    bot: botUsername(),
  });
}
