import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 05 · Hörverstehen — 3 Teil, 20 element, 75 ball.
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
      blocks: [
        {
          id: "b2e-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung der Personalabteilung",
            lines: [
              {
                voice: "female2",
                text: "Ein Hinweis zur Weiterbildung: Die Kosten übernimmt der Betrieb vollständig. Die Zeit rechnen wir allerdings nur zur Hälfte als Arbeitszeit an.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Die gesamte Kurszeit gilt als Arbeitszeit.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nur zur Hälfte als Arbeitszeit“.",
            },
          ],
        },
        {
          id: "b2e-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Anwaltskanzlei",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Ruf. Die Gegenseite hat auf unser Schreiben reagiert und schlägt eine Einigung vor. Bevor wir antworten, sollten wir das persönlich besprechen.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Die Gegenseite hat sich gemeldet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„hat auf unser Schreiben reagiert“.",
            },
          ],
        },
        {
          id: "b2e-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Die Mieten in mittelgroßen Städten steigen inzwischen schneller als in den Metropolen. Absolut betrachtet bleibt das Niveau dort allerdings deutlich niedriger.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "In mittelgroßen Städten sind die Mieten inzwischen höher als in Metropolen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Tezroq o‘smoqda, lekin daraja hamon ancha past.",
            },
          ],
        },
        {
          id: "b2e-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Betrieb",
            lines: [
              {
                voice: "male2",
                text: "Frau Ruf, brauchen wir für das Projekt wirklich einen externen Berater?",
              },
              {
                voice: "female",
                text: "Für die Analyse nicht — das schaffen wir selbst. Bei der Zertifizierung führt aber kein Weg an einer externen Stelle vorbei.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Für die Zertifizierung ist eine externe Stelle nötig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„führt kein Weg an einer externen Stelle vorbei“.",
            },
          ],
        },
        {
          id: "b2e-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in der Universität",
            lines: [
              {
                voice: "male",
                text: "Die Anmeldung zu den Prüfungen läuft ab Montag. Wer eine Härtefallregelung beantragen möchte, muss dies gesondert und vor der Anmeldung tun.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Der Härtefallantrag kann auch nach der Anmeldung gestellt werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„gesondert und vor der Anmeldung“.",
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
        "Teil 2 · Sie hören ein Interview. Sie hören den Text einmal. Entscheiden Sie, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
      blocks: [
        {
          id: "b2e-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einer Ernährungswissenschaftlerin über Essen im Alltag",
            lines: [
              {
                voice: "male2",
                text: "Frau Dr. Hofer, kaum ein Thema wird so viel diskutiert wie Ernährung. Wissen wir inzwischen, was gesund ist?",
              },
              {
                voice: "female",
                text: "In den Grundzügen ja, seit Jahrzehnten. Viel Gemüse, wenig stark verarbeitete Produkte, ausreichend Ballaststoffe. Was sich ständig ändert, sind die Details — und über die wird berichtet.",
              },
              { voice: "male2", text: "Warum fällt die Umsetzung so schwer?" },
              {
                voice: "female",
                text: "Weil Ernährung selten eine reine Wissensfrage ist. Wer im Schichtdienst arbeitet, isst anders. Wer wenig Geld hat, kauft anders ein. Aufklärungskampagnen erreichen genau diese Gruppen kaum.",
              },
              { voice: "male2", text: "Also bringen solche Kampagnen nichts?" },
              {
                voice: "female",
                text: "Das würde ich so nicht sagen. Sie verändern das Bewusstsein, aber nur begrenzt das Verhalten. Wirksamer sind Maßnahmen, die die Umgebung ändern — etwa das Angebot in Kantinen und Schulen.",
              },
              { voice: "male2", text: "Sie haben Betriebskantinen untersucht." },
              {
                voice: "female",
                text: "Ja, in vierzig Betrieben. Wenn das vegetarische Gericht zuerst steht und einen Euro günstiger ist, greifen deutlich mehr Menschen zu — ohne dass irgendjemand etwas verbietet.",
              },
              { voice: "male2", text: "Wie groß war der Effekt?" },
              {
                voice: "female",
                text: "Der Anteil stieg von 22 auf 38 Prozent. Das ist erheblich, hält aber nur an, solange die Anordnung bleibt.",
              },
              { voice: "male2", text: "Was halten Sie von Verboten?" },
              {
                voice: "female",
                text: "Bei Kindern halte ich Werbebeschränkungen für sinnvoll, das ist gut belegt. Erwachsenen etwas zu verbieten, halte ich dagegen weder für nötig noch für durchsetzbar.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Die Grundlagen gesunder Ernährung sind seit Langem bekannt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„In den Grundzügen ja, seit Jahrzehnten.“",
            },
            {
              id: "b2e-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Berichtet wird vor allem über die Grundlagen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Tafsilotlar haqida yoziladi, asoslar haqida emas.",
            },
            {
              id: "b2e-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Ernährung hängt stark von den Lebensumständen ab.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Smenali ish va daromad ta’sir qiladi.",
            },
            {
              id: "b2e-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Sie hält Aufklärungskampagnen für völlig wirkungslos.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Das würde ich so nicht sagen.“",
            },
            {
              id: "b2e-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Kampagnen verändern eher das Bewusstsein als das Verhalten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„aber nur begrenzt das Verhalten“.",
            },
            {
              id: "b2e-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Die Untersuchung fand in vierzig Betrieben statt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ja, in vierzig Betrieben.“",
            },
            {
              id: "b2e-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Der Preis spielte bei dem Versuch keine Rolle.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Vegetarian taom bir evro arzonroq edi.",
            },
            {
              id: "b2e-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Der Anteil stieg um mehr als 15 Prozentpunkte.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "22 dan 38 gacha — 16 punkt.",
            },
            {
              id: "b2e-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Der Effekt bleibt auch ohne die neue Anordnung bestehen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„hält aber nur an, solange die Anordnung bleibt“.",
            },
            {
              id: "b2e-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Verbote für Erwachsene hält sie für nicht durchsetzbar.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„weder für nötig noch für durchsetzbar“.",
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
          id: "b2e-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Information einer Versicherung",
            lines: [
              {
                voice: "male2",
                text: "Ihre Police verlängert sich automatisch um ein Jahr, sofern Sie nicht drei Monate vor Ablauf kündigen. Eine Kündigung per E-Mail genügt.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Für die Kündigung ist ein Brief zwingend nötig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Eine Kündigung per E-Mail genügt.“",
            },
          ],
        },
        {
          id: "b2e-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Betrieb",
            lines: [
              {
                voice: "female",
                text: "Die Kantine bleibt in der kommenden Woche geschlossen. Als Ersatz erhalten alle Beschäftigten Gutscheine für die Bäckerei gegenüber.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Die Beschäftigten bekommen einen Ausgleich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Non do‘koni uchun vaucherlar beriladi.",
            },
          ],
        },
        {
          id: "b2e-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Behörde",
            lines: [
              {
                voice: "male",
                text: "Ihr Antrag ist eingegangen. Die Bearbeitung dauert derzeit etwa acht Wochen. Eine Eingangsbestätigung verschicken wir nicht gesondert.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Man erhält zusätzlich eine schriftliche Bestätigung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„verschicken wir nicht gesondert“.",
            },
          ],
        },
        {
          id: "b2e-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Regionalzug",
            lines: [
              {
                voice: "female2",
                text: "Wegen Bauarbeiten endet dieser Zug in Bitterfeld. Für die Weiterfahrt nach Dessau steht ein Ersatzbus bereit; die Fahrzeit verlängert sich um etwa 20 Minuten.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Reisende nach Dessau kommen später an als geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„die Fahrzeit verlängert sich um etwa 20 Minuten“.",
            },
          ],
        },
        {
          id: "b2e-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage einer Bibliothek",
            lines: [
              {
                voice: "male2",
                text: "Ab Januar entfallen die Mahngebühren für verspätete Rückgaben. Bücher, die länger als acht Wochen ausstehen, werden allerdings weiterhin in Rechnung gestellt.",
              },
            ],
          },
          items: [
            {
              id: "b2e-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Auch nach langer Verspätung entstehen keine Kosten mehr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Sakkiz haftadan oshsa, kitob narxi hisoblanadi.",
            },
          ],
        },
      ],
    },
  ],
};
