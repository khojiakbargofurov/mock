import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 02 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball.
 * Mavzular 01-variantdan boshqacha: kundalik ish kuni va birgalikda sayohat.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihrer Partnerin.",
      hint: "Savol tuzing (Seit wann …? Wie oft …? Womit …?) va to‘liq javob bering.",
      blocks: [
        {
          id: "a2b-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Womit fahren Sie zur Arbeit?" },
              { voice: "female", text: "Was machen Sie am liebsten am Abend?" },
            ],
          },
          items: [
            {
              id: "a2b-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "herkunft", label: "Herkunft", hint: "Woher …?" },
                { key: "wohnung", label: "Wohnung" },
                { key: "beruf", label: "Beruf" },
                { key: "hobbys", label: "Hobbys" },
              ],
              sample: `Woher kommen Sie? — Ich komme aus Samarkand, das ist in Usbekistan.
Wie groß ist Ihre Wohnung? — Sie hat zwei Zimmer, etwa 55 Quadratmeter.
Was machen Sie beruflich? — Ich arbeite als Krankenschwester im Krankenhaus.
Welche Hobbys haben Sie? — Ich lese gern und gehe zweimal pro Woche schwimmen.

Antwort auf die Partnerin: Zur Arbeit fahre ich mit der Straßenbahn, das dauert 20 Minuten. Am Abend lese ich am liebsten oder telefoniere mit meiner Familie.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question:
                    "Har kartochka bo‘yicha grammatik to‘g‘ri savol tuzdingizmi?",
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
                "„Womit fahren Sie …?“ — vosita haqida savol. Javobda „mit + Dativ“: mit der Straßenbahn, mit dem Bus.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Mein Arbeitstag“. Erzählen Sie mithilfe der Stichwörter.",
      hint: "1–2 daqiqa gapiring. Kun tartibini ketma-ket aytib bering.",
      blocks: [
        {
          id: "a2b-sp2-b1",
          items: [
            {
              id: "a2b-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "aufstehen", label: "Aufstehen — wann?" },
                { key: "weg", label: "Weg zur Arbeit" },
                { key: "arbeit", label: "Was machen Sie dort?" },
                { key: "pause", label: "Mittagspause" },
                { key: "abend", label: "Nach der Arbeit" },
              ],
              sample: `Ich stehe um halb sechs auf, das ist früh, aber ich brauche Zeit am Morgen. Zuerst trinke ich einen Tee und wecke meinen Sohn.

Um sieben fahre ich mit der Straßenbahn zur Arbeit, das dauert etwa zwanzig Minuten. Ich arbeite in einem Krankenhaus und kümmere mich um die Patienten: Blutdruck messen, Medikamente geben, mit den Ärzten sprechen.

In der Mittagspause esse ich meistens in der Kantine, manchmal bringe ich Essen von zu Hause mit. Die Pause dauert nur dreißig Minuten.

Nach der Arbeit hole ich meinen Sohn vom Kindergarten ab. Am Abend koche ich, und wenn ich nicht zu müde bin, lerne ich noch eine halbe Stunde Deutsch.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha kartochkalar",
                  question: "Beshta kartochkaning hammasi bo‘yicha gapirdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Bog‘langan nutq",
                  question:
                    "Ketma-ketlik so‘zlari („zuerst“, „dann“, „nach der Arbeit“) ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Vaqt ifodalari va kundalik lug‘at to‘g‘ri ishlatildimi?",
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
                "Kun tartibida vaqt ifodalari boshda kelsa, fe’l darhol keyin keladi: „Um sieben fahre ich …“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Sie und Ihre Partnerin möchten am Sonntag einen Ausflug machen. Planen Sie: Wohin? Wann? Womit? Was nehmen Sie mit?",
      hint: "Taklif qiling, hamkorning taklifiga rozi bo‘ling yoki muqobil bering, oxirida kelishuvni aytib bering.",
      blocks: [
        {
          id: "a2b-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde gern an den See fahren. Aber mit dem Auto — der Bus fährt sonntags nur selten.",
              },
              {
                voice: "female",
                text: "Sollen wir schon um acht losfahren? Oder ist das zu früh für dich?",
              },
            ],
          },
          items: [
            {
              id: "a2b-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "ziel", label: "📍 Wohin? (See, Berge, Stadt)" },
                { key: "zeit", label: "🕘 Wann? (Abfahrt, Rückkehr)" },
                { key: "verkehr", label: "🚌 Womit? (Auto, Bus, Zug)" },
                { key: "essen", label: "🥪 Was nehmen wir mit?" },
              ],
              sample: `An den See ist eine gute Idee. Mit dem Auto bin ich einverstanden, dann sind wir flexibel.

Um acht ist mir ehrlich gesagt zu früh. Wie wäre es, wenn wir um halb zehn losfahren? Dann sind wir gegen elf da und haben trotzdem den ganzen Tag.

Zum Essen schlage ich vor: Ich mache Brote und bringe Obst mit, und du bringst etwas zu trinken. So müssen wir dort nichts kaufen.

Zurück würde ich gegen sechs fahren, weil ich am Montag früh arbeiten muss.

Also: Sonntag halb zehn, mit dem Auto an den See, Essen bringen wir selbst mit. Passt das für dich?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question:
                    "Joy, vaqt, transport va ovqat — to‘rttasi ham kelishildimi?",
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
                "Rad etishda sabab aytish muhim: „Um acht ist mir zu früh, weil …“ — quruq „nein“ past baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
