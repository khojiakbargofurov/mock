import type { ExamSet } from "@/lib/exam/types";
import { LESEN } from "./lesen";
import { SPRACHBAUSTEINE } from "./sprachbausteine";
import { HOEREN } from "./hoeren";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** telc Deutsch B2 · Übungstest 03 — kontent original */
export const TELC_B2_03: ExamSet = {
  id: "telc-b2-03",
  format: "telc-b2",
  title: "Übungstest 03",
  modules: [LESEN, SPRACHBAUSTEINE, HOEREN, SCHREIBEN, SPRECHEN],
};
