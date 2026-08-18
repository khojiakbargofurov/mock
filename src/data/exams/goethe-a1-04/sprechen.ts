import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 04 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball.
 * Teil 2 mavzusi "Essen und Trinken", Teil 3 kundalik iltimoslar.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Sich vorstellen. Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern auf den Karten.",
      hint: "Oxirida shahringiz nomini harflab ayting va yoshingizni sanang.",
      blocks: [
        {
          id: "a1d-sp1-b1",
          items: [
            {
              id: "a1d-sp-001",
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
                { key: "arbeit", label: "Arbeit oder Studium?" },
                { key: "sport", label: "Sport?", hint: "Ich spiele / gehe …" },
                { key: "buchstabieren", label: "Buchstabieren Sie Ihren Wohnort." },
                { key: "zahl", label: "Wie alt sind Ihre Kinder?" },
              ],
              sample: `Guten Tag. Ich heiße Malika Ergasheva. Ich bin 32 Jahre alt und komme aus Usbekistan, aus Namangan. Jetzt wohne ich in Erfurt. Ich bin verheiratet und habe eine Tochter. Sie ist vier Jahre alt. Ich arbeite als Verkäuferin. Ich gehe gern schwimmen. Mein Wohnort: E–R–F–U–R–T.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Yetti kartochka bo‘yicha gapirdingizmi (ism, yosh, mamlakat, shahar, oila, ish, sport)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Harflash va raqam",
                  question:
                    "Shahar nomini harfladingizmi va yoshni nemischa aytdingizmi?",
                  points: 1,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 2,
                },
              ],
              explanation:
                "„Ich bin verheiratet und habe eine Tochter“ — oila haqidagi eng oddiy va to‘g‘ri shakl.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Essen und Trinken“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihres Partners.",
      hint: "Savol tuzing (Was …? Wann …? Wo …?) va hamkorning savoliga javob bering.",
      blocks: [
        {
          id: "a1d-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Was essen Sie zum Frühstück?" },
              { voice: "male", text: "Kochen Sie gern? Was kochen Sie am liebsten?" },
            ],
          },
          items: [
            {
              id: "a1d-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "mittagessen", label: "Mittagessen", hint: "Wann …?" },
                { key: "restaurant", label: "Restaurant" },
                { key: "kaffee", label: "Kaffee oder Tee" },
                { key: "obst", label: "Obst" },
              ],
              sample: `Wann essen Sie zu Mittag? — Meistens um halb eins, in der Pause.
Gehen Sie oft ins Restaurant? — Nein, nur einmal im Monat.
Trinken Sie Kaffee oder Tee? — Ich trinke lieber Tee, grünen Tee.
Welches Obst mögen Sie? — Ich esse gern Äpfel und Trauben.

Antwort auf den Partner: Zum Frühstück esse ich Brot mit Käse und trinke Tee. Ich koche gern, am liebsten Plov.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question: "Har kartochka uchun to‘g‘ri savol tuzdingizmi?",
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
                "„lieber“ — nimani afzal ko‘rishni bildiradi: „Ich trinke lieber Tee.“",
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
          id: "a1d-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Können Sie mir bitte die Adresse aufschreiben?" },
              { voice: "female", text: "Darf ich Ihr Telefon kurz benutzen? Mein Akku ist leer." },
            ],
          },
          items: [
            {
              id: "a1d-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "wasser", label: "💧 Wasser" },
                { key: "stuhl", label: "🪑 Stuhl" },
                { key: "karte", label: "🎫 Fahrkarte" },
                { key: "uhr", label: "🕐 Uhrzeit" },
              ],
              sample: `Können Sie mir bitte ein Glas Wasser geben? — Ja, gern.
Ist dieser Stuhl frei? Darf ich mich setzen? — Natürlich, bitte.
Können Sie mir bitte helfen? Ich brauche eine Fahrkarte. — Ja, kommen Sie mit.
Können Sie mir bitte sagen, wie spät es ist? — Es ist Viertel nach drei.

Antwort auf die Partnerin: Ja, gern, ich schreibe die Adresse auf. — Natürlich, hier ist mein Telefon.`,
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
                "„Wie spät ist es?“ va „Können Sie mir sagen, wie spät es ist?“ — ikkinchisi muloyimroq.",
            },
          ],
        },
      ],
    },
  ],
};
