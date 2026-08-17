import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Maxfiylik siyosati" };

/**
 * Maxfiylik siyosati. Telegram ma'lumotini va o'quv progressini
 * saqlaganimiz uchun zarur — matn sodda va aniq bo'lishi kerak.
 */
export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  const sections = [
    {
      title: t("s1Title"),
      body: t("s1Body"),
      items: [t("s1i1"), t("s1i2"), t("s1i3")],
    },
    { title: t("s2Title"), body: t("s2Body"), items: [] },
    {
      title: t("s3Title"),
      body: t("s3Body"),
      items: [t("s3i1"), t("s3i2")],
    },
    { title: t("s4Title"), body: t("s4Body"), items: [] },
    { title: t("s5Title"), body: t("s5Body"), items: [] },
    { title: t("s6Title"), body: t("s6Body"), items: [] },
  ];

  return (
    <article className="flex flex-col gap-8 py-4">
      <header className="flex flex-col gap-3">
        <span className="text-muted text-[12px] tracking-[.16em] uppercase">
          {t("overline")}
        </span>
        <h1 className="font-display m-0 text-[32px] leading-[1.15] font-bold">
          {t("title")}
        </h1>
        <p className="text-muted-3 m-0 text-[15.5px] leading-[1.6]">
          {t("intro")}
        </p>
      </header>

      <div className="flex flex-col gap-7">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-2">
            <h2 className="font-display m-0 text-[19px] font-bold">
              {section.title}
            </h2>
            <p className="text-slate m-0 text-[15.5px] leading-[1.65]">
              {section.body}
            </p>
            {section.items.length > 0 && (
              <ul className="text-slate m-0 flex list-none flex-col gap-[6px] p-0 pl-1 text-[15.5px]">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent font-bold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="border-line flex flex-col gap-3 border-t pt-6">
        <span className="text-muted-2 text-[13.5px]">{t("updated")}</span>
        <Link href="/" className="text-petrol text-[14.5px] font-semibold">
          ← {t("back")}
        </Link>
      </footer>
    </article>
  );
}
