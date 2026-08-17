import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 02 · Lesen — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da xalq universiteti (Volkshochschule) kurslar jadvali,
 * Teil 4 da bo'sh vaqt va uy ishlariga oid e'lonlar.
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
          id: "a2b-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `40 Kilometer am Tag — mit dem Rad zur Arbeit

Jeden Morgen um Viertel nach fünf steht Martin Kube auf. Um sechs sitzt er auf dem Rad und fährt 20 Kilometer zur Arbeit — bei Regen, bei Wind und im Winter auch bei Schnee. Am Abend fährt er die gleiche Strecke zurück.

Angefangen hat alles vor vier Jahren. „Mein Auto war kaputt, und die Reparatur war teuer“, erzählt der 45-jährige Elektriker. „Ich wollte es zwei Wochen mit dem Rad probieren. Danach habe ich das Auto verkauft.“

Er spart dadurch etwa 200 Euro im Monat. Wichtiger findet er aber etwas anderes: „Ich bin viel seltener krank als früher. Und nach der Arbeit bin ich nicht mehr müde, sondern wach.“

Nicht alles ist leicht. Im Dezember fährt er im Dunkeln, und die Kollegen haben ihn am Anfang ausgelacht. Heute kommen zwei von ihnen ebenfalls mit dem Rad.`,
          },
          items: [
            {
              id: "a2b-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Warum hat Martin Kube mit dem Radfahren angefangen?",
              options: [
                { key: "a", label: "Sein Auto war kaputt." },
                { key: "b", label: "Sein Arzt hat es empfohlen." },
                { key: "c", label: "Er wollte Sport machen." },
              ],
              correct: "a",
              explanation:
                "„Mein Auto war kaputt, und die Reparatur war teuer“ — sabab shu.",
            },
            {
              id: "a2b-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wie weit fährt er jeden Tag insgesamt?",
              options: [
                { key: "a", label: "20 Kilometer" },
                { key: "b", label: "40 Kilometer" },
                { key: "c", label: "60 Kilometer" },
              ],
              correct: "b",
              explanation: "Bir tomonga 20 km, qaytishda ham 20 km — jami 40 km.",
            },
            {
              id: "a2b-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Was ist für ihn am wichtigsten?",
              options: [
                { key: "a", label: "Das gesparte Geld" },
                { key: "b", label: "Seine Gesundheit" },
                { key: "c", label: "Die Meinung der Kollegen" },
              ],
              correct: "b",
              explanation:
                "Pulni tejashdan ko‘ra muhimi: „Ich bin viel seltener krank als früher.“",
            },
            {
              id: "a2b-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was war am Anfang schwierig?",
              options: [
                { key: "a", label: "Die Kollegen haben gelacht." },
                { key: "b", label: "Er hatte kein Fahrrad." },
                { key: "c", label: "Der Weg war zu lang." },
              ],
              correct: "a",
              explanation: "„die Kollegen haben ihn am Anfang ausgelacht“.",
            },
            {
              id: "a2b-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie ist es heute im Betrieb?",
              options: [
                { key: "a", label: "Niemand fährt mehr Rad." },
                { key: "b", label: "Zwei Kollegen fahren auch mit dem Rad." },
                { key: "c", label: "Alle Kollegen fahren mit dem Rad." },
              ],
              correct: "b",
              explanation: "„Heute kommen zwei von ihnen ebenfalls mit dem Rad.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Kursplan der Volkshochschule. In welchen Raum gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      hint: "Har savolda kerakli kurs qaysi xonada ekanini toping.",
      blocks: [
        {
          id: "a2b-l2-b1",
          stimulus: {
            kind: "text",
            title: "Volkshochschule Leipzig · Kursplan",
            body: `Raum 101 — Deutsch A1 und A2 (Mo–Do, 18–20 Uhr)
