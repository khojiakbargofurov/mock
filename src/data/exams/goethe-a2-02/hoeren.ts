import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 02 · Hören — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da oila a'zolarining dam olish kunlari rejasi moslashtiriladi.
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
      hint: "Radio, avtojavob va e’lonlar. Vaqt, joy va raqamlarni yozib boring.",
      blocks: [
        {
          id: "a2b-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Hausverwaltung",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, hier ist die Hausverwaltung. Am Donnerstag wird von acht bis zwölf Uhr das Wasser abgestellt. Bitte füllen Sie am Mittwochabend Wasser in Flaschen.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wann gibt es kein Wasser?",
              options: [
                { key: "a", label: "Am Mittwochabend" },
                { key: "b", label: "Am Donnerstagvormittag" },
                { key: "c", label: "Am Donnerstagabend" },
              ],
              correct: "b",
              explanation:
                "Payshanba 8–12 — tushgacha. Chorshanba kechqurun esa suv to‘plab qo‘yish kerak.",
            },
          ],
        },
        {
          id: "a2b-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Im Radio",
            lines: [
              {
                voice: "male",
                text: "Das Stadtfest am Samstag findet nicht auf dem Marktplatz statt. Wegen der Bauarbeiten feiern wir dieses Jahr im Stadtpark. Beginn ist wie geplant um vierzehn Uhr.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wo findet das Stadtfest statt?",
              options: [
                { key: "a", label: "Auf dem Marktplatz" },
                { key: "b", label: "Im Stadtpark" },
                { key: "c", label: "Vor dem Rathaus" },
              ],
              correct: "b",
              explanation:
                "Qurilish ishlari sababli joy o‘zgargan: „feiern wir dieses Jahr im Stadtpark“.",
            },
          ],
        },
        {
          id: "a2b-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Bahnhof",
            lines: [
              {
                voice: "male2",
                text: "Der Regionalzug nach Erfurt, planmäßige Abfahrt zehn Uhr fünfzehn, fährt heute von Gleis vier statt von Gleis zwei.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Von welchem Gleis fährt der Zug heute?",
              options: [
                { key: "a", label: "Von Gleis 2" },
                { key: "b", label: "Von Gleis 4" },
                { key: "c", label: "Von Gleis 10" },
              ],
              correct: "b",
              explanation:
                "„von Gleis vier statt von Gleis zwei“. „zehn Uhr fünfzehn“ — jo‘nash vaqti.",
            },
          ],
        },
        {
          id: "a2b-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter",
            lines: [
              {
                voice: "female",
                text: "Hallo Frau Rakhimova, hier ist das Bürgeramt. Für die Anmeldung brauchen wir noch Ihren Mietvertrag. Der Pass allein reicht leider nicht. Bringen Sie ihn bitte am Freitag mit.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was soll Frau Rakhimova mitbringen?",
              options: [
                { key: "a", label: "Nur den Pass" },
                { key: "b", label: "Den Mietvertrag" },
                { key: "c", label: "Ein Foto" },
              ],
              correct: "b",
              explanation:
                "Pasport yetarli emas — ijara shartnomasi („Mietvertrag“) kerak.",
            },
          ],
        },
        {
          id: "a2b-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Wetterbericht",
            lines: [
              {
                voice: "female2",
                text: "Am Morgen schneit es im ganzen Land, am Nachmittag hört der Schnee auf. Es bleibt aber kalt: minus drei Grad.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Wie ist das Wetter am Nachmittag?",
              options: [
                { key: "a", label: "Es schneit weiter." },
                { key: "b", label: "Es ist kalt, aber ohne Schnee." },
                { key: "c", label: "Es wird warm." },
              ],
              correct: "b",
              explanation:
                "Tushdan keyin qor to‘xtaydi („hört der Schnee auf“), lekin sovuq qoladi.",
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
        "Sie hören ein Gespräch. Sie hören den Text einmal. Was macht wer am Wochenende? Wählen Sie für die Aufgaben 6 bis 10 die passende Karte a bis i.",
      hint: "Har kartochka faqat bir marta ishlatiladi. Ortiqcha kartochkalar ham bor.",
      bank: [
        { key: "a", label: "🎣 Angeln" },
        { key: "b", label: "🧁 Kuchen backen" },
        { key: "c", label: "⚽ Fußballspiel" },
        { key: "d", label: "🧹 Wohnung putzen" },
        { key: "e", label: "📖 Für die Prüfung lernen" },
        { key: "f", label: "🚗 Zu den Großeltern fahren" },
        { key: "g", label: "🎸 Musikunterricht" },
        { key: "h", label: "🛏 Ausschlafen" },
        { key: "i", label: "🖥 Im Büro arbeiten" },
      ],
      blocks: [
        {
          id: "a2b-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Familie Weber spricht über das Wochenende",
            lines: [
              { voice: "female", text: "Also, wer macht was am Samstag?" },
              {
                voice: "male",
                text: "Ich fahre früh zum See. Beim Angeln kann ich am besten abschalten.",
              },
              {
                voice: "female",
                text: "Gut. Ich muss leider ins Büro — wir haben am Montag eine Präsentation.",
              },
              { voice: "male", text: "Und du, Jonas?" },
              {
                voice: "male2",
                text: "Ich habe um zehn ein Fußballspiel. Danach gehe ich mit Paul ins Schwimmbad.",
              },
              { voice: "female", text: "Und Mia?" },
              {
                voice: "female2",
                text: "Ich lerne. In zwei Wochen ist meine Matheprüfung, da muss ich viel machen.",
              },
              {
                voice: "female",
                text: "Und Oma kommt am Sonntag zu uns. Sie will für alle einen Kuchen backen.",
              },
              { voice: "male", text: "Perfekt, dann sehen wir uns am Sonntag alle." },
            ],
          },
          items: [
            {
              id: "a2b-h-006",
              nr: 6,
              kind: "zuordnung",
              points: 1,
              prompt: "Der Vater",
              correct: "a",
              explanation: "„Ich fahre früh zum See. Beim Angeln …“",
            },
            {
              id: "a2b-h-007",
              nr: 7,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Mutter",
              correct: "i",
              explanation: "„Ich muss leider ins Büro“ — dushanbadagi taqdimot uchun.",
            },
            {
              id: "a2b-h-008",
              nr: 8,
              kind: "zuordnung",
              points: 1,
              prompt: "Jonas",
              correct: "c",
              explanation: "„Ich habe um zehn ein Fußballspiel.“",
            },
            {
              id: "a2b-h-009",
              nr: 9,
              kind: "zuordnung",
              points: 1,
              prompt: "Mia",
              correct: "e",
              explanation: "Matematika imtihoniga tayyorgarlik — „Ich lerne“.",
            },
            {
              id: "a2b-h-010",
              nr: 10,
              kind: "zuordnung",
              points: 1,
              prompt: "Die Oma",
              correct: "b",
              explanation: "„Sie will für alle einen Kuchen backen.“",
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
          id: "a2b-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "In der Apotheke",
            lines: [
              { voice: "female2", text: "Haben Sie ein Rezept?" },
              { voice: "male", text: "Nein, ich brauche nur etwas gegen Husten." },
              {
                voice: "female2",
                text: "Dann nehmen Sie diesen Saft. Dreimal täglich einen Löffel, sieben Euro achtzig.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was bekommt der Mann?",
              options: [
                { key: "a", label: "Tabletten mit Rezept" },
                { key: "b", label: "Einen Hustensaft" },
                { key: "c", label: "Eine Salbe" },
              ],
              correct: "b",
              explanation: "Retsept yo‘q; yo‘talga qarshi sirop beriladi.",
            },
          ],
        },
        {
          id: "a2b-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Am Fahrkartenschalter",
            lines: [
              { voice: "male2", text: "Einmal nach Dresden, bitte." },
              {
                voice: "female",
                text: "Hin und zurück? Dann kostet es dreiundvierzig Euro statt sechsundfünfzig.",
              },
              { voice: "male2", text: "Ja, hin und zurück, bitte." },
            ],
          },
          items: [
            {
              id: "a2b-h-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Wie viel bezahlt der Mann?",
              options: [
                { key: "a", label: "43 Euro" },
                { key: "b", label: "56 Euro" },
                { key: "c", label: "34 Euro" },
              ],
              correct: "a",
              explanation:
                "Borib-kelish chiptasi 43 evro; 56 evro — ikkita bir tomonlama chipta narxi.",
            },
          ],
        },
        {
          id: "a2b-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "In der Bäckerei",
            lines: [
              { voice: "female", text: "Zwei Brötchen und ein Vollkornbrot, bitte." },
              {
                voice: "male",
                text: "Das Vollkornbrot ist leider aus. Wir haben nur noch Weißbrot.",
              },
              { voice: "female", text: "Gut, dann nehme ich das Weißbrot." },
            ],
          },
          items: [
            {
              id: "a2b-h-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Welches Brot kauft die Frau?",
              options: [
                { key: "a", label: "Vollkornbrot" },
                { key: "b", label: "Weißbrot" },
                { key: "c", label: "Gar kein Brot" },
              ],
              correct: "b",
              explanation:
                "„Das Vollkornbrot ist leider aus“ — shuning uchun oq non oladi.",
            },
          ],
        },
        {
          id: "a2b-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Im Büro",
            lines: [
              {
                voice: "male",
                text: "Die Besprechung morgen — bleibt es bei zehn Uhr?",
              },
              {
                voice: "female2",
                text: "Nein, wir haben auf halb zwölf verschoben. Herr Baumann kommt später aus Hamburg zurück.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Wann ist die Besprechung?",
              options: [
                { key: "a", label: "Um 10 Uhr" },
                { key: "b", label: "Um 11.30 Uhr" },
                { key: "c", label: "Um 12 Uhr" },
              ],
              correct: "b",
              explanation: "„auf halb zwölf verschoben“ — 11:30.",
            },
          ],
        },
        {
          id: "a2b-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Vor dem Kino",
            lines: [
              { voice: "female", text: "Der Film hat schon angefangen, oder?" },
              {
                voice: "male2",
                text: "Nein, jetzt läuft noch die Werbung. Der Film beginnt in zehn Minuten.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was passiert gerade?",
              options: [
                { key: "a", label: "Der Film läuft schon." },
                { key: "b", label: "Es läuft noch Werbung." },
                { key: "c", label: "Der Film ist zu Ende." },
              ],
              correct: "b",
              explanation: "„jetzt läuft noch die Werbung“ — film 10 daqiqadan keyin.",
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
          id: "a2b-h4-b1",
          stimulus: {
            kind: "audio",
            situation: "Interview mit einem Taxifahrer",
            lines: [
              {
                voice: "female",
                text: "Herr Demir, wie lange fahren Sie schon Taxi?",
              },
              {
                voice: "male",
                text: "Seit elf Jahren. Vorher hatte ich einen kleinen Laden, aber das war nichts für mich.",
              },
              { voice: "female", text: "Wann arbeiten Sie am liebsten?" },
              {
                voice: "male",
                text: "In der Nacht. Da sind die Straßen frei, und die Fahrgäste erzählen mehr.",
              },
              { voice: "female", text: "Ist das nicht gefährlich?" },
              {
                voice: "male",
                text: "Kaum. In elf Jahren hatte ich nur zweimal Probleme. Die meisten Leute sind freundlich.",
              },
              { voice: "female", text: "Kennen Sie die Stadt gut?" },
              {
                voice: "male",
                text: "Sehr gut, aber ich benutze trotzdem das Navi — wegen der Staus, nicht wegen der Adressen.",
              },
              { voice: "female", text: "Und was machen Sie in der Freizeit?" },
              {
                voice: "male",
                text: "Ich schlafe erst mal. Und samstags spiele ich mit Freunden Karten — ohne Auto.",
              },
            ],
          },
          items: [
            {
              id: "a2b-h-016",
              nr: 16,
              kind: "choice",
              points: 1,
              prompt: "Herr Demir fährt seit über zehn Jahren Taxi.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„Seit elf Jahren“ — o‘n yildan ko‘p.",
            },
            {
              id: "a2b-h-017",
              nr: 17,
              kind: "choice",
              points: 1,
              prompt: "Früher hatte er ein Restaurant.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation: "„Vorher hatte ich einen kleinen Laden“ — do‘kon, restoran emas.",
            },
            {
              id: "a2b-h-018",
              nr: 18,
              kind: "choice",
              points: 1,
              prompt: "Er arbeitet am liebsten nachts.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„In der Nacht. Da sind die Straßen frei …“",
            },
            {
              id: "a2b-h-019",
              nr: 19,
              kind: "choice",
              points: 1,
              prompt: "Er benutzt kein Navigationsgerät.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "nein",
              explanation:
                "Navigatordan foydalanadi — lekin manzil uchun emas, tirbandlik uchun.",
            },
            {
              id: "a2b-h-020",
              nr: 20,
              kind: "choice",
              points: 1,
              prompt: "Samstags trifft er Freunde.",
              options: [
                { key: "ja", label: "Ja" },
                { key: "nein", label: "Nein" },
              ],
              correct: "ja",
              explanation: "„samstags spiele ich mit Freunden Karten“.",
            },
          ],
        },
      ],
    },
  ],
};
