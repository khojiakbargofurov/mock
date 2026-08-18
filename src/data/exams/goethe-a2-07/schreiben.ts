import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 07 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball. */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie brauchen Hilfe von Ihrer Nachbarin. Schreiben Sie ihr eine Nachricht. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona, ammo hurmatli uslub. 20–30 so‘z.",
      blocks: [
        {
          id: "a2g-s1-b1",
          items: [
            {
              id: "a2g-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie haben am Donnerstag einen wichtigen Termin beim Amt. Ihr Sohn kommt um 13 Uhr aus der Schule; Sie sind erst um 15 Uhr zurück.",
              bullets: [
                "Erklären Sie die Situation.",
                "Bitten Sie Ihre Nachbarin um Hilfe.",
                "Fragen Sie, ob das für sie geht.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Liebe Frau Weber,

am Donnerstag habe ich einen Termin beim Amt und bin erst um 15 Uhr zu Hause. Könnten Sie meinen Sohn um 13 Uhr hereinlassen?

Ginge das bei Ihnen?

Vielen Dank und liebe Grüße
Gulnora`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Vaziyat, iltimos va savol — uchalasi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub",
                  question: "Qo‘shni uchun mos, muloyim shakl ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Aniq vaqtlar berildimi va iltimos muloyimmi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Fe’l o‘z o‘rnidami va matn tushunarlimi?",
                  points: 2,
                },
              ],
              explanation:
                "„Ginge das bei Ihnen?“ — juda muloyim savol shakli, A2 da yaxshi ta’sir qoldiradi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten einen Kurs im Freizeitzentrum buchen. Schreiben Sie eine E-Mail. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub, 30–40 so‘z.",
      blocks: [
        {
          id: "a2g-s2-b1",
          items: [
            {
              id: "a2g-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Ihre Tochter (9) möchte in die Kreativwerkstatt am Mittwoch. Sie wissen nicht, ob es freie Plätze gibt und was es kostet.",
              bullets: [
                "Sagen Sie, welchen Kurs Sie meinen.",
                "Fragen Sie nach freien Plätzen.",
                "Fragen Sie nach dem Preis.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Damen und Herren,

meine Tochter ist neun Jahre alt und möchte gern an der Kreativwerkstatt am Mittwoch teilnehmen.

Gibt es dort noch freie Plätze? Und was kostet der Kurs pro Monat?

Über eine Antwort würde ich mich freuen.

Mit freundlichen Grüßen
Gulnora Karimova`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Kurs nomi, joy haqidagi savol va narx savoli bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Rasmiy uslub",
                  question: "Rasmiy salomlashuv va xayrlashuv bormi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Ikkita savol alohida va aniq berildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Gap tuzilishi va so‘z tartibi to‘g‘rimi?",
                  points: 2,
                },
              ],
              explanation:
                "Bolaning yoshini yozib qo‘yish („ist neun Jahre alt“) javobni tezlashtiradi.",
            },
          ],
        },
      ],
    },
  ],
};
