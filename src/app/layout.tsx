import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import "./globals.css";

/**
 * Shriftlar loyiha ichida (`src/app/fonts/`) — Google'ga build vaqtida murojaat
 * qilinmaydi, shuning uchun internetsiz ham `next build` ishlaydi.
 *
 * Fayllar — o'zgaruvchan (variable) woff2: bitta fayl butun og'irlik oralig'ini
 * qoplaydi. Nemis (ä ö ü ß) va o'zbek (o‘ g‘) belgilari `latin` to'plamida,
 * shuning uchun faqat shu fayl oldindan yuklanadi; `latin-ext` esa zaxira
 * sifatida CSS shrift stekiga qo'shilgan va kerak bo'lgandagina yuklanadi.
 */
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-bricolage",
  display: "swap",
});

const bricolageExt = localFont({
  src: "./fonts/bricolage-grotesque-latin-ext.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-bricolage-ext",
  display: "swap",
  preload: false,
});

// Kursiv qo'shilmagan: dizaynda ham, ilovada ham kursiv matn yo'q — kerak bo'lsa
// `source-sans-3-italic-*.woff2` faylini qo'shib, bu yerga `style: "italic"` bering.
const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  style: "normal",
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSansExt = localFont({
  src: "./fonts/source-sans-3-latin-ext.woff2",
  weight: "200 900",
  style: "normal",
  variable: "--font-source-sans-ext",
  display: "swap",
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    metadataBase: new URL("https://prufung.uz"),
    title: {
      default: t("title"),
      template: "%s · prufung.uz",
    },
    description: t("description"),
    applicationName: "prufung.uz",
    appleWebApp: {
      capable: true,
      title: "Mock Test",
      statusBarStyle: "default",
    },
    formatDetection: { telephone: false },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: "uz_UZ",
      siteName: "prufung.uz",
      url: "https://prufung.uz",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    // Canonical bu yerda berilmaydi: root layoutdagi qiymatni hamma sahifa
    // meros oladi va barchasi bosh sahifaning nusxasiga aylanib qoladi.
    // Har sahifa o'zining canonical'ini o'zi e'lon qiladi.
  };
}

export const viewport: Viewport = {
  themeColor: "#f6f2eb",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={[
        bricolage.variable,
        bricolageExt.variable,
        sourceSans.variable,
        sourceSansExt.variable,
      ].join(" ")}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/* Sahifa ko'rishlar statistikasi — shaxsiy ma'lumot yig'ilmaydi */}
        <Analytics />
      </body>
    </html>
  );
}
