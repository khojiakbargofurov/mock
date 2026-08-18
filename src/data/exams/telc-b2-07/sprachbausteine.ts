import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 07 · Sprachbausteine — 2 Teil, 20 element, 30 ball. */
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
          id: "b2g-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Interner Bericht an die Amtsleitung",
            body: `Sehr geehrte Frau Roth,

wie gewünscht fasse ich die Ergebnisse der Umstellung zusammen, __(21)__ wir im Januar abgeschlossen haben.

__(22)__ der anfänglichen Skepsis hat sich die Mehrheit der Beschäftigten inzwischen an die digitale Aktenführung gewöhnt. Die Bearbeitungszeit __(23)__ sich allerdings nur in zwei von sechs Bereichen spürbar verkürzt.

Der Grund liegt aus meiner Sicht weniger in der Technik __(24)__ in den Abläufen: Ein Vorgang wird nach wie vor von vier Stellen geprüft, __(25)__ dies fachlich erforderlich wäre.

Ich schlage daher vor, die Prüfschritte zu überarbeiten, __(26)__ weitere Module eingeführt werden.

__(27)__ wir im Frühjahr begonnen, wären wir heute deutlich weiter; die Personallage ließ das jedoch nicht zu.

Die Auswertung der Rückmeldungen __(28)__ derzeit noch vorbereitet und liegt Ihnen bis Monatsende vor.

Je klarer die Zuständigkeiten geregelt sind, __(29)__ weniger Rückfragen entstehen.

__(30)__ weitere Erläuterungen stehe ich Ihnen gern zur Verfügung.

Mit freundlichen Grüßen
Martin Bauer`,
          },
          items: [
            {
              id: "b2g-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… die Ergebnisse der Umstellung, __(21)__ wir abgeschlossen haben.",
              options: [
                { key: "a", label: "die" },
                { key: "b", label: "der" },
                { key: "c", label: "deren" },
              ],
              correct: "a",
              explanation: "„die Umstellung“ — ayol rodi, Akkusativ: die.",
            },
            {
              id: "b2g-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "__(22)__ der anfänglichen Skepsis hat sich die Mehrheit gewöhnt.",
              options: [
                { key: "a", label: "Trotz" },
                { key: "b", label: "Wegen" },
                { key: "c", label: "Obwohl" },
              ],
              correct: "a",
              explanation: "Shubhaga qaramay ko‘nikishdi — „trotz + Genitiv“.",
            },
            {
              id: "b2g-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "Die Bearbeitungszeit __(23)__ sich nur in zwei Bereichen verkürzt.",
              options: [
                { key: "a", label: "hat" },
                { key: "b", label: "ist" },
                { key: "c", label: "wird" },
              ],
              correct: "a",
              explanation: "„sich verkürzen“ — refleksiv fe’l, Perfektda „haben“.",
            },
            {
              id: "b2g-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "… weniger in der Technik __(24)__ in den Abläufen.",
              options: [
                { key: "a", label: "als" },
                { key: "b", label: "wie" },
                { key: "c", label: "sondern" },
              ],
              correct: "a",
              explanation: "„weniger … als …“ — qiyoslash juftligi.",
            },
            {
              id: "b2g-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "… von vier Stellen geprüft, __(25)__ dies fachlich erforderlich wäre.",
              options: [
                { key: "a", label: "ohne dass" },
                { key: "b", label: "damit" },
                { key: "c", label: "sodass" },
              ],
              correct: "a",
              explanation:
                "„ohne dass“ — kutilgan shart bajarilmasdan sodir bo‘lishini bildiradi.",
            },
            {
              id: "b2g-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "…, die Prüfschritte zu überarbeiten, __(26)__ weitere Module eingeführt werden.",
              options: [
                { key: "a", label: "bevor" },
                { key: "b", label: "nachdem" },
                { key: "c", label: "seitdem" },
              ],
              correct: "a",
              explanation: "Avval jarayon, keyin modullar — „bevor“.",
            },
            {
              id: "b2g-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "__(27)__ wir im Frühjahr begonnen, wären wir heute weiter.",
              options: [
                { key: "a", label: "Hätten" },
                { key: "b", label: "Wenn" },
                { key: "c", label: "Würden" },
              ],
              correct: "a",
              explanation:
                "Bog‘lovchisiz irreal shart: „Hätten wir … begonnen, wären wir …“.",
            },
            {
              id: "b2g-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Die Auswertung __(28)__ derzeit noch vorbereitet.",
              options: [
                { key: "a", label: "wird" },
                { key: "b", label: "ist" },
                { key: "c", label: "hat" },
              ],
              correct: "a",
              explanation: "Vorgangspassiv: „wird … vorbereitet“ — jarayon davom etyapti.",
            },
            {
              id: "b2g-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Je klarer die Zuständigkeiten geregelt sind, __(29)__ weniger Rückfragen …",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "so" },
                { key: "c", label: "als" },
              ],
              correct: "a",
              explanation: "„je … desto“.",
            },
            {
              id: "b2g-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ weitere Erläuterungen stehe ich zur Verfügung.",
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
        { key: "a", label: "Abschluss" },
        { key: "b", label: "Anspruch" },
        { key: "c", label: "beantragen" },
        { key: "d", label: "berechtigt" },
        { key: "e", label: "Bewilligung" },
        { key: "f", label: "eingehalten" },
        { key: "g", label: "entrichten" },
        { key: "h", label: "Fristen" },
        { key: "i", label: "Höhe" },
        { key: "j", label: "nachweisen" },
        { key: "k", label: "Rahmen" },
        { key: "l", label: "richtet" },
        { key: "m", label: "Umfang" },
        { key: "n", label: "Voraussetzungen" },
        { key: "o", label: "zurückgezahlt" },
      ],
      blocks: [
        {
          id: "b2g-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Merkblatt: Aufstiegs-BAföG",
            body: `Wer eine Fortbildung zum Meister oder Fachwirt absolviert, kann im __(31)__ des Aufstiegs-BAföG eine Förderung __(32)__.

Zu den __(33)__ gehört eine abgeschlossene Berufsausbildung oder ein erster berufsqualifizierender __(34)__.

Die __(35)__ der Förderung __(36)__ sich nach den Lehrgangs- und Prüfungsgebühren; Materialkosten sind nicht enthalten.

Ein Teil der Förderung wird als Zuschuss gewährt, der Rest als Darlehen. Dieses muss erst nach Ende der Maßnahme __(37)__ werden.

Antragstellende müssen ihre Teilnahme regelmäßig __(38)__. Werden die vorgesehenen __(39)__ nicht __(40)__, kann die Förderung ganz oder teilweise entfallen.

Weitere Hinweise erhalten Sie in der Beratungsstelle.`,
          },
          items: [
            {
              id: "b2g-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… kann im __(31)__ des Aufstiegs-BAföG …",
              correct: "k",
              explanation: "„im Rahmen von“ — doirasida.",
            },
            {
              id: "b2g-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… eine Förderung __(32)__.",
              correct: "c",
              explanation: "„eine Förderung beantragen“ — ariza bermoq.",
            },
            {
              id: "b2g-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Zu den __(33)__ gehört eine abgeschlossene Berufsausbildung.",
              correct: "n",
              explanation: "„Voraussetzungen“ — shartlar.",
            },
            {
              id: "b2g-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… oder ein erster berufsqualifizierender __(34)__.",
              correct: "a",
              explanation: "„Abschluss“ — diplom, tugatilgan ta’lim.",
            },
            {
              id: "b2g-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(35)__ der Förderung …",
              correct: "i",
              explanation: "„die Höhe“ — miqdori.",
            },
            {
              id: "b2g-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… __(36)__ sich nach den Lehrgangsgebühren.",
              correct: "l",
              explanation: "„sich richten nach“ — bog‘liq bo‘lmoq.",
            },
            {
              id: "b2g-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Dieses muss erst nach Ende der Maßnahme __(37)__ werden.",
              correct: "o",
              explanation: "„zurückzahlen“ passivda — qaytarilishi kerak.",
            },
            {
              id: "b2g-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Antragstellende müssen ihre Teilnahme regelmäßig __(38)__.",
              correct: "j",
              explanation: "„nachweisen“ — hujjat bilan tasdiqlamoq.",
            },
            {
              id: "b2g-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Werden die vorgesehenen __(39)__ …",
              correct: "h",
              explanation: "„Fristen“ — muddatlar.",
            },
            {
              id: "b2g-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… nicht __(40)__, kann die Förderung entfallen.",
              correct: "f",
              explanation: "„Fristen einhalten“ passivda — rioya qilinmasa.",
            },
          ],
        },
      ],
    },
  ],
};
