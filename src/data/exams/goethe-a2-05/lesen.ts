import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 05 · Lesen — 4 Teil, 20 element, 30 daqiqa.
 */
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
          id: "a2e-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `Ein Bus als Arztpraxis

Zweimal in der Woche hält ein weißer Bus auf dem Dorfplatz von Klein-Rodau. Drinnen sind ein Untersuchungszimmer, ein kleines Labor und ein Wartebereich mit vier Plätzen. Seit dem letzten Winter kommt der Bus in acht Dörfer, in denen es keine Praxis mehr gibt.

„Der nächste Arzt ist 18 Kilometer entfernt“, erzählt Helga Prinz, 74. „Ohne Auto ist das für mich eine Tagesreise.“ Sie kommt jetzt alle zwei Wochen zum Bus, meist wegen ihres Blutdrucks.

Im Bus arbeiten eine Ärztin und eine Krankenschwester. Für einfache Fälle reicht das gut: Blutdruck, Impfungen, Rezepte, kleine Wunden. Wer eine Untersuchung im Krankenhaus braucht, bekommt eine Überweisung.

Bezahlt wird das Projekt zu zwei Dritteln vom Landkreis, den Rest übernehmen die Krankenkassen. Ob es weitergeht, entscheidet sich im Herbst.

Ärztin Sara Möller sieht den Bus nicht als Lösung für alles: „Wir ersetzen keine Praxis. Aber wir sind da, und für viele ist das der Unterschied zwischen Behandlung und gar nichts.“`,
          },
          items: [
            {
              id: "a2e-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Warum kommt der Bus in die Dörfer?",
              options: [
                { key: "a", label: "Weil es dort keine Praxis mehr gibt." },
                { key: "b", label: "Weil die Dörfer sehr groß sind." },
                { key: "c", label: "Weil viele Kinder dort wohnen." },
              ],
              correct: "a",
              explanation: "„in acht Dörfer, in denen es keine Praxis mehr gibt“.",
            },
            {
              id: "a2e-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wie oft kommt Frau Prinz zum Bus?",
              options: [
                { key: "a", label: "Jede Woche" },
                { key: "b", label: "Alle zwei Wochen" },
                { key: "c", label: "Einmal im Monat" },
              ],
              correct: "b",
              explanation: "„Sie kommt jetzt alle zwei Wochen zum Bus.“",
            },
            {
              id: "a2e-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wer arbeitet im Bus?",
              options: [
                { key: "a", label: "Nur eine Ärztin" },
                { key: "b", label: "Eine Ärztin und eine Krankenschwester" },
                { key: "c", label: "Drei Personen" },
              ],
              correct: "b",
              explanation: "„eine Ärztin und eine Krankenschwester“.",
            },
            {
              id: "a2e-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wer bezahlt das Projekt zum größten Teil?",
              options: [
                { key: "a", label: "Der Landkreis" },
                { key: "b", label: "Die Patienten" },
                { key: "c", label: "Die Krankenkassen" },
              ],
              correct: "a",
              explanation: "„zu zwei Dritteln vom Landkreis“.",
            },
            {
              id: "a2e-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was sagt die Ärztin über den Bus?",
              options: [
                { key: "a", label: "Er ersetzt eine normale Praxis." },
                { key: "b", label: "Er ist keine Lösung für alle Fälle." },
                { key: "c", label: "Er ist zu teuer." },
              ],
              correct: "b",
              explanation: "„Wir ersetzen keine Praxis.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie das Programm des Stadtteilzentrums. Wohin gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2e-l2-b1",
          stimulus: {
            kind: "text",
            title: "Stadtteilzentrum Nord · Wochenprogramm",
            body: `Montag 17–19 Uhr — Hausaufgabenhilfe (Klasse 1–7), Raum 2
