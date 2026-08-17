import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Sprachbausteine — 2 Teil, 20 element, 30 ball (har biri 1,5).
 * Teil 1: grammatika (a/b/c) · Teil 2: 15 so'zdan 10 tasini joyiga qo'yish.
 */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      hint: "Bu qism grammatikani tekshiradi: bog‘lovchilar, predloglar, fe’l shakllari.",
      blocks: [
        {
          id: "b1sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an eine Sprachschule",
            body: `Sehr geehrte Frau Sommer,

vielen Dank für Ihre E-Mail vom 3. Mai. Ich interessiere mich sehr __(21)__ den Kurs „Deutsch im Beruf“, __(22)__ ich im Herbst eine neue Stelle antreten möchte.

Leider kann ich am Montagabend nicht kommen, __(23)__ ich bis 18.30 Uhr arbeite. Gibt es die Möglichkeit, __(24)__ eine andere Gruppe zu wechseln?

Außerdem hätte ich gern gewusst, ob das Lehrbuch im Preis __(25)__ ist. Falls nicht, __(26)__ ich es gern vorher bestellen.

Wenn Sie mir bis Freitag Bescheid __(27)__, kann ich die Anmeldung noch diese Woche abschicken. __(28)__ ich Ihnen die Unterlagen per Post schicken soll, sagen Sie mir bitte kurz Bescheid.

Für Ihre Mühe bedanke ich mich __(29)__ im Voraus.

Mit freundlichen __(30)__
Amina Yusupova`,
          },
          items: [
            {
              id: "b1-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "Ich interessiere mich sehr __(21)__ den Kurs.",
              options: [
                { key: "a", label: "für" },
                { key: "b", label: "an" },
                { key: "c", label: "über" },
              ],
              correct: "a",
              explanation:
                "„sich interessieren für + Akkusativ“ — barqaror birikma.",
            },
            {
              id: "b1-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt:
                "…, __(22)__ ich im Herbst eine neue Stelle antreten möchte.",
              options: [
                { key: "a", label: "weil" },
                { key: "b", label: "denn" },
                { key: "c", label: "obwohl" },
              ],
              correct: "a",
              explanation:
                "Fe’l gap oxirida („möchte“) — bu ergash gap, ya’ni „weil“. „denn“ dan keyin to‘g‘ri tartib bo‘lardi.",
            },
            {
              id: "b1-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt:
                "Leider kann ich am Montagabend nicht kommen, __(23)__ ich bis 18.30 Uhr arbeite.",
              options: [
                { key: "a", label: "obwohl" },
                { key: "b", label: "weil" },
                { key: "c", label: "trotzdem" },
              ],
              correct: "b",
              explanation: "Sabab bildiriladi — „weil“. „obwohl“ zid ma’noda.",
            },
            {
              id: "b1-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt:
                "Gibt es die Möglichkeit, __(24)__ eine andere Gruppe zu wechseln?",
              options: [
                { key: "a", label: "in" },
                { key: "b", label: "auf" },
                { key: "c", label: "zu" },
              ],
              correct: "a",
              explanation: "„in eine andere Gruppe wechseln“ — yo‘nalish, Akkusativ.",
            },
            {
              id: "b1-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "…, ob das Lehrbuch im Preis __(25)__ ist.",
              options: [
                { key: "a", label: "enthalten" },
                { key: "b", label: "erhalten" },
                { key: "c", label: "behalten" },
              ],
              correct: "a",
              explanation:
                "„im Preis enthalten sein“ — narxga kiritilgan. „erhalten“ = olmoq.",
            },
            {
              id: "b1-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "Falls nicht, __(26)__ ich es gern vorher bestellen.",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "wäre" },
                { key: "c", label: "hätte" },
              ],
              correct: "a",
              explanation:
                "„würde + Infinitiv“ (bestellen) — muloyim shart shakli.",
            },
            {
              id: "b1-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Wenn Sie mir bis Freitag Bescheid __(27)__, …",
              options: [
                { key: "a", label: "geben" },
                { key: "b", label: "gibt" },
                { key: "c", label: "gaben" },
              ],
              correct: "a",
              explanation: "„Sie“ shaxsi bilan hozirgi zamon: geben.",
            },
            {
              id: "b1-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt:
                "__(28)__ ich Ihnen die Unterlagen per Post schicken soll, sagen Sie mir bitte Bescheid.",
              options: [
                { key: "a", label: "Ob" },
                { key: "b", label: "Falls" },
                { key: "c", label: "Damit" },
              ],
              correct: "b",
              explanation:
                "Shart ma’nosi — „Falls“ (= wenn). „Ob“ bilvosita savolda ishlatiladi.",
            },
            {
              id: "b1-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Für Ihre Mühe bedanke ich mich __(29)__ im Voraus.",
              options: [
                { key: "a", label: "schon" },
                { key: "b", label: "herzlich" },
                { key: "c", label: "bereits" },
              ],
              correct: "b",
              explanation:
                "„sich herzlich bedanken“ — odatiy birikma; „schon/bereits“ bu yerda ortiqcha.",
            },
            {
              id: "b1-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "Mit freundlichen __(30)__",
              options: [
                { key: "a", label: "Grüße" },
                { key: "b", label: "Grüßen" },
                { key: "c", label: "Grüßt" },
              ],
              correct: "b",
              explanation:
                "„mit“ predlogi Dativ talab qiladi, ko‘plik Dativ: Grüßen.",
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
      hint: "15 ta so‘zdan 10 tasi ishlatiladi. Avval aniq bo‘lganlarini qo‘ying.",
      bank: [
        { key: "a", label: "statt" },
        { key: "b", label: "sorgt" },
        { key: "c", label: "Hilfe" },
        { key: "d", label: "Liste" },
        { key: "e", label: "kaufen" },
        { key: "f", label: "Plätze" },
        { key: "g", label: "ausmachen" },
        { key: "h", label: "gilt" },
        { key: "i", label: "Wetter" },
        { key: "j", label: "kommt" },
        { key: "k", label: "Rechnung" },
        { key: "l", label: "Termin" },
        { key: "m", label: "bringt" },
        { key: "n", label: "leiten" },
        { key: "o", label: "Stunde" },
      ],
      blocks: [
        {
          id: "b1sb2-b1",
          stimulus: {
            kind: "text",
            title: "Aushang im Hausflur",
            body: `Liebe Nachbarinnen und Nachbarn,

am Samstag, dem 14. Juni, findet in unserem Innenhof zum fünften Mal das Sommerfest __(31)__. Wie in jedem Jahr beginnen wir um 15 Uhr mit Kaffee und Kuchen.

Für die Musik __(32)__ in diesem Jahr die Band „Hofgeflüster“. Die Kinder können auf der Wiese spielen; um 16 Uhr __(33)__ außerdem ein Clown zu Besuch.

Damit das Fest gelingt, brauchen wir Ihre __(34)__: Wer einen Salat oder einen Kuchen mitbringen möchte, trägt sich bitte in die __(35)__ im Hausflur ein. Die Getränke __(36)__ wir gemeinsam ein; die Kosten teilen wir am Ende durch die Zahl der Erwachsenen.

Beim Aufbau am Vormittag sind noch __(37)__ frei. Wenn Sie eine Stunde Zeit haben, melden Sie sich bitte bei Familie Ercan (Wohnung 12).

Bitte denken Sie daran, dass wir um 22 Uhr die Musik __(38)__ müssen — die Nachtruhe __(39)__ auch im Sommer.

Wir freuen uns auf einen schönen Nachmittag und hoffen auf gutes __(40)__!

Ihre Hausgemeinschaft`,
          },
          items: [
            {
              id: "b1-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… findet das Sommerfest __(31)__.",
              correct: "a",
              explanation: "„stattfinden“ — ajraladigan fe’l: findet … statt.",
            },
            {
              id: "b1-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für die Musik __(32)__ die Band „Hofgeflüster“.",
              correct: "b",
              explanation: "„für etwas sorgen“ — biror narsani ta’minlamoq.",
            },
            {
              id: "b1-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Um 16 Uhr __(33)__ ein Clown zu Besuch.",
              correct: "j",
              explanation: "„zu Besuch kommen“ — mehmonga kelmoq.",
            },
            {
              id: "b1-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wir brauchen Ihre __(34)__.",
              correct: "c",
              explanation: "„Hilfe brauchen“ — yordam kerak.",
            },
            {
              id: "b1-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… trägt sich bitte in die __(35)__ im Hausflur ein.",
              correct: "d",
              explanation:
                "„sich in eine Liste eintragen“ — ro‘yxatga yozilmoq.",
            },
            {
              id: "b1-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Getränke __(36)__ wir gemeinsam ein.",
              correct: "e",
              explanation:
                "„einkaufen“ ajraladi: kaufen … ein — birga xarid qilamiz.",
            },
            {
              id: "b1-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Beim Aufbau sind noch __(37)__ frei.",
              correct: "f",
              explanation: "„Plätze sind frei“ — joylar bo‘sh.",
            },
            {
              id: "b1-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… dass wir um 22 Uhr die Musik __(38)__ müssen.",
              correct: "g",
              explanation: "„die Musik ausmachen“ — musiqani o‘chirmoq.",
            },
            {
              id: "b1-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Nachtruhe __(39)__ auch im Sommer.",
              correct: "h",
              explanation: "„gelten“ — amal qilmoq: die Regel gilt.",
            },
            {
              id: "b1-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wir hoffen auf gutes __(40)__!",
              correct: "i",
              explanation: "„auf gutes Wetter hoffen“ — yaxshi ob-havoga umid.",
            },
          ],
        },
      ],
    },
  ],
};