Raum 102 — Deutsch B1 und B2 (Mo–Do, 18–20 Uhr)
Raum 105 — Computerkurse: Internet, E-Mail, Behördenformulare (Di und Do, 17–19 Uhr)
Raum 201 — Kochen international (Mi, 18–21 Uhr)
Raum 203 — Yoga und Rückengymnastik (Mo und Fr, 19–20 Uhr)
Raum 204 — Nähen für Anfänger (Do, 17–20 Uhr)
Sekretariat — Anmeldung, Bezahlung, Bescheinigungen (Mo–Fr, 9–15 Uhr)`,
          },
          items: [
            {
              id: "a2b-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten sich für einen Kurs anmelden und bezahlen.",
              options: [
                { key: "a", label: "Sekretariat" },
                { key: "b", label: "Raum 101" },
                { key: "c", label: "Raum 105" },
              ],
              correct: "a",
              explanation: "„Sekretariat — Anmeldung, Bezahlung, Bescheinigungen“.",
            },
            {
              id: "a2b-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie haben das Niveau A2 und suchen Ihren Deutschkurs.",
              options: [
                { key: "a", label: "Raum 101" },
                { key: "b", label: "Raum 102" },
                { key: "c", label: "Raum 201" },
              ],
              correct: "a",
              explanation: "A1 va A2 — 101-xona; 102 esa B1/B2 uchun.",
            },
            {
              id: "a2b-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten lernen, wie man Formulare am Computer ausfüllt.",
              options: [
                { key: "a", label: "Raum 102" },
                { key: "b", label: "Raum 105" },
                { key: "c", label: "Raum 204" },
              ],
              correct: "b",
              explanation:
                "„Computerkurse: Internet, E-Mail, Behördenformulare“ — 105-xona.",
            },
            {
              id: "a2b-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Ihr Rücken tut oft weh und Sie möchten etwas dagegen tun.",
              options: [
                { key: "a", label: "Raum 201" },
                { key: "b", label: "Raum 203" },
                { key: "c", label: "Raum 204" },
              ],
              correct: "b",
              explanation: "„Yoga und Rückengymnastik“ — 203-xona.",
            },
            {
              id: "a2b-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie haben nur mittwochs Zeit und interessieren sich fürs Essen.",
              options: [
                { key: "a", label: "Raum 201" },
                { key: "b", label: "Raum 105" },
                { key: "c", label: "Raum 203" },
              ],
              correct: "a",
              explanation: "„Kochen international (Mi, 18–21 Uhr)“ — chorshanba.",
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
          id: "a2b-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von Sabine",
            body: `Hallo Timur,

endlich habe ich gute Nachrichten: Ich habe die Stelle in der Klinik bekommen! Ab dem 1. März arbeite ich dort als Physiotherapeutin.

Die Arbeitszeiten sind besser als jetzt — kein Wochenende mehr, dafür manchmal Frühdienst ab sechs Uhr. Das Gehalt ist ungefähr gleich, aber der Weg ist viel kürzer: 15 Minuten mit dem Fahrrad statt 50 Minuten mit dem Bus.

Am Freitag mache ich eine kleine Feier bei mir, so ab 19 Uhr. Kannst du kommen? Bring bitte nichts mit, ich koche selbst. Nur wenn du magst, bring deine Gitarre mit.

Sag mir bis Mittwoch Bescheid, dann weiß ich, wie viel ich einkaufen muss.

