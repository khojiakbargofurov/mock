import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 06 · Hörverstehen — 3 Teil, 20 element, 75 ball. */
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
          id: "b2f-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung einer Hochschule",
            lines: [
              {
                voice: "female2",
                text: "Die Bibliothek verlängert ihre Öffnungszeiten in der Prüfungsphase bis Mitternacht. Die Ausleihe an der Theke endet allerdings weiterhin um achtzehn Uhr.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Bücher kann man künftig bis Mitternacht ausleihen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Ijaraga berish 18:00 da tugaydi.",
            },
          ],
        },
        {
          id: "b2f-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht der Personalabteilung",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Aslan. Ihr Antrag auf Bildungsurlaub ist genehmigt — allerdings nur für vier der beantragten fünf Tage, da am Freitag Inventur ist.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Der Antrag wurde vollständig genehmigt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Besh kundan faqat to‘rttasi tasdiqlandi.",
            },
          ],
        },
        {
          id: "b2f-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Die Zahl der Ausbildungsverträge ist leicht gestiegen. Zugleich blieb der Anteil der vorzeitig gelösten Verträge mit rund einem Drittel unverändert hoch.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Weniger Verträge werden vorzeitig beendet als früher.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„unverändert hoch“ — o‘zgarmagan.",
            },
          ],
        },
        {
          id: "b2f-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch im Betrieb",
            lines: [
              {
                voice: "male2",
                text: "Frau Ahlers, können wir die neue Software direkt in allen Abteilungen einführen?",
              },
              {
                voice: "female",
                text: "Davon würde ich abraten. Wir sollten mit einer Abteilung anfangen und erst nach der Auswertung entscheiden.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Frau empfiehlt eine schrittweise Einführung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„mit einer Abteilung anfangen“ — bosqichma-bosqich.",
            },
          ],
        },
        {
          id: "b2f-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in der Stadthalle",
            lines: [
              {
                voice: "male",
                text: "Die Veranstaltung beginnt wie geplant. Wegen einer defekten Lüftung bitten wir Sie jedoch, die hinteren Reihen freizuhalten.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Die Veranstaltung wurde verschoben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„beginnt wie geplant“.",
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
          id: "b2f-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einem Verkehrsforscher über den ländlichen Nahverkehr",
            lines: [
              {
                voice: "female2",
                text: "Herr Professor Weiss, auf dem Land fährt der Bus oft dreimal am Tag. Lässt sich das überhaupt ändern?",
              },
              {
                voice: "male",
                text: "Mit klassischen Linien kaum. Ein Bus, der leer fährt, ist teuer und ökologisch fragwürdig. Die Frage ist nicht, ob wir mehr Busse brauchen, sondern welche Form von Verkehr.",
              },
              { voice: "female2", text: "Sie meinen Rufbusse?" },
              {
                voice: "male",
                text: "Unter anderem. In unseren Modellregionen hat sich gezeigt, dass ein bestellbarer Kleinbus die Nachfrage besser trifft. Die Kosten pro Fahrgast lagen dabei etwa ein Drittel unter denen der alten Linie.",
              },
              { voice: "female2", text: "Warum wird das dann nicht überall gemacht?" },
              {
                voice: "male",
                text: "Weil es Verwaltungsaufwand bedeutet und weil viele Landkreise die Software nicht selbst betreiben wollen. Es scheitert selten am Geld, meistens an der Organisation.",
              },
              { voice: "female2", text: "Wer nutzt solche Angebote?" },
              {
                voice: "male",
                text: "Anders als erwartet nicht in erster Linie ältere Menschen, sondern Jugendliche. Sie sind es gewohnt, per App zu buchen, und haben kein Auto.",
              },
              { voice: "female2", text: "Und die Älteren?" },
              {
                voice: "male",
                text: "Die brauchen eine Telefonnummer. Wo es nur eine App gibt, bleiben sie weg — das haben wir deutlich gesehen.",
              },
              { voice: "female2", text: "Was empfehlen Sie den Kommunen?" },
              {
                voice: "male",
                text: "Nicht das ganze Netz umstellen, sondern Randzeiten und dünn besiedelte Bereiche. Die Hauptachsen sollten im festen Takt bleiben.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Er hält mehr klassische Buslinien für die Lösung.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Mit klassischen Linien kaum.“",
            },
            {
              id: "b2f-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Leere Busse sind teuer und ökologisch problematisch.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„teuer und ökologisch fragwürdig“.",
            },
            {
              id: "b2f-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "In den Modellregionen sanken die Kosten pro Fahrgast.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„etwa ein Drittel unter denen der alten Linie“.",
            },
            {
              id: "b2f-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Das Hauptproblem bei der Einführung ist das Geld.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Es scheitert selten am Geld, meistens an der Organisation.“",
            },
            {
              id: "b2f-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Viele Landkreise wollen die Software nicht selbst betreiben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Matnda aynan shunday aytilgan.",
            },
            {
              id: "b2f-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Vor allem ältere Menschen nutzen die Rufbusse.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nicht in erster Linie ältere Menschen, sondern Jugendliche“.",
            },
            {
              id: "b2f-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Jugendliche buchen selbstverständlich per App.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Sie sind es gewohnt, per App zu buchen.“",
            },
            {
              id: "b2f-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Ohne Telefonnummer bleiben ältere Fahrgäste weg.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wo es nur eine App gibt, bleiben sie weg.“",
            },
            {
              id: "b2f-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Er empfiehlt, das gesamte Netz umzustellen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Nicht das ganze Netz umstellen.“",
            },
            {
              id: "b2f-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Auf den Hauptstrecken soll der feste Takt bleiben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Die Hauptachsen sollten im festen Takt bleiben.“",
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
          id: "b2f-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Information eines Energieversorgers",
            lines: [
              {
                voice: "male2",
                text: "Ihr Abschlag wird zum 1. Juli angepasst. Eine Zustimmung ist nicht erforderlich; Sie können der Änderung jedoch innerhalb von vier Wochen widersprechen.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Kunden können sich gegen die Änderung wehren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "To‘rt hafta ichida e’tiroz bildirish mumkin.",
            },
          ],
        },
        {
          id: "b2f-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einer Klinik",
            lines: [
              {
                voice: "female",
                text: "Für die Untersuchung müssen Sie nüchtern erscheinen. Wasser dürfen Sie trinken, Kaffee und Tee jedoch nicht.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Vor der Untersuchung darf man gar nichts trinken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Suv ichish mumkin.",
            },
          ],
        },
        {
          id: "b2f-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Behörde",
            lines: [
              {
                voice: "male",
                text: "Die Öffnungszeiten ändern sich ab September: montags bis mittwochs wie bisher, donnerstags künftig nur nach Terminvereinbarung.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Donnerstags kommt man künftig nur mit Termin.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„donnerstags künftig nur nach Terminvereinbarung“.",
            },
          ],
        },
        {
          id: "b2f-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Flughafen",
            lines: [
              {
                voice: "female2",
                text: "Wegen des Streiks fallen heute mehrere Verbindungen aus. Umbuchungen sind kostenfrei möglich; eine Erstattung des Ticketpreises prüfen wir im Einzelfall.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Jeder Fahrgast bekommt automatisch sein Geld zurück.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Qaytarish har bir holat bo‘yicha alohida ko‘riladi.",
            },
          ],
        },
        {
          id: "b2f-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage eines Bildungsträgers",
            lines: [
              {
                voice: "male2",
                text: "Der Kurs kann auch mit Bildungsgutschein besucht werden. In diesem Fall reichen Sie den Gutschein bitte vor dem ersten Termin ein — eine nachträgliche Anerkennung ist ausgeschlossen.",
              },
            ],
          },
          items: [
            {
              id: "b2f-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Den Gutschein kann man auch später einreichen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„eine nachträgliche Anerkennung ist ausgeschlossen“.",
            },
          ],
        },
      ],
    },
  ],
};
