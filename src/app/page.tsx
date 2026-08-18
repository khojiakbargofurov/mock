import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/app-shell";
import { LocaleSwitch } from "@/components/locale-switch";
import { readSessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { EXAM_SETS } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import { cn } from "@/lib/cn";

/**
 * Kirish sahifasi (landing).
 *
 * Hisobga kirgan foydalanuvchi bu yerda ushlanib qolmaydi — to'g'ridan-to'g'ri
 * boshqaruv paneliga o'tadi.
 */
export default async function LandingPage() {
  const store = await cookies();
  if (readSessionToken(store.get(SESSION_COOKIE)?.value)) {
    redirect("/uebersicht");
  }

  const t = await getTranslations("landing");

  // Har format bir marta: EXAM_SETS da bitta formatga bir nechta variant bor
  const formats = [...new Set(EXAM_SETS.map((set) => set.format))]
    .map((format) => formatSpec(format))
    .filter((spec) => spec !== undefined);

  return (
    <div className="bg-paper flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-3 px-6 py-6">
        <Logo />
        <nav className="flex items-center gap-3 sm:gap-5">
          <LocaleSwitch compact />
          <Link
            href="/login"
            className="text-muted-3 hover:text-ink text-[15px] font-semibold transition-colors"
          >
            {t("navLogin")}
          </Link>
          <Link
            href="/register"
            className="bg-ink text-paper rounded-lg px-5 py-[11px] text-[15px] font-semibold transition-opacity hover:opacity-90"
          >
            {t("navStart")}
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-24 px-6 pt-10 pb-24 lg:gap-32 lg:pt-16">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="flex flex-col gap-7">
          <span className="text-muted text-[12px] tracking-[.18em] uppercase">
            {t("eyebrow")}
          </span>

          <h1 className="font-display m-0 max-w-[18ch] text-[42px] leading-[1.05] font-extrabold lg:text-[64px]">
            {t("h1a")}
            <br />
            <span className="text-accent">{t("h1b")}</span>
          </h1>

          <p className="text-slate m-0 max-w-[54ch] text-[18px] leading-[1.6] lg:text-[20px]">
            {t("lede")}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="bg-ink text-paper rounded-xl px-7 py-[17px] text-[16.5px] font-semibold transition-opacity hover:opacity-90"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/uebersicht"
              className="border-line-btn text-muted-3 hover:bg-sand rounded-xl border px-7 py-[17px] text-[16.5px] font-semibold transition-colors"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          <span className="text-muted-2 text-[14.5px]">{t("ctaNote")}</span>
        </section>

        {/* ── Raqamlar ───────────────────────────────────────────── */}
        <section className="border-line grid grid-cols-2 gap-x-6 gap-y-8 border-y py-9 lg:grid-cols-4">
          {(
            [
              ["stat1", "stat1Label"],
              ["stat2", "stat2Label"],
              ["stat3", "stat3Label"],
              ["stat4", "stat4Label"],
            ] as const
          ).map(([value, label]) => (
            <div key={value} className="flex flex-col gap-[6px]">
              <span className="font-display tnum text-[34px] leading-none font-extrabold lg:text-[40px]">
                {t(value)}
              </span>
              <span className="text-muted text-[14px] leading-[1.4]">
                {t(label)}
              </span>
            </div>
          ))}
        </section>

        {/* ── Imtihon formatlari ─────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-muted text-[12px] tracking-[.16em] uppercase">
              {t("formatsOverline")}
            </span>
            <h2 className="font-display m-0 max-w-[20ch] text-[30px] leading-[1.15] font-bold lg:text-[38px]">
              {t("formatsTitle")}
            </h2>
            <p className="text-muted-3 m-0 max-w-[62ch] text-[16.5px] leading-[1.6]">
              {t("formatsBody")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {formats.map((spec) => (
              <div
                key={spec.format}
                className={cn(
                  "border-line rounded-4xl flex flex-col gap-5 border bg-white px-7 py-6",
                  "ease-out-soft transition-[box-shadow,transform] duration-200",
                  "hover:shadow-card hover:-translate-y-[2px]",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                      {spec.provider === "goethe" ? "Goethe-Institut" : "telc"}
                    </span>
                    <span className="font-display text-[22px] leading-[1.2] font-bold">
                      {spec.label}
                    </span>
                  </div>
                  <span className="bg-sand text-muted-3 rounded-pill flex-none px-[14px] py-[7px] text-[13px] font-bold">
                    {spec.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-[7px]">
                  {spec.modules.map((m) => (
                    <span
                      key={m.id}
                      className="border-line text-muted-3 rounded-pill border px-[12px] py-[5px] text-[12.5px] font-medium"
                    >
                      {m.label} · {Math.round(m.timeSec / 60)}′
                    </span>
                  ))}
                </div>

                <span className="text-muted-2 tnum border-line-soft border-t pt-4 text-[13.5px]">
                  {t("formatMeta", {
                    modules: spec.modules.length,
                    points: spec.totalPoints,
                    pass: spec.passPercent,
                  })}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Qanday ishlaydi ────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-muted text-[12px] tracking-[.16em] uppercase">
              {t("howOverline")}
            </span>
            <h2 className="font-display m-0 max-w-[20ch] text-[30px] leading-[1.15] font-bold lg:text-[38px]">
              {t("howTitle")}
            </h2>
          </div>

          <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
            {(["step1", "step2", "step3"] as const).map((key, i) => (
              <li key={key} className="flex flex-col gap-3">
                <span className="font-display text-accent text-[30px] leading-none font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[19px] font-bold">
                  {t(`${key}Title`)}
                </span>
                <span className="text-muted-3 text-[15.5px] leading-[1.6]">
                  {t(`${key}Body`)}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Imkoniyatlar ───────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-muted text-[12px] tracking-[.16em] uppercase">
              {t("featuresOverline")}
            </span>
            <h2 className="font-display m-0 max-w-[22ch] text-[30px] leading-[1.15] font-bold lg:text-[38px]">
              {t("featuresTitle")}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(
              ["f1", "f2", "f3", "f4", "f5", "f6"] as const
            ).map((key) => (
              <div
                key={key}
                className="bg-sand flex flex-col gap-2 rounded-3xl px-6 py-5"
              >
                <span className="font-display text-[18px] font-bold">
                  {t(`${key}Title`)}
                </span>
                <span className="text-muted-3 text-[15px] leading-[1.6]">
                  {t(`${key}Body`)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Yakuniy chaqiruv ───────────────────────────────────── */}
        <section className="bg-ink text-on-dark rounded-6xl flex flex-col items-start gap-6 px-8 py-12 lg:px-14 lg:py-16">
          <h2 className="font-display m-0 max-w-[20ch] text-[30px] leading-[1.15] font-bold lg:text-[40px]">
            {t("finalTitle")}
          </h2>
          <p className="text-on-dark-soft m-0 max-w-[52ch] text-[16.5px] leading-[1.6]">
            {t("finalBody")}
          </p>
          <Link
            href="/register"
            className="bg-accent text-ink rounded-xl px-7 py-[17px] text-[16.5px] font-bold transition-opacity hover:opacity-90"
          >
            {t("finalCta")}
          </Link>
          <span className="text-on-dark-dim text-[13.5px]">
            {t("finalNote")}
          </span>
        </section>
      </main>

      <footer className="border-line mx-auto flex w-full max-w-[1100px] flex-col gap-4 border-t px-6 py-8">
        <p className="text-muted-2 m-0 max-w-[80ch] text-[13.5px] leading-[1.6]">
          {t("disclaimer")}
        </p>
        <Link
          href="/maxfiylik"
          className="text-petrol text-[13.5px] font-semibold"
        >
          {t("privacyLink")}
        </Link>
      </footer>
    </div>
  );
}
