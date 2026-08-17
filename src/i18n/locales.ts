/**
 * Interfeys tillari.
 *
 * Uchala til uchun ham tarjima tayyor (`messages/*.json`).
 * Diqqat: imtihon topshiriqlari va yo'riqnomalari har qanday tilda
 * nemischa qoladi — rasmiy imtihonda ham shunday.
 */
export const LOCALES = ["uz", "de", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const AVAILABLE_LOCALES: Locale[] = ["uz", "de", "en"];
export const DEFAULT_LOCALE: Locale = "uz";

/** Tilni saqlaydigan cookie — server render shu asosda xabarlarni yuklaydi */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_LABELS: Record<Locale, string> = {
  uz: "O‘zbek",
  de: "Deutsch",
  en: "English",
};

export function isAvailableLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    AVAILABLE_LOCALES.includes(value as Locale)
  );
}
