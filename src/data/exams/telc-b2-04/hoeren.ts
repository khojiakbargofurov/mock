import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 04 · Hörverstehen — 3 Teil, 20 element, 75 ball.
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
          id: "b2d-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung einer Hochschule",
            lines: [
              {
                voice: "female2",
                text: "Eine Information zur Bibliothek: Die Ausleihe bleibt während der Umbauphase möglich, allerdings nur mit Vorbestellung über den Katalog. Der Lesesaal ist bis Ende März gesperrt.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Während des Umbaus kann man keine Bücher ausleihen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Mumkin — faqat katalog orqali oldindan buyurtma bilan.",
            },
          ],
        },
        {
          id: "b2d-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Hausverwaltung",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Aydin. Die Nebenkostenabrechnung ist fertig. Bei Ihnen ergibt sich eine Nachzahlung von 240 Euro, fällig zum Ersten des übernächsten Monats.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Frau Aydin bekommt Geld zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„eine Nachzahlung von 240 Euro“ — u to‘lashi kerak.",
            },
          ],
        },
        {
          id: "b2d-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Die Zahl der Auszubildenden ist erstmals seit sechs Jahren wieder leicht gestiegen. Gleichzeitig blieb jede achte Lehrstelle unbesetzt — vor allem in Gastronomie und Bau.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Trotz des Anstiegs blieben viele Lehrstellen frei.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Gleichzeitig blieb jede achte Lehrstelle unbesetzt.“",
            },
          ],
        },
        {
          id: "b2d-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch in der Personalabteilung",
            lines: [
              {
                voice: "male2",
                text: "Kann ich meine Fortbildung als Bildungsurlaub anrechnen lassen?",
              },
              {
                voice: "female",
                text: "Nur wenn der Anbieter dafür anerkannt ist. Fragen Sie das bitte vor der Anmeldung — im Nachhinein geht es nicht mehr.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Anrechnung kann auch später beantragt werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„im Nachhinein geht es nicht mehr“.",
            },
          ],
        },
        {
          id: "b2d-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Betrieb",
            lines: [
              {
                voice: "female2",
                text: "Die Betriebsversammlung findet wie geplant am Donnerstag statt. Wer im Homeoffice ist, kann per Videokonferenz teilnehmen — die Teilnahme gilt in beiden Fällen als Arbeitszeit.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Nur die Teilnahme vor Ort zählt als Arbeitszeit.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„gilt in beiden Fällen als Arbeitszeit“.",
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
      blocks: [
        {
          id: "b2d-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einer Verkehrsplanerin über die autoarme Innenstadt",
            lines: [
              {
                voice: "male2",
                text: "Frau Dr. Ostermann, in vielen Städten verschwinden Parkplätze aus der Innenstadt. Funktioniert das?",
              },
              {
                voice: "female",
                text: "In den Städten, die wir begleitet haben, ja — aber nicht automatisch. Entscheidend ist, ob es vorher ein Angebot gibt. Wer erst Parkplätze streicht und danach über Busse nachdenkt, verliert die Menschen.",
              },
              { voice: "male2", text: "Der Einzelhandel fürchtet Umsatzeinbußen." },
              {
                voice: "female",
                text: "Diese Sorge ist verständlich, wird von den Daten aber selten bestätigt. Händler schätzen den Anteil ihrer Autokunden regelmäßig zu hoch ein — teilweise auf das Doppelte des tatsächlichen Werts.",
              },
              { voice: "male2", text: "Wie erklären Sie sich das?" },
              {
                voice: "female",
                text: "Autokunden sind sichtbarer. Sie tragen große Tüten, sie parken vor dem Laden. Wer zu Fuß dreimal die Woche kommt, fällt niemandem auf, gibt am Ende aber mehr aus.",
              },
              { voice: "male2", text: "Gibt es auch Fälle, in denen es nicht klappt?" },
              {
                voice: "female",
                text: "Durchaus. In einer Mittelstadt in Hessen wurde eine Zone eingerichtet, ohne die Anlieferung zu regeln. Nach vier Monaten wurde das Projekt zurückgenommen — nicht wegen der Kundschaft, sondern wegen der Betriebe.",
              },
              { voice: "male2", text: "Was ist mit älteren Menschen?" },
              {
                voice: "female",
                text: "Das ist ein berechtigter Einwand. Deshalb empfehle ich immer, Kurzzeitparkplätze und Haltemöglichkeiten zu erhalten. Eine Innenstadt ohne jedes Auto ist nicht mein Ziel.",
              },
              { voice: "male2", text: "Und die Kosten?" },
              {
                voice: "female",
                text: "Der Umbau ist teuer, das stimmt. Er rechnet sich meist erst nach zehn bis fünfzehn Jahren — über geringere Folgekosten bei Lärm und Gesundheit. Das ist politisch schwer zu vermitteln.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Der Abbau von Parkplätzen funktioniert immer.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„ja — aber nicht automatisch“.",
            },
            {
              id: "b2d-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Ein Alternativangebot muss vorher vorhanden sein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Entscheidend ist, ob es vorher ein Angebot gibt.“",
            },
            {
              id: "b2d-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Die Umsatzsorgen des Handels bestätigen sich meist.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„wird von den Daten aber selten bestätigt“.",
            },
            {
              id: "b2d-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Händler überschätzen den Anteil ihrer Autokunden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„teilweise auf das Doppelte des tatsächlichen Werts“.",
            },
            {
              id: "b2d-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Kunden zu Fuß geben insgesamt mehr aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„gibt am Ende aber mehr aus“.",
            },
            {
              id: "b2d-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "In Hessen scheiterte ein Projekt an den Kunden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nicht wegen der Kundschaft, sondern wegen der Betriebe“.",
            },
            {
              id: "b2d-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Dort wurde die Anlieferung nicht geregelt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„ohne die Anlieferung zu regeln“.",
            },
            {
              id: "b2d-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Sie hält den Einwand wegen älterer Menschen für berechtigt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Das ist ein berechtigter Einwand.“",
            },
            {
              id: "b2d-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Ihr Ziel ist eine Innenstadt völlig ohne Autos.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„ist nicht mein Ziel“.",
            },
            {
              id: "b2d-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Der Umbau rechnet sich erst nach vielen Jahren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„erst nach zehn bis fünfzehn Jahren“.",
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
          id: "b2d-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einer Behörde",
            lines: [
              {
                voice: "female",
                text: "Ein Hinweis: Anträge auf Wohngeld nehmen wir ab sofort ausschließlich digital entgegen. Wer keinen Zugang hat, kann die Terminals im Erdgeschoss nutzen; Unterstützung erhalten Sie dort vormittags.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Ohne eigenen Computer ist der Antrag unmöglich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Birinchi qavatda terminal va yordam bor.",
            },
          ],
        },
        {
          id: "b2d-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Information einer Krankenkasse",
            lines: [
              {
                voice: "male",
                text: "Die Kosten für die Zahnreinigung übernehmen wir zweimal jährlich, allerdings nur bei Praxen mit Direktabrechnung. In allen anderen Fällen reichen Sie die Rechnung ein.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Bei Praxen ohne Direktabrechnung zahlt man zunächst selbst.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„reichen Sie die Rechnung ein“ — keyin qoplanadi.",
            },
          ],
        },
        {
          id: "b2d-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Fernzug",
            lines: [
              {
                voice: "female2",
                text: "Aufgrund einer Weichenstörung verzögert sich die Weiterfahrt um voraussichtlich 25 Minuten. Anschlusszüge in Hannover werden verständigt, eine Garantie können wir jedoch nicht geben.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Die Anschlusszüge warten auf jeden Fall.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„eine Garantie können wir jedoch nicht geben“.",
            },
          ],
        },
        {
          id: "b2d-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht eines Vermieters",
            lines: [
              {
                voice: "male2",
                text: "Sehr geehrte Mieterinnen und Mieter, die Modernisierung beginnt im Mai. Eine Mieterhöhung ist damit verbunden; über die genaue Höhe informieren wir Sie drei Monate vorher schriftlich.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Die genaue Mieterhöhung steht bereits fest.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Aniq miqdor keyinroq, uch oy oldin xabar qilinadi.",
            },
          ],
        },
        {
          id: "b2d-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage einer Volkshochschule",
            lines: [
              {
                voice: "female",
                text: "Der Kurs findet ab einer Mindestteilnehmerzahl von acht Personen statt. Bei Absage erstatten wir die Gebühr vollständig; ein Anspruch auf einen Ersatztermin besteht nicht.",
              },
            ],
          },
          items: [
            {
              id: "b2d-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Bei einer Absage bekommt man das Geld zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„erstatten wir die Gebühr vollständig“.",
            },
          ],
        },
      ],
    },
  ],
};
