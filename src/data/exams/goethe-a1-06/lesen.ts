import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 06 · Lesen — 3 Teil, 15 element, ~25 daqiqa. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      blocks: [
        {
          id: "a1f-l1-b1",
          stimulus: {
            kind: "text",
            title: "Nachricht von Timur",
            body: `Hallo Anvar,

am Samstag ziehe ich um. Die Wohnung ist im dritten Stock, leider ohne Aufzug.

Wir fangen um neun Uhr an. Kannst du kommen? Wir sind bis jetzt nur zu dritt.

Mittags gibt es Pizza, Getränke habe ich auch.

Wenn du nicht kannst, ist das kein Problem. Sag mir einfach bis Donnerstag Bescheid.

Bis dann
Timur`,
          },
          items: [
            {
              id: "a1f-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Timur zieht am Wochenende um.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„am Samstag ziehe ich um“.",
            },
            {
              id: "a1f-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Anvar soll etwas zu essen mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Pitsa va ichimlik Timurda bor.",
            },
            {
              id: "a1f-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Anvar soll bis Donnerstag antworten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Sag mir einfach bis Donnerstag Bescheid.“",
            },
          ],
        },
        {
          id: "a1f-l1-b2",
          stimulus: {
            kind: "text",
            title: "Information vom Schwimmbad",
            body: `Liebe Gäste,

vom 1. bis 15. September ist das Schwimmbad geschlossen. Wir reinigen die Becken.

Die Sauna bleibt in dieser Zeit offen, täglich von 15 bis 21 Uhr.

Zehnerkarten verlieren ihre Gültigkeit nicht. Sie gelten auch nach der Pause weiter.

Ihr Team vom Stadtbad`,
          },
          items: [
            {
              id: "a1f-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Im September kann man in der Sauna sein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Die Sauna bleibt in dieser Zeit offen.“",
            },
            {
              id: "a1f-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Alte Zehnerkarten gelten nicht mehr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Zehnerkarten verlieren ihre Gültigkeit nicht.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Situationen 6 bis 10 und die Anzeigen a und b. Welche Anzeige passt? Kreuzen Sie an.",
      blocks: [
        {
          id: "a1f-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Umzugshilfe",
                body: "Zwei Studenten helfen beim Tragen, 18 Euro pro Person und Stunde. Auch am Wochenende, kein Transporter.",
              },
              {
                key: "b",
                title: "Umzugsfirma Schnell",
                body: "Komplettservice mit Transporter und vier Mitarbeitern, ab 450 Euro. Montag bis Freitag.",
              },
            ],
          },
          items: [
            {
              id: "a1f-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie ziehen am Samstag um, haben schon einen Transporter und wenig Geld.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "Shanba kuni ishlaydi, arzon, mashina kerak emas.",
            },
          ],
        },
        {
          id: "a1f-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Handy-Tarif Klein",
                body: "5 GB Daten, 9,99 Euro im Monat, Vertrag 24 Monate. Nur für Neukunden.",
              },
              {
                key: "b",
                title: "Prepaid-Karte",
                body: "Ohne Vertrag, monatlich kündbar, 12 Euro im Monat. Karte im Laden erhältlich.",
              },
            ],
          },
          items: [
            {
              id: "a1f-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt:
                "Sie bleiben nur ein halbes Jahr in Deutschland und möchten keinen Vertrag.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Shartnomasiz, har oy bekor qilish mumkin.",
            },
          ],
        },
        {
          id: "a1f-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Deutschkurs intensiv",
                body: "Montag bis Freitag 9–13 Uhr, vier Wochen, 350 Euro. Für schnelle Fortschritte.",
              },
              {
                key: "b",
                title: "Deutsch am Abend",
                body: "Dienstag und Donnerstag 18–20 Uhr, drei Monate, 240 Euro. Für Berufstätige.",
              },
            ],
          },
          items: [
            {
              id: "a1f-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Sie arbeiten jeden Tag bis 16 Uhr und möchten Deutsch lernen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Kechki kurs — ishlaydiganlar uchun.",
            },
          ],
        },
        {
          id: "a1f-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Zahnarztpraxis Süd",
                body: "Neue Patienten willkommen. Termine ab vier Wochen Wartezeit. Mo–Do 8–18 Uhr.",
              },
              {
                key: "b",
                title: "Zahnärztlicher Bereitschaftsdienst",
                body: "Bei starken Schmerzen ohne Termin. Täglich 18–22 Uhr, auch am Wochenende.",
              },
            ],
          },
          items: [
            {
              id: "a1f-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie haben heute Abend starke Zahnschmerzen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Kuchli og‘riqda navbatsiz, kechqurun ishlaydi.",
            },
          ],
        },
        {
          id: "a1f-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Kinderflohmarkt",
                body: "Sonntag 10–14 Uhr im Bürgerhaus. Kleidung, Spielzeug und Bücher für Kinder, sehr günstig.",
              },
              {
                key: "b",
                title: "Spielzeugladen Regenbogen",
                body: "Große Auswahl an neuem Spielzeug, Montag bis Samstag 10–19 Uhr. Geschenkverpackung gratis.",
              },
            ],
          },
          items: [
            {
              id: "a1f-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt:
                "Sie brauchen ein Geschenk für morgen und möchten es schön verpacken lassen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "„Geschenkverpackung gratis“ va do‘kon har kuni ochiq.",
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
      blocks: [
        {
          id: "a1f-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "Im Bus",
            body: "Kinderwagen bitte in der Mitte abstellen. Die Plätze vorne sind für ältere Menschen.",
          },
          items: [
            {
              id: "a1f-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Kinderwagen sollen vorne stehen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Aravachalar o‘rtada; oldingi joylar keksalarga.",
            },
          ],
        },
        {
          id: "a1f-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "An der Praxistür",
            body: "Bitte klingeln und im Wartezimmer Platz nehmen. Handys bitte ausschalten.",
          },
          items: [
            {
              id: "a1f-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Man soll das Handy ausmachen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Handys bitte ausschalten.“",
            },
          ],
        },
        {
          id: "a1f-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Im Waschsalon",
            body: "Die Maschinen 1 bis 4 sind für Buntwäsche. Maschine 5 ist nur für weiße Wäsche.",
          },
          items: [
            {
              id: "a1f-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "In Maschine 5 darf man farbige Kleidung waschen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "5-mashina faqat oq kir uchun.",
            },
          ],
        },
        {
          id: "a1f-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Am Parkplatz",
            body: "Parken mit Parkschein von 9 bis 18 Uhr. Abends und sonntags kostenlos.",
          },
          items: [
            {
              id: "a1f-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Am Sonntag muss man nicht bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Abends und sonntags kostenlos.“",
            },
          ],
        },
        {
          id: "a1f-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "Im Treppenhaus",
            body: "Am Mittwoch kommt der Schornsteinfeger. Bitte seien Sie zwischen 8 und 12 Uhr zu Hause oder geben Sie den Schlüssel bei Familie Ercan ab.",
          },
          items: [
            {
              id: "a1f-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Man muss am Mittwoch unbedingt selbst zu Hause sein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Kalitni Ercan oilasiga qoldirish ham mumkin.",
            },
          ],
        },
      ],
    },
  ],
};
