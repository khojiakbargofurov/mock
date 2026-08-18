import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 03 · Hörverstehen — 3 Teil, 20 element, 75 ball.
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
      hint: "Javob ko‘pincha bitta cheklovchi so‘zga bog‘liq: „lediglich“, „erst“, „außer“.",
      blocks: [
        {
          id: "b2c-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung der Personalabteilung",
            lines: [
              {
                voice: "female2",
                text: "Ein Hinweis zur Zeiterfassung: Ab Oktober buchen Sie bitte ausschließlich über die App. Die Terminals in den Eingangsbereichen bleiben zunächst noch bestehen, werden aber nicht mehr ausgewertet.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Die Terminals werden im Oktober abgebaut.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„bleiben zunächst noch bestehen“ — olib tashlanmaydi.",
            },
          ],
        },
        {
          id: "b2c-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Steuerberaterin",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Frau Ahlers. Ihre Unterlagen sind vollständig, bis auf die Belege für das vierte Quartal. Reichen Sie die bitte bis Freitag nach, sonst müssen wir eine Fristverlängerung beantragen.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Es fehlen noch Unterlagen aus einem Quartal.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„bis auf die Belege für das vierte Quartal“.",
            },
          ],
        },
        {
          id: "b2c-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Die Zahl der Wohnungseinbrüche ist im vergangenen Jahr erneut gesunken. Fachleute führen das weniger auf mehr Polizeipräsenz zurück als auf bessere Sicherungstechnik in den Haushalten.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Der Rückgang wird vor allem der Polizei zugeschrieben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„weniger auf mehr Polizeipräsenz … als auf bessere Sicherungstechnik“.",
            },
          ],
        },
        {
          id: "b2c-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Betrieb",
            lines: [
              {
                voice: "male2",
                text: "Frau Ahlers, kann ich die Fortbildung im November auch online machen?",
              },
              {
                voice: "female",
                text: "Der theoretische Teil ja. Für den Praxistag müssen Sie aber vor Ort sein, daran führt kein Weg vorbei.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Fortbildung kann vollständig online absolviert werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Amaliyot kuni uchun joyida bo‘lish shart.",
            },
          ],
        },
        {
          id: "b2c-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Krankenhaus",
            lines: [
              {
                voice: "female2",
                text: "Wir bitten um Beachtung: Die Besuchszeiten werden ab Montag ausgeweitet. Auf der Intensivstation gelten allerdings weiterhin die bisherigen Regelungen.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Auf der Intensivstation ändert sich nichts.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„gelten allerdings weiterhin die bisherigen Regelungen“.",
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
      hint: "Ekspert fikrni cheklaydi — bayonot aynan shu nuanceni tekshiradi.",
      blocks: [
        {
          id: "b2c-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einem Bildungsforscher über Weiterbildung im Beruf",
            lines: [
              {
                voice: "female2",
                text: "Herr Professor Bruns, lebenslanges Lernen wird seit Jahren gefordert. Kommt es in den Betrieben an?",
              },
              {
                voice: "male",
                text: "Teilweise. Die Zahl der Angebote ist deutlich gestiegen, die Teilnahme aber nicht im gleichen Maß. Und sie verteilt sich sehr ungleich.",
              },
              { voice: "female2", text: "Wer nimmt denn teil?" },
              {
                voice: "male",
                text: "Vereinfacht gesagt: Wer ohnehin gut qualifiziert ist. Beschäftigte mit Hochschulabschluss bilden sich etwa dreimal so häufig weiter wie An- und Ungelernte. Genau umgekehrt wäre es sinnvoll.",
              },
              { voice: "female2", text: "Woran liegt das?" },
              {
                voice: "male",
                text: "Nicht in erster Linie am Interesse, das ist ein Missverständnis. Es liegt an Schichtarbeit, an Betreuungspflichten und daran, dass viele Angebote schriftlich und akademisch aufgebaut sind.",
              },
              { voice: "female2", text: "Hilft finanzielle Förderung?" },
              {
                voice: "male",
                text: "Sie hilft, reicht aber nicht. In unserer Untersuchung war die Freistellung von der Arbeit der wirksamere Hebel. Geld allein bringt wenig, wenn niemand die Schicht übernimmt.",
              },
              { voice: "female2", text: "Sie haben 90 Betriebe untersucht. Was hat Sie überrascht?" },
              {
                voice: "male",
                text: "Dass kurze Formate besser funktionieren als lange. Zwei Stunden pro Woche über ein halbes Jahr — davon kommt mehr an als von einer Woche am Stück.",
              },
              { voice: "female2", text: "Und die vielen Online-Angebote?" },
              {
                voice: "male",
                text: "Da bin ich zurückhaltend. Die Abbruchquoten sind hoch, teils über fünfzig Prozent. Online funktioniert gut, wenn es feste Termine und eine Gruppe gibt — nicht als Selbstlernkurs.",
              },
              { voice: "female2", text: "Was müsste sich politisch ändern?" },
              {
                voice: "male",
                text: "Ich plädiere nicht für neue Programme, davon gibt es genug. Sinnvoller wäre ein Rechtsanspruch auf Bildungszeit, wie ihn einige Bundesländer bereits kennen.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Die Zahl der Weiterbildungsangebote ist gestiegen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Die Zahl der Angebote ist deutlich gestiegen.“",
            },
            {
              id: "b2c-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Die Teilnahme ist im gleichen Maß gestiegen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„die Teilnahme aber nicht im gleichen Maß“.",
            },
            {
              id: "b2c-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Gut Qualifizierte bilden sich häufiger weiter.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Oliy ma’lumotlilar uch barobar ko‘p qatnashadi.",
            },
            {
              id: "b2c-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Der Hauptgrund ist fehlendes Interesse.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Nicht in erster Linie am Interesse, das ist ein Missverständnis.“",
            },
            {
              id: "b2c-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Schichtarbeit erschwert die Teilnahme.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Es liegt an Schichtarbeit, an Betreuungspflichten …“",
            },
            {
              id: "b2c-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Finanzielle Förderung allein löst das Problem.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Sie hilft, reicht aber nicht.“",
            },
            {
              id: "b2c-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Die Freistellung von der Arbeit wirkt stärker als Geld.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„die Freistellung … der wirksamere Hebel“.",
            },
            {
              id: "b2c-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Lange Blockkurse sind wirksamer als kurze Einheiten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Qisqa formatlar yaxshiroq ishlaydi.",
            },
            {
              id: "b2c-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Bei Online-Kursen sind die Abbruchquoten hoch.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„teils über fünfzig Prozent“.",
            },
            {
              id: "b2c-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Er fordert vor allem neue Förderprogramme.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "„Ich plädiere nicht für neue Programme“ — u Bildungszeit huquqini taklif qiladi.",
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
      hint: "Ikkinchi eshitishda faqat tekshirilayotgan detalga qarang.",
      blocks: [
        {
          id: "b2c-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage einer Hochschule",
            lines: [
              {
                voice: "female",
                text: "Ein Hinweis zur Prüfungsanmeldung: Das Portal ist bis zum 15. Januar geöffnet. Eine Abmeldung ist danach nur noch mit ärztlichem Attest möglich.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Nach dem 15. Januar kann man sich ohne Grund abmelden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat shifokor ma’lumotnomasi bilan.",
            },
          ],
        },
        {
          id: "b2c-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Information einer Versicherung",
            lines: [
              {
                voice: "male2",
                text: "Zu Ihrer Anfrage: Schäden durch Leitungswasser sind mitversichert, Schäden durch Hochwasser dagegen nur mit dem Zusatzbaustein Elementarschutz.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Hochwasserschäden sind ohne Zusatz nicht abgedeckt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„nur mit dem Zusatzbaustein Elementarschutz“.",
            },
          ],
        },
        {
          id: "b2c-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Betrieb",
            lines: [
              {
                voice: "female2",
                text: "Wegen der Wartung der Lüftungsanlage bleibt die Produktionshalle 2 am Samstag geschlossen. Die Frühschicht am Montag beginnt regulär.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Die Frühschicht am Montag verschiebt sich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„beginnt regulär“ — o‘zgarish yo‘q.",
            },
          ],
        },
        {
          id: "b2c-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Bank",
            lines: [
              {
                voice: "male",
                text: "Sehr geehrte Kundin, die Umstellung auf das neue Online-Banking erfolgt am Wochenende. Überweisungen sind in dieser Zeit möglich, werden aber erst am Montag ausgeführt.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Am Wochenende kann man keine Überweisung eingeben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Kiritish mumkin, faqat bajarilishi dushanbaga qoladi.",
            },
          ],
        },
        {
          id: "b2c-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Theater",
            lines: [
              {
                voice: "female",
                text: "Die heutige Vorstellung beginnt zehn Minuten später. Ein Einlass nach Beginn ist aus technischen Gründen ausgeschlossen; die Karten behalten selbstverständlich ihre Gültigkeit.",
              },
            ],
          },
          items: [
            {
              id: "b2c-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Wer zu spät kommt, wird nicht mehr eingelassen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ein Einlass nach Beginn ist … ausgeschlossen.“",
            },
          ],
        },
      ],
    },
  ],
};
