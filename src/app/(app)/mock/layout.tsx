import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/** Mavzuli mashq (Übung) ro'yxati — sitemapdagi sahifa. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.mock");
  return {
    // Shablon shu yerda ham takrorlanadi: oraliq layout oddiy satr
    // bergani zahoti bolalar root layoutdagi "%s · prufung.uz" ni
    // meros olmay qoladi.
    title: { default: t("title"), template: "%s · prufung.uz" },
    description: t("description"),
    alternates: { canonical: "/mock" },
  };
}

export default function MockLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
