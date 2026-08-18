import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 03 · Lesen — 3 Teil, 15 element, ~25 daqiqa.
 * Teil 1: xat va e'lon matni · Teil 2: juft e'lonlar · Teil 3: lavhalar.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      instruction:
        "Lesen Sie die Texte. Sind die Sätze 1 bis 5 Richtig oder Falsch? Kreuzen Sie an.",
      hint: "Har jumla uchun matndagi mos joyni toping — taxmin qilmang.",
      blocks: [
        {
          id: "a1c-l1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von Frau Berger",
            body: `Liebe Frau Yusupova,

danke für Ihre Nachricht. Der Deutschkurs am Abend ist leider schon voll. Wir haben aber am Vormittag noch drei Plätze frei, montags und mittwochs von 9 bis 11 Uhr.

Der Kurs kostet 120 Euro für zehn Wochen. Das Buch ist im Preis nicht enthalten, es kostet 18 Euro extra.

Wenn Sie möchten, kommen Sie bitte bis Freitag ins Büro. Dort können Sie sich anmelden und gleich bezahlen.

Viele Grüße
Anna Berger`,
          },
          items: [
            {
              id: "a1c-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Im Abendkurs ist noch ein Platz frei.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Der Deutschkurs am Abend ist leider schon voll.“",
            },
            {
              id: "a1c-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Der Vormittagskurs ist an zwei Tagen in der Woche.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„montags und mittwochs“ — haftada ikki kun.",
            },
            {
              id: "a1c-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Das Buch kostet nichts extra.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Kitob narxga kirmaydi — qo‘shimcha 18 evro.",
            },
          ],
        },
        {
          id: "a1c-l1-b2",
          stimulus: {
            kind: "text",
            title: "Aushang im Hausflur",
            body: `Liebe Nachbarn,

am Samstag, dem 4. Mai, reinigen wir gemeinsam den Hof. Wir beginnen um 10 Uhr.

Bitte bringen Sie Handschuhe mit. Werkzeug ist genug da.

Für Kaffee und Kuchen sorgt Familie Ercan. Kinder sind herzlich willkommen.

Ihre Hausgemeinschaft`,
          },
          items: [
            {
              id: "a1c-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Die Nachbarn müssen Werkzeug mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Asbob yetarli; faqat qo‘lqop olib kelish kerak.",
            },
            {
              id: "a1c-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Kinder dürfen auch kommen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Kinder sind herzlich willkommen.“",
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
      hint: "Ikkala e’lonni ham oxirigacha o‘qing — farq odatda bitta shartda.",
      blocks: [
        {
          id: "a1c-l2-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Friseur Schmidt",
                body: "Haareschneiden ohne Termin, Montag bis Freitag 9–18 Uhr. Samstag geschlossen.",
              },
              {
                key: "b",
                title: "Salon Bella",
                body: "Nur mit Termin. Wir haben auch samstags von 9 bis 14 Uhr geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "a1c-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt:
                "Sie arbeiten von Montag bis Freitag und möchten am Samstag zum Friseur.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "Faqat b shanba kuni ishlaydi.",
            },
          ],
        },
        {
          id: "a1c-l2-b2",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Zimmer in der Stadt",
                body: "Kleines Zimmer, 350 € warm, ab sofort frei. Nur für Nichtraucher, keine Haustiere.",
              },
              {
                key: "b",
                title: "Zimmer am Stadtrand",
                body: "Ruhiges Zimmer mit Balkon, 300 € warm, Haustiere erlaubt. Frei ab 1. Oktober.",
              },
            ],
          },
          items: [
            {
              id: "a1c-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie haben eine Katze und suchen ab Oktober ein Zimmer.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation: "b da uy hayvonlariga ruxsat va oktabrdan bo‘sh.",
            },
          ],
        },
        {
          id: "a1c-l2-b3",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Restaurant Anatolia",
                body: "Warme Küche bis 22 Uhr. Mittagsmenü 9,50 €. Montag Ruhetag.",
              },
              {
                key: "b",
                title: "Café am Markt",
                body: "Frühstück von 8 bis 12 Uhr, abends warme Suppen und Salate bis 21 Uhr. Täglich geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "a1c-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten am Montagabend warm essen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "b",
              explanation:
                "a dushanba kuni yopiq („Montag Ruhetag“); b har kuni ochiq va kechqurun issiq ovqat beradi.",
            },
          ],
        },
        {
          id: "a1c-l2-b4",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fahrschule Nord",
                body: "Theorie online, Praxis am Wochenende. Kurse starten jeden Monat.",
              },
              {
                key: "b",
                title: "Fahrschule Zentral",
                body: "Theorie nur abends im Unterrichtsraum, dienstags und donnerstags 18–20 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1c-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt:
                "Sie arbeiten abends und möchten die Theorie zu Hause lernen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "„Theorie online“ — uyda o‘rganish mumkin.",
            },
          ],
        },
        {
          id: "a1c-l2-b5",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Kinderturnen",
                body: "Für Kinder von 3 bis 6 Jahren, freitags 16 Uhr. Eltern bleiben dabei.",
              },
              {
                key: "b",
                title: "Fußball für Kinder",
                body: "Ab 7 Jahren, Training dienstags und donnerstags 17 Uhr auf dem Sportplatz.",
              },
            ],
          },
          items: [
            {
              id: "a1c-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Ihre Tochter ist fünf Jahre alt und soll Sport machen.",
              options: [
                { key: "a", label: "Anzeige a" },
                { key: "b", label: "Anzeige b" },
              ],
              correct: "a",
              explanation: "5 yosh — a dagi 3–6 yosh oralig‘iga to‘g‘ri keladi.",
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
      hint: "Bitta so‘z — „nur“, „außer“, „ab“ — javobni hal qiladi.",
      blocks: [
        {
          id: "a1c-l3-b1",
          stimulus: {
            kind: "aushang",
            ort: "An der Praxistür",
            body: "Urlaub vom 1. bis 14. August. Vertretung: Dr. Neumann, Rosenweg 3.",
          },
          items: [
            {
              id: "a1c-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Im August gibt es keinen Arzt für die Patienten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Doktor Noyman o‘rnini bosadi.",
            },
          ],
        },
        {
          id: "a1c-l3-b2",
          stimulus: {
            kind: "aushang",
            ort: "Im Bus",
            body: "Fahrkarten bitte vorne beim Fahrer kaufen. Im Bus gibt es keinen Automaten.",
          },
          items: [
            {
              id: "a1c-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Man kann die Fahrkarte beim Fahrer kaufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Fahrkarten bitte vorne beim Fahrer kaufen.“",
            },
          ],
        },
        {
          id: "a1c-l3-b3",
          stimulus: {
            kind: "aushang",
            ort: "Im Park",
            body: "Hunde bitte an der Leine führen. Auf der Wiese hinter dem Spielplatz dürfen Hunde frei laufen.",
          },
          items: [
            {
              id: "a1c-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Hunde dürfen im ganzen Park frei laufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat maydoncha ortidagi o‘tloqda erkin yugurishi mumkin.",
            },
          ],
        },
        {
          id: "a1c-l3-b4",
          stimulus: {
            kind: "aushang",
            ort: "An der Waschmaschine im Keller",
            body: "Benutzung täglich von 7 bis 21 Uhr. Sonntags bitte nicht waschen.",
          },
          items: [
            {
              id: "a1c-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Am Sonntag darf man nicht waschen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Sonntags bitte nicht waschen.“",
            },
          ],
        },
        {
          id: "a1c-l3-b5",
          stimulus: {
            kind: "aushang",
            ort: "Im Schwimmbad",
            body: "Kinder unter 8 Jahren nur mit einem Erwachsenen. Schwimmkurse siehe Aushang am Eingang.",
          },
          items: [
            {
              id: "a1c-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Ein Kind von sechs Jahren darf allein schwimmen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "8 yoshgacha faqat kattalar bilan.",
            },
          ],
        },
      ],
    },
  ],
};
