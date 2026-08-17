import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/**
 * telc Deutsch B2 · Übungstest 02.
 * Kontent original — rasmiy imtihondan faqat tuzilma olingan.
 */
export const TELC_B2_02: ExamSet = {
  id: "telc-b2-02",
  format: "telc-b2",
  title: "Übungstest 02",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
