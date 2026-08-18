import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 06 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball. */
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
          id: "a1f-sp1-b1",
          items: [
            {
              id: "a1f-sp-001",
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
                { key: "familie", label: "Familie?" },
                { key: "arbeit", label: "Arbeit?" },
                { key: "essen", label: "Lieblingsessen?" },
                { key: "buchstabieren", label: "Buchstabieren Sie Ihren Familiennamen." },
                { key: "zahl", label: "Ihre Hausnummer?" },
              ],
              sample: `Guten Tag. Ich heiße Gulnora Karimova. Ich bin 41 Jahre alt und komme aus Usbekistan, aus Andischan. Ich wohne jetzt in Erfurt. Ich bin verheiratet und habe zwei Kinder. Ich arbeite in einem Hotel. Mein Lieblingsessen ist Manti. Mein Familienname: K–A–R–I–M–O–V–A. Meine Hausnummer ist drei.`,
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
                  question: "Familiyani harfladingizmi va raqamni aytdingizmi?",
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
                "Harflashda „K wie Kaufmann“ deyish shart emas — harflarni aniq aytish yetarli.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Arbeit“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihres Partners.",
      blocks: [
        {
          id: "a1f-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Was sind Sie von Beruf?" },
              { voice: "male", text: "Wann fangen Sie morgens an?" },
            ],
          },
          items: [
            {
              id: "a1f-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "kollegen", label: "Kollegen", hint: "Wie viele …?" },
                { key: "pause", label: "Pause" },
                { key: "weg", label: "Weg zur Arbeit" },
                { key: "wochenende", label: "Wochenende" },
              ],
              sample: `Wie viele Kollegen haben Sie? — Wir sind acht im Team.
Wann haben Sie Pause? — Um zwölf, eine halbe Stunde.
Wie kommen Sie zur Arbeit? — Mit dem Bus, das dauert zwanzig Minuten.
Arbeiten Sie am Wochenende? — Manchmal samstags, sonntags nie.

Antwort auf den Partner: Ich arbeite in einem Hotel, im Housekeeping. Morgens fange ich um sieben an.`,
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
                "„Was sind Sie von Beruf?“ savoliga artiklsiz javob beriladi: „Ich bin Verkäuferin.“",
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
      blocks: [
        {
          id: "a1f-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Können Sie mir bitte die Tür aufhalten?" },
              { voice: "female", text: "Darf ich mich hier hinsetzen?" },
            ],
          },
          items: [
            {
              id: "a1f-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "papier", label: "📄 Papier" },
                { key: "fenster", label: "🪟 Fenster" },
                { key: "handy", label: "📱 Handy" },
                { key: "weg", label: "🗺 Weg zum Bahnhof" },
              ],
              sample: `Haben Sie bitte ein Blatt Papier für mich? — Ja, hier bitte.
Können Sie bitte das Fenster aufmachen? Es ist warm. — Natürlich.
Darf ich Ihr Handy kurz benutzen? — Ja, gern.
Können Sie mir bitte den Weg zum Bahnhof zeigen? — Ja, gehen Sie geradeaus.

Antwort auf die Partnerin: Ja, gern, ich halte die Tür auf. — Natürlich, der Platz ist frei.`,
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
                "„Haben Sie bitte …?“ ham iltimos shakli — „Können Sie mir … geben?“ bilan bir xil ma’noda.",
            },
          ],
        },
      ],
    },
  ],
};
