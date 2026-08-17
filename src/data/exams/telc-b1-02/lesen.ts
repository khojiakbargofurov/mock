import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 02 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 * Teil 1: 5 matn ↔ 10 sarlavha (har biri 5 ball)
 * Teil 2: uzun matn, 5 ta MC (har biri 5 ball)
 * Teil 3: 10 vaziyat ↔ 12 e'lon yoki x (har biri 2,5 ball)
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "Sarlavha butun matnning asosiy fikrini qamrashi kerak — bitta jumlaga emas.",
      bank: [
        { key: "a", label: "Ein Bus, der zur Bibliothek wird" },
        { key: "b", label: "Wenn Patienten Musik hören" },
        { key: "c", label: "Zweite Karriere mit sechzig" },
        { key: "d", label: "Gemüse mitten in der Stadt" },
        { key: "e", label: "Schlafen statt früh aufstehen" },
        { key: "f", label: "Ein Dorf kauft seinen Laden zurück" },
        { key: "g", label: "Handys bleiben in der Schublade" },
        { key: "h", label: "Wohnen gegen Mithilfe" },
        { key: "i", label: "Radweg statt Parkplatz" },
        { key: "j", label: "Deutsch lernen beim Kochen" },
      ],
      blocks: [
        {
          id: "b1b-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Der Lebensmittelladen in Kirchberg war zwanzig Jahre lang der einzige im Ort. Als der Besitzer in Rente ging, fand sich kein Nachfolger. Daraufhin gründeten 140 Einwohnerinnen und Einwohner eine Genossenschaft, legten je 200 Euro ein und führen den Laden heute selbst. Ehrenamtliche stehen an der Kasse, zwei Angestellte kümmern sich um die Bestellungen. Seit der Wiedereröffnung ist der Umsatz höher als vorher.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Ein Gymnasium in Rostock hat den Unterrichtsbeginn von 7.45 Uhr auf 9 Uhr verlegt. Der Grund: Studien zeigen, dass Jugendliche morgens biologisch später wach werden als Erwachsene. Nach einem Jahr berichten die Lehrkräfte, dass in der ersten Stunde deutlich weniger Schülerinnen und Schüler müde sind. Kritik kommt von einigen Eltern, weil der Unterricht dafür bis 16 Uhr dauert.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Auf dem Dach eines Parkhauses in Mannheim wachsen Tomaten, Salat und Kräuter. Rund achtzig Familien haben dort eine Kiste gemietet und bauen ihr eigenes Gemüse an. Die Idee kam von einer Landschaftsarchitektin, die die leere Fläche entdeckt hatte. Wer keine Zeit hat, findet immer jemanden, der beim Gießen hilft — das gehört zu den Regeln.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "In einer Klinik in Jena bekommen Patientinnen und Patienten vor der Operation Kopfhörer. Zwanzig Minuten lang hören sie ruhige Stücke, die sie selbst auswählen dürfen. Eine Untersuchung mit 300 Personen ergab, dass sie danach ruhiger waren und im Durchschnitt weniger Beruhigungsmittel brauchten. Das Angebot kostet die Klinik fast nichts und wird jetzt auf weitere Stationen ausgeweitet.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Zwei Straßen im Zentrum von Aachen sehen seit dem Frühjahr anders aus: Wo früher Autos standen, führt heute ein breiter, farbig markierter Streifen für Räder entlang. 300 Stellplätze sind weggefallen. Die Geschäfte hatten protestiert, doch eine Zählung nach sechs Monaten zeigte, dass mehr Kundinnen und Kunden als vorher in die Läden kamen.",
              },
            ],
          },
          items: [
            {
              id: "b1b-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "f",
              explanation:
                "Qishloq aholisi kooperativ tuzib do‘konni o‘zi boshqaradi — „Ein Dorf kauft seinen Laden zurück“.",
            },
            {
              id: "b1b-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "e",
              explanation:
                "Dars kechroq boshlanadi, chunki o‘smirlar kechroq uyg‘onadi — „Schlafen statt früh aufstehen“.",
            },
            {
              id: "b1b-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "d",
              explanation:
                "Shahar markazidagi avtoturargoh tomida sabzavot ekiladi.",
            },
            {
              id: "b1b-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "b",
              explanation:
                "Bemorlar operatsiya oldidan musiqa tinglaydi va tinchlanadi.",
            },
            {
              id: "b1b-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "i",
              explanation:
                "Avtoturargoh o‘rniga velosiped yo‘lagi — „Radweg statt Parkplatz“.",
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
      hint: "Har savol uchun matndagi aniq jumlani toping — taxmin qilmang.",
      blocks: [
        {
          id: "b1b-l2-b1",
          stimulus: {
            kind: "text",
            title: "Ein Jahr ohne Auto",
            body: `Als der Wagen von Familie Bühler im letzten Frühjahr zum dritten Mal in die Werkstatt musste, traf sie eine ungewöhnliche Entscheidung: Sie verkaufte ihn und probierte ein Jahr lang, ohne eigenes Auto auszukommen. „Wir wollten es eigentlich nur drei Monate testen“, erzählt Katrin Bühler, 41, Erzieherin. „Aber dann haben wir gemerkt, dass es geht.“

Einfach war der Anfang nicht. Die Familie wohnt in einem Vorort von Ulm, der Bus fährt abends nur einmal pro Stunde. Vor allem der Wocheneinkauf machte Probleme, bis sich das Ehepaar einen Fahrradanhänger kaufte. Für größere Fahrten — Möbel abholen, Besuch bei den Großeltern im Schwarzwald — nutzen sie jetzt Carsharing. „Wir zahlen im Monat etwa 90 Euro dafür. Früher waren es mit Versicherung, Steuer und Reparaturen deutlich über 300.“

Die beiden Kinder, neun und dreizehn Jahre alt, waren zuerst nicht begeistert. Heute fährt der Ältere mit dem Rad zur Schule und findet es normal. Die jüngere Tochter allerdings vermisst die Fahrten zum Reiterhof, die nun länger dauern und genau geplant werden müssen.

Was die Familie nicht erwartet hatte: Ihr Alltag ist langsamer geworden. „Man überlegt sich dreimal, ob man wirklich noch schnell in den Baumarkt fährt“, sagt Peter Bühler. Manches erledigen sie deshalb online. Ob sie nie wieder ein Auto kaufen werden, wollen sie trotzdem nicht versprechen: „Wenn meine Mutter einmal Pflege braucht, sieht die Sache anders aus.“`,
          },
          items: [
            {
              id: "b1b-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Warum hat die Familie ihr Auto verkauft?",
              options: [
                { key: "a", label: "Weil es immer wieder repariert werden musste." },
                { key: "b", label: "Weil sie in die Stadt gezogen ist." },
                { key: "c", label: "Weil die Kinder es sich gewünscht haben." },
              ],
              correct: "a",
              explanation:
                "„zum dritten Mal in die Werkstatt musste“ — shundan keyin sotishga qaror qilishdi.",
            },
            {
              id: "b1b-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Wie lange wollte die Familie ursprünglich ohne Auto leben?",
              options: [
                { key: "a", label: "Ein ganzes Jahr" },
                { key: "b", label: "Drei Monate" },
                { key: "c", label: "Für immer" },
              ],
              correct: "b",
              explanation: "„Wir wollten es eigentlich nur drei Monate testen.“",
            },
            {
              id: "b1b-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was sagt der Text über die Kosten?",
              options: [
                { key: "a", label: "Carsharing ist teurer als das eigene Auto." },
                { key: "b", label: "Die Familie zahlt etwa gleich viel wie vorher." },
                { key: "c", label: "Die Familie spart mehr als 200 Euro im Monat." },
              ],
              correct: "c",
              explanation:
                "Ilgari 300 evrodan ortiq, hozir 90 evro — farqi 200 evrodan ko‘p.",
            },
            {
              id: "b1b-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Wie reagieren die Kinder?",
              options: [
                { key: "a", label: "Beide finden die Situation inzwischen gut." },
                { key: "b", label: "Der Sohn hat sich daran gewöhnt, die Tochter nicht ganz." },
                { key: "c", label: "Beide möchten wieder ein Auto haben." },
              ],
              correct: "b",
              explanation:
                "O‘g‘li velosipedda maktabga boradi; qizi esa otxonaga borishni sog‘inadi.",
            },
            {
              id: "b1b-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was sagt die Familie über die Zukunft?",
              options: [
                { key: "a", label: "Sie schließt ein Auto später nicht aus." },
                { key: "b", label: "Sie wird nie wieder ein Auto kaufen." },
                { key: "c", label: "Sie kauft im nächsten Jahr wieder eins." },
              ],
              correct: "a",
              explanation:
                "„wollen sie trotzdem nicht versprechen“ — onasi parvarishga muhtoj bo‘lsa, vaziyat o‘zgaradi.",
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
      hint: "Diqqat: vaqt, narx yoki shart bitta e’londa mos kelmasa, u boshqa vaziyatga tegishli.",
      bank: [
        { key: "a", label: "Umzugshelfer" },
        { key: "b", label: "Katzenbetreuung" },
        { key: "c", label: "Deutsch-Konversationskreis" },
        { key: "d", label: "Klavier zu verschenken" },
        { key: "e", label: "Handy-Reparatur" },
        { key: "f", label: "Babysitter am Abend" },
        { key: "g", label: "Steuererklärung — Hilfe" },
        { key: "h", label: "Fahrradwerkstatt für Frauen" },
        { key: "i", label: "Zimmer für Studierende" },
        { key: "j", label: "Tanzkurs für Paare" },
        { key: "k", label: "Winterreifen günstig" },
        { key: "l", label: "Chor sucht Sänger" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1b-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Umzugshelfer",
                body: "Zwei kräftige Studenten helfen beim Umzug: tragen, packen, Transporter fahren. 20 € pro Person und Stunde, auch am Wochenende. Kurzfristige Anfragen möglich.",
              },
              {
                key: "b",
                title: "Katzenbetreuung",
                body: "Ich komme während Ihres Urlaubs täglich in Ihre Wohnung, füttere Ihre Katze und spiele mit ihr. 10 € pro Besuch, Schlüsselübergabe vorher.",
              },
              {
                key: "c",
                title: "Deutsch-Konversationskreis",
                body: "Jeden Samstag 10–12 Uhr im Stadtteilzentrum. Wir sprechen über Alltagsthemen, ab Niveau A2. Kostenlos, keine Anmeldung nötig.",
              },
              {
                key: "d",
                title: "Klavier zu verschenken",
                body: "Altes Klavier, gestimmt, guter Klang, an Selbstabholer abzugeben. Steht im dritten Stock ohne Aufzug — Transport müssen Sie selbst organisieren.",
              },
              {
                key: "e",
                title: "Handy-Reparatur",
                body: "Display und Akku für alle gängigen Modelle, meist innerhalb von zwei Stunden. Mo–Fr 9–18 Uhr, Marktstraße 11. Kostenvoranschlag kostenlos.",
              },
              {
                key: "f",
                title: "Babysitter am Abend",
                body: "Erzieherin im Ruhestand betreut Ihre Kinder abends ab 18 Uhr, auch spät. 14 € pro Stunde. Erfahrung mit Kindern ab zwei Jahren.",
              },
              {
                key: "g",
                title: "Steuererklärung — Hilfe",
                body: "Lohnsteuerhilfeverein: Wir erstellen Ihre Steuererklärung. Mitgliedsbeitrag ab 60 € im Jahr, Termine nach Vereinbarung, auch abends.",
              },
              {
                key: "h",
                title: "Fahrradwerkstatt für Frauen",
                body: "Offene Werkstatt nur für Frauen, mittwochs 17–20 Uhr. Werkzeug und Beratung kostenlos, Sie reparieren selbst. Ersatzteile zum Selbstkostenpreis.",
              },
              {
                key: "i",
                title: "Zimmer für Studierende",
                body: "Möbliertes Zimmer (14 m²) in Vierer-WG, 320 € warm, ab September frei. Nur an Studierende, Nichtraucher, keine Haustiere.",
              },
              {
                key: "j",
                title: "Tanzkurs für Paare",
                body: "Standardtänze für Anfänger, acht Abende, freitags 19.30–21 Uhr. 120 € pro Paar. Anmeldung nur zu zweit möglich.",
              },
              {
                key: "k",
                title: "Winterreifen günstig",
                body: "Vier Winterreifen 205/55 R16, zwei Saisons gefahren, noch 6 mm Profil. 160 € für alle vier, Abholung in Neustadt.",
              },
              {
                key: "l",
                title: "Chor sucht Sänger",
                body: "Unser gemischter Chor probt dienstags von 19 bis 21 Uhr und sucht besonders Männerstimmen. Noten lesen ist nicht nötig, Probe zum Kennenlernen kostenlos.",
              },
            ],
          },
          items: [
            {
              id: "b1b-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie ziehen am Samstag in eine neue Wohnung und brauchen jemanden, der die schweren Möbel trägt.",
              correct: "a",
              explanation: "Ko‘chishda yordam, dam olish kunlari ham ishlaydi.",
            },
            {
              id: "b1b-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie fahren zwei Wochen in Urlaub und wissen nicht, wer sich um Ihr Tier kümmert.",
              correct: "b",
              explanation:
                "Ta’til vaqtida mushuk parvarishi — har kuni uyga kelib boqadi.",
            },
            {
              id: "b1b-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten Ihr Deutsch verbessern, haben aber nur samstags Zeit und wenig Geld.",
              correct: "c",
              explanation: "Shanba kunlari bepul suhbat to‘garagi.",
            },
            {
              id: "b1b-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Das Display Ihres Telefons ist gesprungen und Sie brauchen es morgen wieder.",
              correct: "e",
              explanation: "„meist innerhalb von zwei Stunden“ — tez ta’mirlash.",
            },
            {
              id: "b1b-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie und Ihr Mann möchten vor Ihrer Hochzeit tanzen lernen.",
              correct: "j",
              explanation: "Juftliklar uchun raqs kursi — ikki kishi bo‘lib yoziladi.",
            },
            {
              id: "b1b-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind zum ersten Mal in Deutschland angestellt und wissen nicht, wie Sie Ihre Steuern erklären sollen.",
              correct: "g",
              explanation:
                "Lohnsteuerhilfeverein soliq deklaratsiyasini tuzib beradi.",
            },
            {
              id: "b1b-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Bremsen quietschen. Sie möchten lernen, Ihr Rad selbst zu reparieren, fühlen sich aber in Männergruppen unwohl.",
              correct: "h",
              explanation: "Faqat ayollar uchun ochiq velosiped ustaxonasi.",
            },
            {
              id: "b1b-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie und Ihr Mann möchten am Dienstagabend ins Theater gehen, Ihre Kinder sind fünf und acht.",
              correct: "f",
              explanation: "Kechqurun soat 18 dan keyin bolalarga qaraydi.",
            },
            {
              id: "b1b-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Tochter (10) möchte ein Instrument lernen. Sie haben ein Klavier bekommen, aber niemanden, der es ihr beibringt.",
              correct: "x",
              explanation:
                "E’lonlar orasida musiqa darsi beruvchi yo‘q — pianino bepul beriladi, lekin o‘qituvchi emas. Javob x.",
            },
            {
              id: "b1b-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie singen gern, können aber keine Noten lesen, und dienstags haben Sie immer frei.",
              correct: "l",
              explanation:
                "„Noten lesen ist nicht nötig“, mashqlar seshanba kunlari.",
            },
          ],
        },
      ],
    },
  ],
};