Dienstag 10–12 Uhr — Eltern-Kind-Gruppe (0–3 Jahre), Raum 1
Mittwoch 18–20 Uhr — Computerkurs für Anfänger, Raum 5
Donnerstag 15–17 Uhr — Beratung zu Miete und Behörden, Büro
Freitag 16–19 Uhr — Offenes Café für alle, Raum 1
Samstag 10–14 Uhr — Reparaturtreff (Fahrrad, Kleingeräte), Hof`,
          },
          items: [
            {
              id: "a2e-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Ihr Toaster ist kaputt und Sie möchten ihn nicht wegwerfen.",
              options: [
                { key: "a", label: "Samstag, Hof" },
                { key: "b", label: "Mittwoch, Raum 5" },
                { key: "c", label: "Freitag, Raum 1" },
              ],
              correct: "a",
              explanation: "„Reparaturtreff (Fahrrad, Kleingeräte)“ — shanba.",
            },
            {
              id: "a2e-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie haben ein Schreiben vom Vermieter und verstehen es nicht.",
              options: [
                { key: "a", label: "Montag, Raum 2" },
                { key: "b", label: "Donnerstag, Büro" },
                { key: "c", label: "Samstag, Hof" },
              ],
              correct: "b",
              explanation: "„Beratung zu Miete und Behörden“ — payshanba.",
            },
            {
              id: "a2e-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Ihr Sohn (9) braucht Hilfe bei den Hausaufgaben.",
              options: [
                { key: "a", label: "Montag, Raum 2" },
                { key: "b", label: "Dienstag, Raum 1" },
                { key: "c", label: "Freitag, Raum 1" },
              ],
              correct: "a",
              explanation: "1–7-sinflar uchun — dushanba.",
            },
            {
              id: "a2e-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie sind zu Hause mit Ihrem Baby (1 Jahr) und möchten andere Eltern treffen.",
              options: [
                { key: "a", label: "Dienstag, Raum 1" },
                { key: "b", label: "Donnerstag, Büro" },
                { key: "c", label: "Mittwoch, Raum 5" },
              ],
              correct: "a",
              explanation: "„Eltern-Kind-Gruppe (0–3 Jahre)“ — seshanba.",
            },
            {
              id: "a2e-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten lernen, wie man E-Mails schreibt.",
              options: [
                { key: "a", label: "Freitag, Raum 1" },
                { key: "b", label: "Mittwoch, Raum 5" },
                { key: "c", label: "Montag, Raum 2" },
              ],
              correct: "b",
              explanation: "„Computerkurs für Anfänger“ — chorshanba.",
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
          id: "a2e-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von der Sprachschule",
            body: `Sehr geehrter Herr Salimov,

vielen Dank für Ihre Anmeldung zum Kurs A2 ab dem 3. September.

Der Kurs findet montags bis donnerstags von 18 bis 20.15 Uhr statt, insgesamt zwölf Wochen. Freitags gibt es keinen Unterricht.

Die Kursgebühr beträgt 320 Euro. Sie können in zwei Raten zahlen: die erste vor Kursbeginn, die zweite bis Ende Oktober.

Das Lehrbuch ist nicht im Preis enthalten. Sie können es bei uns kaufen (24 Euro) oder selbst besorgen.

Wenn Sie mehr als vier Termine fehlen, können wir Ihnen leider keine Teilnahmebescheinigung ausstellen.

