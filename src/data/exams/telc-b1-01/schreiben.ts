import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Schriftlicher Ausdruck — 1 topshiriq, 30 daqiqa, 45 ball.
 * Yarim rasmiy xat: 4 ta Leitpunkt, hammasi yoritilishi shart.
 */
export const SCHREIBEN: ExamModule = {
  id: "schreiben",
  teile: [
    {
      nr: 1,
      taskType: "freitext",
      instruction:
        "Wählen Sie beim Schreiben eine passende Form: Sie schreiben an eine Sprachschule, also halbformell. Bearbeiten Sie alle vier Leitpunkte.",
      hint: "Har Leitpunkt uchun kamida bir-ikki gap. Kirish va yakun ham kerak — taxminan 150 so‘z.",
      blocks: [
        {
          id: "b1s-b1",
          items: [
            {
              id: "b1-s-061",
              nr: 61,
              kind: "freitext",
              points: 45,
              situation:
                "Sie haben vor zwei Monaten einen Abendkurs „Deutsch B1“ bei der Sprachschule Lingua besucht und dafür 340 Euro bezahlt. Der Kurs wurde nach der Hälfte der Termine ohne Erklärung abgebrochen, weil die Lehrerin die Schule verlassen hat. Sie schreiben an die Schulleitung, Frau Berger.",
              bullets: [
                "Warum schreiben Sie? Nennen Sie den Kurs und den Zeitraum.",
                "Beschreiben Sie, was passiert ist und wie es Ihnen damit geht.",
                "Sagen Sie, was Sie erwarten (Geld zurück oder ein neuer Kurs).",
                "Fragen Sie, bis wann Sie eine Antwort bekommen.",
              ],
              minWords: 120,
              maxWords: 200,
              sample: `Sehr geehrte Frau Berger,

ich habe von Februar bis April an Ihrem Abendkurs „Deutsch B1“ (dienstags und donnerstags) teilgenommen und dafür 340 Euro bezahlt.

Leider wurde der Kurs nach der Hälfte der Termine abgebrochen, weil unsere Lehrerin die Schule verlassen hat. Eine Erklärung oder eine Information über einen Ersatz habe ich bis heute nicht bekommen. Das ärgert mich sehr, denn ich brauche das Zertifikat für meine Bewerbung und habe fest mit diesem Kurs gerechnet.

Deshalb möchte ich Sie bitten, mir entweder die Hälfte der Kursgebühr zurückzuzahlen oder mir einen Platz in einem vergleichbaren Abendkurs ab September anzubieten. Ein Kurs am Vormittag ist für mich leider nicht möglich, weil ich bis 17 Uhr arbeite.

Könnten Sie mir bitte bis zum 30. Juni mitteilen, wie Sie die Sache regeln möchten? Für eine schnelle Antwort wäre ich Ihnen sehr dankbar.

Mit freundlichen Grüßen
Amina Yusupova`,
              criteria: [
                {
                  id: "c1",
                  label: "Mazmun · to‘rt Leitpunkt",
                  question:
                    "To‘rtala nuqta ham yoritilganmi (sabab, nima bo‘lgani, talab, javob muddati)?",
                  points: 20,
                },
                {
                  id: "c2",
                  label: "Kommunikative Gestaltung",
                  question:
                    "Matn xat shaklidami — murojaat, kirish, mantiqiy tartib, xayrlashuv va imzo bilan?",
                  points: 10,
                },
                {
                  id: "c3",
                  label: "So‘z boyligi",
                  question:
                    "Mavzuga mos so‘zlar va bog‘lovchilar („deshalb“, „denn“, „entweder … oder“) ishlatilganmi?",
                  points: 8,
                },
                {
                  id: "c4",
                  label: "Grammatika va imlo",
                  question:
                    "Gap tuzilishi, zamon va kelishiklar asosan to‘g‘rimi; xatolar tushunishga xalaqit bermaydimi?",
                  points: 7,
                },
              ],
              explanation:
                "telc B1 da xat 45 ballga baholanadi. Bitta Leitpunkt tushib qolsa, mazmun bahosi keskin tushadi — shuning uchun avval to‘rttasini rejalashtiring, keyin yozing.",
            },
          ],
        },
      ],
    },
  ],
};
