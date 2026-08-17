import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/**
 * telc Deutsch B1 · Übungstest 02.
 * Kontent original — rasmiy imtihondan faqat tuzilma olingan.
 */
export const TELC_B1_02: ExamSet = {
  id: "telc-b1-02",
  format: "telc-b1",
  title: "Übungstest 02",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
