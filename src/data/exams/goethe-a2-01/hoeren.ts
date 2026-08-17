import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Hören — 4 Teil, 20 element, 30 daqiqa.
 * Teil 1: 2× · Teil 2 (moslashtirish): 1× · Teil 3: 1× · Teil 4: 2×
 *
 * Teil 2 rasmiy imtihonda rasmlar bilan bo'ladi — bu yerda rasmlar o'rniga
 * belgi va so'z bilan berilgan kartochkalar ishlatiladi.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      playCount: 2,
      instruction:
        "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      hint: "Radio, avtojavob berish va e’lonlar. Sana, vaqt va joyni yozib boring.",
      blocks: [
        {
          id: "a2h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Belova, hier ist die Autowerkstatt Berger. Ihr Auto ist leider noch nicht fertig. Wir brauchen ein Ersatzteil. Sie können den Wagen erst am Mittwochnachmittag abholen, nicht schon am Montag. Rufen Sie uns bitte zurück.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann kann Frau Belova ihr Auto abholen?",
              options: [
                { key: "a", label: "Am Montag" },
                { key: "b", label: "Am Mittwoch" },
                { key: "c", label: "Am Freitag" },
              ],
              correct: "b",
              explanation:
                "„erst am Mittwochnachmittag … nicht schon am Montag“ — mashina chorshanba kuni tayyor bo‘ladi.",
            },
          ],
        },
        {
          id: "a2h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Verkehrsmeldung im Radio",
            lines: [
              {
                voice: "female2",
                text: "Und jetzt die Verkehrslage: Auf der A7 zwischen Hannover und Kassel ist die Fahrbahn wieder frei. Aber Achtung auf der A1: Dort steht der Verkehr nach einem Unfall auf zehn Kilometern.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wo gibt es ein Problem im Verkehr?",
              options: [
                { key: "a", label: "Auf der A7" },
                { key: "b", label: "Auf der A1" },
                { key: "c", label: "In der Innenstadt" },
              ],
              correct: "b",
              explanation:
                "A7 „wieder frei“, muammo A1 da: „steht der Verkehr nach einem Unfall“.",
            },
          ],
        },
        {
          id: "a2h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "male2",
                text: "Sehr geehrte Fahrgäste, wir erreichen Frankfurt Hauptbahnhof mit etwa fünfzehn Minuten Verspätung. Reisende nach Mannheim nehmen bitte den Anschlusszug um achtzehn Uhr fünfzig von Gleis elf.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Von welchem Gleis fährt der Anschlusszug nach Mannheim?",
              options: [
                { key: "a", label: "Von Gleis 9" },
                { key: "b", label: "Von Gleis 11" },
                { key: "c", label: "Von Gleis 15" },
              ],
              correct: "b",
              explanation:
                "„von Gleis elf“. „fünfzehn Minuten“ — kechikish, platforma raqami emas.",
            },
          ],
        },
        {
          id: "a2h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Handy",
            lines: [
              {
                voice: "female",
                text: "Hallo Timur, hier ist Katja. Für morgen Abend: Den Salat mache ich selbst, und Brot habe ich auch schon gekauft. Kannst du bitte etwas zu trinken mitbringen? Am besten Saft und Wasser. Danke dir!",
              },
            ],
          },
          items: [
            {
              id: "a2-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was soll Timur mitbringen?",
              options: [
                { key: "a", label: "Einen Salat" },
                { key: "b", label: "Brot" },
                { key: "c", label: "Getränke" },
              ],
              correct: "c",
              explanation:
                "Salat va nonni Katya o‘zi tayyorlaydi; Timurdan „etwas zu trinken“ — ichimlik so‘raladi.",
            },
          ],
        },
        {
          id: "a2h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Wetterbericht",
            lines: [
              {
                voice: "female2",
                text: "Das Wetter am Wochenende: Der Samstag bleibt trocken und sonnig, bis zu zwanzig Grad. Am Sonntag wird es dann kühler, und ab Mittag regnet es im ganzen Land.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie wird das Wetter am Sonntag?",
              options: [
                { key: "a", label: "Sonnig und warm" },
                { key: "b", label: "Kühler mit Regen" },
                { key: "c", label: "Kalt mit Schnee" },
              ],
              correct: "b",
              explanation:
                "Shanba quyoshli, yakshanba „kühler … ab Mittag regnet es“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "zuordnung",
      playCount: 1,
      instruction:
        "Sie hören ein Gespräch. Sie hören den Text einmal. Was macht Lena an welchem Tag? Wählen Sie für die Aufgaben 6 bis 10 die passende Karte a bis i.",
      hint: "Har kartochka faqat bir marta ishlatiladi. Ortiqcha kartochkalar ham bor.",
      bank: [
        { key: "a", label: "🏊 Schwimmbad" },
        { key: "b", label: "🩺 Arzttermin" },
        { key: "c", label: "🎬 Kino" },
        { key: "d", label: "📚 Deutschkurs" },
        { key: "e", label: "🚲 Fahrrad reparieren" },
        { key: "f", label: "🛒 Einkaufen für die Party" },
        { key: "g", label: "👵 Oma besuchen" },
        { key: "h", label: "💼 Arbeiten" },
        { key: "i", label: "🎂 Geburtstagsparty" },
      ],
      blocks: [
        {
          id: "a2h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Zwei Freunde sprechen über die Woche",
            lines: [
              { voice: "male", text: "Und, Lena, hast du diese Woche Zeit?" },
              {
                voice: "female",
                text: "Puh, es ist ziemlich voll. Am Montag habe ich einen Arzttermin, das geht leider nicht anders.",
              },
              { voice: "male", text: "Und am Dienstag?" },
              {
                voice: "female",
                text: "Dienstag gehe ich wie immer ins Schwimmbad. Danach bin ich zu müde für etwas anderes.",
              },
              {
                voice: "male",
                text: "Schade. Vielleicht Mittwoch? Da läuft ein guter Film.",
              },
              {
                voice: "female",
                text: "Mittwoch habe ich meinen Deutschkurs, jeden Mittwoch von sechs bis acht. Ins Kino können wir am Donnerstag gehen, da bin ich frei.",
              },
              { voice: "male", text: "Perfekt, dann Donnerstag Kino." },
              {
                voice: "female",
                text: "Und am Freitag muss ich für die Party einkaufen — meine Schwester wird dreißig. Die Party selbst ist erst am Samstag.",
              },
              { voice: "male", text: "Alles klar. Viel Spaß!" },
            ],
          },
          items: [
            {
              id: "a2-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Montag",
              correct: "b",
              explanation: "„Am Montag habe ich einen Arzttermin.“",
            },
            {
              id: "a2-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Dienstag",
              correct: "a",
              explanation: "„Dienstag gehe ich wie immer ins Schwimmbad.“",
            },
            {
              id: "a2-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Mittwoch",
              correct: "d",
              explanation:
                "„Mittwoch habe ich meinen Deutschkurs“ — kino chorshanba emas.",
            },
            {
              id: "a2-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Donnerstag",
              correct: "c",
              explanation: "„Ins Kino können wir am Donnerstag gehen.“",
            },
            {
              id: "a2-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Freitag",
              correct: "f",
              explanation:
                "„am Freitag muss ich für die Party einkaufen“ — bazmning o‘zi shanba kuni.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      playCount: 1,
      instruction:
        "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      hint: "Bu qismda matn bir marta o‘qiladi — birinchi eshitishda javob bering.",
      blocks: [
        {
          id: "a2h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Im Elektrogeschäft",
            lines: [
              { voice: "female", text: "Kann ich Ihnen helfen?" },
              {
                voice: "male",
                text: "Ja, ich suche einen Wasserkocher. Der hier für neunundzwanzig Euro — ist der gut?",
              },
              {
                voice: "female",
                text: "Der ist in Ordnung. Aber dieser hier kostet nur vierundzwanzig Euro und hält länger.",
              },
              { voice: "male", text: "Gut, dann nehme ich den günstigeren." },
            ],
          },
          items: [
            {
              id: "a2-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Kunde?",
              options: [
                { key: "a", label: "24 Euro" },
                { key: "b", label: "29 Euro" },
                { key: "c", label: "34 Euro" },
              ],
              correct: "a",
              explanation:
                "„den günstigeren“ — arzonrog‘ini oladi, ya’ni 24 evroligini.",
            },
          ],
        },
        {
          id: "a2h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Beim Arzt",
            lines: [
              {
                voice: "male2",
                text: "Sie sind fast gesund. Nehmen Sie die Tabletten noch drei Tage.",
              },
              { voice: "female", text: "Und muss ich noch einmal kommen?" },
              {
                voice: "male2",
                text: "Nur wenn die Schmerzen bleiben. Sonst sehen wir uns erst wieder in einem halben Jahr.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wann muss die Frau wiederkommen?",
              options: [
                { key: "a", label: "In drei Tagen" },
                { key: "b", label: "Nur wenn sie noch Schmerzen hat" },
                { key: "c", label: "Nächste Woche" },
              ],
              correct: "b",
              explanation:
                "„Nur wenn die Schmerzen bleiben“ — og‘riq qolsa keladi. Uch kun — dori muddati.",
            },
          ],
        },
        {
          id: "a2h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Am Telefon",
            lines: [
              { voice: "female2", text: "Firma Lindner, Sie sprechen mit Frau Kern." },
              {
                voice: "male",
                text: "Guten Tag, hier ist Ahmed Yusupov. Ich möchte Herrn Bauer sprechen.",
              },
              {
                voice: "female2",
                text: "Herr Bauer ist heute im Urlaub. Möchten Sie eine Nachricht hinterlassen?",
              },
            ],
          },
          items: [
            {
              id: "a2-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Warum kann Herr Yusupov nicht mit Herrn Bauer sprechen?",
              options: [
                { key: "a", label: "Herr Bauer ist im Urlaub." },
                { key: "b", label: "Herr Bauer ist in einer Sitzung." },
                { key: "c", label: "Herr Bauer ist krank." },
              ],
              correct: "a",
              explanation: "„Herr Bauer ist heute im Urlaub.“",
            },
          ],
        },
        {
          id: "a2h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Restaurant",
            lines: [
              { voice: "male2", text: "Was darf ich Ihnen bringen?" },
              {
                voice: "female",
                text: "Ich hätte gern die Gemüsesuppe. Und einen Apfelsaft, bitte.",
              },
              { voice: "male2", text: "Gern. Möchten Sie auch einen Salat dazu?" },
              { voice: "female", text: "Nein danke, die Suppe reicht mir." },
            ],
          },
          items: [
            {
              id: "a2-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Was bestellt die Frau?",
              options: [
                { key: "a", label: "Suppe und Salat" },
                { key: "b", label: "Suppe und Apfelsaft" },
                { key: "c", label: "Salat und Wasser" },
              ],
              correct: "b",
              explanation: "Sho‘rva va olma sharbati; salatdan bosh tortadi.",
            },
          ],
        },
        {
          id: "a2h3-b5",
          stimulus: {
            kind: "audio",
            situation: "An der Hotelrezeption",
            lines: [
              {
                voice: "female2",
                text: "Ihr Zimmer ist die Nummer zweihundertvier, im zweiten Stock.",
              },
              { voice: "male", text: "Und wo ist das Frühstück?" },
              {
                voice: "female2",
                text: "Im Erdgeschoss, links neben der Rezeption, ab halb sieben.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Wo bekommt der Gast das Frühstück?",
              options: [
                { key: "a", label: "Im Erdgeschoss" },
                { key: "b", label: "Im zweiten Stock" },
                { key: "c", label: "Im Zimmer" },
              ],
              correct: "a",
              explanation:
                "Nonushta „im Erdgeschoss“; ikkinchi qavat — mehmonxona xonasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 4,
      taskType: "richtig-falsch",
      playCount: 2,
      instruction:
        "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20: Ja oder Nein.",
      hint: "Bayonotlar suhbat tartibida keladi — ketma-ket kuzatib boring.",
      blocks: [
        {
          id: "a2h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einer Bäckerin",
            lines: [
              {
                voice: "male2",
                text: "Frau Sattler, Sie haben eine kleine Bäckerei. Wann beginnt Ihr Arbeitstag?",
              },
              {
                voice: "female",
                text: "Um halb drei in der Nacht. Das klingt hart, aber ich habe mich daran gewöhnt.",
              },
              { voice: "male2", text: "Haben Sie Bäckerin gelernt?" },
              {
                voice: "female",
                text: "Nein, eigentlich bin ich Krankenschwester. Die Bäckerei war der Traum meines Mannes, und irgendwann war es auch meiner.",
              },
              { voice: "male2", text: "Arbeiten Sie allein?" },
              {
                voice: "female",
                text: "Nein, wir sind zu viert. Zwei Kolleginnen backen, mein Mann steht im Laden.",
              },
              { voice: "male2", text: "Und der Sonntag?" },
              {
                voice: "female",
                text: "Sonntags bleibt der Laden zu. Ein Tag Pause muss sein, sonst hält man das nicht durch.",
              },
              { voice: "male2", text: "Was ist das Schönste an Ihrer Arbeit?" },
              {
                voice: "female",
                text: "Der Geruch am frühen Morgen — und die Kunden, die jeden Tag kommen und einen beim Namen kennen.",
              },
            ],
          },
          items: [
            {
              id: "a2-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Frau Sattler beginnt ihre Arbeit nachts.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Um halb drei in der Nacht.“",
            },
            {
              id: "a2-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Sie hat Bäckerin gelernt.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation:
                "„Nein, eigentlich bin ich Krankenschwester“ — kasbi hamshira.",
            },
            {
              id: "a2-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Die Bäckerei war die Idee ihres Mannes.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Die Bäckerei war der Traum meines Mannes.“",
            },
            {
              id: "a2-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Frau Sattler arbeitet allein in der Bäckerei.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„wir sind zu viert“ — to‘rt kishi ishlaydi.",
            },
            {
              id: "a2-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Am Sonntag ist die Bäckerei geöffnet.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Sonntags bleibt der Laden zu.“",
            },
          ],
        },
      ],
    },
  ],
};
