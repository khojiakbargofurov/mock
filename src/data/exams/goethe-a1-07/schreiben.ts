import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 07 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihr Nachbar möchte einen Bibliotheksausweis für seinen Sohn. Schreiben Sie fünf Informationen in das Formular.",
      blocks: [
        {
          id: "a1g-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihr Nachbar heißt Farrux Sobirov. Sein Sohn Aziz ist 11 Jahre alt und geht in die 5. Klasse.

Die Familie wohnt in Leipzig, in der Turmstraße 8.

Aziz liest gern und braucht viele Bücher für die Schule. Für Kinder ist der Ausweis kostenlos.

Füllen Sie für Ihren Nachbarn das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1g-s1-b1",
          stimulus: {
            kind: "formular",
            title: "Stadtbibliothek Leipzig · Anmeldung",
            rows: [
              { label: "Familienname", value: "Sobirov" },
              { label: "Vorname", gapId: "a1g-s-001" },
              { label: "Alter", gapId: "a1g-s-002" },
              { label: "Straße, Hausnummer", value: "Turmstraße 8" },
              { label: "Wohnort", gapId: "a1g-s-003" },
              { label: "Klasse", gapId: "a1g-s-004" },
              { label: "Gebühr", gapId: "a1g-s-005" },
            ],
          },
          items: [
            {
              id: "a1g-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname",
              accept: ["aziz"],
              explanation: "„Sein Sohn Aziz ist 11 Jahre alt.“",
            },
            {
              id: "a1g-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter",
              accept: ["11", "11 jahre", "elf"],
              explanation: "„11 Jahre alt“.",
            },
            {
              id: "a1g-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["leipzig"],
              explanation: "„Die Familie wohnt in Leipzig.“",
            },
            {
              id: "a1g-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Klasse",
              accept: ["5", "5. klasse", "fünfte", "fuenfte"],
              explanation: "„geht in die 5. Klasse“.",
            },
            {
              id: "a1g-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Gebühr",
              accept: ["0", "0 €", "kostenlos", "nichts", "frei"],
              explanation: "„Für Kinder ist der Ausweis kostenlos.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten Ihre Wohnung untervermieten. Schreiben Sie an die Hausverwaltung. Schreiben Sie zu allen drei Punkten etwas.",
      blocks: [
        {
          id: "a1g-s2-b1",
          items: [
            {
              id: "a1g-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie fahren für drei Monate nach Usbekistan. In dieser Zeit soll ein Kollege in Ihrer Wohnung wohnen.",
              bullets: [
                "Schreiben Sie, warum Sie schreiben.",
                "Schreiben Sie, wie lange Sie weg sind.",
                "Fragen Sie, ob das erlaubt ist.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Damen und Herren,

von Juli bis September fahre ich nach Usbekistan. In dieser Zeit möchte ein Kollege in meiner Wohnung wohnen.

Ist das erlaubt? Und brauchen Sie dafür etwas von mir?

Vielen Dank für Ihre Antwort.

Mit freundlichen Grüßen
Farrux Sobirov`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: sabab",
                  question: "Nima uchun yozayotganingizni aytdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: muddat",
                  question: "Qancha vaqt yo‘q bo‘lishingizni yozdingizmi?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: savol",
                  question: "Ruxsat etiladimi deb so‘radingizmi?",
                  points: 3,
                },
                {
                  id: "c4",
                  label: "Matn shakli",
                  question: "Salomlashuv va xayrlashuv bormi?",
                  points: 1,
                },
              ],
              explanation:
                "Vaqt oralig‘ini „von … bis …“ bilan berish A1 da kutiladi va aniqlik qo‘shadi.",
            },
          ],
        },
      ],
    },
  ],
};
