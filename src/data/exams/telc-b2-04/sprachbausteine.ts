import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 04 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
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
          id: "b2d-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Stellungnahme an die Geschäftsführung",
            body: `Sehr geehrte Damen und Herren,

zu dem Vorschlag, die Öffnungszeiten der Beratungsstelle zu verkürzen, __(21)__ wir wie folgt Stellung.

Die Zahl der Anfragen ist im vergangenen Jahr um 18 Prozent gestiegen, __(22)__ wir dieselbe Personalstärke hatten. Eine Verkürzung __(23)__ deshalb dazu führen, dass Ratsuchende abgewiesen werden müssen.

__(24)__ der angespannten Haushaltslage haben wir Verständnis für Einsparungen. Wir schlagen jedoch vor, zunächst die Verwaltungskosten zu prüfen, __(25)__ die Beratungszeiten zu kürzen.

Sollte an dem Vorschlag festgehalten werden, __(26)__ wir um eine schriftliche Begründung. Diese benötigen wir auch deshalb, __(27)__ wir den Fördergeber informieren müssen.

Die Auswertung des laufenden Quartals __(28)__ derzeit noch erstellt; wir stellen sie Ihnen Ende des Monats zur Verfügung.

Je eher eine Entscheidung fällt, __(29)__ verlässlicher können wir planen.

__(30)__ weitere Erläuterungen stehen wir Ihnen gern zur Verfügung.

Mit freundlichen Grüßen
Team der Beratungsstelle`,
          },
          items: [
            {
              id: "b2d-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… __(21)__ wir wie folgt Stellung.",
              options: [
                { key: "a", label: "nehmen" },
                { key: "b", label: "geben" },
                { key: "c", label: "machen" },
              ],
              correct: "a",
              explanation: "„Stellung nehmen zu“ — barqaror birikma.",
            },
            {
              id: "b2d-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "… gestiegen, __(22)__ wir dieselbe Personalstärke hatten.",
              options: [
                { key: "a", label: "obwohl" },
                { key: "b", label: "weil" },
                { key: "c", label: "indem" },
              ],
              correct: "a",
              explanation: "Zidlik: xodimlar soni oshmagani holda talab oshdi.",
            },
            {
              id: "b2d-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "Eine Verkürzung __(23)__ deshalb dazu führen …",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "wird" },
                { key: "c", label: "hat" },
              ],
              correct: "a",
              explanation:
                "Konjunktiv II — faraziy oqibat: „würde … führen“.",
            },
            {
              id: "b2d-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "__(24)__ der angespannten Haushaltslage …",
              options: [
                { key: "a", label: "Angesichts" },
                { key: "b", label: "Obwohl" },
                { key: "c", label: "Nachdem" },
              ],
              correct: "a",
              explanation: "„angesichts + Genitiv“ — vaziyatga qarab.",
            },
            {
              id: "b2d-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "… zunächst die Verwaltungskosten zu prüfen, __(25)__ die Beratungszeiten zu kürzen.",
              options: [
                { key: "a", label: "statt" },
                { key: "b", label: "ohne" },
                { key: "c", label: "um" },
              ],
              correct: "a",
              explanation: "„statt … zu“ — o‘rniga.",
            },
            {
              id: "b2d-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(26)__ wir um eine schriftliche Begründung.",
              options: [
                { key: "a", label: "bitten" },
                { key: "b", label: "fragen" },
                { key: "c", label: "verlangen" },
              ],
              correct: "a",
              explanation: "„um etwas bitten“ — muloyim so‘rov.",
            },
            {
              id: "b2d-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "… auch deshalb, __(27)__ wir den Fördergeber informieren müssen.",
              options: [
                { key: "a", label: "weil" },
                { key: "b", label: "damit" },
                { key: "c", label: "obwohl" },
              ],
              correct: "a",
              explanation: "„deshalb …, weil“ — sabab juftligi.",
            },
            {
              id: "b2d-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Die Auswertung __(28)__ derzeit noch erstellt.",
              options: [
                { key: "a", label: "wird" },
                { key: "b", label: "ist" },
                { key: "c", label: "hat" },
              ],
              correct: "a",
              explanation: "Vorgangspassiv: „wird … erstellt“ — jarayon davom etyapti.",
            },
            {
              id: "b2d-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Je eher eine Entscheidung fällt, __(29)__ verlässlicher …",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "als" },
                { key: "c", label: "so" },
              ],
              correct: "a",
              explanation: "„je … desto“.",
            },
            {
              id: "b2d-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ weitere Erläuterungen stehen wir zur Verfügung.",
              options: [
                { key: "a", label: "Für" },
                { key: "b", label: "Auf" },
                { key: "c", label: "Über" },
              ],
              correct: "a",
              explanation: "„Für Rückfragen / für weitere Erläuterungen …“.",
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
        { key: "a", label: "Auflagen" },
        { key: "b", label: "ausgestellt" },
        { key: "c", label: "Bedingungen" },
        { key: "d", label: "beigefügt" },
        { key: "e", label: "entnehmen" },
        { key: "f", label: "erteilt" },
        { key: "g", label: "Fassung" },
        { key: "h", label: "gültig" },
        { key: "i", label: "hervor" },
        { key: "j", label: "Rücksprache" },
        { key: "k", label: "setzt" },
        { key: "l", label: "Unterlagen" },
        { key: "m", label: "veranlasst" },
        { key: "n", label: "Widerspruch" },
        { key: "o", label: "zugestellt" },
      ],
      blocks: [
        {
          id: "b2d-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Bescheid einer Behörde",
            body: `Sehr geehrte Frau Aydin,

auf Ihren Antrag vom 12. Februar wird Ihnen die beantragte Genehmigung hiermit __(31)__.

Die Genehmigung ist bis zum 31. Dezember des kommenden Jahres __(32)__. Eine Verlängerung ist möglich; der Antrag ist spätestens acht Wochen vorher zu stellen.

Bitte beachten Sie die folgenden __(33)__: Die Arbeiten dürfen ausschließlich werktags zwischen 7 und 20 Uhr durchgeführt werden.

Die Einzelheiten können Sie der __(34)__ Anlage entnehmen. Sollten die dort genannten __(35)__ nicht eingehalten werden, kann die Genehmigung widerrufen werden.

Aus den eingereichten __(36)__ geht nicht eindeutig hervor, wie die Zufahrt gesichert wird. Wir bitten Sie, dies nach __(37)__ mit dem Ordnungsamt schriftlich nachzureichen.

Gegen diesen Bescheid können Sie innerhalb eines Monats nach Bekanntgabe __(38)__ einlegen.

Der Bescheid wurde Ihnen per Post __(39)__; ein weiterer Versand erfolgt nicht.

Weitere Hinweise können Sie unserem Merkblatt __(40)__.`,
          },
          items: [
            {
              id: "b2d-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… wird Ihnen die Genehmigung hiermit __(31)__.",
              correct: "f",
              explanation: "„eine Genehmigung erteilen“ — ruxsat bermoq.",
            },
            {
              id: "b2d-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Genehmigung ist bis zum 31. Dezember __(32)__.",
              correct: "h",
              explanation: "„gültig sein“ — amal qilmoq.",
            },
            {
              id: "b2d-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte beachten Sie die folgenden __(33)__.",
              correct: "a",
              explanation: "„Auflagen“ — qo‘shimcha majburiy shartlar.",
            },
            {
              id: "b2d-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Einzelheiten können Sie der __(34)__ Anlage entnehmen.",
              correct: "d",
              explanation: "„beigefügt“ — ilova qilingan.",
            },
            {
              id: "b2d-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Sollten die dort genannten __(35)__ nicht eingehalten werden …",
              correct: "c",
              explanation: "„Bedingungen einhalten“ — shartlarga rioya qilmoq.",
            },
            {
              id: "b2d-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Aus den eingereichten __(36)__ geht nicht hervor …",
              correct: "l",
              explanation: "„Unterlagen“ — hujjatlar.",
            },
            {
              id: "b2d-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… dies nach __(37)__ mit dem Ordnungsamt nachzureichen.",
              correct: "j",
              explanation: "„nach Rücksprache mit“ — kelishib olgach.",
            },
            {
              id: "b2d-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… innerhalb eines Monats __(38)__ einlegen.",
              correct: "n",
              explanation: "„Widerspruch einlegen“ — e’tiroz bildirmoq.",
            },
            {
              id: "b2d-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der Bescheid wurde Ihnen per Post __(39)__.",
              correct: "o",
              explanation: "„zustellen“ — rasmiy yetkazib bermoq.",
            },
            {
              id: "b2d-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Weitere Hinweise können Sie unserem Merkblatt __(40)__.",
              correct: "e",
              explanation: "„etwas einer Quelle entnehmen“ — manbadan olmoq.",
            },
          ],
        },
      ],
    },
  ],
};
