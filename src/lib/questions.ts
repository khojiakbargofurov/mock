import type { Level, Question, Skill } from "@/lib/types";
import { A1_QUESTIONS } from "@/data/questions/a1";
import { A2_QUESTIONS } from "@/data/questions/a2";
import { B1_QUESTIONS } from "@/data/questions/b1";
import { B2_QUESTIONS } from "@/data/questions/b2";

/**
 * Savol bazasi. Har daraja alohida faylda — kontent o'sib borganda
 * shu yerga yangi import qo'shiladi, qolgan kod o'zgarmaydi.
 */
export const QUESTION_BANK: Record<Level, Question[]> = {
  A1: A1_QUESTIONS,
  A2: A2_QUESTIONS,
  B1: B1_QUESTIONS,
  B2: B2_QUESTIONS,
};

export function questionById(id: string): Question | undefined {
  for (const level of Object.keys(QUESTION_BANK) as Level[]) {
    const q = QUESTION_BANK[level].find((x) => x.id === id);
    if (q) return q;
  }
  return undefined;
}

/** Daraja bo'yicha nechta savol bor — dashboardda "qulflangan" holatini aniqlaydi */
export function questionCount(level: Level, skill?: Skill | null) {
  const pool = QUESTION_BANK[level];
  return skill ? pool.filter((q) => q.skill === skill).length : pool.length;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Variantlarni aralashtiradi va to'g'ri javob indeksini yangilaydi.
 *
 * Savol bazasida to'g'ri javob ko'pincha birinchi o'rinda yoziladi —
 * shuning uchun tartib har sinovda qayta chiziladi, aks holda "A ni tanla"
 * strategiyasi ishlab ketardi.
 */
export function shuffleOptions(q: Question): Question {
  const order = shuffle(q.options.map((_, i) => i));
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    correctIndex: order.indexOf(q.correctIndex),
  };
}

/**
 * Sinov to'plamini yig'adi.
 * `skill` null bo'lsa — to'liq mock test: har bo'limdan teng ulush olinadi,
 * shunda natija ekranidagi "Bo'limlar bo'yicha" tahlili mazmunli bo'ladi.
 *
 * DIQQAT: Math.random ishlatilgani uchun faqat brauzerda (effekt ichida) chaqiring,
 * aks holda SSR bilan hydration mos kelmaydi.
 */
export function buildTest(
  level: Level,
  skill: Skill | null,
  count = 12,
): Question[] {
  const pool = QUESTION_BANK[level];
  if (pool.length === 0) return [];

  if (skill) {
    return shuffle(pool.filter((q) => q.skill === skill))
      .slice(0, count)
      .map(shuffleOptions);
  }

  const bySkill = new Map<Skill, Question[]>();
  for (const q of pool) {
    const list = bySkill.get(q.skill) ?? [];
    list.push(q);
    bySkill.set(q.skill, list);
  }

  const groups = [...bySkill.values()].map(shuffle);
  const picked: Question[] = [];

  // Bo'limlar bo'ylab navbat bilan olamiz — ulush avtomatik tenglashadi
  for (let round = 0; picked.length < count; round++) {
    let addedThisRound = false;
    for (const group of groups) {
      if (round < group.length && picked.length < count) {
        picked.push(group[round]);
        addedThisRound = true;
      }
    }
    if (!addedThisRound) break;
  }

  return picked.map(shuffleOptions);
}
