import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 06 · Leseverstehen — 3 Teil, 20 element, 75 ball. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Wenn Statistik in die Irre führt" },
        { key: "b", label: "Ausbildung, die niemand anerkennt" },
        { key: "c", label: "Kliniken auf dem Land unter Druck" },
        { key: "d", label: "Wenn Software Verträge liest" },
        { key: "e", label: "Ehrenamt in Zahlen" },
        { key: "f", label: "Sanieren statt abreißen" },
        { key: "g", label: "Bewerbung ohne Lebenslauf" },
        { key: "h", label: "Was Umfragen nicht erfassen" },
        { key: "i", label: "Wenn Beschäftigte mitentscheiden" },
        { key: "j", label: "Bildung entscheidet früher als gedacht" },
      ],
      blocks: [
        {
          id: "b2f-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Ein Abriss verursacht große Mengen Bauschutt und zerstört Material, das noch Jahrzehnte tragen würde. Studien zeigen: Bei Gebäuden aus den sechziger und siebziger Jahren ist eine Sanierung in der Gesamtbilanz meist günstiger als ein Neubau — vorausgesetzt, die Grundstruktur ist intakt. Dennoch wird häufig abgerissen, weil Förderprogramme Neubauten bevorzugen und Sanierungen schwerer zu kalkulieren sind.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "In mehreren Kanzleien prüfen Programme inzwischen Standardverträge auf ungewöhnliche Klauseln. Sie arbeiten schnell und ermüden nicht. Die Anwaltskammer weist jedoch darauf hin, dass die Verantwortung unverändert bei den Menschen liege: Wer eine Empfehlung ungeprüft übernimmt, haftet trotzdem. Umstritten ist zudem, ob Mandantendaten überhaupt in solche Systeme eingegeben werden dürfen.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Eine Befragung ergab, dass 78 Prozent der Beschäftigten Weiterbildung wichtig finden. Solche Zahlen klingen eindeutig, sagen aber wenig aus: Wer bei einer Umfrage angibt, etwas wichtig zu finden, tut es deshalb nicht. Fachleute sprechen von sozialer Erwünschtheit — Befragte antworten so, wie es von ihnen erwartet wird. Aussagekräftiger sind deshalb Daten darüber, wer tatsächlich teilnimmt.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Seit einem Jahr verzichtet ein Maschinenbauunternehmen in Chemnitz bei gewerblichen Stellen auf klassische Unterlagen. Wer sich bewirbt, absolviert stattdessen eine praktische Aufgabe in der Werkstatt. Die Personalleiterin berichtet, dass sich der Kreis der Bewerbenden deutlich verändert habe: Menschen mit Lücken im Werdegang kämen häufiger zum Zug, Absolventen mit gutem Zeugnis dagegen seltener.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Rund vierzig Krankenhäuser im ländlichen Raum haben in den vergangenen fünf Jahren ihre Geburtsstationen geschlossen. Als Grund werden fehlende Hebammen und Ärztinnen genannt, dazu Vorgaben zu Mindestfallzahlen. Für Schwangere bedeutet das teils Anfahrtswege von über sechzig Kilometern. Fachgesellschaften sind uneins: Die einen verweisen auf bessere Ergebnisse in größeren Häusern, die anderen auf die Risiken langer Wege.",
              },
            ],
          },
          items: [
            {
              id: "b2f-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "f",
              explanation: "Buzib tashlashdan ko‘ra ta’mirlash foydaliroq.",
            },
            {
              id: "b2f-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "d",
              explanation: "Dasturlar shartnomalarni tekshiradi.",
            },
            {
              id: "b2f-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "a",
              explanation: "Statistika yo‘ldan ozdirishi mumkin.",
            },
            {
              id: "b2f-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "g",
              explanation: "Hujjatsiz, amaliy topshiriq orqali ishga olish.",
            },
            {
              id: "b2f-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "c",
              explanation: "Qishloq kasalxonalari bosim ostida.",
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
          id: "b2f-l2-b1",
          stimulus: {
            kind: "text",
            title: "Wenn der Nachwuchs ausbleibt",
            body: `Über kaum ein Thema wird im Handwerk so ausdauernd geklagt wie über fehlende Auszubildende. Die Zahlen scheinen die Klage zu bestätigen: Bundesweit blieben zuletzt rund 30.000 Lehrstellen unbesetzt. Ein genauerer Blick zeigt allerdings ein widersprüchliches Bild — im selben Jahr fanden etwa 25.000 Bewerberinnen und Bewerber keinen Platz.

„Wir haben kein reines Mengenproblem, sondern ein Passungsproblem“, sagt die Bildungsforscherin Anke Rohde. Angebot und Nachfrage lägen räumlich und fachlich auseinander: In ländlichen Regionen fehlten Bewerbende, in Großstädten Plätze. Wer keinen Führerschein habe, komme an manche Betriebe schlicht nicht heran.

Hinzu kommt ein Faktor, der selten benannt wird. Rohdes Team wertete 4.000 Ausbildungsverträge aus und stellte fest: Ein Drittel wurde vorzeitig gelöst — in der Hälfte der Fälle innerhalb der ersten sechs Monate. Als Hauptgrund nannten die Befragten nicht die Anforderungen, sondern das Betriebsklima.

Betriebe, die feste Ansprechpersonen benennen und Feedbackgespräche führen, kommen auf deutlich niedrigere Abbruchquoten. Solche Maßnahmen kosten kaum Geld, aber Zeit — und genau daran fehle es kleinen Betrieben.

Rohde warnt zugleich vor der Hoffnung, mit besserer Betreuung sei das Problem gelöst: „Die Zahl der Schulabgänger sinkt weiter. Wir werden nicht alle Stellen besetzen können. Die Frage ist, welche wir aufgeben.“`,
          },
          items: [
            {
              id: "b2f-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was zeigt der genauere Blick auf die Zahlen?",
              options: [
                {
                  key: "a",
                  label: "Es gibt zugleich unbesetzte Stellen und erfolglose Bewerber.",
                },
                { key: "b", label: "Es gibt kaum noch Bewerbungen." },
                { key: "c", label: "Alle Lehrstellen wurden besetzt." },
              ],
              correct: "a",
              explanation:
                "30.000 bo‘sh joy va 25.000 joy topolmagan nomzod — bir vaqtda.",
            },
            {
              id: "b2f-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Wie beschreibt Anke Rohde das Problem?",
              options: [
                { key: "a", label: "Als reines Mengenproblem" },
                { key: "b", label: "Als Problem der Passung" },
                { key: "c", label: "Als Problem der Bezahlung" },
              ],
              correct: "b",
              explanation: "„sondern ein Passungsproblem“.",
            },
            {
              id: "b2f-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was ergab die Auswertung der Verträge?",
              options: [
                { key: "a", label: "Ein Drittel wurde vorzeitig beendet." },
                { key: "b", label: "Fast alle wurden abgeschlossen." },
                { key: "c", label: "Die Hälfte wurde verlängert." },
              ],
              correct: "a",
              explanation: "„Ein Drittel wurde vorzeitig gelöst.“",
            },
            {
              id: "b2f-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was nannten die Befragten als Hauptgrund für den Abbruch?",
              options: [
                { key: "a", label: "Die fachlichen Anforderungen" },
                { key: "b", label: "Das Betriebsklima" },
                { key: "c", label: "Die Entfernung zum Betrieb" },
              ],
              correct: "b",
              explanation: "„nicht die Anforderungen, sondern das Betriebsklima“.",
            },
            {
              id: "b2f-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wovor warnt Rohde?",
              options: [
                {
                  key: "a",
                  label: "Vor der Annahme, bessere Betreuung löse alles",
                },
                { key: "b", label: "Vor zu hohen Ausbildungsvergütungen" },
                { key: "c", label: "Vor der Schließung von Berufsschulen" },
              ],
              correct: "a",
              explanation:
                "Maktab bitiruvchilari kamayadi — hamma joyni to‘ldirib bo‘lmaydi.",
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
        { key: "a", label: "Ausbildungsbegleitende Hilfen" },
        { key: "b", label: "Betriebliche Altersvorsorge: Beratung" },
        { key: "c", label: "Bürgerbeteiligung: Werkstattgespräch" },
        { key: "d", label: "Energieberatung für Haushalte" },
        { key: "e", label: "Fachkurs: Technisches Deutsch" },
        { key: "f", label: "Freiwilliges Soziales Jahr" },
        { key: "g", label: "Gutachten: Baumängel" },
        { key: "h", label: "Konfliktberatung für Auszubildende" },
        { key: "i", label: "Mediation: Erbstreit" },
        { key: "j", label: "Selbsthilfegruppe: Pflegende Angehörige" },
        { key: "k", label: "Sprachkurs für Ärztinnen und Ärzte" },
        { key: "l", label: "Wiedereinstieg nach Elternzeit" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2f-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Ausbildungsbegleitende Hilfen",
                body: "Kostenloser Stütz- und Förderunterricht für Auszubildende, die fachliche Schwierigkeiten haben. Zwei bis drei Stunden pro Woche, finanziert von der Agentur für Arbeit.",
              },
              {
                key: "b",
                title: "Betriebliche Altersvorsorge: Beratung",
                body: "Was lohnt sich, was nicht? Unabhängige Beratung zu Entgeltumwandlung und Zuschüssen des Arbeitgebers. 80 € pro Stunde.",
              },
              {
                key: "c",
                title: "Bürgerbeteiligung: Werkstattgespräch",
                body: "Wie soll der Bahnhofsvorplatz künftig aussehen? Diskutieren Sie mit Planern und Verwaltung. Donnerstag 18 Uhr, Anmeldung online.",
              },
              {
                key: "d",
                title: "Energieberatung für Haushalte",
                body: "Wir prüfen Ihre Heizkosten, Fenster und Dämmung und zeigen Fördermöglichkeiten. Erstberatung 30 €, bei geringem Einkommen kostenfrei.",
              },
              {
                key: "e",
                title: "Fachkurs: Technisches Deutsch",
                body: "Fachsprache für Metall- und Elektroberufe: Zeichnungen lesen, Arbeitsaufträge verstehen, Sicherheitsunterweisungen. Voraussetzung B1.",
              },
              {
                key: "f",
                title: "Freiwilliges Soziales Jahr",
                body: "Für junge Menschen von 16 bis 26: zwölf Monate in Kita, Pflege oder Rettungsdienst. Taschengeld, Unterkunft möglich, Bewerbung ganzjährig.",
              },
              {
                key: "g",
                title: "Gutachten: Baumängel",
                body: "Feuchte Wände, Risse, undichte Fenster: Ein Sachverständiger dokumentiert die Mängel für die Auseinandersetzung mit dem Bauträger. Ab 450 €.",
              },
              {
                key: "h",
                title: "Konfliktberatung für Auszubildende",
                body: "Ärger im Betrieb, Probleme mit dem Ausbilder? Wir beraten vertraulich und vermitteln auf Wunsch. Kostenlos, auch anonym.",
              },
              {
                key: "i",
                title: "Mediation: Erbstreit",
                body: "Wenn Geschwister sich über Haus oder Nachlass nicht einigen: Wir moderieren, bevor es vor Gericht geht. 120 € pro Sitzung, gemeinsam getragen.",
              },
              {
                key: "j",
                title: "Selbsthilfegruppe: Pflegende Angehörige",
                body: "Austausch für Menschen, die zu Hause pflegen. Jeden zweiten Mittwoch 18 Uhr, kostenlos, Anmeldung nicht nötig.",
              },
              {
                key: "k",
                title: "Sprachkurs für Ärztinnen und Ärzte",
                body: "Vorbereitung auf die Fachsprachprüfung: Anamnese, Aufklärung, Arztbrief. Sechs Wochen Vollzeit, Voraussetzung B2.",
              },
              {
                key: "l",
                title: "Wiedereinstieg nach Elternzeit",
                body: "Beratung zu Arbeitszeitmodellen, Rückkehrgesprächen und Rechten. Kostenfrei, Termine auch abends und online.",
              },
            ],
          },
          items: [
            {
              id: "b2f-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Sohn ist im ersten Lehrjahr und kommt in der Berufsschule fachlich nicht mit.",
              correct: "a",
              explanation: "Shogirdlar uchun bepul qo‘shimcha darslar.",
            },
            {
              id: "b2f-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind Ärztin aus dem Ausland und müssen die Fachsprachprüfung ablegen.",
              correct: "k",
              explanation: "Shifokorlar uchun maxsus til kursi.",
            },
            {
              id: "b2f-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Heizkosten sind stark gestiegen und Sie wissen nicht, woran es liegt.",
              correct: "d",
              explanation: "Uy xo‘jaliklari uchun energiya maslahati.",
            },
            {
              id: "b2f-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie pflegen Ihren Vater zu Hause und fühlen sich damit sehr allein.",
              correct: "j",
              explanation: "Parvarish qiluvchi qarindoshlar guruhi.",
            },
            {
              id: "b2f-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In Ihrer neuen Wohnung zeigen sich nach einem Jahr Risse und feuchte Wände.",
              correct: "g",
              explanation: "Qurilish nuqsonlari bo‘yicha ekspert xulosasi.",
            },
            {
              id: "b2f-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie kommen nach zwei Jahren Elternzeit zurück und möchten Ihre Rechte kennen.",
              correct: "l",
              explanation: "Elternzeit dan keyin ishga qaytish bo‘yicha maslahat.",
            },
            {
              id: "b2f-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Tochter (18) möchte vor dem Studium ein Jahr im sozialen Bereich arbeiten.",
              correct: "f",
              explanation: "16–26 yosh uchun FSJ.",
            },
            {
              id: "b2f-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten in der Metallbranche und verstehen die Arbeitsaufträge sprachlich oft nicht.",
              correct: "e",
              explanation: "Metall va elektr sohasi uchun texnik nemis tili.",
            },
            {
              id: "b2f-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten mitreden, wie der Platz vor dem Bahnhof umgebaut wird.",
              correct: "c",
              explanation: "Fuqarolar ishtirokidagi muhokama kechasi.",
            },
            {
              id: "b2f-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen eine Wohnung, die für einen Rollstuhl geeignet ist.",
              correct: "x",
              explanation: "Uy-joy taklifi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
