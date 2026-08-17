import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/**
 * Goethe-Zertifikat A2 · Modellsatz 01.
 * Kontent original — rasmiy imtihondan faqat tuzilma olingan.
 */
export const GOETHE_A2_01: ExamSet = {
  id: "goethe-a2-01",
  format: "goethe-a2",
  title: "Modellsatz 01",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
