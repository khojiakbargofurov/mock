import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 04 · Lesen — 4 Teil, 20 element, 30 daqiqa.
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
          id: "a2d-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `Mit 46 noch einmal von vorn

Zwanzig Jahre lang hat Petra Lindner in einer Bäckerei gearbeitet, zuletzt als Filialleiterin. Dann bekam sie Probleme mit dem Rücken. „Ich konnte die Kisten nicht mehr heben. Der Arzt hat gesagt: So geht es nicht weiter.“

Heute, drei Jahre später, sitzt die 46-Jährige im Büro einer Versicherung. Der Weg dahin war nicht einfach. Zuerst musste sie sich informieren, welche Umschulung ihr überhaupt bezahlt wird. „Das dauert. Man braucht Geduld und viele Termine.“

Die Umschulung selbst hat zwei Jahre gedauert, mit Unterricht am Vormittag und Praktikum am Nachmittag. Am schwersten fiel ihr der Computer. „Meine Tochter hat mir am Anfang jeden Abend geholfen.“

Das Gehalt ist heute etwas niedriger als früher. Trotzdem bereut sie nichts: „Ich habe geregelte Zeiten, keine Nachtschicht mehr, und mein Rücken ist ruhig.“

Anderen rät sie, nicht zu lange zu warten: „Viele bleiben, bis gar nichts mehr geht. Mit 46 findet man noch etwas. Mit 56 wird es schwerer.“`,
          },
          items: [
            {
              id: "a2d-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Warum hat Petra Lindner ihren Beruf gewechselt?",
              options: [
                { key: "a", label: "Wegen gesundheitlicher Probleme" },
                { key: "b", label: "Weil sie zu wenig verdient hat" },
                { key: "c", label: "Weil die Bäckerei geschlossen hat" },
              ],
              correct: "a",
              explanation: "„Probleme mit dem Rücken … So geht es nicht weiter.“",
            },
            {
              id: "a2d-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was war am Anfang schwierig?",
              options: [
                { key: "a", label: "Eine neue Wohnung zu finden" },
                { key: "b", label: "Informationen und Termine" },
                { key: "c", label: "Die Prüfung zu bestehen" },
              ],
              correct: "b",
              explanation: "„Man braucht Geduld und viele Termine.“",
            },
            {
              id: "a2d-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wie lange hat die Umschulung gedauert?",
              options: [
                { key: "a", label: "Ein Jahr" },
                { key: "b", label: "Zwei Jahre" },
                { key: "c", label: "Drei Jahre" },
              ],
              correct: "b",
              explanation: "„Die Umschulung selbst hat zwei Jahre gedauert.“",
            },
            {
              id: "a2d-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sagt sie über ihr Gehalt?",
              options: [
                { key: "a", label: "Es ist höher als früher." },
                { key: "b", label: "Es ist etwas niedriger." },
                { key: "c", label: "Es ist genau gleich." },
              ],
              correct: "b",
              explanation: "„Das Gehalt ist heute etwas niedriger als früher.“",
            },
            {
              id: "a2d-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was rät sie anderen?",
              options: [
                { key: "a", label: "Nicht zu lange zu warten" },
                { key: "b", label: "Immer im Beruf zu bleiben" },
                { key: "c", label: "Erst mit 56 zu wechseln" },
              ],
              correct: "a",
              explanation: "„Viele bleiben, bis gar nichts mehr geht.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Plan des Bürgerbüros. Wohin gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2d-l2-b1",
          stimulus: {
            kind: "text",
            title: "Bürgerbüro Erfurt · Wegweiser",
            body: `Schalter 1–3 — Anmeldung und Ummeldung der Wohnung
