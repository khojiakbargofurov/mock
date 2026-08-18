import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A2 · Modellsatz 04 — kontent original */
export const GOETHE_A2_04: ExamSet = {
  id: "goethe-a2-04",
  format: "goethe-a2",
  title: "Modellsatz 04",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
