import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 07 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball. */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihres Partners.",
      blocks: [
        {
          id: "a2g-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Wie sieht ein normaler Tag bei Ihnen aus?" },
              { voice: "male", text: "Was machen Sie, wenn Sie Stress haben?" },
            ],
          },
          items: [
            {
              id: "a2g-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "fruehstueck", label: "Frühstück" },
                { key: "arbeit", label: "Arbeit oder Kurs" },
                { key: "abend", label: "Abend" },
                { key: "schlaf", label: "Schlaf" },
              ],
              sample: `Was essen Sie zum Frühstück? — Brot mit Käse und Tee, immer dasselbe.
Wann beginnt Ihre Arbeit? — Um sieben, deshalb stehe ich um halb sechs auf.
Was machen Sie am Abend? — Ich koche und helfe meinem Sohn bei den Hausaufgaben.
Wie lange schlafen Sie? — Etwa sechs Stunden, das ist eigentlich zu wenig.

Antwort auf den Partner: Ein normaler Tag ist bei mir ziemlich lang. Wenn ich Stress habe, gehe ich spazieren — das hilft mir am meisten.`,
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
                "„Wenn ich Stress habe, …“ — shart gapdan boshlansa, keyin fe’l darhol keladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Feste und Feiern“. Erzählen Sie mithilfe der Stichwörter.",
      blocks: [
        {
          id: "a2g-sp2-b1",
          items: [
            {
              id: "a2g-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "fest", label: "Welches Fest ist Ihnen wichtig?" },
                { key: "wer", label: "Mit wem feiern Sie?" },
                { key: "essen", label: "Was gibt es zu essen?" },
                { key: "unterschied", label: "Unterschiede zu Deutschland" },
                { key: "letztes", label: "Ihr letztes Fest" },
              ],
              sample: `Das wichtigste Fest für uns ist Navruz, das Frühlingsfest im März. In Usbekistan ist das ein Feiertag, hier arbeite ich an diesem Tag normal.

Gefeiert wird mit der ganzen Familie und mit Nachbarn. In Usbekistan kamen manchmal dreißig Leute; hier sind wir meistens zehn oder zwölf.

Zu essen gibt es Sumalak — das kocht man die ganze Nacht — und natürlich Plov. Meine Mutter hat mir das Rezept am Telefon erklärt.

Der größte Unterschied ist die Zeit. In Usbekistan feiert man drei Tage, hier höchstens einen Abend. Und die Nachbarn muss man vorher fragen, weil es sonst zu laut wird.

Letztes Jahr haben wir bei uns zu Hause gefeiert. Es war eng, aber schön. Zwei deutsche Nachbarn waren zum ersten Mal dabei und fanden das Essen sehr interessant.`,
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
                  question: "„der größte Unterschied“, „letztes Jahr“ kabi ifodalar bormi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "O‘tgan zamon va taqqoslash to‘g‘ri ishlatildimi?",
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
                "Taqqoslashda „In Usbekistan …, hier …“ tuzilishi eng oson va aniq ishlaydi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Ein Kollege hat Geburtstag und wird 50. Planen Sie zusammen eine Überraschung im Betrieb.",
      blocks: [
        {
          id: "a2g-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde eine große Torte bestellen und sie in der Mittagspause bringen.",
              },
              {
                voice: "female",
                text: "Und als Geschenk: Vielleicht sammeln wir Geld und kaufen ein Fahrrad? Er fährt doch gern.",
              },
            ],
          },
          items: [
            {
              id: "a2g-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "zeit", label: "🕛 Wann?" },
                { key: "geschenk", label: "🎁 Geschenk" },
                { key: "geld", label: "💶 Wie viel gibt jeder?" },
                { key: "wer", label: "👥 Wer organisiert was?" },
              ],
              sample: `Die Torte in der Mittagspause finde ich gut — dann sind alle da.

Beim Fahrrad bin ich unsicher. Ein Rad ist teuer, und wir wissen nicht, welches er möchte. Wie wäre es, wenn wir einen Gutschein für ein Fahrradgeschäft kaufen? Dann sucht er selbst aus.

Beim Geld würde ich zehn Euro pro Person vorschlagen. Wir sind fünfzehn, das reicht für einen guten Gutschein.

Ich könnte das Geld sammeln, und du bestellst die Torte. Eine Karte schreiben wir am Donnerstag, dann unterschreiben alle.

Also: Torte in der Mittagspause, Gutschein statt Fahrrad, zehn Euro pro Person, ich sammle und du bestellst. Passt das?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question: "Vaqt, sovg‘a, pul va vazifalar — to‘rttasi kelishildimi?",
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
                "„Ich bin unsicher“ — rad etishning eng yumshoq shakli; keyin darhol muqobil taklif bering.",
            },
          ],
        },
      ],
    },
  ],
};