Schalter 4 — Ausweise und Reisepässe (Abholung Mo–Fr 8–12 Uhr)
Schalter 5 — Führerschein: Anträge und Umschreibung
Schalter 6 — Beglaubigungen und Kopien
Zimmer 12 — Kindergeld und Familienleistungen
Zimmer 15 — Wohngeld (nur mit Termin)
Kasse im Erdgeschoss — alle Gebühren (Karte und bar)`,
          },
          items: [
            {
              id: "a2d-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Sie sind umgezogen und müssen Ihre neue Adresse melden.",
              options: [
                { key: "a", label: "Schalter 1–3" },
                { key: "b", label: "Schalter 5" },
                { key: "c", label: "Zimmer 15" },
              ],
              correct: "a",
              explanation: "„Anmeldung und Ummeldung der Wohnung“.",
            },
            {
              id: "a2d-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Ihr neuer Reisepass ist fertig und Sie wollen ihn abholen.",
              options: [
                { key: "a", label: "Schalter 4" },
                { key: "b", label: "Schalter 6" },
                { key: "c", label: "Zimmer 12" },
              ],
              correct: "a",
              explanation: "„Ausweise und Reisepässe (Abholung Mo–Fr 8–12 Uhr)“.",
            },
            {
              id: "a2d-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten Ihren usbekischen Führerschein umschreiben lassen.",
              options: [
                { key: "a", label: "Schalter 4" },
                { key: "b", label: "Schalter 5" },
                { key: "c", label: "Kasse" },
              ],
              correct: "b",
              explanation: "„Führerschein: Anträge und Umschreibung“.",
            },
            {
              id: "a2d-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Ihr Kind ist geboren und Sie möchten Kindergeld beantragen.",
              options: [
                { key: "a", label: "Zimmer 12" },
                { key: "b", label: "Zimmer 15" },
                { key: "c", label: "Schalter 6" },
              ],
              correct: "a",
              explanation: "„Zimmer 12 — Kindergeld und Familienleistungen“.",
            },
            {
              id: "a2d-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie brauchen eine beglaubigte Kopie Ihres Zeugnisses.",
              options: [
                { key: "a", label: "Schalter 1–3" },
                { key: "b", label: "Schalter 6" },
                { key: "c", label: "Kasse" },
              ],
              correct: "b",
              explanation: "„Schalter 6 — Beglaubigungen und Kopien“.",
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
          id: "a2d-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von der Hausverwaltung",
            body: `Sehr geehrte Mieterinnen und Mieter,

wie angekündigt beginnen am 6. Mai die Arbeiten am Treppenhaus. Die Arbeiten dauern voraussichtlich drei Wochen.

In dieser Zeit ist der Aufzug von 8 bis 16 Uhr außer Betrieb. Abends und am Wochenende können Sie ihn normal benutzen.

Bitte stellen Sie in dieser Zeit keine Schuhe, Kinderwagen oder Pflanzen ins Treppenhaus. Die Handwerker brauchen Platz.

Wer im Erdgeschoss wohnt, bekommt eine Woche vorher noch eine gesonderte Information, weil dort auch die Haustür getauscht wird.

Für Rückfragen erreichen Sie uns montags und donnerstags von 9 bis 12 Uhr.

