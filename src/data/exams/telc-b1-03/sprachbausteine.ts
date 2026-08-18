import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 03 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
 */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      hint: "Fe’lning gapdagi o‘rni ko‘pincha bog‘lovchini aniqlab beradi.",
      blocks: [
        {
          id: "b1c-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an einen Sportverein",
            body: `Sehr geehrte Damen und Herren,

im Internet habe ich gelesen, dass Sie einen Kurs für Anfänger anbieten. Dafür __(21)__ ich mich sehr.

Ich bin 34 Jahre alt und habe __(22)__ zehn Jahren keinen Sport mehr gemacht. __(23)__ möchte ich langsam wieder anfangen.

Leider kann ich montags nicht kommen, __(24)__ ich bis 19 Uhr arbeite. Gibt es die Möglichkeit, __(25)__ eine spätere Gruppe zu wechseln?

Außerdem wüsste ich gern, ob man eigene Sportschuhe __(26)__ muss oder ob Schuhe gestellt werden.

Wenn Sie mir bis Freitag antworten __(27)__, kann ich mich noch diese Woche anmelden. __(28)__ Sie noch Unterlagen von mir brauchen, sagen Sie mir bitte Bescheid.

Für Ihre Antwort bedanke ich mich __(29)__ im Voraus.

Mit freundlichen __(30)__
Bekzod Toshev`,
          },
          items: [
            {
              id: "b1c-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "Dafür __(21)__ ich mich sehr.",
              options: [
                { key: "a", label: "interessiere" },
                { key: "b", label: "interessiert" },
                { key: "c", label: "interessieren" },
              ],
              correct: "a",
              explanation: "„ich“ uchun shakl: interessiere (sich interessieren für).",
            },
            {
              id: "b1c-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "… habe __(22)__ zehn Jahren keinen Sport mehr gemacht.",
              options: [
                { key: "a", label: "vor" },
                { key: "b", label: "seit" },
                { key: "c", label: "in" },
              ],
              correct: "b",
              explanation:
                "„seit zehn Jahren“ — davom etayotgan holat. „vor“ bir martalik nuqtani bildiradi.",
            },
            {
              id: "b1c-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "__(23)__ möchte ich langsam wieder anfangen.",
              options: [
                { key: "a", label: "Deshalb" },
                { key: "b", label: "Obwohl" },
                { key: "c", label: "Damit" },
              ],
              correct: "a",
              explanation:
                "Natija bildiradi va undan keyin fe’l keladi — „Deshalb möchte ich …“.",
            },
            {
              id: "b1c-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(24)__ ich bis 19 Uhr arbeite.",
              options: [
                { key: "a", label: "denn" },
                { key: "b", label: "weil" },
                { key: "c", label: "trotzdem" },
              ],
              correct: "b",
              explanation: "Fe’l gap oxirida („arbeite“) — ergash gap, ya’ni „weil“.",
            },
            {
              id: "b1c-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(25)__ eine spätere Gruppe zu wechseln?",
              options: [
                { key: "a", label: "in" },
                { key: "b", label: "auf" },
                { key: "c", label: "zu" },
              ],
              correct: "a",
              explanation: "„in eine andere Gruppe wechseln“ — Akkusativ bilan.",
            },
            {
              id: "b1c-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "… ob man eigene Sportschuhe __(26)__ muss.",
              options: [
                { key: "a", label: "mitbringt" },
                { key: "b", label: "mitbringen" },
                { key: "c", label: "mitgebracht" },
              ],
              correct: "b",
              explanation: "„muss“ modal fe’li — undan keyin infinitiv keladi.",
            },
            {
              id: "b1c-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Wenn Sie mir bis Freitag antworten __(27)__, …",
              options: [
                { key: "a", label: "könnten" },
                { key: "b", label: "könnte" },
                { key: "c", label: "konnten" },
              ],
              correct: "a",
              explanation:
                "Muloyim shakl, „Sie“ uchun ko‘plik: „antworten könnten“.",
            },
            {
              id: "b1c-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "__(28)__ Sie noch Unterlagen von mir brauchen, …",
              options: [
                { key: "a", label: "Ob" },
                { key: "b", label: "Falls" },
                { key: "c", label: "Damit" },
              ],
              correct: "b",
              explanation: "Shart ma’nosi — „Falls“ (= wenn).",
            },
            {
              id: "b1c-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Für Ihre Antwort bedanke ich mich __(29)__ im Voraus.",
              options: [
                { key: "a", label: "schon" },
                { key: "b", label: "herzlich" },
                { key: "c", label: "gerade" },
              ],
              correct: "b",
              explanation: "„sich herzlich bedanken“ — odatiy birikma.",
            },
            {
              id: "b1c-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "Mit freundlichen __(30)__",
              options: [
                { key: "a", label: "Grüßen" },
                { key: "b", label: "Grüße" },
                { key: "c", label: "Grüßt" },
              ],
              correct: "a",
              explanation: "„mit“ + Dativ ko‘plik: Grüßen.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie den Text und entscheiden Sie, welches Wort a bis o in die Lücken 31 bis 40 passt. Jedes Wort kann nur einmal verwendet werden. Nicht alle Wörter passen in den Text.",
      hint: "15 so‘zdan 10 tasi kerak. Avval aniqlarini qo‘ying.",
      bank: [
        { key: "a", label: "achten" },
        { key: "b", label: "Anmeldung" },
        { key: "c", label: "beginnt" },
        { key: "d", label: "besteht" },
        { key: "e", label: "bringen" },
        { key: "f", label: "Erfahrung" },
        { key: "g", label: "geeignet" },
        { key: "h", label: "Gruppe" },
        { key: "i", label: "kostet" },
        { key: "j", label: "Möglichkeit" },
        { key: "k", label: "nehmen" },
        { key: "l", label: "Pause" },
        { key: "m", label: "statt" },
        { key: "n", label: "Teilnehmer" },
        { key: "o", label: "Zeit" },
      ],
      blocks: [
        {
          id: "b1c-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Aushang im Sportverein",
            body: `Liebe Sportfreunde,

ab dem 5. September __(31)__ unser neuer Kurs „Fit ab 30“. Er findet dienstags und donnerstags von 19 bis 20.30 Uhr in der Halle 2 __(32)__.

Der Kurs ist besonders für Anfänger __(33)__ — Vorkenntnisse sind nicht nötig. Auch wer lange keinen Sport gemacht hat, ist herzlich willkommen.

Eine __(34)__ ist erforderlich, weil die __(35)__ auf 16 Personen begrenzt ist. Melden Sie sich bitte bis zum 30. August im Büro an.

Der Kurs __(36)__ 60 Euro für zehn Termine. Mitglieder zahlen die Hälfte. Bitte __(37)__ Sie Hallenschuhe und ein Handtuch mit.

In der Mitte des Kurses machen wir eine kurze __(38)__ — dafür stellen wir Wasser bereit.

Bitte __(39)__ Sie darauf, dass Sie zwei Stunden vorher nichts Schweres essen.

Wer keine __(40)__ hat, am Abend zu kommen: Ab Oktober planen wir denselben Kurs auch am Samstagvormittag.

Ihr Trainerteam`,
          },
          items: [
            {
              id: "b1c-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… ab dem 5. September __(31)__ unser neuer Kurs.",
              correct: "c",
              explanation: "„beginnen“ — boshlanmoq; birlik: beginnt.",
            },
            {
              id: "b1c-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Er findet … in der Halle 2 __(32)__.",
              correct: "m",
              explanation: "„stattfinden“ — ajraladigan fe’l: findet … statt.",
            },
            {
              id: "b1c-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der Kurs ist besonders für Anfänger __(33)__.",
              correct: "g",
              explanation: "„geeignet sein für“ — mos kelmoq.",
            },
            {
              id: "b1c-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Eine __(34)__ ist erforderlich.",
              correct: "b",
              explanation: "„Anmeldung“ — ro‘yxatdan o‘tish.",
            },
            {
              id: "b1c-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "…, weil die __(35)__ auf 16 Personen begrenzt ist.",
              correct: "h",
              explanation: "„die Gruppe ist begrenzt“ — guruh soni cheklangan.",
            },
            {
              id: "b1c-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der Kurs __(36)__ 60 Euro für zehn Termine.",
              correct: "i",
              explanation: "„kosten“ — turmoq; birlik: kostet.",
            },
            {
              id: "b1c-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte __(37)__ Sie Hallenschuhe und ein Handtuch mit.",
              correct: "e",
              explanation: "„mitbringen“ — ajraladigan fe’l: bringen … mit.",
            },
            {
              id: "b1c-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… machen wir eine kurze __(38)__.",
              correct: "l",
              explanation: "„eine Pause machen“ — tanaffus qilmoq.",
            },
            {
              id: "b1c-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte __(39)__ Sie darauf, dass Sie … nichts Schweres essen.",
              correct: "a",
              explanation: "„auf etwas achten“ — e’tibor bermoq.",
            },
            {
              id: "b1c-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wer keine __(40)__ hat, am Abend zu kommen …",
              correct: "j",
              explanation: "„die Möglichkeit haben, … zu …“ — imkoni bo‘lmoq.",
            },
          ],
        },
      ],
    },
  ],
};
