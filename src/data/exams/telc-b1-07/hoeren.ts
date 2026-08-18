import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 07 · Hörverstehen — 3 Teil, 20 element, 75 ball. */
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
          id: "b1g-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Museum",
            lines: [
              {
                voice: "female",
                text: "Die Führung um 15 Uhr ist ausgebucht. Für die Führung um 17 Uhr sind noch Plätze frei; melden Sie sich bitte an der Kasse.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Um 17 Uhr kann man noch mitgehen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Für die Führung um 17 Uhr sind noch Plätze frei.“",
            },
          ],
        },
        {
          id: "b1g-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Werkstatt",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Aslan. Wir haben das Auto geprüft. Die Bremsen sind in Ordnung, aber die Reifen müssen vor dem Winter gewechselt werden.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Die Bremsen müssen repariert werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Die Bremsen sind in Ordnung“ — shinalar almashtirilishi kerak.",
            },
          ],
        },
        {
          id: "b1g-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Schwimmbad",
            lines: [
              {
                voice: "female2",
                text: "Der Schwimmkurs für Kinder beginnt heute zwanzig Minuten später. Bitte warten Sie im Eingangsbereich, nicht am Beckenrand.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Der Kurs fällt heute aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Faqat yigirma daqiqa kechikadi.",
            },
          ],
        },
        {
          id: "b1g-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch unter Kollegen",
            lines: [
              {
                voice: "male2",
                text: "Kannst du am Samstag meine Schicht übernehmen? Ich muss zu einer Hochzeit.",
              },
              {
                voice: "female",
                text: "Samstag geht leider nicht, da bin ich verplant. Aber den Sonntag könnte ich tauschen, wenn dir das hilft.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Frau kann am Samstag einspringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Samstag geht leider nicht.“",
            },
          ],
        },
        {
          id: "b1g-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Stadtwerke",
            lines: [
              {
                voice: "male",
                text: "Am Donnerstag wird zwischen 9 und 15 Uhr der Strom abgestellt. Aufzüge und Türöffner funktionieren in dieser Zeit nicht.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Der Aufzug funktioniert am Donnerstag durchgehend.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "9:00–15:00 orasida lift ishlamaydi.",
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
          id: "b1g-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Radiogespräch mit dem Gründer eines Werkzeugverleihs",
            lines: [
              {
                voice: "female2",
                text: "Herr Vogel, Sie verleihen Werkzeug an Nachbarn. Wie sind Sie darauf gekommen?",
              },
              {
                voice: "male",
                text: "Ich bin Rentner und war früher Elektriker. Irgendwann habe ich gemerkt, dass in unserer Straße fast jeder Haushalt eine Bohrmaschine hat — benutzt wird sie vielleicht zehn Minuten im Jahr.",
              },
              { voice: "female2", text: "Wie viele Geräte haben Sie inzwischen?" },
              {
                voice: "male",
                text: "Über zweihundert. Fast alles sind Spenden. Gekauft haben wir nur wenige teure Sachen, zum Beispiel den Dampfreiniger.",
              },
              { voice: "female2", text: "Was kostet die Nutzung?" },
              {
                voice: "male",
                text: "Dreißig Euro im Jahr, dann ist das Ausleihen kostenlos. Bei teuren Geräten nehmen wir eine Kaution, die man zurückbekommt.",
              },
              { voice: "female2", text: "Geht viel kaputt?" },
              {
                voice: "male",
                text: "Weniger, als alle denken. Im ersten Jahr hatte ich Sorge, aber die Leute gehen sorgfältiger mit fremdem Werkzeug um als mit eigenem.",
              },
              { voice: "female2", text: "Wer kommt zu Ihnen?" },
              {
                voice: "male",
                text: "Am Anfang vor allem junge Familien. Inzwischen kommen genauso viele Ältere — oft, weil sie jemanden zum Reden suchen. Das war nicht geplant, ist aber schön.",
              },
              { voice: "female2", text: "Und Ihr größtes Problem?" },
              {
                voice: "male",
                text: "Der Keller ist zu klein, und wir sind nur drei Ehrenamtliche. Geld fehlt uns dagegen nicht.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Herr Vogel war früher Elektriker.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„war früher Elektriker“.",
            },
            {
              id: "b1g-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Die meisten Geräte wurden gekauft.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Fast alles sind Spenden.“",
            },
            {
              id: "b1g-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Nach dem Jahresbeitrag ist das Ausleihen kostenlos.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„dann ist das Ausleihen kostenlos“.",
            },
            {
              id: "b1g-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Die Kaution behält der Verein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„die man zurückbekommt“.",
            },
            {
              id: "b1g-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Es geht weniger kaputt als erwartet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Weniger, als alle denken.“",
            },
            {
              id: "b1g-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Am Anfang kamen vor allem ältere Menschen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Boshida yosh oilalar kelgan.",
            },
            {
              id: "b1g-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Manche Ältere kommen auch wegen der Gesellschaft.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„weil sie jemanden zum Reden suchen“.",
            },
            {
              id: "b1g-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Das war von Anfang an so geplant.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Das war nicht geplant.“",
            },
            {
              id: "b1g-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Der Raum ist zu klein.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Der Keller ist zu klein.“",
            },
            {
              id: "b1g-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Dem Verein fehlt vor allem Geld.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Geld fehlt uns dagegen nicht.“",
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
          id: "b1g-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Bäckerei",
            lines: [
              {
                voice: "female",
                text: "Ab Montag haben wir sonntags geschlossen. Dafür öffnen wir samstags eine Stunde länger, bis 16 Uhr.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Samstags ist künftig länger geöffnet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„samstags eine Stunde länger, bis 16 Uhr“.",
            },
          ],
        },
        {
          id: "b1g-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Kita",
            lines: [
              {
                voice: "male2",
                text: "Liebe Eltern, wegen einer Fortbildung schließen wir am Freitag um zwölf. Eine Notbetreuung gibt es für Familien, die keine andere Lösung haben.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Am Freitagnachmittag ist überhaupt keine Betreuung möglich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Favqulodda holatlar uchun Notbetreuung bor.",
            },
          ],
        },
        {
          id: "b1g-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "female2",
                text: "Neu in unserem Fitnessstudio: ein Monat Probetraining für 15 Euro, ohne Vertrag. Wer danach bleibt, bekommt die 15 Euro angerechnet.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Für das Probetraining muss man einen Vertrag unterschreiben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„ohne Vertrag“.",
            },
          ],
        },
        {
          id: "b1g-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Zug",
            lines: [
              {
                voice: "male",
                text: "Wegen einer Verspätung erreichen wir Fulda etwa 15 Minuten später. Der Anschlusszug nach Kassel wartet auf uns.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Reisende nach Kassel verpassen ihren Anschluss.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Der Anschlusszug nach Kassel wartet auf uns.“",
            },
          ],
        },
        {
          id: "b1g-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Hausverwaltung",
            lines: [
              {
                voice: "female",
                text: "Die Gartenarbeit am Samstag findet nur bei trockenem Wetter statt. Bei Regen verschieben wir auf den folgenden Samstag.",
              },
            ],
          },
          items: [
            {
              id: "b1g-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Bei Regen fällt die Gartenarbeit ganz aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Keyingi shanbaga suriladi.",
            },
          ],
        },
      ],
    },
  ],
};
