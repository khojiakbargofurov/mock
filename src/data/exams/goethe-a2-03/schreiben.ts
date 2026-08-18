import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 03 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball.
 * Teil 1: hamkasbga SMS · Teil 2: til maktabiga rasmiy xat.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie sind krank und können nicht zur Arbeit kommen. Schreiben Sie eine Nachricht an Ihre Kollegin Sabine. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub: „Hallo Sabine“, „Liebe Grüße“. 20–30 so‘z.",
      blocks: [
        {
          id: "a2c-s1-b1",
          items: [
            {
              id: "a2c-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben starke Halsschmerzen und bleiben heute zu Hause. Um 11 Uhr haben Sie eigentlich einen Termin mit einem Kunden.",
              bullets: [
                "Schreiben Sie, dass Sie heute nicht kommen.",
                "Nennen Sie den Grund.",
                "Bitten Sie Sabine, den Termin um 11 Uhr zu übernehmen.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Hallo Sabine,

ich habe starke Halsschmerzen und bleibe heute zu Hause. Könntest du bitte den Termin mit dem Kunden um 11 Uhr übernehmen?

Danke dir und liebe Grüße
Bekzod`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Kelmasligingiz, sababi va iltimos — uchalasi ham bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub (do‘stona)",
                  question: "Salomlashuv va xayrlashuv „du“ shaklida do‘stonami?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Muloyim iltimos („Könntest du bitte …“) ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Fe’l o‘z o‘rnidami, matn tushunarlimi?",
                  points: 2,
                },
              ],
              explanation:
                "Hamkasbga iltimos „Könntest du …?“ shaklida yumshoq bo‘ladi — „Du musst …“ qo‘pol eshitiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie haben einen Deutschkurs gebucht, können aber nicht teilnehmen. Schreiben Sie eine E-Mail an die Sprachschule, Frau Berger. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub: „Sehr geehrte Frau Berger“, „Mit freundlichen Grüßen“. 30–40 so‘z.",
      blocks: [
        {
          id: "a2c-s2-b1",
          items: [
            {
              id: "a2c-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben den Kurs „Deutsch A2“ ab Montag gebucht und 120 Euro bezahlt. Ihr Arbeitgeber hat Ihre Schicht geändert — montags und mittwochs arbeiten Sie jetzt bis 20 Uhr.",
              bullets: [
                "Erklären Sie, warum Sie nicht teilnehmen können.",
                "Fragen Sie, ob es einen anderen Kurs gibt.",
                "Fragen Sie, was mit dem bezahlten Geld passiert.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Frau Berger,

leider hat mein Arbeitgeber meine Schicht geändert: Montags und mittwochs arbeite ich jetzt bis 20 Uhr. Deshalb kann ich am Kurs nicht teilnehmen.

Gibt es einen anderen Kurs am Wochenende? Und was passiert mit den 120 Euro, die ich bezahlt habe?

Mit freundlichen Grüßen
Bekzod Toshev`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Sabab, boshqa kurs haqidagi savol va pul haqidagi savol — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question:
                    "„Sehr geehrte Frau Berger“ va „Mit freundlichen Grüßen“ bormi, „Sie“ shakli saqlanganmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question:
                    "„deshalb“, „leider“ kabi bog‘lovchilar bilan gaplar bog‘landimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Zamon va so‘z tartibi asosan to‘g‘rimi?",
                  points: 2,
                },
              ],
              explanation:
                "Rasmiy xatda ikkita savolni alohida gap qilib bering — bitta uzun gapga tiqilsa, baholovchi nuqtani ko‘rmay qolishi mumkin.",
            },
          ],
        },
      ],
    },
  ],
};
