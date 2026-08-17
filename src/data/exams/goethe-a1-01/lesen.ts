import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Lesen — 3 Teil, 15 element, ~25 daqiqa.
 * Teil 1: qisqa xatlar (richtig/falsch) · Teil 2: vaziyatga mos e'lonni tanlash
 * (a yoki b) · Teil 3: ko'cha va bino lavhalari (richtig/falsch).
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      hint: "Har bayonot uchun matndagi aniq joyni toping — taxmin qilmang.",
      blocks: [
        {
          id: "l1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail",
            body: `Liebe Nilufar,

wie geht es dir? Ich komme am Samstag nach Berlin! Ich fahre nicht mit dem Auto, ich nehme den Zug. Der Zug kommt um 16.30 Uhr am Hauptbahnhof an.

Ich bleibe drei Tage. Kannst du mich vom Bahnhof abholen? Meine Handynummer ist neu: 0176 5544321.

Bis Samstag!
Deine Anna`,
          },
          items: [
            {
              id: "a1-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Anna kommt am Samstag nach Berlin.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ich komme am Samstag nach Berlin“ — to‘g‘ridan-to‘g‘ri aytilgan.",
            },
            {
              id: "a1-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Anna fährt mit dem Auto.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Ich fahre nicht mit dem Auto, ich nehme den Zug“ — poyezdda keladi.",
            },
            {
              id: "a1-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Anna bleibt eine Woche in Berlin.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ich bleibe drei Tage“ — uch kun, bir hafta emas.",
            },
          ],
        },
        {
          id: "l1-b2",
          stimulus: {
            kind: "text",
            title: "Nachricht von der Sprachschule",
            body: `Guten Tag, Herr Karimov,

Ihr Deutschkurs A1 beginnt am 12. September. Der Unterricht ist immer am Abend, von 18.00 bis 20.00 Uhr, im Raum 4.

Das Kursbuch bekommen Sie am ersten Tag von uns. Sie müssen es nicht kaufen.

Mit freundlichen Grüßen
Sprachschule Aktiv`,
          },
          items: [
            {
              id: "a1-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Der Unterricht ist am Abend.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„immer am Abend, von 18.00 bis 20.00 Uhr“.",
            },
            {
              id: "a1-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Herr Karimov muss das Kursbuch kaufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Sie müssen es nicht kaufen“ — kitob birinchi kuni beriladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Kreuzen Sie an: a oder b.",
      hint: "Har vaziyatda bitta shart hal qiluvchi bo‘ladi: vaqt, narx yoki joy.",
      blocks: [
        {
          id: "l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "WG-Zimmer",
                body: "Zimmer in Wohngemeinschaft, 18 m², für 1 Person. 320 € warm. Nur für Studenten.",
              },
              {
                key: "b",
                title: "2-Zimmer-Wohnung",
                body: "Kleine Wohnung im Zentrum, 45 m², für 2 Personen. 590 € warm. Ab 1. Oktober frei.",
              },
            ],
          },
          items: [
            {
              id: "a1-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie suchen eine Wohnung für zwei Personen im Stadtzentrum.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "Ikki kishi uchun va markazda — faqat b mos. a faqat 1 kishilik va talabalar uchun.",
            },
          ],
        },
        {
          id: "l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Bäckerei Sonne",
                body: "Montag bis Freitag 6–18 Uhr, Samstag 6–13 Uhr. Sonntag geschlossen.",
              },
              {
                key: "b",
                title: "Bäckerei am Markt",
                body: "Täglich frisches Brot! Sonntag von 8 bis 12 Uhr geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "a1-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten am Sonntag Brot kaufen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "a da „Sonntag geschlossen“, b esa yakshanba 8–12 gacha ochiq.",
            },
          ],
        },
        {
          id: "l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Deutsch am Vormittag",
                body: "Intensivkurs A1, Montag bis Freitag, 9–12 Uhr. 4 Wochen.",
              },
              {
                key: "b",
                title: "Deutsch nach der Arbeit",
                body: "Abendkurs A1, Dienstag und Donnerstag, 18.30–20.00 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt:
                "Sie arbeiten bis 17 Uhr und suchen einen Deutschkurs am Abend.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "Kunduzgi kurs 9–12 da — ishlaydigan odamga mos emas; kechki kurs 18.30 da boshlanadi.",
            },
          ],
        },
        {
          id: "l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fahrrad zu verkaufen",
                body: "Gebrauchtes Fahrrad, 4 Jahre alt, fährt gut. Nur 60 €. Tel. 0157 223344.",
              },
              {
                key: "b",
                title: "Fahrradladen Müller",
                body: "Neue Fahrräder ab 399 €. Reparatur und Service.",
              },
            ],
          },
          items: [
            {
              id: "a1-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten ein Fahrrad kaufen, aber nur wenig bezahlen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "60 € — arzon; do‘kondagi yangi velosipedlar 399 € dan.",
            },
          ],
        },
        {
          id: "l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Praxis Dr. Schmidt",
                body: "Sprechzeiten: Mo, Mi, Fr 8–16 Uhr. Am Wochenende geschlossen.",
              },
              {
                key: "b",
                title: "Praxis Dr. Novak",
                body: "Auch am Samstag für Sie da: Samstag 9–13 Uhr. Bitte Termin machen.",
              },
            ],
          },
          items: [
            {
              id: "a1-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie brauchen am Samstag einen Arzt.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "a da „Am Wochenende geschlossen“; b shanba 9–13 da qabul qiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Schilder und Aushänge. Sind die Sätze 11 bis 15 Richtig oder Falsch? Kreuzen Sie an.",
      hint: "Lavhalarda ko‘pincha bitta so‘z — „nicht“, „nur“, „ab“ — javobni hal qiladi.",
      blocks: [
        {
          id: "l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "An der Tür der Apotheke",
            body: "Wir machen Urlaub vom 1. bis 15. August. Die Apotheke in der Bahnhofstraße ist für Sie geöffnet.",
          },
          items: [
            {
              id: "a1-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Am 10. August ist diese Apotheke geschlossen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Ta’til 1–15 avgust — 10 avgust shu oraliqda, dorixona yopiq.",
            },
          ],
        },
        {
          id: "l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "Im Bus",
            body: "Fahrkarten bitte beim Fahrer kaufen. Bitte passend zahlen.",
          },
          items: [
            {
              id: "a1-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Man kann die Fahrkarte im Bus kaufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Fahrkarten bitte beim Fahrer kaufen“ — haydovchidan.",
            },
          ],
        },
        {
          id: "l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "In der Sprachschule",
            body: "Achtung: Der Kurs A1.2 ist heute nicht im Raum 10. Der Unterricht findet im Raum 12 statt.",
          },
          items: [
            {
              id: "a1-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Der Kurs A1.2 ist heute im Raum 10.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nicht im Raum 10 … im Raum 12“ — xona o‘zgargan.",
            },
          ],
        },
        {
          id: "l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Im Park",
            body: "Liebe Hundebesitzer: Bitte führen Sie Ihren Hund an der Leine. Danke!",
          },
          items: [
            {
              id: "a1-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Die Hunde dürfen im Park frei laufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„an der Leine“ — it bog‘ichda bo‘lishi kerak, erkin yura olmaydi.",
            },
          ],
        },
        {
          id: "l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "Am Schwimmbad",
            body: "Öffnungszeiten: Dienstag bis Sonntag 7–21 Uhr. Montag Ruhetag.",
          },
          items: [
            {
              id: "a1-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Am Montag kann man hier schwimmen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Montag Ruhetag“ — dushanba dam olish kuni, basseyn yopiq.",
            },
          ],
        },
      ],
    },
  ],
};
