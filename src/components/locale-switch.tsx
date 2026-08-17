"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  AVAILABLE_LOCALES,
  LOCALE_COOKIE,
  LOCALE_LABELS,
  type Locale,
} from "@/i18n/locales";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/cn";

/**
 * Interfeys tilini almashtiradi.
 *
 * Til cookie'da saqlanadi, chunki uni server render paytida bilish kerak.
 * Profil sozlamasiga ham yoziladi — shunda tanlov hisob bilan birga
 * boshqa qurilmaga ham o'tadi.
 */
/** Tilni cookie'ga yozadi — server render shu asosda xabarlarni tanlaydi */
function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LocaleSwitch({ compact }: { compact?: boolean }) {
  const router = useRouter();
  const current = useLocale();

  const choose = (locale: Locale) => {
    if (locale === current) return;
    rememberLocale(locale);
    useApp.getState().setSetting("uiLang", locale);
    router.refresh();
  };

  return (
    <div className={cn("flex flex-wrap", compact ? "gap-1" : "gap-[9px]")}>
      {AVAILABLE_LOCALES.map((locale) => {
        const on = locale === current;
        return (
          <button
            key={locale}
            type="button"
            aria-pressed={on}
            onClick={() => choose(locale)}
            className={cn(
              "cursor-pointer font-semibold transition-colors duration-[180ms]",
              compact
                ? "rounded-md px-[10px] py-[6px] text-[13px]"
                : "rounded-md border-[1.5px] px-[18px] py-[11px] text-[15px]",
              on
                ? compact
                  ? "bg-sand text-ink"
                  : "bg-ink border-ink text-paper"
                : compact
                  ? "text-muted-2 hover:text-ink"
                  : "border-line-strong text-muted-3 hover:bg-sand bg-white",
            )}
          >
            {compact ? locale.toUpperCase() : LOCALE_LABELS[locale]}
          </button>
        );
      })}
    </div>
  );
}
