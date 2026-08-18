import type { Metadata } from "next";

/**
 * Natija sahifasi shaxsiy va faqat brauzerdagi ma'lumot bilan ma'noli —
 * indekslanmaydi. Canonical ham o'zida qoladi, aks holda [set] layoutdagi
 * qiymat meros bo'lib, natija variant sahifasining nusxasiga aylanadi.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ set: string }>;
}): Promise<Metadata> {
  const { set } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/pruefung/${set}/ergebnis` },
  };
}

export default function ErgebnisLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
