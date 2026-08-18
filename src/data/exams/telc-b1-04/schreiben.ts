import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 04 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an eine Fahrschule, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      blocks: [
        {
          id: "b1d-s-b1",
          items: [
            {
              id: "b1d-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben bei der Fahrschule Krämer einen Intensivkurs für 1.400 Euro gebucht. Versprochen waren zwölf Fahrstunden innerhalb von drei Wochen. Tatsächlich haben Sie in fünf Wochen nur fünf Stunden bekommen, weil der Fahrlehrer mehrmals krank war. Sie schreiben an die Leitung, Frau Krämer.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie Kurs, Zeitraum und Preis.",
                "Beschreiben Sie, was anders lief als vereinbart.",
                "Sagen Sie, was Sie erwarten (Ersatztermine oder Teilrückzahlung).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrte Frau Krämer,

am 2. März habe ich bei Ihnen den Intensivkurs für 1.400 Euro gebucht. Vereinbart waren zwölf Fahrstunden innerhalb von drei Wochen.

Inzwischen sind fünf Wochen vergangen, und ich habe erst fünf Stunden gehabt. Mein Fahrlehrer war mehrmals krank, was ich verstehen kann. Allerdings hat mir niemand einen Ersatz angeboten, und auf meine Anrufe habe ich zweimal keine Antwort bekommen. Ich habe extra Urlaub genommen, um den Führerschein schnell zu machen — diese Zeit ist jetzt verloren.

Ich möchte Sie daher bitten, mir die restlichen Stunden innerhalb der nächsten zwei Wochen anzubieten, gern auch bei einer anderen Lehrkraft. Sollte das nicht möglich sein, bitte ich um eine Teilrückzahlung.

Könnten Sie mir bitte bis zum 20. April mitteilen, wie es weitergeht?

Mit freundlichen Grüßen
Deniz Aydin`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (kurs, muammo, talab, muddat)?",
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
                    "Shikoyat tili va bog‘lovchilar („allerdings“, „daher“, „sollte … nicht“) ishlatilganmi?",
                  points: 8,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question: "Zamon, ergash gap va so‘z tartibi asosan to‘g‘rimi?",
                  points: 7,
                },
              ],
              explanation:
                "Tushunish bildirib, keyin talab qo‘yish („was ich verstehen kann. Allerdings …“) shikoyatni kuchaytiradi, qo‘pol qilmaydi.",
            },
          ],
        },
      ],
    },
  ],
};
