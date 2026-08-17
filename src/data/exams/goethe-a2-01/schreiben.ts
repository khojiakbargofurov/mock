import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball (har topshiriq 10).
 * Teil 1: SMS 20–30 so'z · Teil 2: elektron xat 30–40 so'z.
 * Rasmiy imtihonda har topshiriq 4 mezon bo'yicha A–E bahoda baholanadi;
 * bu yerda shu mezonlar ball sifatida berilgan.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie sind mit Ihrer Freundin Elena verabredet, aber Sie kommen später. Schreiben Sie eine SMS an Elena. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub: „Hallo Elena“, „Liebe Grüße“. 20–30 so‘z.",
      blocks: [
        {
          id: "a2s1-b1",
          items: [
            {
              id: "a2-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie wollten sich um 17 Uhr mit Elena im Café treffen. Ihr Zug hat Verspätung und Sie kommen erst gegen 18 Uhr an.",
              bullets: [
                "Entschuldigen Sie sich.",
                "Schreiben Sie, warum Sie später kommen.",
                "Machen Sie einen neuen Vorschlag (Zeit oder Ort).",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Hallo Elena,

es tut mir leid, ich komme heute später. Mein Zug hat eine Stunde Verspätung. Können wir uns um 18.30 Uhr treffen? Oder wir gehen gleich ins Restaurant neben dem Bahnhof.

Liebe Grüße
Timur`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Uzr, sabab va yangi taklif — uchalasi ham matningizda bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub (do‘stona)",
                  question:
                    "Salomlashuv va xayrlashuv do‘stona shaklda („Hallo …“, „du“ shakli)mi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question:
                    "Gaplar bog‘langanmi („weil“, „aber“, „deshalb“) va so‘zlar mavzuga mosmi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question:
                    "Fe’l o‘z o‘rnidami va xatolar matnni tushunishga xalaqit bermaydimi?",
                  points: 2,
                },
              ],
              explanation:
                "Rasmiy imtihonda mazmun nuqtalaridan biri bajarilmasa, topshiriq bahosi keskin tushadi — avval uchala nuqtani yozing, keyin til ustida ishlang.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie waren krank und konnten nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Lehrerin, Frau Wagner. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub: „Sehr geehrte Frau Wagner“, „Mit freundlichen Grüßen“. 30–40 so‘z.",
      blocks: [
        {
          id: "a2s2-b1",
          items: [
            {
              id: "a2-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Sie sind seit Montag krank und waren eine Woche nicht im Unterricht. Nächste Woche möchten Sie wieder kommen.",
              bullets: [
                "Erklären Sie, warum Sie gefehlt haben.",
                "Fragen Sie nach den Hausaufgaben.",
                "Schreiben Sie, wann Sie wieder in den Kurs kommen.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Frau Wagner,

leider war ich diese Woche krank und konnte nicht zum Unterricht kommen. Könnten Sie mir bitte schreiben, welche Hausaufgaben ich machen muss? Ab Montag bin ich wieder im Kurs.

Vielen Dank und mit freundlichen Grüßen
Dilnoza Rakhimova`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Kelmagan sabab, uy vazifasi haqida savol va qaytish vaqti — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question:
                    "„Sehr geehrte Frau Wagner“ va „Mit freundlichen Grüßen“ ishlatilganmi, „Sie“ shakli saqlanganmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question:
                    "Muloyim so‘rov („Könnten Sie bitte …“) va bog‘lovchilar ishlatilganmi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question:
                    "O‘tgan zamon (Perfekt/Präteritum) to‘g‘ri ishlatilganmi va matn tushunarlimi?",
                  points: 2,
                },
              ],
              explanation:
                "A2 da rasmiy xat kutiladi: „Sie“ shakli, to‘liq salomlashuv va imzo. Do‘stona shakl („Hallo, du“) baholashda uslub bahosini tushiradi.",
            },
          ],
        },
      ],
    },
  ],
};
