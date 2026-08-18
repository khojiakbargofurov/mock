import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 03 · Hören — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da ish joyidagi suhbat, Teil 4 da bog'bon bilan intervyu.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie die richtige Lösung a, b oder c.",
      hint: "Har matn ikki marta o‘qiladi — birinchisida mazmunni tushuning.",
      blocks: [
        {
          id: "a2c-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage am Flughafen",
            lines: [
              {
                voice: "female2",
                text: "Passagiere des Fluges nach Istanbul: Das Boarding beginnt um vierzehn Uhr zehn am Gate C fünf. Bitte halten Sie Ihre Bordkarte bereit.",
              },
            ],
          },
          items: [
            {
              id: "a2c-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann beginnt das Boarding?",
              options: [
                { key: "a", label: "Um 14.10 Uhr" },
                { key: "b", label: "Um 14.50 Uhr" },
                { key: "c", label: "Um 15.10 Uhr" },
              ],
              correct: "a",
              explanation: "„um vierzehn Uhr zehn“ — 14:10.",
            },
          ],
        },
        {
          id: "a2c-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf der Mailbox",
            lines: [
              {
                voice: "male",
                text: "Hallo Nilufar, hier ist Jan. Wir treffen uns doch nicht im Café, sondern direkt vor dem Museum. Um drei, wie geplant.",
              },
            ],
          },
          items: [
            {
              id: "a2c-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wo treffen sich die beiden?",
              options: [
                { key: "a", label: "Im Café" },
                { key: "b", label: "Vor dem Museum" },
                { key: "c", label: "Am Bahnhof" },
              ],
              correct: "b",
              explanation: "„nicht im Café, sondern direkt vor dem Museum“.",
            },
          ],
        },
        {
          id: "a2c-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Reisebüro",
            lines: [
              { voice: "female", text: "Wir möchten eine Woche nach Österreich, am liebsten in die Berge." },
              { voice: "male2", text: "Im Juli oder im August?" },
              { voice: "female", text: "Im August. Im Juli arbeitet mein Mann noch." },
            ],
          },
          items: [
            {
              id: "a2c-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann fährt die Familie in Urlaub?",
              options: [
                { key: "a", label: "Im Juni" },
                { key: "b", label: "Im Juli" },
                { key: "c", label: "Im August" },
              ],
              correct: "c",
              explanation: "„Im August. Im Juli arbeitet mein Mann noch.“",
            },
          ],
        },
        {
          id: "a2c-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "male",
                text: "Ein Hinweis für unsere Kunden: Die Rolltreppe im dritten Stock wird repariert. Bitte nehmen Sie den Aufzug neben der Kasse.",
              },
            ],
          },
          items: [
            {
              id: "a2c-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sollen die Kunden benutzen?",
              options: [
                { key: "a", label: "Die Treppe" },
                { key: "b", label: "Den Aufzug" },
                { key: "c", label: "Die Rolltreppe" },
              ],
              correct: "b",
              explanation: "„Bitte nehmen Sie den Aufzug neben der Kasse.“",
            },
          ],
        },
        {
          id: "a2c-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Verkehrsmeldung im Radio",
            lines: [
              {
                voice: "female2",
                text: "Auf der A4 zwischen Erfurt und Weimar staut es sich auf sechs Kilometern. Fahren Sie besser über die Landstraße.",
              },
            ],
          },
          items: [
            {
              id: "a2c-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was empfiehlt die Meldung?",
              options: [
                { key: "a", label: "Zu Hause zu bleiben" },
                { key: "b", label: "Die Autobahn zu nehmen" },
                { key: "c", label: "Über die Landstraße zu fahren" },
              ],
              correct: "c",
              explanation: "„Fahren Sie besser über die Landstraße.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "zuordnung",
      playCount: 1,
      instruction:
        "Sie hören ein Gespräch. Was macht wer nächste Woche? Ordnen Sie zu. Sie hören den Text einmal.",
      hint: "Har shaxs uchun bitta ish. Bir variant ortiqcha qoladi.",
      bank: [
        { key: "a", label: "🦷 Zum Zahnarzt gehen" },
        { key: "b", label: "🚚 Beim Umzug helfen" },
        { key: "c", label: "🎂 Einen Kuchen backen" },
        { key: "d", label: "🖥 Einen Computerkurs besuchen" },
        { key: "e", label: "🐕 Den Hund betreuen" },
        { key: "f", label: "🚲 Das Fahrrad reparieren" },
        { key: "g", label: "🧾 Zur Bank gehen" },
        { key: "h", label: "🍲 Für alle kochen" },
        { key: "i", label: "🌳 Im Garten arbeiten" },
      ],
      blocks: [
        {
          id: "a2c-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Familie Sandberg plant die nächste Woche",
            lines: [
              { voice: "female", text: "Also, nächste Woche wird es voll. Papa, was hast du vor?" },
              {
                voice: "male",
                text: "Ich habe endlich einen Termin beim Zahnarzt bekommen, am Dienstagmorgen.",
              },
              { voice: "female", text: "Und du, Lena?" },
              {
                voice: "female2",
                text: "Ich helfe Sofia beim Umzug. Sie zieht am Mittwoch in ihre neue Wohnung.",
              },
              { voice: "female", text: "Und Onkel Ralf?" },
              {
                voice: "male2",
                text: "Ich fange am Montag den Computerkurs in der Volkshochschule an. Endlich lerne ich E-Mails richtig.",
              },
              { voice: "female", text: "Oma hat auch etwas vor, oder?" },
              {
                voice: "male",
                text: "Ja, Oma passt am Donnerstag auf den Hund von den Nachbarn auf. Die fahren weg.",
              },
              { voice: "female", text: "Und ich? Ich backe für Papas Geburtstag am Samstag einen Kuchen." },
            ],
          },
          items: [
            {
              id: "a2c-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Der Vater",
              correct: "a",
              explanation: "„einen Termin beim Zahnarzt … am Dienstagmorgen“.",
            },
            {
              id: "a2c-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Lena",
              correct: "b",
              explanation: "„Ich helfe Sofia beim Umzug.“",
            },
            {
              id: "a2c-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Onkel Ralf",
              correct: "d",
              explanation: "„Ich fange am Montag den Computerkurs … an.“",
            },
            {
              id: "a2c-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Oma",
              correct: "e",
              explanation: "„Oma passt am Donnerstag auf den Hund … auf.“",
            },
            {
              id: "a2c-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Tochter, die das Gespräch führt",
              correct: "c",
              explanation: "„Ich backe für Papas Geburtstag … einen Kuchen.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      playCount: 1,
      instruction:
        "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2c-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Am Kiosk",
            lines: [
              { voice: "male2", text: "Eine Zeitung und zwei Wasser, bitte. Was macht das?" },
              { voice: "female", text: "Vier Euro sechzig." },
            ],
          },
          items: [
            {
              id: "a2c-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Mann?",
              options: [
                { key: "a", label: "4,16 €" },
                { key: "b", label: "4,60 €" },
                { key: "c", label: "6,40 €" },
              ],
              correct: "b",
              explanation: "„Vier Euro sechzig“ = 4,60 €.",
            },
          ],
        },
        {
          id: "a2c-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Fundbüro",
            lines: [
              { voice: "female2", text: "Ich habe gestern meinen Schirm in der Straßenbahn vergessen." },
              { voice: "male", text: "Welche Farbe hatte er?" },
              { voice: "female2", text: "Blau, mit weißen Punkten." },
            ],
          },
          items: [
            {
              id: "a2c-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was sucht die Frau?",
              options: [
                { key: "a", label: "Eine Tasche" },
                { key: "b", label: "Einen Schirm" },
                { key: "c", label: "Einen Schlüssel" },
              ],
              correct: "b",
              explanation: "„meinen Schirm in der Straßenbahn vergessen“.",
            },
          ],
        },
        {
          id: "a2c-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Beim Friseur",
            lines: [
              { voice: "male2", text: "Nur die Spitzen schneiden, bitte. Nicht kurz." },
              { voice: "female", text: "Alles klar, also nur ein bisschen." },
            ],
          },
          items: [
            {
              id: "a2c-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was möchte der Kunde?",
              options: [
                { key: "a", label: "Eine kurze Frisur" },
                { key: "b", label: "Nur wenig schneiden" },
                { key: "c", label: "Die Haare färben" },
              ],
              correct: "b",
              explanation: "„Nur die Spitzen … Nicht kurz.“",
            },
          ],
        },
        {
          id: "a2c-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Büro",
            lines: [
              { voice: "female2", text: "Kannst du das Dokument ausdrucken?" },
              { voice: "male", text: "Der Drucker ist leer. Ich schicke es dir lieber als PDF." },
            ],
          },
          items: [
            {
              id: "a2c-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was macht der Kollege?",
              options: [
                { key: "a", label: "Er druckt das Dokument." },
                { key: "b", label: "Er schickt eine Datei." },
                { key: "c", label: "Er kauft Papier." },
              ],
              correct: "b",
              explanation: "„Ich schicke es dir lieber als PDF.“",
            },
          ],
        },
        {
          id: "a2c-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "An der Kinokasse",
            lines: [
              { voice: "male2", text: "Zwei Karten für den Film um acht, bitte." },
              { voice: "female", text: "Der ist ausverkauft. Um halb elf ist noch Platz." },
              { voice: "male2", text: "Dann nehmen wir die." },
            ],
          },
          items: [
            {
              id: "a2c-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Welche Vorstellung nehmen die beiden?",
              options: [
                { key: "a", label: "Um 20.00 Uhr" },
                { key: "b", label: "Um 22.30 Uhr" },
                { key: "c", label: "Sie gehen nicht ins Kino." },
              ],
              correct: "b",
              explanation: "„Um halb elf ist noch Platz. — Dann nehmen wir die.“",
            },
          ],
        },
      ],
    },

    {
      nr: 4,
      taskType: "richtig-falsch",
      playCount: 2,
      instruction:
        "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie: Ja oder Nein.",
      hint: "Savollar suhbat tartibida keladi.",
      blocks: [
        {
          id: "a2c-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einer Gärtnerin",
            lines: [
              { voice: "male", text: "Frau Roth, seit wann arbeiten Sie als Gärtnerin?" },
              {
                voice: "female",
                text: "Seit zwölf Jahren. Vorher war ich Verkäuferin, aber ich wollte draußen arbeiten.",
              },
              { voice: "male", text: "Was ist im Winter zu tun?" },
              {
                voice: "female",
                text: "Weniger als im Sommer, aber es gibt immer Arbeit: Bäume schneiden, Wege sauber machen.",
              },
              { voice: "male", text: "Stört Sie das schlechte Wetter?" },
              {
                voice: "female",
                text: "Regen macht mir nichts aus. Nur bei starkem Wind arbeiten wir nicht — das ist zu gefährlich.",
              },
              { voice: "male", text: "Arbeiten Sie allein?" },
              {
                voice: "female",
                text: "Nein, wir sind ein Team von fünf Leuten. Allein wäre das gar nicht möglich.",
              },
              { voice: "male", text: "Würden Sie den Beruf empfehlen?" },
              {
                voice: "female",
                text: "Ja, aber nur, wenn man wirklich gern draußen ist. Der Körper muss das auch mitmachen.",
              },
            ],
          },
          items: [
            {
              id: "a2c-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Frau Roth hat früher in einem Geschäft gearbeitet.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Vorher war ich Verkäuferin.“",
            },
            {
              id: "a2c-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Im Winter gibt es gar keine Arbeit.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„es gibt immer Arbeit: Bäume schneiden …“",
            },
            {
              id: "a2c-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Bei starkem Wind arbeitet das Team nicht.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Nur bei starkem Wind arbeiten wir nicht.“",
            },
            {
              id: "a2c-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Frau Roth arbeitet allein.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„wir sind ein Team von fünf Leuten“.",
            },
            {
              id: "a2c-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Sie empfiehlt den Beruf allen Menschen.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„nur, wenn man wirklich gern draußen ist“ — hammaga emas.",
            },
          ],
        },
      ],
    },
  ],
};
