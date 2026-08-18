import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 05 · Lesen — 3 Teil, 15 element, ~25 daqiqa.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      blocks: [
        {
          id: "a1e-l1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von Herrn Sander",
            body: `Sehr geehrte Frau Ergasheva,

Ihr Termin für das Beratungsgespräch ist am Dienstag, dem 14. Mai, um 10 Uhr.

Bitte bringen Sie Ihren Ausweis und Ihre Zeugnisse mit. Kopien brauchen Sie nicht, wir machen sie hier.

Das Gespräch dauert ungefähr 45 Minuten. Wenn Sie nicht kommen können, rufen Sie bitte einen Tag vorher an.

Mit freundlichen Grüßen
Jonas Sander`,
          },
          items: [
            {
              id: "a1e-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Der Termin ist am Nachmittag.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Soat 10:00 — tushdan oldin.",
            },
            {
              id: "a1e-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Frau Ergasheva muss Kopien mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Kopien brauchen Sie nicht, wir machen sie hier.“",
            },
            {
              id: "a1e-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Das Gespräch dauert etwa eine Dreiviertelstunde.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "45 daqiqa — chorak kam bir soat.",
            },
          ],
        },
        {
          id: "a1e-l1-b2",
          stimulus: {
            kind: "text",
            title: "Aushang im Sportverein",
            body: `Liebe Mitglieder,

in den Sommerferien (1. Juli bis 12. August) findet kein Training statt.

Die Halle bleibt aber offen: Wer selbst spielen möchte, holt den Schlüssel im Büro. Bitte am Abend wieder abgeben.

Das erste Training nach den Ferien ist am Montag, dem 14. August.

Euer Vorstand`,
          },
          items: [
            {
              id: "a1e-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "In den Ferien ist die Halle geschlossen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Zal ochiq — kalitni ofisdan olish mumkin.",
            },
            {
              id: "a1e-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Nach den Ferien beginnt das Training am 14. August.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„am Montag, dem 14. August“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Situationen 6 bis 10 und die Anzeigen a und b. Welche Anzeige passt? Kreuzen Sie an.",
      blocks: [
        {
          id: "a1e-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Sprachcafé",
                body: "Jeden Donnerstag 18–20 Uhr Deutsch sprechen bei Kaffee und Kuchen. Kostenlos, ohne Anmeldung.",
              },
              {
                key: "b",
                title: "Deutschkurs A2",
                body: "Zwölf Wochen, montags bis donnerstags 9–12 Uhr, 180 €. Anmeldung bis 20. August.",
              },
            ],
          },
          items: [
            {
              id: "a1e-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie arbeiten vormittags und möchten abends kostenlos Deutsch üben.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "Kechqurun, bepul va ro‘yxatsiz.",
            },
          ],
        },
        {
          id: "a1e-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Zimmer bei Familie",
                body: "Möbliertes Zimmer, Küche und Bad zusammen mit der Familie, 280 € warm. Nur für Nichtraucher.",
              },
              {
                key: "b",
                title: "Kleine Wohnung",
                body: "Ein Zimmer mit eigener Küche und eigenem Bad, 480 € warm. Ab 1. Oktober frei.",
              },
            ],
          },
          items: [
            {
              id: "a1e-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten eine eigene Küche und haben 500 Euro.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "b da alohida oshxona va hammom bor, narxi mos.",
            },
          ],
        },
        {
          id: "a1e-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Autowerkstatt Klein",
                body: "Reparaturen nach Termin, Montag bis Freitag 8–17 Uhr. Ersatzwagen möglich.",
              },
              {
                key: "b",
                title: "Reifen-Service",
                body: "Reifenwechsel ohne Termin, auch samstags 9–14 Uhr. Nur Reifen, keine anderen Reparaturen.",
              },
            ],
          },
          items: [
            {
              id: "a1e-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt:
                "Ihre Bremsen machen Geräusche und Sie brauchen für die Zeit ein anderes Auto.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "b faqat shina bilan shug‘ullanadi; a da almashtiruv mashina ham bor.",
            },
          ],
        },
        {
          id: "a1e-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Kinderarzt Dr. Bauer",
                body: "Sprechstunde Montag bis Freitag 8–12 Uhr, Dienstag auch 15–18 Uhr. Termine online.",
              },
              {
                key: "b",
                title: "Hausarztpraxis Nord",
                body: "Für Erwachsene ab 18 Jahren. Offene Sprechstunde Montag bis Freitag 8–11 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1e-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt:
                "Ihre Tochter (6) ist krank und Sie können erst am Dienstagnachmittag kommen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "Bolalar shifokori seshanba kuni tushdan keyin ham qabul qiladi.",
            },
          ],
        },
        {
          id: "a1e-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Schwimmkurs für Kinder",
                body: "Ab 5 Jahren, samstags 10 Uhr, zehn Termine, 70 €. Anmeldung im Schwimmbad.",
              },
              {
                key: "b",
                title: "Familienschwimmen",
                body: "Sonntags 9–12 Uhr, Eltern und Kinder zusammen. Kein Kurs, nur freies Schwimmen. Eintritt 4 €.",
              },
            ],
          },
          items: [
            {
              id: "a1e-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt:
                "Ihr Sohn (7) soll richtig schwimmen lernen, nicht nur spielen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "b — faqat erkin suzish; a — haqiqiy kurs.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Schilder und Aushänge. Sind die Sätze 11 bis 15 Richtig oder Falsch? Kreuzen Sie an.",
      blocks: [
        {
          id: "a1e-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "An der Ladentür",
            body: "Wegen Inventur bleibt das Geschäft am Montag geschlossen. Ab Dienstag wieder normal geöffnet.",
          },
          items: [
            {
              id: "a1e-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Am Dienstag kann man wieder einkaufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ab Dienstag wieder normal geöffnet.“",
            },
          ],
        },
        {
          id: "a1e-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "Im Hausflur",
            body: "Fahrräder bitte im Keller abstellen. Im Flur ist das Abstellen nicht erlaubt.",
          },
          items: [
            {
              id: "a1e-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Man darf das Fahrrad im Flur lassen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Im Flur ist das Abstellen nicht erlaubt.“",
            },
          ],
        },
        {
          id: "a1e-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Am Automaten",
            body: "Dieser Automat nimmt nur Karten. Mit Bargeld bezahlen Sie bitte am Schalter.",
          },
          items: [
            {
              id: "a1e-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Am Automaten kann man mit Bargeld bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Avtomat faqat karta qabul qiladi.",
            },
          ],
        },
        {
          id: "a1e-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Im Museum",
            body: "Fotografieren ist erlaubt, aber ohne Blitz. Videoaufnahmen sind nicht gestattet.",
          },
          items: [
            {
              id: "a1e-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Man darf fotografieren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Fotografieren ist erlaubt, aber ohne Blitz.“",
            },
          ],
        },
        {
          id: "a1e-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "An der Bushaltestelle",
            body: "Vom 3. bis 7. Juni fährt hier kein Bus. Bitte benutzen Sie die Haltestelle Marktplatz.",
          },
          items: [
            {
              id: "a1e-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Im Juni fährt hier eine Woche lang kein Bus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "3-dan 7-iyungacha — taxminan bir hafta.",
            },
          ],
        },
      ],
    },
  ],
};