Liebe Grüße
Sabine`,
          },
          items: [
            {
              id: "a2b-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was ist Sabines gute Nachricht?",
              options: [
                { key: "a", label: "Sie hat eine neue Stelle." },
                { key: "b", label: "Sie zieht um." },
                { key: "c", label: "Sie hat ein Fahrrad gekauft." },
              ],
              correct: "a",
              explanation: "„Ich habe die Stelle in der Klinik bekommen!“",
            },
            {
              id: "a2b-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was ändert sich bei den Arbeitszeiten?",
              options: [
                { key: "a", label: "Sie arbeitet mehr am Wochenende." },
                { key: "b", label: "Sie arbeitet nicht mehr am Wochenende." },
                { key: "c", label: "Sie arbeitet nur noch abends." },
              ],
              correct: "b",
              explanation:
                "„kein Wochenende mehr, dafür manchmal Frühdienst ab sechs Uhr“.",
            },
            {
              id: "a2b-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was sagt Sabine über den Weg zur Arbeit?",
              options: [
                { key: "a", label: "Er wird deutlich kürzer." },
                { key: "b", label: "Er bleibt gleich lang." },
                { key: "c", label: "Er wird länger." },
              ],
              correct: "a",
              explanation: "15 daqiqa velosipedda — ilgari 50 daqiqa avtobusda.",
            },
            {
              id: "a2b-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was soll Timur zur Feier mitbringen?",
              options: [
                { key: "a", label: "Essen und Getränke" },
                { key: "b", label: "Nichts, höchstens seine Gitarre" },
                { key: "c", label: "Einen Kuchen" },
              ],
              correct: "b",
              explanation:
                "„Bring bitte nichts mit … Nur wenn du magst, bring deine Gitarre mit.“",
            },
            {
              id: "a2b-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Bis wann soll Timur antworten?",
              options: [
                { key: "a", label: "Bis Mittwoch" },
                { key: "b", label: "Bis Freitag" },
                { key: "c", label: "Bis zum 1. März" },
              ],
              correct: "a",
              explanation: "„Sag mir bis Mittwoch Bescheid“.",
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
        { key: "a", label: "Hundesitter gesucht" },
        { key: "b", label: "Gitarrenunterricht" },
        { key: "c", label: "Wohnungsreinigung" },
        { key: "d", label: "Fahrrad-Selbsthilfewerkstatt" },
        { key: "e", label: "Kleiderbörse" },
        { key: "f", label: "Gartenhilfe gesucht" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2b-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Hundesitter gesucht",
                body: "Wir suchen jemanden, der unseren ruhigen Hund zweimal pro Woche nachmittags ausführt. 12 € pro Stunde, Stadtteil Süd.",
              },
              {
                key: "b",
                title: "Gitarrenunterricht",
                body: "Musiklehrerin gibt Unterricht für Anfänger, auch für Erwachsene. Dienstag und Freitag ab 17 Uhr, 20 € pro Stunde.",
              },
              {
                key: "c",
                title: "Wohnungsreinigung",
                body: "Zuverlässige Reinigung Ihrer Wohnung, wöchentlich oder alle zwei Wochen. Ab 18 € pro Stunde, eigene Mittel.",
              },
              {
                key: "d",
                title: "Fahrrad-Selbsthilfewerkstatt",
                body: "Samstags 10–14 Uhr können Sie Ihr Rad selbst reparieren. Werkzeug und Hilfe kostenlos, Ersatzteile gegen Spende.",
              },
              {
                key: "e",
                title: "Kleiderbörse",
                body: "Jeden ersten Sonntag im Monat: gebrauchte Kleidung für Kinder und Erwachsene, sehr günstig. Gemeindehaus, 11–16 Uhr.",
              },
              {
                key: "f",
                title: "Gartenhilfe gesucht",
                body: "Rentnerehepaar sucht Hilfe im Garten: Rasen mähen, Hecke schneiden. Etwa alle zwei Wochen, 15 € pro Stunde.",
              },
            ],
          },
          items: [
            {
              id: "a2b-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihr Fahrrad hat eine kaputte Bremse und Sie möchten es selbst reparieren, haben aber kein Werkzeug.",
              correct: "d",
              explanation:
                "„Werkzeug und Hilfe kostenlos“ — o‘zi ta’mirlash ustaxonasi.",
            },
            {
              id: "a2b-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Kinder wachsen schnell und Sie brauchen günstige Kleidung für sie.",
              correct: "e",
              explanation: "Bolalar uchun arzon, ishlatilgan kiyim bozori.",
            },
            {
              id: "a2b-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie sind 35 und möchten endlich ein Instrument lernen, aber nur nach der Arbeit.",
              correct: "b",
              explanation:
                "Kattalar uchun ham, soat 17 dan keyin — ishdan keyin mos.",
            },
            {
              id: "a2b-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen einen Nebenjob am Nachmittag und mögen Tiere sehr.",
              correct: "a",
              explanation: "Itni sayr qildirish — tushdan keyingi qo‘shimcha ish.",
            },
            {
              id: "a2b-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten in den Ferien Ihre Katze zu jemandem geben, der auf sie aufpasst.",
              correct: "x",
              explanation:
                "E’lonlar orasida mushuk parvarishi haqida hech narsa yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
