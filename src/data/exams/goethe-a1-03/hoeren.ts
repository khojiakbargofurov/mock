import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 03 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar: pochta, do'kon, maktab, vokzal, ish joyi — 01 va 02 dan boshqacha.
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
      hint: "Savolni oldin o‘qing — matnda faqat bitta ma’lumot kerak bo‘ladi.",
      blocks: [
        {
          id: "a1c-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Bei der Post",
            lines: [
              { voice: "female", text: "Guten Tag, wie lange dauert das Paket nach Usbekistan?" },
              { voice: "male", text: "Mit der normalen Post zwei Wochen, mit Express fünf Tage." },
              { voice: "female", text: "Dann nehme ich Express." },
            ],
          },
          items: [
            {
              id: "a1c-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wie lange dauert das Paket?",
              options: [
                { key: "a", label: "Fünf Tage" },
                { key: "b", label: "Zwei Wochen" },
                { key: "c", label: "Einen Monat" },
              ],
              correct: "a",
              explanation: "Ayol „Express“ ni tanladi — u besh kun.",
            },
          ],
        },
        {
          id: "a1c-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Supermarkt",
            lines: [
              { voice: "male2", text: "Entschuldigung, wo finde ich Milch?" },
              { voice: "female2", text: "Ganz hinten links, neben dem Käse." },
              { voice: "male2", text: "Hinten links, danke." },
            ],
          },
          items: [
            {
              id: "a1c-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wo ist die Milch?",
              options: [
                { key: "a", label: "Vorne rechts" },
                { key: "b", label: "Hinten links" },
                { key: "c", label: "Neben dem Eingang" },
              ],
              correct: "b",
              explanation: "„Ganz hinten links, neben dem Käse.“",
            },
          ],
        },
        {
          id: "a1c-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Anruf in der Schule",
            lines: [
              { voice: "female", text: "Guten Morgen, mein Sohn Emil kommt heute nicht. Er hat Fieber." },
              { voice: "male", text: "Danke für die Information. Kommt er morgen wieder?" },
              { voice: "female", text: "Nein, wahrscheinlich erst am Donnerstag." },
            ],
          },
          items: [
            {
              id: "a1c-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt Emil wieder in die Schule?",
              options: [
                { key: "a", label: "Heute Nachmittag" },
                { key: "b", label: "Morgen" },
                { key: "c", label: "Am Donnerstag" },
              ],
              correct: "c",
              explanation: "„wahrscheinlich erst am Donnerstag“.",
            },
          ],
        },
        {
          id: "a1c-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Am Bahnhof",
            lines: [
              { voice: "male2", text: "Eine Fahrkarte nach Dresden, bitte." },
              { voice: "female", text: "Einfach oder hin und zurück?" },
              { voice: "male2", text: "Hin und zurück. Was kostet das?" },
              { voice: "female", text: "Achtunddreißig Euro." },
            ],
          },
          items: [
            {
              id: "a1c-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was kostet die Fahrkarte?",
              options: [
                { key: "a", label: "28 Euro" },
                { key: "b", label: "38 Euro" },
                { key: "c", label: "48 Euro" },
              ],
              correct: "b",
              explanation: "„Achtunddreißig Euro“ = 38.",
            },
          ],
        },
        {
          id: "a1c-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Im Büro",
            lines: [
              { voice: "female2", text: "Herr Klein, wann ist die Besprechung?" },
              { voice: "male", text: "Eigentlich um zehn, aber sie beginnt erst um halb elf." },
              { voice: "female2", text: "Gut, dann habe ich noch Zeit." },
            ],
          },
          items: [
            {
              id: "a1c-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wann beginnt die Besprechung?",
              options: [
                { key: "a", label: "Um 10.00 Uhr" },
                { key: "b", label: "Um 10.30 Uhr" },
                { key: "c", label: "Um 11.00 Uhr" },
              ],
              correct: "b",
              explanation: "„halb elf“ — soat 10:30 (11 gacha yarim soat).",
            },
          ],
        },
        {
          id: "a1c-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "Beim Bäcker",
            lines: [
              { voice: "male2", text: "Ich hätte gern vier Brötchen und ein Brot." },
              { voice: "female", text: "Tut mir leid, Brot haben wir heute nicht mehr." },
              { voice: "male2", text: "Dann nur die Brötchen, bitte." },
            ],
          },
          items: [
            {
              id: "a1c-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Was kauft der Mann?",
              options: [
                { key: "a", label: "Nur Brötchen" },
                { key: "b", label: "Brot und Brötchen" },
                { key: "c", label: "Nur Brot" },
              ],
              correct: "a",
              explanation: "Non tugagan — u faqat bulochka oladi.",
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
      hint: "Matn bir marta o‘qiladi — „nur“, „nicht“, „ab“ so‘zlariga e’tibor bering.",
      blocks: [
        {
          id: "a1c-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "female2",
                text: "Liebe Kundinnen und Kunden, unser Parkhaus ist heute wegen Reparatur geschlossen. Sie können kostenlos auf dem Platz hinter dem Haus parken.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Die Kunden können heute nicht im Parkhaus parken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„unser Parkhaus ist heute … geschlossen“.",
            },
          ],
        },
        {
          id: "a1c-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Zug",
            lines: [
              {
                voice: "male",
                text: "Nächster Halt: Erfurt Hauptbahnhof. Reisende nach Weimar steigen bitte hier um.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Der Zug fährt direkt nach Weimar.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Veymarga borish uchun Erfurtda almashish kerak.",
            },
          ],
        },
        {
          id: "a1c-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Handy",
            lines: [
              {
                voice: "female",
                text: "Hallo Timur, ich bin schon im Kino. Der Film fängt um acht an, nicht um halb acht. Du hast also noch Zeit.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Der Film beginnt um 20 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„um acht … nicht um halb acht“ — soat 20:00.",
            },
          ],
        },
        {
          id: "a1c-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage beim Arzt",
            lines: [
              {
                voice: "male2",
                text: "Liebe Patienten, Doktor Sommer ist heute krank. Frau Doktor Wagner übernimmt alle Termine.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Alle Termine fallen heute aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Uchrashuvlarni Vagner xonim o‘z zimmasiga oladi.",
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
      hint: "Bu qismda telefon xabarlari va e’lonlar keladi.",
      blocks: [
        {
          id: "a1c-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female2",
                text: "Hallo Frau Yusupova, hier ist die Sprachschule. Ihr Kurs beginnt nicht am Montag, sondern am Mittwoch. Der Raum bleibt gleich.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wann beginnt der Kurs?",
              options: [
                { key: "a", label: "Am Montag" },
                { key: "b", label: "Am Mittwoch" },
                { key: "c", label: "Am Freitag" },
              ],
              correct: "b",
              explanation: "„nicht am Montag, sondern am Mittwoch“.",
            },
          ],
        },
        {
          id: "a1c-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Radio",
            lines: [
              {
                voice: "male",
                text: "Und nun das Wetter: Heute Nachmittag regnet es, morgen wird es sonnig und warm.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wie ist das Wetter morgen?",
              options: [
                { key: "a", label: "Es regnet." },
                { key: "b", label: "Es schneit." },
                { key: "c", label: "Es ist sonnig." },
              ],
              correct: "c",
              explanation: "„morgen wird es sonnig und warm“.",
            },
          ],
        },
        {
          id: "a1c-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Freund",
            lines: [
              {
                voice: "male2",
                text: "Hi, ich hole dich um sieben ab. Aber nicht zu Hause — warte bitte vor dem Supermarkt.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wo warten die beiden?",
              options: [
                { key: "a", label: "Zu Hause" },
                { key: "b", label: "Vor dem Supermarkt" },
                { key: "c", label: "Am Bahnhof" },
              ],
              correct: "b",
              explanation: "„warte bitte vor dem Supermarkt“.",
            },
          ],
        },
        {
          id: "a1c-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in der Bibliothek",
            lines: [
              {
                voice: "female",
                text: "Liebe Leser, ab nächster Woche öffnen wir schon um neun Uhr, nicht mehr erst um zehn.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann öffnet die Bibliothek ab nächster Woche?",
              options: [
                { key: "a", label: "Um 9 Uhr" },
                { key: "b", label: "Um 10 Uhr" },
                { key: "c", label: "Um 11 Uhr" },
              ],
              correct: "a",
              explanation: "„schon um neun Uhr, nicht mehr erst um zehn“.",
            },
          ],
        },
        {
          id: "a1c-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Nachbarin",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, Herr Rasulov. Ein Paket für Sie ist bei mir. Ich bin bis achtzehn Uhr zu Hause.",
              },
            ],
          },
          items: [
            {
              id: "a1c-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wo ist das Paket?",
              options: [
                { key: "a", label: "Bei der Post" },
                { key: "b", label: "Bei der Nachbarin" },
                { key: "c", label: "Vor der Tür" },
              ],
              correct: "b",
              explanation: "„Ein Paket für Sie ist bei mir“ — qo‘shnida.",
            },
          ],
        },
      ],
    },
  ],
};
