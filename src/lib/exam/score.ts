import type {
  ExamItem,
  ExamSet,
  FormatSpec,
  ModuleId,
  ModuleSpec,
} from "@/lib/exam/types";
import { praedikat } from "@/lib/exam/types";
import { formatSpec, isOral } from "@/lib/exam/spec";
import { moduleItems } from "@/lib/exam/registry";

/**
 * Foydalanuvchi javoblari.
 * - `values` — variant kaliti (choice/zuordnung) yoki yozilgan matn (gap/freitext)
 * - `rubric` — Schreiben/Sprechen uchun o'zini baholashda belgilangan mezonlar
 */
export interface ExamAnswers {
  values: Record<string, string>;
  rubric: Record<string, string[]>;
}

export function emptyAnswers(): ExamAnswers {
  return { values: {}, rubric: {} };
}

/** Blankadagi javobni solishtirish uchun: kichik harf, ortiqcha belgilarsiz */
function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,;:!?"'()]/g, "")
    .replace(/\s+/g, " ");
}

/** Element bo'yicha olingan ball */
export function itemScore(item: ExamItem, answers: ExamAnswers): number {
  switch (item.kind) {
    case "choice":
    case "zuordnung":
      return answers.values[item.id] === item.correct ? item.points : 0;

    case "gap": {
      const given = answers.values[item.id];
      if (!given) return 0;
      return item.accept.some((a) => normalize(a) === normalize(given))
        ? item.points
        : 0;
    }

    // Schreiben va Sprechen — mezonlar bo'yicha (hozircha o'zini baholash)
    case "freitext":
    case "sprechen": {
      const checked = answers.rubric[item.id] ?? [];
      return item.criteria
        .filter((c) => checked.includes(c.id))
        .reduce((n, c) => n + c.points, 0);
    }
  }
}

/** Element javob berilganmi (natijada "javobsiz" ni ajratish uchun) */
export function isAnswered(item: ExamItem, answers: ExamAnswers): boolean {
  if (item.kind === "freitext" || item.kind === "sprechen") {
    return Boolean(answers.values[item.id]?.trim());
  }
  return Boolean(answers.values[item.id]);
}

export interface ModuleResult {
  id: ModuleId;
  label: string;
  raw: number;
  rawMax: number;
  /** Umumiy natijadagi ball (Goethe A1: 25 dan) */
  weighted: number;
  weightedMax: number;
  percent: number;
  /** Mezon bo'yicha baholanadigan modul — natija foydalanuvchi bahosiga tayanadi */
  selfAssessed: boolean;
}

export interface ExamResult {
  setId: string;
  format: string;
  modules: ModuleResult[];
  points: number;
  maxPoints: number;
  percent: number;
  praedikat: string;
  passed: boolean;
  /** telc uchun: yozma va og'zaki qism alohida hisoblanadi */
  writtenPercent?: number;
  oralPercent?: number;
}

function scoreModule(
  set: ExamSet,
  spec: ModuleSpec,
  answers: ExamAnswers,
): ModuleResult {
  const items = moduleItems(set, spec.id);
  const raw = items.reduce((n, item) => n + itemScore(item, answers), 0);
  const ratio = spec.rawMax > 0 ? raw / spec.rawMax : 0;

  return {
    id: spec.id,
    label: spec.label,
    raw,
    rawMax: spec.rawMax,
    weighted: Math.round(ratio * spec.weighted * 10) / 10,
    weightedMax: spec.weighted,
    percent: Math.round(ratio * 100),
    selfAssessed: items.some(
      (i) => i.kind === "freitext" || i.kind === "sprechen",
    ),
  };
}

export function scoreExam(set: ExamSet, answers: ExamAnswers): ExamResult {
  const spec = formatSpec(set.format) as FormatSpec;
  const modules = spec.modules.map((ms) => scoreModule(set, ms, answers));

  const points = modules.reduce((n, m) => n + m.weighted, 0);
  const maxPoints = modules.reduce((n, m) => n + m.weightedMax, 0);
  const percent = maxPoints ? Math.round((points / maxPoints) * 100) : 0;

  // telc: yozma va og'zaki qism alohida-alohida 60% dan o'tishi shart
  const written = modules.filter((m) => !isOral(m.id));
  const oral = modules.filter((m) => isOral(m.id));
  const share = (list: ModuleResult[]) => {
    const max = list.reduce((n, m) => n + m.weightedMax, 0);
    const got = list.reduce((n, m) => n + m.weighted, 0);
    return max ? Math.round((got / max) * 100) : 0;
  };

  const writtenPercent = share(written);
  const oralPercent = share(oral);

  const passed =
    spec.passRule === "separat"
      ? writtenPercent >= spec.passPercent && oralPercent >= spec.passPercent
      : percent >= spec.passPercent;

  return {
    setId: set.id,
    format: set.format,
    modules,
    points: Math.round(points * 10) / 10,
    maxPoints,
    percent,
    praedikat: praedikat(percent),
    passed,
    ...(spec.passRule === "separat" ? { writtenPercent, oralPercent } : {}),
  };
}
