import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 06 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball. */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihrer Partnerin.",
      blocks: [
        {
          id: "a2f-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Kochen Sie gern? Was kochen Sie am liebsten?" },
              { voice: "female", text: "Wie oft besuchen Sie Ihre Familie?" },
            ],
          },
          items: [
            {
              id: "a2f-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "haustiere", label: "Haustiere" },
                { key: "sport", label: "Sport" },
                { key: "urlaub", label: "Urlaub" },
                { key: "nachbarn", label: "Nachbarn" },
              ],
              sample: `Haben Sie Haustiere? — Nein, aber meine Kinder möchten eine Katze.
Machen Sie Sport? — Ja, ich gehe zweimal pro Woche schwimmen.
Wohin fahren Sie im Urlaub? — Meistens nach Usbekistan, zu meinen Eltern.
Kennen Sie Ihre Nachbarn gut? — Die Familie neben uns ja, die anderen nur vom Sehen.

Antwort auf die Partnerin: Ich koche sehr gern, am liebsten Manti. Meine Familie besuche ich einmal im Jahr, im Sommer.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question: "Har kartochka bo‘yicha to‘g‘ri savol tuzdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "Javoblar",
                  question: "Hamkorning savollariga to‘liq javob berdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Talaffuz va sur’at tushunarlimi?",
                  points: 1,
                },
              ],
              explanation:
                "„nur vom Sehen kennen“ — kimnidir yuzaki tanish bo‘lish; A2 da foydali ibora.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Meine erste Zeit in Deutschland“. Erzählen Sie mithilfe der Stichwörter.",
      blocks: [
        {
          id: "a2f-sp2-b1",
          items: [
            {
              id: "a2f-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "ankunft", label: "Ankunft: wann, wo?" },
                { key: "wohnung", label: "Erste Wohnung" },
                { key: "sprache", label: "Sprache am Anfang" },
                { key: "schwierig", label: "Was war schwierig?" },
                { key: "heute", label: "Wie ist es heute?" },
              ],
              sample: `Ich bin vor drei Jahren nach Deutschland gekommen, im Januar. Es war sehr kalt, und ich hatte nur eine dünne Jacke — daran erinnere ich mich noch gut.

Die erste Wohnung war ein Zimmer bei einer Familie. Es war klein, aber die Leute waren nett und haben mir viel erklärt.

Deutsch konnte ich fast gar nicht. Ich habe nur „Guten Tag“ und „Danke“ gesagt und sonst viel gelächelt.

Am schwierigsten waren die Ämter. Die Briefe habe ich überhaupt nicht verstanden, und ich hatte Angst, etwas falsch zu machen.

Heute ist es viel besser. Ich arbeite, meine Kinder gehen hier zur Schule, und ich verstehe fast alles. Nur beim Telefonieren bin ich immer noch unsicher.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha kartochkalar",
                  question: "Beshta kartochka bo‘yicha ham gapirdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Bog‘langan nutq",
                  question: "„am Anfang“, „heute“, „am schwierigsten“ ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "O‘tgan zamon (Perfekt va „war/hatte“) to‘g‘ri ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "Davomiylik",
                  question: "Kamida bir daqiqa to‘xtamasdan gapira oldingizmi?",
                  points: 1,
                },
              ],
              explanation:
                "„war“ va „hatte“ — o‘tmish haqida gapirganda Perfekt o‘rniga shu shakllar ishlatiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Ihr Deutschkurs endet. Planen Sie zusammen einen Abschiedsabend für die Gruppe.",
      blocks: [
        {
          id: "a2f-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde in ein Restaurant gehen. Dann muss niemand kochen oder aufräumen.",
              },
              {
                voice: "male",
                text: "Und als Termin: der letzte Kurstag, gleich nach dem Unterricht?",
              },
            ],
          },
          items: [
            {
              id: "a2f-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "ort", label: "📍 Wo?" },
                { key: "zeit", label: "🕕 Wann?" },
                { key: "essen", label: "🍲 Essen und Getränke" },
                { key: "geschenk", label: "🎁 Geschenk für die Lehrerin" },
              ],
              sample: `Ein Restaurant ist bequem, aber für zwölf Leute wird es teuer. Im Kurs sind einige, die wenig Geld haben. Wie wäre es, wenn wir den Kursraum nehmen und jeder etwas mitbringt? Dann kann jeder ein Gericht aus seinem Land kochen.

Der letzte Kurstag passt gut, aber gleich nach dem Unterricht ist mir zu früh — viele müssen erst die Kinder abholen. Ich schlage sechs Uhr abends vor.

Getränke könnten wir zusammen kaufen. Wenn jeder drei Euro gibt, reicht das.

Und für die Lehrerin würde ich Blumen und eine Karte kaufen. Wir könnten alle etwas hineinschreiben — das ist persönlicher als ein teures Geschenk.

Also: Kursraum, sechs Uhr am letzten Kurstag, jeder bringt Essen mit, drei Euro für Getränke, und Blumen mit Karte für die Lehrerin. Einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question: "Joy, vaqt, ovqat va sovg‘a — to‘rttasi kelishildimi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question: "Hamkorning ikkala gapiga munosabat bildirdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif iboralari ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni takrorladingizmi?",
                  points: 1,
                },
              ],
              explanation:
                "Boshqalarning holatini hisobga olib e’tiroz bildirish („einige, die wenig Geld haben“) muzokarani kuchaytiradi.",
            },
          ],
        },
      ],
    },
  ],
};
