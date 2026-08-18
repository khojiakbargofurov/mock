import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A2 · Modellsatz 07 — kontent original */
export const GOETHE_A2_07: ExamSet = {
  id: "goethe-a2-07",
  format: "goethe-a2",
  title: "Modellsatz 07",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
