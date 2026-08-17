import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 02 · Hörverstehen — 3 Teil, 20 element, 75 ball.
 * Teil 1 (1×): 5 qisqa matn · Teil 2 (1×): ekspert bilan suhbat, 10 bayonot
 * Teil 3 (2×): 5 rasmiy e'lon va xabar.
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
      hint: "B2 da javob ko‘pincha bitta cheklovchi so‘zga bog‘liq: „nur“, „erst“, „außer“, „lediglich“.",
      blocks: [
        {
          id: "b2b-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung in einem Unternehmen",
            lines: [
              {
                voice: "female2",
                text: "Ein Hinweis aus der IT-Abteilung: Das Netzwerk wird am Samstag zwischen acht und vierzehn Uhr gewartet. In dieser Zeit sind zwar die Server nicht erreichbar, die Telefonanlage funktioniert jedoch uneingeschränkt weiter.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Am Samstag fällt auch das Telefon aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„die Telefonanlage funktioniert jedoch uneingeschränkt weiter“ — faqat serverlar ishlamaydi.",
            },
          ],
        },
        {
          id: "b2b-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf dem Anrufbeantworter",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Rakhimova, Zahnarztpraxis Dr. Lenz. Ihr Termin am Donnerstag findet wie geplant statt, allerdings nicht bei Dr. Lenz, sondern bei seiner Kollegin Frau Dr. Serrano. Falls Ihnen das nicht recht ist, melden Sie sich bitte bis Mittwoch.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Der Termin wurde auf einen anderen Tag verlegt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Kun o‘zgarmagan — „findet wie geplant statt“; faqat shifokor boshqa.",
            },
          ],
        },
        {
          id: "b2b-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Eine aktuelle Auswertung zeigt: Die Zahl der Berufspendler ist im vergangenen Jahr erstmals seit langem leicht zurückgegangen. Die durchschnittliche Entfernung zum Arbeitsplatz ist allerdings weiter gestiegen — wer pendelt, fährt also seltener, dafür weiter.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Die durchschnittliche Entfernung zum Arbeitsplatz hat zugenommen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Die durchschnittliche Entfernung … ist weiter gestiegen.“",
            },
          ],
        },
        {
          id: "b2b-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch in der Personalabteilung",
            lines: [
              {
                voice: "male2",
                text: "Frau Ahlers, ich würde meinen Resturlaub gern ins nächste Jahr mitnehmen. Geht das?",
              },
              {
                voice: "female",
                text: "Grundsätzlich ja, aber nur bis Ende März. Was bis dahin nicht genommen ist, verfällt. Reichen Sie den Antrag am besten noch diese Woche ein.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Der Resturlaub kann unbegrenzt übertragen werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„aber nur bis Ende März. Was bis dahin nicht genommen ist, verfällt.“",
            },
          ],
        },
        {
          id: "b2b-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Flughafen",
            lines: [
              {
                voice: "female2",
                text: "Eine Information für die Passagiere des Fluges LH neun-sechs-vier nach Wien: Der Abflug verzögert sich um etwa vierzig Minuten. Das Boarding beginnt voraussichtlich um elf Uhr zwanzig an Gate B zwölf, nicht wie ursprünglich angegeben an Gate B sieben.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Der Flug startet am ursprünglich genannten Gate.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Gate B7 o‘rniga B12 — „nicht wie ursprünglich angegeben“.",
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
      hint: "Ekspert ko‘pincha fikrni cheklaydi („nicht generell“, „in erster Linie“) — bayonot shu nuanceni tekshiradi.",
      blocks: [
        {
          id: "b2b-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einer Arbeitspsychologin über Homeoffice und Erreichbarkeit",
            lines: [
              {
                voice: "male2",
                text: "Frau Dr. Sander, Sie erforschen seit Jahren, wie sich ständige Erreichbarkeit auf Beschäftigte auswirkt. Ist das grundsätzlich schädlich?",
              },
              {
                voice: "female",
                text: "So pauschal kann man das nicht sagen. Entscheidend ist nicht, ob jemand abends eine Mail liest, sondern ob er das Gefühl hat, es tun zu müssen. Diese empfundene Verpflichtung ist der eigentliche Belastungsfaktor.",
              },
              {
                voice: "male2",
                text: "Viele Unternehmen haben inzwischen die Server nach Feierabend abgeschaltet. Halten Sie das für sinnvoll?",
              },
              {
                voice: "female",
                text: "In den Studien, die wir ausgewertet haben, war der Effekt geringer als erwartet. Wer wollte, hat einfach das private Handy benutzt. Wirksamer sind klare Absprachen im Team — also festzulegen, was wirklich dringend ist.",
              },
              {
                voice: "male2",
                text: "Sie haben 1.200 Beschäftigte über zwei Jahre begleitet. Was hat Sie am meisten überrascht?",
              },
              {
                voice: "female",
                text: "Dass die Führungskraft fast alles erklärt. In Teams, deren Leitung selbst nachts schrieb, fühlten sich die Mitarbeitenden verpflichtet zu antworten — auch ohne jede Aufforderung.",
              },
              {
                voice: "male2",
                text: "Und wie sieht es im Homeoffice aus?",
              },
              {
                voice: "female",
                text: "Da ist das Bild gemischt. Die Zufriedenheit ist im Schnitt höher, das stimmt. Zugleich berichten mehr Menschen, dass ihnen der Übergang zwischen Arbeit und Freizeit fehlt. Das Pendeln hatte, so seltsam das klingt, auch eine nützliche Funktion.",
              },
              {
                voice: "male2",
                text: "Was raten Sie Beschäftigten konkret?",
              },
              {
                voice: "female",
                text: "Ein festes Ende zu setzen und es sichtbar zu machen — den Laptop zuklappen, kurz rausgehen. Ich empfehle ausdrücklich keine starren Regeln, die für alle gelten. Menschen arbeiten unterschiedlich.",
              },
              {
                voice: "male2",
                text: "Muss der Gesetzgeber eingreifen?",
              },
              {
                voice: "female",
                text: "Ein gesetzliches Verbot der abendlichen Kommunikation halte ich für den falschen Weg. Sinnvoll wäre dagegen, Betriebe zu verpflichten, das Thema überhaupt zu regeln — wie auch immer sie sich dann entscheiden.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt:
                "Frau Dr. Sander hält ständige Erreichbarkeit für generell schädlich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„So pauschal kann man das nicht sagen.“",
            },
            {
              id: "b2b-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt:
                "Belastend ist vor allem das Gefühl, antworten zu müssen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Diese empfundene Verpflichtung ist der eigentliche Belastungsfaktor.“",
            },
            {
              id: "b2b-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Das Abschalten der Server hat sich als sehr wirksam erwiesen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„der Effekt war geringer als erwartet“ — xodimlar shaxsiy telefonini ishlatgan.",
            },
            {
              id: "b2b-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Klare Absprachen im Team wirken besser als technische Sperren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wirksamer sind klare Absprachen im Team.“",
            },
            {
              id: "b2b-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "An der Untersuchung nahmen etwa 200 Personen teil.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "1.200 xodim ikki yil davomida kuzatilgan.",
            },
            {
              id: "b2b-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Das Verhalten der Vorgesetzten prägt das ganze Team.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Rahbar kechasi yozsa, xodimlar ham javob berishga majbur his qilgan.",
            },
            {
              id: "b2b-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Im Homeoffice ist die Zufriedenheit im Durchschnitt geringer.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Die Zufriedenheit ist im Schnitt höher.“",
            },
            {
              id: "b2b-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Vielen fehlt zu Hause der Übergang zwischen Arbeit und Freizeit.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Qatnov („das Pendeln“) shu o‘tish vazifasini bajargan ekan.",
            },
            {
              id: "b2b-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Sie empfiehlt einheitliche Regeln für alle Beschäftigten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Ich empfehle ausdrücklich keine starren Regeln, die für alle gelten.“",
            },
            {
              id: "b2b-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt:
                "Ein gesetzliches Verbot abendlicher Mails lehnt sie ab.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„halte ich für den falschen Weg“ — o‘rniga korxonalarni tartibga solishga majburlash kerak.",
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
      hint: "Ikkinchi eshitishda faqat tekshirilayotgan detalga e’tibor bering.",
      blocks: [
        {
          id: "b2b-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einer Behörde",
            lines: [
              {
                voice: "female",
                text: "Sehr geehrte Besucherinnen und Besucher: Vorgänge ohne Termin können wir derzeit nur bis zwölf Uhr bearbeiten. Wer einen gebuchten Termin hat, wird auch am Nachmittag aufgerufen.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Mit Termin wird man auch nachmittags bedient.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Wer einen gebuchten Termin hat, wird auch am Nachmittag aufgerufen.“",
            },
          ],
        },
        {
          id: "b2b-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Hausverwaltung",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, hier die Hausverwaltung Brunner. Die angekündigte Ablesung der Heizkosten verschiebt sich vom achten auf den fünfzehnten Oktober. Sie müssen nicht persönlich anwesend sein, sofern ein Nachbar den Zugang ermöglicht.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Die Mieter müssen an diesem Tag zu Hause sein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Qo‘shni kirish imkonini bersa, o‘zi bo‘lishi shart emas.",
            },
          ],
        },
        {
          id: "b2b-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Werbung eines Bildungsanbieters",
            lines: [
              {
                voice: "female2",
                text: "Unsere Abendkurse starten im Januar. Wer sich bis zum ersten Dezember anmeldet, zahlt zehn Prozent weniger. Der Rabatt gilt allerdings nicht für Kurse, die bereits gefördert werden.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Der Rabatt gilt für alle Kurse ohne Ausnahme.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Davlat tomonidan qo‘llab-quvvatlanadigan kurslarga chegirma yo‘q.",
            },
          ],
        },
        {
          id: "b2b-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Information einer Krankenkasse",
            lines: [
              {
                voice: "male2",
                text: "Ein Hinweis zu unseren Präventionskursen: Die Kosten werden erstattet, wenn Sie an mindestens achtzig Prozent der Termine teilgenommen haben. Die Teilnahmebestätigung reichen Sie bitte innerhalb von drei Monaten nach Kursende ein.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Die Erstattung setzt eine regelmäßige Teilnahme voraus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "Kamida 80% mashg‘ulotda qatnashish sharti bor.",
            },
          ],
        },
        {
          id: "b2b-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "female",
                text: "Sehr geehrte Fahrgäste, wegen einer Streckensperrung endet dieser Zug bereits in Fulda. Reisende in Richtung Frankfurt nutzen bitte den bereitstehenden Ersatzverkehr. Fahrgäste mit Sitzplatzreservierung erhalten die Reservierungsgebühr am Schalter zurück.",
              },
            ],
          },
          items: [
            {
              id: "b2b-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Der gesamte Fahrpreis wird erstattet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat joy band qilish haqi („die Reservierungsgebühr“) qaytariladi.",
            },
          ],
        },
      ],
    },
  ],
};
