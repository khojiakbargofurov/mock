import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 04 · Hören — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da hamkasblarning ta'til rejalari, Teil 4 da pochtachi bilan intervyu.
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
      blocks: [
        {
          id: "a2d-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Bahnhof",
            lines: [
              {
                voice: "female2",
                text: "Der Regionalzug nach Kassel, planmäßige Abfahrt fünfzehn Uhr vierzig, fällt heute aus. Nutzen Sie bitte den Zug um sechzehn Uhr zehn.",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann fährt der nächste Zug nach Kassel?",
              options: [
                { key: "a", label: "Um 15.40 Uhr" },
                { key: "b", label: "Um 16.10 Uhr" },
                { key: "c", label: "Um 16.40 Uhr" },
              ],
              correct: "b",
              explanation: "15:40 bekor qilindi, keyingisi 16:10.",
            },
          ],
        },
        {
          id: "a2d-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Bank",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Ergasheva. Ihre neue Karte ist da. Sie können sie ab Donnerstag in der Filiale abholen — bitte mit Ausweis.",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was soll Frau Ergasheva mitbringen?",
              options: [
                { key: "a", label: "Die alte Karte" },
                { key: "b", label: "Einen Ausweis" },
                { key: "c", label: "Einen Brief" },
              ],
              correct: "b",
              explanation: "„bitte mit Ausweis“.",
            },
          ],
        },
        {
          id: "a2d-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Restaurant",
            lines: [
              { voice: "female", text: "Können wir bitte draußen sitzen?" },
              { voice: "male2", text: "Draußen ist leider alles reserviert. Am Fenster hätte ich noch einen Tisch." },
              { voice: "female", text: "Gut, dann nehmen wir den am Fenster." },
            ],
          },
          items: [
            {
              id: "a2d-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wo sitzen die Gäste?",
              options: [
                { key: "a", label: "Draußen" },
                { key: "b", label: "Am Fenster" },
                { key: "c", label: "An der Bar" },
              ],
              correct: "b",
              explanation: "Tashqarisi band — deraza yonidagi stolni olishdi.",
            },
          ],
        },
        {
          id: "a2d-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in der Firma",
            lines: [
              {
                voice: "male",
                text: "Wichtig für alle Mitarbeitenden: Der Brandschutzkurs am Mittwoch dauert zwei Stunden und ist für alle Pflicht. Wer im Urlaub ist, holt ihn im Oktober nach.",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was gilt für den Kurs?",
              options: [
                { key: "a", label: "Er ist freiwillig." },
                { key: "b", label: "Er ist für alle Pflicht." },
                { key: "c", label: "Er fällt aus." },
              ],
              correct: "b",
              explanation: "„ist für alle Pflicht“.",
            },
          ],
        },
        {
          id: "a2d-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Freundin",
            lines: [
              {
                voice: "female2",
                text: "Hallo, ich habe den Termin beim Frisör auf Donnerstag verschoben. Am Mittwoch muss ich länger arbeiten. Passt dir Donnerstag auch?",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Warum wurde der Termin verschoben?",
              options: [
                { key: "a", label: "Der Frisör ist krank." },
                { key: "b", label: "Sie muss länger arbeiten." },
                { key: "c", label: "Sie fährt weg." },
              ],
              correct: "b",
              explanation: "„Am Mittwoch muss ich länger arbeiten.“",
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
        "Sie hören ein Gespräch. Wohin fährt wer im Urlaub? Ordnen Sie zu. Sie hören den Text einmal.",
      hint: "Har shaxs uchun bitta joy. Bir nechta variant ortiqcha qoladi.",
      bank: [
        { key: "a", label: "🏔 In die Berge" },
        { key: "b", label: "🏖 Ans Meer" },
        { key: "c", label: "🏙 In eine große Stadt" },
        { key: "d", label: "🏡 Zu den Eltern aufs Land" },
        { key: "e", label: "🚲 Radtour am Fluss" },
        { key: "f", label: "🏠 Zu Hause bleiben" },
        { key: "g", label: "✈️ Ins Ausland zur Familie" },
        { key: "h", label: "⛺️ Camping am See" },
        { key: "i", label: "🎓 Sprachkurs im Ausland" },
      ],
      blocks: [
        {
          id: "a2d-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Kolleginnen und Kollegen sprechen über ihre Urlaubspläne",
            lines: [
              { voice: "female", text: "Und, was macht ihr im Sommer? Katrin, du zuerst." },
              {
                voice: "female2",
                text: "Wir fahren mit dem Wohnwagen an den See. Zwei Wochen zelten, die Kinder freuen sich schon.",
              },
              { voice: "female", text: "Und du, Jonas?" },
              {
                voice: "male",
                text: "Ich bleibe dieses Jahr einfach zu Hause. Ich renoviere endlich das Bad — Urlaub ist das eigentlich nicht.",
              },
              { voice: "female", text: "Herr Demir, Sie fahren doch immer weit weg?" },
              {
                voice: "male2",
                text: "Diesmal nur bis Österreich, in die Berge. Wir wandern eine Woche lang.",
              },
              { voice: "female", text: "Und Sofia?" },
              {
                voice: "female2",
                text: "Sofia fliegt zu ihrer Familie nach Brasilien, sie hat drei Wochen frei bekommen.",
              },
              {
                voice: "female",
                text: "Ich selbst fahre nur zu meinen Eltern aufs Land. Das ist ruhig und kostet nichts.",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Katrin",
              correct: "h",
              explanation: "„mit dem Wohnwagen an den See … zelten“.",
            },
            {
              id: "a2d-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Jonas",
              correct: "f",
              explanation: "„Ich bleibe dieses Jahr einfach zu Hause.“",
            },
            {
              id: "a2d-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Demir",
              correct: "a",
              explanation: "„bis Österreich, in die Berge“.",
            },
            {
              id: "a2d-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Sofia",
              correct: "g",
              explanation: "„fliegt zu ihrer Familie nach Brasilien“.",
            },
            {
              id: "a2d-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Frau, die das Gespräch führt",
              correct: "d",
              explanation: "„zu meinen Eltern aufs Land“.",
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
          id: "a2d-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Am Schalter",
            lines: [
              { voice: "male2", text: "Ich möchte dieses Paket nach Usbekistan schicken." },
              { voice: "female", text: "Bis zwei Kilo kostet es 22 Euro, darüber 38." },
              { voice: "male2", text: "Es wiegt zweieinhalb Kilo." },
            ],
          },
          items: [
            {
              id: "a2d-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Mann?",
              options: [
                { key: "a", label: "22 Euro" },
                { key: "b", label: "38 Euro" },
                { key: "c", label: "60 Euro" },
              ],
              correct: "b",
              explanation: "2,5 kg — 2 kg dan ortiq, ya’ni 38 evro.",
            },
          ],
        },
        {
          id: "a2d-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Beim Elternabend",
            lines: [
              { voice: "female2", text: "Findet der Ausflug am Freitag oder am Samstag statt?" },
              { voice: "male", text: "Am Freitag. Am Samstag hätten zu viele Eltern arbeiten müssen." },
            ],
          },
          items: [
            {
              id: "a2d-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wann ist der Ausflug?",
              options: [
                { key: "a", label: "Am Freitag" },
                { key: "b", label: "Am Samstag" },
                { key: "c", label: "Am Sonntag" },
              ],
              correct: "a",
              explanation: "„Am Freitag.“",
            },
          ],
        },
        {
          id: "a2d-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Im Sportgeschäft",
            lines: [
              { voice: "male2", text: "Diese Laufschuhe sind mir zu klein. Haben Sie eine Nummer größer?" },
              { voice: "female", text: "Im Lager ja. Einen Moment, ich hole sie." },
            ],
          },
          items: [
            {
              id: "a2d-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was macht die Verkäuferin?",
              options: [
                { key: "a", label: "Sie holt größere Schuhe." },
                { key: "b", label: "Sie bestellt die Schuhe." },
                { key: "c", label: "Sie gibt das Geld zurück." },
              ],
              correct: "a",
              explanation: "„Im Lager ja … ich hole sie.“",
            },
          ],
        },
        {
          id: "a2d-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "In der Werkstatt",
            lines: [
              { voice: "female2", text: "Ist mein Fahrrad heute noch fertig?" },
              { voice: "male", text: "Heute schaffe ich es nicht mehr. Morgen früh können Sie es abholen." },
            ],
          },
          items: [
            {
              id: "a2d-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann ist das Fahrrad fertig?",
              options: [
                { key: "a", label: "Heute Abend" },
                { key: "b", label: "Morgen früh" },
                { key: "c", label: "Nächste Woche" },
              ],
              correct: "b",
              explanation: "„Morgen früh können Sie es abholen.“",
            },
          ],
        },
        {
          id: "a2d-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Im Büro",
            lines: [
              { voice: "male2", text: "Soll ich die Rechnung heute noch bezahlen?" },
              { voice: "female", text: "Nein, erst nächste Woche. Wir haben vierzehn Tage Zeit." },
            ],
          },
          items: [
            {
              id: "a2d-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann soll die Rechnung bezahlt werden?",
              options: [
                { key: "a", label: "Heute" },
                { key: "b", label: "Nächste Woche" },
                { key: "c", label: "Gar nicht" },
              ],
              correct: "b",
              explanation: "„Nein, erst nächste Woche.“",
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
      blocks: [
        {
          id: "a2d-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einem Postboten",
            lines: [
              { voice: "female", text: "Herr Klose, wann beginnt Ihr Arbeitstag?" },
              {
                voice: "male",
                text: "Um Viertel nach fünf bin ich im Depot. Auf der Straße bin ich dann ab sieben.",
              },
              { voice: "female", text: "Wie viele Briefe sind das am Tag?" },
              {
                voice: "male",
                text: "Briefe werden weniger, Pakete immer mehr. Früher waren es tausend Briefe, heute vielleicht vierhundert — dafür achtzig Pakete.",
              },
              { voice: "female", text: "Kennen Sie Ihre Kunden?" },
              {
                voice: "male",
                text: "In meinem Bezirk ja, ich bin seit elf Jahren derselbe Bote. Manche warten schon an der Tür.",
              },
              { voice: "female", text: "Was ist am schwierigsten?" },
              {
                voice: "male",
                text: "Nicht das Wetter, wie viele denken. Das Schlimmste sind Häuser ohne Aufzug und Pakete mit zwanzig Kilo.",
              },
              { voice: "female", text: "Würden Sie den Beruf noch einmal wählen?" },
              {
                voice: "male",
                text: "Ja, auf jeden Fall. Ich bin draußen und niemand steht hinter mir. Nur mehr Zeit pro Bezirk wäre gut.",
              },
            ],
          },
          items: [
            {
              id: "a2d-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Herr Klose beginnt vor sechs Uhr zu arbeiten.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Um Viertel nach fünf bin ich im Depot.“",
            },
            {
              id: "a2d-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Die Zahl der Briefe ist gestiegen.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Briefe werden weniger, Pakete immer mehr.“",
            },
            {
              id: "a2d-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Er arbeitet seit über zehn Jahren im selben Bezirk.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„seit elf Jahren derselbe Bote“.",
            },
            {
              id: "a2d-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Das Wetter ist für ihn das größte Problem.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Nicht das Wetter … Das Schlimmste sind Häuser ohne Aufzug.“",
            },
            {
              id: "a2d-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Er würde den Beruf wieder wählen.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Ja, auf jeden Fall.“",
            },
          ],
        },
      ],
    },
  ],
};
