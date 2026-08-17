import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 02 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
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
      hint: "Bo‘sh joydan oldingi va keyingi so‘zga qarang: predlogmi, bog‘lovchimi yoki fe’l shaklimi?",
      blocks: [
        {
          id: "b1b-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an einen Vermieter",
            body: `Sehr geehrter Herr Waldmann,

ich wohne seit zwei Jahren in Ihrem Haus in der Lindenstraße 12 und war __(21)__ immer sehr zufrieden.

Leider muss ich Ihnen heute ein Problem melden: Seit etwa drei Wochen tropft der Wasserhahn im Bad, __(22)__ ich ihn ganz fest zudrehe. Nachts ist das Geräusch so laut, __(23)__ ich schlecht schlafen kann.

Ich habe schon zweimal in der Hausverwaltung angerufen, aber es hat sich bisher niemand __(24)__ mich gekümmert. Deshalb wende ich mich jetzt direkt __(25)__ Sie.

Könnten Sie bitte einen Handwerker schicken? Ich bin montags und mittwochs ab 16 Uhr zu Hause; an den anderen Tagen __(26)__ meine Nachbarin die Tür öffnen. Sie hat einen Schlüssel.

Falls die Reparatur länger __(27)__ sollte, sagen Sie mir bitte rechtzeitig Bescheid, __(28)__ ich mir freinehmen kann.

Ich hoffe, dass wir __(29)__ Problem schnell lösen können.

Mit freundlichen __(30)__
Amina Yusupova`,
          },
          items: [
            {
              id: "b1b-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… und war __(21)__ immer sehr zufrieden.",
              options: [
                { key: "a", label: "bisher" },
                { key: "b", label: "damals" },
                { key: "c", label: "nachher" },
              ],
              correct: "a",
              explanation:
                "„bisher“ — shu paytgacha; „damals“ o‘tmishdagi aniq davrga ishora qiladi.",
            },
            {
              id: "b1b-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt:
                "…, __(22)__ ich ihn ganz fest zudrehe.",
              options: [
                { key: "a", label: "weil" },
                { key: "b", label: "obwohl" },
                { key: "c", label: "damit" },
              ],
              correct: "b",
              explanation:
                "Mahkam yopsa ham tomchilaydi — zidlik ma’nosi, ya’ni „obwohl“.",
            },
            {
              id: "b1b-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt:
                "Nachts ist das Geräusch so laut, __(23)__ ich schlecht schlafen kann.",
              options: [
                { key: "a", label: "dass" },
                { key: "b", label: "als" },
                { key: "c", label: "wenn" },
              ],
              correct: "a",
              explanation: "„so … dass“ — natija bildiruvchi juft bog‘lovchi.",
            },
            {
              id: "b1b-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "… es hat sich bisher niemand __(24)__ mich gekümmert.",
              options: [
                { key: "a", label: "für" },
                { key: "b", label: "an" },
                { key: "c", label: "um" },
              ],
              correct: "c",
              explanation: "„sich kümmern um + Akkusativ“ — barqaror birikma.",
            },
            {
              id: "b1b-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Deshalb wende ich mich jetzt direkt __(25)__ Sie.",
              options: [
                { key: "a", label: "an" },
                { key: "b", label: "auf" },
                { key: "c", label: "zu" },
              ],
              correct: "a",
              explanation: "„sich wenden an + Akkusativ“ — kimgadir murojaat qilmoq.",
            },
            {
              id: "b1b-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt:
                "… an den anderen Tagen __(26)__ meine Nachbarin die Tür öffnen.",
              options: [
                { key: "a", label: "kann" },
                { key: "b", label: "können" },
                { key: "c", label: "konnte" },
              ],
              correct: "a",
              explanation:
                "Ega birlikda („meine Nachbarin“) va gap hozirgi/kelasi zamonda — „kann“.",
            },
            {
              id: "b1b-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Falls die Reparatur länger __(27)__ sollte, …",
              options: [
                { key: "a", label: "dauert" },
                { key: "b", label: "dauern" },
                { key: "c", label: "gedauert" },
              ],
              correct: "b",
              explanation:
                "„sollte“ modal fe’l — undan keyin infinitiv keladi: „dauern sollte“.",
            },
            {
              id: "b1b-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(28)__ ich mir freinehmen kann.",
              options: [
                { key: "a", label: "damit" },
                { key: "b", label: "um" },
                { key: "c", label: "sodass" },
              ],
              correct: "a",
              explanation:
                "Maqsad bildiriladi va ega o‘zgaradi — „damit“. „um … zu“ da ega bir xil bo‘lishi kerak.",
            },
            {
              id: "b1b-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Ich hoffe, dass wir __(29)__ Problem schnell lösen können.",
              options: [
                { key: "a", label: "der" },
                { key: "b", label: "dem" },
                { key: "c", label: "das" },
              ],
              correct: "c",
              explanation:
                "„das Problem“ — Akkusativda ham „das“ (neytral rod o‘zgarmaydi).",
            },
            {
              id: "b1b-sb-030",
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
              explanation: "„mit“ + Dativ, ko‘plik: „mit freundlichen Grüßen“.",
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
      hint: "15 so‘zdan 10 tasi kerak. Avval fe’llarni, keyin otlarni joylashtiring.",
      bank: [
        { key: "a", label: "Anmeldung" },
        { key: "b", label: "bieten" },
        { key: "c", label: "dauert" },
        { key: "d", label: "erreichen" },
        { key: "e", label: "Erfahrung" },
        { key: "f", label: "findet" },
        { key: "g", label: "gebracht" },
        { key: "h", label: "Gebühr" },
        { key: "i", label: "kostenlos" },
        { key: "j", label: "läuft" },
        { key: "k", label: "nehmen" },
        { key: "l", label: "Platz" },
        { key: "m", label: "Regel" },
        { key: "n", label: "richten" },
        { key: "o", label: "Ziel" },
      ],
      blocks: [
        {
          id: "b1b-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Information der Stadtbücherei",
            body: `Liebe Leserinnen und Leser,

ab dem 1. Oktober __(31)__ unser neues Programm „Lesen für alle“. Unser __(32)__ ist es, mehr Menschen den Zugang zu Büchern zu erleichtern.

Neu ist vor allem: Für Kinder und Jugendliche unter 18 Jahren ist die Nutzung ab sofort __(33)__. Erwachsene zahlen weiterhin eine jährliche __(34)__ von 18 Euro.

Außerdem __(35)__ wir zweimal im Monat eine offene Lesestunde an. Sie __(36)__ jeweils etwa 90 Minuten und ist für alle Sprachniveaus geeignet. Eine __(37)__ ist nicht nötig, aber die Zahl der Plätze ist begrenzt.

Wer eine Frage hat, kann uns montags bis freitags von 10 bis 17 Uhr telefonisch __(38)__. Am Wochenende __(39)__ Sie Ihre Anfragen bitte per E-Mail an uns.

Bitte beachten Sie eine wichtige __(40)__: Bücher, die Sie länger als vier Wochen behalten möchten, müssen vorher verlängert werden.

Ihr Team der Stadtbücherei`,
          },
          items: [
            {
              id: "b1b-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… ab dem 1. Oktober __(31)__ unser neues Programm.",
              correct: "j",
              explanation:
                "„ein Programm läuft“ — dastur amal qiladi, ishga tushadi.",
            },
            {
              id: "b1b-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Unser __(32)__ ist es, mehr Menschen den Zugang zu erleichtern.",
              correct: "o",
              explanation: "„Unser Ziel ist es, … zu …“ — maqsad.",
            },
            {
              id: "b1b-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… ist die Nutzung ab sofort __(33)__.",
              correct: "i",
              explanation: "Kattalar to‘laydi, bolalar uchun — „kostenlos“.",
            },
            {
              id: "b1b-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Erwachsene zahlen eine jährliche __(34)__ von 18 Euro.",
              correct: "h",
              explanation: "„Gebühr“ — to‘lov, yig‘im.",
            },
            {
              id: "b1b-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Außerdem __(35)__ wir eine offene Lesestunde an.",
              correct: "b",
              explanation: "„anbieten“ — ajraladigan fe’l: bieten … an.",
            },
            {
              id: "b1b-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Sie __(36)__ jeweils etwa 90 Minuten.",
              correct: "c",
              explanation: "„dauern“ — davom etmoq; birlik: dauert.",
            },
            {
              id: "b1b-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Eine __(37)__ ist nicht nötig.",
              correct: "a",
              explanation: "„Anmeldung“ — oldindan ro‘yxatdan o‘tish.",
            },
            {
              id: "b1b-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… kann uns von 10 bis 17 Uhr telefonisch __(38)__.",
              correct: "d",
              explanation: "„jemanden erreichen“ — bog‘lana olmoq.",
            },
            {
              id: "b1b-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt:
                "Am Wochenende __(39)__ Sie Ihre Anfragen bitte per E-Mail an uns.",
              correct: "n",
              explanation:
                "„eine Anfrage an jemanden richten“ — so‘rovni yubormoq.",
            },
            {
              id: "b1b-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte beachten Sie eine wichtige __(40)__.",
              correct: "m",
              explanation: "„Regel“ — qoida; „eine Regel beachten“.",
            },
          ],
        },
      ],
    },
  ],
};
