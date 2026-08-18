import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 05 · Hören — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da qo'shnilarning shanba kunidagi ishlari, Teil 4 da avtobus haydovchisi bilan intervyu.
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
          id: "a2e-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Museum",
            lines: [
              {
                voice: "female2",
                text: "Die Führung durch die Sonderausstellung beginnt um vierzehn Uhr am Eingang. Die Teilnahme ist im Eintritt enthalten, eine Anmeldung ist nicht nötig.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Was gilt für die Führung?",
              options: [
                { key: "a", label: "Sie kostet extra." },
                { key: "b", label: "Sie ist im Eintritt enthalten." },
                { key: "c", label: "Man muss sich anmelden." },
              ],
              correct: "b",
              explanation: "„Die Teilnahme ist im Eintritt enthalten.“",
            },
          ],
        },
        {
          id: "a2e-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Apotheke",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Salimov. Ihr Medikament ist da. Wir haben bis 18.30 Uhr geöffnet, samstags bis 13 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Bis wann kann Herr Salimov das Medikament samstags abholen?",
              options: [
                { key: "a", label: "Bis 13 Uhr" },
                { key: "b", label: "Bis 18.30 Uhr" },
                { key: "c", label: "Samstag ist geschlossen." },
              ],
              correct: "a",
              explanation: "„samstags bis 13 Uhr“.",
            },
          ],
        },
        {
          id: "a2e-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Gespräch in der Kantine",
            lines: [
              { voice: "female", text: "Gibt es heute etwas ohne Fleisch?" },
              { voice: "male2", text: "Ja, Gemüsesuppe und Nudeln mit Käse." },
              { voice: "female", text: "Dann die Nudeln, bitte." },
            ],
          },
          items: [
            {
              id: "a2e-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Was nimmt die Frau?",
              options: [
                { key: "a", label: "Gemüsesuppe" },
                { key: "b", label: "Nudeln mit Käse" },
                { key: "c", label: "Fleisch mit Kartoffeln" },
              ],
              correct: "b",
              explanation: "„Dann die Nudeln, bitte.“",
            },
          ],
        },
        {
          id: "a2e-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Baumarkt",
            lines: [
              {
                voice: "male",
                text: "Liebe Kundinnen und Kunden, unser Lieferservice ist ab einem Einkaufswert von 200 Euro kostenlos. Darunter berechnen wir 25 Euro.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wann ist die Lieferung kostenlos?",
              options: [
                { key: "a", label: "Immer" },
                { key: "b", label: "Ab 200 Euro Einkauf" },
                { key: "c", label: "Nie" },
              ],
              correct: "b",
              explanation: "„ab einem Einkaufswert von 200 Euro kostenlos“.",
            },
          ],
        },
        {
          id: "a2e-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Schule",
            lines: [
              {
                voice: "female2",
                text: "Liebe Eltern, der Elternabend am Dienstag findet online statt. Den Link schicken wir Ihnen am Montag per E-Mail.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie findet der Elternabend statt?",
              options: [
                { key: "a", label: "In der Schule" },
                { key: "b", label: "Online" },
                { key: "c", label: "Er fällt aus." },
              ],
              correct: "b",
              explanation: "„findet online statt“.",
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
        "Sie hören ein Gespräch. Was macht wer am Samstag? Ordnen Sie zu. Sie hören den Text einmal.",
      bank: [
        { key: "a", label: "🛒 Großeinkauf machen" },
        { key: "b", label: "🎨 Die Wohnung streichen" },
        { key: "c", label: "👵 Die Großmutter besuchen" },
        { key: "d", label: "⚽️ Zum Fußballspiel gehen" },
        { key: "e", label: "🚗 Das Auto reparieren" },
        { key: "f", label: "📚 Für die Prüfung lernen" },
        { key: "g", label: "🍽 Freunde einladen" },
        { key: "h", label: "🧹 Den Keller aufräumen" },
        { key: "i", label: "💇 Zum Friseur gehen" },
      ],
      blocks: [
        {
          id: "a2e-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachbarn sprechen über den Samstag",
            lines: [
              { voice: "female", text: "Und, habt ihr am Samstag schon etwas vor?" },
              {
                voice: "male",
                text: "Ich muss endlich den Keller aufräumen. Da steht seit dem Umzug alles durcheinander.",
              },
              { voice: "female", text: "Und Sie, Frau Weber?" },
              {
                voice: "female2",
                text: "Ich fahre zu meiner Großmutter nach Gera. Sie wird achtzig.",
              },
              { voice: "female", text: "Herr Klose?" },
              {
                voice: "male2",
                text: "Mein Sohn und ich gehen zum Fußball. Karten haben wir schon.",
              },
              { voice: "female", text: "Und die Familie im Erdgeschoss?" },
              {
                voice: "male",
                text: "Die streichen ihre Wohnung. Sie haben mich sogar um eine Leiter gefragt.",
              },
              {
                voice: "female",
                text: "Bei mir wird es ruhiger: Ich lerne den ganzen Tag, meine Prüfung ist am Montag.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Der Mann, der zuerst spricht",
              correct: "h",
              explanation: "„Ich muss endlich den Keller aufräumen.“",
            },
            {
              id: "a2e-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Frau Weber",
              correct: "c",
              explanation: "Buvisining 80 yoshi — Geraga boradi.",
            },
            {
              id: "a2e-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Klose",
              correct: "d",
              explanation: "„gehen zum Fußball. Karten haben wir schon.“",
            },
            {
              id: "a2e-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Familie im Erdgeschoss",
              correct: "b",
              explanation: "„Die streichen ihre Wohnung.“",
            },
            {
              id: "a2e-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Frau, die das Gespräch führt",
              correct: "f",
              explanation: "„Ich lerne den ganzen Tag, meine Prüfung ist am Montag.“",
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
          id: "a2e-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Im Elektrogeschäft",
            lines: [
              { voice: "male2", text: "Wie lange habe ich auf den Drucker Garantie?" },
              { voice: "female", text: "Zwei Jahre. Bei Registrierung online sogar drei." },
            ],
          },
          items: [
            {
              id: "a2e-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie bekommt man drei Jahre Garantie?",
              options: [
                { key: "a", label: "Durch eine Registrierung im Internet" },
                { key: "b", label: "Durch einen höheren Preis" },
                { key: "c", label: "Gar nicht" },
              ],
              correct: "a",
              explanation: "„Bei Registrierung online sogar drei.“",
            },
          ],
        },
        {
          id: "a2e-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Beim Vermieter",
            lines: [
              { voice: "female2", text: "Darf ich im Wohnzimmer einen Teppichboden verlegen?" },
              { voice: "male", text: "Ja, aber beim Auszug muss er wieder raus." },
            ],
          },
          items: [
            {
              id: "a2e-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was sagt der Vermieter?",
              options: [
                { key: "a", label: "Es ist verboten." },
                { key: "b", label: "Es ist erlaubt, aber nur vorübergehend." },
                { key: "c", label: "Er macht es selbst." },
              ],
              correct: "b",
              explanation: "Ruxsat, lekin ko‘chib chiqishda olib tashlanadi.",
            },
          ],
        },
        {
          id: "a2e-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Am Empfang",
            lines: [
              { voice: "male2", text: "Ich habe einen Termin bei Frau Renz um zehn." },
              { voice: "female", text: "Frau Renz ist noch in einer Besprechung. Es dauert etwa zehn Minuten." },
            ],
          },
          items: [
            {
              id: "a2e-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was muss der Mann tun?",
              options: [
                { key: "a", label: "Kurz warten" },
                { key: "b", label: "Morgen wiederkommen" },
                { key: "c", label: "Anrufen" },
              ],
              correct: "a",
              explanation: "Yig‘ilish taxminan o‘n daqiqa davom etadi.",
            },
          ],
        },
        {
          id: "a2e-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Schwimmbad",
            lines: [
              { voice: "female2", text: "Kann ich eine Zehnerkarte kaufen?" },
              { voice: "male", text: "Ja, sie kostet 35 Euro und gilt ein Jahr." },
            ],
          },
          items: [
            {
              id: "a2e-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wie lange gilt die Karte?",
              options: [
                { key: "a", label: "Einen Monat" },
                { key: "b", label: "Ein halbes Jahr" },
                { key: "c", label: "Ein Jahr" },
              ],
              correct: "c",
              explanation: "„gilt ein Jahr“.",
            },
          ],
        },
        {
          id: "a2e-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Amt",
            lines: [
              { voice: "male2", text: "Reicht eine Kopie vom Pass?" },
              { voice: "female", text: "Nein, wir brauchen das Original. Die Kopie machen wir hier." },
            ],
          },
          items: [
            {
              id: "a2e-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was muss der Mann mitbringen?",
              options: [
                { key: "a", label: "Eine Kopie" },
                { key: "b", label: "Das Original" },
                { key: "c", label: "Ein Foto" },
              ],
              correct: "b",
              explanation: "„wir brauchen das Original“.",
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
          id: "a2e-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einer Busfahrerin",
            lines: [
              { voice: "male", text: "Frau Kranz, wie lange fahren Sie schon Bus?" },
              {
                voice: "female",
                text: "Seit neun Jahren. Vorher war ich Verkäuferin, aber ich wollte nicht mehr im Laden stehen.",
              },
              { voice: "male", text: "Wann beginnt Ihr Dienst?" },
              {
                voice: "female",
                text: "Das wechselt. In der Frühschicht um halb fünf, in der Spätschicht erst um vierzehn Uhr.",
              },
              { voice: "male", text: "Was ist das Schwierigste?" },
              {
                voice: "female",
                text: "Nicht der Verkehr, sondern die Pausen. Manchmal habe ich nur acht Minuten an der Endhaltestelle.",
              },
              { voice: "male", text: "Wie sind die Fahrgäste?" },
              {
                voice: "female",
                text: "Die meisten sind freundlich. Probleme gibt es fast nur, wenn wir Verspätung haben — und dafür können wir nichts.",
              },
              { voice: "male", text: "Würden Sie den Beruf empfehlen?" },
              {
                voice: "female",
                text: "Ja, aber nur, wenn man mit den Schichten zurechtkommt. Wer Kinder hat, braucht eine gute Betreuung.",
              },
            ],
          },
          items: [
            {
              id: "a2e-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Frau Kranz hat früher in einem Geschäft gearbeitet.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Vorher war ich Verkäuferin.“",
            },
            {
              id: "a2e-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Ihr Dienst beginnt immer zur gleichen Zeit.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Das wechselt“ — smenaga qarab.",
            },
            {
              id: "a2e-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Der Verkehr ist für sie das größte Problem.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Nicht der Verkehr, sondern die Pausen.“",
            },
            {
              id: "a2e-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Die meisten Fahrgäste sind freundlich.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Die meisten sind freundlich.“",
            },
            {
              id: "a2e-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Sie empfiehlt den Beruf ohne Einschränkung.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„nur, wenn man mit den Schichten zurechtkommt“.",
            },
          ],
        },
      ],
    },
  ],
};
