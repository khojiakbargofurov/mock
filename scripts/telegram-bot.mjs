/**
 * Lokal ishlab chiqish uchun bot "tinglovchisi".
 *
 * Telegram webhook'i uchun ochiq HTTPS manzil kerak — localhost'da bu yo'q.
 * Shuning uchun bu skript getUpdates (long polling) orqali xabarlarni oladi
 * va ularni loyihaning o'z webhook yo'liga uzatadi. Ishlab chiqarishda
 * bu skript kerak emas: setWebhook qilinadi.
 *
 * Ishga tushirish:  npm run bot:dev
 */
const token = process.env.TELEGRAM_BOT_TOKEN;
const secret = process.env.TELEGRAM_WEBHOOK_SECRET ?? "";
const target =
  process.env.WEBHOOK_URL ?? "http://localhost:3000/api/telegram/webhook";

if (!token) {
  console.error(
    "TELEGRAM_BOT_TOKEN topilmadi. .env.local faylini to'ldiring (.env.example dan nusxa oling).",
  );
  process.exit(1);
}

const api = `https://api.telegram.org/bot${token}`;

// Webhook o'rnatilgan bo'lsa, getUpdates ishlamaydi — avval uni olib tashlaymiz
await fetch(`${api}/deleteWebhook`, { method: "POST" }).catch(() => {});

const me = await fetch(`${api}/getMe`).then((r) => r.json());
if (!me.ok) {
  console.error("Bot tokeni noto'g'ri:", me.description);
  process.exit(1);
}

console.log(`[bot] @${me.result.username} tinglanmoqda → ${target}`);
console.log("[bot] To'xtatish: Ctrl+C");

let offset = 0;

for (;;) {
  try {
    const response = await fetch(
      `${api}/getUpdates?timeout=30&offset=${offset}`,
    );
    const data = await response.json();
    if (!data.ok) {
      console.error("[bot] getUpdates:", data.description);
      await new Promise((r) => setTimeout(r, 3000));
      continue;
    }

    for (const update of data.result) {
      offset = update.update_id + 1;
      const text = update.message?.text ?? "";
      console.log(
        `[bot] ${update.message?.from?.username ?? update.message?.from?.id}: ${text}`,
      );

      const forwarded = await fetch(target, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(secret ? { "x-telegram-bot-api-secret-token": secret } : {}),
        },
        body: JSON.stringify(update),
      }).catch((error) => {
        console.error("[bot] ilovaga uzatib bo'lmadi:", error.message);
        return null;
      });

      if (forwarded && !forwarded.ok) {
        console.error("[bot] ilova javobi:", forwarded.status);
      }
    }
  } catch (error) {
    console.error("[bot] xato:", error.message);
    await new Promise((r) => setTimeout(r, 3000));
  }
}
