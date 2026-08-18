import crypto from "node:crypto";
import { db } from "@/lib/db";

/**
 * Kirish so'rovini yaratadi. Asosiy ilova bilan bir xil jadval
 * (`login_requests`) ishlatiladi: botning /start ishlovchisi u yerda,
 * shuning uchun tasdiqlash o'sha yo'l bilan keladi.
 */
export async function POST() {
  const token = crypto.randomBytes(16).toString("base64url");

  const { error } = await db().from("login_requests").insert({ token });
  if (error) {
    return Response.json({ error: "Baza bilan aloqa yo'q" }, { status: 500 });
  }

  const bot = process.env.TELEGRAM_BOT_USERNAME ?? "";
  return Response.json({
    token,
    link: `https://t.me/${bot}?start=${token}`,
    bot,
    expiresIn: 300,
  });
}
