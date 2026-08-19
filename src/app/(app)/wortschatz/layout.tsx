import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/**
 * Lug'at to'plamlari ro'yxati — sitemapdagi sahifa.
 * Ichkaridagi [set] takrorlash seansi indekslanmaydi (o'z layouti bor).
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.wortschatz");
  return {
    // Shablon shu yerda ham takrorlanadi: oraliq layout oddiy satr
    // bergani zahoti bolalar root layoutdagi "%s · prufung.uz" ni
    // meros olmay qoladi.
    title: { default: t("title"), template: "%s · prufung.uz" },
    description: t("description"),
    alternates: { canonical: "/wortschatz" },
  };
}

export default function WortschatzLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
