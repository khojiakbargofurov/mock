import { NextResponse } from "next/server";
import { createLoginRequest } from "@/lib/auth/requests";
import { botUsername, deepLink } from "@/lib/auth/telegram";

/** Brauzer kirish so'rovini boshlaydi: token + botga havola qaytariladi */
export async function POST(request: Request) {
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

  let flow: "login" | "register" = "login";
  try {
    const body = (await request.json()) as { flow?: string };
    if (body.flow === "register") flow = "register";
  } catch {
    // Eski klientlar body yubormaydi — login oqimi standart bo'lib qoladi.
  }

  const { token, expiresIn, shared } = await createLoginRequest(flow);

  return NextResponse.json({
    token,
    expiresIn,
    link: deepLink(token),
    bot: botUsername(),
    // Production serverless instance'lar lokal xotirani bo'lishmaydi. Bu
    // holatda klient polling qilmaydi, bot imzolangan callback havolasini beradi.
    manual: process.env.NODE_ENV === "production" && !shared,
  });
}
