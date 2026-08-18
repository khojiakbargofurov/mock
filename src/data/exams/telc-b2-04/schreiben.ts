import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 04 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Schreiben Sie einen Leserbrief an die Redaktion. Bearbeiten Sie alle vier Leitpunkte und achten Sie auf einen sachlichen Stil.",
      blocks: [
        {
          id: "b2d-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Regionalpost“",
            body: `Sollen Ämter nur noch online arbeiten?

Immer mehr Behörden bieten ihre Leistungen ausschließlich digital an: Termine, Anträge, Bescheide — alles läuft über Portale. Befürworter sprechen von kürzeren Wegen und weniger Papier. Kritiker warnen, dass ältere Menschen, Personen ohne gute Deutschkenntnisse und Haushalte ohne Internet dadurch ausgeschlossen werden.

Wie sehen Sie das? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2d-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Sollen Ämter nur noch online arbeiten?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie Ihre eigenen Erfahrungen mit Behörden.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie Ämter beides verbinden könnten.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Sollen Ämter nur noch online arbeiten?“ vom 8. Oktober gelesen. Da ich selbst vor drei Jahren nach Deutschland gekommen bin und viele Behördengänge hinter mir habe, möchte ich dazu Stellung nehmen.

Meine Erfahrungen sind gemischt. Die Anmeldung meiner Wohnung konnte ich online erledigen, das hat gut funktioniert. Bei der Anerkennung meines Abschlusses war es dagegen schwierig: Das Portal bot Kategorien an, die ich nicht verstand, und nach fünfzehn Minuten waren meine Eingaben gelöscht. Erst ein persönliches Gespräch hat die Sache in zwanzig Minuten geklärt.

Eine rein digitale Verwaltung halte ich deshalb für den falschen Weg. Erstens setzt sie voraus, dass alle die Sprache der Formulare beherrschen — und diese Sprache ist selbst für Muttersprachler oft schwer. Zweitens trifft ein reines Online-Angebot genau diejenigen am härtesten, die auf Unterstützung angewiesen sind: ältere Menschen, Zugewanderte und Familien ohne stabiles Internet.

Sinnvoll wäre aus meiner Sicht ein Nebeneinander: Standardfälle wie Ummeldungen digital, dazu feste offene Sprechzeiten für komplizierte Anliegen. Zusätzlich sollten die Portale mehrsprachig sein und eingegebene Daten speichern.

Über eine Fortsetzung des Themas würde ich mich freuen.

Mit freundlichen Grüßen
Deniz Aydin`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (maqolaga murojaat, tajriba, asoslangan fikr, taklif)?",
                  points: 18,
                },
                {
                  id: "c2",
                  label: "Kommunikative Gestaltung",
                  question: "Matn xat shaklidami va abzaslar bog‘langanmi?",
                  points: 9,
                },
                {
                  id: "c3",
                  label: "Ifoda va so‘z boyligi",
                  question:
                    "B2 vositalari („erstens/zweitens“, „aus meiner Sicht“, „vorausgesetzt“) ishlatilganmi?",
                  points: 9,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question: "Murakkab gaplar va passiv to‘g‘ri qo‘llanganmi?",
                  points: 9,
                },
              ],
              explanation:
                "Shaxsiy tajribadan aniq epizod („nach fünfzehn Minuten waren meine Eingaben gelöscht“) dalilni eng ishonarli qiladi.",
            },
          ],
        },
      ],
    },
  ],
};
