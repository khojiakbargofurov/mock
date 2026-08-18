import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 05 · Hörverstehen — 3 Teil, 20 element, 75 ball.
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
          id: "b1e-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Wartezimmer",
            lines: [
              {
                voice: "female",
                text: "Liebe Patientinnen und Patienten, wegen eines Notfalls verschieben sich heute alle Termine um etwa eine halbe Stunde. Wir bitten um Ihr Verständnis.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Die Termine fallen heute aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Bekor emas — yarim soatga suriladi.",
            },
          ],
        },
        {
          id: "b1e-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von der Bank",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Salimov. Ihr Antrag ist bei uns eingegangen. Uns fehlt allerdings noch die Gehaltsabrechnung vom letzten Monat.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Herr Salimov muss noch ein Dokument nachreichen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Uns fehlt … die Gehaltsabrechnung vom letzten Monat.“",
            },
          ],
        },
        {
          id: "b1e-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Supermarkt",
            lines: [
              {
                voice: "female2",
                text: "Ein Hinweis: Ab Montag öffnen wir bereits um sieben Uhr. Die Schließzeit am Abend bleibt unverändert bei zwanzig Uhr.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Der Supermarkt schließt ab Montag später.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Yopilish vaqti o‘zgarmaydi; faqat ochilish erta.",
            },
          ],
        },
        {
          id: "b1e-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Betrieb",
            lines: [
              {
                voice: "male2",
                text: "Frau Renz, können Sie am Freitag die Schulung übernehmen? Ich habe einen Termin.",
              },
              {
                voice: "female",
                text: "Freitag geht bei mir nicht. Aber Donnerstag hätte ich Zeit, wenn wir verschieben können.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Frau Renz kann am Freitag einspringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Freitag geht bei mir nicht“ — faqat payshanba.",
            },
          ],
        },
        {
          id: "b1e-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht vom Sportverein",
            lines: [
              {
                voice: "male",
                text: "Der Mitgliedsbeitrag steigt ab Januar von 12 auf 15 Euro. Wer bis Dezember kündigen möchte, kann das noch tun.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Der Beitrag wird höher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "12 evrodan 15 evroga oshadi.",
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
          id: "b1e-h2-b1",
          stimulus: {
            kind: "audio",
            situation: "Radiogespräch mit einer Betreiberin eines Dorfladens",
            lines: [
              {
                voice: "male2",
                text: "Frau Bauer, Ihr Dorf hatte fünf Jahre lang kein Geschäft. Wie kam der Laden zurück?",
              },
              {
                voice: "female",
                text: "Ich habe früher in einer Bank gearbeitet und wollte etwas anderes machen. Aber allein hätte ich es nie geschafft — 90 Leute aus dem Dorf haben Geld eingelegt.",
              },
              { voice: "male2", text: "Wie viel war das pro Person?" },
              {
                voice: "female",
                text: "Zwischen 100 und 500 Euro, je nachdem. Zusammen kamen 40.000 Euro zusammen. Das war der Anfang.",
              },
              { voice: "male2", text: "Was verkaufen Sie?" },
              {
                voice: "female",
                text: "Alles für den täglichen Bedarf. Etwa die Hälfte der Waren kommt von Höfen aus der Umgebung, der Rest vom Großhandel.",
              },
              { voice: "male2", text: "Können Sie mit den Supermarktpreisen mithalten?" },
              {
                voice: "female",
                text: "Nein, das können wir nicht. Wir sind bei manchen Sachen zehn bis fünfzehn Prozent teurer. Dafür sparen die Leute die Fahrt — 14 Kilometer hin und zurück.",
              },
              { voice: "male2", text: "Wer arbeitet bei Ihnen?" },
              {
                voice: "female",
                text: "Zwei Angestellte in Teilzeit und ich. Dazu kommen Ehrenamtliche, vor allem für den Samstag.",
              },
              { voice: "male2", text: "Läuft der Laden wirtschaftlich?" },
              {
                voice: "female",
                text: "Knapp. Wir zahlen die Gehälter und die Miete, aber Gewinn machen wir nicht. Im dritten Jahr hoffen wir auf eine schwarze Null.",
              },
              { voice: "male2", text: "Was ist der Laden für das Dorf?" },
              {
                voice: "female",
                text: "Mehr als ein Geschäft. Wir haben vier Tische aufgestellt — manche kommen nur zum Kaffee und bleiben eine Stunde.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Frau Bauer hat früher in einem Laden gearbeitet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ich habe früher in einer Bank gearbeitet.“",
            },
            {
              id: "b1e-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Sie hat den Laden mithilfe der Dorfbewohner eröffnet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„90 Leute aus dem Dorf haben Geld eingelegt“.",
            },
            {
              id: "b1e-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Alle haben den gleichen Betrag eingezahlt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Zwischen 100 und 500 Euro, je nachdem.“",
            },
            {
              id: "b1e-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Etwa die Hälfte der Waren stammt aus der Region.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Etwa die Hälfte der Waren kommt von Höfen aus der Umgebung.“",
            },
            {
              id: "b1e-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Die Preise sind niedriger als im Supermarkt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„zehn bis fünfzehn Prozent teurer“.",
            },
            {
              id: "b1e-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Die Kunden sparen sich eine längere Fahrt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„14 Kilometer hin und zurück“.",
            },
            {
              id: "b1e-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Im Laden arbeiten auch Ehrenamtliche.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Dazu kommen Ehrenamtliche, vor allem für den Samstag.“",
            },
            {
              id: "b1e-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Der Laden macht bereits Gewinn.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Gewinn machen wir nicht.“",
            },
            {
              id: "b1e-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Löhne und Miete kann der Laden bezahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wir zahlen die Gehälter und die Miete.“",
            },
            {
              id: "b1e-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Manche Kunden kommen vor allem zum Reden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„manche kommen nur zum Kaffee und bleiben eine Stunde“.",
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
          id: "b1e-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Kino",
            lines: [
              {
                voice: "female",
                text: "Der Film beginnt heute zwanzig Minuten später. Die Werbung entfällt dafür. Wer nicht warten möchte, bekommt an der Kasse sein Geld zurück.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Wer nicht warten will, bekommt eine Rückzahlung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„bekommt an der Kasse sein Geld zurück“.",
            },
          ],
        },
        {
          id: "b1e-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Stadtverwaltung",
            lines: [
              {
                voice: "male2",
                text: "Die Sperrmüllabholung findet am 14. Mai statt. Stellen Sie die Möbel bitte erst am Abend vorher heraus, nicht früher.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Man darf die Möbel schon eine Woche vorher hinausstellen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„erst am Abend vorher … nicht früher“.",
            },
          ],
        },
        {
          id: "b1e-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "female2",
                text: "Unsere Fahrschule bietet den Theorieunterricht jetzt auch online an. Die praktischen Stunden finden natürlich weiterhin im Auto statt.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Auch die Fahrstunden kann man online machen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Amaliy darslar mashinada bo‘lib qoladi.",
            },
          ],
        },
        {
          id: "b1e-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht aus der Kita",
            lines: [
              {
                voice: "female",
                text: "Liebe Eltern, wegen Krankheit können wir am Freitag nur bis dreizehn Uhr betreuen. Wir bitten Sie, Ihr Kind rechtzeitig abzuholen.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Am Freitag endet die Betreuung früher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„nur bis dreizehn Uhr“.",
            },
          ],
        },
        {
          id: "b1e-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Möbelhaus",
            lines: [
              {
                voice: "male",
                text: "Wir schließen in fünfzehn Minuten. An der Kasse bedienen wir Sie noch; das Lager ist bereits geschlossen.",
              },
            ],
          },
          items: [
            {
              id: "b1e-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Man kann noch bezahlen, aber nichts mehr aus dem Lager holen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„das Lager ist bereits geschlossen“.",
            },
          ],
        },
      ],
    },
  ],
};
