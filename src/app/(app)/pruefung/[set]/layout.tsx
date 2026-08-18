import type { Metadata } from "next";
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

export default function ExamSetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
