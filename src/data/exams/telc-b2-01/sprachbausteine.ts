import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Sprachbausteine — 2 Teil, 20 element, 30 ball (har biri 1,5).
 * Teil 1: B2 grammatikasi — Passiv, Konjunktiv II, ergash gap bog'lovchilari,
 * Genitiv predloglar. Teil 2: rasmiy uslubdagi leksika.
 */
export const SPRACHBAUSTEINE: ExamModule = {
  id: "sprachbausteine",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21 bis 30 passt.",
      hint: "Bo‘shliqdan oldingi va keyingi gap tuzilishiga qarang — ko‘pincha fe’lning o‘rni javobni beradi.",
      blocks: [
        {
          id: "b2sb1-b1",
          stimulus: {
            kind: "text",
            title: "Geschäftliche E-Mail",
            body: `Sehr geehrter Herr Dr. Wenzel,

vielen Dank für die Übersendung der Unterlagen, __(21)__ wir gestern erhalten haben.

Nachdem unser Team die Zahlen geprüft __(22)__, möchten wir Ihnen eine erste Rückmeldung geben. Die vorgeschlagene Lösung ist fachlich überzeugend, __(23)__ sie mit erheblichen Kosten verbunden ist.

__(24)__ des engen Zeitplans schlagen wir vor, die Umsetzung in zwei Phasen zu teilen. Die Einsparungen ließen sich zusätzlich erhöhen, __(25)__ man die Bestellungen bündelt.

Sollten die Materialpreise weiter steigen, __(26)__ wir den Vertrag allerdings neu verhandeln. Die Ergebnisse der internen Prüfung __(27)__ derzeit noch ausgewertet; wir rechnen bis Freitag mit einem Zwischenstand.

Wir bitten Sie, uns die überarbeitete Fassung bis Ende des Monats zukommen __(28)__. Je genauer die Angaben sind, __(29)__ schneller können wir entscheiden.

__(30)__ Rückfragen stehe ich Ihnen selbstverständlich zur Verfügung.

Mit freundlichen Grüßen
Katrin Ahlers
Projektleitung`,
          },
          items: [
            {
              id: "b2-sb-021",
              nr: 21,
              kind: "choice",
              points: 1.5,
              prompt: "… die Unterlagen, __(21)__ wir gestern erhalten haben.",
              options: [
                { key: "a", label: "die" },
                { key: "b", label: "deren" },
                { key: "c", label: "denen" },
              ],
              correct: "a",
              explanation:
                "„erhalten“ Akkusativ talab qiladi, ko‘plik: die Unterlagen, die wir erhalten haben.",
            },
            {
              id: "b2-sb-022",
              nr: 22,
              kind: "choice",
              points: 1.5,
              prompt: "Nachdem unser Team die Zahlen geprüft __(22)__, …",
              options: [
                { key: "a", label: "hat" },
                { key: "b", label: "wird" },
                { key: "c", label: "ist" },
              ],
              correct: "a",
              explanation:
                "„prüfen“ — haben bilan: geprüft hat. Bosh gap hozirgi zamonda („möchten wir“).",
            },
            {
              id: "b2-sb-023",
              nr: 23,
              kind: "choice",
              points: 1.5,
              prompt:
                "Die Lösung ist überzeugend, __(23)__ sie mit erheblichen Kosten verbunden ist.",
              options: [
                { key: "a", label: "obwohl" },
                { key: "b", label: "weil" },
                { key: "c", label: "damit" },
              ],
              correct: "a",
              explanation:
                "Ikki fikr zid: yaxshi, lekin qimmat — „obwohl“ (garchi).",
            },
            {
              id: "b2-sb-024",
              nr: 24,
              kind: "choice",
              points: 1.5,
              prompt: "__(24)__ des engen Zeitplans schlagen wir vor, …",
              options: [
                { key: "a", label: "Aufgrund" },
                { key: "b", label: "Obwohl" },
                { key: "c", label: "Damit" },
              ],
              correct: "a",
              explanation:
                "„aufgrund + Genitiv“ — sabab bildiruvchi predlog; b va c bog‘lovchi, gap tuzilishi mos emas.",
            },
            {
              id: "b2-sb-025",
              nr: 25,
              kind: "choice",
              points: 1.5,
              prompt:
                "Die Einsparungen ließen sich erhöhen, __(25)__ man die Bestellungen bündelt.",
              options: [
                { key: "a", label: "indem" },
                { key: "b", label: "obwohl" },
                { key: "c", label: "seitdem" },
              ],
              correct: "a",
              explanation:
                "„indem“ — usul, vosita bildiradi: qanday qilib tejash mumkinligi.",
            },
            {
              id: "b2-sb-026",
              nr: 26,
              kind: "choice",
              points: 1.5,
              prompt:
                "Sollten die Materialpreise weiter steigen, __(26)__ wir den Vertrag neu verhandeln.",
              options: [
                { key: "a", label: "müssten" },
                { key: "b", label: "mussten" },
                { key: "c", label: "gemusst" },
              ],
              correct: "a",
              explanation:
                "Shart gapiga Konjunktiv II mos: müssten (ehtimoliy oqibat).",
            },
            {
              id: "b2-sb-027",
              nr: 27,
              kind: "choice",
              points: 1.5,
              prompt: "Die Ergebnisse __(27)__ derzeit noch ausgewertet.",
              options: [
                { key: "a", label: "werden" },
                { key: "b", label: "wurden" },
                { key: "c", label: "worden" },
              ],
              correct: "a",
              explanation:
                "Hozirgi zamon majhul nisbati: werden + Partizip II („derzeit“ = hozir).",
            },
            {
              id: "b2-sb-028",
              nr: 28,
              kind: "choice",
              points: 1.5,
              prompt: "…, uns die Fassung bis Ende des Monats zukommen __(28)__.",
              options: [
                { key: "a", label: "zu lassen" },
                { key: "b", label: "lassen" },
                { key: "c", label: "gelassen" },
              ],
              correct: "a",
              explanation:
                "„jemandem etwas zukommen lassen“ — „bitten“ dan keyin zu-Infinitiv: zukommen zu lassen.",
            },
            {
              id: "b2-sb-029",
              nr: 29,
              kind: "choice",
              points: 1.5,
              prompt:
                "Je genauer die Angaben sind, __(29)__ schneller können wir entscheiden.",
              options: [
                { key: "a", label: "desto" },
                { key: "b", label: "als" },
                { key: "c", label: "so" },
              ],
              correct: "a",
              explanation: "„je … desto“ — qiyosiy juftlik.",
            },
            {
              id: "b2-sb-030",
              nr: 30,
              kind: "choice",
              points: 1.5,
              prompt: "__(30)__ Rückfragen stehe ich Ihnen zur Verfügung.",
              options: [
                { key: "a", label: "Für" },
                { key: "b", label: "Bei" },
                { key: "c", label: "Über" },
              ],
              correct: "b",
              explanation:
                "„Bei Rückfragen …“ — rasmiy xatlarning odatiy iborasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie den Text und entscheiden Sie, welches Wort a bis o in die Lücken 31 bis 40 passt. Jedes Wort kann nur einmal verwendet werden. Nicht alle Wörter passen.",
      hint: "Rasmiy uslub: ko‘pincha ot + fe’l barqaror birikmasi kerak bo‘ladi.",
      bank: [
        { key: "a", label: "Verfügung" },
        { key: "b", label: "beteiligt" },
        { key: "c", label: "Nachfrage" },
        { key: "d", label: "Rahmen" },
        { key: "e", label: "angeboten" },
        { key: "f", label: "Voraussetzung" },
        { key: "g", label: "berücksichtigt" },
        { key: "h", label: "Gebühr" },
        { key: "i", label: "Anspruch" },
        { key: "j", label: "richtet" },
        { key: "k", label: "Ausnahme" },
        { key: "l", label: "zuständig" },
        { key: "m", label: "erhoben" },
        { key: "n", label: "Bestand" },
        { key: "o", label: "Umfang" },
      ],
      blocks: [
        {
          id: "b2sb2-b1",
          stimulus: {
            kind: "text",
            title: "Pressemitteilung der Stadtverwaltung",
            body: `Ab Oktober erweitert die Stadtbibliothek ihr Angebot deutlich. Im __(31)__ eines neuen Programms können Bürgerinnen und Bürger kostenlos an Kursen zur digitalen Verwaltung teilnehmen.

Das Angebot __(32)__ sich vor allem an Menschen, die beruflich mit Online-Formularen und digitalen Anträgen zu tun haben. Die Kurse werden zweimal wöchentlich __(33)__, jeweils abends sowie am Samstagvormittag.

Für die Teilnahme wird keine __(34)__ verlangt; lediglich für Arbeitsmaterialien ist ein geringer Beitrag zu zahlen. __(35)__ ist allerdings eine vorherige Anmeldung, da die Zahl der Plätze begrenzt ist.

Mehrere Unternehmen aus der Region sind an dem Projekt __(36)__: Sie stellen Referentinnen und Referenten sowie Laptops zur __(37)__.

Wer Fragen hat, wendet sich an Frau Petrova, die für das Programm __(38)__ ist. Die hohe __(39)__ der vergangenen Wochen hat die Verwaltung überrascht: Bereits vor dem Start liegen mehr als 300 Anmeldungen vor.

Wünsche der Teilnehmenden sollen bei der Planung weiterer Angebote __(40)__ werden.`,
          },
          items: [
            {
              id: "b2-sb-031",
              nr: 31,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Im __(31)__ eines neuen Programms …",
              correct: "d",
              explanation: "„im Rahmen + Genitiv“ — biror dastur doirasida.",
            },
            {
              id: "b2-sb-032",
              nr: 32,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Das Angebot __(32)__ sich vor allem an Menschen, …",
              correct: "j",
              explanation: "„sich an jemanden richten“ — kimgadir mo‘ljallangan.",
            },
            {
              id: "b2-sb-033",
              nr: 33,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die Kurse werden zweimal wöchentlich __(33)__.",
              correct: "e",
              explanation: "Majhul nisbat: „werden … angeboten“.",
            },
            {
              id: "b2-sb-034",
              nr: 34,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Für die Teilnahme wird keine __(34)__ verlangt.",
              correct: "h",
              explanation: "„eine Gebühr verlangen“ — to‘lov olinmaydi.",
            },
            {
              id: "b2-sb-035",
              nr: 35,
              kind: "zuordnung",
              points: 1.5,
              prompt: "__(35)__ ist allerdings eine vorherige Anmeldung.",
              correct: "f",
              explanation: "„Voraussetzung ist …“ — shart shu.",
            },
            {
              id: "b2-sb-036",
              nr: 36,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Mehrere Unternehmen sind an dem Projekt __(36)__.",
              correct: "b",
              explanation: "„an etwas beteiligt sein“ — ishtirok etmoq.",
            },
            {
              id: "b2-sb-037",
              nr: 37,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Sie stellen Laptops zur __(37)__.",
              correct: "a",
              explanation: "„zur Verfügung stellen“ — foydalanishga bermoq.",
            },
            {
              id: "b2-sb-038",
              nr: 38,
              kind: "zuordnung",
              points: 1.5,
              prompt: "…, die für das Programm __(38)__ ist.",
              correct: "l",
              explanation: "„für etwas zuständig sein“ — mas’ul bo‘lmoq.",
            },
            {
              id: "b2-sb-039",
              nr: 39,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Die hohe __(39)__ der vergangenen Wochen …",
              correct: "c",
              explanation: "„die Nachfrage“ — talab yuqori bo‘lgan.",
            },
            {
              id: "b2-sb-040",
              nr: 40,
              kind: "zuordnung",
              points: 1.5,
              prompt: "Wünsche sollen bei der Planung __(40)__ werden.",
              correct: "g",
              explanation: "„berücksichtigt werden“ — hisobga olinmoq.",
            },
          ],
        },
      ],
    },
  ],
};
