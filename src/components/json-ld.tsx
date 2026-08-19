/**
 * Strukturaviy ma'lumot (schema.org, JSON-LD).
 *
 * Server komponenti: chiqish HTML'iga tushadi, shuning uchun krauler uni
 * JavaScript ishlatmasdan o'qiydi. Ma'lumot faqat sahifada ko'rinib turgan
 * narsani takrorlaydi — Google'ning talabi shunday.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Ma'lumot kodda yoziladi, foydalanuvchi kiritmaydi — JSON.stringify
      // yetarli; `<` belgisi skriptni erta yopmasligi uchun ekranlanadi.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const SITE_URL = "https://prufung.uz";
