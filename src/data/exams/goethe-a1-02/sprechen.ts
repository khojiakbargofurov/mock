import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 02 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball.
 * Teil 1 tuzilishi rasmiy imtihonda o'zgarmaydi; Teil 2 va 3 mavzulari
 * 01-variantdan boshqacha: "Wohnen" va boshqa kundalik buyumlar.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Sich vorstellen. Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern auf den Karten.",
      hint: "Oxirida familiyangizni harflab ayting va uy manzilingizdagi raqamni sanang.",
      blocks: [
        {
          id: "a1b-sp1-b1",
          items: [
            {
              id: "a1b-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "name", label: "Name?", hint: "Ich heiße …" },
                { key: "alter", label: "Alter?", hint: "Ich bin … Jahre alt." },
                { key: "land", label: "Land?", hint: "Ich komme aus …" },
                { key: "wohnort", label: "Wohnort?", hint: "Ich wohne in …" },
                { key: "familie", label: "Familie?", hint: "Ich bin …" },
                { key: "beruf", label: "Beruf?", hint: "Ich bin … von Beruf." },
                { key: "hobby", label: "Hobby?", hint: "Mein Hobby ist …" },
                {
                  key: "buchstabieren",
                  label: "Buchstabieren Sie Ihren Familiennamen.",
                },
                { key: "nummer", label: "Ihre Hausnummer?" },
              ],
              sample: `Guten Tag. Ich heiße Dilnoza Rakhimova. Ich bin 29 Jahre alt und komme aus Usbekistan, aus Samarkand. Jetzt wohne ich in Leipzig. Ich bin verheiratet und habe einen Sohn. Ich bin Krankenschwester von Beruf. Mein Hobby ist Lesen. Mein Familienname: R–A–K–H–I–M–O–V–A. Meine Hausnummer ist sieben.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Yetti kartochkaning hammasi bo‘yicha gapirdingizmi (ism, yosh, mamlakat, shahar, oila, kasb, hobbi)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Harflash va raqam",
                  question:
                    "Familiyangizni harflab aytdingizmi va raqamni nemischa sanadingizmi?",
                  points: 1,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question:
                    "Gaplaringiz tushunarli bo‘ldimi — tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 2,
                },
              ],
              explanation:
                "Harflashda nemis alifbosi kerak: R — „er“, A — „a“, K — „ka“, H — „ha“. Mashq qilib qo‘ying.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Wohnen“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihres Partners.",
      hint: "Savol tuzing (Wo …? Wie viele …? Wie lange …?) va hamkorning savoliga javob bering.",
      blocks: [
        {
          id: "a1b-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Wo wohnen Sie?" },
              { voice: "male", text: "Wie lange wohnen Sie schon dort?" },
            ],
          },
          items: [
            {
              id: "a1b-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "zimmer", label: "Zimmer", hint: "Wie viele …?" },
                { key: "miete", label: "Miete" },
                { key: "nachbarn", label: "Nachbarn" },
                { key: "balkon", label: "Balkon" },
              ],
              sample: `Wie viele Zimmer hat Ihre Wohnung? — Meine Wohnung hat drei Zimmer.
Wie hoch ist Ihre Miete? — Ich zahle 520 Euro warm.
Kennen Sie Ihre Nachbarn? — Ja, die Nachbarin von nebenan ist sehr nett.
Haben Sie einen Balkon? — Ja, ein kleiner Balkon ist da.

Antwort auf den Partner: Ich wohne in Leipzig, in der Gartenstraße. Dort wohne ich seit zwei Jahren.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question:
                    "Har kartochka uchun to‘g‘ri tuzilgan savol aytdingizmi (fe’l o‘z o‘rnida)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Javoblar",
                  question:
                    "Hamkorning ikkala savoliga to‘liq gap bilan javob berdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Talaffuz va gap tuzilishi tushunarli bo‘ldimi?",
                  points: 1,
                },
              ],
              explanation:
                "„Wie viele Zimmer hat Ihre Wohnung?“ — „wie viele“ dan keyin ot, keyin fe’l. Bu A1 da tez-tez so‘raladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Bitten formulieren und darauf reagieren. Bitten Sie Ihren Partner um etwas und reagieren Sie auf seine Bitte.",
      hint: "„Können Sie mir bitte …?“ · Javob: „Ja, gern.“ / „Tut mir leid, …“",
      blocks: [
        {
          id: "a1b-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Können Sie mir bitte das Salz geben?" },
              { voice: "female", text: "Darf ich Ihren Regenschirm nehmen? Es regnet." },
            ],
          },
          items: [
            {
              id: "a1b-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "schluessel", label: "🔑 Schlüssel" },
                { key: "buch", label: "📗 Buch" },
                { key: "tee", label: "🍵 Tee" },
                { key: "fenster", label: "🪟 Fenster" },
              ],
              sample: `Können Sie mir bitte den Schlüssel geben? — Ja, gern, hier bitte.
Darf ich Ihr Buch nehmen? — Natürlich, kein Problem.
Können Sie mir bitte einen Tee machen? — Ja, einen Moment.
Können Sie bitte das Fenster schließen? Mir ist kalt. — Ja, sofort.

Antwort auf den Partner: Ja, gern, hier ist das Salz. — Ja, nehmen Sie den Regenschirm.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta iltimos",
                  question:
                    "Har kartochka uchun muloyim iltimos tuzdingizmi („Können Sie bitte …?“)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Javob berish",
                  question:
                    "Hamkorning iltimoslariga javob berdingizmi (rozilik yoki uzr)?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Muloyimlik",
                  question: "„bitte“ va muloyim shakl ishlatildimi?",
                  points: 1,
                },
              ],
              explanation:
                "„Darf ich …?“ — ruxsat so‘rash, „Können Sie …?“ — yordam so‘rash. Ikkalasi ham A1 da kutiladi.",
            },
          ],
        },
      ],
    },
  ],
};
