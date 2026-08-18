import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Modellsatz 04 · Hören — 3 Teil, 15 element, ~20 daqiqa.
 * Vaziyatlar: kiyim do'koni, sartaroshxona, bolalar bog'chasi, muzey, taksi.
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
      hint: "Savolni oldin o‘qing — matndan faqat bitta ma’lumot kerak.",
      blocks: [
        {
          id: "a1d-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Im Kleidergeschäft",
            lines: [
              { voice: "female", text: "Entschuldigung, haben Sie diese Jacke auch in Größe 38?" },
              { voice: "male", text: "In 38 leider nicht mehr, nur noch in 40 und 42." },
              { voice: "female", text: "Dann probiere ich die 40." },
            ],
          },
          items: [
            {
              id: "a1d-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Welche Größe probiert die Frau?",
              options: [
                { key: "a", label: "38" },
                { key: "b", label: "40" },
                { key: "c", label: "42" },
              ],
              correct: "b",
              explanation: "38 yo‘q; ayol 40 ni kiyib ko‘radi.",
            },
          ],
        },
        {
          id: "a1d-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Beim Friseur",
            lines: [
              { voice: "male2", text: "Guten Tag, haben Sie heute noch einen Termin frei?" },
              { voice: "female2", text: "Heute leider nicht mehr. Morgen um zehn wäre möglich." },
              { voice: "male2", text: "Morgen um zehn passt gut." },
            ],
          },
          items: [
            {
              id: "a1d-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt der Mann zum Friseur?",
              options: [
                { key: "a", label: "Heute Nachmittag" },
                { key: "b", label: "Morgen um 10 Uhr" },
                { key: "c", label: "Morgen um 12 Uhr" },
              ],
              correct: "b",
              explanation: "„Morgen um zehn passt gut.“",
            },
          ],
        },
        {
          id: "a1d-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Im Kindergarten",
            lines: [
              { voice: "female", text: "Wann kann ich meine Tochter morgen bringen?" },
              { voice: "male", text: "Ab sieben Uhr. Um neun beginnt der Morgenkreis, da sollte sie da sein." },
              { voice: "female", text: "Gut, dann komme ich um Viertel vor neun." },
            ],
          },
          items: [
            {
              id: "a1d-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann bringt die Mutter ihre Tochter?",
              options: [
                { key: "a", label: "Um 7.00 Uhr" },
                { key: "b", label: "Um 8.45 Uhr" },
                { key: "c", label: "Um 9.15 Uhr" },
              ],
              correct: "b",
              explanation: "„Viertel vor neun“ — 8:45.",
            },
          ],
        },
        {
          id: "a1d-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "An der Museumskasse",
            lines: [
              { voice: "male2", text: "Zwei Erwachsene und ein Kind, bitte." },
              { voice: "female", text: "Kinder bis zwölf sind frei. Also zweimal neun Euro." },
              { voice: "male2", text: "Achtzehn Euro, hier bitte." },
            ],
          },
          items: [
            {
              id: "a1d-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt die Familie?",
              options: [
                { key: "a", label: "9 Euro" },
                { key: "b", label: "18 Euro" },
                { key: "c", label: "27 Euro" },
              ],
              correct: "b",
              explanation: "Bola bepul, ikki kishi × 9 = 18 evro.",
            },
          ],
        },
        {
          id: "a1d-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Im Taxi",
            lines: [
              { voice: "female2", text: "Zum Hauptbahnhof, bitte. Mein Zug fährt um halb sechs." },
              { voice: "male", text: "Kein Problem, wir brauchen ungefähr zwanzig Minuten." },
              { voice: "female2", text: "Sehr gut, dann bin ich früh genug da." },
            ],
          },
          items: [
            {
              id: "a1d-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wohin fährt die Frau?",
              options: [
                { key: "a", label: "Zum Flughafen" },
                { key: "b", label: "Zum Hauptbahnhof" },
                { key: "c", label: "Ins Hotel" },
              ],
              correct: "b",
              explanation: "„Zum Hauptbahnhof, bitte.“",
            },
          ],
        },
        {
          id: "a1d-h1-b6",
          stimulus: {
            kind: "audio",
            situation: "In der Apotheke",
            lines: [
              { voice: "male2", text: "Ich brauche etwas gegen Husten, aber ohne Rezept." },
              { voice: "female", text: "Dieser Saft hilft gut. Dreimal am Tag einen Löffel." },
              { voice: "male2", text: "Dreimal täglich, alles klar." },
            ],
          },
          items: [
            {
              id: "a1d-h-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Wie oft soll der Mann den Saft nehmen?",
              options: [
                { key: "a", label: "Einmal am Tag" },
                { key: "b", label: "Zweimal am Tag" },
                { key: "c", label: "Dreimal am Tag" },
              ],
              correct: "c",
              explanation: "„Dreimal am Tag einen Löffel.“",
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
      hint: "„nur“, „nicht“, „ab“ so‘zlariga e’tibor bering.",
      blocks: [
        {
          id: "a1d-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Schwimmbad",
            lines: [
              {
                voice: "female2",
                text: "Liebe Gäste, ab Montag ist das Schwimmbad wieder täglich geöffnet. Am Wochenende nur bis achtzehn Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Am Samstag schließt das Schwimmbad um 18 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Am Wochenende nur bis achtzehn Uhr.“",
            },
          ],
        },
        {
          id: "a1d-h2-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Handy",
            lines: [
              {
                voice: "male",
                text: "Hallo, hier ist Marco. Ich stehe im Stau und komme etwa eine halbe Stunde später. Fang schon mal ohne mich an.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Marco kommt heute gar nicht.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "U keladi, faqat yarim soat kechikadi.",
            },
          ],
        },
        {
          id: "a1d-h2-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Supermarkt",
            lines: [
              {
                voice: "female",
                text: "Liebe Kunden, heute gibt es Erdbeeren im Angebot: eine Schale nur zwei Euro. Das gilt nur bis achtzehn Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Das Angebot gilt den ganzen Tag.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Das gilt nur bis achtzehn Uhr.“",
            },
          ],
        },
        {
          id: "a1d-h2-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Sprachschule",
            lines: [
              {
                voice: "male2",
                text: "Der Deutschkurs A1 findet heute nicht in Raum 5 statt, sondern in Raum 8. Der Unterricht beginnt wie immer um 18 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Der Unterricht beginnt heute später.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Vaqt o‘zgarmagan — faqat xona boshqa.",
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
      hint: "Telefon xabarlari va e’lonlar keladi.",
      blocks: [
        {
          id: "a1d-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht vom Vermieter",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Toshev. Der Handwerker kommt am Freitag zwischen neun und elf Uhr. Bitte seien Sie zu Hause.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wann kommt der Handwerker?",
              options: [
                { key: "a", label: "Am Freitagvormittag" },
                { key: "b", label: "Am Freitagnachmittag" },
                { key: "c", label: "Am Samstag" },
              ],
              correct: "a",
              explanation: "„zwischen neun und elf Uhr“ — tushdan oldin.",
            },
          ],
        },
        {
          id: "a1d-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Freundin",
            lines: [
              {
                voice: "female2",
                text: "Hallo Nilufar, ich habe zwei Karten fürs Konzert am Sonntag. Möchtest du mitkommen? Sag mir bitte bis Freitag Bescheid.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was möchte die Freundin?",
              options: [
                { key: "a", label: "Karten kaufen" },
                { key: "b", label: "Eine Antwort bis Freitag" },
                { key: "c", label: "Am Sonntag arbeiten" },
              ],
              correct: "b",
              explanation: "„Sag mir bitte bis Freitag Bescheid.“",
            },
          ],
        },
        {
          id: "a1d-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Bus",
            lines: [
              {
                voice: "male2",
                text: "Nächste Haltestelle: Marktplatz. Von dort erreichen Sie das Rathaus und die Post zu Fuß in drei Minuten.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wo muss man für die Post aussteigen?",
              options: [
                { key: "a", label: "Am Marktplatz" },
                { key: "b", label: "Am Bahnhof" },
                { key: "c", label: "Am Krankenhaus" },
              ],
              correct: "a",
              explanation: "Marktplatz bekatidan pochta uch daqiqa piyoda.",
            },
          ],
        },
        {
          id: "a1d-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus der Praxis",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, Frau Yusupova. Ihr Ergebnis ist da, alles ist in Ordnung. Sie müssen nicht noch einmal kommen.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was soll Frau Yusupova tun?",
              options: [
                { key: "a", label: "Noch einmal in die Praxis kommen" },
                { key: "b", label: "Nichts, alles ist in Ordnung" },
                { key: "c", label: "Ein Medikament kaufen" },
              ],
              correct: "b",
              explanation: "„Sie müssen nicht noch einmal kommen.“",
            },
          ],
        },
        {
          id: "a1d-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "female2",
                text: "Ein kleiner Junge sucht seine Mutter. Er wartet bei der Information im Erdgeschoss.",
              },
            ],
          },
          items: [
            {
              id: "a1d-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wo ist der Junge?",
              options: [
                { key: "a", label: "Bei der Information" },
                { key: "b", label: "Vor dem Kaufhaus" },
                { key: "c", label: "Im dritten Stock" },
              ],
              correct: "a",
              explanation: "„Er wartet bei der Information im Erdgeschoss.“",
            },
          ],
        },
      ],
    },
  ],
};
