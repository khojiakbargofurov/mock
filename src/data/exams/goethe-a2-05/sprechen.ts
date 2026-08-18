import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 05 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball.
 * Teil 2 mavzusi "Mein Weg zur Arbeit", Teil 3 birgalikda ko'chishga yordam.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihres Partners.",
      blocks: [
        {
          id: "a2e-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Wie lange wohnen Sie schon in dieser Stadt?" },
              { voice: "male", text: "Was gefällt Ihnen hier am besten?" },
            ],
          },
          items: [
            {
              id: "a2e-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "wohnung", label: "Wohnung", hint: "Wie viele …?" },
                { key: "nachbarn", label: "Nachbarn" },
                { key: "einkaufen", label: "Einkaufen" },
                { key: "wochenende", label: "Wochenende" },
              ],
              sample: `Wie viele Zimmer hat Ihre Wohnung? — Drei Zimmer, für uns drei reicht das gut.
Kennen Sie Ihre Nachbarn? — Ja, besonders die Familie über uns.
Wo kaufen Sie ein? — Meistens im Supermarkt um die Ecke, samstags auf dem Markt.
Was machen Sie am Wochenende? — Wir gehen oft in den Park oder besuchen Freunde.

Antwort auf den Partner: In Leipzig wohne ich seit zwei Jahren. Am besten gefällt mir, dass alles nah ist — Arbeit, Schule und Einkauf.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question: "Har kartochka bo‘yicha to‘g‘ri savol tuzdingizmi?",
                  points: 3,
                },
                {
                  id: "c2",
                  label: "Javoblar",
                  question: "Hamkorning savollariga to‘liq javob berdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Talaffuz va sur’at tushunarlimi?",
                  points: 1,
                },
              ],
              explanation:
                "„Am besten gefällt mir, dass …“ — fikrni bildirishning A2 uchun juda foydali tuzilmasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Mein Weg zur Arbeit“. Erzählen Sie mithilfe der Stichwörter.",
      blocks: [
        {
          id: "a2e-sp2-b1",
          items: [
            {
              id: "a2e-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "verkehrsmittel", label: "Womit fahren Sie?" },
                { key: "dauer", label: "Wie lange dauert es?" },
                { key: "abfahrt", label: "Wann fahren Sie los?" },
                { key: "probleme", label: "Probleme unterwegs" },
                { key: "frueher", label: "Wie war es früher?" },
              ],
              sample: `Ich fahre mit der Straßenbahn zur Arbeit, Linie neun. Manchmal, wenn das Wetter gut ist, nehme ich das Fahrrad.

Der Weg dauert ungefähr fünfundzwanzig Minuten. Mit dem Rad brauche ich sogar etwas weniger, aber dann muss ich mich umziehen.

Ich fahre morgens um Viertel nach sechs los, weil meine Schicht um sieben beginnt. Um diese Zeit ist die Bahn noch ziemlich leer.

Probleme gibt es vor allem im Winter. Letztes Jahr ist die Bahn wegen des Schnees zweimal gar nicht gekommen. Da bin ich zu spät gekommen und musste die Zeit nacharbeiten.

Früher, in Usbekistan, bin ich immer mit dem Auto gefahren. Hier brauche ich kein Auto — das spart viel Geld.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha kartochkalar",
                  question: "Beshta kartochka bo‘yicha ham gapirdingizmi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Bog‘langan nutq",
                  question: "„manchmal“, „vor allem“, „früher“ kabi so‘zlar ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "O‘tgan zamon va sabab („weil“) ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "Davomiylik",
                  question: "Kamida bir daqiqa to‘xtamasdan gapira oldingizmi?",
                  points: 1,
                },
              ],
              explanation:
                "Vositalar „mit + Dativ“ bilan: mit der Straßenbahn, mit dem Fahrrad, mit dem Auto.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Eine Freundin zieht am Samstag um. Planen Sie zusammen, wie Sie ihr helfen.",
      blocks: [
        {
          id: "a2e-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde sagen, wir fangen um acht Uhr morgens an. Dann sind wir mittags fertig.",
              },
              {
                voice: "female",
                text: "Und einen Transporter brauchen wir. Sollen wir einen mieten oder fragen wir jemanden mit einem großen Auto?",
              },
            ],
          },
          items: [
            {
              id: "a2e-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "zeit", label: "🕗 Wann fangen wir an?" },
                { key: "transport", label: "🚚 Transporter?" },
                { key: "helfer", label: "👥 Wer hilft noch?" },
                { key: "essen", label: "🍕 Essen für alle" },
              ],
              sample: `Acht Uhr ist mir etwas früh, ehrlich gesagt. Wie wäre es, wenn wir um neun anfangen? Dann sind wir trotzdem am Nachmittag fertig.

Einen Transporter zu mieten kostet etwa siebzig Euro für einen Tag. Mein Kollege hat aber einen großen Bus — ich kann ihn fragen. Wenn er nicht kann, mieten wir einen.

Als Helfer würde ich noch Timur und seine Frau fragen. Zu viert oder zu fünft geht es viel schneller.

Beim Essen schlage ich vor: Wir bestellen mittags Pizza, das ist einfach. Getränke bringe ich mit, ich habe noch Wasser und Saft zu Hause.

Also: Samstag um neun, ich frage wegen des Busses, Timur und seine Frau helfen mit, und mittags gibt es Pizza. Einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question:
                    "Vaqt, transport, yordamchilar va ovqat — to‘rttasi kelishildimi?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question: "Hamkorning ikkala gapiga munosabat bildirdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif iboralari ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni takrorladingizmi?",
                  points: 1,
                },
              ],
              explanation:
                "„ehrlich gesagt“ — o‘z fikringizni yumshoq bildirish uchun juda foydali ibora.",
            },
          ],
        },
      ],
    },
  ],
};
