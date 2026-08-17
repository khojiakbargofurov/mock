import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball (6 + 7 + 7).
 * Rasmiy imtihon juftlikda o'tadi: hamkorning gaplari TTS orqali o'qiladi.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihrer Partnerin.",
      hint: "Savol tuzing (Wo …? Wie lange …? Welche …?) va hamkorning savoliga to‘liq javob bering.",
      blocks: [
        {
          id: "a2sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Wo wohnen Sie und wie lange schon?" },
              { voice: "female", text: "Welche Sprachen sprechen Sie?" },
            ],
          },
          items: [
            {
              id: "a2-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "wohnort", label: "Wohnort", hint: "Wo …?" },
                { key: "familie", label: "Familie" },
                { key: "arbeit", label: "Arbeit / Studium" },
                { key: "sprachen", label: "Sprachen" },
              ],
              sample: `Wo wohnen Sie? — Ich wohne seit zwei Jahren in Bremen, in einer kleinen Wohnung.
Haben Sie Geschwister? — Ja, ich habe einen Bruder und eine Schwester.
Was machen Sie beruflich? — Ich arbeite als Techniker in einer Firma für Solaranlagen.
Welche Sprachen sprechen Sie? — Usbekisch, Russisch und Deutsch, ein bisschen Englisch.

Antwort auf die Partnerin: Ich wohne in Bremen, schon seit zwei Jahren. Ich spreche Usbekisch, Russisch und Deutsch.`,
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
                "A2 Teil 1 da savol tuzish baholanadi: „Wo wohnen Sie?“ — fe’l ikkinchi o‘rinda, W-savol boshida.",
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
      hint: "1–2 daqiqa gapiring. O‘tgan hafta oxiri haqida Perfekt bilan gapirsangiz ham bo‘ladi.",
      blocks: [
        {
          id: "a2sp2-b1",
          items: [
            {
              id: "a2-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "samstag", label: "Samstag — was machen Sie?" },
                { key: "menschen", label: "Mit wem?" },
                { key: "essen", label: "Essen und Trinken" },
                { key: "sonntag", label: "Sonntag" },
                { key: "gern", label: "Was machen Sie besonders gern?" },
              ],
              sample: `Am Samstag stehe ich später auf, meistens um neun Uhr. Zuerst kaufe ich mit meiner Frau auf dem Markt ein, dort ist das Gemüse frischer und billiger.

Am Nachmittag treffe ich oft Freunde. Wir spielen Fußball im Park oder trinken einen Kaffee in der Stadt. Am Abend kochen wir zusammen, meistens Plov — das ist ein Reisgericht aus Usbekistan.

Der Sonntag ist ruhiger. Ich telefoniere mit meiner Familie in Taschkent und lerne zwei Stunden Deutsch. Am liebsten mache ich am Sonntag einen langen Spaziergang am Fluss.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha kartochkalar",
                  question:
                    "Beshta kartochkaning hammasi bo‘yicha gapirdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Bog‘langan nutq",
                  question:
                    "Gaplar bog‘langanmi („zuerst“, „danach“, „am liebsten“) — sanab o‘tish emas, hikoya bo‘ldimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Vaqt ifodalari va kundalik lug‘at to‘g‘ri ishlatildimi?",
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
                "Teil 2 da bog‘langan nutq baholanadi. Kartochkalar tartibini o‘zgartirish mumkin, lekin hech birini tashlab ketmang.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Sie und Ihre Partnerin möchten zusammen ein Geschenk für eine Kollegin kaufen. Planen Sie: Wann? Wo? Was?",
      hint: "Taklif qiling, hamkorning taklifiga rozi bo‘ling yoki muqobil bering, oxirida kelishuvni aytib bering.",
      blocks: [
        {
          id: "a2sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Am Mittwoch habe ich leider keine Zeit. Geht es bei dir auch am Donnerstag?",
              },
              {
                voice: "female",
                text: "Und was schenken wir? Ich finde Blumen ein bisschen langweilig.",
              },
            ],
          },
          items: [
            {
              id: "a2-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "tag", label: "🗓 Wann? (Tag und Uhrzeit)" },
                { key: "ort", label: "🏬 Wo? (Geschäft, Stadtzentrum)" },
                { key: "geschenk", label: "🎁 Was? (Geschenkidee)" },
                { key: "geld", label: "💶 Wie viel Geld?" },
              ],
              sample: `Sollen wir am Mittwoch nach der Arbeit einkaufen gehen? — Am Donnerstag geht es bei mir auch, kein Problem. Dann treffen wir uns um 17 Uhr vor dem Kaufhaus.

Ich schlage vor, wir gehen ins Kaufhaus Nordstern, dort gibt es alles an einem Ort.

Blumen finde ich auch langweilig. Wie wäre es mit einem Buch und einer schönen Tasse? Oder wir schenken einen Gutschein für das Café.

Was meinst du: 20 Euro von jedem? Gut, dann machen wir das so. Bis Donnerstag um 17 Uhr!`,
              criteria: [
                {
                  id: "c1",
                  label: "Taklif qilish",
                  question:
                    "O‘zingiz taklif kiritdingizmi („Sollen wir …?“, „Ich schlage vor …“)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Hamkorga javob",
                  question:
                    "Hamkorning ikkala gapiga munosabat bildirdingizmi (rozilik yoki muqobil)?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "To‘rt nuqta",
                  question:
                    "Vaqt, joy, sovg‘a va pul — to‘rtala nuqta kelishildimi?",
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
                "Teil 3 da muzokara baholanadi: faqat gapirish emas, hamkorning taklifiga javob berish va yakuniy kelishuvga kelish kerak.",
            },
          ],
        },
      ],
    },
  ],
};
