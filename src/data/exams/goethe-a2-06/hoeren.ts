import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 06 · Hören — 4 Teil, 20 element, 30 daqiqa. */
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
          id: "a2f-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Theater",
            lines: [
              {
                voice: "female2",
                text: "Die heutige Vorstellung beginnt fünfzehn Minuten später. Nutzen Sie die Zeit gern für einen Besuch an der Bar im Foyer.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Was passiert heute?",
              options: [
                { key: "a", label: "Die Vorstellung fällt aus." },
                { key: "b", label: "Sie beginnt etwas später." },
                { key: "c", label: "Sie beginnt früher." },
              ],
              correct: "b",
              explanation: "„beginnt fünfzehn Minuten später“.",
            },
          ],
        },
        {
          id: "a2f-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Werkstatt",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Karimova. Wir haben Ihr Fahrrad geprüft. Die Reparatur lohnt sich nicht mehr — das Rad ist älter als die Kosten.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was empfiehlt die Werkstatt?",
              options: [
                { key: "a", label: "Die Reparatur zu machen" },
                { key: "b", label: "Das Rad nicht mehr zu reparieren" },
                { key: "c", label: "Ein neues Rad zu bestellen" },
              ],
              correct: "b",
              explanation: "„Die Reparatur lohnt sich nicht mehr.“",
            },
          ],
        },
        {
          id: "a2f-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Gespräch beim Arzt",
            lines: [
              { voice: "female", text: "Muss ich die Tabletten vor oder nach dem Essen nehmen?" },
              { voice: "male2", text: "Nach dem Essen, sonst kann Ihnen schlecht werden." },
              { voice: "female", text: "Also nach dem Essen, alles klar." },
            ],
          },
          items: [
            {
              id: "a2f-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann soll die Frau die Tabletten nehmen?",
              options: [
                { key: "a", label: "Vor dem Essen" },
                { key: "b", label: "Nach dem Essen" },
                { key: "c", label: "Vor dem Schlafen" },
              ],
              correct: "b",
              explanation: "„Nach dem Essen, sonst kann Ihnen schlecht werden.“",
            },
          ],
        },
        {
          id: "a2f-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Betrieb",
            lines: [
              {
                voice: "male",
                text: "Wichtig für alle: Die Parkplätze hinter dem Gebäude werden am Freitag neu markiert. Bitte parken Sie an diesem Tag auf der Straße.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sollen die Mitarbeitenden am Freitag tun?",
              options: [
                { key: "a", label: "Auf der Straße parken" },
                { key: "b", label: "Zu Hause bleiben" },
                { key: "c", label: "Früher kommen" },
              ],
              correct: "a",
              explanation: "„Bitte parken Sie an diesem Tag auf der Straße.“",
            },
          ],
        },
        {
          id: "a2f-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Freundin",
            lines: [
              {
                voice: "female2",
                text: "Hallo, ich habe das Rezept gefunden, das du wolltest. Ich schicke es dir per Nachricht — dann musst du es nicht abschreiben.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was macht die Freundin?",
              options: [
                { key: "a", label: "Sie kocht das Gericht." },
                { key: "b", label: "Sie schickt das Rezept." },
                { key: "c", label: "Sie bringt ein Buch mit." },
              ],
              correct: "b",
              explanation: "„Ich schicke es dir per Nachricht.“",
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
        "Sie hören ein Gespräch. Was sucht wer? Ordnen Sie zu. Sie hören den Text einmal.",
      bank: [
        { key: "a", label: "🏠 Eine größere Wohnung" },
        { key: "b", label: "🚗 Ein gebrauchtes Auto" },
        { key: "c", label: "🐈 Ein Zuhause für eine Katze" },
        { key: "d", label: "💼 Eine neue Stelle" },
        { key: "e", label: "🎸 Einen Musiklehrer" },
        { key: "f", label: "🧑‍🍳 Einen Kochkurs" },
        { key: "g", label: "🛏 Ein Zimmer für einen Gast" },
        { key: "h", label: "🚲 Ein Fahrrad für ein Kind" },
        { key: "i", label: "📖 Einen Sprachpartner" },
      ],
      blocks: [
        {
          id: "a2f-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Beim Nachbarschaftstreffen",
            lines: [
              { voice: "female", text: "Wir sammeln heute, wer was sucht. Herr Klose, Sie zuerst." },
              {
                voice: "male",
                text: "Wir bekommen ein drittes Kind, deshalb brauchen wir dringend etwas Größeres zum Wohnen.",
              },
              { voice: "female", text: "Und Sie, Frau Weber?" },
              {
                voice: "female2",
                text: "Meine Tochter fängt in der Schule an. Ihr altes Rad ist zu klein geworden.",
              },
              { voice: "female", text: "Herr Demir?" },
              {
                voice: "male2",
                text: "Ich lerne seit einem Jahr Deutsch, aber ich spreche zu wenig. Ich suche jemanden zum Reden — einmal pro Woche würde reichen.",
              },
              { voice: "female", text: "Und Frau Prinz hat mir etwas geschrieben." },
              {
                voice: "male",
                text: "Ja, sie zieht ins Pflegeheim und kann ihr Tier nicht mitnehmen. Es ist eine ruhige, alte Katze.",
              },
              {
                voice: "female",
                text: "Bei mir selbst ist es einfach: Meine Schwester kommt im Sommer für drei Wochen und braucht ein Bett.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Klose",
              correct: "a",
              explanation: "Uchinchi farzand — kattaroq kvartira kerak.",
            },
            {
              id: "a2f-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Frau Weber",
              correct: "h",
              explanation: "Qizining velosipedi kichkina bo‘lib qolgan.",
            },
            {
              id: "a2f-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Herr Demir",
              correct: "i",
              explanation: "„Ich suche jemanden zum Reden“ — til hamrohi.",
            },
            {
              id: "a2f-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Frau Prinz",
              correct: "c",
              explanation: "Mushugini olib keta olmaydi — yangi uy kerak.",
            },
            {
              id: "a2f-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Frau, die das Treffen leitet",
              correct: "g",
              explanation: "Singlisi uch haftaga keladi — joy kerak.",
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
          id: "a2f-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Im Reisebüro",
            lines: [
              { voice: "male2", text: "Ist das Frühstück im Preis enthalten?" },
              { voice: "female", text: "Ja, Frühstück ja — Abendessen kostet 15 Euro extra." },
            ],
          },
          items: [
            {
              id: "a2f-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was ist im Preis enthalten?",
              options: [
                { key: "a", label: "Nur das Frühstück" },
                { key: "b", label: "Frühstück und Abendessen" },
                { key: "c", label: "Gar nichts" },
              ],
              correct: "a",
              explanation: "Kechki ovqat 15 evro qo‘shimcha.",
            },
          ],
        },
        {
          id: "a2f-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "An der Rezeption",
            lines: [
              { voice: "female2", text: "Kann ich mein Gepäck bis vier Uhr hierlassen?" },
              { voice: "male", text: "Natürlich, wir haben einen Raum dafür. Das kostet nichts." },
            ],
          },
          items: [
            {
              id: "a2f-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was sagt der Mann über das Gepäck?",
              options: [
                { key: "a", label: "Es kann kostenlos bleiben." },
                { key: "b", label: "Es kostet fünf Euro." },
                { key: "c", label: "Das geht leider nicht." },
              ],
              correct: "a",
              explanation: "„Das kostet nichts.“",
            },
          ],
        },
        {
          id: "a2f-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Beim Elternabend",
            lines: [
              { voice: "male2", text: "Braucht mein Sohn für den Ausflug Geld?" },
              { voice: "female", text: "Nur für das Mittagessen, etwa acht Euro. Die Fahrt zahlt die Schule." },
            ],
          },
          items: [
            {
              id: "a2f-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wofür braucht das Kind Geld?",
              options: [
                { key: "a", label: "Für die Fahrt" },
                { key: "b", label: "Für das Essen" },
                { key: "c", label: "Für den Eintritt" },
              ],
              correct: "b",
              explanation: "„Nur für das Mittagessen, etwa acht Euro.“",
            },
          ],
        },
        {
          id: "a2f-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Möbelhaus",
            lines: [
              { voice: "female2", text: "Können Sie den Schrank auch liefern?" },
              { voice: "male", text: "Ja, aber nur bis zur Haustür. In die Wohnung tragen wir nicht." },
            ],
          },
          items: [
            {
              id: "a2f-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was bietet das Geschäft?",
              options: [
                { key: "a", label: "Lieferung bis in die Wohnung" },
                { key: "b", label: "Lieferung bis zur Haustür" },
                { key: "c", label: "Keine Lieferung" },
              ],
              correct: "b",
              explanation: "„nur bis zur Haustür“.",
            },
          ],
        },
        {
          id: "a2f-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon",
            lines: [
              { voice: "male2", text: "Ich möchte meinen Termin verschieben, von Montag auf Mittwoch." },
              { voice: "female", text: "Mittwoch ist voll. Donnerstag um vierzehn Uhr wäre frei." },
              { voice: "male2", text: "Gut, dann Donnerstag." },
            ],
          },
          items: [
            {
              id: "a2f-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann ist der neue Termin?",
              options: [
                { key: "a", label: "Am Montag" },
                { key: "b", label: "Am Mittwoch" },
                { key: "c", label: "Am Donnerstag" },
              ],
              correct: "c",
              explanation: "„Gut, dann Donnerstag.“",
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
          id: "a2f-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einem Bäcker",
            lines: [
              { voice: "female", text: "Herr Lange, wann beginnt Ihr Arbeitstag?" },
              {
                voice: "male",
                text: "Um zwei Uhr nachts. Das klingt schlimm, aber um elf Uhr vormittags bin ich fertig.",
              },
              { voice: "female", text: "Wie viele Brote backen Sie am Tag?" },
              {
                voice: "male",
                text: "Etwa vierhundert, dazu Brötchen und Kuchen. Am Samstag sind es fast doppelt so viele.",
              },
              { voice: "female", text: "Backen Sie alles selbst?" },
              {
                voice: "male",
                text: "Nein, ich habe zwei Gesellen. Allein wäre das gar nicht möglich.",
              },
              { voice: "female", text: "Was ist das Schwierigste?" },
              {
                voice: "male",
                text: "Nicht das frühe Aufstehen — daran gewöhnt man sich. Schwierig ist, Nachwuchs zu finden. Junge Leute wollen nachts nicht arbeiten.",
              },
              { voice: "female", text: "Machen Sie manchmal Urlaub?" },
              {
                voice: "male",
                text: "Zwei Wochen im Sommer, dann bleibt der Laden zu. Meine Kunden wissen das und decken sich vorher ein.",
              },
            ],
          },
          items: [
            {
              id: "a2f-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Herr Lange arbeitet nachts.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Um zwei Uhr nachts“ boshlanadi.",
            },
            {
              id: "a2f-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Am Samstag backt er weniger als sonst.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„fast doppelt so viele“ — ko‘proq.",
            },
            {
              id: "a2f-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Er arbeitet nicht allein.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„ich habe zwei Gesellen“.",
            },
            {
              id: "a2f-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Das frühe Aufstehen ist für ihn das größte Problem.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Nicht das frühe Aufstehen … Schwierig ist, Nachwuchs zu finden.“",
            },
            {
              id: "a2f-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Im Urlaub bleibt der Laden geschlossen.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„dann bleibt der Laden zu“.",
            },
          ],
        },
      ],
    },
  ],
};
