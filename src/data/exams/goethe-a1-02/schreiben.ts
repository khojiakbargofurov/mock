import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 02 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball.
 * Teil 1: kutubxona chiptasi uchun blanka (5 bo'sh joy = 5 ball).
 * Teil 2: sport klubiga xat — 3 nuqta × 3 ball + matn shakli 1 ball = 10 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihre Freundin möchte einen Bibliotheksausweis. Schreiben Sie fünf Informationen in das Formular.",
      hint: "Har katakka faqat bitta so‘z yoki qisqa ibora yozing.",
      blocks: [
        {
          id: "a1b-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihre Freundin Nilufar Yusupova ist 24 Jahre alt und kommt aus Usbekistan. Sie wohnt jetzt in Leipzig, in der Gartenstraße 7.

Nilufar studiert an der Universität und braucht viele Bücher. Deshalb möchte sie einen Bibliotheksausweis. Studierende bezahlen nichts.

Füllen Sie für sie das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1b-s1-b1",
          stimulus: {
            kind: "formular",
            title: "Stadtbibliothek Leipzig · Anmeldung",
            rows: [
              { label: "Familienname", value: "Yusupova" },
              { label: "Vorname", gapId: "a1b-s-001" },
              { label: "Alter", gapId: "a1b-s-002" },
              { label: "Straße, Hausnummer", value: "Gartenstraße 7" },
              { label: "Wohnort", gapId: "a1b-s-003" },
              { label: "Heimatland", gapId: "a1b-s-004" },
              { label: "Beruf / Tätigkeit", gapId: "a1b-s-005" },
              { label: "Gebühr", value: "0 € (Studierende)" },
            ],
          },
          items: [
            {
              id: "a1b-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname",
              accept: ["nilufar"],
              explanation: "Vaziyatda: „Ihre Freundin Nilufar Yusupova“.",
            },
            {
              id: "a1b-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter",
              accept: ["24", "24 jahre", "24 jahre alt"],
              explanation: "„ist 24 Jahre alt“.",
            },
            {
              id: "a1b-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["leipzig"],
              explanation: "„Sie wohnt jetzt in Leipzig“ — shahar nomi.",
            },
            {
              id: "a1b-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Heimatland",
              accept: ["usbekistan", "uzbekistan"],
              explanation: "„kommt aus Usbekistan“.",
            },
            {
              id: "a1b-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Beruf / Tätigkeit",
              accept: [
                "studentin",
                "student",
                "studium",
                "sie studiert",
                "studierende",
              ],
              explanation:
                "„Nilufar studiert an der Universität“ — kasbi o‘rniga „Studentin“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten in einem Sportverein Fußball spielen. Schreiben Sie an den Verein. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Har nuqtaga 1–2 gap. Salomlashuv va xayrlashuvni unutmang.",
      blocks: [
        {
          id: "a1b-s2-b1",
          items: [
            {
              id: "a1b-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben im Internet den Sportverein „SV Grün-Weiß“ gefunden und möchten dort Fußball spielen. Schreiben Sie eine E-Mail an den Verein.",
              bullets: [
                "Warum schreiben Sie? (Sie möchten Fußball spielen)",
                "Fragen Sie, wann das Training ist.",
                "Fragen Sie nach dem Preis pro Monat.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Damen und Herren,

ich heiße Timur Rasulov und möchte gern bei Ihnen Fußball spielen. Wann ist das Training? Und wie viel kostet es pro Monat?

Vielen Dank für Ihre Antwort!

Mit freundlichen Grüßen
Timur Rasulov`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: yozish sababi",
                  question:
                    "Nima uchun yozayotganingizni aytdingizmi (futbol o‘ynamoqchisiz)?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: mashg‘ulot vaqti",
                  question:
                    "Mashg‘ulot qachon ekanini so‘radingizmi (savol shaklida)?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: narx",
                  question: "Oylik narx haqida savol berdingizmi?",
                  points: 3,
                },
                {
                  id: "c4",
                  label: "Matn shakli",
                  question:
                    "Salomlashuv („Sehr geehrte Damen und Herren“) va xayrlashuv („Mit freundlichen Grüßen“ + ism) bormi?",
                  points: 1,
                },
              ],
              explanation:
                "Savol berish A1 da alohida baholanadi: „Wann ist das Training?“ — W-savol boshida, fe’l ikkinchi o‘rinda.",
            },
          ],
        },
      ],
    },
  ],
};
