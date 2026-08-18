import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 05 · Schreiben — 2 Teil, 30 daqiqa, 20 xom ball.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Sie haben etwas in der Wohnung Ihrer Freundin vergessen. Schreiben Sie ihr eine Nachricht. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Do‘stona uslub, 20–30 so‘z.",
      blocks: [
        {
          id: "a2e-s1-b1",
          items: [
            {
              id: "a2e-s-001",
              nr: 1,
              kind: "freitext",
              points: 10,
              situation:
                "Sie waren gestern bei Ihrer Freundin Lena und haben Ihren Schal vergessen. Sie brauchen ihn am Wochenende.",
              bullets: [
                "Schreiben Sie, was Sie vergessen haben.",
                "Fragen Sie, ob Sie ihn abholen können.",
                "Schlagen Sie einen Termin vor.",
              ],
              minWords: 18,
              maxWords: 35,
              sample: `Hallo Lena,

ich habe gestern meinen blauen Schal bei dir vergessen. Kann ich ihn abholen? Passt es dir am Donnerstagabend?

Danke und liebe Grüße
Anvar`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Nima unutilgani, olib ketish va vaqt taklifi bormi?",
                  points: 4,
                },
                {
                  id: "c2",
                  label: "Uslub (do‘stona)",
                  question: "„du“ shakli va do‘stona salomlashuv ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi va tuzilish",
                  question: "Savol shakli to‘g‘ri tuzildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "O‘tgan zamon („habe … vergessen“) to‘g‘ri ishlatildimi?",
                  points: 2,
                },
              ],
              explanation:
                "„Passt es dir am …?“ — vaqt taklif qilishning eng oddiy va tabiiy shakli.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "freitext",
      instruction:
        "Sie möchten in Ihrem Wohnhaus einen Stellplatz für Ihr Fahrrad. Schreiben Sie eine E-Mail an die Hausverwaltung. Schreiben Sie zu allen drei Punkten etwas.",
      hint: "Rasmiy uslub, 30–40 so‘z.",
      blocks: [
        {
          id: "a2e-s2-b1",
          items: [
            {
              id: "a2e-s-002",
              nr: 2,
              kind: "freitext",
              points: 10,
              situation:
                "Im Keller gibt es einen Fahrradraum, aber er ist immer abgeschlossen. Sie fahren täglich mit dem Rad zur Arbeit.",
              bullets: [
                "Erklären Sie, warum Sie schreiben.",
                "Fragen Sie nach einem Schlüssel für den Fahrradraum.",
                "Fragen Sie, ob das etwas kostet.",
              ],
              minWords: 28,
              maxWords: 50,
              sample: `Sehr geehrte Damen und Herren,

ich wohne seit April in der Seestraße 11 und fahre jeden Tag mit dem Fahrrad zur Arbeit. Der Fahrradraum im Keller ist immer abgeschlossen.

Könnte ich bitte einen Schlüssel dafür bekommen? Und kostet der Stellplatz etwas?

Mit freundlichen Grüßen
Anvar Salimov`,
              criteria: [
                {
                  id: "c1",
                  label: "Uch nuqta bajarilgan",
                  question: "Sabab, kalit haqidagi so‘rov va narx savoli bormi?",
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
                  question: "Muloyim so‘rov („Könnte ich bitte …“) ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "To‘g‘rilik",
                  question: "Gap tuzilishi va zamon to‘g‘rimi?",
                  points: 2,
                },
              ],
              explanation:
                "Manzilingizni yozib qo‘yish („ich wohne … in der Seestraße 11“) rasmiy xatda javobni tezlashtiradi.",
            },
          ],
        },
      ],
    },
  ],
};
