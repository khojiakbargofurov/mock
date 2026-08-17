import type { Level, MistakeEntry } from "@/lib/types";
import { questionById } from "@/lib/questions";
import { locateExamItem } from "@/lib/exam/registry";
import { formatSpec, moduleSpec } from "@/lib/exam/spec";
import { correctText, promptText } from "@/lib/exam/labels";

/**
 * Fehlerbuch ikki manbadan to'yinadi: mavzuli mashq (Übung) savollari va
 * rasmiy formatdagi imtihon (Prüfung) elementlari. Ikkalasining tuzilishi
 * har xil, shuning uchun ekran uchun umumiy ko'rinish tayyorlanadi.
 */
export interface MistakeView {
  id: string;
  source: "uebung" | "pruefung";
  /** Filtr chipi: Übung'da ko'nikma, Prüfung'da modul nomi */
  category: string;
  /** "A1 · Verbkonjugation" yoki "Goethe A1 · Hören · Teil 2" */
  origin: string;
  /** Eng zaif mavzuni hisoblash uchun: Übung'da mavzu tegi, Prüfung'da Teil */
  topic: string;
  level: Level;
  prompt: string;
  correct: string;
  explanation: string;
  /** Oxirgi marta nima deb javob bergani (matn ko'rinishida) */
  given: string | null;
  wrongCount: number;
  lastWrongAt: number;
  /** Xatolardan mashq yasashga yaroqlimi (faqat Übung savollari) */
  drillable: boolean;
}

export function resolveMistake(entry: MistakeEntry): MistakeView | undefined {
  if (entry.source === "pruefung" && entry.setId) {
    const found = locateExamItem(entry.setId, entry.questionId);
    if (!found) return undefined;

    const spec = formatSpec(found.set.format);
    const label = spec ? moduleSpec(spec, found.moduleId)?.label : undefined;

    return {
      id: entry.questionId,
      source: "pruefung",
      category: label ?? found.moduleId,
      origin: `${spec?.label ?? found.set.format} · ${label ?? found.moduleId} · Teil ${found.teilNr}`,
      topic: `${label ?? found.moduleId} · Teil ${found.teilNr}`,
      level: spec?.level ?? "A1",
      prompt: promptText(found.item),
      correct: correctText(found.item, found.bank),
      explanation: found.item.explanation,
      given: entry.lastChosenText,
      wrongCount: entry.wrongCount,
      lastWrongAt: entry.lastWrongAt,
      drillable: false,
    };
  }

  const question = questionById(entry.questionId);
  if (!question) return undefined;

  return {
    id: entry.questionId,
    source: "uebung",
    category: question.skill,
    origin: `${question.level} · ${question.topic}`,
    topic: question.topic,
    level: question.level,
    prompt: question.prompt,
    correct: question.options[question.correctIndex],
    explanation: question.explanation,
    given: entry.lastChosenText,
    wrongCount: entry.wrongCount,
    lastWrongAt: entry.lastWrongAt,
    drillable: true,
  };
}

/** O'zlashtirilmagan xatolar — eng yangisi birinchi */
export function openMistakes(entries: MistakeEntry[]): MistakeView[] {
  return entries
    .filter((m) => !m.mastered)
    .map(resolveMistake)
    .filter((m): m is MistakeView => m !== undefined)
    .sort((a, b) => b.lastWrongAt - a.lastWrongAt);
}

/**
 * Eng ko'p xato qilingan mavzu — bosh sahifadagi va natija ekranidagi
 * quyuq blok uchun. Ikkala rejim xatolari birga hisoblanadi.
 */
export function weakestTopic(entries: MistakeEntry[]) {
  const tally = new Map<string, { count: number; skill: string }>();

  for (const view of openMistakes(entries)) {
    const cell = tally.get(view.topic) ?? { count: 0, skill: view.category };
    cell.count += view.wrongCount;
    tally.set(view.topic, cell);
  }

  const sorted = [...tally.entries()].sort((a, b) => b[1].count - a[1].count);
  if (sorted.length === 0) return null;
  return {
    topic: sorted[0][0],
    skill: sorted[0][1].skill,
    count: sorted[0][1].count,
  };
}
