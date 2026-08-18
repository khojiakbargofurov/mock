import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A1 · Modellsatz 05 — kontent original */
export const GOETHE_A1_05: ExamSet = {
  id: "goethe-a1-05",
  format: "goethe-a1",
  title: "Modellsatz 05",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
