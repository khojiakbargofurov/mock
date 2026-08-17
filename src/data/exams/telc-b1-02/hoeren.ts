import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 02 · Hörverstehen — 3 Teil, 20 element, 75 ball.
 * Teil 1 (1×): 5 qisqa matn, richtig/falsch — har biri 5 ball
 * Teil 2 (1×): uzun suhbat, 10 bayonot — har biri 2,5 ball
 * Teil 3 (2×): 5 qisqa xabar, richtig/falsch — har biri 5 ball
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 1 · Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Entscheiden Sie beim Hören: Ist die Aussage richtig oder falsch?",
      hint: "Matn bir marta o‘qiladi — bayonotni oldindan o‘qib qo‘ying.",
      blocks: [
        {
          id: "b1b-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Bahnhof",
            lines: [
              {
                voice: "female2",
                text: "Information für die Reisenden nach Dresden: Der Regionalexpress um vierzehn Uhr zwölf fährt heute nicht von Gleis drei, sondern von Gleis sieben. Die Abfahrtszeit bleibt unverändert.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Der Zug nach Dresden fährt später als geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat yo‘l (perron) o‘zgargan; vaqt o‘zgarmagan — „Die Abfahrtszeit bleibt unverändert.“",
            },
          ],
        },
        {
          id: "b1b-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf der Mailbox",
            lines: [
              {
                voice: "male",
                text: "Hallo Herr Rasulov, hier ist die Fahrschule Krämer. Ihre theoretische Prüfung am Dienstag müssen wir leider verschieben, der Prüfer ist krank. Bitte rufen Sie uns bis morgen zurück, dann finden wir einen neuen Termin.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Herr Rasulov soll sich bei der Fahrschule melden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Bitte rufen Sie uns bis morgen zurück.“",
            },
          ],
        },
        {
          id: "b1b-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Supermarkt",
            lines: [
              {
                voice: "female",
                text: "Liebe Kundinnen und Kunden, unsere Fleischtheke schließt heute bereits um achtzehn Uhr, weil wir die Kühlung reparieren lassen. Alle anderen Abteilungen haben wie gewohnt bis zwanzig Uhr geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Der Supermarkt schließt heute um 18 Uhr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat go‘sht bo‘limi 18:00 da yopiladi; do‘kon 20:00 gacha ochiq.",
            },
          ],
        },
        {
          id: "b1b-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch unter Kolleginnen",
            lines: [
              {
                voice: "female",
                text: "Du, Nadja, ich habe die Zahlen für den Bericht fertig. Soll ich sie dir schicken oder trägst du sie lieber selbst ein?",
              },
              {
                voice: "female2",
                text: "Schick sie mir bitte per Mail, ich baue sie dann heute Abend ein. Bis Freitag muss der Bericht ja beim Chef sein.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Nadja möchte die Zahlen selbst in den Bericht einfügen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„ich baue sie dann heute Abend ein“ — o‘zi kiritadi.",
            },
          ],
        },
        {
          id: "b1b-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Wetterbericht im Radio",
            lines: [
              {
                voice: "male2",
                text: "Und nun das Wetter: Der Vormittag beginnt neblig, ab Mittag setzt sich die Sonne durch. Höchstwerte um achtzehn Grad. In der Nacht kann es im Bergland vereinzelt regnen.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Am Nachmittag wird es sonnig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„ab Mittag setzt sich die Sonne durch“.",
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
        "Teil 2 · Sie hören ein Gespräch. Sie hören den Text einmal. Entscheiden Sie, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
      hint: "Bayonotlar suhbat tartibida keladi — eshitayotib belgilang.",
      blocks: [
        {
          id: "b1b-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Radiogespräch mit dem Leiter eines Nachbarschaftsgartens",
            lines: [
              {
                voice: "female2",
                text: "Herr Falk, mitten in der Stadt haben Sie einen Garten aufgebaut, in dem jeder mitmachen darf. Wie hat das angefangen?",
              },
              {
                voice: "male",
                text: "Ich bin gelernter Gärtner, habe aber fünfzehn Jahre im Büro gearbeitet. Vor sechs Jahren stand hier eine leere Fläche, wo früher eine Fabrik war. Ich habe bei der Stadt angefragt — und zu meiner Überraschung durfte ich sie nutzen.",
              },
              {
                voice: "female2",
                text: "Wie viele Menschen arbeiten heute mit?",
              },
              {
                voice: "male",
                text: "Ungefähr sechzig, aber nicht alle gleichzeitig. Der harte Kern sind vielleicht fünfzehn Leute. Die anderen kommen, wenn sie Zeit haben.",
              },
              { voice: "female2", text: "Muss man etwas bezahlen?" },
              {
                voice: "male",
                text: "Nein. Wir verlangen keinen Beitrag. Wer will, spendet für Erde und Samen. Wichtiger als Geld ist uns, dass jemand regelmäßig kommt.",
              },
              {
                voice: "female2",
                text: "Und wem gehört das Gemüse, das dort wächst?",
              },
              {
                voice: "male",
                text: "Allen. Es gibt keine privaten Beete. Wer erntet, nimmt so viel mit, wie er für eine Mahlzeit braucht — nicht mehr. Das funktioniert erstaunlich gut, wir hatten in sechs Jahren kaum Streit.",
              },
              { voice: "female2", text: "Gab es denn gar keine Probleme?" },
              {
                voice: "male",
                text: "Doch, natürlich. Das größte war das Wasser. Im ersten Sommer mussten wir alles in Kanistern herbeischleppen. Seit letztem Jahr haben wir endlich einen eigenen Anschluss.",
              },
              {
                voice: "female2",
                text: "Kommen auch Familien mit Kindern?",
              },
              {
                voice: "male",
                text: "Sehr viele sogar. Zweimal im Monat kommt eine Schulklasse. Die Kinder sind oft überrascht, dass Kartoffeln in der Erde wachsen — das ist für viele völlig neu.",
              },
              { voice: "female2", text: "Wie geht es weiter?" },
              {
                voice: "male",
                text: "Der Vertrag mit der Stadt läuft noch drei Jahre. Danach soll hier möglicherweise gebaut werden. Wir sammeln gerade Unterschriften, damit der Garten bleiben kann.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Herr Falk hat Gärtner gelernt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ich bin gelernter Gärtner“.",
            },
            {
              id: "b1b-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Auf der Fläche stand früher ein Wohnhaus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„wo früher eine Fabrik war“ — zavod bo‘lgan.",
            },
            {
              id: "b1b-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Etwa 60 Menschen sind beteiligt, aber nicht alle regelmäßig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Ungefähr sechzig, aber nicht alle gleichzeitig“ — doimiylari ~15 kishi.",
            },
            {
              id: "b1b-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Für die Teilnahme muss man einen Monatsbeitrag zahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Wir verlangen keinen Beitrag“ — faqat ixtiyoriy xayriya.",
            },
            {
              id: "b1b-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Jede Person hat ihr eigenes kleines Beet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Es gibt keine privaten Beete“ — hammasi umumiy.",
            },
            {
              id: "b1b-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Beim Ernten soll man nur so viel nehmen, wie man braucht.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„so viel … wie er für eine Mahlzeit braucht — nicht mehr“.",
            },
            {
              id: "b1b-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Es gab in den letzten Jahren viel Streit im Garten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„wir hatten in sechs Jahren kaum Streit“.",
            },
            {
              id: "b1b-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Am Anfang war die Wasserversorgung schwierig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Birinchi yozda suvni kanistrlarda tashishga to‘g‘ri kelgan.",
            },
            {
              id: "b1b-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Schulklassen besuchen den Garten einmal im Jahr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Zweimal im Monat kommt eine Schulklasse.“",
            },
            {
              id: "b1b-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Die Zukunft des Gartens ist noch nicht sicher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Shartnoma yana uch yil; keyin qurilish bo‘lishi mumkin, shuning uchun imzo yig‘ilyapti.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "richtig-falsch",
      playCount: 2,
      instruction:
        "Teil 3 · Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Entscheiden Sie: Ist die Aussage richtig oder falsch?",
      hint: "Bu qismda matn ikki marta o‘qiladi — birinchi eshitishda umumiy mazmunni tushuning.",
      blocks: [
        {
          id: "b1b-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Fitnessstudio",
            lines: [
              {
                voice: "female",
                text: "Ein Hinweis für unsere Mitglieder: Die Sauna bleibt von Montag bis Mittwoch wegen einer Grundreinigung geschlossen. Der Kursraum und alle Geräte stehen Ihnen normal zur Verfügung.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Das Fitnessstudio ist Anfang der Woche geschlossen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat sauna yopiq; mashg‘ulot xonasi va trenajyorlar ochiq.",
            },
          ],
        },
        {
          id: "b1b-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Kollegin",
            lines: [
              {
                voice: "female2",
                text: "Hallo, ich bin's, Sabine. Die Besprechung morgen wurde von zehn auf halb neun vorgezogen. Wenn du das nicht schaffst, sag Bescheid, ich kann dich vertreten.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Die Besprechung beginnt später als geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„vorgezogen“ — oldinga surilgan: soat 10 o‘rniga 8:30.",
            },
          ],
        },
        {
          id: "b1b-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "male",
                text: "Der Möbelmarkt Krause räumt sein Lager: Alle Küchen bis zu vierzig Prozent reduziert. Die Lieferung ist ab einem Einkaufswert von tausend Euro kostenlos. Nur noch bis Samstag.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Die Lieferung ist immer kostenlos.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Bepul yetkazish faqat 1000 evrodan yuqori xaridda.",
            },
          ],
        },
        {
          id: "b1b-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Volkshochschule",
            lines: [
              {
                voice: "female",
                text: "Achtung, eine Information zum Computerkurs am Donnerstag: Der Kurs findet statt, allerdings nicht in Raum 105, sondern in der Bibliothek im Erdgeschoss. Bitte bringen Sie wie immer einen USB-Stick mit.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Der Computerkurs fällt am Donnerstag aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Der Kurs findet statt“ — faqat xona o‘zgargan.",
            },
          ],
        },
        {
          id: "b1b-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Paketdienst",
            lines: [
              {
                voice: "male2",
                text: "Guten Tag, wir haben heute versucht, Ihnen ein Paket zuzustellen. Sie können es ab morgen früh in der Filiale in der Bahnhofstraße abholen. Bringen Sie bitte einen Ausweis mit. Das Paket liegt sieben Tage für Sie bereit.",
              },
            ],
          },
          items: [
            {
              id: "b1b-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Zum Abholen braucht man ein Ausweisdokument.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Bringen Sie bitte einen Ausweis mit.“",
            },
          ],
        },
      ],
    },
  ],
};
