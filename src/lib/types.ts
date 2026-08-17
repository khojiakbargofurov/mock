/** CEFR darajalari — dizaynda A1–B2 */
export type Level = "A1" | "A2" | "B1" | "B2";

/** Dizayndagi 4 ta ko'nikma (natija ekranidagi "Bo'limlar bo'yicha") */
export type Skill =
  | "Grammatik"
  | "Wortschatz"
  | "Leseverstehen"
  | "Hörverstehen";

/**
 * Savol turlari.
 * - `luecke`   — "Ergänzen Sie": jumlada bo'sh joy, 4 variant (dizayndagi asosiy tur)
 * - `wahl`     — oddiy ko'p tanlovli (lug'at, ma'no)
 * - `lesen`    — matn o'qib, savolga javob berish
 * - `hoeren`   — TTS bilan o'qiladigan matnni tinglab javob berish
 */
export type QuestionKind = "luecke" | "wahl" | "lesen" | "hoeren";

export interface Question {
  id: string;
  level: Level;
  skill: Skill;
  kind: QuestionKind;
  /** Mavzu tegi — Fehlerbuch va "eng zaif mavzu" tahlili uchun */
  topic: string;
  /** Ko'rsatma: "Ergänzen Sie", "Wählen Sie das passende Wort" */
  instruction: string;
  /** Savol matni. `luecke` turida bo'sh joy `___` bilan belgilanadi. */
  prompt: string;
  /** Qo'shimcha yo'riqnoma (dizaynda: "Bitte wählen Sie die passende Präposition.") */
  note?: string;
  options: string[];
  correctIndex: number;
  /** Nima uchun shunday — Fehlerbuch va feedback blokida ko'rsatiladi */
  explanation: string;
  /** Lesen/Hören uchun matn. Hören'da bu TTS orqali o'qiladi, ekranda ko'rinmaydi. */
  passage?: string;
}

export interface AnswerRecord {
  questionId: string;
  chosenIndex: number | null;
  isCorrect: boolean;
  flagged: boolean;
  timeSpentSec: number;
}

export interface Attempt {
  id: string;
  level: Level;
  /** null = aralash (to'liq mock test) */
  skill: Skill | null;
  title: string;
  startedAt: number;
  finishedAt: number;
  durationSec: number;
  score: number;
  correctCount: number;
  total: number;
  answers: AnswerRecord[];
}

export interface MistakeEntry {
  /** Übung savoli yoki imtihon elementining id si */
  questionId: string;
  /**
   * Qaysi rejimdan tushgan. Eski yozuvlarda bu maydon yo'q —
   * shunda "uebung" deb qaraladi.
   */
  source?: "uebung" | "pruefung";
  /** Faqat imtihon elementlari uchun: qaysi variantdan */
  setId?: string;
  wrongCount: number;
  lastWrongAt: number;
  mastered: boolean;
  /**
   * Oxirgi marta nima deb javob bergan (matn ko'rinishida).
   * Indeks emas — variantlar har sinovda aralashtiriladi.
   */
  lastChosenText: string | null;
}

/* ── Wortschatz (lug'at) ────────────────────────────────────────────────── */

/** So'z turkumi — kartochkada nishon sifatida ko'rsatiladi */
export type VocabKind =
  | "Nomen"
  | "Verb"
  | "Adjektiv"
  | "Adverb"
  | "Wendung";

export interface VocabWord {
  id: string;
  level: Level;
  /** To'plam nomi — Themen bo'yicha guruhlash (dizayndagi chip filtri) */
  topic: string;
  kind: VocabKind;
  /** Bosh shakl, ot bo'lsa artikl bilan: "die Bewerbung" */
  term: string;
  /** Ko'plik yoki fe'lning asosiy shakllari: "die Bewerbungen" · "bewarb — hat beworben" */
  forms?: string;
  /** O'zbekcha ma'nosi */
  meaning: string;
  /** Namuna gap — TTS shuni o'qiydi */
  example: string;
  exampleUz: string;
}

/**
 * Bitta so'zning o'zlashtirish holati — Leitner qutilari.
 * Qutining raqami qanchalik baland bo'lsa, takrorlash oralig'i shuncha uzoq.
 */
export interface VocabCardState {
  box: number;
  lastReviewedAt: number;
  correct: number;
  wrong: number;
}

/** Har quti uchun takrorlash oralig'i (kun). Oxirgi quti — o'zlashtirilgan. */
export const VOCAB_BOX_DAYS = [0, 1, 3, 7, 16, 35];

/** Shu qutidan boshlab so'z "o'zlashtirilgan" hisoblanadi */
export const VOCAB_LEARNED_BOX = 4;

/** Bitta mashqda ko'rsatiladigan kartochkalar soni */
export const VOCAB_SESSION_SIZE = 12;

export interface UserSettings {
  timeLimit: boolean;
  instantFeedback: boolean;
  dailyReminder: boolean;
  focusMode: boolean;
  uiLang: "uz" | "de" | "en";
}

export type Goal = "studium" | "arbeit" | "alltag";

export interface Profile {
  firstName: string;
  lastName: string;
  targetLevel: Level;
  goal: Goal | null;
  /** ISO sana — dizayndagi "Prüfungstermin 24 Sept" */
  examDate: string | null;
  streak: number;
  settings: UserSettings;
  onboarded: boolean;
}

export const LEVELS: Level[] = ["A1", "A2", "B1", "B2"];

export const LEVEL_NAMES: Record<Level, string> = {
  A1: "Anfänger",
  A2: "Grundlagen",
  B1: "Mittelstufe",
  B2: "Fortgeschritten",
};

export const SKILLS: Skill[] = [
  "Grammatik",
  "Wortschatz",
  "Leseverstehen",
  "Hörverstehen",
];

/** Dizayndagi o'tish balli */
export const PASS_SCORE = 60;

export const GOAL_LABELS: Record<Goal, { title: string; body: string }> = {
  studium: {
    title: "Studium in Deutschland",
    body: "TestDaF / DSH yo‘nalishi · akademik lug‘at, uzun matnlar",
  },
  arbeit: {
    title: "Arbeit & Beruf",
    body: "Ish suhbati, rasmiy xatlar, telefon muloqoti",
  },
  alltag: {
    title: "Alltag & Umzug",
    body: "Kundalik muloqot, hujjatlar, Behörde bilan ishlash",
  },
};

export function initials(first: string, last: string) {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

/** 492 → "08:12" */
export function formatClock(secs: number) {
  const s = Math.max(0, Math.floor(secs));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
