import type { Level, VocabCardState, VocabWord } from "@/lib/types";
import { VOCAB_BOX_DAYS, VOCAB_LEARNED_BOX } from "@/lib/types";
import { A1_VOCAB } from "@/data/vocab/a1";
import { A2_VOCAB } from "@/data/vocab/a2";
import { B1_VOCAB } from "@/data/vocab/b1";
import { B2_VOCAB } from "@/data/vocab/b2";

/** Lug'at bazasi — savol bazasi kabi daraja bo'yicha alohida fayllarda */
export const VOCAB_BANK: Record<Level, VocabWord[]> = {
  A1: A1_VOCAB,
  A2: A2_VOCAB,
  B1: B1_VOCAB,
  B2: B2_VOCAB,
};

export const ALL_VOCAB: VocabWord[] = [
  ...A1_VOCAB,
  ...A2_VOCAB,
  ...B1_VOCAB,
  ...B2_VOCAB,
];

export function vocabById(id: string): VocabWord | undefined {
  return ALL_VOCAB.find((w) => w.id === id);
}

/**
 * To'plam manzili: "b1-beruf-bewerbung".
 * Mavzu nomi nemischa bo'lgani uchun umlautlar alohida almashtiriladi —
 * aks holda `encodeURIComponent` manzilni o'qib bo'lmas holga keltiradi.
 */
export function setSlug(level: Level, topic: string): string {
  const ascii = topic
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${level.toLowerCase()}-${ascii}`;
}

export interface VocabSet {
  slug: string;
  level: Level;
  topic: string;
  words: VocabWord[];
}

/** Barcha to'plamlar — daraja tartibida, har darajada mavzular ma'lumotdagi tartibda */
export function vocabSets(level?: Level | null): VocabSet[] {
  const levels: Level[] = level ? [level] : ["A1", "A2", "B1", "B2"];
  const sets: VocabSet[] = [];

  for (const lv of levels) {
    const byTopic = new Map<string, VocabWord[]>();
    for (const word of VOCAB_BANK[lv]) {
      const list = byTopic.get(word.topic) ?? [];
      list.push(word);
      byTopic.set(word.topic, list);
    }
    for (const [topic, words] of byTopic) {
      sets.push({ slug: setSlug(lv, topic), level: lv, topic, words });
    }
  }

  return sets;
}

export function vocabSetBySlug(slug: string): VocabSet | undefined {
  return vocabSets().find((s) => s.slug === slug);
}

/**
 * Mashq manzili: to'plam slugi yoki aralash takrorlash.
 * Aralash takrorlash daraja filtri bilan ham bo'lishi mumkin: "heute-b1".
 */
export const REVIEW_SLUG = "heute";

export function reviewSlug(level?: Level | null) {
  return level ? `${REVIEW_SLUG}-${level.toLowerCase()}` : REVIEW_SLUG;
}

export interface VocabTarget {
  slug: string;
  /** To'plam mavzusi; aralash takrorlashda null */
  topic: string | null;
  level: Level | null;
  words: VocabWord[];
}

export function resolveTarget(slug: string): VocabTarget | undefined {
  if (slug === REVIEW_SLUG) {
    return { slug, topic: null, level: null, words: ALL_VOCAB };
  }

  const mixed = /^heute-(a1|a2|b1|b2)$/.exec(slug);
  if (mixed) {
    const level = mixed[1].toUpperCase() as Level;
    return { slug, topic: null, level, words: VOCAB_BANK[level] };
  }

  const set = vocabSetBySlug(slug);
  if (!set) return undefined;
  return { slug, topic: set.topic, level: set.level, words: set.words };
}

/* ── Leitner mantiqi ────────────────────────────────────────────────────── */

/**
 * So'z takrorlash vaqti kelganmi?
 * Hali ko'rilmagan so'z ham "vaqti kelgan" hisoblanadi — mashq shundan boshlanadi.
 * `now === 0` (server render) bo'lsa hech narsa muddati o'tgan deb belgilanmaydi.
 */
export function isDue(state: VocabCardState | undefined, now: number): boolean {
  if (!state) return true;
  if (now === 0) return false;
  const days = VOCAB_BOX_DAYS[state.box] ?? VOCAB_BOX_DAYS.at(-1)!;
  return now - state.lastReviewedAt >= days * 86_400_000;
}

export function isLearned(state: VocabCardState | undefined): boolean {
  return (state?.box ?? 0) >= VOCAB_LEARNED_BOX;
}

export interface SetStats {
  total: number;
  /** Hech qachon ko'rilmagan */
  fresh: number;
  /** Boshlangan, lekin hali o'zlashtirilmagan */
  learning: number;
  learned: number;
  due: number;
  /** O'zlashtirilganlar ulushi — progress bar uchun */
  percent: number;
}

export function setStats(
  words: VocabWord[],
  vocab: Record<string, VocabCardState>,
  now: number,
): SetStats {
  let fresh = 0;
  let learned = 0;
  let due = 0;

  for (const word of words) {
    const state = vocab[word.id];
    if (!state) fresh += 1;
    else if (isLearned(state)) learned += 1;
    if (isDue(state, now)) due += 1;
  }

  return {
    total: words.length,
    fresh,
    learning: words.length - fresh - learned,
    learned,
    due,
    percent: words.length ? Math.round((learned / words.length) * 100) : 0,
  };
}

/**
 * Mashq navbati: avval takrorlash muddati kelganlar (eng uzoq kutganlar oldinda),
 * ular tugasa — qolgan so'zlar takroriy ko'rish uchun qo'shiladi.
 */
export function buildQueue(
  words: VocabWord[],
  vocab: Record<string, VocabCardState>,
  now: number,
  size: number,
): VocabWord[] {
  const weight = (word: VocabWord) => {
    const state = vocab[word.id];
    if (!state) return -1; // yangi so'z birinchi
    return state.lastReviewedAt;
  };

  const due = words
    .filter((w) => isDue(vocab[w.id], now))
    .sort((a, b) => weight(a) - weight(b));

  if (due.length >= size) return due.slice(0, size);

  const rest = words
    .filter((w) => !isDue(vocab[w.id], now))
    .sort((a, b) => (vocab[a.id]?.box ?? 0) - (vocab[b.id]?.box ?? 0));

  return [...due, ...rest].slice(0, size);
}
