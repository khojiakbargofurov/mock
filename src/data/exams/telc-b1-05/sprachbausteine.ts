import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 05 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
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
          id: "b1e-sb1-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail an eine Nachbarin",
            body: `Liebe Frau Weber,

vielen Dank, dass Sie letzte Woche das Paket für mich angenommen haben. Das war sehr nett __(21)__ Ihnen.

Ich möchte Sie heute um einen Gefallen bitten: Wir fahren __(22)__ Freitag für zehn Tage nach Usbekistan.

__(23)__ dieser Zeit blühen unsere Pflanzen auf dem Balkon. Könnten Sie sie vielleicht __(24)__ zweiten Tag gießen?

Den Schlüssel gebe ich Ihnen am Donnerstag, __(25)__ Sie zu Hause sind. Sagen Sie mir bitte, wann es Ihnen passt.

Falls etwas ist, __(26)__ Sie mich jederzeit anrufen. Meine Nummer haben Sie ja.

__(27)__ wir zurückkommen, bringen wir Ihnen etwas mit. Meine Frau macht getrocknete Früchte, __(28)__ es hier nicht gibt.

Wenn es Ihnen zu viel __(29)__, sagen Sie es ruhig — ich frage dann jemand anderen.

Herzliche __(30)__
Anvar Salimov`,
          },
          items: [
            {
              id: "b1e-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "Das war sehr nett __(21)__ Ihnen.",
              options: [
                { key: "a", label: "von" },
                { key: "b", label: "für" },
                { key: "c", label: "bei" },
              ],
              correct: "a",
              explanation: "„Das ist nett von dir/Ihnen“ — barqaror birikma.",
            },
            {
              id: "b1e-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "Wir fahren __(22)__ Freitag für zehn Tage weg.",
              options: [
                { key: "a", label: "am" },
                { key: "b", label: "im" },
                { key: "c", label: "um" },
              ],
              correct: "a",
              explanation: "Hafta kunlari bilan „am“: am Freitag.",
            },
            {
              id: "b1e-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "__(23)__ dieser Zeit blühen unsere Pflanzen.",
              options: [
                { key: "a", label: "In" },
                { key: "b", label: "Seit" },
                { key: "c", label: "Vor" },
              ],
              correct: "a",
              explanation: "„in dieser Zeit“ — shu davrda.",
            },
            {
              id: "b1e-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "Könnten Sie sie __(24)__ zweiten Tag gießen?",
              options: [
                { key: "a", label: "jeden" },
                { key: "b", label: "jedem" },
                { key: "c", label: "jeder" },
              ],
              correct: "a",
              explanation: "Vaqt ifodasi Akkusativda: „jeden zweiten Tag“.",
            },
            {
              id: "b1e-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Den Schlüssel gebe ich Ihnen, __(25)__ Sie zu Hause sind.",
              options: [
                { key: "a", label: "wenn" },
                { key: "b", label: "ob" },
                { key: "c", label: "damit" },
              ],
              correct: "a",
              explanation: "Shart/vaqt ma’nosi — „wenn“.",
            },
            {
              id: "b1e-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt: "Falls etwas ist, __(26)__ Sie mich jederzeit anrufen.",
              options: [
                { key: "a", label: "können" },
                { key: "b", label: "kann" },
                { key: "c", label: "konnten" },
              ],
              correct: "a",
              explanation: "„Sie“ uchun ko‘plik shakli: können.",
            },
            {
              id: "b1e-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "__(27)__ wir zurückkommen, bringen wir Ihnen etwas mit.",
              options: [
                { key: "a", label: "Wenn" },
                { key: "b", label: "Als" },
                { key: "c", label: "Bis" },
              ],
              correct: "a",
              explanation:
                "Kelasi zamondagi takrorlanuvchi/shartli holat — „wenn“; „als“ o‘tmishdagi bir marta uchun.",
            },
            {
              id: "b1e-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "… getrocknete Früchte, __(28)__ es hier nicht gibt.",
              options: [
                { key: "a", label: "die" },
                { key: "b", label: "das" },
                { key: "c", label: "denen" },
              ],
              correct: "a",
              explanation: "Ko‘plik Akkusativ nisbiy olmoshi: die.",
            },
            {
              id: "b1e-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt: "Wenn es Ihnen zu viel __(29)__, sagen Sie es ruhig.",
              options: [
                { key: "a", label: "ist" },
                { key: "b", label: "sind" },
                { key: "c", label: "hat" },
              ],
              correct: "a",
              explanation: "Ega „es“ — birlik: ist.",
            },
            {
              id: "b1e-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "Herzliche __(30)__",
              options: [
                { key: "a", label: "Grüße" },
                { key: "b", label: "Grüßen" },
                { key: "c", label: "Gruß" },
              ],
              correct: "a",
              explanation: "„Herzliche Grüße“ — predlogsiz Nominativ ko‘plik.",
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
        { key: "a", label: "abgeholt" },
        { key: "b", label: "Anmeldung" },
        { key: "c", label: "Aufsicht" },
        { key: "d", label: "beginnt" },
        { key: "e", label: "Bescheid" },
        { key: "f", label: "bringen" },
        { key: "g", label: "dauert" },
        { key: "h", label: "erlaubt" },
        { key: "i", label: "Gruppe" },
        { key: "j", label: "kostet" },
        { key: "k", label: "nehmen" },
        { key: "l", label: "Rücksicht" },
        { key: "m", label: "sorgen" },
        { key: "n", label: "Treffpunkt" },
        { key: "o", label: "Verpflegung" },
      ],
      blocks: [
        {
          id: "b1e-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Elternbrief: Ferienfahrt",
            body: `Liebe Eltern,

vom 12. bis 16. Juli findet unsere Ferienfahrt an die Ostsee statt. Die Fahrt __(31)__ am Montag um 8 Uhr; __(32)__ ist der Schulhof.

Die Fahrt __(33)__ etwa vier Stunden. Für __(34)__ ist unterwegs gesorgt: Es gibt belegte Brötchen und Getränke.

Die Teilnahme __(35)__ 210 Euro. Darin enthalten sind Bus, Unterkunft und alle Mahlzeiten.

Bitte __(36)__ Sie Ihrem Kind feste Schuhe, Regenkleidung und eine Krankenversichertenkarte mit.

Die __(37)__ am Strand übernehmen vier Betreuerinnen und ein Rettungsschwimmer. Baden ist nur in ihrer Gegenwart __(38)__.

Die __(39)__ ist bis zum 30. Mai möglich. Wenn Ihr Kind nicht mitfahren kann, geben Sie uns bitte rechtzeitig __(40)__.

Mit freundlichen Grüßen
Das Klassenteam`,
          },
          items: [
            {
              id: "b1e-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Fahrt __(31)__ am Montag um 8 Uhr.",
              correct: "d",
              explanation: "„beginnen“ — boshlanmoq; birlik: beginnt.",
            },
            {
              id: "b1e-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(32)__ ist der Schulhof.",
              correct: "n",
              explanation: "„Treffpunkt“ — uchrashuv joyi.",
            },
            {
              id: "b1e-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Fahrt __(33)__ etwa vier Stunden.",
              correct: "g",
              explanation: "„dauern“ — davom etmoq.",
            },
            {
              id: "b1e-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für __(34)__ ist unterwegs gesorgt.",
              correct: "o",
              explanation: "„Verpflegung“ — ovqatlanish ta’minoti.",
            },
            {
              id: "b1e-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Teilnahme __(35)__ 210 Euro.",
              correct: "j",
              explanation: "„kosten“ — turmoq.",
            },
            {
              id: "b1e-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte __(36)__ Sie Ihrem Kind feste Schuhe … mit.",
              correct: "f",
              explanation: "„mitbringen“ — ajraladigan fe’l: bringen … mit.",
            },
            {
              id: "b1e-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(37)__ am Strand übernehmen vier Betreuerinnen.",
              correct: "c",
              explanation: "„Aufsicht“ — nazorat, qarab turish.",
            },
            {
              id: "b1e-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Baden ist nur in ihrer Gegenwart __(38)__.",
              correct: "h",
              explanation: "„erlaubt sein“ — ruxsat etilgan.",
            },
            {
              id: "b1e-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(39)__ ist bis zum 30. Mai möglich.",
              correct: "b",
              explanation: "„Anmeldung“ — ro‘yxatdan o‘tish.",
            },
            {
              id: "b1e-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… geben Sie uns bitte rechtzeitig __(40)__.",
              correct: "e",
              explanation: "„Bescheid geben“ — xabar bermoq.",
            },
          ],
        },
      ],
    },
  ],
};
