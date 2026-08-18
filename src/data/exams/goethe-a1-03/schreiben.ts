import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 03 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball.
 * Teil 1: sport klubiga a'zolik blankasi · Teil 2: qo'shniga xat.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihr Freund möchte Mitglied im Sportverein werden. Schreiben Sie fünf Informationen in das Formular.",
      hint: "Har katakka bitta so‘z yoki qisqa ibora.",
      blocks: [
        {
          id: "a1c-s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihr Freund heißt Bekzod Toshev. Er ist 31 Jahre alt und kommt aus Usbekistan. Er wohnt in Erfurt, in der Lindenstraße 24.

Bekzod arbeitet als Koch in einem Restaurant. Er möchte zweimal pro Woche Fußball spielen und deshalb Mitglied im Sportverein werden. Erwachsene zahlen 15 Euro im Monat.

Füllen Sie für ihn das Formular aus.`,
          },
          items: [],
        },
        {
          id: "a1c-s1-b1",
          stimulus: {
            kind: "formular",
            title: "SV Grün-Weiß Erfurt · Aufnahmeantrag",
            rows: [
              { label: "Familienname", value: "Toshev" },
              { label: "Vorname", gapId: "a1c-s-001" },
              { label: "Alter", gapId: "a1c-s-002" },
              { label: "Straße, Hausnummer", value: "Lindenstraße 24" },
              { label: "Wohnort", gapId: "a1c-s-003" },
              { label: "Heimatland", gapId: "a1c-s-004" },
              { label: "Beruf", gapId: "a1c-s-005" },
              { label: "Beitrag", value: "15 € pro Monat" },
            ],
          },
          items: [
            {
              id: "a1c-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname",
              accept: ["bekzod"],
              explanation: "Vaziyatda: „Ihr Freund heißt Bekzod Toshev“.",
            },
            {
              id: "a1c-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Alter",
              accept: ["31", "31 jahre", "31 jahre alt"],
              explanation: "„Er ist 31 Jahre alt.“",
            },
            {
              id: "a1c-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["erfurt"],
              explanation: "„Er wohnt in Erfurt“ — shahar nomi.",
            },
            {
              id: "a1c-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Heimatland",
              accept: ["usbekistan", "uzbekistan"],
              explanation: "„kommt aus Usbekistan“.",
            },
            {
              id: "a1c-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Beruf",
              accept: ["koch", "kochen", "er ist koch"],
              explanation: "„Bekzod arbeitet als Koch“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie können am Samstag nicht zum Hoffest kommen. Schreiben Sie an Ihre Nachbarin Frau Klein. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Har nuqtaga 1–2 gap. Salomlashuv va xayrlashuv ham kerak.",
      blocks: [
        {
          id: "a1c-s2-b1",
          items: [
            {
              id: "a1c-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Frau Klein hat Sie zum Hoffest am Samstag eingeladen. Sie müssen an diesem Tag arbeiten. Schreiben Sie ihr eine kurze Nachricht.",
              bullets: [
                "Danken Sie für die Einladung.",
                "Schreiben Sie, warum Sie nicht kommen können.",
                "Fragen Sie, ob Sie später vorbeikommen dürfen.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Liebe Frau Klein,

vielen Dank für die Einladung zum Hoffest! Leider muss ich am Samstag bis 18 Uhr arbeiten und kann nicht kommen.

Darf ich vielleicht später am Abend noch vorbeikommen?

Viele Grüße
Timur Rasulov`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: minnatdorchilik",
                  question: "Taklif uchun rahmat aytdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: sabab",
                  question: "Nega kela olmasligingizni yozdingizmi?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: savol",
                  question: "Keyinroq kelish haqida so‘radingizmi?",
                  points: 3,
                },
                {
                  id: "c4",
                  label: "Matn shakli",
                  question:
                    "Salomlashuv („Liebe Frau Klein“) va xayrlashuv („Viele Grüße“ + ism) bormi?",
                  points: 1,
                },
              ],
              explanation:
                "Qo‘shniga yozilgan xatda „Liebe Frau …“ va „Viele Grüße“ ishlatiladi — bu yarim rasmiy, do‘stona uslub.",
            },
          ],
        },
      ],
    },
  ],
};
