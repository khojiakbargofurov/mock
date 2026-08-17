import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 02 · Lesen — 3 Teil, 15 element, ~25 daqiqa.
 * Matnlar 01-variantdagilardan boshqa: qo'shnining xabari, bolalar bog'chasi
 * eslatmasi, sport zali va bolalar suzish kursi e'lonlari, bino lavhalari.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      hint: "Har bayonot uchun matndagi aniq joyni toping — taxmin qilmang.",
      blocks: [
        {
          id: "a1b-l1-b1",
          stimulus: {
            kind: "text",
            title: "Nachricht von der Nachbarin",
            body: `Lieber Herr Karimov,

am Samstag machen wir im Hof ein kleines Fest. Es beginnt um 15 Uhr und dauert bis etwa 20 Uhr.

Bitte bringen Sie nichts mit — Kuchen und Getränke haben wir schon. Kommen Sie einfach vorbei!

Wenn es regnet, treffen wir uns im Keller.

Viele Grüße
Frau Ercan (Wohnung 12)`,
          },
          items: [
            {
              id: "a1b-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Das Fest ist am Samstagnachmittag.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„am Samstag … beginnt um 15 Uhr“ — tushdan keyin.",
            },
            {
              id: "a1b-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Herr Karimov soll einen Kuchen mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Bitte bringen Sie nichts mit — Kuchen und Getränke haben wir schon.“",
            },
            {
              id: "a1b-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Bei Regen fällt das Fest aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Yomg‘ir yog‘sa bekor qilinmaydi — „treffen wir uns im Keller“.",
            },
          ],
        },
        {
          id: "a1b-l1-b2",
          stimulus: {
            kind: "text",
            title: "Information aus dem Kindergarten",
            body: `Liebe Eltern,

am Donnerstag machen wir einen Ausflug in den Zoo. Wir fahren um 8.30 Uhr los und sind um 15 Uhr zurück.

Bitte geben Sie Ihrem Kind ein Frühstück und eine Jacke mit. Der Eintritt kostet nichts, der Kindergarten bezahlt ihn.

Ihr Kindergarten-Team`,
          },
          items: [
            {
              id: "a1b-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Die Eltern müssen für den Eintritt bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Der Eintritt kostet nichts, der Kindergarten bezahlt ihn.“",
            },
            {
              id: "a1b-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Die Kinder brauchen eine Jacke.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Bitte geben Sie Ihrem Kind ein Frühstück und eine Jacke mit.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Kreuzen Sie an: a oder b.",
      hint: "Har vaziyatda bitta shart hal qiluvchi bo‘ladi: vaqt, narx yoki yosh.",
      blocks: [
        {
          id: "a1b-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fitnessstudio Aktiv",
                body: "Geöffnet Mo–So 6–23 Uhr. Monatskarte 39 €, Jahresvertrag nötig.",
              },
              {
                key: "b",
                title: "Sporthalle am Park",
                body: "Einzelkarte 5 €, 10er-Karte 40 €. Kein Vertrag. Mo–Fr 16–21 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1b-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie möchten manchmal Sport machen, aber keinen Vertrag unterschreiben.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "„Kein Vertrag“ — b da bittalik chipta bor; a yillik shartnoma talab qiladi.",
            },
          ],
        },
        {
          id: "a1b-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Schwimmkurs für Kinder",
                body: "Für Kinder von 5 bis 8 Jahren. Samstags 10–11 Uhr, 8 Termine, 60 €.",
              },
              {
                key: "b",
                title: "Schwimmen für Erwachsene",
                body: "Anfängerkurs ab 18 Jahren. Dienstags 19–20 Uhr, 10 Termine, 95 €.",
              },
            ],
          },
          items: [
            {
              id: "a1b-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Ihre Tochter ist sechs Jahre alt und möchte schwimmen lernen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "5–8 yosh oralig‘i — olti yoshli qizga a mos.",
            },
          ],
        },
        {
          id: "a1b-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Möbel gebraucht",
                body: "Tisch und vier Stühle, gut erhalten. 80 € für alles. Nur Abholung.",
              },
              {
                key: "b",
                title: "Möbelhaus Wagner",
                body: "Neue Esszimmer-Sets ab 450 €. Lieferung nach Hause inklusive.",
              },
            ],
          },
          items: [
            {
              id: "a1b-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt:
                "Sie brauchen einen Tisch, haben aber nur wenig Geld. Ein Auto haben Sie.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation:
                "80 € — arzon, „nur Abholung“ ham muammo emas, chunki mashina bor.",
            },
          ],
        },
        {
          id: "a1b-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Apotheke Zentrum",
                body: "Mo–Fr 8–18.30 Uhr, Sa 9–13 Uhr. Sonntag geschlossen.",
              },
              {
                key: "b",
                title: "Notdienst-Apotheke",
                body: "Rund um die Uhr geöffnet, auch nachts und am Sonntag. Bahnhofstraße 3.",
              },
            ],
          },
          items: [
            {
              id: "a1b-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Ihr Kind ist am Sonntagabend krank und braucht Medizin.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "Yakshanba kechqurun faqat navbatchi dorixona ishlaydi („rund um die Uhr“).",
            },
          ],
        },
        {
          id: "a1b-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Deutsch am Samstag",
                body: "Kurs A1, samstags 10–13 Uhr, 12 Termine. Anmeldung bis Freitag.",
              },
              {
                key: "b",
                title: "Deutsch online",
                body: "A1-Kurs am Computer, jederzeit lernen. Ohne Lehrer, mit Videos.",
              },
            ],
          },
          items: [
            {
              id: "a1b-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt:
                "Sie möchten Deutsch mit einer Lehrerin lernen und haben nur am Wochenende Zeit.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation:
                "Shanba kursi o‘qituvchi bilan; b — o‘qituvchisiz onlayn kurs.",
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
      hint: "Lavhalarda ko‘pincha bitta so‘z — „nicht“, „nur“, „ab“ — javobni hal qiladi.",
      blocks: [
        {
          id: "a1b-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "Im Treppenhaus",
            body: "Der Aufzug ist bis Mittwoch defekt. Bitte benutzen Sie die Treppe. Wir bitten um Entschuldigung.",
          },
          items: [
            {
              id: "a1b-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Der Aufzug funktioniert heute nicht.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Der Aufzug ist bis Mittwoch defekt“ — hozir ishlamaydi.",
            },
          ],
        },
        {
          id: "a1b-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "An der Bibliothekstür",
            body: "Öffnungszeiten: Dienstag bis Freitag 10–19 Uhr, Samstag 10–14 Uhr. Montag geschlossen.",
          },
          items: [
            {
              id: "a1b-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Am Samstag ist die Bibliothek bis 19 Uhr geöffnet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Shanba faqat 14:00 gacha; 19:00 — ish kunlarida.",
            },
          ],
        },
        {
          id: "a1b-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Im Wartezimmer",
            body: "Bitte schalten Sie Ihr Handy aus. Telefonieren Sie draußen im Flur.",
          },
          items: [
            {
              id: "a1b-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Man darf im Wartezimmer telefonieren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Telefonda gaplashish faqat koridorda — „Telefonieren Sie draußen im Flur“.",
            },
          ],
        },
        {
          id: "a1b-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "Auf dem Parkplatz",
            body: "Parken nur für Kunden. Maximal 2 Stunden. Bitte Parkscheibe benutzen.",
          },
          items: [
            {
              id: "a1b-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Man kann hier den ganzen Tag parken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Maximal 2 Stunden“ — ko‘pi bilan ikki soat.",
            },
          ],
        },
        {
          id: "a1b-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "In der Schule",
            body: "Heute fallen die Stunden 5 und 6 aus. Die Schüler können nach der vierten Stunde nach Hause gehen.",
          },
          items: [
            {
              id: "a1b-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Die Schüler dürfen heute früher nach Hause.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "5- va 6-darslar bekor — to‘rtinchi darsdan keyin uyga borish mumkin.",
            },
          ],
        },
      ],
    },
  ],
};
