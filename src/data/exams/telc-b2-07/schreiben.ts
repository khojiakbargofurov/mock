import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 07 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball. */
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
          id: "b2g-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Wochenkurier“",
            body: `Muttersprache zu Hause — Hindernis oder Vorteil?

In vielen Familien wird zu Hause eine andere Sprache gesprochen als in der Schule. Manche Fachleute empfehlen Eltern, möglichst früh auf Deutsch umzustellen, damit die Kinder schneller Anschluss finden. Andere widersprechen: Wer in der Herkunftssprache reich spricht, lege damit die Grundlage für jede weitere Sprache — entscheidend seien Kitas und Schulen, nicht die Familiensprache.

Wie sehen Sie das? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2g-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Muttersprache zu Hause — Hindernis oder Vorteil?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie die Situation in Ihrer Familie oder in Ihrem Umfeld.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie Kitas und Schulen unterstützen könnten.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Muttersprache zu Hause — Hindernis oder Vorteil?“ vom 9. Oktober gelesen. Da wir zu Hause Usbekisch sprechen und zwei Kinder in Kita und Grundschule haben, möchte ich dazu Stellung nehmen.

Bei uns wurde genau das empfohlen, was der Artikel beschreibt: Eine Erzieherin riet uns, zu Hause nur noch Deutsch zu sprechen. Wir haben es drei Monate versucht und wieder aufgegeben. Mein Deutsch reichte damals für einfache Sätze, nicht für Geschichten oder Erklärungen — unsere Gespräche wurden ärmer, nicht besser.

Eine Umstellung auf Deutsch halte ich deshalb für den falschen Weg. Erstens gibt man dem Kind nur die Sprache mit, die man selbst gut beherrscht. Zweitens verliert die Familie an Nähe, wenn Eltern nicht mehr erzählen können, was sie eigentlich sagen möchten. Mein Sohn hat sein Deutsch nicht bei uns gelernt, sondern in der Kita — und zwar in dem Jahr, in dem dort eine Sprachförderkraft war.

Genau dort würde ich ansetzen: kleinere Gruppen und feste Sprachförderung in Kita und Grundschule, statt Empfehlungen an die Eltern. Sinnvoll wären außerdem mehrsprachige Vorlesestunden, die beide Sprachen sichtbar machen.

Über eine Fortsetzung des Themas würde ich mich freuen.

Mit freundlichen Grüßen
Kerim Aslan`,
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
                    "B2 vositalari („erstens/zweitens“, „genau dort würde ich ansetzen“) ishlatilganmi?",
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
                "Shaxsiy urinishni tan olish („Wir haben es drei Monate versucht“) dalilingizni juda ishonarli qiladi.",
            },
          ],
        },
      ],
    },
  ],
};
