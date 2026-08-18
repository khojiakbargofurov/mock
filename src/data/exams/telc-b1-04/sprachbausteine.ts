import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 04 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
 */
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
          id: "b1d-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an eine Kollegin",
            body: `Liebe Sabine,

vielen Dank für deine Nachricht. Ich freue mich __(21)__ das Wiedersehen im September.

Wie du weißt, arbeite ich __(22)__ Januar in der neuen Abteilung. Am Anfang war es schwierig, __(23)__ inzwischen habe ich mich gut eingearbeitet.

Zu deiner Frage: Der Bericht muss bis Freitag fertig sein, __(24)__ die Chefin ihn am Montag braucht. Ich habe schon angefangen, aber __(25)__ mir fehlen noch die Zahlen aus der Buchhaltung.

Könntest du bitte Frau Renz fragen, __(26)__ sie mir die Tabelle heute noch schicken kann? Du kennst sie besser als ich.

__(27)__ es zeitlich nicht klappt, sag mir bitte Bescheid. Dann verschiebe ich den Termin.

Übrigens: Am Donnerstag habe ich frei. Wir könnten uns __(28)__ Mittag treffen, wenn du Lust __(29)__.

Liebe __(30)__
Katrin`,
          },
          items: [
            {
              id: "b1d-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "Ich freue mich __(21)__ das Wiedersehen.",
              options: [
                { key: "a", label: "auf" },
                { key: "b", label: "über" },
                { key: "c", label: "für" },
              ],
              correct: "a",
              explanation:
                "„sich freuen auf“ — kelajakdagi voqea; „über“ o‘tgan/hozirgi narsaga.",
            },
            {
              id: "b1d-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "… arbeite ich __(22)__ Januar in der neuen Abteilung.",
              options: [
                { key: "a", label: "seit" },
                { key: "b", label: "vor" },
                { key: "c", label: "ab" },
              ],
              correct: "a",
              explanation: "Yanvardan beri davom etadi — „seit“.",
            },
            {
              id: "b1d-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "Am Anfang war es schwierig, __(23)__ inzwischen …",
              options: [
                { key: "a", label: "aber" },
                { key: "b", label: "weil" },
                { key: "c", label: "damit" },
              ],
              correct: "a",
              explanation: "Zidlik, fe’l ikkinchi o‘rinda — „aber“.",
            },
            {
              id: "b1d-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "… bis Freitag fertig sein, __(24)__ die Chefin ihn braucht.",
              options: [
                { key: "a", label: "weil" },
                { key: "b", label: "obwohl" },
                { key: "c", label: "trotzdem" },
              ],
              correct: "a",
              explanation: "Sabab va fe’l gap oxirida — „weil“.",
            },
            {
              id: "b1d-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Ich habe schon angefangen, aber __(25)__ mir fehlen die Zahlen.",
              options: [
                { key: "a", label: "leider" },
                { key: "b", label: "gern" },
                { key: "c", label: "sofort" },
              ],
              correct: "a",
              explanation: "Afsuslanish ma’nosi — „leider“.",
            },
            {
              id: "b1d-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "… Frau Renz fragen, __(26)__ sie mir die Tabelle schicken kann?",
              options: [
                { key: "a", label: "ob" },
                { key: "b", label: "dass" },
                { key: "c", label: "wenn" },
              ],
              correct: "a",
              explanation: "Bilvosita ha/yo‘q savoli — „ob“.",
            },
            {
              id: "b1d-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "__(27)__ es zeitlich nicht klappt, sag mir bitte Bescheid.",
              options: [
                { key: "a", label: "Falls" },
                { key: "b", label: "Ob" },
                { key: "c", label: "Damit" },
              ],
              correct: "a",
              explanation: "Shart — „Falls“ (= wenn).",
            },
            {
              id: "b1d-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Wir könnten uns __(28)__ Mittag treffen.",
              options: [
                { key: "a", label: "gegen" },
                { key: "b", label: "seit" },
                { key: "c", label: "bis" },
              ],
              correct: "a",
              explanation: "„gegen Mittag“ — taxminan tush payti.",
            },
            {
              id: "b1d-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "…, wenn du Lust __(29)__.",
              options: [
                { key: "a", label: "hast" },
                { key: "b", label: "hat" },
                { key: "c", label: "haben" },
              ],
              correct: "a",
              explanation: "„du“ uchun shakl: hast.",
            },
            {
              id: "b1d-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "Liebe __(30)__",
              options: [
                { key: "a", label: "Grüße" },
                { key: "b", label: "Grüßen" },
                { key: "c", label: "Gruß" },
              ],
              correct: "a",
              explanation:
                "Do‘stona xatda „Liebe Grüße“ — Nominativ ko‘plik (predlogsiz).",
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
        { key: "a", label: "Anspruch" },
        { key: "b", label: "beträgt" },
        { key: "c", label: "Bewerbung" },
        { key: "d", label: "erhalten" },
        { key: "e", label: "gilt" },
        { key: "f", label: "haben" },
        { key: "g", label: "Kosten" },
        { key: "h", label: "Nachweis" },
        { key: "i", label: "prüfen" },
        { key: "j", label: "Stelle" },
        { key: "k", label: "stellen" },
        { key: "l", label: "Termin" },
        { key: "m", label: "übernimmt" },
        { key: "n", label: "wenden" },
        { key: "o", label: "Zuschuss" },
      ],
      blocks: [
        {
          id: "b1d-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Information: Unterstützung beim Deutschkurs",
            body: `Wer einen Deutschkurs besuchen möchte, kann unter bestimmten Bedingungen einen __(31)__ zu den Kursgebühren bekommen.

Die Förderung __(32)__ für Kurse ab Niveau A1 bis B1. Sie __(33)__ höchstens 70 Prozent der Gebühr; den Rest zahlen Sie selbst.

Voraussetzung ist, dass Sie einen Antrag __(34)__, bevor der Kurs beginnt. Anträge nach Kursbeginn können wir leider nicht mehr __(35)__.

Dem Antrag legen Sie bitte einen __(36)__ über Ihr Einkommen bei. Wenn Sie Leistungen vom Jobcenter __(37)__, genügt der letzte Bescheid.

Die restlichen __(38)__ für Bücher und Prüfungsgebühren müssen Sie selbst tragen. In Ausnahmefällen __(39)__ die Kommune auch die Prüfungsgebühr.

Bei Fragen __(40)__ Sie sich bitte an das Bildungsbüro, Zimmer 8.`,
          },
          items: [
            {
              id: "b1d-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… kann einen __(31)__ zu den Kursgebühren bekommen.",
              correct: "o",
              explanation: "„Zuschuss“ — moliyaviy qo‘shimcha yordam.",
            },
            {
              id: "b1d-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Förderung __(32)__ für Kurse ab Niveau A1 bis B1.",
              correct: "e",
              explanation: "„gelten für“ — amal qilmoq.",
            },
            {
              id: "b1d-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Sie __(33)__ höchstens 70 Prozent der Gebühr.",
              correct: "b",
              explanation: "„betragen“ — miqdori … ni tashkil qilmoq.",
            },
            {
              id: "b1d-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… dass Sie einen Antrag __(34)__.",
              correct: "k",
              explanation: "„einen Antrag stellen“ — ariza bermoq.",
            },
            {
              id: "b1d-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… können wir leider nicht mehr __(35)__.",
              correct: "i",
              explanation: "„prüfen“ — ko‘rib chiqmoq.",
            },
            {
              id: "b1d-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… legen Sie bitte einen __(36)__ über Ihr Einkommen bei.",
              correct: "h",
              explanation: "„Nachweis“ — tasdiqlovchi hujjat.",
            },
            {
              id: "b1d-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wenn Sie Leistungen vom Jobcenter __(37)__ …",
              correct: "d",
              explanation: "„Leistungen erhalten“ — nafaqa olmoq.",
            },
            {
              id: "b1d-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die restlichen __(38)__ für Bücher …",
              correct: "g",
              explanation: "„Kosten“ — xarajatlar.",
            },
            {
              id: "b1d-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "In Ausnahmefällen __(39)__ die Kommune die Prüfungsgebühr.",
              correct: "m",
              explanation: "„die Kosten übernehmen“ — o‘z zimmasiga olmoq.",
            },
            {
              id: "b1d-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bei Fragen __(40)__ Sie sich bitte an das Bildungsbüro.",
              correct: "n",
              explanation: "„sich wenden an“ — murojaat qilmoq.",
            },
          ],
        },
      ],
    },
  ],
};
