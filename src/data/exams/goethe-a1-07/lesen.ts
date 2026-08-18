import type { ExamModule } from "@/lib/exam/types";

/** Goethe A1 · Modellsatz 07 · Lesen — 3 Teil, 15 element, ~25 daqiqa. */
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
          id: "a1g-l1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von der Kita",
            body: `Liebe Eltern,

am Freitag feiern wir das Sommerfest. Es beginnt um 15 Uhr und dauert bis 18 Uhr.

Bitte bringen Sie einen Salat oder einen Kuchen mit. Getränke haben wir genug.

Die Kinder brauchen an diesem Tag keine Wechselkleidung, aber eine Kopfbedeckung.

Bei Regen feiern wir trotzdem — dann drinnen im großen Raum.

Ihr Kita-Team`,
          },
          items: [
            {
              id: "a1g-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Das Fest dauert drei Stunden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "15:00 dan 18:00 gacha — uch soat.",
            },
            {
              id: "a1g-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Die Eltern sollen Getränke mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ichimlik yetarli; salat yoki kek kerak.",
            },
            {
              id: "a1g-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Bei Regen fällt das Fest aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Yomg‘irda ichkarida o‘tkaziladi.",
            },
          ],
        },
        {
          id: "a1g-l1-b2",
          stimulus: {
            kind: "text",
            title: "Information vom Sportverein",
            body: `Liebe Mitglieder,

ab September gibt es einen neuen Kurs: Rückengymnastik, dienstags von 18 bis 19 Uhr.

Der Kurs ist für Mitglieder kostenlos. Gäste zahlen 5 Euro pro Stunde.

Bitte bringen Sie ein Handtuch mit. Matten sind vorhanden.

Anmeldung im Büro oder per E-Mail bis zum 25. August.`,
          },
          items: [
            {
              id: "a1g-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Mitglieder bezahlen für den Kurs nichts.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Der Kurs ist für Mitglieder kostenlos.“",
            },
            {
              id: "a1g-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Man muss eine Matte mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Matten sind vorhanden“ — faqat sochiq kerak.",
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
          id: "a1g-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Möbelhaus Nord",
                body: "Neue Möbel, Lieferung in zwei Wochen. Montag bis Samstag 10–20 Uhr. Aufbau gegen Aufpreis.",
              },
              {
                key: "b",
                title: "Sozialkaufhaus",
                body: "Gebrauchte Möbel und Geräte, sehr günstig. Nur mit Berechtigungsschein. Dienstag und Freitag 9–15 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1g-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie brauchen schnell einen Tisch, arbeiten aber unter der Woche bis 18 Uhr.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "b faqat 15:00 gacha; a soat 20:00 gacha va shanba ham ochiq.",
            },
          ],
        },
        {
          id: "a1g-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Yoga im Park",
                body: "Jeden Samstag 9 Uhr, bei gutem Wetter. Kostenlos, einfach kommen. Matte bitte selbst mitbringen.",
              },
              {
                key: "b",
                title: "Yogastudio Balance",
                body: "Kurse Montag bis Freitag abends, 12 Euro pro Stunde. Matten und Umkleide vorhanden.",
              },
            ],
          },
          items: [
            {
              id: "a1g-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten kostenlos Yoga machen und haben eine Matte.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "Bepul, o‘z gilamchasi bilan.",
            },
          ],
        },
        {
          id: "a1g-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Kinderarzt Dr. Meier",
                body: "Impfungen und Vorsorge nur mit Termin, Montag bis Freitag 8–16 Uhr.",
              },
              {
                key: "b",
                title: "Impfstelle der Stadt",
                body: "Impfungen ohne Termin für alle Altersgruppen, Mittwoch 14–19 Uhr und Samstag 9–13 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1g-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt:
                "Sie brauchen eine Impfung, haben keinen Termin und können nur samstags.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Navbatsiz va shanba kuni ishlaydi.",
            },
          ],
        },
        {
          id: "a1g-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Nachhilfe zu Hause",
                body: "Lehrerin kommt zu Ihnen, 25 Euro pro Stunde. Nachmittags ab 15 Uhr, alle Fächer bis Klasse 6.",
              },
              {
                key: "b",
                title: "Lerngruppe im Jugendclub",
                body: "Kostenlos, Montag bis Donnerstag 15–17 Uhr. Für Schüler ab Klasse 5, in kleinen Gruppen.",
              },
            ],
          },
          items: [
            {
              id: "a1g-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt:
                "Ihre Tochter geht in die 3. Klasse und braucht Hilfe, Sie haben aber wenig Geld.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation:
                "b faqat 5-sinfdan boshlab; 3-sinf uchun faqat a mos keladi.",
            },
          ],
        },
        {
          id: "a1g-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fitnessstudio Aktiv",
                body: "Vertrag 12 Monate, 25 Euro im Monat. Geräte und Kurse, täglich 6–23 Uhr.",
              },
              {
                key: "b",
                title: "Schwimmbad: Zehnerkarte",
                body: "Zehn Eintritte für 35 Euro, ein Jahr gültig. Kein Vertrag, keine Kündigung nötig.",
              },
            ],
          },
          items: [
            {
              id: "a1g-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt:
                "Sie möchten manchmal schwimmen gehen und keinen Vertrag abschließen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "„Kein Vertrag, keine Kündigung nötig.“",
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
          id: "a1g-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "Im Aufzug",
            body: "Höchstens 6 Personen oder 450 kg. Bei Feuer bitte die Treppe benutzen.",
          },
          items: [
            {
              id: "a1g-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Bei Feuer darf man den Aufzug nehmen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Bei Feuer bitte die Treppe benutzen.“",
            },
          ],
        },
        {
          id: "a1g-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "An der Apothekentür",
            body: "Heute Notdienst bis 22 Uhr. Bitte klingeln, die Tür ist nach 20 Uhr geschlossen.",
          },
          items: [
            {
              id: "a1g-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Nach 20 Uhr muss man klingeln.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Bitte klingeln, die Tür ist nach 20 Uhr geschlossen.“",
            },
          ],
        },
        {
          id: "a1g-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Auf dem Spielplatz",
            body: "Benutzung von 8 bis 20 Uhr. Hunde müssen draußen bleiben.",
          },
          items: [
            {
              id: "a1g-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Hunde dürfen auf den Spielplatz.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Hunde müssen draußen bleiben.“",
            },
          ],
        },
        {
          id: "a1g-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Im Supermarkt",
            body: "Pfandflaschen bitte einzeln in den Automaten geben. Kästen nehmen wir an der Kasse zurück.",
          },
          items: [
            {
              id: "a1g-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Kästen kann man an der Kasse zurückgeben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Kästen nehmen wir an der Kasse zurück.“",
            },
          ],
        },
        {
          id: "a1g-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "An der Bibliothekstür",
            body: "Essen und Trinken sind im Lesesaal nicht erlaubt. Wasser in Flaschen ist in Ordnung.",
          },
          items: [
            {
              id: "a1g-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wasser darf man mitnehmen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wasser in Flaschen ist in Ordnung.“",
            },
          ],
        },
      ],
    },
  ],
};
