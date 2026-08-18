import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 05 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar: kinoteatr, kafe, sport zali, bozor, mehmonxona.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      blocks: [
        {
          id: "a1e-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "An der Kinokasse",
            lines: [
              { voice: "female", text: "Zweimal für den Film um acht, bitte." },
              { voice: "male", text: "Der ist ausverkauft. Um zehn ist noch Platz." },
              { voice: "female", text: "Um zehn ist zu spät. Dann kommen wir morgen." },
            ],
          },
          items: [
            {
              id: "a1e-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Was machen die Frauen?",
              options: [
                { key: "a", label: "Sie gehen um 22 Uhr ins Kino." },
                { key: "b", label: "Sie kommen morgen wieder." },
                { key: "c", label: "Sie kaufen Karten für 20 Uhr." },
              ],
              correct: "b",
              explanation: "„Dann kommen wir morgen.“",
            },
          ],
        },
        {
          id: "a1e-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Café",
            lines: [
              { voice: "male2", text: "Einen Kaffee und ein Stück Kuchen, bitte." },
              { voice: "female2", text: "Kuchen haben wir heute leider nur noch Apfelkuchen." },
              { voice: "male2", text: "Gut, dann den Apfelkuchen." },
            ],
          },
          items: [
            {
              id: "a1e-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was bestellt der Mann?",
              options: [
                { key: "a", label: "Nur einen Kaffee" },
                { key: "b", label: "Kaffee und Apfelkuchen" },
                { key: "c", label: "Tee und Kuchen" },
              ],
              correct: "b",
              explanation: "Faqat olma pirogi bor edi — u shuni oldi.",
            },
          ],
        },
        {
          id: "a1e-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Im Fitnessstudio",
            lines: [
              { voice: "female", text: "Wann sind hier die Kurse für Anfänger?" },
              { voice: "male", text: "Montags und mittwochs um neunzehn Uhr." },
              { voice: "female", text: "Montags kann ich nicht. Dann komme ich mittwochs." },
            ],
          },
          items: [
            {
              id: "a1e-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt die Frau zum Kurs?",
              options: [
                { key: "a", label: "Am Montag" },
                { key: "b", label: "Am Mittwoch" },
                { key: "c", label: "Am Freitag" },
              ],
              correct: "b",
              explanation: "„Dann komme ich mittwochs.“",
            },
          ],
        },
        {
          id: "a1e-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Markt",
            lines: [
              { voice: "male2", text: "Was kostet ein Kilo Äpfel?" },
              { voice: "female2", text: "Zwei Euro fünfzig. Drei Kilo für sechs Euro." },
              { voice: "male2", text: "Dann nehme ich drei Kilo." },
            ],
          },
          items: [
            {
              id: "a1e-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Mann?",
              options: [
                { key: "a", label: "2,50 Euro" },
                { key: "b", label: "6 Euro" },
                { key: "c", label: "7,50 Euro" },
              ],
              correct: "b",
              explanation: "Uch kilo — olti evro (arzonroq narx).",
            },
          ],
        },
        {
          id: "a1e-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "An der Hotelrezeption",
            lines: [
              { voice: "female", text: "Guten Abend. Ich habe ein Zimmer für zwei Nächte reserviert." },
              { voice: "male", text: "Auf welchen Namen, bitte?" },
              { voice: "female", text: "Ergasheva. E–R–G–A–S–H–E–V–A." },
            ],
          },
          items: [
            {
              id: "a1e-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie lange bleibt die Frau im Hotel?",
              options: [
                { key: "a", label: "Eine Nacht" },
                { key: "b", label: "Zwei Nächte" },
                { key: "c", label: "Eine Woche" },
              ],
              correct: "b",
              explanation: "„ein Zimmer für zwei Nächte reserviert“.",
            },
          ],
        },
        {
          id: "a1e-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon",
            lines: [
              { voice: "male2", text: "Praxis Dr. Wolf, guten Tag." },
              { voice: "female2", text: "Guten Tag, ich möchte meinen Termin am Dienstag absagen." },
              { voice: "male2", text: "Kein Problem. Möchten Sie einen neuen Termin?" },
              { voice: "female2", text: "Ja, bitte nächste Woche." },
            ],
          },
          items: [
            {
              id: "a1e-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Was möchte die Frau?",
              options: [
                { key: "a", label: "Nur absagen" },
                { key: "b", label: "Absagen und einen neuen Termin" },
                { key: "c", label: "Ein Medikament bestellen" },
              ],
              correct: "b",
              explanation: "Bekor qiladi va keyingi haftaga yangi vaqt so‘raydi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      blocks: [
        {
          id: "a1e-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Straßenbahn",
            lines: [
              {
                voice: "female2",
                text: "Nächste Haltestelle: Universität. Diese Bahn fährt heute nur bis zum Zoo, nicht bis zum Nordbahnhof.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Die Bahn fährt heute bis zum Nordbahnhof.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nur bis zum Zoo, nicht bis zum Nordbahnhof“.",
            },
          ],
        },
        {
          id: "a1e-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Schule",
            lines: [
              {
                voice: "male",
                text: "Liebe Eltern, am Freitag endet der Unterricht schon um zwölf Uhr. Die Kinder können aber bis 16 Uhr in der Betreuung bleiben.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Die Kinder müssen am Freitag um 12 Uhr nach Hause.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "16:00 gacha guruhda qolishlari mumkin.",
            },
          ],
        },
        {
          id: "a1e-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "female",
                text: "Sehr geehrte Fahrgäste, wir erreichen Leipzig in zehn Minuten. Der Anschlusszug nach Halle wartet auf Gleis vier.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Der Zug nach Halle fährt von Gleis 4.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„wartet auf Gleis vier“.",
            },
          ],
        },
        {
          id: "a1e-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Kollegen",
            lines: [
              {
                voice: "male2",
                text: "Hallo, das Mittagessen morgen fällt aus. Der Chef hat den Termin auf nächste Woche verschoben.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Das Treffen ist erst nächste Woche.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„auf nächste Woche verschoben“.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      blocks: [
        {
          id: "a1e-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, hier ist die Bibliothek. Ihr Buch ist seit zwei Wochen fällig. Bitte bringen Sie es bis Freitag zurück.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was soll die Person tun?",
              options: [
                { key: "a", label: "Ein Buch abholen" },
                { key: "b", label: "Ein Buch zurückbringen" },
                { key: "c", label: "Eine Karte kaufen" },
              ],
              correct: "b",
              explanation: "„bringen Sie es bis Freitag zurück“.",
            },
          ],
        },
        {
          id: "a1e-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Radio",
            lines: [
              {
                voice: "male",
                text: "Am Sonntag ist das Stadtfest. Der Marktplatz ist von zehn bis zweiundzwanzig Uhr für Autos gesperrt.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was passiert am Sonntag?",
              options: [
                { key: "a", label: "Der Marktplatz ist gesperrt." },
                { key: "b", label: "Die Geschäfte sind zu." },
                { key: "c", label: "Die Busse fahren nicht." },
              ],
              correct: "a",
              explanation: "„Der Marktplatz ist … für Autos gesperrt.“",
            },
          ],
        },
        {
          id: "a1e-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Nachbarin",
            lines: [
              {
                voice: "female",
                text: "Hallo, ich fahre morgen um acht zum Einkaufszentrum. Wenn Sie möchten, nehme ich Sie mit.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was bietet die Nachbarin an?",
              options: [
                { key: "a", label: "Sie kauft etwas ein." },
                { key: "b", label: "Sie nimmt jemanden im Auto mit." },
                { key: "c", label: "Sie kommt zu Besuch." },
              ],
              correct: "b",
              explanation: "„nehme ich Sie mit“ — mashinada birga olib ketadi.",
            },
          ],
        },
        {
          id: "a1e-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Krankenhaus",
            lines: [
              {
                voice: "male2",
                text: "Die Besuchszeit endet um zwanzig Uhr. Bitte verlassen Sie danach die Zimmer.",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Bis wann darf man bleiben?",
              options: [
                { key: "a", label: "Bis 18 Uhr" },
                { key: "b", label: "Bis 20 Uhr" },
                { key: "c", label: "Bis 22 Uhr" },
              ],
              correct: "b",
              explanation: "„Die Besuchszeit endet um zwanzig Uhr.“",
            },
          ],
        },
        {
          id: "a1e-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus dem Kindergarten",
            lines: [
              {
                voice: "female2",
                text: "Guten Morgen, Ihr Sohn hat sein Mittagessen vergessen. Können Sie es bitte bis elf Uhr bringen?",
              },
            ],
          },
          items: [
            {
              id: "a1e-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was soll der Vater bringen?",
              options: [
                { key: "a", label: "Das Mittagessen" },
                { key: "b", label: "Eine Jacke" },
                { key: "c", label: "Ein Spielzeug" },
              ],
              correct: "a",
              explanation: "„Ihr Sohn hat sein Mittagessen vergessen.“",
            },
          ],
        },
      ],
    },
  ],
};
