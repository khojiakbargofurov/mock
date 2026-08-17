import type { ExamSet } from "@/lib/exam/types";
import { HOEREN } from "./hoeren";
import { LESEN } from "./lesen";
import { SCHREIBEN } from "./schreiben";
import { SPRECHEN } from "./sprechen";

/** Goethe-Zertifikat A1 · Modellsatz 02 — kontent original */
export const GOETHE_A1_02: ExamSet = {
  id: "goethe-a1-02",
  format: "goethe-a1",
  title: "Modellsatz 02",
  modules: [HOEREN, LESEN, SCHREIBEN, SPRECHEN],
};
