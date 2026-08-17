/**
 * Interfeys tillari.
 *
 * Dizayn profil ekranida uchta tilni ko'rsatadi, lekin hozircha faqat
 * o'zbekcha tarjima tayyor — `AVAILABLE_LOCALES` shuni belgilaydi.
 * `messages/de.json` yoki `messages/en.json` qo'shilgach, shu ro'yxatga
 * kodini qo'shish kifoya, boshqa hech nima o'zgarmaydi.
 */
export const LOCALES = ["uz", "de", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const AVAILABLE_LOCALES: Locale[] = ["uz"];
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
