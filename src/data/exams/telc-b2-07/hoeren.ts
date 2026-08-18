import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 07 · Hörverstehen — 3 Teil, 20 element, 75 ball. */
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
          id: "b2g-h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Mitteilung einer Kreisverwaltung",
            lines: [
              {
                voice: "female2",
                text: "Anträge auf Wohngeld können ab sofort auch online gestellt werden. Die persönliche Vorsprache bleibt daneben weiterhin möglich.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt: "Anträge sind künftig nur noch online möglich.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„bleibt daneben weiterhin möglich“.",
            },
          ],
        },
        {
          id: "b2g-h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Handwerkskammer",
            lines: [
              {
                voice: "male",
                text: "Guten Tag, Herr Bauer. Ihre Anmeldung zur Ausbildereignungsprüfung ist eingegangen. Der Nachweis Ihrer Berufspraxis fehlt uns allerdings noch.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Es fehlt noch ein Dokument.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Der Nachweis Ihrer Berufspraxis fehlt uns … noch.“",
            },
          ],
        },
        {
          id: "b2g-h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Beitrag im Radio",
            lines: [
              {
                voice: "female",
                text: "Die Zahl der Betriebsübernahmen durch Beschäftigte ist zuletzt gestiegen. Gemessen an allen Nachfolgen bleibt ihr Anteil jedoch gering.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Diese Form der Nachfolge ist inzwischen die häufigste.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„bleibt ihr Anteil jedoch gering“.",
            },
          ],
        },
        {
          id: "b2g-h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Gespräch in der Verwaltung",
            lines: [
              {
                voice: "male2",
                text: "Sollen wir die neue Software auch in der Zulassungsstelle einführen?",
              },
              {
                voice: "female",
                text: "Erst wenn wir dort die Prüfschritte reduziert haben. Sonst verlagern wir das Problem nur auf den Bildschirm.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Die Frau möchte zuerst die Abläufe ändern.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Erst wenn wir dort die Prüfschritte reduziert haben.“",
            },
          ],
        },
        {
          id: "b2g-h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in einer Hochschule",
            lines: [
              {
                voice: "male",
                text: "Bewerbungen für das Landarztstipendium sind bis zum 31. Mai möglich. Eine Verlängerung der Frist ist in diesem Jahr nicht vorgesehen.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Die Frist kann bei Bedarf verlängert werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Eine Verlängerung … ist … nicht vorgesehen.“",
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
          id: "b2g-h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Interview mit einer Sprachwissenschaftlerin über Mehrsprachigkeit",
            lines: [
              {
                voice: "male2",
                text: "Frau Dr. Kern, viele Eltern fragen sich, ob sie zu Hause Deutsch sprechen sollten, auch wenn sie es selbst kaum beherrschen.",
              },
              {
                voice: "female",
                text: "Davon rate ich ausdrücklich ab. Entscheidend ist die Qualität des Sprechens, nicht die Sprache. Wer in einer Sprache nur einfache Sätze bilden kann, gibt dem Kind auch nur einfache Sprache mit.",
              },
              { voice: "male2", text: "Aber schadet das nicht dem Deutschlernen?" },
              {
                voice: "female",
                text: "Nein, im Gegenteil. Kinder mit einer gut ausgebauten Erstsprache lernen die Zweitsprache in der Regel schneller. Die Strukturen sind ja schon da.",
              },
              { voice: "male2", text: "Sie haben 900 Kinder begleitet. Was war das überraschendste Ergebnis?" },
              {
                voice: "female",
                text: "Dass der Wortschatz im Deutschen weniger vom Elternhaus abhing als von der Kita. Wo viel vorgelesen und erzählt wurde, holten Kinder Rückstände innerhalb von zwei Jahren auf.",
              },
              { voice: "male2", text: "Und wo nicht?" },
              {
                voice: "female",
                text: "Da blieb der Abstand bestehen. Das ist eine unbequeme Erkenntnis, weil sie zeigt, dass es weniger an den Familien liegt, als oft behauptet wird.",
              },
              { voice: "male2", text: "Was empfehlen Sie den Eltern konkret?" },
              {
                voice: "female",
                text: "In der Sprache zu sprechen, in der sie sich wohlfühlen — und viel zu erzählen. Lieder, Geschichten, Fragen. Fernsehen in irgendeiner Sprache ersetzt das nicht.",
              },
              { voice: "male2", text: "Und die Politik?" },
              {
                voice: "female",
                text: "Ich plädiere nicht für neue Testverfahren, davon gibt es genug. Nötig wären kleinere Gruppen in den Kitas. Das ist teuer, aber alles andere ist Kosmetik.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Sie rät Eltern, zu Hause Deutsch zu sprechen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Davon rate ich ausdrücklich ab.“",
            },
            {
              id: "b2g-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Entscheidend ist, wie reich gesprochen wird.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Entscheidend ist die Qualität des Sprechens, nicht die Sprache.“",
            },
            {
              id: "b2g-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Eine starke Erstsprache erschwert das Deutschlernen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„im Gegenteil“ — tezroq o‘rganadi.",
            },
            {
              id: "b2g-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "An der Untersuchung nahmen etwa 900 Kinder teil.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Sie haben 900 Kinder begleitet.“",
            },
            {
              id: "b2g-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Der Wortschatz hing vor allem vom Elternhaus ab.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„weniger vom Elternhaus … als von der Kita“.",
            },
            {
              id: "b2g-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Wo viel vorgelesen wurde, holten Kinder Rückstände auf.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„innerhalb von zwei Jahren auf“.",
            },
            {
              id: "b2g-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Sie nennt dieses Ergebnis unbequem.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Das ist eine unbequeme Erkenntnis.“",
            },
            {
              id: "b2g-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Fernsehen kann das Erzählen ersetzen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Fernsehen … ersetzt das nicht.“",
            },
            {
              id: "b2g-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Sie fordert vor allem neue Testverfahren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Ich plädiere nicht für neue Testverfahren.“",
            },
            {
              id: "b2g-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Kleinere Gruppen in den Kitas hält sie für nötig.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Nötig wären kleinere Gruppen in den Kitas.“",
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
          id: "b2g-h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Information einer Bildungseinrichtung",
            lines: [
              {
                voice: "male2",
                text: "Die Prüfungsgebühr wird gesondert erhoben und ist nicht Teil der Kursgebühr. Bei Nichtantritt erstatten wir sie nur gegen ärztliches Attest.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Die Prüfungsgebühr ist in der Kursgebühr enthalten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„wird gesondert erhoben“.",
            },
          ],
        },
        {
          id: "b2g-h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Ansage in einem Betrieb",
            lines: [
              {
                voice: "female",
                text: "Die Betriebsversammlung findet am Mittwoch statt. Wer im Außendienst ist, kann per Video teilnehmen; eine Aufzeichnung wird es nicht geben.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Wer nicht teilnehmen kann, kann es später ansehen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„eine Aufzeichnung wird es nicht geben“.",
            },
          ],
        },
        {
          id: "b2g-h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Nachricht einer Kommune",
            lines: [
              {
                voice: "male",
                text: "Der Bürgerbus verkehrt ab Oktober auch samstags. Die Fahrten müssen weiterhin spätestens am Vortag telefonisch angemeldet werden.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Man kann spontan einsteigen, ohne sich anzumelden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Bir kun oldin telefon orqali buyurtma berish shart.",
            },
          ],
        },
        {
          id: "b2g-h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Durchsage in einer Klinik",
            lines: [
              {
                voice: "female2",
                text: "Die Sprechstunde der Ambulanz endet heute bereits um 14 Uhr. Notfälle werden selbstverständlich weiterhin rund um die Uhr versorgt.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Notfälle werden auch nach 14 Uhr behandelt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„rund um die Uhr versorgt“.",
            },
          ],
        },
        {
          id: "b2g-h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Information einer Bank",
            lines: [
              {
                voice: "male2",
                text: "Für die Kontoführung fallen ab Januar Gebühren an. Wer sein Gehalt bei uns eingehen lässt, bleibt davon ausgenommen.",
              },
            ],
          },
          items: [
            {
              id: "b2g-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Alle Kunden zahlen ab Januar Gebühren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Maoshi shu bankka tushadiganlar istisno.",
            },
          ],
        },
      ],
    },
  ],
};
