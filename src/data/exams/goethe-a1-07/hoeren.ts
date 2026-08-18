import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 07 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar: poyabzal do'koni, veterinar, chipta kassasi, santexnik, oshxona.
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
          id: "a1g-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Im Schuhgeschäft",
            lines: [
              { voice: "female", text: "Haben Sie diese Schuhe in Größe 39?" },
              { voice: "male", text: "In 39 nicht mehr, nur in 38 und 40." },
              { voice: "female", text: "Dann probiere ich die 40." },
            ],
          },
          items: [
            {
              id: "a1g-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Welche Größe probiert die Frau?",
              options: [
                { key: "a", label: "38" },
                { key: "b", label: "39" },
                { key: "c", label: "40" },
              ],
              correct: "c",
              explanation: "„Dann probiere ich die 40.“",
            },
          ],
        },
        {
          id: "a1g-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Beim Tierarzt",
            lines: [
              { voice: "male2", text: "Wann soll ich mit dem Hund wiederkommen?" },
              { voice: "female2", text: "In zwei Wochen. Bringen Sie bitte den Impfpass mit." },
              { voice: "male2", text: "In zwei Wochen, mit Impfpass. Danke." },
            ],
          },
          items: [
            {
              id: "a1g-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was soll der Mann mitbringen?",
              options: [
                { key: "a", label: "Den Impfpass" },
                { key: "b", label: "Ein Rezept" },
                { key: "c", label: "Futter" },
              ],
              correct: "a",
              explanation: "„Bringen Sie bitte den Impfpass mit.“",
            },
          ],
        },
        {
          id: "a1g-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Am Fahrkartenschalter",
            lines: [
              { voice: "female", text: "Eine Fahrkarte nach Weimar, bitte." },
              { voice: "male", text: "Einfach 9 Euro, hin und zurück 16." },
              { voice: "female", text: "Ich fahre am Abend zurück. Also hin und zurück." },
            ],
          },
          items: [
            {
              id: "a1g-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt die Frau?",
              options: [
                { key: "a", label: "9 Euro" },
                { key: "b", label: "16 Euro" },
                { key: "c", label: "25 Euro" },
              ],
              correct: "b",
              explanation: "U borib-qaytish chiptasini oldi — 16 evro.",
            },
          ],
        },
        {
          id: "a1g-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon: Handwerker",
            lines: [
              { voice: "male2", text: "Guten Tag, bei mir tropft der Wasserhahn im Bad." },
              { voice: "female", text: "Heute schaffen wir es nicht mehr. Morgen zwischen zehn und zwölf?" },
              { voice: "male2", text: "Morgen früh passt gut." },
            ],
          },
          items: [
            {
              id: "a1g-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt der Handwerker?",
              options: [
                { key: "a", label: "Heute Abend" },
                { key: "b", label: "Morgen Vormittag" },
                { key: "c", label: "Nächste Woche" },
              ],
              correct: "b",
              explanation: "„Morgen zwischen zehn und zwölf“ — tushdan oldin.",
            },
          ],
        },
        {
          id: "a1g-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "In der Kantine",
            lines: [
              { voice: "female2", text: "Was gibt es heute?" },
              { voice: "male", text: "Suppe, Fisch mit Kartoffeln oder Nudeln mit Gemüse." },
              { voice: "female2", text: "Ich nehme die Nudeln, ich esse kein Fleisch und keinen Fisch." },
            ],
          },
          items: [
            {
              id: "a1g-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was isst die Frau?",
              options: [
                { key: "a", label: "Suppe" },
                { key: "b", label: "Fisch" },
                { key: "c", label: "Nudeln" },
              ],
              correct: "c",
              explanation: "„Ich nehme die Nudeln.“",
            },
          ],
        },
        {
          id: "a1g-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "In der Bibliothek",
            lines: [
              { voice: "male2", text: "Ich möchte einen Ausweis. Was brauche ich dafür?" },
              { voice: "female", text: "Ihren Personalausweis. Für Erwachsene kostet der Ausweis 12 Euro im Jahr." },
            ],
          },
          items: [
            {
              id: "a1g-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Was kostet der Ausweis?",
              options: [
                { key: "a", label: "Nichts" },
                { key: "b", label: "12 Euro im Jahr" },
                { key: "c", label: "12 Euro im Monat" },
              ],
              correct: "b",
              explanation: "„12 Euro im Jahr“.",
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
          id: "a1g-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Kaufhaus",
            lines: [
              {
                voice: "female2",
                text: "Liebe Kunden, unser Restaurant im dritten Stock ist heute bis zwanzig Uhr geöffnet, eine Stunde länger als sonst.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Das Restaurant schließt heute früher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„eine Stunde länger als sonst“ — kechroq yopiladi.",
            },
          ],
        },
        {
          id: "a1g-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Schule",
            lines: [
              {
                voice: "male",
                text: "Liebe Eltern, die Klassenfahrt kostet 95 Euro. Bitte überweisen Sie das Geld bis zum 20. April.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Die Eltern sollen bis zum 20. April bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„bis zum 20. April“ o‘tkazish kerak.",
            },
          ],
        },
        {
          id: "a1g-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Zug",
            lines: [
              {
                voice: "female",
                text: "Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Erfurt. Der Zug endet hier, bitte alle aussteigen.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Der Zug fährt nach Erfurt weiter.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Der Zug endet hier“ — Erfurtda tugaydi.",
            },
          ],
        },
        {
          id: "a1g-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Nachbarin",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, ich fahre morgen in den Urlaub. Können Sie bitte meinen Briefkasten leeren? Der Schlüssel liegt bei Ihnen.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Die Nachbarin bringt den Schlüssel noch vorbei.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Der Schlüssel liegt bei Ihnen“ — allaqachon berilgan.",
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
          id: "a1g-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Anrufbeantworter",
            lines: [
              {
                voice: "male2",
                text: "Guten Tag, hier ist die Praxis Dr. Wolf. Ihr Termin am Montag muss leider ausfallen. Bitte rufen Sie uns an.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was ist passiert?",
              options: [
                { key: "a", label: "Der Termin fällt aus." },
                { key: "b", label: "Der Termin ist früher." },
                { key: "c", label: "Das Ergebnis ist da." },
              ],
              correct: "a",
              explanation: "„Ihr Termin am Montag muss leider ausfallen.“",
            },
          ],
        },
        {
          id: "a1g-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Radio",
            lines: [
              {
                voice: "female",
                text: "Achtung, Autofahrer: Die Brücke am Nordring ist heute gesperrt. Fahren Sie bitte über die Ringstraße.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was sollen die Autofahrer tun?",
              options: [
                { key: "a", label: "Zu Hause bleiben" },
                { key: "b", label: "Über die Ringstraße fahren" },
                { key: "c", label: "Die Brücke benutzen" },
              ],
              correct: "b",
              explanation: "„Fahren Sie bitte über die Ringstraße.“",
            },
          ],
        },
        {
          id: "a1g-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Freund",
            lines: [
              {
                voice: "male",
                text: "Hallo, ich habe zwei Karten für das Fußballspiel am Sonntag. Hast du Zeit? Ruf mich bitte heute noch an.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wann soll die Person antworten?",
              options: [
                { key: "a", label: "Heute" },
                { key: "b", label: "Am Sonntag" },
                { key: "c", label: "Nächste Woche" },
              ],
              correct: "a",
              explanation: "„Ruf mich bitte heute noch an.“",
            },
          ],
        },
        {
          id: "a1g-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Schwimmbad",
            lines: [
              {
                voice: "female2",
                text: "Liebe Gäste, ab neunzehn Uhr ist nur noch das kleine Becken offen. Das große Becken wird gereinigt.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Welches Becken ist ab 19 Uhr offen?",
              options: [
                { key: "a", label: "Das große" },
                { key: "b", label: "Das kleine" },
                { key: "c", label: "Keines" },
              ],
              correct: "b",
              explanation: "„nur noch das kleine Becken offen“.",
            },
          ],
        },
        {
          id: "a1g-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus dem Betrieb",
            lines: [
              {
                voice: "male2",
                text: "Guten Morgen, die Besprechung heute ist nicht im Büro, sondern in der Halle. Bitte kommen Sie direkt dorthin.",
              },
            ],
          },
          items: [
            {
              id: "a1g-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wo ist die Besprechung?",
              options: [
                { key: "a", label: "Im Büro" },
                { key: "b", label: "In der Halle" },
                { key: "c", label: "Sie fällt aus." },
              ],
              correct: "b",
              explanation: "„nicht im Büro, sondern in der Halle“.",
            },
          ],
        },
      ],
    },
  ],
};
