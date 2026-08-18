import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A2 · Modellsatz 03 — kontent original */
export const GOETHE_A2_03: ExamSet = {
  id: "goethe-a2-03",
  format: "goethe-a2",
  title: "Modellsatz 03",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
