import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 05 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball.
 * Teil 2 mavzusi "Freizeit", Teil 3 ish joyidagi iltimoslar.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Sich vorstellen. Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern auf den Karten.",
      blocks: [
        {
          id: "a1e-sp1-b1",
          items: [
            {
              id: "a1e-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "name", label: "Name?", hint: "Ich heiße …" },
                { key: "alter", label: "Alter?" },
                { key: "land", label: "Land?" },
                { key: "wohnort", label: "Wohnort?" },
                { key: "beruf", label: "Beruf?" },
                { key: "familie", label: "Familie?" },
                { key: "sprachen", label: "Sprachen?" },
                { key: "buchstabieren", label: "Buchstabieren Sie Ihre Straße." },
                { key: "zahl", label: "Ihre Postleitzahl?" },
              ],
              sample: `Guten Tag. Ich heiße Anvar Salimov. Ich bin 35 Jahre alt und komme aus Usbekistan, aus Fergana. Ich wohne in Leipzig, in der Seestraße. Ich arbeite als Fahrer. Ich bin verheiratet und habe einen Sohn. Ich spreche Usbekisch, Russisch und ein bisschen Deutsch. Meine Straße: S–E–E–S–T–R–A–S–S–E. Meine Postleitzahl ist null-vier-eins-null-neun.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question: "Yetti kartochka bo‘yicha gapirdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Harflash va raqam",
                  question:
                    "Ko‘cha nomini harfladingizmi va indeksni sanadingizmi?",
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
                "Pochta indeksi (Postleitzahl) besh raqamdan iborat va odatda bittalab aytiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Freizeit“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihrer Partnerin.",
      blocks: [
        {
          id: "a1e-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Was machen Sie am Wochenende?" },
              { voice: "female", text: "Sehen Sie gern fern? Was sehen Sie?" },
            ],
          },
          items: [
            {
              id: "a1e-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "sport", label: "Sport", hint: "Welchen …?" },
                { key: "musik", label: "Musik" },
                { key: "buch", label: "Buch" },
                { key: "park", label: "Park" },
              ],
              sample: `Machen Sie Sport? — Ja, ich spiele Fußball, einmal pro Woche.
Welche Musik hören Sie gern? — Ich höre gern usbekische Musik.
Lesen Sie Bücher? — Nicht oft, ich lese lieber Nachrichten.
Gehen Sie manchmal in den Park? — Ja, am Sonntag mit meinem Sohn.

Antwort auf die Partnerin: Am Wochenende schlafe ich lange und dann spiele ich mit meinem Sohn. Fern sehe ich wenig, manchmal Fußball.`,
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
                  question: "Hamkorning ikkala savoliga javob berdingizmi?",
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
                "„einmal pro Woche“, „am Sonntag“ — chastota va vaqt ifodalari javobni to‘ldiradi.",
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
      blocks: [
        {
          id: "a1e-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Können Sie mir bitte den Zettel geben?" },
              { voice: "male", text: "Darf ich hier sitzen? Ist der Platz frei?" },
            ],
          },
          items: [
            {
              id: "a1e-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "kaffee", label: "☕ Kaffee" },
                { key: "computer", label: "💻 Computer" },
                { key: "adresse", label: "📍 Adresse" },
                { key: "hilfe", label: "🤝 Hilfe" },
              ],
              sample: `Können Sie mir bitte einen Kaffee bringen? — Ja, gern.
Darf ich Ihren Computer kurz benutzen? — Natürlich, bitte.
Können Sie mir bitte die Adresse sagen? — Ja, Marktstraße 4.
Können Sie mir bitte helfen? Der Karton ist schwer. — Ja, sofort.

Antwort auf den Partner: Ja, gern, hier ist der Zettel. — Ja, der Platz ist frei.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta iltimos",
                  question: "Har kartochka uchun muloyim iltimos tuzdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Javob berish",
                  question: "Hamkorning iltimoslariga javob berdingizmi?",
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
                "Ish joyida ham „Können Sie bitte …?“ ishlatiladi — bu neytral va xushmuomala shakl.",
            },
          ],
        },
      ],
    },
  ],
};
