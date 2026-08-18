import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 06 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar: avtomaktab, kimyoviy tozalash, velosiped do'koni, restoran, kitob do'koni.
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
          id: "a1f-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "In der Fahrschule",
            lines: [
              { voice: "female", text: "Wann ist die theoretische Prüfung?" },
              { voice: "male", text: "Am 12. Juni um neun Uhr. Sie müssen um halb neun da sein." },
              { voice: "female", text: "Also halb neun. Gut, danke." },
            ],
          },
          items: [
            {
              id: "a1f-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann soll die Frau ankommen?",
              options: [
                { key: "a", label: "Um 8.30 Uhr" },
                { key: "b", label: "Um 9.00 Uhr" },
                { key: "c", label: "Um 9.30 Uhr" },
              ],
              correct: "a",
              explanation: "„Sie müssen um halb neun da sein“ — 8:30.",
            },
          ],
        },
        {
          id: "a1f-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "In der Reinigung",
            lines: [
              { voice: "male2", text: "Wann kann ich den Mantel abholen?" },
              { voice: "female2", text: "Am Donnerstag ab vierzehn Uhr." },
              { voice: "male2", text: "Geht es auch früher? Ich arbeite ab drei." },
              { voice: "female2", text: "Dann kommen Sie Freitagmorgen." },
            ],
          },
          items: [
            {
              id: "a1f-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wann holt der Mann den Mantel ab?",
              options: [
                { key: "a", label: "Am Donnerstagnachmittag" },
                { key: "b", label: "Am Freitagmorgen" },
                { key: "c", label: "Am Samstag" },
              ],
              correct: "b",
              explanation: "Payshanba vaqti to‘g‘ri kelmadi — juma ertalab.",
            },
          ],
        },
        {
          id: "a1f-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Im Fahrradladen",
            lines: [
              { voice: "female", text: "Was kostet die Reparatur?" },
              { voice: "male", text: "Bremsen und Licht: zusammen 45 Euro." },
              { voice: "female", text: "Nur die Bremsen, bitte. Das Licht mache ich selbst." },
            ],
          },
          items: [
            {
              id: "a1f-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Was lässt die Frau reparieren?",
              options: [
                { key: "a", label: "Nur die Bremsen" },
                { key: "b", label: "Nur das Licht" },
                { key: "c", label: "Bremsen und Licht" },
              ],
              correct: "a",
              explanation: "„Nur die Bremsen, bitte.“",
            },
          ],
        },
        {
          id: "a1f-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon: Restaurant",
            lines: [
              { voice: "male2", text: "Ich möchte einen Tisch für vier Personen am Samstag." },
              { voice: "female", text: "Um wie viel Uhr?" },
              { voice: "male2", text: "Um neunzehn Uhr, bitte." },
              { voice: "female", text: "Um sieben ist alles voll. Ab zwanzig Uhr habe ich etwas." },
              { voice: "male2", text: "Dann um acht." },
            ],
          },
          items: [
            {
              id: "a1f-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt die Gruppe ins Restaurant?",
              options: [
                { key: "a", label: "Um 19 Uhr" },
                { key: "b", label: "Um 20 Uhr" },
                { key: "c", label: "Sie kommt nicht." },
              ],
              correct: "b",
              explanation: "„Dann um acht“ — soat 20:00.",
            },
          ],
        },
        {
          id: "a1f-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "In der Buchhandlung",
            lines: [
              { voice: "female2", text: "Haben Sie Wörterbücher Deutsch–Usbekisch?" },
              { voice: "male", text: "Im Moment nicht, aber ich kann eines bestellen." },
              { voice: "female2", text: "Wie lange dauert das?" },
              { voice: "male", text: "Drei bis vier Tage." },
            ],
          },
          items: [
            {
              id: "a1f-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie lange dauert die Bestellung?",
              options: [
                { key: "a", label: "Einen Tag" },
                { key: "b", label: "Drei bis vier Tage" },
                { key: "c", label: "Zwei Wochen" },
              ],
              correct: "b",
              explanation: "„Drei bis vier Tage.“",
            },
          ],
        },
        {
          id: "a1f-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "Beim Optiker",
            lines: [
              { voice: "male2", text: "Meine Brille ist kaputt. Können Sie sie reparieren?" },
              { voice: "female", text: "Das Glas ist in Ordnung, nur der Bügel ist gebrochen. Das machen wir gleich." },
            ],
          },
          items: [
            {
              id: "a1f-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Was ist kaputt?",
              options: [
                { key: "a", label: "Das Glas" },
                { key: "b", label: "Der Bügel" },
                { key: "c", label: "Alles" },
              ],
              correct: "b",
              explanation: "„nur der Bügel ist gebrochen“.",
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
          id: "a1f-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Freibad",
            lines: [
              {
                voice: "female2",
                text: "Liebe Gäste, wegen des Gewitters müssen alle das Wasser verlassen. Die Liegewiese können Sie weiter benutzen.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Alle Gäste müssen das Freibad sofort verlassen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat suvdan chiqish kerak; maysazorda qolish mumkin.",
            },
          ],
        },
        {
          id: "a1f-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus der Kita",
            lines: [
              {
                voice: "male",
                text: "Guten Morgen, morgen machen wir einen Ausflug in den Wald. Bitte geben Sie Ihrem Kind eine Regenjacke und feste Schuhe mit.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Die Kinder brauchen morgen besondere Kleidung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Yomg‘irpo‘sh va mustahkam poyabzal kerak.",
            },
          ],
        },
        {
          id: "a1f-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage am Flughafen",
            lines: [
              {
                voice: "female",
                text: "Der Flug nach Taschkent hat zwei Stunden Verspätung. Der neue Abflug ist um dreiundzwanzig Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Das Flugzeug fliegt später als geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„hat zwei Stunden Verspätung“.",
            },
          ],
        },
        {
          id: "a1f-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Bibliothek",
            lines: [
              {
                voice: "male2",
                text: "Der Lesesaal ist ab Montag wieder offen. Der Computerraum bleibt aber noch zwei Wochen geschlossen.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Ab Montag kann man wieder Computer benutzen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Kompyuter xonasi yana ikki hafta yopiq.",
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
          id: "a1f-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, hier ist die Autowerkstatt. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Bis wann kann man das Auto heute abholen?",
              options: [
                { key: "a", label: "Bis 16 Uhr" },
                { key: "b", label: "Bis 18 Uhr" },
                { key: "c", label: "Bis 20 Uhr" },
              ],
              correct: "b",
              explanation: "„bis achtzehn Uhr abholen“.",
            },
          ],
        },
        {
          id: "a1f-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Supermarkt",
            lines: [
              {
                voice: "male",
                text: "Liebe Kunden, an Kasse drei ist jetzt geöffnet. Bitte kommen Sie mit Ihren Einkäufen nach vorn.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was ist neu?",
              options: [
                { key: "a", label: "Eine Kasse ist jetzt offen." },
                { key: "b", label: "Der Laden schließt." },
                { key: "c", label: "Es gibt ein Angebot." },
              ],
              correct: "a",
              explanation: "„An Kasse drei ist jetzt geöffnet.“",
            },
          ],
        },
        {
          id: "a1f-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Kollegen",
            lines: [
              {
                voice: "male2",
                text: "Hallo, ich bin krank und komme heute nicht. Kannst du bitte dem Chef Bescheid sagen?",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was soll der Kollege tun?",
              options: [
                { key: "a", label: "Zum Arzt gehen" },
                { key: "b", label: "Dem Chef Bescheid sagen" },
                { key: "c", label: "Die Arbeit übernehmen" },
              ],
              correct: "b",
              explanation: "„Kannst du bitte dem Chef Bescheid sagen?“",
            },
          ],
        },
        {
          id: "a1f-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Sprachschule",
            lines: [
              {
                voice: "female2",
                text: "Die Prüfung ist am Samstag, nicht am Freitag. Bitte kommen Sie eine halbe Stunde früher.",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann ist die Prüfung?",
              options: [
                { key: "a", label: "Am Freitag" },
                { key: "b", label: "Am Samstag" },
                { key: "c", label: "Am Sonntag" },
              ],
              correct: "b",
              explanation: "„am Samstag, nicht am Freitag“.",
            },
          ],
        },
        {
          id: "a1f-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Nachbarin",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, morgen kommt der Schornsteinfeger zwischen acht und zehn. Ich habe leider keine Zeit — können Sie ihn hereinlassen?",
              },
            ],
          },
          items: [
            {
              id: "a1f-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was möchte die Nachbarin?",
              options: [
                { key: "a", label: "Hilfe beim Einkaufen" },
                { key: "b", label: "Dass jemand die Tür öffnet" },
                { key: "c", label: "Einen Schlüssel bekommen" },
              ],
              correct: "b",
              explanation: "„können Sie ihn hereinlassen?“",
            },
          ],
        },
      ],
    },
  ],
};
