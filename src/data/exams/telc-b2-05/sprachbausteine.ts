import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 05 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
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
          id: "b2e-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Bewerbungsschreiben",
            body: `Sehr geehrte Frau Dr. Lindner,

auf Ihre Stellenanzeige, __(21)__ ich in der Fachzeitschrift gelesen habe, bewerbe ich mich hiermit als Projektleiterin.

Nach meinem Studium __(22)__ ich fünf Jahre in einem mittelständischen Betrieb tätig, zuletzt als stellvertretende Abteilungsleiterin.

__(23)__ meiner Elternzeit habe ich mich berufsbegleitend weitergebildet, __(24)__ den Anschluss nicht zu verlieren.

Besonders reizt mich an der Stelle, dass Sie internationale Projekte betreuen. __(25)__ ich mehrere Jahre in Polen gearbeitet habe, sind mir die Abläufe vertraut.

Meine Kenntnisse in der Budgetplanung __(26)__ ich gern in Ihrem Team einbringen. __(27)__ Bedarf kann ich auch kurzfristig nach Hamburg reisen.

Über eine Einladung zu einem Gespräch __(28)__ ich mich sehr. Für Rückfragen stehe ich Ihnen __(29)__ zur Verfügung.

Mit freundlichen __(30)__
Melanie Ruf`,
          },
          items: [
            {
              id: "b2e-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "Auf Ihre Stellenanzeige, __(21)__ ich gelesen habe, …",
              options: [
                { key: "a", label: "die" },
                { key: "b", label: "der" },
                { key: "c", label: "deren" },
              ],
              correct: "a",
              explanation: "„die Anzeige“ ayol rodi, Akkusativ: die.",
            },
            {
              id: "b2e-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "Nach meinem Studium __(22)__ ich fünf Jahre tätig.",
              options: [
                { key: "a", label: "war" },
                { key: "b", label: "wurde" },
                { key: "c", label: "hatte" },
              ],
              correct: "a",
              explanation: "„tätig sein“ — o‘tgan zamon: war.",
            },
            {
              id: "b2e-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "__(23)__ meiner Elternzeit habe ich mich weitergebildet.",
              options: [
                { key: "a", label: "Während" },
                { key: "b", label: "Bevor" },
                { key: "c", label: "Seitdem" },
              ],
              correct: "a",
              explanation: "„während + Genitiv“ — davomida; b va c bog‘lovchi.",
            },
            {
              id: "b2e-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(24)__ den Anschluss nicht zu verlieren.",
              options: [
                { key: "a", label: "um" },
                { key: "b", label: "damit" },
                { key: "c", label: "statt" },
              ],
              correct: "a",
              explanation: "Ega bir xil — „um … zu“ ishlatiladi.",
            },
            {
              id: "b2e-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "__(25)__ ich mehrere Jahre in Polen gearbeitet habe, …",
              options: [
                { key: "a", label: "Da" },
                { key: "b", label: "Obwohl" },
                { key: "c", label: "Indem" },
              ],
              correct: "a",
              explanation: "Sabab, rasmiy uslub — „Da …“.",
            },
            {
              id: "b2e-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "Meine Kenntnisse __(26)__ ich gern einbringen.",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "wäre" },
                { key: "c", label: "hätte" },
              ],
              correct: "a",
              explanation: "„würde … einbringen“ — muloyim istak.",
            },
            {
              id: "b2e-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "__(27)__ Bedarf kann ich kurzfristig reisen.",
              options: [
                { key: "a", label: "Bei" },
                { key: "b", label: "Für" },
                { key: "c", label: "Auf" },
              ],
              correct: "a",
              explanation: "„bei Bedarf“ — zarurat bo‘lganda.",
            },
            {
              id: "b2e-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Über eine Einladung __(28)__ ich mich sehr.",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "werde" },
                { key: "c", label: "hätte" },
              ],
              correct: "a",
              explanation: "„Ich würde mich freuen“ — xat oxiridagi standart ibora.",
            },
            {
              id: "b2e-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Für Rückfragen stehe ich Ihnen __(29)__ zur Verfügung.",
              options: [
                { key: "a", label: "gern" },
                { key: "b", label: "sehr" },
                { key: "c", label: "viel" },
              ],
              correct: "a",
              explanation: "„gern zur Verfügung stehen“ — barqaror birikma.",
            },
            {
              id: "b2e-sb-030",
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
        { key: "a", label: "Aufwand" },
        { key: "b", label: "ausgewertet" },
        { key: "c", label: "Beteiligung" },
        { key: "d", label: "durchgeführt" },
        { key: "e", label: "Ergebnisse" },
        { key: "f", label: "erhoben" },
        { key: "g", label: "Fragebogen" },
        { key: "h", label: "gewährleistet" },
        { key: "i", label: "Hinweise" },
        { key: "j", label: "hinsichtlich" },
        { key: "k", label: "Rahmen" },
        { key: "l", label: "Rückschlüsse" },
        { key: "m", label: "teilzunehmen" },
        { key: "n", label: "Umfrage" },
        { key: "o", label: "vorliegen" },
      ],
      blocks: [
        {
          id: "b2e-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Ankündigung einer Mitarbeiterbefragung",
            body: `Liebe Kolleginnen und Kollegen,

im __(31)__ unseres Gesundheitsprogramms führen wir im Mai eine __(32)__ durch.

Der __(33)__ umfasst 24 Fragen und ist in etwa zwölf Minuten zu beantworten. Wir bitten alle Beschäftigten, daran __(34)__.

Die Daten werden anonym __(35)__; __(36)__ auf einzelne Personen sind ausgeschlossen. Die Anonymität wird durch ein externes Institut __(37)__.

Ausgewertet werden die Antworten nur __(38)__ ganzer Abteilungen ab zehn Personen. Die __(39)__ stellen wir im Juli in einer Betriebsversammlung vor.

Wir hoffen auf eine hohe __(40)__ — je mehr Antworten vorliegen, desto belastbarer sind die Schlüsse.

Ihre Personalabteilung`,
          },
          items: [
            {
              id: "b2e-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Im __(31)__ unseres Gesundheitsprogramms …",
              correct: "k",
              explanation: "„im Rahmen von“ — doirasida.",
            },
            {
              id: "b2e-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… führen wir im Mai eine __(32)__ durch.",
              correct: "n",
              explanation: "„eine Umfrage durchführen“ — so‘rov o‘tkazmoq.",
            },
            {
              id: "b2e-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Der __(33)__ umfasst 24 Fragen.",
              correct: "g",
              explanation: "„Fragebogen“ — so‘rovnoma.",
            },
            {
              id: "b2e-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wir bitten alle Beschäftigten, daran __(34)__.",
              correct: "m",
              explanation: "„daran teilzunehmen“ — infinitiv zu bilan.",
            },
            {
              id: "b2e-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Daten werden anonym __(35)__.",
              correct: "f",
              explanation: "„Daten erheben“ passivda — to‘planadi.",
            },
            {
              id: "b2e-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(36)__ auf einzelne Personen sind ausgeschlossen.",
              correct: "l",
              explanation: "„Rückschlüsse auf …“ — xulosa chiqarish imkoni.",
            },
            {
              id: "b2e-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Anonymität wird durch ein externes Institut __(37)__.",
              correct: "h",
              explanation: "„gewährleisten“ — kafolatlamoq.",
            },
            {
              id: "b2e-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Ausgewertet werden die Antworten nur __(38)__ ganzer Abteilungen.",
              correct: "j",
              explanation: "„hinsichtlich + Genitiv“ — nuqtai nazaridan.",
            },
            {
              id: "b2e-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(39)__ stellen wir im Juli vor.",
              correct: "e",
              explanation: "„Ergebnisse“ — natijalar.",
            },
            {
              id: "b2e-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wir hoffen auf eine hohe __(40)__.",
              correct: "c",
              explanation: "„Beteiligung“ — ishtirok darajasi.",
            },
          ],
        },
      ],
    },
  ],
};
