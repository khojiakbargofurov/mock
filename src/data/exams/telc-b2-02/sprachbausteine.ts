import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 02 · Sprachbausteine — 2 Teil, 20 element, 30 ball.
 * Teil 1: Passiv, Konjunktiv II, Partizip, Genitiv predloglar, nisbiy olmoshlar.
 * Teil 2: rasmiy uslubdagi leksika (15 so'zdan 10 tasi).
 */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      hint: "Gap tuzilishiga qarang: fe’lning o‘rni ko‘pincha bog‘lovchini aniqlaydi.",
      blocks: [
        {
          id: "b2b-sb1-b1",
          stimulus: {
            kind: "text",
            title: "Rundschreiben an die Belegschaft",
            body: `Sehr geehrte Kolleginnen und Kollegen,

wie Sie der letzten Betriebsversammlung entnehmen konnten, wird die Umstellung auf das neue Zeiterfassungssystem __(21)__ Anfang September wirksam.

Die Schulungen, __(22)__ Termine im Intranet veröffentlicht sind, finden in kleinen Gruppen statt. Wir bitten Sie, sich rechtzeitig anzumelden, __(23)__ alle einen passenden Termin erhalten.

__(24)__ der hohen Zahl von Rückfragen haben wir zusätzlich eine Sprechstunde eingerichtet. Diese __(25)__ jeden Mittwoch von 13 bis 15 Uhr angeboten.

Sollte es in den ersten Wochen zu Fehlbuchungen kommen, __(26)__ diese selbstverständlich korrigiert. Bitte wenden Sie sich in diesem Fall unmittelbar an die Personalabteilung, __(27)__ das Problem später schwer nachzuvollziehen ist.

Wir sind uns bewusst, dass eine Umstellung immer Aufwand bedeutet. __(28)__ wir früher informiert, hätten Sie mehr Zeit zur Vorbereitung gehabt; das Verfahren wurde jedoch erst vergangene Woche abgeschlossen.

Je zuverlässiger die Daten erfasst werden, __(29)__ einfacher wird die spätere Abrechnung.

__(30)__ weiteren Fragen steht Ihnen die Personalabteilung gern zur Verfügung.

Mit freundlichen Grüßen
Katrin Ahlers`,
          },
          items: [
            {
              id: "b2b-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… wird die Umstellung __(21)__ Anfang September wirksam.",
              options: [
                { key: "a", label: "zum" },
                { key: "b", label: "im" },
                { key: "c", label: "am" },
              ],
              correct: "a",
              explanation:
                "„zum Anfang / zum 1. September“ — muddat boshlanish nuqtasi sifatida „zu“ bilan beriladi.",
            },
            {
              id: "b2b-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt:
                "Die Schulungen, __(22)__ Termine im Intranet veröffentlicht sind, …",
              options: [
                { key: "a", label: "deren" },
                { key: "b", label: "die" },
                { key: "c", label: "denen" },
              ],
              correct: "a",
              explanation:
                "Egalik bildiruvchi nisbiy olmosh, ko‘plik Genitiv: die Schulungen, deren Termine …",
            },
            {
              id: "b2b-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt: "…, __(23)__ alle einen passenden Termin erhalten.",
              options: [
                { key: "a", label: "damit" },
                { key: "b", label: "um" },
                { key: "c", label: "obwohl" },
              ],
              correct: "a",
              explanation:
                "Maqsad va ega o‘zgaradi („wir“ → „alle“) — „damit“ kerak.",
            },
            {
              id: "b2b-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "__(24)__ der hohen Zahl von Rückfragen …",
              options: [
                { key: "a", label: "Angesichts" },
                { key: "b", label: "Trotzdem" },
                { key: "c", label: "Nachdem" },
              ],
              correct: "a",
              explanation:
                "„angesichts + Genitiv“ — rasmiy uslubda sabab/vaziyat bildiradi.",
            },
            {
              id: "b2b-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt: "Diese __(25)__ jeden Mittwoch von 13 bis 15 Uhr angeboten.",
              options: [
                { key: "a", label: "wird" },
                { key: "b", label: "hat" },
                { key: "c", label: "ist" },
              ],
              correct: "a",
              explanation:
                "Passiv hozirgi zamon: „wird … angeboten“. Ega („Diese“ = die Sprechstunde) birlikda.",
            },
            {
              id: "b2b-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt:
                "Sollte es zu Fehlbuchungen kommen, __(26)__ diese selbstverständlich korrigiert.",
              options: [
                { key: "a", label: "werden" },
                { key: "b", label: "wurden" },
                { key: "c", label: "worden" },
              ],
              correct: "a",
              explanation:
                "Kelasi holat uchun passiv: „werden diese korrigiert“ (ko‘plik).",
            },
            {
              id: "b2b-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt:
                "… wenden Sie sich unmittelbar an die Personalabteilung, __(27)__ das Problem später schwer nachzuvollziehen ist.",
              options: [
                { key: "a", label: "da" },
                { key: "b", label: "damit" },
                { key: "c", label: "indem" },
              ],
              correct: "a",
              explanation:
                "Sabab bildiriladi — rasmiy uslubda „da“ (= weil).",
            },
            {
              id: "b2b-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt:
                "__(28)__ wir früher informiert, hätten Sie mehr Zeit gehabt.",
              options: [
                { key: "a", label: "Hätten" },
                { key: "b", label: "Wenn" },
                { key: "c", label: "Würden" },
              ],
              correct: "a",
              explanation:
                "Bog‘lovchisiz shart gap: fe’l boshda — „Hätten wir früher informiert, …“ (= Wenn wir früher informiert hätten).",
            },
            {
              id: "b2b-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt:
                "Je zuverlässiger die Daten erfasst werden, __(29)__ einfacher wird die Abrechnung.",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "als" },
                { key: "c", label: "so" },
              ],
              correct: "a",
              explanation: "„je … desto“ — qiyosiy juft bog‘lovchi.",
            },
            {
              id: "b2b-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ weiteren Fragen steht Ihnen die Abteilung zur Verfügung.",
              options: [
                { key: "a", label: "Bei" },
                { key: "b", label: "Für" },
                { key: "c", label: "Mit" },
              ],
              correct: "a",
              explanation:
                "„Bei Fragen stehen wir zur Verfügung“ — xat oxiridagi barqaror ibora.",
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
      hint: "Rasmiy uslub: „in Anspruch nehmen“, „zur Verfügung stehen“ kabi barqaror birikmalarni eslang.",
      bank: [
        { key: "a", label: "Anspruch" },
        { key: "b", label: "beantragen" },
        { key: "c", label: "Bescheid" },
        { key: "d", label: "eingereicht" },
        { key: "e", label: "entstehen" },
        { key: "f", label: "Frist" },
        { key: "g", label: "gewährt" },
        { key: "h", label: "Höhe" },
        { key: "i", label: "Nachweis" },
        { key: "j", label: "richtet" },
        { key: "k", label: "Träger" },
        { key: "l", label: "übernimmt" },
        { key: "m", label: "Verfügung" },
        { key: "n", label: "verlängert" },
        { key: "o", label: "Voraussetzung" },
      ],
      blocks: [
        {
          id: "b2b-sb2-b1",
          stimulus: {
            kind: "text",
            title: "Merkblatt zur Weiterbildungsförderung",
            body: `Beschäftigte, die sich beruflich weiterqualifizieren möchten, können unter bestimmten Bedingungen eine finanzielle Förderung __(31)__.

Grundsätzliche __(32)__ ist ein bestehendes Arbeitsverhältnis von mindestens sechs Monaten. Wer diese Bedingung erfüllt, hat unter Umständen einen __(33)__ auf eine Förderung von bis zu 50 Prozent der Kursgebühr.

Die __(34)__ der Förderung richtet sich nach dem Einkommen und nach der Dauer der Maßnahme. Den verbleibenden Anteil __(35)__ in vielen Fällen der Arbeitgeber, sofern die Weiterbildung im betrieblichen Interesse liegt.

Dem Antrag ist ein __(36)__ über die Anmeldung beim Bildungsanbieter beizufügen. Anträge, die unvollständig __(37)__ werden, können nicht bearbeitet werden.

Bitte beachten Sie die __(38)__: Der Antrag muss spätestens vier Wochen vor Kursbeginn vorliegen. In begründeten Ausnahmefällen wird sie auf Antrag __(39)__.

Nach der Prüfung erhalten Sie einen schriftlichen __(40)__. Bei Rückfragen stehen Ihnen unsere Beraterinnen und Berater zur Verfügung.`,
          },
          items: [
            {
              id: "b2b-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… können eine finanzielle Förderung __(31)__.",
              correct: "b",
              explanation:
                "„eine Förderung beantragen“ — rasmiy ariza bermoq.",
            },
            {
              id: "b2b-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Grundsätzliche __(32)__ ist ein bestehendes Arbeitsverhältnis.",
              correct: "o",
              explanation: "„Voraussetzung“ — shart, talab.",
            },
            {
              id: "b2b-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "… hat unter Umständen einen __(33)__ auf eine Förderung.",
              correct: "a",
              explanation: "„Anspruch auf etwas haben“ — huquqqa ega bo‘lmoq.",
            },
            {
              id: "b2b-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die __(34)__ der Förderung richtet sich nach dem Einkommen.",
              correct: "h",
              explanation: "„die Höhe der Förderung“ — miqdori.",
            },
            {
              id: "b2b-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Den verbleibenden Anteil __(35)__ der Arbeitgeber.",
              correct: "l",
              explanation: "„die Kosten übernehmen“ — xarajatni o‘z zimmasiga olmoq.",
            },
            {
              id: "b2b-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Dem Antrag ist ein __(36)__ über die Anmeldung beizufügen.",
              correct: "i",
              explanation: "„Nachweis“ — tasdiqlovchi hujjat.",
            },
            {
              id: "b2b-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Anträge, die unvollständig __(37)__ werden, …",
              correct: "d",
              explanation:
                "„einreichen“ passivda: eingereicht werden — topshirilmoq.",
            },
            {
              id: "b2b-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Bitte beachten Sie die __(38)__.",
              correct: "f",
              explanation: "„Frist“ — muddat, oxirgi sana.",
            },
            {
              id: "b2b-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "In begründeten Ausnahmefällen wird sie auf Antrag __(39)__.",
              correct: "n",
              explanation: "„die Frist verlängern“ — muddatni uzaytirmoq.",
            },
            {
              id: "b2b-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Nach der Prüfung erhalten Sie einen schriftlichen __(40)__.",
              correct: "c",
              explanation:
                "„Bescheid“ — idoraning rasmiy yozma qarori.",
            },
          ],
        },
      ],
    },
  ],
};
