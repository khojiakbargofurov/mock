import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 07 · Hören — 4 Teil, 20 element, 30 daqiqa. */
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
          id: "a2g-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Kino",
            lines: [
              {
                voice: "female2",
                text: "Der Film in Saal drei beginnt heute erst um zwanzig Uhr dreißig. Wer möchte, kann die Karte an der Kasse umtauschen.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Was können die Gäste tun?",
              options: [
                { key: "a", label: "Die Karte umtauschen" },
                { key: "b", label: "Geld zurückbekommen" },
                { key: "c", label: "In einen anderen Saal gehen" },
              ],
              correct: "a",
              explanation: "„kann die Karte an der Kasse umtauschen“.",
            },
          ],
        },
        {
          id: "a2g-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Schule",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Sobirova. Ihr Sohn hat sich im Sport am Fuß verletzt. Es ist nichts Schlimmes, aber bitte holen Sie ihn ab.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was soll die Mutter tun?",
              options: [
                { key: "a", label: "Zum Arzt fahren" },
                { key: "b", label: "Den Sohn abholen" },
                { key: "c", label: "Die Schule anrufen" },
              ],
              correct: "b",
              explanation: "„bitte holen Sie ihn ab“.",
            },
          ],
        },
        {
          id: "a2g-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Baumarkt",
            lines: [
              { voice: "female", text: "Ich brauche Farbe für ein Kinderzimmer, etwa 20 Quadratmeter." },
              { voice: "male2", text: "Da reichen fünf Liter. Diese hier ist geruchsarm, gut für Kinder." },
              { voice: "female", text: "Dann nehme ich die." },
            ],
          },
          items: [
            {
              id: "a2g-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Warum empfiehlt der Verkäufer diese Farbe?",
              options: [
                { key: "a", label: "Sie ist billiger." },
                { key: "b", label: "Sie riecht kaum." },
                { key: "c", label: "Sie trocknet schnell." },
              ],
              correct: "b",
              explanation: "„geruchsarm, gut für Kinder“.",
            },
          ],
        },
        {
          id: "a2g-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Betrieb",
            lines: [
              {
                voice: "male",
                text: "Ein Hinweis: Die Zeiterfassung funktioniert heute nicht. Bitte notieren Sie Ihre Arbeitszeit auf dem Zettel im Büro.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sollen die Mitarbeitenden tun?",
              options: [
                { key: "a", label: "Die Zeit selbst notieren" },
                { key: "b", label: "Früher nach Hause gehen" },
                { key: "c", label: "Den Chef anrufen" },
              ],
              correct: "a",
              explanation: "„notieren Sie Ihre Arbeitszeit auf dem Zettel“.",
            },
          ],
        },
        {
          id: "a2g-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht vom Vermieter",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, die Wohnungsübergabe verschiebt sich vom 30. auf den 31. August. Der Termin bleibt um zehn Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was ändert sich?",
              options: [
                { key: "a", label: "Die Uhrzeit" },
                { key: "b", label: "Der Tag" },
                { key: "c", label: "Der Ort" },
              ],
              correct: "b",
              explanation: "Sana o‘zgardi, vaqt o‘zgarmadi.",
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
        "Sie hören ein Gespräch. Wer bringt was zum Fest mit? Ordnen Sie zu. Sie hören den Text einmal.",
      bank: [
        { key: "a", label: "🥗 Einen Salat" },
        { key: "b", label: "🍰 Einen Kuchen" },
        { key: "c", label: "🥤 Getränke" },
        { key: "d", label: "🍞 Brot" },
        { key: "e", label: "🎵 Musik" },
        { key: "f", label: "🪑 Tische und Stühle" },
        { key: "g", label: "🍲 Ein warmes Gericht" },
        { key: "h", label: "🍽 Teller und Besteck" },
        { key: "i", label: "🎈 Dekoration" },
      ],
      blocks: [
        {
          id: "a2g-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Vorbereitung für das Hoffest",
            lines: [
              { voice: "female", text: "Also, wer bringt was mit? Frau Weber?" },
              {
                voice: "female2",
                text: "Ich backe zwei Kuchen. Einen mit Äpfeln und einen mit Schokolade.",
              },
              { voice: "female", text: "Herr Sobirov?" },
              {
                voice: "male",
                text: "Ich koche Plov für alle. Das reicht bestimmt für zwanzig Personen.",
              },
              { voice: "female", text: "Und Familie Klose?" },
              {
                voice: "male2",
                text: "Wir kümmern uns um die Getränke — Wasser, Saft und Limo.",
              },
              { voice: "female", text: "Herr Demir hat mir geschrieben." },
              {
                voice: "male",
                text: "Ja, er bringt seine Musikanlage mit und macht die Musik.",
              },
              {
                voice: "female",
                text: "Und ich hole die Tische und Stühle aus dem Gemeindehaus.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Frau Weber",
              correct: "b",
              explanation: "„Ich backe zwei Kuchen.“",
            },
            {
              id: "a2g-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Sobirov",
              correct: "g",
              explanation: "„Ich koche Plov für alle“ — issiq taom.",
            },
            {
              id: "a2g-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Familie Klose",
              correct: "c",
              explanation: "„Wir kümmern uns um die Getränke.“",
            },
            {
              id: "a2g-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Demir",
              correct: "e",
              explanation: "„bringt seine Musikanlage mit und macht die Musik“.",
            },
            {
              id: "a2g-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Frau, die das Gespräch führt",
              correct: "f",
              explanation: "„ich hole die Tische und Stühle“.",
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
          id: "a2g-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Beim Optiker",
            lines: [
              { voice: "male2", text: "Wann ist die Brille fertig?" },
              { voice: "female", text: "In einer Woche. Mit Eilzuschlag von 20 Euro schon übermorgen." },
              { voice: "male2", text: "Ich warte lieber die Woche." },
            ],
          },
          items: [
            {
              id: "a2g-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wann bekommt der Mann die Brille?",
              options: [
                { key: "a", label: "Übermorgen" },
                { key: "b", label: "In einer Woche" },
                { key: "c", label: "In einem Monat" },
              ],
              correct: "b",
              explanation: "„Ich warte lieber die Woche.“",
            },
          ],
        },
        {
          id: "a2g-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Fundbüro",
            lines: [
              { voice: "female2", text: "Ich habe meinen Rucksack in der Bahn vergessen, gestern Abend." },
              { voice: "male", text: "Bei uns kommen die Sachen erst nach drei Tagen an. Rufen Sie am Freitag an." },
            ],
          },
          items: [
            {
              id: "a2g-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was soll die Frau tun?",
              options: [
                { key: "a", label: "Am Freitag anrufen" },
                { key: "b", label: "Morgen wiederkommen" },
                { key: "c", label: "Zur Polizei gehen" },
              ],
              correct: "a",
              explanation: "„Rufen Sie am Freitag an.“",
            },
          ],
        },
        {
          id: "a2g-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "In der Apotheke",
            lines: [
              { voice: "male2", text: "Ist dieses Medikament auch für Kinder?" },
              { voice: "female", text: "Erst ab zwölf Jahren. Für Jüngere haben wir einen Saft." },
            ],
          },
          items: [
            {
              id: "a2g-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Ab wann darf man das Medikament nehmen?",
              options: [
                { key: "a", label: "Ab 6 Jahren" },
                { key: "b", label: "Ab 12 Jahren" },
                { key: "c", label: "Ab 18 Jahren" },
              ],
              correct: "b",
              explanation: "„Erst ab zwölf Jahren.“",
            },
          ],
        },
        {
          id: "a2g-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Am Empfang der Sprachschule",
            lines: [
              { voice: "female2", text: "Kann ich den Kurs auch später bezahlen?" },
              { voice: "male", text: "Die Hälfte vor Kursbeginn, den Rest nach vier Wochen." },
            ],
          },
          items: [
            {
              id: "a2g-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wie kann man bezahlen?",
              options: [
                { key: "a", label: "Alles am Ende" },
                { key: "b", label: "In zwei Teilen" },
                { key: "c", label: "Nur vorher" },
              ],
              correct: "b",
              explanation: "Yarmi oldindan, qolgani to‘rt haftadan keyin.",
            },
          ],
        },
        {
          id: "a2g-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Beim Frisör",
            lines: [
              { voice: "male2", text: "Kann ich morgen um zehn kommen?" },
              { voice: "female", text: "Morgen ist Ruhetag. Übermorgen um zehn geht." },
            ],
          },
          items: [
            {
              id: "a2g-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann bekommt der Mann einen Termin?",
              options: [
                { key: "a", label: "Morgen um zehn" },
                { key: "b", label: "Übermorgen um zehn" },
                { key: "c", label: "Nächste Woche" },
              ],
              correct: "b",
              explanation: "Ertaga dam olish kuni — indinga soat 10:00.",
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
          id: "a2g-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einer Erzieherin",
            lines: [
              { voice: "male", text: "Frau Krause, wie lange arbeiten Sie schon in der Kita?" },
              {
                voice: "female",
                text: "Seit sechzehn Jahren, immer in derselben Einrichtung.",
              },
              { voice: "male", text: "Wie viele Kinder betreuen Sie?" },
              {
                voice: "female",
                text: "In meiner Gruppe sind zweiundzwanzig Kinder, wir sind zu dritt. Eigentlich müssten wir zu viert sein.",
              },
              { voice: "male", text: "Was macht die Arbeit schwer?" },
              {
                voice: "female",
                text: "Nicht die Kinder — der Lärm und der Papierkram. Für die Dokumentation brauche ich fast eine Stunde am Tag.",
              },
              { voice: "male", text: "Und was gefällt Ihnen?" },
              {
                voice: "female",
                text: "Dass kein Tag gleich ist. Und dass man sieht, wie die Kinder in drei Jahren völlig andere Menschen werden.",
              },
              { voice: "male", text: "Würden Sie den Beruf empfehlen?" },
              {
                voice: "female",
                text: "Ja, aber man muss wissen, worauf man sich einlässt. Wer Ruhe braucht, ist hier falsch.",
              },
            ],
          },
          items: [
            {
              id: "a2g-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Frau Krause hat schon in mehreren Kitas gearbeitet.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„immer in derselben Einrichtung“.",
            },
            {
              id: "a2g-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "In ihrer Gruppe fehlt eine Fachkraft.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Eigentlich müssten wir zu viert sein.“",
            },
            {
              id: "a2g-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Die Kinder sind für sie das größte Problem.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Nicht die Kinder — der Lärm und der Papierkram.“",
            },
            {
              id: "a2g-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Die Dokumentation kostet täglich viel Zeit.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„fast eine Stunde am Tag“.",
            },
            {
              id: "a2g-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Sie empfiehlt den Beruf allen Menschen.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Wer Ruhe braucht, ist hier falsch.“",
            },
          ],
        },
      ],
    },
  ],
};
