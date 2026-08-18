import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A1 · Modellsatz 03 — kontent original */
export const GOETHE_A1_03: ExamSet = {
  id: "goethe-a1-03",
  format: "goethe-a1",
  title: "Modellsatz 03",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
