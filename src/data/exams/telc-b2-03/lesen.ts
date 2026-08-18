import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 03 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "Sarlavhalar ko‘chma ma’noda — matnning asosiy tezisini toping.",
      bank: [
        { key: "a", label: "Wenn die Ausbildung im Ausland nichts zählt" },
        { key: "b", label: "Weniger Fleisch, mehr Diskussion" },
        { key: "c", label: "Alte Menschen, neue Technik" },
        { key: "d", label: "Wohnraum, der niemandem gehört" },
        { key: "e", label: "Was Beschäftigte wirklich hält" },
        { key: "f", label: "Prüfungen unter Beobachtung" },
        { key: "g", label: "Die Rückkehr der Nachtzüge" },
        { key: "h", label: "Ein Fach ohne Lehrkräfte" },
        { key: "i", label: "Handwerk lernt digital" },
        { key: "j", label: "Wenn Freiwillige den Staat ersetzen" },
      ],
      blocks: [
        {
          id: "b2c-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Rund 40 Prozent der Zugewanderten mit akademischem Abschluss arbeiten in Deutschland unterhalb ihrer Qualifikation. Die Verfahren zur Anerkennung dauern im Schnitt neun Monate, in Einzelfällen deutlich länger, und kosten mehrere Hundert Euro. Fachleute halten das für volkswirtschaftlich unvernünftig: Während Betriebe über fehlendes Personal klagen, warten ausgebildete Ingenieurinnen und Ärzte auf einen Bescheid — nicht selten in Aushilfsjobs.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Eine Genossenschaft in Freiburg hat vier Häuser gekauft, die nun dauerhaft dem Markt entzogen sind. Verkauft werden können sie nicht mehr; die Bewohnerinnen und Bewohner zahlen eine Nutzungsgebühr statt Miete und entscheiden gemeinsam über Reparaturen. Kritiker halten das Modell für schwer übertragbar, weil viel Eigenkapital nötig ist. Die Initiatoren verweisen dagegen auf die Mieten, die seit acht Jahren praktisch unverändert sind.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Zwischen Wien und Brüssel, Berlin und Stockholm fahren wieder Züge über Nacht — nach Jahren, in denen viele Verbindungen eingestellt worden waren. Die Nachfrage übersteigt derzeit das Angebot deutlich, doch die Betreiber warnen vor zu großen Erwartungen: Waggons sind teuer, Personalkosten hoch, und die Trassen werden nachts auch für den Güterverkehr gebraucht. Ohne staatliche Zuschüsse, heißt es, rechne sich kaum eine Strecke.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "An Berufsschulen fehlen bundesweit Lehrkräfte für Elektro- und Metalltechnik. Wer die Qualifikation hat, verdient in der Industrie meist deutlich mehr. Einzelne Bundesländer reagieren mit Quereinstiegsprogrammen: Meisterinnen und Techniker unterrichten und studieren gleichzeitig. Ob das reicht, ist offen — in manchen Regionen fällt bereits jede fünfte Fachstunde aus.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Warum bleiben Beschäftigte in einem Unternehmen? Eine Untersuchung mit 6.000 Befragten kommt zu einem klaren Ergebnis: Nicht das Gehalt steht vorn, sondern die direkte Führungskraft und die Frage, ob man seine Arbeitszeit selbst einteilen kann. Obstkörbe und Firmenfeiern landen weit hinten. Bemerkenswert ist zudem, dass die Bedeutung der Führungskraft mit der Dauer der Betriebszugehörigkeit steigt.",
              },
            ],
          },
          items: [
            {
              id: "b2c-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "a",
              explanation: "Chet el diplomining tan olinmasligi haqida.",
            },
            {
              id: "b2c-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "d",
              explanation:
                "Uylar bozordan chiqarilgan — hech kimga sotilmaydi.",
            },
            {
              id: "b2c-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "g",
              explanation: "Tungi poyezdlar qaytdi.",
            },
            {
              id: "b2c-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "h",
              explanation: "Kasb-hunar maktablarida o‘qituvchi yetishmaydi.",
            },
            {
              id: "b2c-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "e",
              explanation:
                "Xodimlarni ushlab qoladigan narsa — maosh emas, rahbar va vaqt erkinligi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text und die Aufgaben 6 bis 10. Wählen Sie die richtige Lösung a, b oder c.",
      hint: "Variantlar matndagi so‘zlarni takrorlashi mumkin — mazmunni solishtiring.",
      blocks: [
        {
          id: "b2c-l2-b1",
          stimulus: {
            kind: "text",
            title: "Zurück ins Büro — aber warum eigentlich?",
            body: `Fünf Jahre nach dem großen Homeoffice-Experiment rufen immer mehr Unternehmen ihre Beschäftigten zurück an den Schreibtisch. Meist wird das mit Zusammenarbeit und Unternehmenskultur begründet. Ob diese Begründung trägt, ist allerdings umstritten.

Die Wirtschaftspsychologin Miriam Kuhlmann hat 62 Betriebe begleitet, die eine Anwesenheitspflicht eingeführt haben. Ihr Befund fällt nüchtern aus: „In den Zahlen sehen wir keinen belastbaren Produktivitätsgewinn. Was wir sehen, ist ein Anstieg der Kündigungen — vor allem bei Beschäftigten mit Betreuungspflichten und langen Arbeitswegen.“

Interessanter als die Frage nach der Anwesenheit sei die Frage nach der Gestaltung. In vielen Büros, so Kuhlmann, sei in den vergangenen Jahren Fläche eingespart worden. Wer nun zurückkomme, finde häufig keinen festen Platz mehr vor, dafür Großraumbüros mit hohem Geräuschpegel. „Man verlangt Präsenz und bietet gleichzeitig schlechtere Bedingungen als zu Hause. Das ist schwer zu vermitteln.“

Ganz ohne Argumente sind die Unternehmen dennoch nicht. Neue Mitarbeitende, das zeigen auch Kuhlmanns Daten, kommen in Präsenz schneller in ein Team hinein, und informelle Absprachen laufen im Büro nachweislich schneller. Nur gelte das eben nicht für alle Gruppen gleichermaßen.

Ihr Rat an die Geschäftsführungen klingt unspektakulär: Anwesenheit dort einfordern, wo sie einen erkennbaren Zweck erfüllt — etwa für Einarbeitung, Workshops oder Projektstarts —, und den Rest den Teams überlassen. „Eine feste Quote von drei Tagen wirkt gerecht, ist es aber nicht. Sie trifft die einen kaum und die anderen hart.“`,
          },
          items: [
            {
              id: "b2c-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Womit begründen Unternehmen die Rückkehr ins Büro?",
              options: [
                { key: "a", label: "Mit Zusammenarbeit und Unternehmenskultur" },
                { key: "b", label: "Mit gesunkenen Mietkosten" },
                { key: "c", label: "Mit dem Wunsch der Beschäftigten" },
              ],
              correct: "a",
              explanation:
                "„Meist wird das mit Zusammenarbeit und Unternehmenskultur begründet.“",
            },
            {
              id: "b2c-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Zu welchem Ergebnis kommt Miriam Kuhlmann?",
              options: [
                { key: "a", label: "Die Produktivität ist deutlich gestiegen." },
                { key: "b", label: "Es gibt keinen belegbaren Produktivitätsgewinn." },
                { key: "c", label: "Die Zahl der Bewerbungen ist gestiegen." },
              ],
              correct: "b",
              explanation: "„keinen belastbaren Produktivitätsgewinn“.",
            },
            {
              id: "b2c-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Welches Problem nennt sie bei den Büros selbst?",
              options: [
                { key: "a", label: "Sie liegen zu weit außerhalb." },
                { key: "b", label: "Es fehlen feste Plätze und es ist laut." },
                { key: "c", label: "Die Technik ist veraltet." },
              ],
              correct: "b",
              explanation:
                "„keinen festen Platz mehr … Großraumbüros mit hohem Geräuschpegel“.",
            },
            {
              id: "b2c-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was spricht laut Text für Präsenz?",
              options: [
                { key: "a", label: "Neue Mitarbeitende finden schneller Anschluss." },
                { key: "b", label: "Alle Gruppen profitieren gleich stark." },
                { key: "c", label: "Die Arbeitswege werden kürzer." },
              ],
              correct: "a",
              explanation:
                "„Neue Mitarbeitende … kommen in Präsenz schneller in ein Team hinein.“",
            },
            {
              id: "b2c-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was hält Kuhlmann von einer festen Drei-Tage-Quote?",
              options: [
                { key: "a", label: "Sie ist die fairste Lösung." },
                { key: "b", label: "Sie wirkt nur scheinbar gerecht." },
                { key: "c", label: "Sie sollte auf fünf Tage erhöht werden." },
              ],
              correct: "b",
              explanation:
                "„wirkt gerecht, ist es aber nicht. Sie trifft die einen kaum und die anderen hart.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 11 bis 20 und die Anzeigen a bis l. Welche Anzeige passt zu welcher Situation? Jede Anzeige kann nur einmal verwendet werden. Gibt es keine passende Anzeige, wählen Sie x.",
      hint: "E’lonlardagi shartlarga (kim uchun, qanday holatda) e’tibor bering.",
      bank: [
        { key: "a", label: "Betriebsrat: Sprechstunde" },
        { key: "b", label: "Coaching für Führungskräfte" },
        { key: "c", label: "Konfliktberatung am Arbeitsplatz" },
        { key: "d", label: "Gründerstammtisch" },
        { key: "e", label: "Fachtagung Digitalisierung" },
        { key: "f", label: "Berufliche Rehabilitation" },
        { key: "g", label: "Fernstudium Betriebswirtschaft" },
        { key: "h", label: "Kinderbetreuung für Schichtarbeitende" },
        { key: "i", label: "Rechtsberatung Mietrecht" },
        { key: "j", label: "Sprachzertifikat für Pflegeberufe" },
        { key: "k", label: "Umschulung IT" },
        { key: "l", label: "Wohnungstausch" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2c-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Betriebsrat: Sprechstunde",
                body: "Fragen zu Arbeitszeit, Urlaub oder Abmahnungen? Wir beraten Beschäftigte unseres Hauses vertraulich, dienstags 13–16 Uhr, Raum 214. Ohne Anmeldung.",
              },
              {
                key: "b",
                title: "Coaching für Führungskräfte",
                body: "Sie leiten seit Kurzem ein Team und fühlen sich unsicher? Einzelcoaching in fünf Sitzungen, auch online. 120 € pro Stunde, erste Sitzung kostenlos.",
              },
              {
                key: "c",
                title: "Konfliktberatung am Arbeitsplatz",
                body: "Bei Spannungen im Team vermitteln ausgebildete Mediatorinnen. Auf Wunsch anonym, für Betriebe ab 20 Beschäftigten. Kosten trägt der Arbeitgeber.",
              },
              {
                key: "d",
                title: "Gründerstammtisch",
                body: "Jeden ersten Donnerstag treffen sich Selbstständige und Gründungsinteressierte zum Austausch. Kein Vortrag, keine Gebühr, einfach vorbeikommen.",
              },
              {
                key: "e",
                title: "Fachtagung Digitalisierung",
                body: "Zwei Tage Vorträge und Workshops zu KI im Mittelstand. Für Fach- und Führungskräfte, 390 € inklusive Verpflegung. Anmeldeschluss 15. Mai.",
              },
              {
                key: "f",
                title: "Berufliche Rehabilitation",
                body: "Sie können Ihren erlernten Beruf aus gesundheitlichen Gründen nicht mehr ausüben? Wir beraten zu Umschulung und Förderung. Kostenlos, Termine nach Vereinbarung.",
              },
              {
                key: "g",
                title: "Fernstudium Betriebswirtschaft",
                body: "Bachelor in sechs Semestern, komplett online, Prüfungen an 20 Standorten. Auch ohne Abitur mit Berufserfahrung möglich. 289 € monatlich.",
              },
              {
                key: "h",
                title: "Kinderbetreuung für Schichtarbeitende",
                body: "Betreuung von 5 bis 22 Uhr, auch am Wochenende, für Kinder von 1 bis 10 Jahren. Nachweis der Schichtarbeit erforderlich.",
              },
              {
                key: "i",
                title: "Rechtsberatung Mietrecht",
                body: "Nebenkostenabrechnung, Kündigung, Mängel: Erstberatung 30 € für Mitglieder des Mietervereins, 60 € für Nichtmitglieder.",
              },
              {
                key: "j",
                title: "Sprachzertifikat für Pflegeberufe",
                body: "Prüfungsvorbereitung B2 Pflege, acht Wochen berufsbegleitend. Voraussetzung: allgemeines B1-Zertifikat. Förderung durch die Agentur möglich.",
              },
              {
                key: "k",
                title: "Umschulung IT",
                body: "In 24 Monaten zur Fachinformatikerin. Für Menschen mit abgeschlossener Berufsausbildung, Bildungsgutschein wird akzeptiert.",
              },
              {
                key: "l",
                title: "Wohnungstausch",
                body: "Wir vermitteln Tauschpartner: Große Wohnung gegen kleine und umgekehrt. Beratung kostenlos, Vertragsprüfung 45 €.",
              },
            ],
          },
          items: [
            {
              id: "b2c-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind Krankenpflegerin aus dem Ausland und brauchen für die Anerkennung ein Fachsprachzertifikat.",
              correct: "j",
              explanation: "Tibbiyot xodimlari uchun B2 Pflege tayyorgarligi.",
            },
            {
              id: "b2c-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Nach einem Bandscheibenvorfall können Sie nicht mehr auf dem Bau arbeiten.",
              correct: "f",
              explanation: "Sog‘liq sababli kasbni almashtirish bo‘yicha maslahat.",
            },
            {
              id: "b2c-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie leiten seit drei Monaten ein Team und kommen mit der neuen Rolle nicht zurecht.",
              correct: "b",
              explanation: "Yangi rahbarlar uchun individual kouching.",
            },
            {
              id: "b2c-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Arbeitgeber hat Ihnen eine Abmahnung geschickt und Sie wissen nicht, ob das zulässig ist.",
              correct: "a",
              explanation: "Betriebsrat aynan „Abmahnungen“ bo‘yicha maslahat beradi.",
            },
            {
              id: "b2c-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten in Wechselschicht und brauchen früh morgens Betreuung für Ihr Kind.",
              correct: "h",
              explanation: "Soat 5 dan boshlab, smenali ishlovchilar uchun.",
            },
            {
              id: "b2c-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben eine abgeschlossene Ausbildung und möchten mit einem Bildungsgutschein in die IT wechseln.",
              correct: "k",
              explanation: "„Bildungsgutschein wird akzeptiert“ — IT ga qayta o‘qish.",
            },
            {
              id: "b2c-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten neben dem Beruf studieren, haben aber kein Abitur.",
              correct: "g",
              explanation: "„Auch ohne Abitur mit Berufserfahrung möglich.“",
            },
            {
              id: "b2c-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Nebenkostenabrechnung erscheint Ihnen deutlich zu hoch.",
              correct: "i",
              explanation: "Ijara huquqi bo‘yicha maslahat — Nebenkostenabrechnung.",
            },
            {
              id: "b2c-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In Ihrer Abteilung gibt es seit Monaten Spannungen zwischen zwei Gruppen.",
              correct: "c",
              explanation: "Jamoadagi nizolar uchun mediatsiya.",
            },
            {
              id: "b2c-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen eine Förderung für den Kauf einer eigenen Wohnung.",
              correct: "x",
              explanation:
                "E’lonlar orasida uy sotib olishni moliyalash haqida hech narsa yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
