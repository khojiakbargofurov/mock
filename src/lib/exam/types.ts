import type { Level } from "@/lib/types";

/**
 * Rasmiy imtihon formatlari.
 * A1/A2 — Goethe-Zertifikat, B1/B2 — telc Deutsch.
 */
export type ExamFormat = "goethe-a1" | "goethe-a2" | "telc-b1" | "telc-b2";

export type Provider = "goethe" | "telc";

/** Modul — imtihonning mustaqil qismi (Goethe’da 4 ta, telc’da 5 ta) */
export type ModuleId =
  | "hoeren"
  | "lesen"
  | "sprachbausteine"
  | "schreiben"
  | "sprechen";

/**
 * Topshiriq turlari — har Teil bitta turga ega.
 * - `mc`            : a/b/c (yoki a/b) variantlardan bittasi
 * - `richtig-falsch`: bayonot to'g'ri/noto'g'ri (ja/nein ham shu tur)
 * - `zuordnung`     : umumiy variantlar bankidan mos keluvchisini tanlash, har biri bir marta
 * - `formular`      : blankadagi bo'sh joylarni yozib to'ldirish
 * - `freitext`      : SMS / xat / matn yozish (mezon bo'yicha baholanadi)
 * - `sprechen`      : og'zaki topshiriq (kartochka + yozib olish)
 */
export type TaskType =
  | "mc"
  | "richtig-falsch"
  | "zuordnung"
  | "formular"
  | "freitext"
  | "sprechen";

/* ── Stimul (matn, e'lon, audio) ────────────────────────────────────────── */

export interface AudioLine {
  /** Ovoz turi — TTS shunga qarab ovoz tanlaydi */
  voice: "narrator" | "male" | "female" | "male2" | "female2";
  text: string;
}

export type Stimulus =
  /** Bitta matn: xat, email, qisqa xabar */
  | { kind: "text"; title?: string; body: string }
  /** E'lonlar/lavhalar to'plami — zuordnung yoki tanlov uchun */
  | { kind: "anzeigen"; entries: { key: string; title?: string; body: string }[] }
  /** Ko'cha/bino lavhasi — A1 Lesen Teil 3 */
  | { kind: "aushang"; ort: string; body: string }
  /** Audio — ekranda matn ko'rsatilmaydi, TTS o'qiydi */
  | { kind: "audio"; situation?: string; lines: AudioLine[] }
  /** To'ldiriladigan blanka */
  | {
      kind: "formular";
      title: string;
      rows: { label: string; value?: string; gapId?: string }[];
    };

/* ── Elementlar (baholanadigan birliklar) ───────────────────────────────── */

interface ItemBase {
  id: string;
  /** Imtihon varaqasidagi tartib raqami (modul bo'ylab uzluksiz) */
  nr: number;
  points: number;
  /** Nima uchun shunday — natija tahlilida ko'rsatiladi */
  explanation: string;
}

export interface ChoiceItem extends ItemBase {
  kind: "choice";
  prompt: string;
  options: { key: string; label: string }[];
  correct: string;
}

export interface ZuordnungItem extends ItemBase {
  kind: "zuordnung";
  prompt: string;
  /** Teil bankidagi kalit; javob topilmasa "x" */
  correct: string;
}

export interface GapItem extends ItemBase {
  kind: "gap";
  label: string;
  /** Qabul qilinadigan javoblar (kichik harfga keltirilib solishtiriladi) */
  accept: string[];
}

/** Mezon bo'yicha baholanadigan topshiriq (Schreiben / Sprechen) */
export interface RubricCriterion {
  id: string;
  label: string;
  /** Foydalanuvchi o'zini tekshiradigan savol */
  question: string;
  points: number;
}

export interface FreitextItem extends ItemBase {
  kind: "freitext";
  situation: string;
  /** Matnda albatta yoritilishi kerak bo'lgan nuqtalar */
  bullets: string[];
  minWords: number;
  maxWords: number;
  /** Namunaviy javob — baholashda ko'rsatiladi */
  sample: string;
  criteria: RubricCriterion[];
}

export interface SprechenItem extends ItemBase {
  kind: "sprechen";
  /** Kartochkalar: so'z yoki rasm nomi */
  cards: { key: string; label: string; hint?: string }[];
  /** Tayyorgarlik va gapirish vaqti (soniya) */
  prepSec: number;
  speakSec: number;
  sample: string;
  criteria: RubricCriterion[];
}

export type ExamItem =
  | ChoiceItem
  | ZuordnungItem
  | GapItem
  | FreitextItem
  | SprechenItem;

/* ── Tuzilma: Modul → Teil → Blok → Element ─────────────────────────────── */

/**
 * Blok — bitta stimul va unga tegishli elementlar.
 * Hören Teil 1 da har elementga alohida audio (har blokda 1 element),
 * Lesen Teil 1 da esa bitta xatga bir necha bayonot to'g'ri keladi.
 */
export interface ExamBlock {
  id: string;
  stimulus?: Stimulus;
  items: ExamItem[];
}

export interface ExamTeil {
  nr: number;
  taskType: TaskType;
  /** Rasmiy nemischa yo'riqnoma */
  instruction: string;
  /** O'zbekcha qisqa izoh — rasmiy imtihonda bo'lmaydi, mashq uchun */
  hint?: string;
  /** Zuordnung uchun umumiy variantlar banki */
  bank?: { key: string; label: string }[];
  /** Audio necha marta o'ynaydi (Hören) */
  playCount?: 1 | 2;
  /** Namuna (Beispiel) — baholanmaydi */
  example?: { prompt: string; answer: string };
  blocks: ExamBlock[];
}

export interface ExamModule {
  id: ModuleId;
  teile: ExamTeil[];
}

export interface ExamSet {
  /** Manzilda ishlatiladi: "goethe-a1-01" */
  id: string;
  format: ExamFormat;
  /** Variant nomi — "Modellsatz 01" */
  title: string;
  modules: ExamModule[];
}

/* ── Format spetsifikatsiyasi (kontent shunga solishtiriladi) ───────────── */

export interface TeilSpec {
  nr: number;
  taskType: TaskType;
  itemCount: number;
  playCount?: 1 | 2;
}

export interface ModuleSpec {
  id: ModuleId;
  /** Rasmiy nom — ekranda shu ko'rinadi */
  label: string;
  timeSec: number;
  /** Modul ichidagi maksimal xom ball */
  rawMax: number;
  /** Umumiy natijadagi og'irlik (Goethe A1: har modul 25) */
  weighted: number;
  teile: TeilSpec[];
}

export interface FormatSpec {
  format: ExamFormat;
  provider: Provider;
  level: Level;
  /** To'liq nom: "Goethe-Zertifikat A1 · Start Deutsch 1" */
  label: string;
  totalPoints: number;
  /** O'tish chegarasi (foizda) */
  passPercent: number;
  /**
   * O'tish qoidasi:
   * - `gesamt`  — umumiy ball bo'yicha (Goethe A1/A2)
   * - `separat` — yozma va og'zaki qism alohida-alohida (telc)
   */
  passRule: "gesamt" | "separat";
  modules: ModuleSpec[];
}

/** Goethe baholash shkalasi — barcha formatlarda bir xil */
export const PRAEDIKATE = [
  { min: 90, label: "sehr gut" },
  { min: 80, label: "gut" },
  { min: 70, label: "befriedigend" },
  { min: 60, label: "ausreichend" },
  { min: 0, label: "nicht bestanden" },
] as const;

export function praedikat(percent: number) {
  return PRAEDIKATE.find((p) => percent >= p.min)!.label;
}
