import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Teil 1 va 3 audiosi 2 marta, Teil 2 audiosi 1 marta o'ynaydi.
 *
 * Matnlar original — rasmiy imtihondan faqat format olingan.
 * Ekranda skript ko'rsatilmaydi, TTS o'qiydi (natijadan keyin ochiladi).
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
          id: "h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon",
            lines: [
              { voice: "female", text: "Reisezentrum Bremen, guten Tag." },
              {
                voice: "male",
                text: "Guten Tag. Wann fährt der nächste Zug nach Köln?",
              },
              {
                voice: "female",
                text: "Einen Moment, bitte. Der Zug um vierzehn Uhr zwölf ist leider weg. Der nächste fährt um vierzehn Uhr zwanzig.",
              },
              { voice: "male", text: "Um vierzehn Uhr zwanzig. Vielen Dank!" },
            ],
          },
          items: [
            {
              id: "a1-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann fährt der nächste Zug nach Köln?",
              options: [
                { key: "a", label: "Um 14.02 Uhr" },
                { key: "b", label: "Um 14.12 Uhr" },
                { key: "c", label: "Um 14.20 Uhr" },
              ],
              correct: "c",
              explanation:
                "„vierzehn Uhr zwölf“ (14.12) poyezdi ketib bo‘lgan, keyingisi „vierzehn Uhr zwanzig“ — 14.20.",
            },
          ],
        },
        {
          id: "h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Café",
            lines: [
              { voice: "male", text: "Was möchtest du trinken? Einen Kaffee?" },
              {
                voice: "female",
                text: "Nein, danke. Kaffee trinke ich am Abend nicht. Ich nehme einen Tee.",
              },
              { voice: "male", text: "Gut, dann einen Tee und ein Wasser für mich." },
            ],
          },
          items: [
            {
              id: "a1-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Was trinkt die Frau?",
              options: [
                { key: "a", label: "Kaffee" },
                { key: "b", label: "Tee" },
                { key: "c", label: "Wasser" },
              ],
              correct: "b",
              explanation:
                "Ayol qahvadan bosh tortadi („Kaffee trinke ich am Abend nicht“) va choy oladi. Suvni erkak oladi.",
            },
          ],
        },
        {
          id: "h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "female2",
                text: "Liebe Kundinnen und Kunden, unsere Information finden Sie heute nicht im Erdgeschoss. Sie ist im ersten Stock, neben dem Café. Vielen Dank.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wo ist die Information heute?",
              options: [
                { key: "a", label: "Im Erdgeschoss" },
                { key: "b", label: "Im ersten Stock" },
                { key: "c", label: "Im zweiten Stock" },
              ],
              correct: "b",
              explanation:
                "„nicht im Erdgeschoss … im ersten Stock“ — inkorni eshitib qolish muhim.",
            },
          ],
        },
        {
          id: "h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Am Schalter",
            lines: [
              { voice: "male", text: "Eine Fahrkarte in die Stadt, bitte." },
              { voice: "female", text: "Einfach oder hin und zurück?" },
              { voice: "male", text: "Nur einfach." },
              {
                voice: "female",
                text: "Das macht drei Euro fünfzig. Hin und zurück wären fünf Euro vierzig.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Mann?",
              options: [
                { key: "a", label: "3,50 €" },
                { key: "b", label: "4,50 €" },
                { key: "c", label: "5,40 €" },
              ],
              correct: "a",
              explanation:
                "U „nur einfach“ (bir tomonga) oladi — 3,50 €. 5,40 € borib-kelish narxi.",
            },
          ],
        },
        {
          id: "h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, Praxis Dr. Weber. Ihr Termin am Montag ist leider nicht möglich. Können Sie am Donnerstag um zehn Uhr kommen? Bitte rufen Sie uns zurück.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wann soll der Patient kommen?",
              options: [
                { key: "a", label: "Am Montag" },
                { key: "b", label: "Am Dienstag" },
                { key: "c", label: "Am Donnerstag" },
              ],
              correct: "c",
              explanation:
                "Dushanbadagi navbat bekor („nicht möglich“), yangi taklif — payshanba soat 10 da.",
            },
          ],
        },
        {
          id: "h1-b6",
          stimulus: {
            kind: "audio",
            situation: "Zu Hause",
            lines: [
              { voice: "female", text: "Gehst du noch einkaufen?" },
              { voice: "male", text: "Ja. Brauchen wir Brot?" },
              {
                voice: "female",
                text: "Brot haben wir noch. Aber die Milch ist alle. Bring bitte Milch mit.",
              },
              { voice: "male", text: "Alles klar, Milch." },
            ],
          },
          items: [
            {
              id: "a1-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Was kauft der Mann?",
              options: [
                { key: "a", label: "Brot" },
                { key: "b", label: "Milch" },
                { key: "c", label: "Eier" },
              ],
              correct: "b",
              explanation:
                "„Brot haben wir noch“ — non bor; „die Milch ist alle“ — sut tugagan, shuni oladi.",
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
          id: "h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Bahnhof",
            lines: [
              {
                voice: "male2",
                text: "Achtung auf Gleis fünf: Der Zug nach Hamburg fährt heute nicht von Gleis fünf. Der Zug fährt von Gleis acht. Ich wiederhole: von Gleis acht.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Der Zug nach Hamburg fährt von Gleis 5.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "E’lon aynan o‘zgarish haqida: „nicht von Gleis fünf … von Gleis acht“.",
            },
          ],
        },
        {
          id: "h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Supermarkt",
            lines: [
              {
                voice: "female2",
                text: "Liebe Kundinnen und Kunden, heute im Angebot: Tomaten aus Italien, ein Kilo nur ein Euro. Nur heute!",
              },
            ],
          },
          items: [
            {
              id: "a1-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Ein Kilo Tomaten kostet heute 1 Euro.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„ein Kilo nur ein Euro“ — bayonot to‘g‘ri.",
            },
          ],
        },
        {
          id: "h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Flughafen",
            lines: [
              {
                voice: "female",
                text: "Herr Peter Sommer, bitte kommen Sie zum Ausgang B zwölf. Ihr Flug nach Wien geht in zwanzig Minuten. Herr Sommer, bitte zum Ausgang B zwölf.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Herr Sommer soll zum Ausgang B12 kommen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "E’londa ikki marta „Ausgang B zwölf“ aytiladi.",
            },
          ],
        },
        {
          id: "h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "male2",
                text: "Liebe Kundinnen und Kunden, wir schließen heute um zwanzig Uhr. Bitte kommen Sie in den nächsten Minuten zur Kasse. Danke für Ihren Besuch.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Das Kaufhaus schließt um 18 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„um zwanzig Uhr“ — soat 20:00, 18:00 emas.",
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
          id: "h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Handy",
            lines: [
              {
                voice: "female",
                text: "Hallo Ali, hier ist Sabine. Wir treffen uns morgen nicht im Park, es regnet. Komm bitte direkt ins Café am Markt. Bis morgen!",
              },
            ],
          },
          items: [
            {
              id: "a1-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wo treffen sich Ali und Sabine?",
              options: [
                { key: "a", label: "Im Park" },
                { key: "b", label: "Im Café" },
                { key: "c", label: "Am Bahnhof" },
              ],
              correct: "b",
              explanation:
                "„nicht im Park … direkt ins Café am Markt“ — yomg‘ir sababli joy o‘zgargan.",
            },
          ],
        },
        {
          id: "h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Kino",
            lines: [
              {
                voice: "male",
                text: "Guten Abend. Der Film beginnt heute erst um zwanzig Uhr dreißig. Sie können noch etwas trinken. Vielen Dank für Ihr Verständnis.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wann beginnt der Film?",
              options: [
                { key: "a", label: "Um 20.00 Uhr" },
                { key: "b", label: "Um 20.13 Uhr" },
                { key: "c", label: "Um 20.30 Uhr" },
              ],
              correct: "c",
              explanation: "„zwanzig Uhr dreißig“ — 20.30.",
            },
          ],
        },
        {
          id: "h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Kollegen",
            lines: [
              {
                voice: "male2",
                text: "Hallo Frau Kraus, hier ist Herr Lang. Für die Sitzung morgen brauchen wir keinen Computer. Bringen Sie bitte nur die Papiere mit. Danke!",
              },
            ],
          },
          items: [
            {
              id: "a1-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was soll Frau Kraus mitbringen?",
              options: [
                { key: "a", label: "Den Computer" },
                { key: "b", label: "Die Papiere" },
                { key: "c", label: "Das Telefon" },
              ],
              correct: "b",
              explanation:
                "„keinen Computer … nur die Papiere“ — faqat hujjatlar kerak.",
            },
          ],
        },
        {
          id: "h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Radio",
            lines: [
              {
                voice: "female2",
                text: "Und nun das Wetter: Heute ist es kalt, aber morgen wird es wärmer. Am Morgen scheint die Sonne, am Nachmittag kommt Regen.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wie ist das Wetter morgen Nachmittag?",
              options: [
                { key: "a", label: "Es schneit." },
                { key: "b", label: "Die Sonne scheint." },
                { key: "c", label: "Es regnet." },
              ],
              correct: "c",
              explanation:
                "Ertalab quyosh, „am Nachmittag kommt Regen“ — tushdan keyin yomg‘ir.",
            },
          ],
        },
        {
          id: "h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, Sprachschule Aktiv. Ihr Deutschkurs beginnt am Montag, aber nicht um neun Uhr. Der Kurs beginnt um acht Uhr im Raum zwei.",
              },
            ],
          },
          items: [
            {
              id: "a1-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wann beginnt der Deutschkurs?",
              options: [
                { key: "a", label: "Um 8 Uhr" },
                { key: "b", label: "Um 9 Uhr" },
                { key: "c", label: "Um 10 Uhr" },
              ],
              correct: "a",
              explanation:
                "„nicht um neun Uhr … um acht Uhr“ — vaqt o‘zgargan, xona 2.",
            },
          ],
        },
      ],
    },
  ],
};
