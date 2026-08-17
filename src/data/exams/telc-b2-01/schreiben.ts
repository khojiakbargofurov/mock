import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 * B2 da argumentli matn kutiladi (~200 so'z): maqolaga munosabat,
 * o'z fikri, misol va taklif.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Schreiben Sie einen Leserbrief an die Redaktion. Bearbeiten Sie alle vier Leitpunkte und achten Sie auf einen sachlichen Stil.",
      hint: "B2 da fikrni asoslash muhim: dalil + misol. Taxminan 200 so‘z.",
      blocks: [
        {
          id: "b2s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Regionalblatt“",
            body: `Handy weg, Note besser?

Immer mehr Schulen verbieten Smartphones auf dem gesamten Schulgelände — nicht nur im Unterricht, sondern auch in den Pausen. Befürworter berichten von ruhigeren Pausenhöfen und mehr Gesprächen zwischen den Jugendlichen. Kritiker halten dagegen, dass Jugendliche lernen müssen, mit digitalen Geräten verantwortungsvoll umzugehen, und dass ein Verbot dieses Lernen nur verschiebt.

Schreiben Sie uns Ihre Meinung!`,
          },
          items: [
            {
              id: "b2-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Handy weg, Note besser?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie die Situation in Ihrem Heimatland oder aus Ihrer eigenen Erfahrung.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie Schulen mit dem Thema umgehen sollten.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Handy weg, Note besser?“ vom 12. Mai gelesen. Da ich selbst zwei schulpflichtige Kinder habe, möchte ich dazu Stellung nehmen.

In Usbekistan, wo ich zur Schule gegangen bin, waren Handys im Unterricht schon vor Jahren verboten, in den Pausen jedoch erlaubt. Meiner Erfahrung nach hat das gut funktioniert: Wer telefonieren wollte, tat es auf dem Hof, im Klassenzimmer blieben die Geräte in der Tasche.

Ein vollständiges Verbot halte ich deshalb für den falschen Weg. Erstens lernen Jugendliche nicht, ihre Zeit selbst einzuteilen, wenn man ihnen jede Entscheidung abnimmt. Zweitens brauchen viele Schülerinnen und Schüler das Handy für den Schulweg, etwa um sich mit den Eltern abzustimmen. Als meine Tochter im letzten Winter ihren Bus verpasst hat, war ich froh, dass sie mich erreichen konnte.

Sinnvoller wäre aus meiner Sicht eine klare Regelung mit Beteiligung der Schülerinnen und Schüler: Handys bleiben im Unterricht ausgeschaltet in der Tasche, in den Pausen sind sie in bestimmten Bereichen erlaubt. Zusätzlich sollte jede Schule Unterrichtsstunden zum Umgang mit sozialen Medien anbieten.

Über eine Fortsetzung des Themas in Ihrer Zeitung würde ich mich freuen.

Mit freundlichen Grüßen
Dilnoza Rakhimova`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "Maqolaga havola, o‘z tajriba/vatan holati, asoslangan fikr va aniq taklif — to‘rttasi ham bormi?",
                  points: 20,
                },
                {
                  id: "c2",
                  label: "Matn tuzilishi",
                  question:
                    "Kirish, asosiy qism (abzatslarga bo‘lingan) va yakun bormi; fikrlar bog‘lovchilar bilan ulanganmi?",
                  points: 10,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va uslub",
                  question:
                    "Uslub xolis va rasmiymi; fikr bildirish iboralari („meiner Ansicht nach“, „erstens … zweitens“) xilma-xilmi?",
                  points: 8,
                },
                {
                  id: "c4",
                  label: "Grammatika",
                  question:
                    "Ergash gaplar, Konjunktiv II va Passiv to‘g‘ri qo‘llanganmi; xatolar tushunishga xalaqit bermaydimi?",
                  points: 7,
                },
              ],
              explanation:
                "telc B2 da fikrni faqat aytish yetarli emas — dalil va misol bilan asoslash kerak. Taklif qismi ko‘pincha unutiladi, lekin u alohida baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
