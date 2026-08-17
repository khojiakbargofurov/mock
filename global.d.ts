import type { Locale } from "@/i18n/locales";
import type messages from "./messages/uz.json";

/**
 * Kalitlarni tekshirish uchun: `t("dashboard.title")` da xato bo'lsa
 * TypeScript darhol ogohlantiradi, ish vaqtida "MISSING_MESSAGE" chiqmaydi.
 */
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
  }
}
