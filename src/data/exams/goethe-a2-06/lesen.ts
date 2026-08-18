import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 06 · Lesen — 4 Teil, 20 element, 30 daqiqa. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2f-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `Der Bäcker, der ins Dorf kommt

Dreimal in der Woche hält ein blauer Lieferwagen auf dem Platz vor der Kirche in Sülzhayn. Innen: Brot, Brötchen, Kuchen und ein kleiner Kaffeeautomat. Bäckermeister Ralf Lange fährt damit sieben Dörfer an, in denen es kein Geschäft mehr gibt.

Angefangen hat er vor drei Jahren. „Meine Filiale im Nachbarort lief nicht mehr. Statt zu schließen, habe ich den Wagen gekauft.“ Heute macht er mit dem Wagen mehr Umsatz als früher mit dem Laden.

Die Kundschaft ist überwiegend älter. „Für viele bin ich nicht nur der Bäcker. Manche warten schon eine halbe Stunde vorher, weil sie sich hier treffen.“

Ganz einfach ist es nicht. Im Winter sind die Straßen manchmal nicht geräumt, und das Benzin kostet jeden Monat mehr. Zweimal musste Lange die Preise erhöhen.

Aufhören will er trotzdem nicht: „Solange die Leute kommen, fahre ich. Und sie kommen.“`,
          },
          items: [
            {
              id: "a2f-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Warum hat Herr Lange den Wagen gekauft?",
              options: [
                { key: "a", label: "Weil seine Filiale schlecht lief" },
                { key: "b", label: "Weil er nicht mehr backen wollte" },
                { key: "c", label: "Weil die Dörfer es verlangt haben" },
              ],
              correct: "a",
              explanation: "„Meine Filiale im Nachbarort lief nicht mehr.“",
            },
            {
              id: "a2f-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wie ist der Umsatz heute?",
              options: [
                { key: "a", label: "Niedriger als früher" },
                { key: "b", label: "Höher als früher" },
                { key: "c", label: "Genau gleich" },
              ],
              correct: "b",
              explanation: "„macht er mit dem Wagen mehr Umsatz als früher“.",
            },
            {
              id: "a2f-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wer kauft vor allem bei ihm?",
              options: [
                { key: "a", label: "Ältere Menschen" },
                { key: "b", label: "Junge Familien" },
                { key: "c", label: "Touristen" },
              ],
              correct: "a",
              explanation: "„Die Kundschaft ist überwiegend älter.“",
            },
            {
              id: "a2f-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was ist im Winter ein Problem?",
              options: [
                { key: "a", label: "Die Straßen" },
                { key: "b", label: "Zu wenig Kunden" },
                { key: "c", label: "Der kalte Wagen" },
              ],
              correct: "a",
              explanation: "„die Straßen manchmal nicht geräumt“.",
            },
            {
              id: "a2f-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was sagt Herr Lange über die Zukunft?",
              options: [
                { key: "a", label: "Er möchte bald aufhören." },
                { key: "b", label: "Er fährt weiter, solange Kunden kommen." },
                { key: "c", label: "Er möchte einen neuen Laden eröffnen." },
              ],
              correct: "b",
              explanation: "„Solange die Leute kommen, fahre ich.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Hausordnung. Was ist richtig? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2f-l2-b1",
          stimulus: {
            kind: "text",
            title: "Hausordnung · Lindenstraße 12",
            body: `1. Ruhezeiten: 22–7 Uhr sowie sonntags ganztägig.
2. Waschküche: Nutzung Montag bis Samstag 7–20 Uhr, Plan im Keller.
3. Müll: Papier blaue Tonne, Verpackungen gelb, Restmüll grau. Glas zum Container am Marktplatz.
4. Treppenhaus: Reinigung wöchentlich abwechselnd durch die Mieter, Plan am Schwarzen Brett.
5. Fahrräder: nur im Fahrradkeller, nicht im Hausflur.
6. Grillen auf Balkonen ist nicht gestattet.`,
          },
          items: [
            {
              id: "a2f-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Wann darf man sonntags laut sein?",
              options: [
                { key: "a", label: "Zwischen 7 und 22 Uhr" },
                { key: "b", label: "Gar nicht" },
                { key: "c", label: "Nur nachmittags" },
              ],
              correct: "b",
              explanation: "„sonntags ganztägig“ Ruhezeit — kun bo‘yi sokinlik.",
            },
            {
              id: "a2f-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Wo kommt Glas hin?",
              options: [
                { key: "a", label: "In die blaue Tonne" },
                { key: "b", label: "In die graue Tonne" },
                { key: "c", label: "Zum Container am Marktplatz" },
              ],
              correct: "c",
              explanation: "„Glas zum Container am Marktplatz“.",
            },
            {
              id: "a2f-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Wer putzt das Treppenhaus?",
              options: [
                { key: "a", label: "Die Mieter abwechselnd" },
                { key: "b", label: "Eine Firma" },
                { key: "c", label: "Der Vermieter" },
              ],
              correct: "a",
              explanation: "„abwechselnd durch die Mieter“.",
            },
            {
              id: "a2f-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Wo dürfen Fahrräder stehen?",
              options: [
                { key: "a", label: "Im Hausflur" },
                { key: "b", label: "Im Fahrradkeller" },
                { key: "c", label: "Auf dem Balkon" },
              ],
              correct: "b",
              explanation: "„nur im Fahrradkeller, nicht im Hausflur“.",
            },
            {
              id: "a2f-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Darf man auf dem Balkon grillen?",
              options: [
                { key: "a", label: "Ja, immer" },
                { key: "b", label: "Nur am Wochenende" },
                { key: "c", label: "Nein" },
              ],
              correct: "c",
              explanation: "„Grillen auf Balkonen ist nicht gestattet.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      instruction:
        "Lesen Sie die E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2f-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von einer Kollegin",
            body: `Hallo Gulnora,

wie besprochen die Infos zum Betriebsausflug.

Wir fahren am 14. Juni, Abfahrt 8 Uhr am Hauptbahnhof — nicht wie zuerst geplant vor der Firma. Der Bus wartet nicht, also bitte pünktlich sein.

Das Programm: vormittags eine Wanderung (etwa zwei Stunden, nicht schwer), mittags Essen im Gasthaus, nachmittags Museum oder freie Zeit. Wer nicht wandern möchte, kann direkt zum Gasthaus fahren.

Die Firma zahlt Bus und Mittagessen. Getränke und Museumseintritt (6 Euro) zahlt jeder selbst.

Sag mir bitte bis Freitag, ob du wanderst oder nicht — wegen der Planung.

Liebe Grüße
Sabine`,
          },
          items: [
            {
              id: "a2f-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wo beginnt der Ausflug?",
              options: [
                { key: "a", label: "Vor der Firma" },
                { key: "b", label: "Am Hauptbahnhof" },
                { key: "c", label: "Am Gasthaus" },
              ],
              correct: "b",
              explanation: "„am Hauptbahnhof — nicht wie zuerst geplant vor der Firma“.",
            },
            {
              id: "a2f-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wie lange dauert die Wanderung?",
              options: [
                { key: "a", label: "Etwa eine Stunde" },
                { key: "b", label: "Etwa zwei Stunden" },
                { key: "c", label: "Den ganzen Tag" },
              ],
              correct: "b",
              explanation: "„etwa zwei Stunden, nicht schwer“.",
            },
            {
              id: "a2f-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was gilt für Personen, die nicht wandern möchten?",
              options: [
                { key: "a", label: "Sie können direkt zum Gasthaus fahren." },
                { key: "b", label: "Sie müssen zu Hause bleiben." },
                { key: "c", label: "Sie zahlen mehr." },
              ],
              correct: "a",
              explanation: "„kann direkt zum Gasthaus fahren“.",
            },
            {
              id: "a2f-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was bezahlt die Firma?",
              options: [
                { key: "a", label: "Alles" },
                { key: "b", label: "Bus und Mittagessen" },
                { key: "c", label: "Nur den Bus" },
              ],
              correct: "b",
              explanation: "„Die Firma zahlt Bus und Mittagessen.“",
            },
            {
              id: "a2f-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was soll Gulnora bis Freitag sagen?",
              options: [
                { key: "a", label: "Ob sie mitfährt" },
                { key: "b", label: "Ob sie wandert" },
                { key: "c", label: "Was sie essen möchte" },
              ],
              correct: "b",
              explanation: "„ob du wanderst oder nicht“.",
            },
          ],
        },
      ],
    },

    {
      nr: 4,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal benutzen. Für eine Situation gibt es keine passende Anzeige: Wählen Sie x.",
      bank: [
        { key: "a", label: "Reparaturcafé" },
        { key: "b", label: "Kinderkleidung tauschen" },
        { key: "c", label: "Hilfe beim Ausfüllen von Formularen" },
        { key: "d", label: "Wanderfreunde suchen Mitglieder" },
        { key: "e", label: "Nachbarschaftsauto" },
        { key: "f", label: "Lernpatenschaft" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2f-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Reparaturcafé",
                body: "Jeden zweiten Samstag 10–14 Uhr: Wir reparieren gemeinsam Lampen, Toaster, Kleidung und Fahrräder. Kostenlos, Spenden willkommen.",
              },
              {
                key: "b",
                title: "Kinderkleidung tauschen",
                body: "Bringen Sie Kleidung, die Ihr Kind nicht mehr trägt, und nehmen Sie andere mit. Kein Geld, nur Tausch. Jeden ersten Sonntag im Monat.",
              },
              {
                key: "c",
                title: "Hilfe beim Ausfüllen von Formularen",
                body: "Anträge, Widersprüche, Formulare — wir helfen beim Lesen und Ausfüllen. Dienstag und Donnerstag 14–17 Uhr, kostenlos.",
              },
              {
                key: "d",
                title: "Wanderfreunde suchen Mitglieder",
                body: "Wir wandern jeden zweiten Sonntag 10 bis 15 Kilometer, gemütliches Tempo. Jahresbeitrag 24 Euro, Schnuppertour kostenlos.",
              },
              {
                key: "e",
                title: "Nachbarschaftsauto",
                body: "Ein Auto für 20 Haushalte: Buchung über App, 3 Euro pro Stunde plus Kilometerpreis. Führerschein und kurze Einweisung nötig.",
              },
              {
                key: "f",
                title: "Lernpatenschaft",
                body: "Ehrenamtliche begleiten ein Grundschulkind ein Jahr lang, einmal pro Woche. Wir schulen Sie vorher, Erfahrung ist nicht nötig.",
              },
            ],
          },
          items: [
            {
              id: "a2f-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Kaffeemaschine funktioniert nicht mehr, aber Sie möchten sie nicht wegwerfen.",
              correct: "a",
              explanation: "Reparaturcafé — birgalikda ta’mirlash.",
            },
            {
              id: "a2f-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie haben einen Brief vom Amt bekommen und verstehen das Formular nicht.",
              correct: "c",
              explanation: "Blanka to‘ldirishda bepul yordam.",
            },
            {
              id: "a2f-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie brauchen nur einmal im Monat ein Auto und möchten keines kaufen.",
              correct: "e",
              explanation: "Mahalla mashinasi — soatbay ijara.",
            },
            {
              id: "a2f-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Kinder wachsen schnell, und Sie möchten kein Geld für neue Kleidung ausgeben.",
              correct: "b",
              explanation: "Kiyim almashish — pulsiz.",
            },
            {
              id: "a2f-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten schwimmen lernen und suchen einen Kurs für Erwachsene.",
              correct: "x",
              explanation: "Suzish kursi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
