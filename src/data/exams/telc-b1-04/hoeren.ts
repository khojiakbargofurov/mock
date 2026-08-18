import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 04 · Hörverstehen — 3 Teil, 20 element, 75 ball.
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
      blocks: [
        {
          id: "b1d-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Bibliothek",
            lines: [
              {
                voice: "female",
                text: "Liebe Leserinnen und Leser, ab Montag können Sie Bücher auch über den Automaten im Eingangsbereich zurückgeben — rund um die Uhr, auch wenn wir geschlossen haben.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Bücher kann man künftig nur zu den Öffnungszeiten zurückgeben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Avtomat orqali kechayu kunduz qaytarish mumkin.",
            },
          ],
        },
        {
          id: "b1d-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Autowerkstatt",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Aydin. Das Ersatzteil kommt erst am Donnerstag. Ihr Auto steht bei uns sicher, wir berechnen dafür keine Standgebühr.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Für das Stehen in der Werkstatt muss Herr Aydin bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„wir berechnen dafür keine Standgebühr“.",
            },
          ],
        },
        {
          id: "b1d-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Einkaufszentrum",
            lines: [
              {
                voice: "female2",
                text: "Sehr geehrte Kundinnen und Kunden, die Tiefgarage schließt heute bereits um zwanzig Uhr. Bitte holen Sie Ihr Fahrzeug rechtzeitig ab.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Die Kunden sollen ihr Auto vor 20 Uhr abholen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Garaj 20:00 da yopiladi — o‘z vaqtida olib ketish kerak.",
            },
          ],
        },
        {
          id: "b1d-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Büro",
            lines: [
              {
                voice: "male2",
                text: "Frau Renz, schaffen Sie die Auswertung bis morgen?",
              },
              {
                voice: "female",
                text: "Bis morgen wird knapp. Wenn ich sie Ihnen Donnerstagfrüh gebe, reicht das auch?",
              },
              { voice: "male2", text: "Ja, das genügt." },
            ],
          },
          items: [
            {
              id: "b1d-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Auswertung kommt später als ursprünglich gewünscht.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Ertaga emas, payshanba ertalab beriladi.",
            },
          ],
        },
        {
          id: "b1d-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus dem Kindergarten",
            lines: [
              {
                voice: "female",
                text: "Liebe Eltern, morgen ist Fototag. Bitte geben Sie Ihrem Kind keine besondere Kleidung mit — die Fotos machen wir so, wie die Kinder kommen.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Die Kinder sollen besonders schöne Kleidung anziehen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„keine besondere Kleidung“ — odatdagidek kelishadi.",
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
      blocks: [
        {
          id: "b1d-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Radiogespräch mit der Leiterin eines Mittagstischs für Kinder",
            lines: [
              {
                voice: "male2",
                text: "Frau Özdemir, in Ihrem Nachbarschaftszentrum essen jeden Tag vierzig Kinder zu Mittag. Wie hat das angefangen?",
              },
              {
                voice: "female",
                text: "Vor sechs Jahren kam eine Lehrerin zu uns. Sie hatte bemerkt, dass einige Kinder nachmittags nichts gegessen hatten. Wir haben mit zwölf Kindern angefangen.",
              },
              { voice: "male2", text: "Wer kocht?" },
              {
                voice: "female",
                text: "Zwei Angestellte und meistens vier Ehrenamtliche. Ohne die Freiwilligen wäre das nicht zu schaffen — sie kommen fast alle aus dem Viertel.",
              },
              { voice: "male2", text: "Was kostet eine Mahlzeit?" },
              {
                voice: "female",
                text: "Wir nehmen einen Euro. Wer das nicht zahlen kann, sagt uns das leise — und dann ist es eben frei. Niemand muss sich erklären.",
              },
              { voice: "male2", text: "Woher kommt das Geld?" },
              {
                voice: "female",
                text: "Der größte Teil sind Spenden. Die Stadt hilft bei der Miete, aber die Lebensmittel bezahlen wir selbst.",
              },
              { voice: "male2", text: "Kommen die Kinder allein?" },
              {
                voice: "female",
                text: "Die Kleineren werden von der Schule geholt, das machen zwei Ehrenamtliche. Die Größeren kommen selbst, manche bringen ihre Geschwister mit.",
              },
              { voice: "male2", text: "Was hat sich in sechs Jahren verändert?" },
              {
                voice: "female",
                text: "Die Zahl ist gestiegen, aber auch das Publikum: Früher kamen fast nur Familien mit wenig Geld. Heute kommen auch Kinder, deren Eltern einfach lange arbeiten.",
              },
              { voice: "male2", text: "Und Ihr größtes Problem?" },
              {
                voice: "female",
                text: "Die Küche. Sie ist für zwanzig Portionen gebaut, nicht für vierzig. Ein Umbau würde 60.000 Euro kosten — das Geld haben wir nicht.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Die Idee kam von einer Lehrerin.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Vor sechs Jahren kam eine Lehrerin zu uns.“",
            },
            {
              id: "b1d-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Am Anfang kamen etwa vierzig Kinder.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Wir haben mit zwölf Kindern angefangen.“",
            },
            {
              id: "b1d-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Ohne Ehrenamtliche wäre der Mittagstisch nicht möglich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ohne die Freiwilligen wäre das nicht zu schaffen.“",
            },
            {
              id: "b1d-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Alle Kinder müssen einen Euro bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "To‘lay olmaganlar uchun bepul.",
            },
            {
              id: "b1d-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Die Stadt bezahlt die Lebensmittel.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Shahar ijaraga yordam beradi; oziq-ovqat o‘zlaridan.",
            },
            {
              id: "b1d-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Die jüngeren Kinder werden von der Schule abgeholt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Die Kleineren werden von der Schule geholt.“",
            },
            {
              id: "b1d-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Heute kommen auch Kinder berufstätiger Eltern.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Kinder, deren Eltern einfach lange arbeiten“.",
            },
            {
              id: "b1d-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Die Zahl der Kinder ist in sechs Jahren gesunken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Die Zahl ist gestiegen.“",
            },
            {
              id: "b1d-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Die Küche ist für die heutige Zahl zu klein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„für zwanzig Portionen gebaut, nicht für vierzig“.",
            },
            {
              id: "b1d-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Für den Umbau ist das Geld bereits vorhanden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„das Geld haben wir nicht“.",
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
      blocks: [
        {
          id: "b1d-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "male",
                text: "Nur an diesem Wochenende: Beim Kauf einer Brille bekommen Sie die zweite geschenkt. Das Angebot gilt nicht für Sonnenbrillen.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Das Angebot gilt auch für Sonnenbrillen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„gilt nicht für Sonnenbrillen“.",
            },
          ],
        },
        {
          id: "b1d-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Freibad",
            lines: [
              {
                voice: "female2",
                text: "Wegen des Gewitters müssen wir die Becken sofort räumen. Das Bad bleibt heute geschlossen; Ihre Tageskarte gilt auch morgen.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Die Gäste bekommen ihr Geld zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Pul emas — chipta ertaga ham amal qiladi.",
            },
          ],
        },
        {
          id: "b1d-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Schule",
            lines: [
              {
                voice: "male2",
                text: "Liebe Eltern, die Klassenfahrt kostet 180 Euro. Wer Unterstützung braucht, meldet sich bitte im Sekretariat — es gibt einen Fonds für solche Fälle.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Familien mit wenig Geld können Hilfe bekommen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„es gibt einen Fonds für solche Fälle“.",
            },
          ],
        },
        {
          id: "b1d-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage am Flughafen",
            lines: [
              {
                voice: "female",
                text: "Passagiere nach Wien: Ihr Flug startet planmäßig, allerdings von Gate A vier statt A neun. Das Boarding beginnt in zehn Minuten.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Der Flug hat Verspätung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„startet planmäßig“ — faqat gate o‘zgargan.",
            },
          ],
        },
        {
          id: "b1d-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht vom Sportverein",
            lines: [
              {
                voice: "male",
                text: "Das Training fällt diese Woche aus, weil die Halle gereinigt wird. Ersatzweise treffen wir uns am Samstag um zehn im Park.",
              },
            ],
          },
          items: [
            {
              id: "b1d-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Diese Woche gibt es überhaupt kein Training.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Shanba kuni bog‘da mashg‘ulot bo‘ladi.",
            },
          ],
        },
      ],
    },
  ],
};