Mit freundlichen Grüßen
Hausverwaltung Brunner`,
          },
          items: [
            {
              id: "a2d-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie lange dauern die Arbeiten?",
              options: [
                { key: "a", label: "Eine Woche" },
                { key: "b", label: "Etwa drei Wochen" },
                { key: "c", label: "Drei Monate" },
              ],
              correct: "b",
              explanation: "„dauern voraussichtlich drei Wochen“.",
            },
            {
              id: "a2d-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wann kann man den Aufzug benutzen?",
              options: [
                { key: "a", label: "Gar nicht" },
                { key: "b", label: "Nur vormittags" },
                { key: "c", label: "Abends und am Wochenende" },
              ],
              correct: "c",
              explanation: "8–16 ishlamaydi; kechqurun va dam olish kunlari ishlaydi.",
            },
            {
              id: "a2d-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was sollen die Mieter tun?",
              options: [
                { key: "a", label: "Das Treppenhaus frei halten" },
                { key: "b", label: "Die Wohnung verlassen" },
                { key: "c", label: "Die Handwerker bezahlen" },
              ],
              correct: "a",
              explanation: "„keine Schuhe, Kinderwagen oder Pflanzen ins Treppenhaus“.",
            },
            {
              id: "a2d-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wer bekommt eine zusätzliche Information?",
              options: [
                { key: "a", label: "Alle Mieter" },
                { key: "b", label: "Die Mieter im Erdgeschoss" },
                { key: "c", label: "Nur neue Mieter" },
              ],
              correct: "b",
              explanation: "Birinchi qavat aholisi — u yerda eshik ham almashtiriladi.",
            },
            {
              id: "a2d-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann ist die Hausverwaltung erreichbar?",
              options: [
                { key: "a", label: "Täglich von 9 bis 12 Uhr" },
                { key: "b", label: "Montags und donnerstags vormittags" },
                { key: "c", label: "Nur per E-Mail" },
              ],
              correct: "b",
              explanation: "„montags und donnerstags von 9 bis 12 Uhr“.",
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
        { key: "a", label: "Fahrradkurs für Erwachsene" },
        { key: "b", label: "Gebrauchte Kinderkleidung" },
        { key: "c", label: "Computerhilfe zu Hause" },
        { key: "d", label: "Gemeinschaftsgarten" },
        { key: "e", label: "Nähmaschine zu verleihen" },
        { key: "f", label: "Begleitung zu Behörden" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2d-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fahrradkurs für Erwachsene",
                body: "Sie können nicht Fahrrad fahren? Wir bringen es Ihnen bei — in kleinen Gruppen, samstags 10–12 Uhr. Räder werden gestellt, 40 € für acht Termine.",
              },
              {
                key: "b",
                title: "Gebrauchte Kinderkleidung",
                body: "Jeden zweiten Samstag im Monat: Kleidung, Schuhe und Spielzeug für Kinder von 0 bis 12 Jahren, sehr günstig. Im Gemeindehaus, 10–15 Uhr.",
              },
              {
                key: "c",
                title: "Computerhilfe zu Hause",
                body: "Ich helfe bei Drucker, WLAN und E-Mail — auch bei Ihnen zu Hause. Abends und am Wochenende, 20 € pro Stunde.",
              },
              {
                key: "d",
                title: "Gemeinschaftsgarten",
                body: "Auf unserer Fläche am Nordbahnhof sind noch drei Beete frei. 30 € im Jahr, Wasser und Werkzeug vorhanden. Mithilfe bei Gemeinschaftsarbeiten erwünscht.",
              },
              {
                key: "e",
                title: "Nähmaschine zu verleihen",
                body: "Verleihe meine Nähmaschine tageweise, 5 € pro Tag. Kurze Einführung inklusive. Abholung im Stadtteil Süd.",
              },
              {
                key: "f",
                title: "Begleitung zu Behörden",
                body: "Ehrenamtliche begleiten Sie zum Amt und helfen beim Ausfüllen von Formularen. Kostenlos, Anmeldung im Nachbarschaftszentrum.",
              },
            ],
          },
          items: [
            {
              id: "a2d-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie verstehen einen Brief vom Amt nicht und trauen sich nicht allein hin.",
              correct: "f",
              explanation: "Ixtiyoriylar idoraga hamrohlik qiladi va blanka to‘ldirishga yordam beradi.",
            },
            {
              id: "a2d-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihr Drucker funktioniert nicht und Sie kennen sich mit Technik nicht aus.",
              correct: "c",
              explanation: "Uyga kelib kompyuter bo‘yicha yordam beradi.",
            },
            {
              id: "a2d-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie sind 35 und haben als Kind nie Fahrrad fahren gelernt.",
              correct: "a",
              explanation: "Kattalar uchun velosiped kursi.",
            },
            {
              id: "a2d-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten Gemüse anbauen, haben aber keinen eigenen Garten.",
              correct: "d",
              explanation: "Jamoa bog‘ida uchta bo‘sh maydoncha bor.",
            },
            {
              id: "a2d-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen für Ihre Tochter einen Platz im Musikunterricht.",
              correct: "x",
              explanation: "E’lonlar orasida musiqa darsi yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
