# German Mock Test

Nemis tili imtihonlariga tayyorgarlik ilovasi: **rasmiy formatdagi mashq imtihonlari**
(Goethe-Zertifikat A1 · A2, telc Deutsch B1 · B2), mavzuli mashqlar, xatolar daftari
va interval takrorlash bilan lug'at. Interfeys o'zbekcha, topshiriqlar nemischa.

Ishlab chiqarishda: **[prufung.uz](https://prufung.uz)** (Vercel).

> Bu rasmiy Goethe yoki telc imtihoni emas. Rasmiy imtihondan faqat **tuzilma**
> (modullar, Teil'lar soni, topshiriq turlari, vaqt va ball taqsimoti) olingan;
> barcha matn, dialog va topshiriqlar shu loyiha uchun yozilgan.

## Nimalar bor

| Bo'lim | Tavsif |
|---|---|
| **Prüfung** | 28 ta to'liq imtihon — har formatga 7 ta variant, jami 1484 topshiriq: modul taymerlari, Hören uchun 1×/2× o'ynatish qoidasi, Antwortbogen mantiqi, ball hisobi (Goethe: umumiy 60%, telc: yozma va og'zaki alohida 60%) va element bo'yicha tahlil |
| **Übung** | Mavzuli qisqa mashq — 164 savol (A1–B2 × Grammatik / Wortschatz / Leseverstehen / Hörverstehen) |
| **Fehlerbuch** | Ikkala rejim xatolari bir joyda, izohlar va "o'zlashtirdim" belgisi bilan |
| **Wortschatz** | 640 so'z, 32 ta mavzuli to'plam, Leitner qutilari bo'yicha takrorlash |
| **Statistik** | Modul-modul natijalar, ko'nikmalar bo'yicha foizlar, umumiy dinamika |
| **Hisob** | Telegram bot orqali kirish (parolsiz) va bulut bilan sinxron |

Hörverstehen audiosi brauzerning nutq sintezi (Web Speech API) orqali o'qiladi —
har personajga alohida nemis ovozi biriktiriladi.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Zustand · next-intl ·
Supabase (Postgres) · Telegram Bot API

## Ishga tushirish

```bash
npm install
cp .env.example .env.local   # qiymatlarni to'ldiring (pastga qarang)
npm run dev
```

Ilova `http://localhost:3000` da ochiladi. Sozlamalarsiz ham ishlaydi —
u holda ma'lumot faqat brauzerda saqlanadi.

### Muhit o'zgaruvchilari

| O'zgaruvchi | Nima uchun |
|---|---|
| `TELEGRAM_BOT_TOKEN` | @BotFather bergan token (faqat serverda ishlatiladi) |
| `TELEGRAM_BOT_USERNAME` | Bot username'i — kirish havolasi shundan yasaladi |
| `TELEGRAM_WEBHOOK_SECRET` | Webhook so'rovi haqiqiyligini tekshirish uchun |
| `AUTH_SECRET` | Sessiya cookie'sini imzolash (`openssl rand -base64 32`) |
| `SUPABASE_URL` | Supabase loyihasi manzili |
| `SUPABASE_SERVICE_ROLE_KEY` | `service_role` kaliti — **hech qachon brauzerga tushmasligi kerak** |
| `ADMIN_API_SECRET` | `/api/admin/items` uchun umumiy sir — admin panel bilan bir xil bo'lishi shart |

### Ma'lumotlar bazasi

```bash
# Supabase → SQL Editor'da supabase/schema.sql faylini ishga tushiring
npm run db:check    # ulanish, jadvallar va yozish huquqini tekshiradi
```

Ilovada Supabase Auth ishlatilmaydi: foydalanuvchi Telegram orqali taniladi.
Shuning uchun barcha jadvalda RLS yoqilgan va **hech qanday siyosat berilmagan** —
bazaga faqat server `service_role` kaliti bilan kiradi, kim nimani ko'rishini
API yo'llari sessiya cookie'si asosida hal qiladi.

### Telegram bot

```bash
npm run bot:dev   # lokal ishlab chiqish uchun: getUpdates → /api/telegram/webhook
```

Webhook uchun ochiq HTTPS manzil kerak, localhost'da u yo'q — shuning uchun
ishlab chiqishda yuqoridagi skript ishlatiladi. Ishlab chiqarishda:

```bash
curl -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" \
  -d "url=https://<domen>/api/telegram/webhook" \
  -d "secret_token=<TELEGRAM_WEBHOOK_SECRET>"
```

**Kirish oqimi:** brauzer bir martalik token oladi → foydalanuvchi botda "Start"
bosadi → bot tokenni tasdiqlaydi → brauzer imzolangan httpOnly cookie oladi.
Token 5 daqiqada eskiradi va faqat bir marta ishlatiladi.

## Admin panel

`admin/` — **alohida** Next.js loyihasi (Vercel'da ham alohida): foydalanuvchilar,
natijalar va kontent sifati ko'rsatkichlari. Admin kodi ommaviy ilovaning
to'plamiga tushmaydi, o'z cookie'si va o'z imzo kaliti bor. Kirish yana Telegram
orqali, ruxsat `ADMIN_TELEGRAM_IDS` ro'yxati bo'yicha. Batafsil: [`admin/README.md`](admin/README.md).

## Skriptlar

| Buyruq | Nima qiladi |
|---|---|
| `npm run dev` | Ishlab chiqish serveri |
| `npm run build` / `start` | Ishlab chiqarish uchun yig'ish va ishga tushirish |
| `npm run lint` | ESLint |
| `npm run bot:dev` | Telegram botini lokal tinglash |
| `npm run db:check` | Supabase ulanishini tekshirish |

## Tuzilma

```
src/
  app/
    page.tsx      landing (imtihon formatlari, statistika)
    (app)/        asosiy ekranlar (Übersicht, Prüfung, Übung, Fehlerbuch, Wortschatz, Statistik, Profil)
    (auth)/       kirish va ro'yxatdan o'tish
    modul/        imtihon moduli (fokuslangan ekran, yon panelsiz)
    test/         Übung sinovi
    api/          auth, telegram webhook, sync
  components/     ui/ (dizayn tizimi), exam/ (imtihon maydonlari), app-shell
  data/
    questions/    Übung savollari (daraja bo'yicha)
    vocab/        lug'at (daraja bo'yicha)
    exams/        imtihon variantlari (format bo'yicha)
  lib/
    exam/         format spetsifikatsiyasi, ball hisobi, validator
    auth/         sessiya, Telegram tekshiruvi, kirish so'rovlari
    db/           Supabase ulanishi va sinxron
supabase/schema.sql
scripts/          bot tinglovchisi, baza tekshiruvi
admin/            admin panel — alohida Next.js loyihasi
```

Imtihon kontenti spetsifikatsiyaga solishtiriladi: element soni, ball yig'indisi
yoki javob kaliti mos kelmasa, ishlab chiqish rejimida konsolda darhol ko'rinadi
(`src/lib/exam/spec.ts` → `validateSet`).

## Dizayn

"Imtihon daftari" metaforasi: iliq qog'oz fon, quyuq siyoh matn, bitta o'chgan
oxra urg'u. Nemis bayrog'i ranglari ataylab ishlatilmagan. Barcha tokenlar
`src/app/globals.css` da; shriftlar (Bricolage Grotesque, Source Sans 3) loyiha
ichida, `next/font/local` orqali. Komponentlar ko'rgazmasi: `/ui-kit`.
