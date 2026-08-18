import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 03 · Hörverstehen — 3 Teil, 20 element, 75 ball.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 1 · Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Entscheiden Sie beim Hören: Ist die Aussage richtig oder falsch?",
      hint: "Bayonotni oldindan o‘qing — matn bir marta o‘qiladi.",
      blocks: [
        {
          id: "b1c-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Firma",
            lines: [
              {
                voice: "female2",
                text: "Eine Information für alle Mitarbeitenden: Die Kantine bleibt diese Woche wegen einer Reparatur geschlossen. Belegte Brötchen und Getränke gibt es weiterhin im Automaten im Erdgeschoss.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Diese Woche bekommt man in der Firma nichts zu essen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Oshxona yopiq, lekin avtomatda bulochka va ichimlik bor.",
            },
          ],
        },
        {
          id: "b1c-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf der Mailbox",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Prieß, hier ist die Autowerkstatt Berger. Ihr Wagen ist fertig, aber die Rechnung ist höher als geschätzt — die Bremsen mussten auch gemacht werden. Rufen Sie bitte kurz zurück.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Die Reparatur kostet mehr als geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„die Rechnung ist höher als geschätzt“.",
            },
          ],
        },
        {
          id: "b1c-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Museum",
            lines: [
              {
                voice: "female",
                text: "Liebe Besucherinnen und Besucher, die Sonderausstellung im ersten Stock schließt heute bereits um sechzehn Uhr. Die anderen Räume können Sie wie gewohnt bis achtzehn Uhr besichtigen.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Das Museum schließt heute komplett um 16 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat maxsus ko‘rgazma; qolgan xonalar 18:00 gacha.",
            },
          ],
        },
        {
          id: "b1c-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch unter Nachbarn",
            lines: [
              {
                voice: "male2",
                text: "Frau Weber, am Samstag kommt ein Möbelwagen. Können wir Ihren Stellplatz zwei Stunden nutzen?",
              },
              {
                voice: "female2",
                text: "Klar, ich fahre sowieso erst am Nachmittag weg. Stellen Sie den Wagen einfach hin.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Frau Weber erlaubt die Nutzung ihres Stellplatzes.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Klar … Stellen Sie den Wagen einfach hin.“",
            },
          ],
        },
        {
          id: "b1c-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Schule",
            lines: [
              {
                voice: "female",
                text: "Liebe Eltern, der Wandertag am Freitag findet statt, allerdings ohne Bus. Wir gehen zu Fuß, deshalb brauchen die Kinder feste Schuhe und Regenkleidung.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Der Wandertag fällt aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„findet statt, allerdings ohne Bus“ — bo‘lib o‘tadi.",
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
      hint: "Bayonotlar suhbat tartibida keladi.",
      blocks: [
        {
          id: "b1c-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Radiogespräch mit dem Leiter einer Fahrradwerkstatt für Jugendliche",
            lines: [
              {
                voice: "female2",
                text: "Herr Demir, in Ihrer Werkstatt reparieren Jugendliche Fahrräder. Wie kam es dazu?",
              },
              {
                voice: "male",
                text: "Ich bin Sozialarbeiter, kein Mechaniker. Vor fünf Jahren standen hinter dem Jugendzentrum zwanzig kaputte Räder herum. Ein Kollege konnte schrauben, und wir haben einfach angefangen.",
              },
              { voice: "female2", text: "Wer kommt zu Ihnen?" },
              {
                voice: "male",
                text: "Jugendliche zwischen zwölf und achtzehn, im Moment etwa fünfundzwanzig. Mädchen waren am Anfang kaum dabei, inzwischen ist fast die Hälfte weiblich.",
              },
              { voice: "female2", text: "Bekommen die Jugendlichen Geld dafür?" },
              {
                voice: "male",
                text: "Nein. Wer aber zwanzig Stunden mitgearbeitet hat, darf sich ein Rad aus der Werkstatt aussuchen und behalten. Das ist die eigentliche Motivation.",
              },
              { voice: "female2", text: "Woher kommen die Räder?" },
              {
                voice: "male",
                text: "Die meisten sind Spenden aus dem Stadtteil. Ein Teil kommt vom Fundbüro — Räder, die niemand abgeholt hat.",
              },
              { voice: "female2", text: "Und was lernen die Jugendlichen außer Schrauben?" },
              {
                voice: "male",
                text: "Vor allem Geduld. Und dass man nicht alles wegwerfen muss. Zwei von ihnen machen jetzt eine Ausbildung als Zweiradmechaniker.",
              },
              { voice: "female2", text: "Gibt es Probleme?" },
              {
                voice: "male",
                text: "Der Raum ist zu klein, das ist unser Hauptproblem. Im Winter stehen wir zu zwölft in einer Garage. Geld für Werkzeug haben wir dagegen genug.",
              },
              { voice: "female2", text: "Was wünschen Sie sich?" },
              {
                voice: "male",
                text: "Eine größere Halle — und noch einen Ehrenamtlichen, der sich mit E-Bikes auskennt. Die kommen jetzt immer öfter.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Herr Demir ist von Beruf Mechaniker.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ich bin Sozialarbeiter, kein Mechaniker.“",
            },
            {
              id: "b1c-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Die Werkstatt gibt es seit etwa fünf Jahren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Vor fünf Jahren … haben wir einfach angefangen.“",
            },
            {
              id: "b1c-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Heute sind fast so viele Mädchen wie Jungen dabei.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„inzwischen ist fast die Hälfte weiblich“.",
            },
            {
              id: "b1c-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Die Jugendlichen bekommen einen Stundenlohn.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Pul yo‘q; 20 soatdan keyin velosiped olishadi.",
            },
            {
              id: "b1c-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Nach 20 Stunden darf man ein Fahrrad behalten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wer … zwanzig Stunden mitgearbeitet hat, darf sich ein Rad … behalten.“",
            },
            {
              id: "b1c-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Alle Fahrräder kauft die Werkstatt selbst.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ko‘pchiligi xayriya, bir qismi Fundbüro dan.",
            },
            {
              id: "b1c-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Zwei Jugendliche haben eine Ausbildung begonnen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Zwei von ihnen machen jetzt eine Ausbildung als Zweiradmechaniker.“",
            },
            {
              id: "b1c-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Das größte Problem ist fehlendes Werkzeug.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Asbob uchun pul yetarli; muammo — joyning kichikligi.",
            },
            {
              id: "b1c-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Im Winter arbeiten sie in einer Garage.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Im Winter stehen wir zu zwölft in einer Garage.“",
            },
            {
              id: "b1c-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Herr Demir sucht jemanden, der sich mit E-Bikes auskennt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„noch einen Ehrenamtlichen, der sich mit E-Bikes auskennt“.",
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
      hint: "Ikkinchi eshitishda faqat tekshirilayotgan detalga qarang.",
      blocks: [
        {
          id: "b1c-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Hallenbad",
            lines: [
              {
                voice: "female",
                text: "Achtung: Das Sprungbecken ist heute wegen eines Wettkampfs gesperrt. Sportbecken und Kinderbereich sind normal geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Kinder können heute nicht schwimmen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Bolalar bo‘limi odatdagidek ochiq.",
            },
          ],
        },
        {
          id: "b1c-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "male2",
                text: "Neu bei uns: Wer online bestellt, bekommt die Lieferung am nächsten Tag. Im Laden selbst gilt das Angebot nicht.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Die schnelle Lieferung gilt nur bei Bestellungen im Internet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Im Laden selbst gilt das Angebot nicht.“",
            },
          ],
        },
        {
          id: "b1c-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Hausverwaltung",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, am Donnerstag wird zwischen acht und sechzehn Uhr das Wasser abgestellt. Bitte füllen Sie vorher Kanister oder Flaschen.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Am Donnerstag gibt es den ganzen Tag kein Wasser.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat 8:00 dan 16:00 gacha.",
            },
          ],
        },
        {
          id: "b1c-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "male",
                text: "Sehr geehrte Fahrgäste, der Speisewagen befindet sich heute nicht in der Mitte, sondern am Ende des Zuges, direkt hinter Wagen zwölf.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Der Speisewagen ist heute hinten im Zug.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„am Ende des Zuges, direkt hinter Wagen zwölf“.",
            },
          ],
        },
        {
          id: "b1c-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Volkshochschule",
            lines: [
              {
                voice: "female",
                text: "Eine Information zum Kochkurs: Die Teilnahme kostet zwanzig Euro, die Zutaten sind darin enthalten. Getränke bringen Sie bitte selbst mit.",
              },
            ],
          },
          items: [
            {
              id: "b1c-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Die Zutaten muss man extra bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„die Zutaten sind darin enthalten“ — narxga kiradi.",
            },
          ],
        },
      ],
    },
  ],
};
