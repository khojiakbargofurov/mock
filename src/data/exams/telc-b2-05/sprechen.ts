import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 05 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Präsentation. Stellen Sie Ihr Thema in etwa drei Minuten vor: Einleitung, Hauptteil mit Beispielen und ein kurzer Schluss.",
      blocks: [
        {
          id: "b2e-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Freiwilliges Engagement",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Freiwilliges Engagement — wer trägt die Gesellschaft?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· In welchen Bereichen engagieren sich Menschen freiwillig? Nennen Sie Beispiele.
· Welche Rolle spielt das in Ihrem Heimatland?
· Was haben Freiwillige und die Gesellschaft davon?
· Wo sehen Sie Grenzen oder Risiken?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2e-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung" },
                { key: "bereiche", label: "Bereiche und Beispiele" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "nutzen", label: "Nutzen für beide Seiten" },
                { key: "grenzen", label: "Grenzen und Risiken" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute über freiwilliges Engagement sprechen — und über die Frage, wer eigentlich die Arbeit macht, die niemand bezahlt.

Die Bereiche sind vielfältig: Feuerwehr, Sportvereine, Nachhilfe für Kinder, Besuchsdienste im Pflegeheim. In meinem Wohnhaus organisiert eine Rentnerin seit Jahren die Hausgemeinschaft — ohne sie gäbe es kein Hoffest und keine Hilfe beim Einkaufen.

In Usbekistan gibt es Engagement ebenfalls, aber weniger in Vereinen. Dort läuft vieles über die Familie und die Nachbarschaft, die sogenannte Mahalla. Wer Hilfe braucht, bekommt sie — allerdings ohne Vertrag und ohne Versicherung.

Der Nutzen liegt auf beiden Seiten. Freiwillige berichten von Kontakten und dem Gefühl, gebraucht zu werden. Die Gesellschaft spart Kosten und bekommt Leistungen, die sonst niemand erbringen würde.

Genau darin sehe ich aber auch das Risiko. Wenn der Staat sich darauf verlässt, entsteht eine Lücke, sobald die Freiwilligen ausfallen. Außerdem tragen die Last häufig dieselben Personen — oft Frauen über fünfzig.

Mein Fazit: Engagement ist wertvoll, darf aber keine dauerhafte Ersatzlösung für staatliche Aufgaben sein.`,
              criteria: [
                {
                  id: "c1",
                  label: "Tuzilma",
                  question: "Kirish, asosiy qism va xulosa aniq ajralib turdimi?",
                  points: 6,
                },
                {
                  id: "c2",
                  label: "Mazmun va misollar",
                  question: "Barcha nuqtalar yoritilib, misol keltirildimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Ifoda boyligi",
                  question: "B2 darajadagi iboralar ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Ravonlik va to‘g‘rilik",
                  question: "Ravon va grammatik jihatdan to‘g‘ri gapirdingizmi?",
                  points: 5,
                },
              ],
              explanation:
                "Vataningizdagi tizimni nomlash („die sogenannte Mahalla“) taqdimotni o‘ziga xos qiladi va baholovchi eslab qoladi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Diskussion. Reagieren Sie auf die Fragen und Einwände Ihres Partners und begründen Sie Ihre Position.",
      blocks: [
        {
          id: "b2e-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Sie sagen, der Staat dürfe sich nicht auf Freiwillige verlassen. Aber ohne sie gäbe es in vielen Dörfern gar keine Feuerwehr. Ist das nicht besser als nichts?",
              },
              {
                voice: "male",
                text: "Und sollte man Ehrenamt nicht einfach bezahlen? Dann wäre das Problem doch gelöst.",
              },
            ],
          },
          items: [
            {
              id: "b2e-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "zustimmen", label: "Zustimmen / einschränken" },
                { key: "argument", label: "Gegenargument" },
                { key: "beispiel", label: "Beispiel aus der Praxis" },
                { key: "nachfrage", label: "Nachfrage an den Partner" },
              ],
              sample: `Sie haben recht, und ich möchte das auch nicht kleinreden: Ohne die Freiwilligen Feuerwehren wäre die Versorgung auf dem Land tatsächlich nicht zu sichern.

Mein Punkt ist ein anderer. Es geht nicht darum, ob Engagement gut ist, sondern ob man es einplanen darf wie eine feste Stelle. In unserem Nachbardorf ist die Feuerwehr im letzten Jahr fast aufgelöst worden, weil sechs von zwölf Aktiven weggezogen sind. Wenn eine Aufgabe von sechs Personen abhängt, ist sie nicht abgesichert.

Was die Bezahlung angeht, bin ich skeptisch. Sobald Geld fließt, entstehen Erwartungen, Arbeitszeiten und Konkurrenz zu bezahlten Kräften — und genau die Freiwilligkeit, die viele motiviert, geht verloren. Ich würde eher bei den Rahmenbedingungen ansetzen: Freistellung vom Arbeitgeber, Versicherung, Erstattung der Kosten.

Sinnvoll fände ich außerdem, klar zu benennen, welche Aufgaben dauerhaft staatlich sein müssen und welche nicht.

Wie sehen Sie das — würden Sie sich engagieren, wenn es dafür Geld gäbe?`,
              criteria: [
                {
                  id: "c1",
                  label: "Munosabat bildirish",
                  question: "Ikkala e’tirozga ham javob berdingizmi?",
                  points: 7,
                },
                {
                  id: "c2",
                  label: "Asoslash",
                  question: "Har javobda dalil va misol bo‘ldimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Muzokara vositalari",
                  question:
                    "„Sie haben recht, …“, „Mein Punkt ist ein anderer“, „Was … angeht“ ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Suhbatni davom ettirish",
                  question: "Oxirida savol berdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "„Mein Punkt ist ein anderer“ — bahsni o‘z o‘zaningizga qaytarishning aniq va muloyim usuli.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Betrieb möchte ein Gesundheitsangebot für die Beschäftigten einführen. Planen Sie es gemeinsam mit Ihrem Partner.",
      blocks: [
        {
          id: "b2e-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde für alle eine Mitgliedschaft im Fitnessstudio bezahlen. Das ist einfach zu organisieren.",
              },
              {
                voice: "male",
                text: "Und die Kurse sollten nach Feierabend stattfinden — während der Arbeitszeit fehlen die Leute ja im Betrieb. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b2e-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "angebot", label: "🏃 Welche Angebote?" },
                { key: "zeit", label: "🕔 Arbeitszeit oder Freizeit?" },
                { key: "zielgruppe", label: "👥 Wen wollen wir erreichen?" },
                { key: "kosten", label: "💶 Budget" },
                { key: "erfolg", label: "📊 Wie messen wir den Erfolg?" },
              ],
              sample: `Eine Studio-Mitgliedschaft ist bequem, erreicht aber erfahrungsgemäß die Falschen: Wer ohnehin Sport macht, nimmt sie mit; wer Rückenprobleme hat, geht trotzdem nicht hin.

Ich würde deshalb zweigleisig fahren: einen Rückenkurs direkt im Betrieb, dazu einen Zuschuss für ein Angebot nach Wahl. So entscheidet jeder selbst.

Beim Zeitpunkt muss ich Ihnen widersprechen. Nach Feierabend kommen genau die nicht, die Kinder abholen oder Schicht haben — und das ist bei uns die Hälfte der Belegschaft. Wie wäre es, wenn wir den Kurs in die Übergabezeit zwischen den Schichten legen und die Hälfte als Arbeitszeit anrechnen?

Beim Budget habe ich grob gerechnet: Ein Kurs mit zwölf Terminen kostet etwa 1.400 Euro, der Zuschuss bei achtzig Beschäftigten noch einmal 4.000. Ein Teil davon lässt sich über die Krankenkasse fördern.

Den Erfolg würde ich nach einem Jahr messen — an den Teilnahmezahlen und an einer kurzen anonymen Befragung, nicht an den Krankheitstagen. Die schwanken zu stark.

Also: Rückenkurs plus Zuschuss, Zeit hälftig geteilt, rund 5.400 Euro Budget, Auswertung nach einem Jahr. Wären Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (taklif, vaqt, auditoriya, byudjet, baholash) muhokama qilindimi?",
                  points: 7,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning takliflariga aniq munosabat va asoslangan muqobil berildimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif, e’tiroz va kelishuv iboralari ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvlarni umumlashtirdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "„erreicht aber erfahrungsgemäß die Falschen“ — taklifni tanqid qilishning qisqa va kuchli shakli.",
            },
          ],
        },
      ],
    },
  ],
};
