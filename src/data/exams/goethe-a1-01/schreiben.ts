import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Schreiben — 2 Teil, ~20 daqiqa, 15 ball.
 * Teil 1: blankani to'ldirish (5 bo'sh joy = 5 ball).
 * Teil 2: qisqa xat — 3 ta mazmun nuqtasi × 3 ball + matn shakli 1 ball = 10 ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "formular",
      instruction:
        "Ihr Freund möchte einen Deutschkurs besuchen. Schreiben Sie fünf Informationen in das Formular.",
      hint: "Har katakka faqat bitta so‘z yoki qisqa ibora yozing.",
      blocks: [
        {
          // Vaziyat matni — blankadagi ma'lumotlar shundan olinadi
          id: "s1-intro",
          stimulus: {
            kind: "text",
            title: "Situation",
            body: `Ihr Freund Ali Karimov kommt aus Usbekistan. Er wohnt jetzt in Bremen, in der Langen Straße 12.

Er hat schon den Kurs A1 gemacht und möchte nun einen Kurs auf dem Niveau A2 besuchen. Ali arbeitet bis 17 Uhr und hat nur am Abend Zeit.

Füllen Sie für ihn das Formular aus.`,
          },
          items: [],
        },
        {
          id: "s1-b1",
          stimulus: {
            kind: "formular",
            title: "Sprachschule Aktiv · Anmeldung",
            rows: [
              { label: "Familienname", value: "Karimov" },
              { label: "Vorname", gapId: "a1-s-001" },
              { label: "Heimatland", gapId: "a1-s-002" },
              { label: "Straße, Hausnummer", value: "Lange Straße 12" },
              { label: "Wohnort", gapId: "a1-s-003" },
              { label: "Kurs (Niveau)", gapId: "a1-s-004" },
              { label: "Kurszeit (Vormittag oder Abend)", gapId: "a1-s-005" },
              { label: "Telefon", value: "0421 998877" },
            ],
          },
          items: [
            {
              id: "a1-s-001",
              nr: 1,
              kind: "gap",
              points: 1,
              label: "Vorname",
              accept: ["ali"],
              explanation: "Vaziyatda: „Ihr Freund Ali Karimov“ — ismi Ali.",
            },
            {
              id: "a1-s-002",
              nr: 2,
              kind: "gap",
              points: 1,
              label: "Heimatland",
              accept: ["usbekistan", "uzbekistan", "usbekischtan"],
              explanation: "„Er kommt aus Usbekistan.“",
            },
            {
              id: "a1-s-003",
              nr: 3,
              kind: "gap",
              points: 1,
              label: "Wohnort",
              accept: ["bremen"],
              explanation:
                "Manzil „Lange Straße 12 in Bremen“ — shahar nomi Bremen.",
            },
            {
              id: "a1-s-004",
              nr: 4,
              kind: "gap",
              points: 1,
              label: "Kurs (Niveau)",
              accept: ["a2", "a 2", "kurs a2", "a2-kurs", "deutsch a2"],
              explanation: "„Er möchte einen Kurs auf dem Niveau A2 machen.“",
            },
            {
              id: "a1-s-005",
              nr: 5,
              kind: "gap",
              points: 1,
              label: "Kurszeit",
              accept: ["abend", "abends", "am abend", "abendkurs"],
              explanation:
                "„Er arbeitet bis 17 Uhr und hat nur am Abend Zeit“ — Abend.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten im Sommer nach Hamburg fahren. Schreiben Sie an die Touristen-Information. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Har nuqtaga 1–2 gap. Salomlashuv va xayrlashuvni unutmang.",
      blocks: [
        {
          id: "s2-b1",
          items: [
            {
              id: "a1-s-006",
              nr: 6,
              kind: "freitext",
              points: 10,
              situation:
                "Sie fahren im Juli mit Ihrer Familie nach Hamburg und brauchen Informationen. Schreiben Sie eine E-Mail an die Touristen-Information Hamburg.",
              bullets: [
                "Warum schreiben Sie? (Reise im Juli, Sie brauchen Informationen)",
                "Was möchten Sie in Hamburg sehen? (Museum, Hafen …)",
                "Fragen Sie nach einem günstigen Hotel.",
              ],
              minWords: 25,
              maxWords: 45,
              sample: `Sehr geehrte Damen und Herren,

im Juli komme ich mit meiner Familie nach Hamburg. Deshalb brauche ich Informationen. Wir möchten gern den Hafen und ein Museum sehen. Können Sie uns bitte auch ein günstiges Hotel im Zentrum nennen?

Vielen Dank!
Mit freundlichen Grüßen
Ali Karimov`,
              criteria: [
                {
                  id: "c1",
                  label: "1-nuqta: yozish sababi",
                  question:
                    "Nima uchun yozayotganingizni aytdingizmi (iyulda safar, ma’lumot kerak)?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "2-nuqta: nimani ko‘rmoqchisiz",
                  question:
                    "Hamburgda nima ko‘rmoqchi ekaningizni yozdingizmi (port, muzey …)?",
                  points: 3,
                },
                {
                  id: "c3",
                  label: "3-nuqta: mehmonxona haqida savol",
                  question:
                    "Arzon mehmonxona haqida savol berdingizmi (savol shaklida)?",
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
                "Rasmiy imtihonda har mazmun nuqtasi to‘liq bajarilsa 3, qisman bajarilsa 1,5, umuman bo‘lmasa 0 ball. Matn shakli uchun 1 ball.",
            },
          ],
        },
      ],
    },
  ],
};
