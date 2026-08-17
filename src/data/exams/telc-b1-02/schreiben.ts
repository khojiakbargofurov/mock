import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 02 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 * Yarim rasmiy xat: 4 ta Leitpunkt, hammasi yoritilishi shart.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an ein Reisebüro, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      hint: "Har Leitpunkt uchun bir-ikki gap, kirish va yakun bilan birga ~150 so‘z.",
      blocks: [
        {
          id: "b1b-s-b1",
          items: [
            {
              id: "b1b-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben über das Reisebüro „Sonnenweg“ eine einwöchige Reise nach Österreich gebucht und 620 Euro bezahlt. Im Prospekt stand ein Hotel mit Schwimmbad und Frühstück, 300 Meter vom See entfernt. Vor Ort war das Schwimmbad die ganze Woche geschlossen, und das Hotel lag zwei Kilometer außerhalb. Sie schreiben an die Leiterin des Reisebüros, Frau Hoffmann.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie die Reise und den Zeitraum.",
                "Beschreiben Sie, was anders war als im Prospekt.",
                "Sagen Sie, was Sie erwarten (Rückzahlung oder Gutschein).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrte Frau Hoffmann,

vom 5. bis zum 12. Juli habe ich über Ihr Reisebüro eine Woche in Österreich verbracht (Hotel „Alpenblick“, Buchungsnummer 4471). Dafür habe ich 620 Euro bezahlt.

Leider stimmte vor Ort einiges nicht mit Ihrem Prospekt überein. Dort war ein Hotel mit Schwimmbad beschrieben, das nur 300 Meter vom See entfernt liegt. Tatsächlich war das Schwimmbad die ganze Woche wegen Reparaturen geschlossen, und bis zum See mussten wir jeden Tag zwei Kilometer laufen. Gerade wegen des Schwimmbads hatte ich diese Reise für meine Kinder ausgesucht, deshalb war die Enttäuschung groß.

Ich möchte Sie daher bitten, mir einen Teil des Preises zurückzuzahlen. Falls das nicht möglich ist, wäre ich auch mit einem Gutschein für eine nächste Reise einverstanden.

Könnten Sie mir bitte bis zum 15. August mitteilen, wie Sie die Sache regeln möchten?

Mit freundlichen Grüßen
Amina Yusupova`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (sabab, farqlar, talab, javob muddati)?",
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
                    "Shikoyat tiliga xos iboralar („leider“, „tatsächlich“, „ich möchte Sie bitten“) ishlatilganmi?",
                  points: 8,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question:
                    "O‘tgan zamon va ergash gaplar asosan to‘g‘rimi; xatolar tushunishga xalaqit bermaydimi?",
                  points: 7,
                },
              ],
              explanation:
                "Shikoyat xatida faktlarni aniq bering: sana, narx, buyurtma raqami. Ular baholovchiga „mazmun to‘liq“ degan taassurot beradi.",
            },
          ],
        },
      ],
    },
  ],
};
