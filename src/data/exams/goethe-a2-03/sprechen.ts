import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 03 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball.
 * Teil 2 mavzusi "Mein Wochenende", Teil 3 birgalikda mehmon kutish.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihres Partners.",
      hint: "Savol tuzing (Seit wann …? Wie viele …? Wo …?) va to‘liq javob bering.",
      blocks: [
        {
          id: "a2c-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Wie lange lernen Sie schon Deutsch?" },
              { voice: "male", text: "Was machen Sie am Wochenende am liebsten?" },
            ],
          },
          items: [
            {
              id: "a2c-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "sprachen", label: "Sprachen", hint: "Welche …?" },
                { key: "arbeit", label: "Arbeit" },
                { key: "wohnort", label: "Wohnort" },
                { key: "essen", label: "Lieblingsessen" },
              ],
              sample: `Welche Sprachen sprechen Sie? — Usbekisch, Russisch und etwas Deutsch.
Wo arbeiten Sie? — Ich arbeite als Koch in einem Restaurant.
Wie lange wohnen Sie schon hier? — Seit zwei Jahren, in Erfurt.
Was ist Ihr Lieblingsessen? — Plov, natürlich. Meine Mutter kocht ihn am besten.

Antwort auf den Partner: Deutsch lerne ich seit anderthalb Jahren. Am Wochenende spiele ich am liebsten Fußball mit Freunden.`,
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
                  question:
                    "Hamkorning savollariga to‘liq gap bilan javob berdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Talaffuz va sur’at tinglovchiga tushunarlimi?",
                  points: 1,
                },
              ],
              explanation:
                "„Seit wann …?“ va „Wie lange …?“ savollariga javob „seit“ + Dativ bilan beriladi: „seit zwei Jahren“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Mein Wochenende“. Erzählen Sie mithilfe der Stichwörter.",
      hint: "1–2 daqiqa gapiring: odatda nima qilasiz va o‘tgan hafta nima bo‘ldi.",
      blocks: [
        {
          id: "a2c-sp2-b1",
          items: [
            {
              id: "a2c-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "samstag", label: "Samstagvormittag" },
                { key: "familie", label: "Familie / Freunde" },
                { key: "sport", label: "Sport oder Hobby" },
                { key: "haushalt", label: "Einkaufen, Haushalt" },
                { key: "sonntag", label: "Sonntagabend" },
              ],
              sample: `Am Samstagvormittag schlafe ich zuerst etwas länger, meistens bis acht. Danach gehe ich mit meiner Frau auf den Markt und wir kaufen Obst und Gemüse für die Woche.

Nachmittags spiele ich Fußball. Wir sind eine Gruppe aus dem Restaurant, wir treffen uns fast jeden Samstag auf dem Sportplatz.

Am Sonntag ist es ruhiger. Da putzen wir die Wohnung und ich rufe meine Eltern in Buchara an. Manchmal kommen Freunde zum Essen, dann koche ich Plov.

Am Sonntagabend gehe ich früh ins Bett, weil ich montags um sechs aufstehen muss.

Letztes Wochenende war anders: Wir waren im Zoo, weil meine Nichte zu Besuch war.`,
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
                  question:
                    "„zuerst“, „danach“, „manchmal“ kabi so‘zlar ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Kamida bir marta o‘tgan zamonni ishlatdingizmi („war“, „hatte“, Perfekt)?",
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
                "A2 da odatiy holat (Präsens) va o‘tgan hafta (Perfekt) ni aralashtira olish yuqori baholanadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Ihre Freunde kommen am Sonntag zu Besuch. Planen Sie zusammen: Wann? Was kochen wir? Wer kauft ein? Was machen wir?",
      hint: "Taklif qiling, hamkorning taklifiga rozi bo‘ling yoki muqobil bering, oxirida kelishuvni takrorlang.",
      blocks: [
        {
          id: "a2c-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde sagen, wir laden sie zum Mittagessen ein, so um zwölf. Abends ist es mit den Kindern schwierig.",
              },
              {
                voice: "female",
                text: "Und beim Essen: Sollen wir etwas bestellen? Kochen dauert so lange.",
              },
            ],
          },
          items: [
            {
              id: "a2c-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "zeit", label: "🕛 Wann? (Uhrzeit)" },
                { key: "essen", label: "🍲 Was essen wir?" },
                { key: "einkauf", label: "🛒 Wer kauft ein?" },
                { key: "programm", label: "🎲 Was machen wir zusammen?" },
              ],
              sample: `Mittagessen um zwölf finde ich gut, das passt auch mit den Kindern.

Beim Essen bin ich aber anderer Meinung: Bestellen ist teuer für sechs Personen. Wie wäre es, wenn ich Plov koche? Das dauert zwar zwei Stunden, aber ich kann schon am Samstag anfangen.

Beim Einkaufen können wir uns teilen: Ich kaufe Fleisch und Reis, und du bringst Getränke und etwas Süßes für die Kinder mit.

Nach dem Essen könnten wir in den Park gehen — dann können die Kinder draußen spielen. Wenn es regnet, bleiben wir da und spielen Karten.

Also: Sonntag zwölf Uhr, ich koche Plov, du bringst Getränke, und danach gehen wir in den Park. Einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question:
                    "Vaqt, ovqat, xarid va dastur — to‘rttasi ham kelishildimi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning ikkala gapiga munosabat bildirdingizmi (rozilik yoki muqobil)?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Taklif iboralari („Wie wäre es, wenn …“, „Ich schlage vor“) ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni takrorlab tasdiqladingizmi?",
                  points: 1,
                },
              ],
              explanation:
                "Rad etganda sabab ayting: „Bestellen ist teuer für sechs Personen“ — bu muzokara ballini oshiradi.",
            },
          ],
        },
      ],
    },
  ],
};
