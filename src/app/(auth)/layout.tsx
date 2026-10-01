import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LocaleSwitch } from "@/components/locale-switch";
import { Logo } from "@/components/app-shell";

/**
 * Kirish ekranlari uchun alohida sahifa qolipi — yon panel va pastki
 * navigatsiyasiz, markazlashgan bitta ustun.
 */
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("auth");

  return (
    <div className="auth-shell relative flex min-h-screen flex-col overflow-hidden bg-ink text-paper">
      <span className="auth-shell-grid" aria-hidden />
      <span className="auth-shell-orbit" aria-hidden />

      <header className="relative z-20 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-7 lg:px-10 lg:py-7">
        <Link href="/" aria-label="prufung.uz">
          <Logo onDark />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="rounded-full border border-white/10 bg-white/[.06] p-1 backdrop-blur">
            <LocaleSwitch compact />
          </span>
          <Link
            href="/"
            aria-label={t("backToApp")}
            className="flex h-10 items-center justify-center rounded-full border border-white/15 px-3 text-[14px] font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:h-auto sm:px-4 sm:py-2.5"
          >
            <span className="sm:hidden" aria-hidden>←</span>
            <span className="hidden sm:inline">{t("backToApp")}</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-[1180px] flex-1 grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 py-8 sm:px-7 lg:grid-cols-[minmax(0,1fr)_480px] lg:px-8 lg:py-12 xl:gap-24">
        <aside className="hidden max-w-[560px] flex-col items-start gap-7 lg:flex">
          <span className="rounded-pill flex items-center gap-2.5 border border-white/15 bg-white/[.06] px-4 py-2 text-[13px] font-bold text-white/60">
            <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_0_5px_rgba(201,138,62,.12)]" />
            {t("shellEyebrow")}
          </span>
          <h2 className="font-display m-0 max-w-[12ch] text-[58px] leading-[.98] font-extrabold tracking-[-.045em] text-balance xl:text-[68px]">
            {t("shellTitle")}
          </h2>
          <p className="text-on-dark-soft m-0 max-w-[44ch] text-[18px] leading-[1.6] text-pretty">
            {t("shellBody")}
          </p>
          <div className="mt-3 grid w-full max-w-[520px] grid-cols-2 gap-3">
            <div className="rounded-[22px] border border-white/10 bg-white/[.055] px-5 py-5 backdrop-blur">
              <span className="font-display text-[30px] font-extrabold text-accent">28</span>
              <span className="mt-1 block text-[13.5px] text-white/45">{t("shellStat1")}</span>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[.055] px-5 py-5 backdrop-blur">
              <span className="font-display text-[30px] font-extrabold text-accent">1 484</span>
              <span className="mt-1 block text-[13.5px] text-white/45">{t("shellStat2")}</span>
            </div>
          </div>
        </aside>

        <div className="mx-auto w-full max-w-[480px]">{children}</div>
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-5 text-[12.5px] text-white/35 sm:px-7 lg:px-10">
        <span>© 2026 prufung.uz</span>
        <Link href="/maxfiylik" className="transition-colors hover:text-white">
          {t("privacy")}
        </Link>
      </footer>
    </div>
  );
}
