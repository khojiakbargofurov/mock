import type { Metadata } from "next";

/**
 * Takrorlash seansi — foydalanuvchining Leitner qutilariga bog'liq, kraulerga
 * mazmun bermaydi. Indekslanmaydi va ota-layoutning canonical'ini ham
 * meros olmaydi (aks holda /wortschatz ning nusxasi bo'lib ko'rinardi).
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function VocabSetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
