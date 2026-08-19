import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/app-shell";
import { JsonLd, SITE_URL } from "@/components/json-ld";
import { LocaleSwitch } from "@/components/locale-switch";
import { DemoCard, type DemoQuestion } from "@/components/landing/demo-card";
import { readSessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { EXAM_SETS, moduleItems } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import { cn } from "@/lib/cn";

// Bosh sahifa o'zini canonical qiladi: utm parametrlari va boshqa
// variantlar shu manzilga yig'ilsin.
export const metadata: Metadata = { alternates: { canonical: "/" } };

/**
 * Landing demosi uchun savol — haqiqiy imtihon bankidan olinadi.
 * Shu bilan sahifadagi namuna ilovadagi savollardan farq qilmaydi.
 */
const DEMO_ITEM_ID = "b1-sb-021";

function demoQuestion(label: string): DemoQuestion | null {
  for (const set of EXAM_SETS) {
    for (const item of moduleItems(set, "sprachbausteine")) {
      if (item.id !== DEMO_ITEM_ID || item.kind !== "choice") continue;
      return {
        label,
        prompt: item.prompt,
        options: item.options,
        correct: item.correct,
        explanation: item.explanation,
        nr: 1,
        total: 10,
      };
    }
  }
  return null;
}

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
  const meta = await getTranslations("metadata");

  // Har format bir marta: EXAM_SETS da bitta formatga bir nechta variant bor
  const formats = [...new Set(EXAM_SETS.map((set) => set.format))]
    .map((format) => formatSpec(format))
    .filter((spec) => spec !== undefined);

  const demo = demoQuestion("telc B1 · Sprachbausteine");

  const stats = [
    ["stat1", "stat1Label"],
    ["stat2", "stat2Label"],
    ["stat3", "stat3Label"],
    ["stat4", "stat4Label"],
  ] as const;

  const features = ["f1", "f2", "f3", "f4", "f5", "f6"] as const;
  const steps = ["step1", "step2", "step3"] as const;
  const faq = ["faq1", "faq2", "faq3"] as const;

  return (
    <div className="bg-paper flex min-h-screen flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "prufung.uz",
              description: meta("description"),
              inLanguage: ["uz", "de", "en"],
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "prufung.uz",
              url: SITE_URL,
              logo: `${SITE_URL}/icon-512.png`,
              description: meta("description"),
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: faq.map((key) => ({
                "@type": "Question",
                name: t(`${key}Q`),
                acceptedAnswer: { "@type": "Answer", text: t(`${key}A`) },
              })),
            },
          ],
        }}
      />

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header className="border-line sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1180px] items-center gap-8 px-6 py-[14px]">
          <Logo />
          <nav className="text-muted-3 hidden items-center gap-7 text-[15px] lg:flex">
            <a href="#nima-uchun" className="hover:text-ink transition-colors">
              {t("navWhy")}
            </a>
            <a href="#darajalar" className="hover:text-ink transition-colors">
              {t("navLevels")}
            </a>
            <a href="#savollar" className="hover:text-ink transition-colors">
              {t("navFaq")}
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <LocaleSwitch compact />
            <Link
              href="/login"
              className="text-muted-3 hover:text-ink hidden text-[15px] font-semibold transition-colors sm:inline"
            >
              {t("navLogin")}
            </Link>
            <Link
              href="/register"
              className="bg-ink text-paper rounded-md px-[18px] py-[11px] text-[15px] font-semibold transition-opacity hover:opacity-90"
            >
              {t("navStart")}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mx-auto grid w-full max-w-[1180px] gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-center lg:py-[76px]">
          <div className="flex flex-col gap-6">
            <span className="bg-sand border-line-strong text-muted-3 rounded-pill flex w-fit items-center gap-[10px] border px-4 py-2 text-[13.5px] font-semibold">
              <span className="bg-accent h-[7px] w-[7px] flex-none rounded-full" />
              {t("eyebrow")}
            </span>

            <h1 className="font-display m-0 max-w-[19ch] text-[42px] leading-[1.03] font-extrabold tracking-[-.035em] lg:text-[64px]">
              {t("h1a")} <span className="text-accent">{t("h1b")}</span>
            </h1>

            <p className="text-slate m-0 max-w-[48ch] text-[18px] leading-[1.55] text-pretty lg:text-[20px]">
              {t("lede")}
            </p>

            <div className="flex flex-col gap-[14px] sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/register"
                className="bg-ink text-paper ease-out-soft rounded-xl px-8 py-[18px] text-center text-[17px] font-bold shadow-[0_12px_28px_rgba(20,25,31,.18)] transition-[transform,opacity] duration-200 hover:-translate-y-[2px] hover:opacity-95"
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href="/uebersicht"
                className="border-line-btn text-muted-3 hover:bg-sand rounded-xl border-[1.5px] px-7 py-[18px] text-center text-[17px] font-semibold transition-colors"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <span className="text-muted-2 text-[14.5px]">{t("ctaNote")}</span>

            <dl className="border-line-strong m-0 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-7 lg:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={value} className="flex flex-col gap-1">
                  <dt className="font-display tnum order-1 text-[27px] leading-none font-bold tracking-[-.02em]">
                    {t(value)}
                  </dt>
                  <dd className="text-muted order-2 m-0 text-[13.5px] leading-[1.4]">
                    {t(label)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {demo && (
            <DemoCard
              question={demo}
              labels={{
                overline: t("demoOverline"),
                pick: t("demoPick"),
                next: t("demoNext"),
                right: t("demoRight"),
                wrong: t("demoWrong"),
                footnote: t("demoFootnote"),
              }}
            />
          )}
        </section>

        {/* ── Format manbasi ───────────────────────────────────── */}
        <section className="border-line border-y bg-white">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-7 lg:flex-row lg:items-center lg:gap-10">
            <span className="text-muted-2 flex-none text-[12px] tracking-[.16em] uppercase lg:max-w-[10ch] lg:leading-[1.5]">
              {t("proofOverline")}
            </span>
            <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {formats.map((spec) => (
                <div
                  key={spec.format}
                  className="border-line-soft flex flex-col gap-[3px] lg:border-l lg:px-7"
                >
                  <span className="text-[15.5px] font-bold tracking-[-.01em]">
                    {spec.provider === "goethe" ? "Goethe-Institut" : "telc"} ·{" "}
                    {spec.level}
                  </span>
                  <span className="text-muted text-[13.5px] leading-[1.45]">
                    {t("formatMeta", {
                      modules: spec.modules.length,
                      points: spec.totalPoints,
                      pass: spec.passPercent,
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nima uchun (imkoniyatlar) ────────────────────────── */}
        <section
          id="nima-uchun"
          className="scroll-mt-20 bg-white pb-16 lg:pb-20"
        >
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-9 px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <h2 className="font-display m-0 max-w-[22ch] text-[30px] leading-[1.12] font-bold tracking-[-.028em] lg:text-[40px]">
                {t("featuresTitle")}
              </h2>
              <p className="text-muted-3 m-0 max-w-[38ch] text-[16.5px] leading-[1.6] text-pretty">
                {t("featuresBody")}
              </p>
            </div>

            <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {features.map((key, i) => (
                <div
                  key={key}
                  className={cn(
                    "bg-paper border-line rounded-4xl flex flex-col gap-[14px] border px-7 py-[30px]",
                    "ease-out-soft transition-[box-shadow,transform] duration-200",
                    "hover:shadow-card hover:-translate-y-[3px]",
                  )}
                >
                  <span className="font-display text-accent text-[15px] font-bold tracking-[.06em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[22px] leading-[1.22] font-bold tracking-[-.015em]">
                    {t(`${key}Title`)}
                  </span>
                  <span className="text-muted-3 text-[16px] leading-[1.6] text-pretty">
                    {t(`${key}Body`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Qanday ishlaydi ──────────────────────────────────── */}
        <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 py-16 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-center lg:py-20">
          <div className="flex flex-col gap-4">
            <span className="text-muted text-[12px] tracking-[.18em] uppercase">
              {t("howOverline")}
            </span>
            <h2 className="font-display m-0 text-[30px] leading-[1.1] font-bold tracking-[-.028em] lg:text-[36px]">
              {t("howTitle")}
            </h2>
            <p className="text-muted-3 m-0 max-w-[40ch] text-[16.5px] leading-[1.6] text-pretty">
              {t("howBody")}
            </p>
            <Link
              href="/register"
              className="bg-accent text-ink ease-out-soft mt-2 w-fit rounded-lg px-7 py-[17px] text-[16px] font-bold transition-[transform,opacity] duration-200 hover:-translate-y-[2px] hover:opacity-95"
            >
              {t("ctaPrimary")}
            </Link>
          </div>

          <ol className="m-0 flex list-none flex-col gap-3 p-0">
            {steps.map((key, i) => (
              <li
                key={key}
                className="border-line rounded-3xl flex items-center gap-[22px] border bg-white px-7 py-6"
              >
                <span className="bg-ink text-paper font-display flex h-[44px] w-[44px] flex-none items-center justify-center rounded-lg text-[19px] font-bold">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[19px] font-bold">
                    {t(`${key}Title`)}
                  </span>
                  <span className="text-muted-3 text-[16px] leading-[1.5]">
                    {t(`${key}Body`)}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Darajalar ────────────────────────────────────────── */}
        <section id="darajalar" className="bg-sand scroll-mt-20">
          <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center lg:py-20">
            <div className="flex flex-col gap-5">
              <span className="text-muted text-[12px] tracking-[.18em] uppercase">
                {t("formatsOverline")}
              </span>
              <h2 className="font-display m-0 max-w-[24ch] text-[30px] leading-[1.1] font-bold tracking-[-.028em] lg:text-[36px]">
                {t("formatsTitle")}
              </h2>
              <p className="text-muted-3 m-0 max-w-[44ch] text-[16.5px] leading-[1.6] text-pretty">
                {t("formatsBody")}
              </p>
            </div>

            <div className="grid gap-[14px] sm:grid-cols-2">
              {formats.map((spec) => {
                const variants = EXAM_SETS.filter(
                  (set) => set.format === spec.format,
                ).length;
                return (
                  <Link
                    key={spec.format}
                    href="/pruefung"
                    className={cn(
                      "rounded-4xl flex flex-col justify-between gap-6 border px-[26px] py-7",
                      "ease-out-soft transition-[box-shadow,transform] duration-200",
                      "hover:shadow-card hover:-translate-y-[3px]",
                      spec.level === "B2"
                        ? "bg-ink border-ink text-on-dark"
                        : "border-line-strong bg-white",
                    )}
                  >
                    <span className="flex flex-col gap-[5px]">
                      <span className="font-display text-[32px] leading-none font-extrabold tracking-[-.02em]">
                        {spec.level}
                      </span>
                      <span
                        className={cn(
                          "text-[14px]",
                          spec.level === "B2"
                            ? "text-on-dark-soft"
                            : "text-muted-2",
                        )}
                      >
                        {spec.provider === "goethe" ? "Goethe-Institut" : "telc"}
                      </span>
                    </span>
                    <span className="flex flex-col gap-3">
                      <span className="flex gap-[5px]" aria-hidden>
                        {spec.modules.map((m) => (
                          <span
                            key={m.id}
                            className={cn(
                              "h-[5px] flex-1 rounded-full",
                              spec.level === "B2" ? "bg-paper" : "bg-ink",
                            )}
                          />
                        ))}
                      </span>
                      <span
                        className={cn(
                          "tnum text-[13.5px]",
                          spec.level === "B2"
                            ? "text-on-dark-muted"
                            : "text-muted",
                        )}
                      >
                        {spec.modules.map((m) => m.label).join(" · ")} ·{" "}
                        {variants}×
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Savollar ─────────────────────────────────────────── */}
        <section id="savollar" className="scroll-mt-20 bg-white">
          <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 py-16 lg:grid-cols-[360px_minmax(0,1fr)] lg:py-20">
            <div className="flex flex-col gap-4">
              <span className="text-muted text-[12px] tracking-[.18em] uppercase">
                {t("faqOverline")}
              </span>
              <h2 className="font-display m-0 text-[30px] leading-[1.12] font-bold tracking-[-.028em] lg:text-[34px]">
                {t("faqTitle")}
              </h2>
              <div className="bg-paper border-line rounded-3xl mt-2 flex flex-col gap-2 px-[22px] py-5">
                <span className="text-[15.5px] font-bold tracking-[-.01em]">
                  {t("faqContactTitle")}
                </span>
                <span className="text-muted-3 text-[15px] leading-[1.55]">
                  {t("faqContactBody")}
                </span>
                <Link
                  href="/login"
                  className="text-petrol hover:text-accent mt-[2px] text-[15px] font-semibold transition-colors"
                >
                  {t("faqContactCta")} →
                </Link>
              </div>
            </div>

            <dl className="m-0 flex flex-col">
              {faq.map((key) => (
                <div
                  key={key}
                  className="border-line-soft flex flex-col gap-[9px] border-b py-6"
                >
                  <dt className="text-[20px] font-bold tracking-[-.01em]">
                    {t(`${key}Q`)}
                  </dt>
                  <dd className="text-muted-3 m-0 max-w-[64ch] text-[16.5px] leading-[1.6] text-pretty">
                    {t(`${key}A`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Yakuniy chaqiruv ─────────────────────────────────── */}
        <section className="bg-ink text-on-dark">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-6 px-6 py-20 text-center lg:py-24">
            <span className="text-on-dark-muted text-[12px] tracking-[.18em] uppercase">
              {t("finalOverline")}
            </span>
            <h2 className="font-display m-0 max-w-[24ch] text-[32px] leading-[1.08] font-extrabold tracking-[-.032em] lg:text-[52px]">
              {t("finalTitle")}
            </h2>
            <p className="text-on-dark-soft m-0 max-w-[52ch] text-[17px] leading-[1.6] text-pretty lg:text-[18px]">
              {t("finalBody")}
            </p>
            <div className="flex w-full flex-col gap-[14px] pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="/register"
                className="bg-accent text-ink ease-out-soft rounded-xl px-9 py-[20px] text-center text-[17.5px] font-bold transition-[transform,opacity] duration-200 hover:-translate-y-[2px] hover:opacity-95"
              >
                {t("finalCta")}
              </Link>
              <Link
                href="/uebersicht"
                className="text-paper rounded-xl border-[1.5px] border-white/25 px-8 py-[20px] text-center text-[17.5px] font-semibold transition-colors hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
            <span className="text-on-dark-dim text-[14.5px]">
              {t("finalNote")}
            </span>
          </div>
        </section>
      </main>

      <footer className="bg-ink border-t border-white/10">
        <div className="text-on-dark-dim mx-auto flex w-full max-w-[1180px] flex-col gap-5 px-6 py-9">
          <p className="m-0 max-w-[86ch] text-[13.5px] leading-[1.6]">
            {t("disclaimer")}
          </p>
          <div className="flex flex-wrap items-center gap-5 text-[13.5px]">
            <span className="text-on-dark-soft">© 2026 prufung.uz</span>
            <Link
              href="/maxfiylik"
              className="hover:text-paper ml-auto font-semibold transition-colors"
            >
              {t("privacyLink")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
