import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 06 · Sprachbausteine — 2 Teil, 20 element, 30 ball. */
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
          id: "b2f-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Schreiben an eine Behörde",
            body: `Sehr geehrte Damen und Herren,

gegen den Bescheid vom 14. März, __(21)__ mir am 18. März zugestellt wurde, lege ich hiermit Widerspruch ein.

__(22)__ der Begründung wurde mein Antrag abgelehnt, weil die Einkommensgrenze überschritten sei. Diese Berechnung __(23)__ meines Erachtens auf veralteten Zahlen.

Seit dem 1. Februar arbeite ich in Teilzeit; mein Einkommen hat sich dadurch um etwa ein Drittel verringert. Die entsprechenden Nachweise __(24)__ diesem Schreiben bei.

__(25)__ ich die Unterlagen bereits im Januar eingereicht hätte, wären sie im Verfahren berücksichtigt worden. Der Hinweis auf die Frist war jedoch in dem Formular nicht erkennbar.

Ich bitte Sie daher, den Bescheid zu überprüfen und die neuen Angaben __(26)__.

Sollten weitere Unterlagen erforderlich sein, __(27)__ ich sie kurzfristig nach.

__(28)__ es zu einer erneuten Ablehnung kommen, bitte ich um eine ausführliche Begründung.

Je schneller die Prüfung erfolgt, __(29)__ eher kann ich planen.

__(30)__ Rückfragen erreichen Sie mich unter der oben genannten Nummer.

Mit freundlichen Grüßen
Kerim Aslan`,
          },
          items: [
            {
              id: "b2f-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… den Bescheid vom 14. März, __(21)__ mir zugestellt wurde, …",
              options: [
                { key: "a", label: "der" },
                { key: "b", label: "den" },
                { key: "c", label: "dem" },
              ],
              correct: "a",
              explanation:
                "Nisbiy gapda ega — „der Bescheid … der zugestellt wurde“ (passiv).",
            },
            {
              id: "b2f-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "__(22)__ der Begründung wurde mein Antrag abgelehnt.",
              options: [
                { key: "a", label: "Laut" },
                { key: "b", label: "Wegen" },
                { key: "c", label: "Trotz" },
              ],
              correct: "a",
              explanation: "„laut + Dativ/Genitiv“ — …ga ko‘ra.",
            },
            {
              id: "b2f-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "Diese Berechnung __(23)__ auf veralteten Zahlen.",
              options: [
                { key: "a", label: "beruht" },
                { key: "b", label: "besteht" },
                { key: "c", label: "bezieht" },
              ],
              correct: "a",
              explanation: "„beruhen auf“ — asoslanmoq.",
            },
            {
              id: "b2f-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "Die Nachweise __(24)__ diesem Schreiben bei.",
              options: [
                { key: "a", label: "liegen" },
                { key: "b", label: "legen" },
                { key: "c", label: "lagen" },
              ],
              correct: "a",
              explanation: "„beiliegen“ — ilova qilingan: liegen … bei.",
            },
            {
              id: "b2f-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "__(25)__ ich die Unterlagen im Januar eingereicht hätte, …",
              options: [
                { key: "a", label: "Wenn" },
                { key: "b", label: "Als" },
                { key: "c", label: "Falls" },
              ],
              correct: "a",
              explanation:
                "Irreal shart (Konjunktiv II, o‘tmish) — „Wenn … hätte, wären …“.",
            },
            {
              id: "b2f-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "… und die neuen Angaben __(26)__.",
              options: [
                { key: "a", label: "zu berücksichtigen" },
                { key: "b", label: "berücksichtigen" },
                { key: "c", label: "berücksichtigt" },
              ],
              correct: "a",
              explanation:
                "„Ich bitte Sie, … zu überprüfen und … zu berücksichtigen“ — zu + infinitiv.",
            },
            {
              id: "b2f-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(27)__ ich sie kurzfristig nach.",
              options: [
                { key: "a", label: "reiche" },
                { key: "b", label: "reichte" },
                { key: "c", label: "gereicht" },
              ],
              correct: "a",
              explanation:
                "„nachreichen“ hozirgi zamon, „ich“ shakli: reiche … nach.",
            },
            {
              id: "b2f-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "__(28)__ es zu einer erneuten Ablehnung kommen, …",
              options: [
                { key: "a", label: "Sollte" },
                { key: "b", label: "Würde" },
                { key: "c", label: "Hätte" },
              ],
              correct: "a",
              explanation: "Bog‘lovchisiz shart: „Sollte es … kommen, …“.",
            },
            {
              id: "b2f-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Je schneller die Prüfung erfolgt, __(29)__ eher kann ich planen.",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "so" },
                { key: "c", label: "als" },
              ],
              correct: "a",
              explanation: "„je … desto“.",
            },
            {
              id: "b2f-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ Rückfragen erreichen Sie mich …",
              options: [
                { key: "a", label: "Für" },
                { key: "b", label: "Zu" },
                { key: "c", label: "An" },
              ],
              correct: "a",
              explanation: "„Für Rückfragen …“ — xat oxiridagi ibora.",
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
        { key: "a", label: "abgeschlossen" },
        { key: "b", label: "Anforderungen" },
        { key: "c", label: "Aussicht" },
        { key: "d", label: "befristet" },
        { key: "e", label: "Bewerbung" },
        { key: "f", label: "eingestellt" },
        { key: "g", label: "Erfahrung" },
        { key: "h", label: "erwartet" },
        { key: "i", label: "Kenntnisse" },
        { key: "j", label: "Rahmen" },
        { key: "k", label: "richten" },
        { key: "l", label: "Standort" },
        { key: "m", label: "Tätigkeit" },
        { key: "n", label: "Vergütung" },
        { key: "o", label: "zuständig" },
      ],
      blocks: [
        {
          id: "b2f-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Stellenausschreibung",
            body: `Für unseren __(31)__ in Erfurt suchen wir zum nächstmöglichen Zeitpunkt eine Projektassistenz.

Die __(32)__ umfasst die Vorbereitung von Besprechungen, die Pflege von Terminplänen und die Kommunikation mit Lieferanten.

Zu den __(33)__ gehören eine abgeschlossene kaufmännische Ausbildung sowie sichere __(34)__ in Deutsch und Englisch. Erste __(35)__ im Projektumfeld ist von Vorteil, aber keine Bedingung.

Die Stelle ist zunächst auf zwei Jahre __(36)__, eine Übernahme ist bei guter Zusammenarbeit in __(37)__ gestellt.

Die __(38)__ erfolgt nach Tarif; hinzu kommen Zuschüsse zum Nahverkehr und 30 Urlaubstage.

Wir __(39)__ eine strukturierte Arbeitsweise und Freude an der Zusammenarbeit im Team.

Ihre __(40)__ senden Sie bitte bis zum 15. Juni an die unten genannte Adresse.`,
          },
          items: [
            {
              id: "b2f-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für unseren __(31)__ in Erfurt suchen wir …",
              correct: "l",
              explanation: "„Standort“ — filial, joylashuv.",
            },
            {
              id: "b2f-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(32)__ umfasst die Vorbereitung von Besprechungen.",
              correct: "m",
              explanation: "„Tätigkeit“ — faoliyat, vazifa.",
            },
            {
              id: "b2f-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Zu den __(33)__ gehören eine abgeschlossene Ausbildung …",
              correct: "b",
              explanation: "„Anforderungen“ — talablar.",
            },
            {
              id: "b2f-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… sowie sichere __(34)__ in Deutsch und Englisch.",
              correct: "i",
              explanation: "„Kenntnisse“ — bilim, til bilish darajasi.",
            },
            {
              id: "b2f-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Erste __(35)__ im Projektumfeld ist von Vorteil.",
              correct: "g",
              explanation: "„Erfahrung“ — tajriba.",
            },
            {
              id: "b2f-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Stelle ist zunächst auf zwei Jahre __(36)__.",
              correct: "d",
              explanation: "„befristet“ — muddatli.",
            },
            {
              id: "b2f-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… eine Übernahme ist in __(37)__ gestellt.",
              correct: "c",
              explanation: "„in Aussicht stellen“ — va’da qilmoq, ko‘zda tutmoq.",
            },
            {
              id: "b2f-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(38)__ erfolgt nach Tarif.",
              correct: "n",
              explanation: "„Vergütung“ — haq to‘lash.",
            },
            {
              id: "b2f-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wir __(39)__ eine strukturierte Arbeitsweise.",
              correct: "h",
              explanation: "„erwarten“ — kutmoq, talab qilmoq.",
            },
            {
              id: "b2f-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Ihre __(40)__ senden Sie bitte bis zum 15. Juni.",
              correct: "e",
              explanation: "„Bewerbung“ — ariza, hujjatlar to‘plami.",
            },
          ],
        },
      ],
    },
  ],
};
