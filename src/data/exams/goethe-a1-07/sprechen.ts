import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 07 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball. */
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
          id: "a1g-sp1-b1",
          items: [
            {
              id: "a1g-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "name", label: "Name?" },
                { key: "alter", label: "Alter?" },
                { key: "land", label: "Land?" },
                { key: "wohnort", label: "Wohnort?" },
                { key: "beruf", label: "Beruf?" },
                { key: "familie", label: "Familie?" },
                { key: "hobby", label: "Hobby?" },
                { key: "buchstabieren", label: "Buchstabieren Sie Ihren Vornamen." },
                { key: "zahl", label: "Wie viele Personen wohnen bei Ihnen?" },
              ],
              sample: `Guten Tag. Ich heiße Farrux Sobirov. Ich bin 38 Jahre alt und komme aus Usbekistan, aus Navoi. Ich wohne in Leipzig. Ich arbeite als Maler. Ich bin verheiratet und habe einen Sohn. Mein Hobby ist Schach. Mein Vorname: F–A–R–R–U–X. Bei uns wohnen drei Personen.`,
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
                  question: "Ismni harfladingizmi va sonni aytdingizmi?",
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
                "„Bei uns wohnen drei Personen“ — sonli javobda fe’l ko‘plikda bo‘ladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Wohnung“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihrer Partnerin.",
      blocks: [
        {
          id: "a1g-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Wo wohnen Sie genau?" },
              { voice: "female", text: "Gefällt Ihnen Ihre Wohnung?" },
            ],
          },
          items: [
            {
              id: "a1g-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "kueche", label: "Küche" },
                { key: "stock", label: "Stock" },
                { key: "keller", label: "Keller" },
                { key: "heizung", label: "Heizung" },
              ],
              sample: `Wie groß ist Ihre Küche? — Ziemlich klein, aber es reicht.
In welchem Stock wohnen Sie? — Im zweiten Stock, ohne Aufzug.
Haben Sie einen Keller? — Ja, für Fahrräder und Koffer.
Funktioniert die Heizung gut? — Im Winter manchmal nicht.

Antwort auf die Partnerin: Ich wohne in Leipzig, in der Turmstraße. Die Wohnung gefällt mir, nur die Küche ist zu klein.`,
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
                "„In welchem Stock …?“ — qavat haqidagi savol; javob „im zweiten Stock“.",
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
          id: "a1g-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Können Sie mir bitte den Schlüssel geben?" },
              { voice: "male", text: "Darf ich hier telefonieren?" },
            ],
          },
          items: [
            {
              id: "a1g-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "salz", label: "🧂 Salz" },
                { key: "tasche", label: "👜 Tasche" },
                { key: "computer", label: "💻 Computer" },
                { key: "termin", label: "🗓 Termin" },
              ],
              sample: `Können Sie mir bitte das Salz geben? — Ja, gern.
Können Sie bitte meine Tasche kurz halten? — Natürlich.
Darf ich Ihren Computer benutzen? — Ja, aber nur zehn Minuten.
Können Sie mir bitte einen Termin geben? — Ja, am Donnerstag um zehn.

Antwort auf den Partner: Ja, hier ist der Schlüssel. — Natürlich, telefonieren Sie ruhig.`,
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
                "Roziligingizni „ruhig“ bilan yumshatish mumkin: „Telefonieren Sie ruhig.“",
            },
          ],
        },
      ],
    },
  ],
};
