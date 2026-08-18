import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 06 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball. */
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
          id: "b2f-s-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung „Landbote“",
            body: `Weniger Busse, mehr Autos?

In vielen ländlichen Regionen fährt der Bus nur wenige Male am Tag. Wer zur Arbeit, zum Arzt oder zur Berufsschule will, braucht ein Auto. Kommunen verweisen auf leere Busse und hohe Kosten. Kritiker halten dagegen: Ein Angebot, das kaum jemand nutzen kann, werde auch nicht genutzt — und wer sich kein Auto leisten könne, sei faktisch ausgeschlossen.

Wie sehen Sie das? Schreiben Sie uns!`,
          },
          items: [
            {
              id: "b2f-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben den Artikel „Weniger Busse, mehr Autos?“ gelesen und möchten der Redaktion Ihre Meinung schreiben.",
              bullets: [
                "Nehmen Sie Bezug auf den Artikel und sagen Sie, warum Sie schreiben.",
                "Beschreiben Sie Ihre eigenen Erfahrungen mit Bus und Bahn.",
                "Nennen Sie Ihre Meinung und begründen Sie sie mit mindestens einem Argument und einem Beispiel.",
                "Machen Sie einen konkreten Vorschlag, wie man die Situation verbessern könnte.",
              ],
              minWords: 160,
              maxWords: 260,
              sample: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel „Weniger Busse, mehr Autos?“ vom 4. Februar gelesen. Da ich in einem Dorf mit 600 Einwohnern wohne und lange kein Auto hatte, möchte ich dazu Stellung nehmen.

Meine Erfahrung ist eindeutig: Ohne Auto ist der Alltag hier kaum zu organisieren. Der erste Bus fährt um 6.20 Uhr, der letzte um 17.10 Uhr. Als ich Spätschicht hatte, musste ich mich jeden Tag von Kolleginnen mitnehmen lassen — anderthalb Jahre lang.

Das Argument der leeren Busse halte ich deshalb für zu kurz gedacht. Ein Angebot, das nicht zu den Arbeitszeiten passt, kann gar nicht genutzt werden; die niedrige Auslastung ist also die Folge, nicht die Ursache. Besonders betroffen sind Jugendliche und Menschen mit geringem Einkommen, für die ein Auto schlicht zu teuer ist.

Sinnvoll wäre aus meiner Sicht ein bestellbarer Kleinbus für die Randzeiten, ergänzend zu einem festen Takt auf der Hauptstrecke. Wichtig wäre dabei, dass die Buchung nicht nur über eine App, sondern auch telefonisch möglich ist — sonst bleiben ältere Menschen außen vor.

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
                    "B2 vositalari („zu kurz gedacht“, „aus meiner Sicht“, „ergänzend“) ishlatilganmi?",
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
                "„die Folge, nicht die Ursache“ — sabab va oqibatni ajratish B2 argumentida juda kuchli usul.",
            },
          ],
        },
      ],
    },
  ],
};
