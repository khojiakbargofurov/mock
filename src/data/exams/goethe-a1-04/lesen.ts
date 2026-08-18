import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 04 · Lesen — 3 Teil, 15 element, ~25 daqiqa.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      hint: "Har jumla uchun matndagi mos joyni toping.",
      blocks: [
        {
          id: "a1d-l1-b1",
          stimulus: {
            kind: "text",
            title: "Nachricht von Olga",
            body: `Hallo Bekzod,

am Sonntag machen wir ein Picknick im Stadtpark. Wir treffen uns um zwölf am großen Spielplatz.

Jeder bringt etwas mit. Ich mache Salat, Timur bringt Getränke. Kannst du vielleicht Brot mitbringen?

Wenn es regnet, kommen wir zu mir nach Hause. Ich schreibe dir am Samstagabend.

Bis Sonntag!
Olga`,
          },
          items: [
            {
              id: "a1d-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Das Picknick beginnt um 12 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wir treffen uns um zwölf am großen Spielplatz.“",
            },
            {
              id: "a1d-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Bekzod soll Getränke mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ichimlikni Timur olib keladi; Bekzod — non.",
            },
            {
              id: "a1d-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Bei Regen fällt das Treffen aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Yomg‘ir yog‘sa, Olganing uyida uchrashadi.",
            },
          ],
        },
        {
          id: "a1d-l1-b2",
          stimulus: {
            kind: "text",
            title: "Information aus der Sprachschule",
            body: `Liebe Kursteilnehmerinnen und Kursteilnehmer,

nächste Woche ist Prüfungswoche. Der Unterricht fällt deshalb aus.

Die Prüfung ist am Mittwoch um 9 Uhr. Bitte kommen Sie 15 Minuten früher und bringen Sie Ihren Ausweis mit.

Ein Wörterbuch dürfen Sie nicht benutzen. Papier und Stifte bekommen Sie von uns.

Ihr Team der Sprachschule`,
          },
          items: [
            {
              id: "a1d-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Die Teilnehmer müssen einen Ausweis mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„bringen Sie Ihren Ausweis mit“.",
            },
            {
              id: "a1d-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Man darf ein Wörterbuch benutzen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ein Wörterbuch dürfen Sie nicht benutzen.“",
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
      hint: "Ikkala e’lonni oxirigacha o‘qing — farq odatda bitta shartda.",
      blocks: [
        {
          id: "a1d-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Taxi Meier",
                body: "Rund um die Uhr erreichbar, auch nachts. Fahrten zum Flughafen ab 45 Euro. Bestellung nur telefonisch.",
              },
              {
                key: "b",
                title: "Fahrdienst Süd",
                body: "Bestellung über die App, Montag bis Freitag von 6 bis 22 Uhr. Am Wochenende geschlossen.",
              },
            ],
          },
          items: [
            {
              id: "a1d-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie brauchen am Sonntag um 4 Uhr morgens ein Taxi zum Flughafen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "b dam olish kunlari ishlamaydi; a kechayu kunduz.",
            },
          ],
        },
        {
          id: "a1d-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Zahnarztpraxis Dr. Beck",
                body: "Termine nur nach Vereinbarung, Montag bis Donnerstag 8–17 Uhr. Freitag geschlossen.",
              },
              {
                key: "b",
                title: "Zahnarzt-Notdienst",
                body: "Ohne Termin, auch am Wochenende und an Feiertagen. Bitte Versichertenkarte mitbringen.",
              },
            ],
          },
          items: [
            {
              id: "a1d-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt:
                "Ihr Zahn tut am Samstagabend sehr weh und Sie haben keinen Termin.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Navbatsiz, dam olish kunlari ham ishlaydigan xizmat.",
            },
          ],
        },
        {
          id: "a1d-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fitnessstudio Power",
                body: "Vertrag für zwölf Monate, 29 Euro im Monat. Geöffnet täglich 6–23 Uhr.",
              },
              {
                key: "b",
                title: "Sportkurse im Verein",
                body: "Einzelne Kurse ohne Vertrag, 6 Euro pro Stunde. Dienstag und Donnerstag ab 18 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1d-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt:
                "Sie möchten nur manchmal Sport machen und keinen Vertrag unterschreiben.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "„Einzelne Kurse ohne Vertrag“.",
            },
          ],
        },
        {
          id: "a1d-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Wäscherei Blitz",
                body: "Hemden waschen und bügeln, fertig in 24 Stunden. Abgabe Mo–Fr bis 12 Uhr.",
              },
              {
                key: "b",
                title: "Waschsalon 24",
                body: "Selbst waschen und trocknen, täglich 6–24 Uhr geöffnet. Eine Maschine 4 Euro.",
              },
            ],
          },
          items: [
            {
              id: "a1d-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt:
                "Ihre Waschmaschine ist kaputt und Sie möchten abends selbst waschen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "O‘zi yuvish mumkin, kechqurun ham ochiq.",
            },
          ],
        },
        {
          id: "a1d-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Stadtbibliothek",
                body: "Bücher ausleihen ist für Kinder und Jugendliche kostenlos. Erwachsene zahlen 15 Euro im Jahr.",
              },
              {
                key: "b",
                title: "Bücherflohmarkt",
                body: "Gebrauchte Bücher ab 50 Cent kaufen. Jeden Samstag 9–13 Uhr vor dem Rathaus.",
              },
            ],
          },
          items: [
            {
              id: "a1d-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt:
                "Ihr Sohn (10) liest sehr viel, aber Sie möchten kein Geld ausgeben.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "Bolalar uchun kitob olish bepul.",
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
      hint: "Bitta so‘z — „nur“, „außer“, „ab“ — javobni hal qiladi.",
      blocks: [
        {
          id: "a1d-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "Am Eingang des Parks",
            body: "Fahrradfahren ist auf den Wegen erlaubt, aber nicht auf den Wiesen.",
          },
          items: [
            {
              id: "a1d-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Im Park darf man nicht Fahrrad fahren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Yo‘laklarda mumkin, faqat o‘tloqda mumkin emas.",
            },
          ],
        },
        {
          id: "a1d-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "In der Bäckerei",
            body: "Am Montag bleibt unser Geschäft geschlossen. Von Dienstag bis Sonntag sind wir ab 6 Uhr für Sie da.",
          },
          items: [
            {
              id: "a1d-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Am Sonntag ist die Bäckerei geöffnet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Von Dienstag bis Sonntag“ — yakshanba ham ochiq.",
            },
          ],
        },
        {
          id: "a1d-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Im Treppenhaus",
            body: "Liebe Nachbarn, ab Montag wird das Dach repariert. Bitte parken Sie in dieser Woche nicht vor dem Haus.",
          },
          items: [
            {
              id: "a1d-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Man soll diese Woche woanders parken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Bitte parken Sie in dieser Woche nicht vor dem Haus.“",
            },
          ],
        },
        {
          id: "a1d-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Im Zug",
            body: "In diesem Wagen ist Telefonieren nicht erlaubt. Bitte gehen Sie dafür in den Bereich zwischen den Wagen.",
          },
          items: [
            {
              id: "a1d-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Im ganzen Zug darf man nicht telefonieren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat shu vagonda; vagonlar orasida mumkin.",
            },
          ],
        },
        {
          id: "a1d-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "An der Kasse im Museum",
            body: "Am ersten Sonntag im Monat ist der Eintritt frei. An allen anderen Tagen kostet die Karte 9 Euro.",
          },
          items: [
            {
              id: "a1d-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Der Eintritt ist jeden Sonntag frei.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat oyning birinchi yakshanbasida.",
            },
          ],
        },
      ],
    },
  ],
};
