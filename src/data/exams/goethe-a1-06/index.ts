import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A1 · Modellsatz 06 — kontent original */
export const GOETHE_A1_06: ExamSet = {
  id: "goethe-a1-06",
  format: "goethe-a1",
  title: "Modellsatz 06",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
