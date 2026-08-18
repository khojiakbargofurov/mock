import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 06 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihre Freundin möchte einen Computerkurs besuchen. Schreiben Sie fünf Informationen in das Formular.",
      blocks: [
        {
          id: "a1f-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihre Freundin heißt Gulnora Karimova. Sie ist 41 Jahre alt und kommt aus Usbekistan.

Sie wohnt in Erfurt, in der Ulmenstraße 3. Ihre Telefonnummer ist 0176 4432891.

Gulnora hat noch nie mit einem Computer gearbeitet und möchte deshalb den Anfängerkurs besuchen. Er beginnt im November.

Füllen Sie für sie das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1f-s1-b1",
          stimulus: {
            kind: "formular",
            title: "Volkshochschule Erfurt · Anmeldung Computerkurs",
            rows: [
              { label: "Familienname", value: "Karimova" },
              { label: "Vorname", gapId: "a1f-s-001" },
              { label: "Alter", gapId: "a1f-s-002" },
              { label: "Straße, Hausnummer", value: "Ulmenstraße 3" },
              { label: "Wohnort", gapId: "a1f-s-003" },
              { label: "Telefon", gapId: "a1f-s-004" },
              { label: "Kurs", gapId: "a1f-s-005" },
              { label: "Beginn", value: "November" },
            ],
          },
          items: [
            {
              id: "a1f-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname",
              accept: ["gulnora"],
              explanation: "„Ihre Freundin heißt Gulnora Karimova.“",
            },
            {
              id: "a1f-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter",
              accept: ["41", "41 jahre", "41 jahre alt"],
              explanation: "„Sie ist 41 Jahre alt.“",
            },
            {
              id: "a1f-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["erfurt"],
              explanation: "„Sie wohnt in Erfurt.“",
            },
            {
              id: "a1f-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Telefon",
              accept: ["0176 4432891", "01764432891", "0176/4432891"],
              explanation: "Vaziyatda berilgan raqam.",
            },
            {
              id: "a1f-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Kurs",
              accept: [
                "anfängerkurs",
                "anfaengerkurs",
                "computerkurs für anfänger",
                "anfänger",
              ],
              explanation: "„möchte deshalb den Anfängerkurs besuchen“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten Ihren Deutschkurs wechseln. Schreiben Sie an die Sprachschule. Schreiben Sie zu allen drei Punkten etwas.",
      blocks: [
        {
          id: "a1f-s2-b1",
          items: [
            {
              id: "a1f-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie besuchen den Kurs am Vormittag. Ab nächstem Monat arbeiten Sie vormittags und möchten deshalb in den Abendkurs wechseln.",
              bullets: [
                "Schreiben Sie, welchen Kurs Sie jetzt besuchen.",
                "Schreiben Sie, warum Sie wechseln möchten.",
                "Fragen Sie, ob im Abendkurs ein Platz frei ist.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Damen und Herren,

ich besuche zurzeit den Deutschkurs A1 am Vormittag. Ab Oktober arbeite ich vormittags und kann deshalb nicht mehr kommen.

Ist im Abendkurs noch ein Platz frei?

Vielen Dank für Ihre Antwort.

Mit freundlichen Grüßen
Gulnora Karimova`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: hozirgi kurs",
                  question: "Qaysi kursga qatnashayotganingizni yozdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: sabab",
                  question: "Nega almashtirmoqchi ekaningizni tushuntirdingizmi?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: savol",
                  question: "Kechki kursda joy bormi deb so‘radingizmi?",
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
                "„zurzeit“ — hozirgi holatni bildiradi va rasmiy xatda juda foydali.",
            },
          ],
        },
      ],
    },
  ],
};
