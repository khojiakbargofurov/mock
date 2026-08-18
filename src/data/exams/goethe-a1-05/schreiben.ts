import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 05 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihr Kollege möchte einen Schwimmkurs für seinen Sohn buchen. Schreiben Sie fünf Informationen in das Formular.",
      blocks: [
        {
          id: "a1e-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihr Kollege heißt Anvar Salimov. Sein Sohn Timur ist sieben Jahre alt.

Die Familie wohnt in Leipzig, in der Seestraße 11. Timur kann noch nicht schwimmen.

Der Kurs beginnt im Oktober und kostet 70 Euro.

Füllen Sie für Ihren Kollegen das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1e-s1-b1",
          stimulus: {
            kind: "formular",
            title: "Schwimmbad Leipzig · Anmeldung Schwimmkurs",
            rows: [
              { label: "Familienname", value: "Salimov" },
              { label: "Vorname des Kindes", gapId: "a1e-s-001" },
              { label: "Alter des Kindes", gapId: "a1e-s-002" },
              { label: "Straße, Hausnummer", value: "Seestraße 11" },
              { label: "Wohnort", gapId: "a1e-s-003" },
              { label: "Kann schwimmen?", gapId: "a1e-s-004" },
              { label: "Kursbeginn", gapId: "a1e-s-005" },
              { label: "Preis", value: "70 €" },
            ],
          },
          items: [
            {
              id: "a1e-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname des Kindes",
              accept: ["timur"],
              explanation: "„Sein Sohn Timur ist sieben Jahre alt.“",
            },
            {
              id: "a1e-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter des Kindes",
              accept: ["7", "sieben", "7 jahre", "sieben jahre"],
              explanation: "„sieben Jahre alt“.",
            },
            {
              id: "a1e-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["leipzig"],
              explanation: "„Die Familie wohnt in Leipzig“.",
            },
            {
              id: "a1e-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Kann schwimmen?",
              accept: ["nein", "nicht", "noch nicht"],
              explanation: "„Timur kann noch nicht schwimmen.“",
            },
            {
              id: "a1e-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Kursbeginn",
              accept: ["oktober", "im oktober"],
              explanation: "„Der Kurs beginnt im Oktober“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten am Sprachcafé teilnehmen. Schreiben Sie an das Nachbarschaftszentrum. Schreiben Sie zu allen drei Punkten etwas.",
      blocks: [
        {
          id: "a1e-s2-b1",
          items: [
            {
              id: "a1e-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben im Internet gelesen, dass es donnerstags ein Sprachcafé gibt. Sie möchten kommen, wissen aber nicht, ob man sich anmelden muss.",
              bullets: [
                "Schreiben Sie, warum Sie schreiben.",
                "Fragen Sie, ob eine Anmeldung nötig ist.",
                "Fragen Sie, ob das Sprachcafé auch für Anfänger ist.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Damen und Herren,

ich habe im Internet von Ihrem Sprachcafé am Donnerstag gelesen und möchte gern kommen.

Muss ich mich vorher anmelden? Und ist das Sprachcafé auch für Anfänger geeignet?

Vielen Dank für Ihre Antwort.

Mit freundlichen Grüßen
Anvar Salimov`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: sabab",
                  question: "Nima uchun yozayotganingizni aytdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: ro‘yxat",
                  question: "Ro‘yxatdan o‘tish kerakmi deb so‘radingizmi?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: daraja",
                  question: "Boshlovchilar uchunmi deb so‘radingizmi?",
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
                "Ikki savolni ikki alohida gap qilib bering — shunda ikkala nuqta ham baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
