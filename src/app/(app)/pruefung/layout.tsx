import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/**
 * Formatlar ro'yxati — sitemapdagi sahifa. Root layoutdan sarlavha va
 * canonical meros olmasin: aks holda bosh sahifaning nusxasi bo'lib ko'rinadi.
 * Ichkaridagi [set] segmenti bularni o'z qiymatlari bilan almashtiradi.
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.pruefung");
  return {
    // Shablon shu yerda ham takrorlanadi: oraliq layout oddiy satr
    // bergani zahoti bolalar root layoutdagi "%s · prufung.uz" ni
    // meros olmay qoladi.
    title: { default: t("title"), template: "%s · prufung.uz" },
    description: t("description"),
    alternates: { canonical: "/pruefung" },
  };
}

export default function PruefungLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
