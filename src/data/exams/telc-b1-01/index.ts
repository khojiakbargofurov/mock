import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/**
 * telc Deutsch B1 · Übungstest 01.
 * Kontent original — rasmiy imtihondan faqat tuzilma olingan.
 */
export const TELC_B1_01: ExamSet = {
  id: "telc-b1-01",
  format: "telc-b1",
  title: "Übungstest 01",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
