import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Lesen — 4 Teil, 20 element, 30 daqiqa.
 * Teil 1 gazeta maqolasi · Teil 2 ma'lumot taxtasi · Teil 3 elektron xat ·
 * Teil 4 e'lonlarni vaziyatga moslashtirish (mos kelmasa — x).
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      hint: "Avval savollarni o‘qing, keyin matndan javobni qidiring.",
      blocks: [
        {
          id: "a2l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Stadtzeitung",
            body: `Ein Café auf zwei Rädern

Vor drei Jahren hat Marija Petrova ihren Job in einer Bank verloren. „Zuerst war das ein Schock“, sagt die 34-Jährige. „Aber dann habe ich gemacht, wovon ich lange geträumt habe.“

Heute fährt sie mit einem alten Lastenfahrrad durch Leipzig und verkauft Kaffee. Ihre Kundschaft findet sie vor Bürohäusern, auf Märkten und im Park. „Am Anfang haben viele gelacht. Jetzt warten die Leute schon auf mich.“

Leicht ist die Arbeit nicht: Marija steht um fünf Uhr auf, und im Winter sind die Hände schnell kalt. Trotzdem möchte sie nicht zurück ins Büro. „Ich verdiene weniger als früher, aber ich entscheide selbst, wann und wo ich arbeite.“

Im nächsten Jahr will sie ein zweites Rad kaufen und eine Mitarbeiterin einstellen.`,
          },
          items: [
            {
              id: "a2-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Marija Petrova hat ihr Café gegründet, weil …",
              options: [
                { key: "a", label: "sie ihre Arbeit in der Bank verloren hat." },
                { key: "b", label: "sie mehr Geld verdienen wollte." },
                { key: "c", label: "ihre Familie eine Bäckerei hatte." },
              ],
              correct: "a",
              explanation:
                "Bankdagi ishini yo‘qotgach, orzusini amalga oshirgan. Pul haqida aksincha aytilgan.",
            },
            {
              id: "a2-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wo verkauft sie ihren Kaffee?",
              options: [
                { key: "a", label: "Nur in einem kleinen Laden" },
                { key: "b", label: "An verschiedenen Orten in der Stadt" },
                { key: "c", label: "Nur auf dem Wochenmarkt" },
              ],
              correct: "b",
              explanation:
                "„vor Bürohäusern, auf Märkten und im Park“ — shahar bo‘ylab turli joylarda.",
            },
            {
              id: "a2-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wie haben die Leute am Anfang reagiert?",
              options: [
                { key: "a", label: "Viele haben gelacht." },
                { key: "b", label: "Alle haben sofort geholfen." },
                { key: "c", label: "Niemand hat es bemerkt." },
              ],
              correct: "a",
              explanation: "„Am Anfang haben viele gelacht.“",
            },
            {
              id: "a2-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sagt Marija über ihre Arbeit heute?",
              options: [
                { key: "a", label: "Sie verdient mehr als in der Bank." },
                { key: "b", label: "Sie ist frei in ihren Entscheidungen." },
                { key: "c", label: "Sie möchte bald wieder im Büro arbeiten." },
              ],
              correct: "b",
              explanation:
                "„Ich verdiene weniger … aber ich entscheide selbst, wann und wo ich arbeite.“",
            },
            {
              id: "a2-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was plant sie für das nächste Jahr?",
              options: [
                { key: "a", label: "Ein Geschäft in der Innenstadt zu mieten" },
                { key: "b", label: "In eine andere Stadt zu ziehen" },
                { key: "c", label: "Ein zweites Rad und eine Mitarbeiterin" },
              ],
              correct: "c",
              explanation:
                "Oxirgi gap: ikkinchi velosiped va bir xodim yollash rejasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Informationen zum Kaufhaus. In welchen Stock gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      hint: "Har savolda kerakli bo‘lim qaysi qavatda ekanini toping.",
      blocks: [
        {
          id: "a2l2-b1",
          stimulus: {
            kind: "text",
            title: "Kaufhaus Nordstern · Wegweiser",
            body: `Erdgeschoss — Information, Zeitungen, Bäckerei, Blumen
1. Stock — Damenmode, Schuhe, Taschen
2. Stock — Herrenmode, Sportbekleidung, Fahrräder
3. Stock — Küche, Geschirr, Kleinmöbel, Lampen
4. Stock — Bücher, Spielwaren, Café mit Terrasse
Untergeschoss — Lebensmittel, Getränke, Kundentoiletten

Kundenservice und Umtausch: Erdgeschoss, neben der Information.`,
          },
          items: [
            {
              id: "a2-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten Ihrem Sohn ein Buch kaufen.",
              options: [
                { key: "a", label: "2. Stock" },
                { key: "b", label: "3. Stock" },
                { key: "c", label: "4. Stock" },
              ],
              correct: "c",
              explanation: "„4. Stock — Bücher, Spielwaren, Café“.",
            },
            {
              id: "a2-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie brauchen Milch und Saft.",
              options: [
                { key: "a", label: "Untergeschoss" },
                { key: "b", label: "Erdgeschoss" },
                { key: "c", label: "1. Stock" },
              ],
              correct: "a",
              explanation:
                "„Untergeschoss — Lebensmittel, Getränke“ — oziq-ovqat pastki qavatda.",
            },
            {
              id: "a2-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Sie suchen eine neue Lampe für das Wohnzimmer.",
              options: [
                { key: "a", label: "2. Stock" },
                { key: "b", label: "3. Stock" },
                { key: "c", label: "4. Stock" },
              ],
              correct: "b",
              explanation: "„3. Stock — Küche, Geschirr, Kleinmöbel, Lampen“.",
            },
            {
              id: "a2-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten ein Hemd für Ihren Mann kaufen.",
              options: [
                { key: "a", label: "1. Stock" },
                { key: "b", label: "2. Stock" },
                { key: "c", label: "3. Stock" },
              ],
              correct: "b",
              explanation:
                "Erkaklar kiyimi — „2. Stock — Herrenmode“. 1-qavat ayollar uchun.",
            },
            {
              id: "a2-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie wollen eine Hose umtauschen.",
              options: [
                { key: "a", label: "Erdgeschoss" },
                { key: "b", label: "1. Stock" },
                { key: "c", label: "Untergeschoss" },
              ],
              correct: "a",
              explanation:
                "„Kundenservice und Umtausch: Erdgeschoss, neben der Information.“",
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
          id: "a2l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von Jonas",
            body: `Hallo Dilnoza,

endlich habe ich Zeit zu schreiben! Der Umzug nach Dresden ist geschafft. Die neue Wohnung ist kleiner als die alte, aber sie hat einen Balkon — und die Miete ist sogar etwas günstiger.

Meine neue Arbeit beginnt erst am 1. Oktober. Bis dahin räume ich auf und lerne die Stadt kennen. Das Beste: Die Straßenbahn hält direkt vor dem Haus, ich brauche kein Auto mehr.

Kommst du mich besuchen? Am besten im November, im Oktober bin ich noch nicht eingerichtet. Ein Gästezimmer habe ich leider nicht, aber das Sofa ist bequem.

Schreib mir, wann es dir passt!

Liebe Grüße
Jonas`,
          },
          items: [
            {
              id: "a2-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie ist Jonas’ neue Wohnung?",
              options: [
                { key: "a", label: "Größer als die alte" },
                { key: "b", label: "Kleiner, aber mit Balkon" },
                { key: "c", label: "Teurer als die alte" },
              ],
              correct: "b",
              explanation:
                "„kleiner als die alte, aber sie hat einen Balkon“; ijara ham arzonroq.",
            },
            {
              id: "a2-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wann fängt Jonas mit der neuen Arbeit an?",
              options: [
                { key: "a", label: "Sofort nach dem Umzug" },
                { key: "b", label: "Am 1. Oktober" },
                { key: "c", label: "Im November" },
              ],
              correct: "b",
              explanation: "„Meine neue Arbeit beginnt erst am 1. Oktober.“",
            },
            {
              id: "a2-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Warum braucht Jonas kein Auto?",
              options: [
                { key: "a", label: "Die Straßenbahn hält vor dem Haus." },
                { key: "b", label: "Er fährt jeden Tag mit dem Fahrrad." },
                { key: "c", label: "Sein Büro ist im selben Haus." },
              ],
              correct: "a",
              explanation: "„Die Straßenbahn hält direkt vor dem Haus.“",
            },
            {
              id: "a2-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann soll Dilnoza ihn besuchen?",
              options: [
                { key: "a", label: "Im Oktober" },
                { key: "b", label: "Im November" },
                { key: "c", label: "Erst nächstes Jahr" },
              ],
              correct: "b",
              explanation:
                "„Am besten im November, im Oktober bin ich noch nicht eingerichtet.“",
            },
            {
              id: "a2-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wo kann Dilnoza schlafen?",
              options: [
                { key: "a", label: "In einem Gästezimmer" },
                { key: "b", label: "Auf dem Sofa" },
                { key: "c", label: "In einem Hotel" },
              ],
              correct: "b",
              explanation:
                "„Ein Gästezimmer habe ich leider nicht, aber das Sofa ist bequem.“",
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
      hint: "Bir e’lon faqat bitta vaziyatga. Mos kelmasa — x.",
      bank: [
        { key: "a", label: "Sprachcafé Kurdirektion" },
        { key: "b", label: "Fahrradwerkstatt Rösler" },
        { key: "c", label: "Umzugshilfe Schnell & Fair" },
        { key: "d", label: "Kinderbetreuung Sonnenschein" },
        { key: "e", label: "Deutschkurs am Abend" },
        { key: "f", label: "Zimmer zu vermieten" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Sprachcafé",
                body: "Jeden Donnerstag ab 18 Uhr: Deutsch sprechen bei Kaffee und Kuchen. Kein Unterricht, keine Anmeldung, Eintritt frei. Für alle Niveaus ab A2.",
              },
              {
                key: "b",
                title: "Fahrradwerkstatt Rösler",
                body: "Reparatur in 24 Stunden. Neue Reifen ab 15 €. Mo–Fr 9–18 Uhr, Sa 9–13 Uhr. Auch Gebrauchträder ab 90 €.",
              },
              {
                key: "c",
                title: "Umzugshilfe Schnell & Fair",
                body: "Zwei starke Studenten helfen beim Umzug — auch am Wochenende. 15 € pro Stunde und Person. Transporter vorhanden.",
              },
              {
                key: "d",
                title: "Kinderbetreuung Sonnenschein",
                body: "Wir betreuen Ihr Kind (2–6 Jahre) nachmittags von 14 bis 18 Uhr. Auch stundenweise. Erfahrene Erzieherinnen.",
              },
              {
                key: "e",
                title: "Deutschkurs am Abend",
                body: "Niveau A2 und B1, Dienstag und Donnerstag 18.30–20.00 Uhr. 12 Wochen, 240 €. Anmeldung im Büro oder online.",
              },
              {
                key: "f",
                title: "Zimmer zu vermieten",
                body: "Möbliertes Zimmer, 16 m², in ruhiger Wohnung. 330 € warm, ab sofort frei. Nur an Nichtraucher.",
              },
            ],
          },
          items: [
            {
              id: "a2-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie ziehen am Samstag in eine neue Wohnung und brauchen jemanden, der die Möbel trägt.",
              correct: "c",
              explanation:
                "Ko‘chishda yordam va dam olish kunlari ham ishlaydi — „Umzugshilfe“.",
            },
            {
              id: "a2-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten Deutsch sprechen üben, aber keinen Kurs mit Hausaufgaben machen.",
              correct: "a",
              explanation:
                "„Kein Unterricht, keine Anmeldung“ — Sprachcafé aynan gaplashish uchun.",
            },
            {
              id: "a2-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt: "Ihr Fahrrad hat einen platten Reifen.",
              correct: "b",
              explanation: "„Reparatur in 24 Stunden. Neue Reifen ab 15 €.“",
            },
            {
              id: "a2-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen einen Sportverein, in dem Sie zweimal pro Woche schwimmen können.",
              correct: "x",
              explanation:
                "Hech bir e’lon sport klubi yoki suzish haqida emas — javob x.",
            },
            {
              id: "a2-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie arbeiten bis 17.30 Uhr und möchten trotzdem einen Deutschkurs besuchen.",
              correct: "e",
              explanation:
                "Kechki kurs 18.30 da boshlanadi — ishdan keyin ulgurish mumkin.",
            },
          ],
        },
      ],
    },
  ],
};
