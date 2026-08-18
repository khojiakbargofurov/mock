import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Ichki yo'llar va shaxsiy sahifalar indekslanmasin — ular
      // foydalanuvchi ma'lumotiga bog'liq, kraulerga bo'sh ko'rinadi
      disallow: [
        "/api/",
        "/modul/",
        "/result/",
        "/ui-kit",
        "/uebersicht",
        "/statistik",
        "/fehlerbuch",
        "/profil",
        "/test/",
      ],
    },
    sitemap: "https://prufung.uz/sitemap.xml",
    host: "https://prufung.uz",
  };
}
