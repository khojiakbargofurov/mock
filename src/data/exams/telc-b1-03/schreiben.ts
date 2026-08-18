import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 03 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an ein Möbelhaus, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      hint: "Har Leitpunkt uchun bir-ikki gap; kirish va yakun bilan ~150 so‘z.",
      blocks: [
        {
          id: "b1c-s-b1",
          items: [
            {
              id: "b1c-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben im Möbelhaus „Wohnwelt“ einen Schrank für 480 Euro gekauft und 60 Euro für die Lieferung bezahlt. Der Schrank wurde zwei Wochen später als vereinbart geliefert, und eine Tür ist beschädigt. Sie schreiben an die Kundenbetreuung, Herrn Sander.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie Kauf, Datum und Preis.",
                "Beschreiben Sie, was nicht in Ordnung war.",
                "Sagen Sie, was Sie erwarten (neue Tür oder Preisnachlass).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrter Herr Sander,

am 3. April habe ich in Ihrer Filiale einen Kleiderschrank für 480 Euro gekauft (Auftragsnummer 22-4471) und zusätzlich 60 Euro für die Lieferung bezahlt.

Vereinbart war die Lieferung für den 12. April. Tatsächlich kam der Schrank erst zwei Wochen später, ohne dass mich jemand informiert hat. Noch ärgerlicher ist, dass eine der beiden Türen unten deutlich beschädigt ist. Ich habe das den Lieferanten sofort gezeigt; sie sagten, ich solle mich an Sie wenden.

Ich möchte Sie deshalb bitten, mir eine neue Tür zu schicken und diese montieren zu lassen. Sollte das nicht möglich sein, wäre ich auch mit einem Preisnachlass einverstanden.

Könnten Sie mir bitte bis zum 10. Mai mitteilen, wie Sie die Sache regeln möchten? Für eine schnelle Antwort wäre ich Ihnen dankbar.

Mit freundlichen Grüßen
Bekzod Toshev`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (xarid, muammo, talab, muddat)?",
                  points: 20,
                },
                {
                  id: "c2",
                  label: "Kommunikative Gestaltung",
                  question:
                    "Murojaat, kirish, mantiqiy tartib, xayrlashuv va imzo bormi?",
                  points: 10,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi",
                  question:
                    "Shikoyat tili va bog‘lovchilar („deshalb“, „sollte … nicht“, „tatsächlich“) ishlatilganmi?",
                  points: 8,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question:
                    "O‘tgan zamon, ergash gaplar va so‘z tartibi asosan to‘g‘rimi?",
                  points: 7,
                },
              ],
              explanation:
                "Shikoyatda ikki muammoni (kechikish va shikast) alohida ayting — bitta gapga tiqilsa, mazmun bahosi tushadi.",
            },
          ],
        },
      ],
    },
  ],
};
