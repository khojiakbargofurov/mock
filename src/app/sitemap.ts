import type { MetadataRoute } from "next";
import { FORMAT_SPECS } from "@/lib/exam/spec";

const BASE = "https://prufung.uz";

/**
 * Qidiruv tizimlari uchun sahifalar ro'yxati.
 * Imtihon variantlari (28 ta) kiritilmagan — ular bir xil qolipdagi
 * ichki sahifalar, indeksda qiymat bermaydi.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const formats = Object.keys(FORMAT_SPECS).map((format) => ({
    url: `${BASE}/pruefung/${format}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE}/pruefung`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...formats,
    {
      url: `${BASE}/mock`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/wortschatz`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/login`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE}/register`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE}/maxfiylik`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
