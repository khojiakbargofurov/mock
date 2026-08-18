import type { ExamItem, ExamSet, ModuleId } from "@/lib/exam/types";
import { formatSpec, validateSet } from "@/lib/exam/spec";
import { GOETHE_A1_01 } from "@/data/exams/goethe-a1-01";
import { GOETHE_A1_02 } from "@/data/exams/goethe-a1-02";
import { GOETHE_A1_03 } from "@/data/exams/goethe-a1-03";
import { GOETHE_A1_04 } from "@/data/exams/goethe-a1-04";
import { GOETHE_A1_05 } from "@/data/exams/goethe-a1-05";
import { GOETHE_A1_06 } from "@/data/exams/goethe-a1-06";
import { GOETHE_A1_07 } from "@/data/exams/goethe-a1-07";
import { GOETHE_A2_01 } from "@/data/exams/goethe-a2-01";
import { GOETHE_A2_02 } from "@/data/exams/goethe-a2-02";
import { GOETHE_A2_03 } from "@/data/exams/goethe-a2-03";
import { GOETHE_A2_04 } from "@/data/exams/goethe-a2-04";
import { GOETHE_A2_05 } from "@/data/exams/goethe-a2-05";
import { GOETHE_A2_06 } from "@/data/exams/goethe-a2-06";
import { GOETHE_A2_07 } from "@/data/exams/goethe-a2-07";
import { TELC_B1_01 } from "@/data/exams/telc-b1-01";
import { TELC_B1_02 } from "@/data/exams/telc-b1-02";
import { TELC_B1_03 } from "@/data/exams/telc-b1-03";
import { TELC_B1_04 } from "@/data/exams/telc-b1-04";
import { TELC_B1_05 } from "@/data/exams/telc-b1-05";
import { TELC_B1_06 } from "@/data/exams/telc-b1-06";
import { TELC_B1_07 } from "@/data/exams/telc-b1-07";
import { TELC_B2_01 } from "@/data/exams/telc-b2-01";
import { TELC_B2_02 } from "@/data/exams/telc-b2-02";
import { TELC_B2_03 } from "@/data/exams/telc-b2-03";
import { TELC_B2_04 } from "@/data/exams/telc-b2-04";
import { TELC_B2_05 } from "@/data/exams/telc-b2-05";
import { TELC_B2_06 } from "@/data/exams/telc-b2-06";

/** Mavjud imtihon variantlari. Yangi variant shu yerga qo'shiladi. */
export const EXAM_SETS: ExamSet[] = [
  GOETHE_A1_01,
  GOETHE_A1_02,
  GOETHE_A1_03,
  GOETHE_A1_04,
  GOETHE_A1_05,
  GOETHE_A1_06,
  GOETHE_A1_07,
  GOETHE_A2_01,
  GOETHE_A2_02,
  GOETHE_A2_03,
  GOETHE_A2_04,
  GOETHE_A2_05,
  GOETHE_A2_06,
  GOETHE_A2_07,
  TELC_B1_01,
  TELC_B1_02,
  TELC_B1_03,
  TELC_B1_04,
  TELC_B1_05,
  TELC_B1_06,
  TELC_B1_07,
  TELC_B2_01,
  TELC_B2_02,
  TELC_B2_03,
  TELC_B2_04,
  TELC_B2_05,
  TELC_B2_06,
];

// Ishlab chiqish rejimida kontent spetsifikatsiyaga solishtiriladi —
// element soni yoki ball yig'indisi noto'g'ri bo'lsa konsolda ko'rinadi.
if (process.env.NODE_ENV !== "production") {
  for (const set of EXAM_SETS) {
    const errors = validateSet(set);
    if (errors.length > 0) {
      console.error(`[exam] "${set.id}" spetsifikatsiyaga mos emas:`);
      for (const e of errors) console.error("  · " + e);
    }
  }
}

export function examSet(id: string): ExamSet | undefined {
  return EXAM_SETS.find((s) => s.id === id);
}

export function examSetsByFormat(format: string) {
  return EXAM_SETS.filter((s) => s.format === format);
}

/** Bitta modulning barcha elementlari — tartib raqami bo'yicha */
export function moduleItems(set: ExamSet, moduleId: ModuleId): ExamItem[] {
  const mod = set.modules.find((m) => m.id === moduleId);
  if (!mod) return [];
  return mod.teile.flatMap((t) => t.blocks.flatMap((b) => b.items));
}

export interface ExamItemLocation {
  set: ExamSet;
  item: ExamItem;
  moduleId: ModuleId;
  teilNr: number;
  /** Zuordnung variantlari — javobni matnga aylantirish uchun kerak */
  bank?: { key: string; label: string }[];
}

/**
 * Element qaysi variant/modul/Teil ichida ekanini topadi.
 * Fehlerbuch xato qilingan elementni shu orqali tiklaydi.
 */
export function locateExamItem(
  setId: string,
  itemId: string,
): ExamItemLocation | undefined {
  const set = examSet(setId);
  if (!set) return undefined;

  for (const mod of set.modules) {
    for (const teil of mod.teile) {
      for (const block of teil.blocks) {
        const item = block.items.find((i) => i.id === itemId);
        if (item) {
          return {
            set,
            item,
            moduleId: mod.id,
            teilNr: teil.nr,
            bank: teil.bank,
          };
        }
      }
    }
  }
  return undefined;
}

export function examItem(set: ExamSet, itemId: string): ExamItem | undefined {
  for (const mod of set.modules) {
    for (const teil of mod.teile) {
      for (const block of teil.blocks) {
        const item = block.items.find((i) => i.id === itemId);
        if (item) return item;
      }
    }
  }
  return undefined;
}

/** Formatning to'liq nomi va spetsifikatsiyasi — ekran sarlavhalari uchun */
export function setLabel(set: ExamSet) {
  const spec = formatSpec(set.format);
  return spec ? `${spec.label} · ${set.title}` : set.title;
}
