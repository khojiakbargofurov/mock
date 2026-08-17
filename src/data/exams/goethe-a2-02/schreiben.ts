import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 02 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball.
 * Teil 1: SMS (do'stona uslub) · Teil 2: uy boshqaruvchisiga rasmiy xat.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie sind mit Ihrem Freund Anton zum Sport verabredet, können aber nicht kommen. Schreiben Sie eine SMS an Anton. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub: „Hallo Anton“, „Bis bald“. 20–30 so‘z.",
      blocks: [
        {
          id: "a2b-s1-b1",
          items: [
            {
              id: "a2b-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie wollten heute um 18 Uhr mit Anton zum Fußball. Ihr Sohn ist krank geworden und Sie müssen zu Hause bleiben.",
              bullets: [
                "Sagen Sie ab und entschuldigen Sie sich.",
                "Schreiben Sie, warum Sie nicht kommen können.",
                "Schlagen Sie einen neuen Termin vor.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Hallo Anton,

es tut mir leid, heute schaffe ich es nicht. Mein Sohn ist krank und ich muss zu Hause bleiben. Können wir am Samstag um 18 Uhr spielen?

Bis bald
Timur`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Bekor qilish va uzr, sabab hamda yangi taklif — uchalasi ham bormi?",
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
                    "Gaplar bog‘langanmi („weil“, „deshalb“) va so‘zlar mavzuga mosmi?",
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
                "SMS qisqa bo‘lsa ham uchala nuqta shart. Yangi taklifni savol shaklida berish tabiiy: „Können wir am Samstag …?“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "In Ihrer Wohnung ist die Heizung kaputt. Schreiben Sie eine E-Mail an die Hausverwaltung, Frau Kranz. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub: „Sehr geehrte Frau Kranz“, „Mit freundlichen Grüßen“. 30–40 so‘z.",
      blocks: [
        {
          id: "a2b-s2-b1",
          items: [
            {
              id: "a2b-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Seit drei Tagen wird die Heizung in Ihrer Wohnung nicht warm. Draußen ist es kalt. Sie sind werktags ab 17 Uhr zu Hause.",
              bullets: [
                "Beschreiben Sie das Problem.",
                "Fragen Sie, wann jemand kommen kann.",
                "Schreiben Sie, wann Sie zu Hause sind.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Frau Kranz,

seit drei Tagen wird die Heizung in meiner Wohnung nicht mehr warm. Könnten Sie bitte jemanden schicken? Wann wäre das möglich? Werktags bin ich ab 17 Uhr zu Hause.

Vielen Dank und mit freundlichen Grüßen
Timur Rasulov`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question:
                    "Muammo tavsifi, qachon kelishlari haqida savol va uyda bo‘lish vaqti — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question:
                    "„Sehr geehrte Frau Kranz“ va „Mit freundlichen Grüßen“ ishlatilganmi, „Sie“ shakli saqlanganmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question:
                    "Muloyim so‘rov („Könnten Sie bitte …“) va aniq vaqt ifodalari ishlatilganmi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question:
                    "„seit“ bilan zamon to‘g‘ri berilganmi va matn tushunarlimi?",
                  points: 2,
                },
              ],
              explanation:
                "„seit drei Tagen“ — hozirgi zamon bilan ishlatiladi (o‘tgan zamon emas): „seit drei Tagen ist die Heizung kaputt“.",
            },
          ],
        },
      ],
    },
  ],
};
