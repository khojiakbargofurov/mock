import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 04 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball.
 * Teil 1: bolalar bog'chasiga ariza blankasi · Teil 2: o'qituvchiga xat.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihre Nachbarin möchte ihre Tochter im Kindergarten anmelden. Schreiben Sie fünf Informationen in das Formular.",
      hint: "Har katakka bitta so‘z yoki qisqa ibora.",
      blocks: [
        {
          id: "a1d-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihre Nachbarin heißt Malika Ergasheva. Ihre Tochter Sevara ist vier Jahre alt.

Die Familie wohnt in Erfurt, in der Bergstraße 9. Sie kommen aus Usbekistan und sprechen zu Hause Usbekisch.

Sevara soll ab September fünf Tage pro Woche in den Kindergarten gehen.

Füllen Sie für die Nachbarin das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1d-s1-b1",
          stimulus: {
            kind: "formular",
            title: "Kindergarten Sonnenschein · Anmeldung",
            rows: [
              { label: "Familienname des Kindes", value: "Ergasheva" },
              { label: "Vorname des Kindes", gapId: "a1d-s-001" },
              { label: "Alter", gapId: "a1d-s-002" },
              { label: "Straße, Hausnummer", value: "Bergstraße 9" },
              { label: "Wohnort", gapId: "a1d-s-003" },
              { label: "Sprache zu Hause", gapId: "a1d-s-004" },
              { label: "Beginn", gapId: "a1d-s-005" },
              { label: "Tage pro Woche", value: "5" },
            ],
          },
          items: [
            {
              id: "a1d-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname des Kindes",
              accept: ["sevara"],
              explanation: "„Ihre Tochter Sevara ist vier Jahre alt.“",
            },
            {
              id: "a1d-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter",
              accept: ["4", "vier", "4 jahre", "vier jahre"],
              explanation: "„vier Jahre alt“.",
            },
            {
              id: "a1d-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["erfurt"],
              explanation: "„Die Familie wohnt in Erfurt“.",
            },
            {
              id: "a1d-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Sprache zu Hause",
              accept: ["usbekisch", "uzbekisch"],
              explanation: "„sprechen zu Hause Usbekisch“.",
            },
            {
              id: "a1d-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Beginn",
              accept: ["september", "im september", "ab september"],
              explanation: "„soll ab September … gehen“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie können nächste Woche nicht zum Deutschkurs kommen. Schreiben Sie an Ihre Lehrerin Frau Berger. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Har nuqtaga 1–2 gap. Salomlashuv va xayrlashuv kerak.",
      blocks: [
        {
          id: "a1d-s2-b1",
          items: [
            {
              id: "a1d-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie fahren nächste Woche für fünf Tage nach Berlin, weil Ihre Schwester heiratet. Der Deutschkurs ist jeden Tag von 18 bis 20 Uhr.",
              bullets: [
                "Schreiben Sie, dass Sie nächste Woche nicht kommen.",
                "Schreiben Sie, warum.",
                "Fragen Sie nach den Hausaufgaben.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Frau Berger,

nächste Woche kann ich leider nicht zum Kurs kommen. Meine Schwester heiratet in Berlin und ich bin fünf Tage dort.

Können Sie mir bitte die Hausaufgaben schicken?

Mit freundlichen Grüßen
Bekzod Toshev`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: kelmaslik",
                  question: "Kelmasligingizni aniq yozdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: sabab",
                  question: "Sababni tushuntirdingizmi?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: uy vazifasi",
                  question: "Uy vazifasi haqida savol berdingizmi?",
                  points: 3,
                },
                {
                  id: "c4",
                  label: "Matn shakli",
                  question:
                    "Salomlashuv („Sehr geehrte Frau Berger“) va xayrlashuv bormi?",
                  points: 1,
                },
              ],
              explanation:
                "O‘qituvchiga rasmiy shaklda yoziladi: „Sehr geehrte Frau …“ va „Mit freundlichen Grüßen“.",
            },
          ],
        },
      ],
    },
  ],
};
