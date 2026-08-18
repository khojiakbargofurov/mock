import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 04 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie haben Ihren Schlüssel bei Ihrer Nachbarin gelassen. Schreiben Sie ihr eine Nachricht. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub. 20–30 so‘z.",
      blocks: [
        {
          id: "a2d-s1-b1",
          items: [
            {
              id: "a2d-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie fahren für eine Woche weg. Ihre Nachbarin Frau Klein hat Ihren Ersatzschlüssel. Sie soll die Blumen gießen.",
              bullets: [
                "Schreiben Sie, wie lange Sie weg sind.",
                "Bitten Sie sie, die Blumen zu gießen.",
                "Sagen Sie, wann Sie zurückkommen.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Liebe Frau Klein,

ich fahre für eine Woche nach Berlin. Könnten Sie bitte zweimal die Blumen gießen? Am Sonntagabend bin ich wieder da.

Vielen Dank und liebe Grüße
Malika`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Qancha vaqt, iltimos va qaytish vaqti — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub",
                  question: "Salomlashuv va xayrlashuv qo‘shni uchun mos shakldami?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Muloyim iltimos („Könnten Sie bitte …“) ishlatildimi?",
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
                "Qo‘shniga „Sie“ shaklida yozish odatiy, lekin „Liebe Frau Klein“ — bu yarim rasmiy, iliq shakl.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie haben online eine Jacke gekauft, aber sie ist beschädigt. Schreiben Sie eine E-Mail an den Kundenservice. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub. 30–40 so‘z.",
      blocks: [
        {
          id: "a2d-s2-b1",
          items: [
            {
              id: "a2d-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben vor einer Woche eine Winterjacke für 89 Euro bestellt (Bestellnummer 55-2018). Der Reißverschluss ist kaputt.",
              bullets: [
                "Beschreiben Sie das Problem.",
                "Sagen Sie, was Sie möchten (Umtausch oder Geld zurück).",
                "Fragen Sie, wie Sie die Jacke zurückschicken sollen.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Damen und Herren,

vor einer Woche habe ich bei Ihnen eine Winterjacke bestellt (Bestellnummer 55-2018). Leider ist der Reißverschluss kaputt.

Ich möchte die Jacke gegen eine neue umtauschen. Können Sie mir bitte sagen, wie ich sie zurückschicken soll?

Mit freundlichen Grüßen
Malika Ergasheva`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Muammo, talab va qaytarish haqidagi savol — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question:
                    "„Sehr geehrte Damen und Herren“ va „Mit freundlichen Grüßen“ bormi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Buyurtma raqami va aniq ma’lumot berildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "O‘tgan zamon va so‘z tartibi to‘g‘rimi?",
                  points: 2,
                },
              ],
              explanation:
                "Onlayn xaridda buyurtma raqamini yozish shart — usiz javob kechikadi.",
            },
          ],
        },
      ],
    },
  ],
};
