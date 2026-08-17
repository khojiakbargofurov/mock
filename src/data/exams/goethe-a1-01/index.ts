import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/**
 * Goethe-Zertifikat A1 · Modellsatz 01.
 *
 * Barcha matnlar, dialoglar va topshiriqlar shu loyiha uchun yozilgan —
 * rasmiy imtihondan faqat tuzilma (Teil’lar soni, topshiriq turlari,
 * vaqt va ball taqsimoti) olingan.
 */
export const GOETHE_A1_01: ExamSet = {
  id: "goethe-a1-01",
  format: "goethe-a1",
  title: "Modellsatz 01",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
