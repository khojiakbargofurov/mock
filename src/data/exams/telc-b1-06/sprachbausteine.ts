import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 06 · Sprachbausteine — 2 Teil, 20 element, 30 ball. */
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
          id: "b1f-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an eine Abendschule",
            body: `Sehr geehrte Damen und Herren,

im Internet habe ich gelesen, dass man bei Ihnen den Realschulabschluss __(21)__ kann.

Ich bin 34 Jahre alt und arbeite in Vollzeit. __(22)__ meiner Arbeitszeit kann ich nur abends und samstags lernen.

Ich habe die Schule damals nach der neunten Klasse verlassen, __(23)__ meine Familie Geld brauchte. Jetzt möchte ich den Abschluss nachholen, __(24)__ ich mich später weiterbilden kann.

Könnten Sie mir bitte sagen, __(25)__ der nächste Kurs beginnt? Und wie lange __(26)__ die Ausbildung insgesamt?

Außerdem interessiert mich, ob es eine Prüfung am Anfang gibt. Falls ja, __(27)__ ich mich gern darauf vorbereiten.

Über eine kurze Antwort __(28)__ ich mich sehr. __(29)__ Rückfragen erreichen Sie mich am besten abends.

Mit freundlichen __(30)__
Kerim Aslan`,
          },
          items: [
            {
              id: "b1f-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… dass man den Realschulabschluss __(21)__ kann.",
              options: [
                { key: "a", label: "nachholen" },
                { key: "b", label: "nachgeholt" },
                { key: "c", label: "nachholt" },
              ],
              correct: "a",
              explanation: "„kann“ modal fe’li — infinitiv keladi.",
            },
            {
              id: "b1f-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "__(22)__ meiner Arbeitszeit kann ich nur abends lernen.",
              options: [
                { key: "a", label: "Wegen" },
                { key: "b", label: "Weil" },
                { key: "c", label: "Obwohl" },
              ],
              correct: "a",
              explanation: "„wegen + Genitiv“ — predlog; b va c bog‘lovchi.",
            },
            {
              id: "b1f-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(23)__ meine Familie Geld brauchte.",
              options: [
                { key: "a", label: "weil" },
                { key: "b", label: "denn" },
                { key: "c", label: "deshalb" },
              ],
              correct: "a",
              explanation: "Fe’l gap oxirida („brauchte“) — „weil“.",
            },
            {
              id: "b1f-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(24)__ ich mich später weiterbilden kann.",
              options: [
                { key: "a", label: "damit" },
                { key: "b", label: "um" },
                { key: "c", label: "als" },
              ],
              correct: "a",
              explanation: "Maqsad va „kann“ bor — „damit“ ishlatiladi.",
            },
            {
              id: "b1f-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Könnten Sie mir sagen, __(25)__ der nächste Kurs beginnt?",
              options: [
                { key: "a", label: "wann" },
                { key: "b", label: "ob" },
                { key: "c", label: "dass" },
              ],
              correct: "a",
              explanation: "Vaqt haqidagi bilvosita savol — „wann“.",
            },
            {
              id: "b1f-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "Und wie lange __(26)__ die Ausbildung insgesamt?",
              options: [
                { key: "a", label: "dauert" },
                { key: "b", label: "dauern" },
                { key: "c", label: "gedauert" },
              ],
              correct: "a",
              explanation: "Ega birlikda („die Ausbildung“) — dauert.",
            },
            {
              id: "b1f-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Falls ja, __(27)__ ich mich gern darauf vorbereiten.",
              options: [
                { key: "a", label: "würde" },
                { key: "b", label: "wäre" },
                { key: "c", label: "hätte" },
              ],
              correct: "a",
              explanation: "„würde … vorbereiten“ — muloyim istak.",
            },
            {
              id: "b1f-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "Über eine kurze Antwort __(28)__ ich mich sehr.",
              options: [
                { key: "a", label: "freue" },
                { key: "b", label: "freut" },
                { key: "c", label: "gefreut" },
              ],
              correct: "a",
              explanation: "„ich“ uchun shakl: freue mich.",
            },
            {
              id: "b1f-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "__(29)__ Rückfragen erreichen Sie mich abends.",
              options: [
                { key: "a", label: "Bei" },
                { key: "b", label: "Für" },
                { key: "c", label: "Mit" },
              ],
              correct: "a",
              explanation: "„Bei Rückfragen …“ — standart ibora.",
            },
            {
              id: "b1f-sb-030",
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
        { key: "a", label: "abgegeben" },
        { key: "b", label: "Angebot" },
        { key: "c", label: "beachten" },
        { key: "d", label: "Bedingung" },
        { key: "e", label: "besteht" },
        { key: "f", label: "erhalten" },
        { key: "g", label: "Ermäßigung" },
        { key: "h", label: "gilt" },
        { key: "i", label: "Gruppen" },
        { key: "j", label: "melden" },
        { key: "k", label: "Nachweis" },
        { key: "l", label: "Preise" },
        { key: "m", label: "reservieren" },
        { key: "n", label: "Teilnahme" },
        { key: "o", label: "Zeitraum" },
      ],
      blocks: [
        {
          id: "b1f-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Information: Museumsbesuch",
            body: `Liebe Besucherinnen und Besucher,

unser neues __(31)__ für Schulklassen und Vereine startet im Oktober.

Für __(32)__ ab zehn Personen bieten wir Führungen an. Die __(33)__ kostet 4 Euro pro Person; für Schülerinnen und Schüler gibt es eine __(34)__ von 50 Prozent.

__(35)__ ist, dass Sie mindestens zwei Wochen vorher einen Termin __(36)__. Kurzfristige Anfragen können wir leider nicht berücksichtigen.

Bitte __(37)__ Sie: Taschen und Jacken müssen an der Garderobe __(38)__ werden.

Für die Ermäßigung brauchen wir einen __(39)__ — bei Schulklassen genügt ein Schreiben der Schule.

Wenn sich die Personenzahl ändert, __(40)__ Sie sich bitte rechtzeitig bei uns.

Ihr Museumsteam`,
          },
          items: [
            {
              id: "b1f-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Unser neues __(31)__ für Schulklassen startet im Oktober.",
              correct: "b",
              explanation: "„Angebot“ — taklif, dastur.",
            },
            {
              id: "b1f-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für __(32)__ ab zehn Personen bieten wir Führungen an.",
              correct: "i",
              explanation: "„Gruppen“ — guruhlar.",
            },
            {
              id: "b1f-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(33)__ kostet 4 Euro pro Person.",
              correct: "n",
              explanation: "„Teilnahme“ — ishtirok.",
            },
            {
              id: "b1f-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… gibt es eine __(34)__ von 50 Prozent.",
              correct: "g",
              explanation: "„Ermäßigung“ — chegirma.",
            },
            {
              id: "b1f-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(35)__ ist, dass Sie zwei Wochen vorher einen Termin …",
              correct: "d",
              explanation: "„Bedingung“ — shart.",
            },
            {
              id: "b1f-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… einen Termin __(36)__.",
              correct: "m",
              explanation: "„einen Termin reservieren“ — band qilmoq.",
            },
            {
              id: "b1f-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte __(37)__ Sie: Taschen müssen abgegeben werden.",
              correct: "c",
              explanation: "„beachten“ — e’tiborga olmoq.",
            },
            {
              id: "b1f-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Taschen und Jacken müssen an der Garderobe __(38)__ werden.",
              correct: "a",
              explanation: "„abgeben“ passivda — topshirilishi kerak.",
            },
            {
              id: "b1f-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für die Ermäßigung brauchen wir einen __(39)__.",
              correct: "k",
              explanation: "„Nachweis“ — tasdiqlovchi hujjat.",
            },
            {
              id: "b1f-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "…, __(40)__ Sie sich bitte rechtzeitig bei uns.",
              correct: "j",
              explanation: "„sich melden“ — xabar bermoq.",
            },
          ],
        },
      ],
    },
  ],
};
