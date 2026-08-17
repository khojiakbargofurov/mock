import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 02 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 * Leserbrief: maqolaga munosabat, o'z tajribasi, asoslangan fikr va taklif.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Schreiben Sie einen Leserbrief an die Redaktion. Bearbeiten Sie alle vier Leitpunkte und achten Sie auf einen sachlichen Stil.",
      hint: "Dalil + misol tuzilishini saqlang. Taxminan 200 so‘z.",
      blocks: [
        {
          id: "b2b-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Wochenzeitung „Stadtspiegel“",
            body: `Vier Tage arbeiten — reicht das?

Mehrere Betriebe in unserer Region testen derzeit die Vier-Tage-Woche bei vollem Lohn. Die Befürworter verweisen auf zufriedenere Beschäftigte, weniger Krankheitstage und auf Betriebe, die dadurch leichter Personal finden. Kritiker halten dagegen: In Pflege, Handwerk und Gastronomie fehlten schon heute Arbeitskräfte, und was in einem Büro funktioniere, lasse sich auf eine Station oder eine Baustelle nicht übertragen.

Wie sehen Sie das? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2b-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Vier Tage arbeiten — reicht das?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie die Situation in Ihrem Heimatland oder aus Ihrer eigenen Erfahrung.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie Betriebe mit dem Thema umgehen sollten.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Vier Tage arbeiten — reicht das?“ vom 3. Juni gelesen. Da ich selbst im Schichtdienst eines Krankenhauses arbeite, möchte ich dazu Stellung nehmen.

In Usbekistan, wo ich zehn Jahre lang als Krankenschwester tätig war, wurde über Arbeitszeitmodelle kaum diskutiert; entscheidend war, dass die Station besetzt ist. Seit ich in Deutschland arbeite, erlebe ich, wie unterschiedlich Betriebe mit diesem Thema umgehen — auf meiner Station wurde vor einem Jahr ein Wunschdienstplan eingeführt, und die Stimmung hat sich seitdem spürbar verbessert.

Eine Vier-Tage-Woche halte ich grundsätzlich für sinnvoll, allerdings nicht als einheitliche Lösung für alle Branchen. Wer am Schreibtisch arbeitet, kann Aufgaben verschieben; auf einer Pflegestation ist das unmöglich, weil die Patienten an sieben Tagen versorgt werden müssen. Als bei uns im letzten Winter zwei Kolleginnen ausfielen, mussten die übrigen zusätzliche Dienste übernehmen — eine kürzere Woche hätte diese Lücke noch vergrößert.

Sinnvoller wäre aus meiner Sicht, dass jeder Betrieb gemeinsam mit den Beschäftigten ein eigenes Modell entwickelt: mehr freie Tage dort, wo es möglich ist, und verlässliche Dienstpläne dort, wo es nicht geht.

Über eine Fortsetzung des Themas würde ich mich freuen.

Mit freundlichen Grüßen
Dilnoza Rakhimova`,
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
                    "Matn xat shaklidami va abzaslar mantiqiy ketma-ketlikda bog‘langanmi?",
                  points: 9,
                },
                {
                  id: "c3",
                  label: "Ifoda va so‘z boyligi",
                  question:
                    "B2 darajadagi bog‘lovchilar va argument iboralari („allerdings“, „grundsätzlich“, „aus meiner Sicht“) ishlatilganmi?",
                  points: 9,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question:
                    "Murakkab gaplar, passiv va Konjunktiv II to‘g‘ri qo‘llanilganmi?",
                  points: 9,
                },
              ],
              explanation:
                "B2 da eng ko‘p ball dalilga beriladi: har fikrni bitta aniq misol bilan mustahkamlang („Als bei uns im letzten Winter …“).",
            },
          ],
        },
      ],
    },
  ],
};
