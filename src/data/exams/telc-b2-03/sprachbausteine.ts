import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 03 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
 */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      hint: "Passiv, Konjunktiv II va Genitiv predloglariga e’tibor bering.",
      blocks: [
        {
          id: "b2c-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Schreiben an einen Geschäftspartner",
            body: `Sehr geehrte Frau Dr. Lindner,

wir bedanken uns für das Angebot, __(21)__ Sie uns vergangene Woche übersandt haben.

__(22)__ der kurzen Frist konnten wir es bereits im Führungskreis besprechen. Die technische Lösung überzeugt uns; kritisch sehen wir __(23)__ den Zeitplan.

Nach unserer Einschätzung __(24)__ die Umstellung nicht innerhalb von acht Wochen abgeschlossen werden. Realistisch wären zwölf Wochen, __(25)__ wir die Schulungen parallel durchführen.

__(26)__ Sie den Zeitplan entsprechend anpassen, könnten wir den Vertrag noch in diesem Quartal unterzeichnen.

Bitte berücksichtigen Sie außerdem, dass unsere Standorte in Polen erst __(27)__ Jahresende angebunden werden sollen. Die Kosten dafür __(28)__ in Ihrem Angebot bisher nicht ausgewiesen.

Je früher wir Klarheit haben, __(29)__ besser können wir intern planen.

__(30)__ Rückfragen erreichen Sie mich jederzeit unter der bekannten Nummer.

Mit freundlichen Grüßen
Katrin Ahlers`,
          },
          items: [
            {
              id: "b2c-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… für das Angebot, __(21)__ Sie uns übersandt haben.",
              options: [
                { key: "a", label: "das" },
                { key: "b", label: "dem" },
                { key: "c", label: "dessen" },
              ],
              correct: "a",
              explanation:
                "„das Angebot“ neytral, „übersenden“ Akkusativ talab qiladi: das.",
            },
            {
              id: "b2c-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "__(22)__ der kurzen Frist konnten wir es besprechen.",
              options: [
                { key: "a", label: "Trotz" },
                { key: "b", label: "Wegen" },
                { key: "c", label: "Obwohl" },
              ],
              correct: "a",
              explanation:
                "Qisqa muddatga qaramay ulgurishdi — „trotz + Genitiv“.",
            },
            {
              id: "b2c-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "… kritisch sehen wir __(23)__ den Zeitplan.",
              options: [
                { key: "a", label: "allerdings" },
                { key: "b", label: "deswegen" },
                { key: "c", label: "damit" },
              ],
              correct: "a",
              explanation: "Zidlik yumshoq bildiriladi — „allerdings“.",
            },
            {
              id: "b2c-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "… __(24)__ die Umstellung nicht innerhalb von acht Wochen abgeschlossen werden.",
              options: [
                { key: "a", label: "kann" },
                { key: "b", label: "wird" },
                { key: "c", label: "hat" },
              ],
              correct: "a",
              explanation:
                "Modal + passiv infinitiv: „kann … abgeschlossen werden“.",
            },
            {
              id: "b2c-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Realistisch wären zwölf Wochen, __(25)__ wir die Schulungen parallel durchführen.",
              options: [
                { key: "a", label: "sofern" },
                { key: "b", label: "obwohl" },
                { key: "c", label: "indem" },
              ],
              correct: "a",
              explanation: "„sofern“ — shart bildiradi (= wenn), rasmiy uslub.",
            },
            {
              id: "b2c-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "__(26)__ Sie den Zeitplan anpassen, könnten wir unterzeichnen.",
              options: [
                { key: "a", label: "Sollten" },
                { key: "b", label: "Würden" },
                { key: "c", label: "Hätten" },
              ],
              correct: "a",
              explanation:
                "Bog‘lovchisiz shart gap: „Sollten Sie …, könnten wir …“.",
            },
            {
              id: "b2c-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "… erst __(27)__ Jahresende angebunden werden sollen.",
              options: [
                { key: "a", label: "zum" },
                { key: "b", label: "am" },
                { key: "c", label: "im" },
              ],
              correct: "a",
              explanation: "„zum Jahresende“ — barqaror vaqt ifodasi.",
            },
            {
              id: "b2c-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Die Kosten dafür __(28)__ bisher nicht ausgewiesen.",
              options: [
                { key: "a", label: "sind" },
                { key: "b", label: "haben" },
                { key: "c", label: "werden" },
              ],
              correct: "a",
              explanation:
                "Zustandspassiv: „sind … ausgewiesen“ — holatni bildiradi.",
            },
            {
              id: "b2c-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Je früher wir Klarheit haben, __(29)__ besser können wir planen.",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "umso mehr" },
                { key: "c", label: "so" },
              ],
              correct: "a",
              explanation: "„je … desto“ — juft qiyosiy bog‘lovchi.",
            },
            {
              id: "b2c-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ Rückfragen erreichen Sie mich jederzeit.",
              options: [
                { key: "a", label: "Für" },
                { key: "b", label: "Bei" },
                { key: "c", label: "Zu" },
              ],
              correct: "b",
              explanation: "„Bei Rückfragen …“ — xat oxiridagi standart ibora.",
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
      hint: "Rasmiy uslubdagi barqaror birikmalarni eslang.",
      bank: [
        { key: "a", label: "Anspruch" },
        { key: "b", label: "aufgenommen" },
        { key: "c", label: "Bedarf" },
        { key: "d", label: "berücksichtigt" },
        { key: "e", label: "Einschätzung" },
        { key: "f", label: "entfällt" },
        { key: "g", label: "Erfahrung" },
        { key: "h", label: "erfolgt" },
        { key: "i", label: "Grundlage" },
        { key: "j", label: "Nachfrage" },
        { key: "k", label: "richtet" },
        { key: "l", label: "Teilnahme" },
        { key: "m", label: "Umfang" },
        { key: "n", label: "verpflichtet" },
        { key: "o", label: "Voraussetzung" },
      ],
      blocks: [
        {
          id: "b2c-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Information zum betrieblichen Weiterbildungsprogramm",
            body: `Ab dem kommenden Quartal wird das interne Weiterbildungsprogramm neu strukturiert. __(31)__ dieser Neuordnung ist eine Befragung, an der sich rund 400 Beschäftigte beteiligt haben.

Der __(32)__ des Angebots wird deutlich erweitert: Statt bisher zwölf stehen künftig zwanzig Module zur Verfügung. Welche Module angeboten werden, __(33)__ sich nach dem tatsächlichen Bedarf der Fachbereiche.

__(34)__ für die Anmeldung ist ein abgeschlossenes Einführungsmodul. Wer dieses bereits im Vorjahr besucht hat, muss es nicht wiederholen — die __(35)__ wird angerechnet.

Die Anmeldung __(36)__ ausschließlich über das Intranet. Anträge, die nach Ablauf der Frist eingehen, können erst im Folgequartal __(37)__ werden.

Bitte beachten Sie: Bei weniger als sechs Anmeldungen __(38)__ der Kurs. Sie werden in diesem Fall spätestens eine Woche vorher informiert.

Die Freistellung während der Kurszeiten ist gesichert; der Betrieb __(39)__ sich, die Teilnahme als Arbeitszeit anzurechnen.

Angesichts der hohen __(40)__ im letzten Jahr empfehlen wir eine frühzeitige Anmeldung.`,
          },
          items: [
            {
              id: "b2c-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(31)__ dieser Neuordnung ist eine Befragung.",
              correct: "i",
              explanation: "„Grundlage“ — asos.",
            },
            {
              id: "b2c-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der __(32)__ des Angebots wird erweitert.",
              correct: "m",
              explanation: "„der Umfang“ — hajm, ko‘lam.",
            },
            {
              id: "b2c-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… __(33)__ sich nach dem tatsächlichen Bedarf.",
              correct: "k",
              explanation: "„sich richten nach“ — biror narsaga qarab belgilanmoq.",
            },
            {
              id: "b2c-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(34)__ für die Anmeldung ist ein Einführungsmodul.",
              correct: "o",
              explanation: "„Voraussetzung“ — shart.",
            },
            {
              id: "b2c-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… die __(35)__ wird angerechnet.",
              correct: "l",
              explanation: "„die Teilnahme anrechnen“ — ishtirokni hisobga olmoq.",
            },
            {
              id: "b2c-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Anmeldung __(36)__ über das Intranet.",
              correct: "h",
              explanation: "„erfolgen“ — amalga oshirilmoq (rasmiy uslub).",
            },
            {
              id: "b2c-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… können erst im Folgequartal __(37)__ werden.",
              correct: "d",
              explanation: "„berücksichtigen“ passivda — hisobga olinmoq.",
            },
            {
              id: "b2c-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bei weniger als sechs Anmeldungen __(38)__ der Kurs.",
              correct: "f",
              explanation: "„entfallen“ — bekor bo‘lmoq.",
            },
            {
              id: "b2c-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… der Betrieb __(39)__ sich, die Teilnahme anzurechnen.",
              correct: "n",
              explanation: "„sich verpflichten, … zu …“ — majburiyat olmoq.",
            },
            {
              id: "b2c-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Angesichts der hohen __(40)__ im letzten Jahr …",
              correct: "j",
              explanation: "„die Nachfrage“ — talab.",
            },
          ],
        },
      ],
    },
  ],
};
