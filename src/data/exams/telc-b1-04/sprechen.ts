import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 04 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihren Gesprächspartner noch nicht. Stellen Sie sich vor und stellen Sie ihm Fragen.",
      blocks: [
        {
          id: "b1d-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "male",
                text: "Guten Tag. Mein Name ist Piotr Nowak, ich komme aus Polen und arbeite als Elektriker. Seit fünf Jahren lebe ich in Leipzig. Und Sie? Erzählen Sie etwas von sich.",
              },
              {
                voice: "male",
                text: "Was war für Sie am Anfang in Deutschland am schwierigsten?",
              },
            ],
          },
          items: [
            {
              id: "b1d-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf / Ausbildung" },
                { key: "familie", label: "Familie" },
                { key: "anfang", label: "Anfang in Deutschland" },
                { key: "frage", label: "Fragen an den Partner" },
              ],
              sample: `Guten Tag, Herr Nowak. Ich heiße Deniz Aydin, ich bin in Duisburg geboren, meine Eltern kommen aus der Türkei. Seit drei Jahren wohne ich in Erfurt.

Ich habe lange in Lagern gearbeitet und vor Kurzem meine Ausbildung als Koch nachgeholt. Jetzt arbeite ich in der Küche eines Seniorenheims — mit festen Zeiten, das war mir wichtig.

Ich bin verheiratet und habe einen Sohn, er ist vier.

Am schwierigsten war für mich nicht die Sprache, sondern die Bürokratie: Welches Amt ist wofür zuständig, welche Unterlagen brauche ich? Da habe ich am Anfang viel Zeit verloren.

Darf ich Sie auch etwas fragen? Arbeiten Sie selbstständig oder in einer Firma? Und vermissen Sie Polen manchmal?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Barcha nuqtalar bo‘yicha gapirdingizmi va kamida ikkita savol berdingizmi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Turli tuzilmalar va bog‘lovchilar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "Fe’l shakllari va so‘z tartibi asosan to‘g‘rimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Talaffuz",
                  question: "Tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 3,
                },
              ],
              explanation:
                "„nicht …, sondern …“ tuzilishi javobingizni aniq va qiziqarli qiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Gespräch über ein Thema. Lesen Sie den kurzen Text. Berichten Sie über Ihre Erfahrungen, sagen Sie Ihre Meinung und reagieren Sie auf Ihren Partner.",
      blocks: [
        {
          id: "b1d-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Viele Menschen kaufen heute Kleidung, die sie nur wenige Male tragen. Im Durchschnitt landen in Deutschland jedes Jahr rund 1,3 Millionen Tonnen Kleidung im Müll oder im Altkleidercontainer. Gleichzeitig wächst die Zahl der Second-Hand-Läden und Tauschbörsen. Manche sagen, das ändere wenig; andere finden, jeder kleine Schritt zähle.`,
          },
          items: [
            {
              id: "b1d-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "erfahrung", label: "Ihre Erfahrung" },
                { key: "vorteile", label: "Vorteile" },
                { key: "nachteile", label: "Nachteile" },
                { key: "meinung", label: "Ihre Meinung" },
                { key: "heimat", label: "Wie ist es in Ihrem Heimatland?" },
              ],
              sample: `Ich kaufe selbst nicht viel Kleidung, aber für meinen Sohn ständig — Kinder wachsen so schnell. Vieles davon bekommen wir inzwischen gebraucht von Bekannten oder auf einem Kinderflohmarkt.

Der Vorteil liegt für mich klar beim Geld. Eine gebrauchte Winterjacke kostet zehn Euro statt sechzig, und getragen hat sie ein Kind vielleicht einen Winter lang.

Nachteile gibt es aber auch. Man findet nicht immer die richtige Größe, und man braucht Zeit. Außerdem kenne ich Leute, denen es unangenehm ist, gebrauchte Sachen zu tragen — das muss man respektieren.

In der Türkei, woher meine Eltern kommen, war Weitergeben in der Familie ganz normal. Kleidung wurde von einem Kind zum nächsten weitergereicht, darüber hat niemand nachgedacht.

Meiner Meinung nach ändert der einzelne Kauf wenig, aber die Gewohnheit ändert viel. Wenn Second-Hand normal wird, kaufen die Geschäfte irgendwann anders ein.

Wie machen Sie das? Achten Sie beim Kauf auf so etwas?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Tajriba, ijobiy va salbiy tomonlar hamda fikringiz bormi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Fikr bildirish iboralari va misollar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "O‘tgan zamon va ergash gaplar to‘g‘ri tuzildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Muloqot",
                  question: "Hamkoringizga savol berdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Aniq raqam va misol („zehn Euro statt sechzig“) fikringizni ishonarli qiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. In Ihrem Haus soll ein Hoffest stattfinden. Planen Sie es gemeinsam mit Ihrem Partner.",
      blocks: [
        {
          id: "b1d-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde das Fest am Sonntagnachmittag machen. Da haben die meisten frei.",
              },
              {
                voice: "male",
                text: "Und beim Essen: Wir könnten einen Grill aufstellen. Fleisch bringt jeder selbst mit, was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b1d-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "termin", label: "🗓 Wann?" },
                { key: "essen", label: "🍽 Essen und Getränke" },
                { key: "kinder", label: "🧒 Programm für Kinder" },
                { key: "aufbau", label: "🪑 Wer baut auf und räumt auf?" },
                { key: "einladung", label: "✉️ Wie laden wir ein?" },
              ],
              sample: `Sonntagnachmittag finde ich gut. Ich würde allerdings um vier anfangen, nicht schon um zwei — dann ist es nicht so heiß.

Beim Grill bin ich vorsichtig: Im Haus wohnen mehrere Familien, die kein Schweinefleisch essen. Wie wäre es, wenn wir zwei Grills aufstellen oder einfach ein Buffet machen? Jeder bringt etwas mit, dann ist für alle etwas dabei.

Für die Kinder könnten wir eine Ecke mit Kreide und Seifenblasen machen. Frau Weber hat auch ein kleines Zelt, das könnten wir aufstellen.

Beim Aufbau würde ich sagen: Wer um drei Zeit hat, kommt eine Stunde früher. Aufräumen machen wir alle gemeinsam, das dauert dann nur zwanzig Minuten.

Einladen würde ich mit einem Zettel im Treppenhaus und zusätzlich in der Hausgruppe im Messenger — nicht alle lesen den Aushang.

Also: Sonntag um vier, Buffet statt Grill, Kinderecke, gemeinsames Aufräumen, Einladung im Treppenhaus und online. Passt das für Sie?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (vaqt, ovqat, bolalar, tayyorgarlik, taklif) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question: "Hamkorning ikkala taklifiga munosabat bildirdingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif va kelishuv iboralari ishlatildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni umumlashtirdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Boshqalarning ehtiyojini hisobga olib e’tiroz bildirish („die kein Schweinefleisch essen“) muzokarada juda yaxshi baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
