# Admin panel — prufung.uz

Asosiy ilovadan **alohida** Next.js loyihasi. Sababi: admin kodi va
so'rovlari ommaviy ilovaning to'plamiga umuman tushmaydi, o'z domeni va
o'z sessiyasi bo'ladi.

## Kirish

Telegram orqali: panel `login_requests` jadvaliga token yozadi,
foydalanuvchi botda **Start** bosadi (botning webhooki asosiy ilovada),
panel holatni so'rab, tasdiqlangach Telegram id ni ruxsat ro'yxati bilan
solishtiradi.

## Muhit o'zgaruvchilari

| O'zgaruvchi | Nima uchun |
|---|---|
| `SUPABASE_URL` | Baza manzili |
| `SUPABASE_SERVICE_ROLE_KEY` | Bazaga to'liq kirish (faqat serverda) |
| `TELEGRAM_BOT_USERNAME` | Deep-link havolasi uchun |
| `ADMIN_SECRET` | Admin cookie'sini imzolash (kamida 16 belgi) |
| `ADMIN_TELEGRAM_IDS` | Ruxsat berilgan id lar, vergul bilan |
| `ADMIN_API_SECRET` | Asosiy ilovadagi `/api/admin/items` uchun umumiy sir |
| `MAIN_APP_URL` | Asosiy ilova manzili (savol matnlarini olish uchun) |

`ADMIN_API_SECRET` ikkala loyihada bir xil bo'lishi shart.

## Ishga tushirish

```bash
npm install
npm run dev     # http://localhost:3100
```

## Kengaytirish

Ko'rsatkichlar `src/lib/stats.ts` da. Baza 50 000 qatordan oshganda
guruhlash so'rovlarini SQL ko'rinishlariga (view yoki rpc) ko'chirish
kerak — chaqiruv joylari o'zgarmaydi.
