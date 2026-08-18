import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 06 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie können am Betriebsausflug nicht teilnehmen. Schreiben Sie eine Nachricht an Ihre Kollegin Sabine. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub, 20–30 so‘z.",
      blocks: [
        {
          id: "a2f-s1-b1",
          items: [
            {
              id: "a2f-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Der Betriebsausflug ist am 14. Juni. An diesem Tag hat Ihre Tochter ihre Einschulung.",
              bullets: [
                "Sagen Sie ab.",
                "Nennen Sie den Grund.",
                "Fragen Sie, ob es Fotos vom Ausflug gibt.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Hallo Sabine,

leider kann ich am 14. Juni nicht mitfahren. An diesem Tag ist die Einschulung meiner Tochter.

Macht ihr Fotos? Die würde ich gern sehen.

Liebe Grüße
Gulnora`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Bekor qilish, sabab va savol — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub (do‘stona)",
                  question: "Salomlashuv va xayrlashuv do‘stona shakldami?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Gaplar bog‘langanmi va sabab aniq berilganmi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Fe’l o‘z o‘rnidami va matn tushunarlimi?",
                  points: 2,
                },
              ],
              explanation:
                "„leider“ so‘zi bekor qilishni yumshatadi — uni gap boshida ishlatish tabiiy.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten Ihren Vertrag im Fitnessstudio kündigen. Schreiben Sie eine E-Mail an das Studio. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub, 30–40 so‘z.",
      blocks: [
        {
          id: "a2f-s2-b1",
          items: [
            {
              id: "a2f-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Sie ziehen im Oktober in eine andere Stadt. Ihr Vertrag läuft noch bis März, Mitgliedsnummer 4471.",
              bullets: [
                "Erklären Sie, warum Sie kündigen möchten.",
                "Nennen Sie den gewünschten Zeitpunkt.",
                "Fragen Sie, welche Unterlagen Sie schicken müssen.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Damen und Herren,

ich möchte meinen Vertrag (Mitgliedsnummer 4471) kündigen, weil ich im Oktober in eine andere Stadt ziehe.

Ist eine Kündigung zum 30. September möglich? Und welche Unterlagen brauchen Sie dafür — reicht die Anmeldebestätigung der neuen Stadt?

Mit freundlichen Grüßen
Gulnora Karimova`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Sabab, muddat va hujjat savoli — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question: "Rasmiy salomlashuv va xayrlashuv bormi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "A’zolik raqami va aniq sana berildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "„weil“ bilan ergash gap to‘g‘ri tuzildimi?",
                  points: 2,
                },
              ],
              explanation:
                "Shartnomani bekor qilishda „zum + sana“ ishlatiladi: „Kündigung zum 30. September“.",
            },
          ],
        },
      ],
    },
  ],
};
