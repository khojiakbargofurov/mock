import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE_URL } from "@/components/json-ld";
import { examSet } from "@/lib/exam/registry";
import { formatSpec, FORMAT_SPECS } from "@/lib/exam/spec";
import type { ExamFormat } from "@/lib/exam/types";

/**
 * [set] segmenti ikki xil manzilni qabul qiladi: format identifikatori
 * ("goethe-a1" — variantlar ro'yxati) va variant identifikatori ("a1-01").
 * Sitemapda faqat format sahifalari bor, shuning uchun sarlavha ham,
 * canonical ham shu ikkitasini ajratib beradi.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ set: string }>;
}): Promise<Metadata> {
  const { set } = await params;

  if (Object.hasOwn(FORMAT_SPECS, set)) {
    const spec = formatSpec(set as ExamFormat);
    return {
      title: spec?.label,
      alternates: { canonical: `/pruefung/${set}` },
    };
  }

  const variant = examSet(set);
  // Noma'lum manzil: sarlavhani almashtirmaymiz (aks holda <title> umuman
  // chiqmaydi) va indeksga ham qo'ymaymiz.
  if (!variant) return { robots: { index: false, follow: false } };

  return {
    title: variant.title,
    alternates: { canonical: `/pruefung/${set}` },
  };
}

export default async function ExamSetLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ set: string }> }>) {
  const { set } = await params;

  // "Bosh sahifa → Prüfung → format" zanjiri faqat indeksga tushadigan
  // format sahifalarida — variant sahifalari sitemapda yo'q.
  if (!Object.hasOwn(FORMAT_SPECS, set)) return children;

  const spec = formatSpec(set as ExamFormat);
  const t = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "prufung.uz", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: t("pruefung"),
              item: `${SITE_URL}/pruefung`,
            },
            { "@type": "ListItem", position: 3, name: spec?.label },
          ],
        }}
      />
      {children}
    </>
  );
}
