import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import {
  DEFAULT_LOCALE,
  isAvailableLocale,
  LOCALE_COOKIE,
} from "@/i18n/locales";

/**
 * Har so'rov uchun til va xabarlar.
 *
 * URL prefiksi (/uz, /de) ishlatilmaydi — til cookie'da saqlanadi, chunki
 * ilova bitta foydalanuvchiga mo'ljallangan va manzillar toza qoladi.
 */
export default getRequestConfig(async () => {
  const store = await cookies();
  const fromCookie = store.get(LOCALE_COOKIE)?.value;
  const locale = isAvailableLocale(fromCookie) ? fromCookie : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
