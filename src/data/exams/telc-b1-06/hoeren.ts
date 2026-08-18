import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 06 · Hörverstehen — 3 Teil, 20 element, 75 ball. */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 1 · Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Entscheiden Sie beim Hören: Ist die Aussage richtig oder falsch?",
      blocks: [
        {
          id: "b1f-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Volkshochschule",
            lines: [
              {
                voice: "female",
                text: "Der Kochkurs am Donnerstag findet statt, allerdings in der Schulküche im Erdgeschoss, nicht wie sonst in Raum 12.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Der Kochkurs fällt am Donnerstag aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„findet statt“ — faqat joyi boshqa.",
            },
          ],
        },
        {
          id: "b1f-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Krankenkasse",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Aslan. Wir haben Ihren Antrag erhalten. Die Bescheinigung Ihres Arbeitgebers fehlt allerdings noch.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Der Antrag ist vollständig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ish beruvchidan ma’lumotnoma yetishmaydi.",
            },
          ],
        },
        {
          id: "b1f-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Bahnhof",
            lines: [
              {
                voice: "female2",
                text: "Reisende nach Hamburg: Ihr Zug fährt heute von Gleis zwölf. Die Wagen der ersten Klasse befinden sich am Zugende.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Die erste Klasse ist hinten im Zug.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„befinden sich am Zugende“.",
            },
          ],
        },
        {
          id: "b1f-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Büro",
            lines: [
              { voice: "male2", text: "Sollen wir die Besprechung online machen?" },
              {
                voice: "female",
                text: "Lieber vor Ort. Beim letzten Mal hat die Technik nicht funktioniert und wir haben eine halbe Stunde verloren.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Frau möchte sich persönlich treffen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Lieber vor Ort.“",
            },
          ],
        },
        {
          id: "b1f-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Hausverwaltung",
            lines: [
              {
                voice: "male",
                text: "Die neuen Briefkastenschlüssel liegen ab Montag im Büro bereit. Bitte holen Sie sie persönlich ab und bringen Sie einen Ausweis mit.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Die Schlüssel werden mit der Post geschickt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ularni shaxsan olib ketish kerak.",
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
        "Teil 2 · Sie hören ein Gespräch. Sie hören den Text einmal. Entscheiden Sie, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
      blocks: [
        {
          id: "b1f-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Radiogespräch mit der Leiterin einer Kleiderkammer",
            lines: [
              {
                voice: "male2",
                text: "Frau Sander, Ihre Kleiderkammer gibt es seit acht Jahren. Wer kommt zu Ihnen?",
              },
              {
                voice: "female",
                text: "Am Anfang waren es fast nur Geflüchtete. Heute kommen genauso viele Rentnerinnen und Alleinerziehende — die Not ist breiter geworden.",
              },
              { voice: "male2", text: "Wie viele Menschen sind das pro Woche?" },
              {
                voice: "female",
                text: "Etwa hundertfünfzig. An kalten Tagen deutlich mehr, dann stehen die Leute schon vor der Tür.",
              },
              { voice: "male2", text: "Woher kommt die Kleidung?" },
              {
                voice: "female",
                text: "Ausschließlich aus Spenden. Wir nehmen aber nicht alles: Was kaputt oder schmutzig ist, können wir nicht gebrauchen. Das müssen wir selbst entsorgen, und das kostet uns Geld.",
              },
              { voice: "male2", text: "Muss man etwas bezahlen?" },
              {
                voice: "female",
                text: "Einen symbolischen Betrag, einen Euro pro Stück. Das ist wichtig — nicht wegen des Geldes, sondern weil die Leute dann nicht das Gefühl haben, etwas geschenkt zu bekommen.",
              },
              { voice: "male2", text: "Wer arbeitet bei Ihnen?" },
              {
                voice: "female",
                text: "Vierzehn Ehrenamtliche, die meisten selbst im Ruhestand. Bezahlte Stellen haben wir keine.",
              },
              { voice: "male2", text: "Was ist Ihr größtes Problem?" },
              {
                voice: "female",
                text: "Der Raum. Wir haben zu wenig Platz zum Sortieren, und die Miete steigt jedes Jahr. Kleidung bekommen wir dagegen genug.",
              },
              { voice: "male2", text: "Was wünschen Sie sich?" },
              {
                voice: "female",
                text: "Dass die Stadt uns günstigere Räume überlässt. Und ein paar jüngere Freiwillige — die meisten von uns sind über siebzig.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Heute kommen nur Geflüchtete zur Kleiderkammer.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Pensionerlar va yolg‘iz ota-onalar ham keladi.",
            },
            {
              id: "b1f-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Pro Woche kommen etwa 150 Menschen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Etwa hundertfünfzig.“",
            },
            {
              id: "b1f-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Die Kleidung wird gekauft.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ausschließlich aus Spenden.“",
            },
            {
              id: "b1f-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Kaputte Spenden verursachen Kosten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Das müssen wir selbst entsorgen, und das kostet uns Geld.“",
            },
            {
              id: "b1f-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Die Kleidung ist völlig kostenlos.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Har buyum uchun bir evro ramziy to‘lov.",
            },
            {
              id: "b1f-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Der Betrag ist vor allem aus psychologischen Gründen wichtig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„nicht wegen des Geldes, sondern weil die Leute …“",
            },
            {
              id: "b1f-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Es gibt einige bezahlte Stellen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Bezahlte Stellen haben wir keine.“",
            },
            {
              id: "b1f-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Das größte Problem ist fehlende Kleidung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Kiyim yetarli; muammo — joy va ijara.",
            },
            {
              id: "b1f-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Die Miete wird jedes Jahr teurer.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„die Miete steigt jedes Jahr“.",
            },
            {
              id: "b1f-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Sie wünscht sich jüngere Freiwillige.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„ein paar jüngere Freiwillige“.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "richtig-falsch",
      playCount: 2,
      instruction:
        "Teil 3 · Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Entscheiden Sie: Ist die Aussage richtig oder falsch?",
      blocks: [
        {
          id: "b1f-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "male",
                text: "Bei uns bekommen Sie den Winterreifenwechsel für 39 Euro. Die Einlagerung Ihrer Sommerreifen kostet zusätzlich 30 Euro pro Saison.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Die Einlagerung ist im Preis enthalten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„kostet zusätzlich 30 Euro“.",
            },
          ],
        },
        {
          id: "b1f-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Krankenhaus",
            lines: [
              {
                voice: "female2",
                text: "Ab sofort dürfen wieder zwei Besucher gleichzeitig ins Zimmer. Kinder unter zwölf Jahren bitten wir weiterhin, draußen zu warten.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Kinder dürfen jetzt mit ins Zimmer.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "12 yoshgacha bo‘lganlar tashqarida kutadi.",
            },
          ],
        },
        {
          id: "b1f-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Schule",
            lines: [
              {
                voice: "male2",
                text: "Liebe Eltern, die Zeugnisse gibt es am Freitag in der dritten Stunde. Danach haben die Kinder frei, die Betreuung läuft aber wie immer.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Nach der Zeugnisausgabe müssen alle Kinder nach Hause.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„die Betreuung läuft aber wie immer“.",
            },
          ],
        },
        {
          id: "b1f-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Einkaufszentrum",
            lines: [
              {
                voice: "female",
                text: "Wegen einer technischen Störung funktioniert die Kartenzahlung derzeit nicht. Bitte zahlen Sie bar oder nutzen Sie den Geldautomaten im Erdgeschoss.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Man kann im Moment nur bar bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Karta ishlamayapti — naqd to‘lash kerak.",
            },
          ],
        },
        {
          id: "b1f-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht vom Vermieter",
            lines: [
              {
                voice: "male",
                text: "Die Fenster werden im März gestrichen. Die Handwerker brauchen von innen keinen Zugang — Sie müssen also nicht zu Hause sein.",
              },
            ],
          },
          items: [
            {
              id: "b1f-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Die Mieter müssen im März zu Hause bleiben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Sie müssen also nicht zu Hause sein.“",
            },
          ],
        },
      ],
    },
  ],
};
