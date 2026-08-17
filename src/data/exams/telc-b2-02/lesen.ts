import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 02 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 * Mavzular: mehnat bozori, ta'lim, shahar hayoti — B2 darajadagi matnlar.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "B2 da sarlavhalar ko‘chma ma’noda beriladi — matnning asosiy tezisini toping.",
      bank: [
        { key: "a", label: "Wenn der Chef selbst mit anpackt" },
        { key: "b", label: "Prüfungen ohne Papier" },
        { key: "c", label: "Ruhe als knappes Gut" },
        { key: "d", label: "Rückkehr in die Region" },
        { key: "e", label: "Alte Gebäude, neue Nutzung" },
        { key: "f", label: "Wenn Maschinen mitentscheiden" },
        { key: "g", label: "Beruf und Pflege unter einen Hut bringen" },
        { key: "h", label: "Lernen im Ausland — und danach?" },
        { key: "i", label: "Weniger Verpackung, mehr Aufwand" },
        { key: "j", label: "Vom Hörsaal in die Werkstatt" },
      ],
      blocks: [
        {
          id: "b2b-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Rund 4,9 Millionen Menschen in Deutschland betreuen einen Angehörigen zu Hause, mehr als die Hälfte von ihnen ist zusätzlich erwerbstätig. Betriebe reagieren bislang sehr unterschiedlich: Während einige Unternehmen flexible Arbeitszeiten und kurzfristige Freistellungen anbieten, erfahren andere Beschäftigte erst spät von ihren Rechten. Fachleute fordern, das Thema ähnlich selbstverständlich zu behandeln wie die Elternzeit — auch weil die Zahl der Betroffenen in den kommenden Jahren deutlich steigen dürfte.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Immer mehr Verwaltungen setzen Software ein, die Anträge vorsortiert und Empfehlungen ausspricht — etwa bei der Vergabe von Kita-Plätzen. Die Programme arbeiten schnell und behandeln formal alle gleich. Kritisch wird es dort, wo die zugrunde liegenden Daten historische Ungleichheiten abbilden. Juristinnen und Juristen verlangen deshalb, dass jede automatisch erzeugte Empfehlung von einem Menschen überprüft und auf Wunsch begründet werden muss.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "In einer stillgelegten Textilfabrik in Chemnitz arbeiten heute eine Kita, ein Chor, zwei Handwerksbetriebe und ein Café unter einem Dach. Der Abriss wäre billiger gewesen, rechnet die Stadt vor, doch eine Bürgerinitiative setzte den Erhalt durch. Inzwischen gilt das Haus als Beispiel dafür, dass sich Industriearchitektur wirtschaftlich weiternutzen lässt — vorausgesetzt, es findet sich früh ein Träger, der die laufenden Kosten übernimmt.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Jahrelang zogen junge Menschen aus dem Landkreis fort, sobald sie ihre Ausbildung beendet hatten. Seit einiger Zeit dreht sich die Bewegung: Wer im Homeoffice arbeiten kann, kehrt zurück, weil Mieten und Grundstücke bezahlbar sind. Die Gemeinden reagieren mit schnellem Internet und Betreuungsplätzen. Ganz ohne Probleme ist die Entwicklung nicht — in beliebten Orten steigen die Preise inzwischen ebenfalls spürbar.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Lärm gilt inzwischen als das am zweithäufigsten genannte Umweltproblem in deutschen Städten. Dauerhafter Verkehrslärm erhöht nachweislich das Risiko für Herz-Kreislauf-Erkrankungen. Städte reagieren mit Tempo 30, leiseren Straßenbelägen und autofreien Zonen. Fachleute weisen jedoch darauf hin, dass die wirksamste Maßnahme selten diskutiert wird: schlicht weniger Fahrzeuge in den Innenstädten.",
              },
            ],
          },
          items: [
            {
              id: "b2b-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "g",
              explanation:
                "Ish va qarindoshni parvarish qilishni birlashtirish — „Beruf und Pflege unter einen Hut bringen“.",
            },
            {
              id: "b2b-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "f",
              explanation:
                "Dasturlar qaror qabul qilishda ishtirok etadi — „Wenn Maschinen mitentscheiden“.",
            },
            {
              id: "b2b-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "e",
              explanation:
                "Eski fabrika binosi yangi maqsadda ishlatilmoqda.",
            },
            {
              id: "b2b-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "d",
              explanation:
                "Yoshlar tumanga qaytmoqda — „Rückkehr in die Region“.",
            },
            {
              id: "b2b-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "c",
              explanation:
                "Shovqin muammosi va sokinlikning qadri — „Ruhe als knappes Gut“.",
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
      hint: "Javob variantlari ko‘pincha matndagi so‘zlarni takrorlaydi — mazmunga qarang, so‘zga emas.",
      blocks: [
        {
          id: "b2b-l2-b1",
          stimulus: {
            kind: "text",
            title: "Wer bildet noch aus?",
            body: `Fast ein Fünftel der ausbildungsberechtigten Betriebe in Deutschland hat im vergangenen Jahr keine einzige Lehrstelle besetzt — und das nicht etwa, weil es keine Bewerbungen gegeben hätte. In vielen Fällen blieben Stellen unbesetzt, obwohl sich Jugendliche beworben hatten. Die Gründe dafür sind vielschichtiger, als es die verbreitete Klage über angeblich unmotivierte Bewerber vermuten lässt.

Eine Untersuchung des Instituts für Arbeitsmarktforschung zeichnet ein differenziertes Bild. Kleinere Betriebe verfügen häufig weder über eine Personalabteilung noch über Erfahrung mit modernen Bewerbungswegen. Wer sich per Smartphone bewerben möchte, scheitert dort mitunter bereits am Formular. Hinzu kommt, dass Rückmeldungen oft Wochen auf sich warten lassen. „Junge Leute bewerben sich heute parallel bei fünf oder sechs Firmen“, erklärt der Studienleiter Jonas Prantl. „Wer nach vier Wochen antwortet, ist schlicht zu spät.“

Als zweiter Faktor erweist sich die Erreichbarkeit. Ein Handwerksbetrieb im ländlichen Raum, den man ohne Führerschein morgens um sieben nicht erreichen kann, kommt für viele Sechzehnjährige praktisch nicht infrage. Einzelne Innungen haben darauf reagiert und finanzieren Fahrkarten oder organisieren Fahrgemeinschaften — mit messbarem Erfolg, wie Prantl betont.

Bemerkenswert ist ein dritter Befund: Betriebe, die ihre Auszubildenden nach der Prüfung übernehmen und dies bereits in der Stellenanzeige zusagen, erhalten im Schnitt fast doppelt so viele Bewerbungen. Sicherheit wiegt für die Jugendlichen offenbar schwerer als ein etwas höheres Gehalt.

Für pauschale Schuldzuweisungen sieht Prantl deshalb wenig Anlass. Allerdings warnt er auch vor der Erwartung, allein bessere Bewerbungsverfahren könnten den Fachkräftemangel beheben: „Die Zahl der Schulabgänger sinkt. Rechnerisch werden am Ende Stellen offen bleiben — die Frage ist nur, welche.“`,
          },
          items: [
            {
              id: "b2b-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was stellt der Text zu unbesetzten Lehrstellen fest?",
              options: [
                {
                  key: "a",
                  label: "Sie blieben oft trotz vorhandener Bewerbungen frei.",
                },
                { key: "b", label: "Es gab fast keine Bewerbungen mehr." },
                { key: "c", label: "Vor allem Großbetriebe waren betroffen." },
              ],
              correct: "a",
              explanation:
                "„blieben Stellen unbesetzt, obwohl sich Jugendliche beworben hatten“.",
            },
            {
              id: "b2b-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Welches Problem nennt der Text bei kleineren Betrieben?",
              options: [
                { key: "a", label: "Sie zahlen zu niedrige Vergütungen." },
                { key: "b", label: "Sie antworten den Bewerbern zu spät." },
                { key: "c", label: "Sie stellen zu hohe fachliche Anforderungen." },
              ],
              correct: "b",
              explanation:
                "„Wer nach vier Wochen antwortet, ist schlicht zu spät.“",
            },
            {
              id: "b2b-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was berichtet der Text über die Erreichbarkeit?",
              options: [
                {
                  key: "a",
                  label: "Sie spielt für Jugendliche kaum eine Rolle.",
                },
                {
                  key: "b",
                  label: "Manche Innungen unterstützen die Anreise mit Erfolg.",
                },
                {
                  key: "c",
                  label: "Betriebe auf dem Land verlangen einen Führerschein.",
                },
              ],
              correct: "b",
              explanation:
                "Ba’zi uyushmalar chipta to‘laydi yoki birga borishni tashkil qiladi — „mit messbarem Erfolg“.",
            },
            {
              id: "b2b-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was wirkt sich laut Studie besonders positiv aus?",
              options: [
                {
                  key: "a",
                  label: "Eine zugesagte Übernahme nach der Ausbildung",
                },
                { key: "b", label: "Eine deutlich höhere Vergütung" },
                { key: "c", label: "Ein bekannter Firmenname" },
              ],
              correct: "a",
              explanation:
                "Ish bilan ta’minlashni oldindan va’da qilgan firmalar ikki barobar ko‘p ariza oladi.",
            },
            {
              id: "b2b-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wie beurteilt Prantl die Zukunft?",
              options: [
                {
                  key: "a",
                  label: "Bessere Verfahren allein werden nicht ausreichen.",
                },
                {
                  key: "b",
                  label: "Der Fachkräftemangel ist bald überwunden.",
                },
                {
                  key: "c",
                  label: "Die Betriebe tragen die alleinige Schuld.",
                },
              ],
              correct: "a",
              explanation:
                "Maktab bitiruvchilari soni kamayyapti — „Rechnerisch werden am Ende Stellen offen bleiben“.",
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
      hint: "E’lonlardagi shartlarga (kim uchun, qachon, qanday shart bilan) alohida e’tibor bering.",
      bank: [
        { key: "a", label: "Anerkennung ausländischer Abschlüsse" },
        { key: "b", label: "Existenzgründung — Beratung" },
        { key: "c", label: "Pflegestützpunkt" },
        { key: "d", label: "Werkstatt für Holzarbeiten" },
        { key: "e", label: "Fachkurs Medizinisches Deutsch" },
        { key: "f", label: "Mediation bei Nachbarschaftskonflikten" },
        { key: "g", label: "Lernpatinnen für Grundschulkinder" },
        { key: "h", label: "Bürogemeinschaft — Platz frei" },
        { key: "i", label: "Schuldnerberatung" },
        { key: "j", label: "Fahrsicherheitstraining" },
        { key: "k", label: "Übersetzungen mit Beglaubigung" },
        { key: "l", label: "Betriebliche Gesundheitswoche" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2b-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Anerkennung ausländischer Abschlüsse",
                body: "Kostenlose Erstberatung zur Anerkennung von Berufs- und Hochschulabschlüssen aus dem Ausland. Wir prüfen Ihre Unterlagen und begleiten Sie im Verfahren. Termine Di und Do, Anmeldung telefonisch.",
              },
              {
                key: "b",
                title: "Existenzgründung — Beratung",
                body: "Sie möchten sich selbstständig machen? Wir unterstützen bei Businessplan, Finanzierung und Anmeldung. Erstgespräch kostenfrei, danach 40 € pro Stunde. Auch abends.",
              },
              {
                key: "c",
                title: "Pflegestützpunkt",
                body: "Beratung für Angehörige von pflegebedürftigen Personen: Leistungen der Pflegekasse, Anträge, Entlastungsangebote. Kostenlos und unabhängig, auf Wunsch auch bei Ihnen zu Hause.",
              },
              {
                key: "d",
                title: "Werkstatt für Holzarbeiten",
                body: "Offene Holzwerkstatt mit Maschinen und Beratung durch einen Tischler. Freitags 15–20 Uhr, Tagesticket 12 €. Eigenes Material bitte mitbringen.",
              },
              {
                key: "e",
                title: "Fachkurs Medizinisches Deutsch",
                body: "Für Ärztinnen, Pflegekräfte und Therapeuten mit Niveau B2. Fachsprache, Anamnesegespräch, Dokumentation. Acht Wochen, dienstags und donnerstags abends, 480 €.",
              },
              {
                key: "f",
                title: "Mediation bei Nachbarschaftskonflikten",
                body: "Streit im Haus oder mit dem Nachbargrundstück? Ausgebildete Mediatorinnen moderieren das Gespräch. Erste Sitzung 30 €, weitere nach Absprache.",
              },
              {
                key: "g",
                title: "Lernpatinnen und Lernpaten gesucht",
                body: "Ehrenamtliche begleiten Grundschulkinder ein Jahr lang einmal wöchentlich beim Lernen. Schulung und Versicherung stellen wir. Kein pädagogischer Abschluss nötig.",
              },
              {
                key: "h",
                title: "Bürogemeinschaft — Platz frei",
                body: "Zwei Schreibtische in heller Altbauetage, Internet und Küche inklusive, 180 € im Monat. Ideal für Freiberufler. Mindestlaufzeit sechs Monate.",
              },
              {
                key: "i",
                title: "Schuldnerberatung",
                body: "Vertrauliche und kostenlose Beratung bei Zahlungsrückständen und Mahnungen. Wir verhandeln mit Gläubigern. Offene Sprechstunde mittwochs 9–12 Uhr, ohne Termin.",
              },
              {
                key: "j",
                title: "Fahrsicherheitstraining",
                body: "Sicher reagieren bei Nässe und Glätte — Tagestraining auf abgesperrtem Gelände, 149 €. Voraussetzung: gültiger Führerschein, eigenes Fahrzeug.",
              },
              {
                key: "k",
                title: "Übersetzungen mit Beglaubigung",
                body: "Beglaubigte Übersetzungen von Urkunden und Zeugnissen (Russisch, Usbekisch, Türkisch). Bearbeitung in der Regel innerhalb von drei Werktagen. Preis nach Zeilenzahl.",
              },
              {
                key: "l",
                title: "Betriebliche Gesundheitswoche",
                body: "Wir planen für Ihr Unternehmen eine Woche mit Rückenkursen, Ernährungsberatung und Stressprävention. Angebot ab 20 Mitarbeitenden, Kosten auf Anfrage.",
              },
            ],
          },
          items: [
            {
              id: "b2b-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind in Usbekistan Krankenschwester gewesen und möchten wissen, ob Ihr Abschluss hier gilt.",
              correct: "a",
              explanation: "Chet el diplomini tan olish bo‘yicha bepul maslahat.",
            },
            {
              id: "b2b-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Für das Anerkennungsverfahren brauchen Sie Ihr Diplom auf Deutsch, und zwar amtlich bestätigt.",
              correct: "k",
              explanation: "Guvohnomalarni tasdiqlangan tarjima qilish xizmati.",
            },
            {
              id: "b2b-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Mutter ist seit einem Schlaganfall auf Hilfe angewiesen, und Sie kennen sich mit den Anträgen nicht aus.",
              correct: "c",
              explanation:
                "Pflegestützpunkt — parvarish sug‘urtasi va arizalar bo‘yicha maslahat.",
            },
            {
              id: "b2b-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten als Ärztin und möchten Ihre Fachsprache für Patientengespräche verbessern.",
              correct: "e",
              explanation: "Tibbiyot xodimlari uchun ixtisoslashgan til kursi.",
            },
            {
              id: "b2b-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten als freiberufliche Grafikerin von zu Hause aus und vermissen einen ruhigen Arbeitsplatz.",
              correct: "h",
              explanation: "Frilanserlar uchun ish stoli bor umumiy ofis.",
            },
            {
              id: "b2b-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie können mehrere Rechnungen nicht mehr bezahlen und bekommen ständig Mahnungen.",
              correct: "i",
              explanation: "Qarz bo‘yicha bepul va maxfiy maslahat.",
            },
            {
              id: "b2b-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Seit Monaten streiten Sie mit dem Nachbarn über die Gartenhecke; ein Gericht möchten Sie vermeiden.",
              correct: "f",
              explanation: "Mediatsiya — sudsiz kelishuvga yordam.",
            },
            {
              id: "b2b-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben Zeit übrig und möchten ehrenamtlich ein Kind beim Lernen begleiten, sind aber keine Lehrerin.",
              correct: "g",
              explanation:
                "„Kein pädagogischer Abschluss nötig“ — o‘qituvchi bo‘lish shart emas.",
            },
            {
              id: "b2b-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten für Ihre Tochter (7) einen Platz in einem Ferienlager während der Sommerferien finden.",
              correct: "x",
              explanation:
                "E’lonlar orasida bolalar lageri haqida hech narsa yo‘q — javob x.",
            },
            {
              id: "b2b-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten ein Regal selbst bauen, haben aber weder Maschinen noch Erfahrung.",
              correct: "d",
              explanation:
                "Ochiq yog‘och ustaxonasi: dastgohlar va duradgor maslahati bor.",
            },
          ],
        },
      ],
    },
  ],
};
