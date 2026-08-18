import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** telc Deutsch B1 · Übungstest 07 — kontent original */
export const TELC_B1_07: ExamSet = {
  id: "telc-b1-07",
  format: "telc-b1",
  title: "Übungstest 07",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
