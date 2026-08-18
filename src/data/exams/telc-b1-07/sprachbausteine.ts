import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 07 · Sprachbausteine — 2 Teil, 20 element, 30 ball. */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      blocks: [
        {
          id: "b1g-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an einen Verein",
            body: `Sehr geehrte Damen und Herren,

ein Nachbar hat mir von Ihrem Werkzeugverleih erzählt. Dafür __(21)__ ich mich sehr, weil ich gerade meine Wohnung renoviere.

Ich habe gelesen, dass man Mitglied sein muss. Könnten Sie mir sagen, __(22)__ die Mitgliedschaft kostet und wie lange sie gilt?

Außerdem würde ich gern wissen, ob man die Geräte auch am Wochenende abholen kann. __(23)__ der Woche arbeite ich bis 18 Uhr und schaffe es nicht.

Eine Bohrmaschine brauche ich vor allem __(24)__ nächsten Monat. Falls die Geräte oft ausgeliehen sind, __(25)__ ich sie gern vorher reservieren.

__(26)__ ich alles richtig verstanden habe, sind die Ersatzteile nicht im Beitrag enthalten. Ist das so?

Wenn Sie mir kurz antworten __(27)__, komme ich gern zu einem Ihrer Termine vorbei.

Für Ihre Mühe bedanke ich mich __(28)__ im Voraus. __(29)__ Rückfragen erreichen Sie mich am besten per E-Mail.

Mit freundlichen __(30)__
Kerim Aslan`,
          },
          items: [
            {
              id: "b1g-sb-021",
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
              explanation: "„ich“ uchun shakl: interessiere mich.",
            },
            {
              id: "b1g-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "Könnten Sie mir sagen, __(22)__ die Mitgliedschaft kostet?",
              options: [
                { key: "a", label: "was" },
                { key: "b", label: "ob" },
                { key: "c", label: "dass" },
              ],
              correct: "a",
              explanation: "Narx haqidagi bilvosita savol — „was“.",
            },
            {
              id: "b1g-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "__(23)__ der Woche arbeite ich bis 18 Uhr.",
              options: [
                { key: "a", label: "Während" },
                { key: "b", label: "Seit" },
                { key: "c", label: "Bis" },
              ],
              correct: "a",
              explanation: "„während der Woche“ — hafta davomida.",
            },
            {
              id: "b1g-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "Eine Bohrmaschine brauche ich vor allem __(24)__ nächsten Monat.",
              options: [
                { key: "a", label: "im" },
                { key: "b", label: "am" },
                { key: "c", label: "zum" },
              ],
              correct: "a",
              explanation: "Oylar bilan „im“: im nächsten Monat.",
            },
            {
              id: "b1g-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(25)__ ich sie gern vorher reservieren.",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "wäre" },
                { key: "c", label: "hätte" },
              ],
              correct: "a",
              explanation: "„würde … reservieren“ — muloyim istak.",
            },
            {
              id: "b1g-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "__(26)__ ich alles richtig verstanden habe, …",
              options: [
                { key: "a", label: "Wenn" },
                { key: "b", label: "Ob" },
                { key: "c", label: "Damit" },
              ],
              correct: "a",
              explanation: "Shart ma’nosi — „Wenn“.",
            },
            {
              id: "b1g-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Wenn Sie mir kurz antworten __(27)__, …",
              options: [
                { key: "a", label: "könnten" },
                { key: "b", label: "könnte" },
                { key: "c", label: "konnten" },
              ],
              correct: "a",
              explanation: "„Sie“ uchun ko‘plik: könnten.",
            },
            {
              id: "b1g-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Für Ihre Mühe bedanke ich mich __(28)__ im Voraus.",
              options: [
                { key: "a", label: "herzlich" },
                { key: "b", label: "schon" },
                { key: "c", label: "bereits" },
              ],
              correct: "a",
              explanation: "„sich herzlich bedanken“ — barqaror birikma.",
            },
            {
              id: "b1g-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "__(29)__ Rückfragen erreichen Sie mich per E-Mail.",
              options: [
                { key: "a", label: "Bei" },
                { key: "b", label: "Für" },
                { key: "c", label: "Auf" },
              ],
              correct: "a",
              explanation: "„Bei Rückfragen …“.",
            },
            {
              id: "b1g-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "Mit freundlichen __(30)__",
              options: [
                { key: "a", label: "Grüßen" },
                { key: "b", label: "Grüße" },
                { key: "c", label: "Gruß" },
              ],
              correct: "a",
              explanation: "„mit“ + Dativ ko‘plik.",
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
      bank: [
        { key: "a", label: "abgeben" },
        { key: "b", label: "Anmeldung" },
        { key: "c", label: "Aufwand" },
        { key: "d", label: "ausgeliehen" },
        { key: "e", label: "Beitrag" },
        { key: "f", label: "beschädigt" },
        { key: "g", label: "beträgt" },
        { key: "h", label: "erhalten" },
        { key: "i", label: "gilt" },
        { key: "j", label: "Kaution" },
        { key: "k", label: "melden" },
        { key: "l", label: "Öffnungszeiten" },
        { key: "m", label: "Reihenfolge" },
        { key: "n", label: "verlängern" },
        { key: "o", label: "zurückgeben" },
      ],
      blocks: [
        {
          id: "b1g-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Merkblatt: Werkzeugverleih",
            body: `Liebe Mitglieder,

der jährliche __(31)__ für die Nutzung unseres Verleihs __(32)__ 30 Euro. Er __(33)__ für zwölf Monate ab dem Tag der Anmeldung.

Geräte können Sie zu unseren __(34)__ abholen: dienstags 16–19 Uhr und samstags 10–14 Uhr.

Für teure Geräte erheben wir eine __(35)__ von 20 Euro, die Sie bei der Rückgabe zurückbekommen.

Sie können ein Gerät für sieben Tage ausleihen. Auf Wunsch lässt sich die Leihzeit einmal __(36)__, sofern niemand sonst darauf wartet.

Bitte __(37)__ Sie die Geräte sauber zurück. Wenn etwas __(38)__ ist, sagen Sie uns bitte sofort Bescheid — das ist kein Problem, solange Sie es __(39)__.

Ist ein Gerät bereits __(40)__, tragen wir Sie gern auf eine Warteliste ein.

Ihr Vereinsteam`,
          },
          items: [
            {
              id: "b1g-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der jährliche __(31)__ für die Nutzung …",
              correct: "e",
              explanation: "„Beitrag“ — a’zolik badali.",
            },
            {
              id: "b1g-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… __(32)__ 30 Euro.",
              correct: "g",
              explanation: "„betragen“ — miqdori … ni tashkil qiladi.",
            },
            {
              id: "b1g-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Er __(33)__ für zwölf Monate.",
              correct: "i",
              explanation: "„gelten“ — amal qilmoq.",
            },
            {
              id: "b1g-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Geräte können Sie zu unseren __(34)__ abholen.",
              correct: "l",
              explanation: "„Öffnungszeiten“ — ish vaqti.",
            },
            {
              id: "b1g-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für teure Geräte erheben wir eine __(35)__ von 20 Euro.",
              correct: "j",
              explanation: "„Kaution“ — garov puli.",
            },
            {
              id: "b1g-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… lässt sich die Leihzeit einmal __(36)__.",
              correct: "n",
              explanation: "„verlängern“ — uzaytirmoq.",
            },
            {
              id: "b1g-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte __(37)__ Sie die Geräte sauber zurück.",
              correct: "o",
              explanation: "„zurückgeben“ — qaytarmoq.",
            },
            {
              id: "b1g-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wenn etwas __(38)__ ist, …",
              correct: "f",
              explanation: "„beschädigt“ — shikastlangan.",
            },
            {
              id: "b1g-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "…, solange Sie es __(39)__.",
              correct: "k",
              explanation: "„melden“ — xabar bermoq.",
            },
            {
              id: "b1g-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Ist ein Gerät bereits __(40)__, …",
              correct: "d",
              explanation: "„ausgeliehen“ — ijaraga berilgan.",
            },
          ],
        },
      ],
    },
  ],
};
