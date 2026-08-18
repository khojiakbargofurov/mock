import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 06 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an eine Hausverwaltung, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      blocks: [
        {
          id: "b1f-s-b1",
          items: [
            {
              id: "b1f-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie wohnen seit zwei Jahren in der Lindenstraße 12 und zahlen 780 Euro warm. Seit sechs Wochen ist der Aufzug defekt; Sie wohnen im fünften Stock. Termine für die Reparatur wurden zweimal verschoben. Sie schreiben an die Hausverwaltung, Frau Brunner.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie Wohnung, Miete und Zeitraum.",
                "Beschreiben Sie das Problem und die Folgen für Sie.",
                "Sagen Sie, was Sie erwarten (Reparatur oder Mietminderung).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrte Frau Brunner,

ich wohne seit zwei Jahren in der Lindenstraße 12, Wohnung 5b, und zahle monatlich 780 Euro warm.

Seit sechs Wochen ist der Aufzug defekt. Zwei angekündigte Termine für die Reparatur wurden ohne Erklärung verschoben. Für mich bedeutet das jeden Tag fünf Stockwerke zu Fuß — mit Einkäufen und mit meiner kleinen Tochter ist das kaum zu schaffen. Meine Nachbarin, die 79 Jahre alt ist, verlässt das Haus inzwischen fast gar nicht mehr.

Ich möchte Sie deshalb bitten, die Reparatur endlich durchführen zu lassen. Sollte das weiterhin nicht möglich sein, halte ich eine Mietminderung für angemessen.

Könnten Sie mir bitte bis zum 10. Juni mitteilen, wann der Aufzug wieder funktioniert?

Mit freundlichen Grüßen
Kerim Aslan`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (kvartira, muammo va oqibat, talab, muddat)?",
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
                    "Shikoyat tili va bog‘lovchilar („deshalb“, „sollte … nicht“) ishlatilganmi?",
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
                "Oqibatni aniq ko‘rsatish („mit Einkäufen und mit meiner Tochter“) shikoyatni kuchaytiradi va mazmun ballini oshiradi.",
            },
          ],
        },
      ],
    },
  ],
};
