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

const featureIcons = [
  "clock",
  "sound",
  "book",
  "cards",
  "chart",
  "sync",
] as const;

function FeatureIcon({ name }: { name: (typeof featureIcons)[number] }) {
  const paths = {
    clock: (
      <>
        <circle cx="12" cy="12" r="8.25" />
        <path d="M12 7.5v5l3.25 2" />
      </>
    ),
    sound: (
      <>
        <path d="M5 14.5H2.75v-5H5l4-3.25v11.5L5 14.5Z" />
        <path d="M13 9.25a4 4 0 0 1 0 5.5M15.75 6.75a7.5 7.5 0 0 1 0 10.5" />
      </>
    ),
    book: (
      <>
        <path d="M4 4.25h6.5A2.5 2.5 0 0 1 13 6.75v13H6.5A2.5 2.5 0 0 1 4 17.25v-13Z" />
        <path d="M20 4.25h-4.5A2.5 2.5 0 0 0 13 6.75v13h4.5a2.5 2.5 0 0 0 2.5-2.5v-13Z" />
      </>
    ),
    cards: (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
        <path d="M9 8h6M9 12h6M9 16h3" />
        <path d="M5 17.5H4a2 2 0 0 1-2-2v-10" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19.5V5.25M4 19.5h16" />
        <path d="m7.5 15 3.25-3.25 2.75 2.25L19 7.5" />
        <path d="M15.75 7.5H19v3.25" />
      </>
    ),
    sync: (
      <>
        <path d="M19 8.5A7.5 7.5 0 0 0 6.25 5.75L4 8" />
        <path d="M4 4.5V8h3.5M5 15.5a7.5 7.5 0 0 0 12.75 2.75L20 16" />
        <path d="M20 19.5V16h-3.5" />
      </>
    ),
  };

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-current/15 bg-current/5">
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </svg>
    </span>
  );
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
      <header className="sticky top-0 z-30 border-b border-black/[.06] bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1240px] items-center gap-8 px-5 py-3.5 sm:px-7">
          <Link href="/" aria-label="prufung.uz">
            <Logo />
          </Link>
          <nav className="text-muted-3 hidden items-center gap-1 rounded-full border border-black/[.06] bg-white/65 p-1 text-[14.5px] lg:flex">
            {[
              ["#nima-uchun", t("navWhy")],
              ["#darajalar", t("navLevels")],
              ["#savollar", t("navFaq")],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:bg-sand hover:text-ink rounded-full px-4 py-2 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline-flex">
              <LocaleSwitch compact />
            </span>
            <Link
              href="/login"
              className="text-muted-3 hover:text-ink hidden text-[15px] font-semibold transition-colors sm:inline"
            >
              {t("navLogin")}
            </Link>
            <Link
              href="/register"
              className="bg-ink text-paper rounded-full px-4 py-2.5 text-[14px] font-bold shadow-sm transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90 sm:px-5 sm:text-[14.5px]"
            >
              {t("navStart")} <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="px-3 pt-3 sm:px-5 sm:pt-5">
          <div className="landing-hero relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] bg-ink text-paper sm:rounded-[38px]">
            <span className="landing-hero-orbit" aria-hidden />
            <span className="landing-hero-grid" aria-hidden />

            <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1fr)] gap-12 px-6 pt-14 pb-12 lg:grid-cols-[minmax(0,1.08fr)_430px] lg:items-center lg:gap-16 lg:px-8 lg:pt-20 lg:pb-16">
              <div className="min-w-0 flex flex-col items-start gap-6">
                <span className="rounded-pill flex w-fit items-center gap-[10px] border border-white/15 bg-white/[.07] px-4 py-2 text-[13.5px] font-semibold text-white/75 backdrop-blur">
                  <span className="bg-accent h-[7px] w-[7px] flex-none rounded-full shadow-[0_0_0_5px_rgba(201,138,62,.12)]" />
                  {t("eyebrow")}
                </span>

                <h1 className="font-display m-0 max-w-[15ch] text-[45px] leading-[.98] font-extrabold tracking-[-.045em] text-balance sm:text-[58px] lg:text-[72px]">
                  {t("h1a")} {" "}
                  <span className="landing-accent-mark text-accent relative sm:whitespace-nowrap">
                    {t("h1b")}
                  </span>
                </h1>

                <p className="text-on-dark-soft m-0 max-w-[50ch] text-[17px] leading-[1.6] text-pretty lg:text-[19px]">
                  {t("lede")}
                </p>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="/register"
                    className="bg-accent text-ink ease-out-soft rounded-xl px-8 py-[17px] text-center text-[16.5px] font-extrabold shadow-[0_14px_34px_rgba(0,0,0,.24)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_rgba(0,0,0,.3)]"
                  >
                    {t("ctaPrimary")} <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/uebersicht"
                    className="rounded-xl border border-white/20 bg-white/[.05] px-7 py-[17px] text-center text-[16.5px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {t("ctaSecondary")}
                  </Link>
                </div>

                <span className="flex items-start gap-2 text-[13.5px] leading-[1.45] text-white/45">
                  <span className="mt-[3px] text-accent" aria-hidden>✓</span>
                  {t("ctaNote")}
                </span>
              </div>

              {demo && (
                <div className="landing-demo relative mx-auto min-w-0 w-full max-w-[430px] lg:mx-0">
                  <span className="absolute -inset-3 translate-x-4 translate-y-4 rotate-[2.5deg] rounded-[30px] border border-white/10 bg-white/[.045]" aria-hidden />
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
                </div>
              )}
            </div>

            <dl className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-2 border-t border-white/10 px-6 lg:grid-cols-4 lg:px-8">
              {stats.map(([value, label], index) => (
                <div
                  key={value}
                  className={cn(
                    "flex flex-col gap-2 py-6 pr-5 sm:py-7 lg:px-7",
                    index % 2 === 1 && "border-l border-white/10 pl-5",
                    index > 1 && "border-t border-white/10 lg:border-t-0",
                    index > 0 && "lg:border-l lg:border-white/10",
                    index === 0 && "lg:pl-0",
                  )}
                >
                  <dt className="font-display tnum order-1 text-[30px] leading-none font-extrabold tracking-[-.03em] text-white lg:text-[34px]">
                    {t(value)}<span className="text-accent">+</span>
                  </dt>
                  <dd className="order-2 m-0 max-w-[22ch] text-[12.5px] leading-[1.4] text-white/45 sm:text-[13px]">
                    {t(label)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Format manbasi ───────────────────────────────────── */}
        <section className="bg-paper py-2">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-7 lg:flex-row lg:items-center lg:gap-10">
            <span className="text-muted-2 flex flex-none items-center gap-2 text-[11.5px] font-bold tracking-[.16em] uppercase lg:max-w-[12ch] lg:leading-[1.5]">
              <span className="bg-accent h-1.5 w-1.5 rounded-full" aria-hidden />
              {t("proofOverline")}
            </span>
            <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {formats.map((spec) => (
                <div
                  key={spec.format}
                  className="border-line-soft flex flex-col gap-[3px] rounded-xl border bg-white/60 px-4 py-3.5"
                >
                  <span className="text-[14.5px] font-bold tracking-[-.01em]">
                    {spec.provider === "goethe" ? "Goethe-Institut" : "telc"} ·{" "}
                    {spec.level}
                  </span>
                  <span className="text-muted text-[12.5px] leading-[1.45]">
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
          className="scroll-mt-20 bg-white py-14 lg:py-24"
        >
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-accent text-[11.5px] font-extrabold tracking-[.18em] uppercase">
                  {t("featuresOverline")}
                </span>
                <h2 className="font-display m-0 max-w-[18ch] text-[34px] leading-[1.05] font-extrabold tracking-[-.035em] lg:text-[48px]">
                  {t("featuresTitle")}
                </h2>
              </div>
              <p className="text-muted-3 m-0 max-w-[38ch] text-[16.5px] leading-[1.6] text-pretty">
                {t("featuresBody")}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              {features.map((key, i) => (
                <div
                  key={key}
                  className={cn(
                    "group relative min-h-[220px] overflow-hidden rounded-[26px] border p-6 lg:p-8",
                    "ease-out-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-card",
                    i === 0 && "border-ink bg-ink text-white lg:col-span-7",
                    i === 1 && "border-line bg-paper lg:col-span-5",
                    i > 1 && i < 5 && "border-line bg-white lg:col-span-4",
                    i === 5 && "border-line-strong bg-sand lg:col-span-12 lg:min-h-[190px]",
                  )}
                >
                  <span
                    className={cn(
                      "absolute right-5 bottom-1 font-display text-[84px] leading-none font-extrabold tracking-[-.07em] transition-transform duration-300 group-hover:-translate-y-1",
                      i === 0 ? "text-white/[.045]" : "text-ink/[.035]",
                    )}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={cn("relative z-10 flex h-full flex-col", i === 5 && "lg:flex-row lg:items-end lg:gap-10")}>
                    <div className="flex flex-1 flex-col gap-5">
                      <FeatureIcon name={featureIcons[i]} />
                      <span className="font-display text-[24px] leading-[1.15] font-bold tracking-[-.02em] lg:text-[27px]">
                        {t(`${key}Title`)}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "mt-4 max-w-[46ch] text-[15.5px] leading-[1.6] text-pretty",
                        i === 0 ? "text-white/60" : "text-muted-3",
                        i === 5 && "lg:mt-0 lg:text-[17px]",
                      )}
                    >
                      {t(`${key}Body`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Qanday ishlaydi ──────────────────────────────────── */}
        <section className="bg-paper px-3 py-3 sm:px-5">
          <div className="mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] border border-black/[.06] bg-sand/55 sm:rounded-[38px]">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-6 py-14 lg:py-20">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-muted text-[11.5px] font-bold tracking-[.18em] uppercase">
                    {t("howOverline")}
                  </span>
                  <h2 className="font-display m-0 max-w-[17ch] text-[34px] leading-[1.05] font-extrabold tracking-[-.035em] lg:text-[46px]">
                    {t("howTitle")}
                  </h2>
                </div>
                <p className="text-muted-3 m-0 max-w-[42ch] text-[16.5px] leading-[1.6] text-pretty">
                  {t("howBody")}
                </p>
              </div>

              <ol className="landing-steps m-0 grid list-none gap-3 p-0 lg:grid-cols-3">
                {steps.map((key, i) => (
                  <li
                    key={key}
                    className="border-line group relative flex min-h-[205px] flex-col overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_1px_0_rgba(20,25,31,.03)] lg:p-7"
                  >
                    <span className="bg-accent/15 text-ink font-display flex h-[42px] w-[42px] items-center justify-center rounded-full text-[16px] font-extrabold">
                      0{i + 1}
                    </span>
                    <span className="mt-auto flex flex-col gap-2 pt-8 lg:pt-10">
                      <span className="font-display text-[22px] leading-[1.18] font-bold">
                        {t(`${key}Title`)}
                      </span>
                      <span className="text-muted-3 text-[15.5px] leading-[1.55]">
                        {t(`${key}Body`)}
                      </span>
                    </span>
                    <span className="absolute top-[47px] left-[69px] hidden h-px w-[calc(100%-58px)] bg-line lg:block" aria-hidden />
                  </li>
                ))}
              </ol>

              <Link
                href="/register"
                className="bg-ink text-paper ease-out-soft mx-auto rounded-full px-8 py-[15px] text-[16px] font-bold transition-[transform,opacity] duration-200 hover:-translate-y-[2px] hover:opacity-95"
              >
                {t("ctaPrimary")} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Darajalar ────────────────────────────────────────── */}
        <section id="darajalar" className="scroll-mt-20 bg-white py-14 lg:py-24">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-accent text-[11.5px] font-extrabold tracking-[.18em] uppercase">
                  {t("formatsOverline")}
                </span>
                <h2 className="font-display m-0 max-w-[22ch] text-[34px] leading-[1.05] font-extrabold tracking-[-.035em] lg:text-[46px]">
                  {t("formatsTitle")}
                </h2>
              </div>
              <p className="text-muted-3 m-0 max-w-[50ch] text-[16.5px] leading-[1.6] text-pretty">
                {t("formatsBody")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {formats.map((spec) => {
                const variants = EXAM_SETS.filter(
                  (set) => set.format === spec.format,
                ).length;
                return (
                  <Link
                    key={spec.format}
                    href="/pruefung"
                    className={cn(
                      "group rounded-[26px] flex min-h-[270px] flex-col justify-between overflow-hidden border p-6",
                      "ease-out-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-card",
                      spec.level === "A1" && "border-lvl-a1-bd bg-lvl-a1",
                      spec.level === "A2" && "border-lvl-a2-bd bg-lvl-a2",
                      spec.level === "B1" && "border-lvl-b1-bd bg-lvl-b1",
                      spec.level === "B2" && "border-ink bg-ink text-on-dark",
                    )}
                  >
                    <span className="flex items-start justify-between">
                      <span className="font-display text-[54px] leading-none font-extrabold tracking-[-.055em]">
                        {spec.level}
                      </span>
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border text-[18px] transition-transform duration-300 group-hover:translate-x-1",
                          spec.level === "B2"
                            ? "border-white/15 text-white"
                            : "border-ink/10 text-ink",
                        )}
                      >
                        ↗
                      </span>
                    </span>
                    <span className="flex flex-col gap-3">
                      <span
                        className={cn(
                          "text-[14px] font-bold",
                          spec.level === "B2" ? "text-on-dark-soft" : "text-muted-3",
                        )}
                      >
                        {spec.provider === "goethe" ? "Goethe-Institut" : "telc"} · {variants}×
                      </span>
                      <span className="flex gap-[5px]" aria-hidden>
                        {spec.modules.map((m) => (
                          <span
                            key={m.id}
                            className={cn(
                              "h-[4px] flex-1 rounded-full",
                              spec.level === "B2" ? "bg-accent" : "bg-ink/75",
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
                        {spec.modules.map((m) => m.label).join(" · ")}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Savollar ─────────────────────────────────────────── */}
        <section id="savollar" className="scroll-mt-20 bg-paper">
          <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-14 lg:grid-cols-[360px_minmax(0,1fr)] lg:py-24">
            <div className="flex flex-col gap-4">
              <span className="text-accent text-[11.5px] font-extrabold tracking-[.18em] uppercase">
                {t("faqOverline")}
              </span>
              <h2 className="font-display m-0 text-[34px] leading-[1.06] font-extrabold tracking-[-.035em] lg:text-[44px]">
                {t("faqTitle")}
              </h2>
              <div className="bg-ink text-paper rounded-[22px] mt-3 flex flex-col gap-2 px-6 py-6 shadow-card">
                <span className="text-[15.5px] font-bold tracking-[-.01em]">
                  {t("faqContactTitle")}
                </span>
                <span className="text-on-dark-soft text-[15px] leading-[1.55]">
                  {t("faqContactBody")}
                </span>
                <Link
                  href="/login"
                  className="text-accent mt-2 text-[15px] font-bold transition-opacity hover:opacity-80"
                >
                  {t("faqContactCta")} →
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {faq.map((key, index) => (
                <details
                  key={key}
                  open={index === 0}
                  className="landing-faq border-line group rounded-[22px] border bg-white px-6 py-1"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[19px] font-bold tracking-[-.01em] marker:hidden">
                    {t(`${key}Q`)}
                    <span className="bg-sand font-display flex h-8 w-8 flex-none items-center justify-center rounded-full text-[21px] font-normal transition-transform duration-200 group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="text-muted-3 m-0 max-w-[64ch] border-t border-line-soft pt-4 pb-5 text-[16px] leading-[1.65] text-pretty">
                    {t(`${key}A`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Yakuniy chaqiruv ─────────────────────────────────── */}
        <section className="bg-paper px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="landing-final relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] bg-ink text-on-dark sm:rounded-[38px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center gap-6 px-6 py-20 text-center lg:py-28">
            <span className="text-on-dark-muted text-[12px] tracking-[.18em] uppercase">
              {t("finalOverline")}
            </span>
            <h2 className="font-display m-0 max-w-[19ch] text-[38px] leading-[1.02] font-extrabold tracking-[-.04em] lg:text-[62px]">
              {t("finalTitle")}
            </h2>
            <p className="text-on-dark-soft m-0 max-w-[52ch] text-[17px] leading-[1.6] text-pretty lg:text-[18px]">
              {t("finalBody")}
            </p>
            <div className="flex w-full flex-col gap-[14px] pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="/register"
                className="bg-accent text-ink ease-out-soft rounded-full px-9 py-[19px] text-center text-[17px] font-extrabold transition-[transform,opacity] duration-200 hover:-translate-y-[2px] hover:opacity-95"
              >
                {t("finalCta")}
              </Link>
              <Link
                href="/uebersicht"
                className="text-paper rounded-full border border-white/20 px-8 py-[19px] text-center text-[17px] font-semibold transition-colors hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
            <span className="text-on-dark-dim text-[14.5px]">
              {t("finalNote")}
            </span>
          </div>
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
