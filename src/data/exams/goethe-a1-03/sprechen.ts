import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 03 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball.
 * Teil 2 mavzusi "Einkaufen", Teil 3 kundalik buyumlar bilan iltimoslar.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Sich vorstellen. Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern auf den Karten.",
      hint: "Oxirida ismingizni harflab ayting va telefon raqamingizni sanang.",
      blocks: [
        {
          id: "a1c-sp1-b1",
          items: [
            {
              id: "a1c-sp-001",
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
                { key: "sprachen", label: "Sprachen?", hint: "Ich spreche …" },
                { key: "beruf", label: "Beruf?", hint: "Ich bin … von Beruf." },
                { key: "hobby", label: "Hobby?", hint: "Mein Hobby ist …" },
                { key: "buchstabieren", label: "Buchstabieren Sie Ihren Vornamen." },
                { key: "nummer", label: "Ihre Telefonnummer?" },
              ],
              sample: `Guten Tag. Ich heiße Bekzod Toshev. Ich bin 31 Jahre alt und komme aus Usbekistan, aus Buchara. Jetzt wohne ich in Erfurt. Ich spreche Usbekisch, Russisch und ein bisschen Deutsch. Ich bin Koch von Beruf. Mein Hobby ist Fußball. Mein Vorname: B–E–K–Z–O–D. Meine Telefonnummer ist null-eins-sieben-vier, drei-zwei-eins.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Yetti kartochka bo‘yicha gapirdingizmi (ism, yosh, mamlakat, shahar, tillar, kasb, hobbi)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Harflash va raqam",
                  question:
                    "Ismingizni harfladingizmi va raqamni nemischa sanadingizmi?",
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
                "Telefon raqami nemischa juft-juft emas, bittalab ham aytilishi mumkin — muhimi aniq talaffuz.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Einkaufen“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihrer Partnerin.",
      hint: "Savol tuzing (Wo …? Wann …? Wie oft …?) va hamkorning savoliga javob bering.",
      blocks: [
        {
          id: "a1c-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Wo kaufen Sie Obst und Gemüse?" },
              { voice: "female", text: "Wie oft gehen Sie einkaufen?" },
            ],
          },
          items: [
            {
              id: "a1c-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "markt", label: "Markt", hint: "Wo …?" },
                { key: "preis", label: "Preis" },
                { key: "brot", label: "Brot" },
                { key: "tasche", label: "Tasche" },
              ],
              sample: `Wo ist hier ein Markt? — Der Markt ist am Samstag auf dem Domplatz.
Was kostet ein Kilo Tomaten? — Ungefähr zwei Euro fünfzig.
Wo kaufen Sie Brot? — Beim Bäcker neben der Post.
Haben Sie eine Tasche dabei? — Ja, ich nehme immer eine Tasche mit.

Antwort auf die Partnerin: Obst und Gemüse kaufe ich auf dem Markt. Ich gehe zweimal pro Woche einkaufen.`,
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
                "„Was kostet …?“ — narx haqidagi asosiy savol. „Wie viel kostet …?“ ham to‘g‘ri.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Bitten formulieren und darauf reagieren. Bitten Sie Ihre Partnerin um etwas und reagieren Sie auf ihre Bitte.",
      hint: "„Können Sie mir bitte …?“ · Javob: „Ja, gern.“ / „Tut mir leid, …“",
      blocks: [
        {
          id: "a1c-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Können Sie mir bitte das Wasser geben?" },
              { voice: "male", text: "Darf ich Ihren Stift kurz benutzen?" },
            ],
          },
          items: [
            {
              id: "a1c-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "telefon", label: "📱 Telefon" },
                { key: "licht", label: "💡 Licht" },
                { key: "tuer", label: "🚪 Tür" },
                { key: "zettel", label: "📄 Zettel" },
              ],
              sample: `Können Sie mir bitte Ihr Telefon geben? — Ja, gern, hier bitte.
Können Sie bitte das Licht anmachen? — Natürlich, einen Moment.
Können Sie bitte die Tür aufmachen? Meine Hände sind voll. — Ja, sofort.
Haben Sie einen Zettel für mich? — Ja, hier ist einer.

Antwort auf den Partner: Ja, gern, hier ist das Wasser. — Natürlich, nehmen Sie den Stift.`,
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
                "„anmachen / aufmachen“ — ajraladigan fe’llar: „Machen Sie bitte das Licht an.“",
            },
          ],
        },
      ],
    },
  ],
};
