import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 05 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
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
          id: "b2e-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Stadtanzeiger“",
            body: `Sollte Weiterbildung Pflicht werden?

Mehrere Fachleute fordern, dass Beschäftigte künftig verpflichtet werden, sich regelmäßig weiterzubilden — bezahlt vom Betrieb, aber verbindlich. Befürworter argumentieren, freiwillige Angebote erreichten genau die Menschen nicht, die sie am dringendsten brauchen. Kritiker halten dagegen: Eine Pflicht bevormunde Erwachsene und treffe vor allem jene, die ohnehin wenig Zeit haben — etwa Schichtarbeitende und Alleinerziehende.

Wie sehen Sie das? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2e-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Sollte Weiterbildung Pflicht werden?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie Ihre eigenen Erfahrungen mit Weiterbildung.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie man mehr Menschen erreichen könnte.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Sollte Weiterbildung Pflicht werden?“ vom 21. November gelesen. Da ich selbst im Schichtdienst arbeite und im letzten Jahr eine Weiterbildung abgeschlossen habe, möchte ich dazu Stellung nehmen.

Meine eigene Erfahrung war zwiespältig. Der Kurs hat mir fachlich viel gebracht, aber er fand dienstags und donnerstags abends statt — also genau dann, wenn ich Spätschicht hatte. Ich musste jedes Mal tauschen, und ohne entgegenkommende Kolleginnen hätte ich abbrechen müssen.

Eine Pflicht halte ich deshalb für den falschen Ansatz. Erstens liegt das Problem selten am Willen: Kaum jemand lehnt Weiterbildung grundsätzlich ab. Zweitens würde eine Pflicht ohne Freistellung genau die Gruppen zusätzlich belasten, die ohnehin am wenigsten Spielraum haben. In meinem Betrieb sind es die Alleinerziehenden, die zuerst absagen — nicht aus Desinteresse, sondern weil die Betreuung fehlt.

Sinnvoller wäre aus meiner Sicht ein Anspruch statt einer Pflicht: fünf bezahlte Bildungstage im Jahr, die während der Arbeitszeit genommen werden. Ergänzend sollten Kurse in kurzen Einheiten und zu unterschiedlichen Tageszeiten angeboten werden.

Über eine Fortsetzung des Themas würde ich mich freuen.

Mit freundlichen Grüßen
Melanie Ruf`,
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
                    "B2 vositalari („zwiespältig“, „erstens/zweitens“, „aus meiner Sicht“) ishlatilganmi?",
                  points: 9,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question: "Murakkab gaplar va Konjunktiv II to‘g‘ri qo‘llanganmi?",
                  points: 9,
                },
              ],
              explanation:
                "„nicht aus Desinteresse, sondern weil …“ — sababni to‘g‘rilash B2 argumentida juda kuchli vosita.",
            },
          ],
        },
      ],
    },
  ],
};
