import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 07 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an einen Onlineshop, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      blocks: [
        {
          id: "b1g-s-b1",
          items: [
            {
              id: "b1g-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben online eine Waschmaschine für 420 Euro gekauft (Bestellnummer 88-3120). Die Lieferung kam eine Woche später als vereinbart, und der Anschluss, den Sie mitbestellt und bezahlt hatten (60 Euro), wurde nicht gemacht. Sie schreiben an den Kundenservice, Herrn Frank.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie Bestellung, Datum und Preis.",
                "Beschreiben Sie, was nicht wie vereinbart lief.",
                "Sagen Sie, was Sie erwarten (Anschluss nachholen oder Geld zurück).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrter Herr Frank,

am 3. Mai habe ich in Ihrem Onlineshop eine Waschmaschine für 420 Euro bestellt (Bestellnummer 88-3120) und zusätzlich 60 Euro für den Anschluss bezahlt.

Vereinbart war die Lieferung für den 12. Mai. Tatsächlich kam die Maschine erst am 19. Mai, ohne dass mich jemand über die Verzögerung informiert hätte. Außerdem haben die Lieferanten die Maschine nur in die Küche gestellt und sind wieder gefahren — angeschlossen wurde sie nicht. Seitdem wasche ich meine Wäsche im Waschsalon, was mich zusätzlich Geld kostet.

Ich möchte Sie deshalb bitten, den Anschluss kurzfristig nachholen zu lassen. Sollte das nicht möglich sein, bitte ich um die Rückzahlung der 60 Euro.

Könnten Sie mir bitte bis zum 30. Mai mitteilen, wie Sie die Sache regeln?

Mit freundlichen Grüßen
Kerim Aslan`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (buyurtma, muammo, talab, muddat)?",
                  points: 20,
                },
                {
                  id: "c2",
                  label: "Kommunikative Gestaltung",
                  question: "Murojaat, kirish, tartib, xayrlashuv va imzo bormi?",
                  points: 10,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi",
                  question:
                    "Shikoyat tili va bog‘lovchilar („tatsächlich“, „außerdem“, „deshalb“) ishlatilganmi?",
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
                "Ikki alohida muammoni („kechikish“ va „ulanmagan“) ikki alohida gapda bering — shunda ikkalasi ham baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
