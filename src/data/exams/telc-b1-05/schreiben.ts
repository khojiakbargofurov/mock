import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 05 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an ein Fitnessstudio, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      blocks: [
        {
          id: "b1e-s-b1",
          items: [
            {
              id: "b1e-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben im Fitnessstudio „Aktiv“ einen Jahresvertrag für 39 Euro im Monat abgeschlossen. Versprochen waren Kurse jeden Abend und eine Sauna. Seit drei Monaten fallen die Abendkurse regelmäßig aus, die Sauna ist seit Februar geschlossen. Sie schreiben an die Studioleitung, Herrn Wolter.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie Vertrag, Beitrag und Zeitraum.",
                "Beschreiben Sie, was nicht so ist wie vereinbart.",
                "Sagen Sie, was Sie erwarten (Beitrag senken oder Vertrag beenden).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrter Herr Wolter,

seit dem 1. Oktober habe ich bei Ihnen einen Jahresvertrag und zahle 39 Euro im Monat (Mitgliedsnummer 3312).

Bei Vertragsabschluss wurden mir Abendkurse an jedem Werktag und die Nutzung der Sauna zugesagt. Tatsächlich sind seit drei Monaten die meisten Abendkurse ausgefallen, zuletzt drei Wochen hintereinander. Die Sauna ist seit Februar geschlossen, ohne dass ein Termin für die Wiedereröffnung genannt wurde. Genau wegen dieser beiden Angebote habe ich mich für Ihr Studio entschieden.

Ich möchte Sie deshalb bitten, meinen Beitrag für diese Zeit zu senken. Sollte das nicht möglich sein, bitte ich um eine vorzeitige Beendigung des Vertrags ohne zusätzliche Kosten.

Könnten Sie mir bitte bis zum 15. Mai antworten? Für eine schnelle Rückmeldung wäre ich Ihnen dankbar.

Mit freundlichen Grüßen
Anvar Salimov`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (shartnoma, muammo, talab, muddat)?",
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
                    "Shikoyat tili va bog‘lovchilar ishlatilganmi („tatsächlich“, „deshalb“, „sollte … nicht“)?",
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
                "„Genau wegen dieser beiden Angebote habe ich mich … entschieden“ — bu gap talabingizni asoslaydi va ballni oshiradi.",
            },
          ],
        },
      ],
    },
  ],
};
