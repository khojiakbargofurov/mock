/**
 * Salomlashuv kaliti — matnning o'zi `messages/*.json` dagi `greeting` bo'limida.
 * Dizaynda: "Guten Morgen / Guten Tag / Guten Abend".
 */
export function greetingKey(date = new Date()): "morning" | "day" | "evening" {
  const h = date.getHours();
  if (h < 11) return "morning";
  if (h < 17) return "day";
  return "evening";
}

/** 1723600000000 → "14 Aug" (dizayndagi tarix ko'rinishi) */
export function formatDay(ts: number) {
  return new Date(ts).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "short",
  });
}

/** 1864 → "31:04" */
export function formatDuration(secs: number) {
  const s = Math.max(0, Math.round(secs));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
