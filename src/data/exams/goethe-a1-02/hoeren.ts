import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 02 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar 01-variantdan butunlay boshqacha: avtobus, kutubxona,
 * mehmonxona, tish shifokori, yo'qolgan buyum.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      hint: "Har matn ikki marta o‘qiladi. Faqat kerakli ma’lumotni tinglang.",
      blocks: [
        {
          id: "a1b-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "An der Bushaltestelle",
            lines: [
              {
                voice: "female",
                text: "Entschuldigung, fährt dieser Bus zum Krankenhaus?",
              },
              {
                voice: "male",
                text: "Nein, die Linie sieben fährt nur zum Bahnhof. Sie brauchen die Linie zwölf.",
              },
              { voice: "female", text: "Also die Zwölf. Vielen Dank!" },
            ],
          },
          items: [
            {
              id: "a1b-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Welchen Bus nimmt die Frau?",
              options: [
                { key: "a", label: "Die Linie 7" },
                { key: "b", label: "Die Linie 12" },
                { key: "c", label: "Die Linie 2" },
              ],
              correct: "b",
              explanation:
                "Ettinchi avtobus faqat vokzalgacha; kasalxonaga borish uchun „Linie zwölf“ kerak.",
            },
          ],
        },
        {
          id: "a1b-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "In der Bibliothek",
            lines: [
              { voice: "male", text: "Guten Tag, ich möchte dieses Buch ausleihen." },
              {
                voice: "female2",
                text: "Gern. Sie können es drei Wochen behalten, nicht vier.",
              },
              { voice: "male", text: "Gut, drei Wochen reichen mir." },
            ],
          },
          items: [
            {
              id: "a1b-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wie lange kann der Mann das Buch behalten?",
              options: [
                { key: "a", label: "Zwei Wochen" },
                { key: "b", label: "Drei Wochen" },
                { key: "c", label: "Vier Wochen" },
              ],
              correct: "b",
              explanation:
                "„drei Wochen behalten, nicht vier“ — inkorni eshitib qolish muhim.",
            },
          ],
        },
        {
          id: "a1b-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "An der Hotelrezeption",
            lines: [
              { voice: "female", text: "Wann gibt es Frühstück?" },
              {
                voice: "male2",
                text: "Von sieben bis zehn Uhr. Am Wochenende sogar bis elf.",
              },
              { voice: "female", text: "Heute ist Dienstag, also bis zehn." },
            ],
          },
          items: [
            {
              id: "a1b-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Bis wann gibt es heute Frühstück?",
              options: [
                { key: "a", label: "Bis 10 Uhr" },
                { key: "b", label: "Bis 11 Uhr" },
                { key: "c", label: "Bis 7 Uhr" },
              ],
              correct: "a",
              explanation:
                "Bugun seshanba — ish kuni, ya’ni 10 gacha. 11 gacha faqat dam olish kunlari.",
            },
          ],
        },
        {
          id: "a1b-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Kino",
            lines: [
              { voice: "male", text: "Zwei Karten für den Film um acht, bitte." },
              {
                voice: "female",
                text: "Das macht neunzehn Euro. Mit Studentenausweis nur vierzehn.",
              },
              { voice: "male", text: "Wir sind beide Studenten. Hier bitte." },
            ],
          },
          items: [
            {
              id: "a1b-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlen die beiden?",
              options: [
                { key: "a", label: "19 Euro" },
                { key: "b", label: "14 Euro" },
                { key: "c", label: "8 Euro" },
              ],
              correct: "b",
              explanation:
                "Ikkalasi ham talaba, shuning uchun chegirmali narx — 14 evro.",
            },
          ],
        },
        {
          id: "a1b-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, hier ist die Zahnarztpraxis Möller. Ihr Termin am Freitag muss leider verschoben werden. Passt Ihnen der Montag um sechzehn Uhr? Bitte rufen Sie zurück.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wann soll der Patient zum Zahnarzt kommen?",
              options: [
                { key: "a", label: "Am Freitag" },
                { key: "b", label: "Am Montag" },
                { key: "c", label: "Am Samstag" },
              ],
              correct: "b",
              explanation:
                "Juma bekor qilingan („verschoben“), yangi taklif — dushanba soat 16 da.",
            },
          ],
        },
        {
          id: "a1b-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "Im Supermarkt",
            lines: [
              { voice: "male", text: "Wo finde ich den Zucker?" },
              {
                voice: "female",
                text: "Der Zucker steht im Regal drei, gleich neben dem Mehl.",
              },
              { voice: "male", text: "Regal drei, danke schön." },
            ],
          },
          items: [
            {
              id: "a1b-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "In welchem Regal steht der Zucker?",
              options: [
                { key: "a", label: "Im Regal 2" },
                { key: "b", label: "Im Regal 3" },
                { key: "c", label: "Im Regal 5" },
              ],
              correct: "b",
              explanation: "„im Regal drei, gleich neben dem Mehl“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      hint: "Bu qismda matn faqat bir marta o‘qiladi.",
      blocks: [
        {
          id: "a1b-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Schwimmbad",
            lines: [
              {
                voice: "female2",
                text: "Liebe Gäste, das Schwimmbad schließt heute schon um achtzehn Uhr. Bitte verlassen Sie das Wasser um Viertel vor sechs.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Das Schwimmbad schließt heute um 18 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„schließt heute schon um achtzehn Uhr“ — 18:00.",
            },
          ],
        },
        {
          id: "a1b-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "male2",
                text: "Meine Damen und Herren, in wenigen Minuten erreichen wir Nürnberg. Der Speisewagen ist heute leider geschlossen.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Man kann im Zug heute etwas essen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Der Speisewagen ist heute leider geschlossen“ — restoran vagoni yopiq.",
            },
          ],
        },
        {
          id: "a1b-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Museum",
            lines: [
              {
                voice: "female",
                text: "Die Führung beginnt um halb drei am Eingang. Bitte warten Sie dort auf Ihre Führerin.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Die Führung beginnt um 14.30 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„halb drei“ — soat 14:30.",
            },
          ],
        },
        {
          id: "a1b-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in der Sprachschule",
            lines: [
              {
                voice: "male",
                text: "Achtung: Der Kurs A1 findet heute im Raum acht statt, nicht im Raum drei. Der Unterricht beginnt wie immer um neun Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Der Unterricht beginnt später als sonst.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Vaqt o‘zgarmagan („wie immer um neun Uhr“) — faqat xona boshqa.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      hint: "Telefon xabarlari va e’lonlar. Sana, vaqt va joyga e’tibor bering.",
      blocks: [
        {
          id: "a1b-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Freundin",
            lines: [
              {
                voice: "female",
                text: "Hallo Dilnoza, ich habe morgen doch keine Zeit am Vormittag. Können wir uns am Nachmittag treffen? Am besten um vier vor der Bibliothek.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wann treffen sich die beiden?",
              options: [
                { key: "a", label: "Am Vormittag" },
                { key: "b", label: "Um 4 Uhr nachmittags" },
                { key: "c", label: "Am Abend" },
              ],
              correct: "b",
              explanation:
                "Ertalab vaqti yo‘q; taklif — tushdan keyin soat to‘rtda kutubxona oldida.",
            },
          ],
        },
        {
          id: "a1b-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Kaufhaus",
            lines: [
              {
                voice: "male2",
                text: "Ein Kind sucht seine Mutter. Der kleine Junge heißt Emil und wartet an der Information im Erdgeschoss.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wo wartet das Kind?",
              options: [
                { key: "a", label: "An der Kasse" },
                { key: "b", label: "An der Information" },
                { key: "c", label: "Vor dem Kaufhaus" },
              ],
              correct: "b",
              explanation: "„wartet an der Information im Erdgeschoss“.",
            },
          ],
        },
        {
          id: "a1b-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Nachbarin",
            lines: [
              {
                voice: "female2",
                text: "Hallo Herr Karimov, ein Paket für Sie ist gekommen. Ich habe es angenommen. Sie können es heute Abend bei mir abholen.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wo ist das Paket?",
              options: [
                { key: "a", label: "Bei der Nachbarin" },
                { key: "b", label: "Bei der Post" },
                { key: "c", label: "Vor der Tür" },
              ],
              correct: "a",
              explanation:
                "Qo‘shni posilkani qabul qilib olgan — kechqurun undan olish mumkin.",
            },
          ],
        },
        {
          id: "a1b-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Radio",
            lines: [
              {
                voice: "male",
                text: "Und jetzt der Verkehr: In der Innenstadt ist die Marktstraße bis Freitag gesperrt. Bitte fahren Sie über die Ringstraße.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Welche Straße ist gesperrt?",
              options: [
                { key: "a", label: "Die Ringstraße" },
                { key: "b", label: "Die Marktstraße" },
                { key: "c", label: "Die Bahnhofstraße" },
              ],
              correct: "b",
              explanation:
                "Marktstraße juma kunigacha yopiq; Ringstraße — aylanma yo‘l.",
            },
          ],
        },
        {
          id: "a1b-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, Fundbüro Bremen. Ihre Tasche ist bei uns. Sie können sie von Montag bis Freitag zwischen neun und sechzehn Uhr abholen.",
              },
            ],
          },
          items: [
            {
              id: "a1b-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann kann man die Tasche abholen?",
              options: [
                { key: "a", label: "Am Wochenende" },
                { key: "b", label: "Montag bis Freitag, 9–16 Uhr" },
                { key: "c", label: "Nur am Montag" },
              ],
              correct: "b",
              explanation: "„von Montag bis Freitag zwischen neun und sechzehn Uhr“.",
            },
          ],
        },
      ],
    },
  ],
};
