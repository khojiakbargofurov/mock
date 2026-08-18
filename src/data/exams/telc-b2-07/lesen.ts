import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 07 · Leseverstehen — 3 Teil, 20 element, 75 ball. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Wenn Erben zur Last wird" },
        { key: "b", label: "Studium ohne Abitur" },
        { key: "c", label: "Wenn die Feuerwehr niemanden mehr findet" },
        { key: "d", label: "Digitale Akten, analoge Probleme" },
        { key: "e", label: "Zwischen zwei Sprachen aufwachsen" },
        { key: "f", label: "Werkstätten für gebrauchte Technik" },
        { key: "g", label: "Wohnen im Alter neu gedacht" },
        { key: "h", label: "Wenn Beschäftigte den Betrieb übernehmen" },
        { key: "i", label: "Landärzte dringend gesucht" },
        { key: "j", label: "Weniger Prüfungen, mehr Praxis" },
      ],
      blocks: [
        {
          id: "b2g-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Wenn Handwerksbetriebe keinen Nachfolger finden, endet oft ein funktionierendes Unternehmen. Eine Alternative gewinnt an Bedeutung: Die Belegschaft übernimmt selbst. In Nordrhein-Westfalen wurden im vergangenen Jahr 47 Betriebe auf diesem Weg fortgeführt. Fachleute verweisen auf niedrige Ausfallquoten — wer den Betrieb kennt, kalkuliert realistischer. Schwierig bleibt die Finanzierung, weil Beschäftigten meist Sicherheiten fehlen.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Inzwischen kann man in allen Bundesländern ohne Abitur studieren, sofern man eine Ausbildung und einige Jahre Berufserfahrung mitbringt. Genutzt wird das jedoch selten: Der Anteil dieser Studierenden liegt bundesweit bei etwa drei Prozent. Als Hürden gelten fehlende Informationen, die Finanzierung und die Sorge, mit zwanzigjährigen Kommilitonen nicht mithalten zu können. Die Abbruchquoten sind dabei nicht höher als bei anderen.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Kinder, die zu Hause eine andere Sprache sprechen als in der Schule, galten lange als benachteiligt. Neuere Untersuchungen zeichnen ein anderes Bild: Entscheidend ist nicht, welche Sprache gesprochen wird, sondern wie reich der sprachliche Alltag ist. Wo Eltern mit ihren Kindern intensiv in der Herkunftssprache sprechen, lesen und erzählen, entwickeln sich beide Sprachen besser als bei einem halbherzigen Wechsel ins Deutsche.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Viele Verwaltungen haben ihre Akten digitalisiert. Der erhoffte Zeitgewinn bleibt jedoch häufig aus. Der Grund liegt selten in der Technik: Wo Abläufe unverändert bleiben, wird derselbe Vorgang nun eben am Bildschirm dreimal weitergereicht statt auf Papier. Fachleute empfehlen deshalb, zuerst die Prozesse zu vereinfachen und erst danach zu digitalisieren — in der Praxis geschieht meist das Gegenteil.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Rund ein Drittel der Hausärztinnen und Hausärzte in ländlichen Kreisen ist über sechzig. Nachfolger finden sich kaum: Junge Ärztinnen scheuen die Selbstständigkeit, die Rufbereitschaft und die Verantwortung als Einzelkämpfer. Kommunen reagieren mit Stipendien, Praxisräumen und Anstellungsmodellen. Erste Auswertungen zeigen, dass vor allem die Möglichkeit, angestellt und in Teilzeit zu arbeiten, den Ausschlag gibt.",
              },
            ],
          },
          items: [
            {
              id: "b2g-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "h",
              explanation: "Xodimlar korxonani o‘zi qabul qiladi.",
            },
            {
              id: "b2g-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "b",
              explanation: "Attestatsiz oliy o‘quv yurtida o‘qish.",
            },
            {
              id: "b2g-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "e",
              explanation: "Ikki til muhitida o‘sish.",
            },
            {
              id: "b2g-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "d",
              explanation: "Raqamli hujjatlar, ammo eski jarayonlar.",
            },
            {
              id: "b2g-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "i",
              explanation: "Qishloqda oilaviy shifokorlar yetishmaydi.",
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
      blocks: [
        {
          id: "b2g-l2-b1",
          stimulus: {
            kind: "text",
            title: "Das Ende der Papierakte",
            body: `Seit drei Jahren arbeitet die Kreisverwaltung Rotenburg ohne Papierakten. Als Erfolgsgeschichte wollte man das zunächst verkaufen — inzwischen fällt die Bilanz nüchterner aus.

Zwar ist der Aktenschrank verschwunden, doch die Bearbeitungszeiten sanken deutlich weniger als erhofft. Amtsleiterin Christiane Roth nennt den Grund offen: „Wir haben die Papierwelt eins zu eins ins Digitale übertragen. Ein Vorgang, der früher über vier Schreibtische ging, geht heute über vier Bildschirme.“

Bemerkenswert ist ein zweiter Befund. Die Zahl der Rückfragen von Bürgerinnen und Bürgern nahm im ersten Jahr sogar zu. Wer online einen Antrag stellt, erwartet eine schnelle Rückmeldung — und ruft an, wenn nach zwei Wochen nichts kommt. Erst als die Verwaltung automatische Zwischenbescheide einführte, ging die Zahl der Anrufe zurück.

Wirklich verändert habe sich die Arbeit erst dort, wo Abläufe überprüft wurden, sagt Roth. In der Kfz-Zulassung etwa wurden zwei von fünf Prüfschritten gestrichen; die Bearbeitungszeit halbierte sich. „Das hatte mit der Software wenig zu tun.“

Für andere Verwaltungen zieht sie eine klare Lehre: „Erst denken, dann digitalisieren. Wer es andersherum macht, kauft sich teure Technik und behält seine alten Probleme.“`,
          },
          items: [
            {
              id: "b2g-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Wie fällt die Bilanz nach drei Jahren aus?",
              options: [
                { key: "a", label: "Nüchterner als erwartet" },
                { key: "b", label: "Durchweg positiv" },
                { key: "c", label: "Vollständig negativ" },
              ],
              correct: "a",
              explanation: "„fällt die Bilanz nüchterner aus“.",
            },
            {
              id: "b2g-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Warum sanken die Bearbeitungszeiten kaum?",
              options: [
                { key: "a", label: "Weil die Software zu langsam war" },
                { key: "b", label: "Weil die Abläufe unverändert blieben" },
                { key: "c", label: "Weil Personal fehlte" },
              ],
              correct: "b",
              explanation: "„Wir haben die Papierwelt eins zu eins ins Digitale übertragen.“",
            },
            {
              id: "b2g-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was passierte im ersten Jahr mit den Rückfragen?",
              options: [
                { key: "a", label: "Sie nahmen zu." },
                { key: "b", label: "Sie blieben gleich." },
                { key: "c", label: "Sie verschwanden." },
              ],
              correct: "a",
              explanation: "„nahm im ersten Jahr sogar zu“.",
            },
            {
              id: "b2g-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was half gegen die vielen Anrufe?",
              options: [
                { key: "a", label: "Mehr Personal am Telefon" },
                { key: "b", label: "Automatische Zwischenbescheide" },
                { key: "c", label: "Längere Öffnungszeiten" },
              ],
              correct: "b",
              explanation: "„Erst als die Verwaltung automatische Zwischenbescheide einführte …“",
            },
            {
              id: "b2g-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Welche Lehre zieht Christiane Roth?",
              options: [
                { key: "a", label: "Erst die Abläufe prüfen, dann digitalisieren" },
                { key: "b", label: "Möglichst schnell neue Software kaufen" },
                { key: "c", label: "Auf Papier zurückgehen" },
              ],
              correct: "a",
              explanation: "„Erst denken, dann digitalisieren.“",
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
      bank: [
        { key: "a", label: "Beratung: Betriebsnachfolge" },
        { key: "b", label: "Bildungsberatung: Studium ohne Abitur" },
        { key: "c", label: "Elterncafé: Mehrsprachigkeit" },
        { key: "d", label: "Fachkurs: Verwaltungsdeutsch" },
        { key: "e", label: "Gründungsberatung für Frauen" },
        { key: "f", label: "Kurs: Digitale Aktenführung" },
        { key: "g", label: "Landarztstipendium" },
        { key: "h", label: "Mediation: Betriebliche Konflikte" },
        { key: "i", label: "Nachbarschaftshilfe: Fahrdienst" },
        { key: "j", label: "Patientenverfügung: Beratung" },
        { key: "k", label: "Rechtsberatung: Erbrecht" },
        { key: "l", label: "Weiterbildung: Ausbildereignung" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2g-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Beratung: Betriebsnachfolge",
                body: "Sie möchten Ihren Betrieb übergeben oder als Beschäftigte übernehmen? Wir begleiten Bewertung, Finanzierung und Verträge. Erstgespräch kostenfrei.",
              },
              {
                key: "b",
                title: "Bildungsberatung: Studium ohne Abitur",
                body: "Welche Voraussetzungen gelten, welche Hochschulen kommen infrage, wie lässt sich das finanzieren? Kostenlose Beratung, auch abends.",
              },
              {
                key: "c",
                title: "Elterncafé: Mehrsprachigkeit",
                body: "Wie unterstütze ich mein Kind in zwei Sprachen? Austausch mit einer Sprachtherapeutin, jeden zweiten Dienstag, kostenlos, mit Kinderbetreuung.",
              },
              {
                key: "d",
                title: "Fachkurs: Verwaltungsdeutsch",
                body: "Bescheide verstehen, Anträge formulieren, Widerspruch schreiben. Acht Termine, ab Niveau B1, 140 €.",
              },
              {
                key: "e",
                title: "Gründungsberatung für Frauen",
                body: "Von der Idee zum Businessplan: Einzelberatung und Workshops, speziell für Frauen. Gefördert, daher kostenfrei.",
              },
              {
                key: "f",
                title: "Kurs: Digitale Aktenführung",
                body: "Für Beschäftigte in Verwaltung und Kanzleien: Dokumente strukturiert ablegen, Fristen verwalten, Datenschutz beachten. Zwei Tage, 320 €.",
              },
              {
                key: "g",
                title: "Landarztstipendium",
                body: "Für Medizinstudierende, die sich verpflichten, später mindestens fünf Jahre auf dem Land zu arbeiten. 1.000 € monatlich, Bewerbung bis 31. Mai.",
              },
              {
                key: "h",
                title: "Mediation: Betriebliche Konflikte",
                body: "Bei festgefahrenen Auseinandersetzungen zwischen Teams oder Führungskräften. Vier Sitzungen, Kosten trägt in der Regel der Arbeitgeber.",
              },
              {
                key: "i",
                title: "Nachbarschaftshilfe: Fahrdienst",
                body: "Ehrenamtliche fahren ältere Menschen zum Arzt oder zum Einkaufen. Anmeldung zwei Tage vorher, Spende erwünscht.",
              },
              {
                key: "j",
                title: "Patientenverfügung: Beratung",
                body: "Was regelt eine Patientenverfügung, was eine Vorsorgevollmacht? Neutrale Beratung, 20 € Unkostenbeitrag, Termine nach Vereinbarung.",
              },
              {
                key: "k",
                title: "Rechtsberatung: Erbrecht",
                body: "Testament, Pflichtteil, Erbengemeinschaft. Erstberatung durch eine Fachanwältin, 90 €, Termine auch samstags.",
              },
              {
                key: "l",
                title: "Weiterbildung: Ausbildereignung",
                body: "Vorbereitung auf die Prüfung nach AEVO — Voraussetzung, um im Betrieb ausbilden zu dürfen. Berufsbegleitend, sechs Wochen, 690 €.",
              },
            ],
          },
          items: [
            {
              id: "b2g-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Chef geht in Rente, und Sie überlegen mit Kollegen, den Betrieb zu übernehmen.",
              correct: "a",
              explanation: "Korxonani qabul qilish bo‘yicha maslahat.",
            },
            {
              id: "b2g-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben eine Ausbildung und acht Jahre Berufserfahrung, aber kein Abitur — und möchten studieren.",
              correct: "b",
              explanation: "Attestatsiz o‘qish bo‘yicha maslahat.",
            },
            {
              id: "b2g-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sprechen zu Hause Usbekisch und fragen sich, ob das Ihrem Kind in der Schule schadet.",
              correct: "c",
              explanation: "Ko‘p tillilik bo‘yicha ota-onalar uchrashuvi.",
            },
            {
              id: "b2g-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie verstehen die Bescheide vom Amt sprachlich nicht und möchten das lernen.",
              correct: "d",
              explanation: "Idoraviy nemis tili kursi.",
            },
            {
              id: "b2g-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sollen künftig Auszubildende betreuen und brauchen dafür den Nachweis.",
              correct: "l",
              explanation: "AEVO — shogird tayyorlash huquqi uchun imtihon.",
            },
            {
              id: "b2g-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In Ihrer Abteilung sprechen zwei Teams seit Monaten nicht mehr miteinander.",
              correct: "h",
              explanation: "Korxonadagi nizolar uchun mediatsiya.",
            },
            {
              id: "b2g-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten schriftlich festlegen, wie Sie im Ernstfall behandelt werden wollen.",
              correct: "j",
              explanation: "Patientenverfügung bo‘yicha maslahat.",
            },
            {
              id: "b2g-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Mutter kann nicht mehr Auto fahren und muss regelmäßig zum Arzt.",
              correct: "i",
              explanation: "Mahalla ixtiyoriylarining transport xizmati.",
            },
            {
              id: "b2g-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie studieren Medizin und könnten sich vorstellen, später auf dem Land zu arbeiten.",
              correct: "g",
              explanation: "Qishloq shifokori uchun stipendiya.",
            },
            {
              id: "b2g-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen eine Kinderbetreuung während einer mehrwöchigen Weiterbildung.",
              correct: "x",
              explanation: "Bolalar parvarishi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
