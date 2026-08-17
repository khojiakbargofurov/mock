import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Hörverstehen — 3 Teil, 20 element, 75 ball, ~20 daqiqa.
 * Teil 1 (1×): 5 e'lon/xabar · Teil 2 (1×): intervyu, 10 bayonot ·
 * Teil 3 (2×): 5 qisqa radio matni.
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 1 · Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Entscheiden Sie: richtig oder falsch?",
      hint: "Bayonotni oldindan o‘qing — matn faqat bir marta o‘qiladi.",
      blocks: [
        {
          id: "b2h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einem Unternehmen",
            lines: [
              {
                voice: "female2",
                text: "Liebe Kolleginnen und Kollegen, die Betriebsversammlung am Donnerstag findet nicht wie geplant im Konferenzraum statt, sondern in der Kantine. Der Beginn verschiebt sich außerdem von vierzehn auf fünfzehn Uhr. Die Tagesordnung bleibt unverändert.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt:
                "Die Betriebsversammlung beginnt später als ursprünglich geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„von vierzehn auf fünfzehn Uhr“ — bir soat kechroq.",
            },
          ],
        },
        {
          id: "b2h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Bahnhof",
            lines: [
              {
                voice: "male2",
                text: "Information für Reisende nach Leipzig: Der ICE 1704 fällt heute aus. Wir bitten Sie, den Regionalexpress um sechzehn Uhr zwölf zu nutzen. Die Fahrkarten behalten ihre Gültigkeit, eine Reservierung ist nicht erforderlich.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Die Reisenden müssen eine neue Fahrkarte kaufen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Die Fahrkarten behalten ihre Gültigkeit“ — eski chipta amal qiladi.",
            },
          ],
        },
        {
          id: "b2h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Hausverwaltung",
            lines: [
              {
                voice: "female",
                text: "Guten Tag, hier ist die Hausverwaltung Kranz. Die angekündigte Sanierung der Fassade beginnt zwei Wochen später als geplant, also erst am fünfzehnten Mai. An den Mietzahlungen ändert sich nichts. Über eine mögliche Mietminderung informieren wir Sie gesondert.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Die Sanierung wurde verschoben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„beginnt zwei Wochen später als geplant“ — muddat siljigan.",
            },
          ],
        },
        {
          id: "b2h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Rückrufaktion im Radio",
            lines: [
              {
                voice: "male",
                text: "Ein Hersteller ruft eine bestimmte Charge Kinderfahrradhelme zurück. Betroffen sind ausschließlich Helme mit der Chargennummer siebenundzwanzig B, verkauft zwischen März und Juni. Kundinnen und Kunden erhalten den Kaufpreis auch ohne Kassenbon zurück.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Ohne Kassenbon gibt es kein Geld zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„auch ohne Kassenbon“ — chek bo‘lmasa ham pul qaytariladi.",
            },
          ],
        },
        {
          id: "b2h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus einer Arztpraxis",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, Frau Sorge, Praxis Dr. Ahmadi. Ihre Untersuchungsergebnisse liegen vor und sind unauffällig. Ein zusätzlicher Termin ist deshalb nicht nötig. Falls die Beschwerden zurückkommen, melden Sie sich bitte.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Frau Sorge muss zu einem weiteren Termin kommen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Natijalar yaxshi, „ein zusätzlicher Termin ist deshalb nicht nötig“.",
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
        "Teil 2 · Sie hören ein Interview. Sie hören den Text einmal. Entscheiden Sie, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
      hint: "Bayonotlar suhbat tartibida keladi.",
      blocks: [
        {
          id: "b2h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Radiointerview mit einer Arbeitspsychologin über die Vier-Tage-Woche",
            lines: [
              {
                voice: "male2",
                text: "Frau Dr. Feldmann, Sie begleiten Betriebe, die ihre Arbeitszeit verkürzen. Funktioniert das überall?",
              },
              {
                voice: "female",
                text: "Nein, das wäre zu einfach. In Betrieben, in denen die Beschäftigten ihre Aufgaben selbst einteilen können, funktioniert es meist gut. In der Pflege oder im Einzelhandel ist die Lage völlig anders, dort fehlt schlicht das Personal.",
              },
              {
                voice: "male2",
                text: "Viele befürchten, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
              },
              {
                voice: "female",
                text: "Diese Sorge ist berechtigt, und in etwa einem Drittel der Fälle tritt sie auch ein. Entscheidend ist, ob ein Betrieb gleichzeitig Prozesse verändert. Wer nur den Freitag streicht, aber alle Besprechungen behält, produziert Stress.",
              },
              {
                voice: "male2",
                text: "Was ändern erfolgreiche Betriebe konkret?",
              },
              {
                voice: "female",
                text: "Sie reduzieren Meetings drastisch, oft um die Hälfte, und legen feste Zeiten für konzentriertes Arbeiten fest. Außerdem schreiben sie auf, welche Aufgaben wegfallen dürfen — das ist der unangenehmste Teil.",
              },
              {
                voice: "male2",
                text: "Und was sagen die Zahlen zur Gesundheit?",
              },
              {
                voice: "female",
                text: "Die Krankheitstage sinken in fast allen Projekten, um durchschnittlich fünfzehn bis zwanzig Prozent. Beim Schlaf sehen wir dagegen kaum Veränderungen, das hat uns überrascht.",
              },
              {
                voice: "male2",
                text: "Verdienen die Beschäftigten weniger?",
              },
              {
                voice: "female",
                text: "In den von uns untersuchten Betrieben nicht. Der Lohn bleibt gleich. Es gibt allerdings Unternehmen, die eine Kürzung vereinbaren — davon halte ich wenig, weil die Motivation dann schnell sinkt.",
              },
              { voice: "male2", text: "Ihre Empfehlung für den Anfang?" },
              {
                voice: "female",
                text: "Ein Pilotversuch von sechs Monaten mit klaren Kennzahlen. Und die Bereitschaft, ehrlich zu sagen: Es hat nicht funktioniert — falls es so ist.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt:
                "Nach Frau Feldmann eignet sich die Vier-Tage-Woche für alle Branchen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Tibbiy parvarish va savdoda vaziyat boshqacha — kadr yetishmaydi.",
            },
            {
              id: "b2-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt:
                "Die Befürchtung, dieselbe Arbeit in weniger Zeit zu schaffen, hält sie für unbegründet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Diese Sorge ist berechtigt“ — uchdan bir holatda shunday bo‘ladi.",
            },
            {
              id: "b2-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt:
                "Entscheidend ist, ob ein Betrieb auch seine Abläufe ändert.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Entscheidend ist, ob ein Betrieb gleichzeitig Prozesse verändert.“",
            },
            {
              id: "b2-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Erfolgreiche Betriebe halten mehr Besprechungen ab.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Aksincha: yig‘ilishlar taxminan yarmiga qisqartiriladi.",
            },
            {
              id: "b2-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt:
                "Zu entscheiden, welche Aufgaben wegfallen, ist für die Betriebe schwierig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„das ist der unangenehmste Teil“.",
            },
            {
              id: "b2-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Die Zahl der Krankheitstage geht meistens zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„sinken in fast allen Projekten“ — 15–20% ga.",
            },
            {
              id: "b2-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Auch die Schlafqualität verbessert sich deutlich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Beim Schlaf sehen wir dagegen kaum Veränderungen“ — bu ularni hayratda qoldirgan.",
            },
            {
              id: "b2-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt:
                "In den untersuchten Betrieben bleibt das Gehalt unverändert.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Der Lohn bleibt gleich.“",
            },
            {
              id: "b2-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Frau Feldmann empfiehlt, den Lohn zu kürzen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„davon halte ich wenig“ — maosh qisqarsa motivatsiya tushadi.",
            },
            {
              id: "b2-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Sie rät zu einem befristeten Versuch mit klaren Zielen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Ein Pilotversuch von sechs Monaten mit klaren Kennzahlen.“",
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
        "Teil 3 · Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Entscheiden Sie: richtig oder falsch?",
      hint: "Ikkinchi eshitishda javobingizni tekshiring.",
      blocks: [
        {
          id: "b2h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Wirtschaftsmeldung im Radio",
            lines: [
              {
                voice: "male",
                text: "Die Zahl der offenen Stellen im Handwerk ist im vergangenen Jahr erneut gestiegen. Besonders gesucht werden Fachkräfte im Bereich Heizung und Sanitär. Gleichzeitig brechen rund zwanzig Prozent der Auszubildenden ihre Lehre vorzeitig ab.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Im Handwerk gibt es weniger offene Stellen als früher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„erneut gestiegen“ — bo‘sh ish o‘rinlari ko‘paygan.",
            },
          ],
        },
        {
          id: "b2h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einer Volkshochschule",
            lines: [
              {
                voice: "female",
                text: "Der Kurs „Rhetorik im Beruf“ ist bereits ausgebucht. Wir richten einen zweiten Termin ein, allerdings erst im Januar. Interessierte tragen sich bitte in die Warteliste ein; eine Anzahlung ist dafür nicht erforderlich.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Für die Warteliste muss man im Voraus zahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„eine Anzahlung ist dafür nicht erforderlich“ — oldindan to‘lov shart emas.",
            },
          ],
        },
        {
          id: "b2h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Verkehrsfunk",
            lines: [
              {
                voice: "male2",
                text: "Auf der A2 Richtung Dortmund ist nach einem Unfall die linke Spur gesperrt. Der Verkehr fließt einspurig weiter, es kommt zu etwa dreißig Minuten Zeitverlust. Eine Umleitung wird derzeit nicht empfohlen.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Die Autobahn ist vollständig gesperrt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat chap qator yopiq, transport bir qatorda harakatlanmoqda.",
            },
          ],
        },
        {
          id: "b2h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung einer Bank",
            lines: [
              {
                voice: "female2",
                text: "Sehr geehrte Kundinnen und Kunden, wegen einer Systemumstellung stehen Ihnen das Onlinebanking und die App am Wochenende nicht zur Verfügung. Geldautomaten und Kartenzahlungen funktionieren wie gewohnt.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Am Wochenende kann man kein Bargeld abheben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Bankomatlar ishlaydi; faqat onlayn bank va ilova ishlamaydi.",
            },
          ],
        },
        {
          id: "b2h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einem Museum",
            lines: [
              {
                voice: "male",
                text: "Die Sonderausstellung im Obergeschoss schließt heute bereits um siebzehn Uhr, da dort eine Veranstaltung vorbereitet wird. Die Dauerausstellung bleibt bis zwanzig Uhr geöffnet; der Eintritt wird für heute um drei Euro reduziert.",
              },
            ],
          },
          items: [
            {
              id: "b2-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Das ganze Museum schließt heute früher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat maxsus ko‘rgazma erta yopiladi; doimiy ekspozitsiya 20:00 gacha ochiq.",
            },
          ],
        },
      ],
    },
  ],
};