Mit freundlichen Grüßen
Sprachschule Lingua`,
          },
          items: [
            {
              id: "a2e-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "An wie vielen Tagen pro Woche ist Unterricht?",
              options: [
                { key: "a", label: "Drei" },
                { key: "b", label: "Vier" },
                { key: "c", label: "Fünf" },
              ],
              correct: "b",
              explanation: "Dushanbadan payshanbagacha — to‘rt kun.",
            },
            {
              id: "a2e-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wie kann Herr Salimov bezahlen?",
              options: [
                { key: "a", label: "Nur alles auf einmal" },
                { key: "b", label: "In zwei Raten" },
                { key: "c", label: "Erst am Kursende" },
              ],
              correct: "b",
              explanation: "„Sie können in zwei Raten zahlen.“",
            },
            {
              id: "a2e-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was gilt für das Lehrbuch?",
              options: [
                { key: "a", label: "Es ist im Preis enthalten." },
                { key: "b", label: "Man muss es extra bezahlen." },
                { key: "c", label: "Man bekommt es geliehen." },
              ],
              correct: "b",
              explanation: "„Das Lehrbuch ist nicht im Preis enthalten.“",
            },
            {
              id: "a2e-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann bekommt man keine Bescheinigung?",
              options: [
                { key: "a", label: "Bei mehr als vier Fehlterminen" },
                { key: "b", label: "Bei einer nicht bestandenen Prüfung" },
                { key: "c", label: "Bei später Zahlung" },
              ],
              correct: "a",
              explanation: "„mehr als vier Termine fehlen“.",
            },
            {
              id: "a2e-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wie lange dauert der Kurs?",
              options: [
                { key: "a", label: "Acht Wochen" },
                { key: "b", label: "Zwölf Wochen" },
                { key: "c", label: "Ein halbes Jahr" },
              ],
              correct: "b",
              explanation: "„insgesamt zwölf Wochen“.",
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
        { key: "a", label: "Wohnungsauflösung" },
        { key: "b", label: "Kleiderkammer" },
        { key: "c", label: "Fahrgemeinschaft zur Arbeit" },
        { key: "d", label: "Handwerkerhilfe für Senioren" },
        { key: "e", label: "Hunde-Gassiservice" },
        { key: "f", label: "Musikunterricht: Gitarre" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2e-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Wohnungsauflösung",
                body: "Wir räumen Wohnungen komplett, entsorgen alles fachgerecht und übergeben besenrein. Kostenloser Kostenvoranschlag vor Ort.",
              },
              {
                key: "b",
                title: "Kleiderkammer",
                body: "Gut erhaltene Kleidung für Erwachsene und Kinder, kostenlos für Menschen mit geringem Einkommen. Dienstag und Freitag 14–17 Uhr, Bescheinigung nötig.",
              },
              {
                key: "c",
                title: "Fahrgemeinschaft zur Arbeit",
                body: "Fahre täglich um 6.15 Uhr von Leipzig-Nord nach Halle und zurück gegen 16 Uhr. Zwei Plätze frei, Beteiligung an den Spritkosten.",
              },
              {
                key: "d",
                title: "Handwerkerhilfe für Senioren",
                body: "Lampe anbringen, Bild aufhängen, Wasserhahn dichten — kleine Arbeiten für Menschen ab 70. Material zum Selbstkostenpreis, Arbeit ehrenamtlich.",
              },
              {
                key: "e",
                title: "Hunde-Gassiservice",
                body: "Ich gehe mit Ihrem Hund spazieren, montags bis freitags zwischen 9 und 15 Uhr. 12 € pro Stunde, feste Termine.",
              },
              {
                key: "f",
                title: "Musikunterricht: Gitarre",
                body: "Für Kinder ab 8 und Erwachsene. Einzelunterricht 30 Minuten pro Woche, 22 €. Leihgitarre vorhanden.",
              },
            ],
          },
          items: [
            {
              id: "a2e-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihr Vater ist 78 und braucht jemanden, der ihm eine Lampe anbringt.",
              correct: "d",
              explanation: "70 yoshdan oshganlar uchun kichik ta’mir ishlari.",
            },
            {
              id: "a2e-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie fahren jeden Tag von Leipzig nach Halle zur Arbeit und möchten Geld sparen.",
              correct: "c",
              explanation: "Har kuni Leyptsig–Halle yo‘nalishida birga borish.",
            },
            {
              id: "a2e-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Tochter (10) möchte ein Instrument lernen, Sie haben aber keins zu Hause.",
              correct: "f",
              explanation: "„Leihgitarre vorhanden“ — asbob beriladi.",
            },
            {
              id: "a2e-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Nach dem Tod Ihrer Tante müssen Sie ihre Wohnung leer räumen.",
              correct: "a",
              explanation: "Kvartirani to‘liq bo‘shatish xizmati.",
            },
            {
              id: "a2e-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen einen günstigen Platz, wo Ihr Kind nach der Schule betreut wird.",
              correct: "x",
              explanation: "E’lonlar orasida bolalar guruhi yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
