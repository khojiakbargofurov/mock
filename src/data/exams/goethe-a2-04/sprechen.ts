import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 04 · Sprechen — 3 Teil, ~15 daqiqa, 20 xom ball.
 * Teil 2 mavzusi "Mein Deutschlernen", Teil 3 birgalikda xarid rejalash.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Fragen zur Person. Sie bekommen vier Karten. Stellen Sie zu jedem Stichwort eine Frage und antworten Sie auf die Fragen Ihrer Partnerin.",
      blocks: [
        {
          id: "a2d-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Haben Sie Geschwister? Wo leben sie?" },
              { voice: "female", text: "Was machen Sie gern in Ihrer Freizeit?" },
            ],
          },
          items: [
            {
              id: "a2d-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 6,
              prepSec: 30,
              speakSec: 150,
              cards: [
                { key: "tagesablauf", label: "Tagesablauf", hint: "Wann …?" },
                { key: "verkehrsmittel", label: "Verkehrsmittel" },
                { key: "urlaub", label: "Urlaub" },
                { key: "musik", label: "Musik" },
              ],
              sample: `Wann stehen Sie normalerweise auf? — Um halb sieben, meine Tochter muss in den Kindergarten.
Womit fahren Sie zur Arbeit? — Mit der Straßenbahn, das dauert eine Viertelstunde.
Wohin fahren Sie im Urlaub? — Meistens nach Usbekistan, zu meinen Eltern.
Welche Musik hören Sie gern? — Ich höre gern usbekische Musik und manchmal Pop.

Antwort auf die Partnerin: Ich habe zwei Brüder, sie leben beide in Namangan. In meiner Freizeit gehe ich schwimmen und treffe Freundinnen.`,
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
                "„Wohin …?“ — yo‘nalish (nach, zu), „Wo …?“ — joy. A2 da bu farq tez-tez tekshiriladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Von sich erzählen. Thema: „Wie ich Deutsch lerne“. Erzählen Sie mithilfe der Stichwörter.",
      hint: "1–2 daqiqa gapiring: qachon boshlagansiz, qanday o‘rganasiz, nima qiyin.",
      blocks: [
        {
          id: "a2d-sp2-b1",
          items: [
            {
              id: "a2d-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "anfang", label: "Wann haben Sie angefangen?" },
                { key: "kurs", label: "Kurs oder allein?" },
                { key: "schwierig", label: "Was ist schwierig?" },
                { key: "hilfe", label: "Was hilft Ihnen?" },
                { key: "ziel", label: "Ihr Ziel" },
              ],
              sample: `Angefangen habe ich vor zwei Jahren, kurz nach meiner Ankunft in Deutschland. Am Anfang konnte ich nur „Guten Tag“ und „Danke“ sagen.

Zuerst habe ich einen Integrationskurs besucht, jeden Vormittag vier Stunden. Jetzt lerne ich vor allem allein, mit einer App und mit Videos.

Schwierig sind für mich die Artikel — der, die, das. Im Usbekischen gibt es das nicht, deshalb muss ich jedes Wort einzeln lernen. Auch die Verben am Satzende waren am Anfang komisch.

Am meisten hilft mir das Sprechen. Ich habe eine Nachbarin, mit der ich jede Woche Kaffee trinke. Sie korrigiert mich, und das ist mir wichtig.

Mein Ziel ist das Zertifikat A2 und danach B1, weil ich in einem Kindergarten arbeiten möchte.`,
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
                  question: "„zuerst“, „jetzt“, „danach“ kabi so‘zlar ishlatildimi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "O‘tgan zamon va sabab („deshalb“, „weil“) ishlatildimi?",
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
                "O‘z tilingiz bilan solishtirish („Im Usbekischen gibt es das nicht“) mavzuni boyitadi va tabiiy eshitiladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam etwas planen. Eine Kollegin bekommt ein Baby. Planen Sie zusammen ein Geschenk und eine kleine Überraschung im Büro.",
      hint: "Taklif qiling, hamkorning taklifiga javob bering, oxirida kelishuvni takrorlang.",
      blocks: [
        {
          id: "a2d-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning gaplari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde Blumen und eine Karte kaufen. Das ist einfach und nicht teuer.",
              },
              {
                voice: "male",
                text: "Und wann machen wir das? Vielleicht am letzten Arbeitstag, gleich morgens um acht?",
              },
            ],
          },
          items: [
            {
              id: "a2d-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 7,
              prepSec: 60,
              speakSec: 150,
              cards: [
                { key: "geschenk", label: "🎁 Was schenken wir?" },
                { key: "geld", label: "💶 Wie viel gibt jeder?" },
                { key: "zeit", label: "🕘 Wann?" },
                { key: "essen", label: "🍰 Kuchen oder Kaffee?" },
              ],
              sample: `Blumen sind schön, aber sie halten nur eine Woche. Wie wäre es, wenn wir zusätzlich einen Gutschein für ein Babygeschäft kaufen? Dann kann sie selbst aussuchen.

Beim Geld schlage ich zehn Euro pro Person vor. Wir sind zwölf im Team, das reicht gut.

Morgens um acht ist mir zu früh — da sind noch nicht alle da. Besser wäre die Mittagspause, so gegen halb eins. Dann sind wir vollzählig.

Ich könnte einen Kuchen backen, und du machst Kaffee. Getränke haben wir ja im Büro.

Also: Blumen, Karte und ein Gutschein, zehn Euro pro Person, in der Mittagspause am letzten Arbeitstag. Bist du einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rt nuqta",
                  question: "Sovg‘a, pul, vaqt va ovqat — to‘rttasi kelishildimi?",
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
                "„Besser wäre …“ — muqobil taklifning eng muloyim shakli, rad etishni yumshatadi.",
            },
          ],
        },
      ],
    },
  ],
};
