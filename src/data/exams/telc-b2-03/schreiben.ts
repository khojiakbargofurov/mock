import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 03 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Schreiben Sie einen Leserbrief an die Redaktion. Bearbeiten Sie alle vier Leitpunkte und achten Sie auf einen sachlichen Stil.",
      hint: "Har fikrni misol bilan mustahkamlang. Taxminan 200 so‘z.",
      blocks: [
        {
          id: "b2c-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Wochenblatt“",
            body: `Führerschein erst mit 21?

Junge Fahrerinnen und Fahrer sind an überdurchschnittlich vielen schweren Unfällen beteiligt. Einige Fachleute fordern deshalb, den Führerschein erst ab 21 Jahren zu erlauben. Andere halten dagegen: Auf dem Land seien junge Menschen ohne Auto von Ausbildung und Freizeit abgeschnitten, und entscheidend sei nicht das Alter, sondern die Qualität der Ausbildung.

Wie denken Sie darüber? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2c-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Führerschein erst mit 21?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie die Situation in Ihrem Heimatland oder aus Ihrer eigenen Erfahrung.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie man die Zahl der Unfälle senken könnte.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Führerschein erst mit 21?“ vom 14. März gelesen. Da ich selbst erst mit 29 Jahren den Führerschein gemacht habe und in einem Dorf wohne, möchte ich dazu Stellung nehmen.

In Usbekistan darf man ab 18 fahren, und die Ausbildung ist deutlich kürzer als hier. Als ich meinen Führerschein in Deutschland gemacht habe, war ich überrascht, wie viel Wert auf Nachtfahrten und Autobahn gelegt wird. Genau das fehlte mir zu Hause völlig.

Eine feste Altersgrenze von 21 Jahren halte ich dennoch für den falschen Weg. Erstens trifft sie vor allem junge Menschen auf dem Land, die ohne Auto weder zur Berufsschule noch zur Arbeit kommen. Zweitens sagt das Alter wenig über die Fahrpraxis aus: Eine Zwanzigjährige, die seit zwei Jahren regelmäßig fährt, ist sicherer unterwegs als ein Anfänger mit dreißig. In meinem Betrieb hat ein Kollege mit 45 Jahren den Führerschein gemacht und im ersten Jahr zwei Unfälle verursacht.

Sinnvoller wäre aus meiner Sicht das begleitete Fahren ab 17 in Verbindung mit einem verpflichtenden Fahrsicherheitstraining im zweiten Jahr. Wer Erfahrung sammelt, solange jemand daneben sitzt, fährt später nachweislich vorsichtiger.

Über eine Fortsetzung des Themas würde ich mich freuen.

Mit freundlichen Grüßen
Bekzod Toshev`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta yoritilganmi (maqolaga murojaat, tajriba, asoslangan fikr, aniq taklif)?",
                  points: 18,
                },
                {
                  id: "c2",
                  label: "Kommunikative Gestaltung",
                  question:
                    "Matn xat shaklidami va abzaslar mantiqiy bog‘langanmi?",
                  points: 9,
                },
                {
                  id: "c3",
                  label: "Ifoda va so‘z boyligi",
                  question:
                    "„erstens/zweitens“, „aus meiner Sicht“, „dennoch“ kabi vositalar ishlatilganmi?",
                  points: 9,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question:
                    "Murakkab gaplar, Konjunktiv II va sifat qo‘shimchalari to‘g‘rimi?",
                  points: 9,
                },
              ],
              explanation:
                "„Erstens … Zweitens …“ tuzilishi baholovchiga dalillaringizni aniq ko‘rsatadi — B2 da eng oson ball.",
            },
          ],
        },
      ],
    },
  ],
};
