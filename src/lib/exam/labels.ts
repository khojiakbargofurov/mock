import type { ExamItem } from "@/lib/exam/types";

export type Bank = { key: string; label: string }[] | undefined;

/** Variant kalitini o'qiladigan matnga aylantiradi ("c · Kino") */
export function keyLabel(key: string, bank: Bank): string {
  const entry = bank?.find((b) => b.key === key);
  return entry ? `${key} · ${entry.label}` : key;
}

/** Elementning to'g'ri javobi — natija tahlili va Fehlerbuch uchun */
export function correctText(item: ExamItem, bank: Bank): string {
  switch (item.kind) {
    case "choice":
      return (
        item.options.find((o) => o.key === item.correct)?.label ?? item.correct
      );
    case "zuordnung":
      return keyLabel(item.correct, bank);
    case "gap":
      return item.accept[0];
    default:
      return "—";
  }
}

/** Foydalanuvchi javobining o'qiladigan ko'rinishi */
export function givenText(
  item: ExamItem,
  value: string | undefined,
  bank: Bank,
): string {
  if (!value) return "—";
  if (item.kind === "choice") {
    return item.options.find((o) => o.key === value)?.label ?? value;
  }
  if (item.kind === "zuordnung") return keyLabel(value, bank);
  return value;
}

/** Elementning savol matni (blankada — maydon nomi) */
export function promptText(item: ExamItem): string {
  switch (item.kind) {
    case "choice":
    case "zuordnung":
      return item.prompt;
    case "gap":
      return item.label;
    case "freitext":
      return item.situation;
    case "sprechen":
      // Og'zaki topshiriqda savol matni yo'q — kartochkalar sarlavha bo'ladi
      return item.cards.map((c) => c.label).join(" · ");
  }
}
