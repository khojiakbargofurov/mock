import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** telc Deutsch B1 · Übungstest 05 — kontent original */
export const TELC_B1_05: ExamSet = {
  id: "telc-b1-05",
  format: "telc-b1",
  title: "Übungstest 05",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
