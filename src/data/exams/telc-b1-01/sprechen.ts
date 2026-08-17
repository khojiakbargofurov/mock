import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Mündliche Prüfung — 3 Teil, 75 ball (har biri 25).
 * Rasmiy imtihon juftlikda, 20 daqiqa tayyorgarlik bilan.
 * Ilovada hamkorning gaplari TTS orqali o'qiladi.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihre Gesprächspartnerin noch nicht. Stellen Sie sich vor und stellen Sie ihr Fragen.",
      hint: "Bu qism qisqa (2–3 daqiqa): o‘zingiz haqingizda gapiring va hamkoringizdan so‘rang.",
      blocks: [
        {
          id: "b1sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "female",
                text: "Guten Tag. Ich heiße Marta Nowak und komme aus Polen. Seit drei Jahren wohne ich in Hannover und arbeite dort als Krankenpflegerin. Und Sie? Was machen Sie beruflich?",
              },
              {
                voice: "female",
                text: "Und warum lernen Sie Deutsch? Brauchen Sie die Sprache für die Arbeit?",
              },
            ],
          },
          items: [
            {
              id: "b1-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf / Studium" },
                { key: "familie", label: "Familie, Freizeit" },
                { key: "deutsch", label: "Warum Deutsch?" },
                { key: "frage", label: "Fragen an die Partnerin" },
              ],
              sample: `Guten Tag, Frau Nowak. Mein Name ist Timur Rasulov, ich komme aus Usbekistan und lebe seit zwei Jahren in Bremen. Ich bin gelernter Elektriker und arbeite bei einer Firma für Solaranlagen.

Ich bin verheiratet und habe eine kleine Tochter. In meiner Freizeit spiele ich Fußball und gehe gern schwimmen.

Deutsch lerne ich vor allem für die Arbeit: Ich möchte mich als Techniker weiterbilden, und dafür brauche ich das Zertifikat B1. Außerdem möchte ich mich besser mit meinen Nachbarn unterhalten können.

Darf ich Sie auch etwas fragen? Wie lange arbeiten Sie schon als Krankenpflegerin? Und was gefällt Ihnen an Hannover am besten?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "O‘zingiz haqingizda barcha nuqtalar bo‘yicha gapirdingizmi va hamkorga kamida ikkita savol berdingizmi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question:
                    "Turli gap tuzilishlari va bog‘lovchilar („seit“, „vor allem“, „außerdem“) ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question:
                    "Fe’l shakllari, kelishiklar va so‘z tartibi asosan to‘g‘rimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Talaffuz",
                  question: "Tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 3,
                },
              ],
              explanation:
                "telc B1 Teil 1 da suhbat boshlash muhim: faqat o‘zingiz haqingizda gapirib qolmang, hamkoringizga ham savol bering.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Gespräch über ein Thema. Lesen Sie den kurzen Text. Berichten Sie über Ihre Erfahrungen, sagen Sie Ihre Meinung und reagieren Sie auf Ihre Partnerin.",
      hint: "Faqat matnni takrorlamang — o‘z tajribangiz va fikringizni ayting.",
      blocks: [
        {
          id: "b1sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Immer mehr Menschen arbeiten oder lernen von zu Hause aus. Eine Umfrage zeigt: 62 Prozent finden, dass sie zu Hause konzentrierter arbeiten. Gleichzeitig sagt fast die Hälfte, dass ihnen der Kontakt zu Kolleginnen und Kollegen fehlt und dass Arbeit und Privatleben schwerer zu trennen sind.`,
          },
          items: [
            {
              id: "b1-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "erfahrung", label: "Ihre Erfahrung" },
                { key: "vorteile", label: "Vorteile" },
                { key: "nachteile", label: "Nachteile" },
                { key: "meinung", label: "Ihre Meinung" },
                { key: "heimat", label: "Wie ist es in Ihrem Heimatland?" },
              ],
              sample: `In meinem Heimatland Usbekistan war Arbeiten von zu Hause früher fast unbekannt, aber während der Pandemie hat sich das geändert. Meine Schwester unterrichtet heute zweimal pro Woche online.

Ich selbst habe drei Monate im Homeoffice gearbeitet. Der größte Vorteil war für mich die Zeit: Ich habe jeden Tag zwei Stunden Fahrt gespart und konnte meine Tochter in den Kindergarten bringen.

Es gibt aber auch Nachteile. Mir hat der Kontakt zu den Kollegen gefehlt, und am Anfang habe ich viel zu lange gearbeitet, weil der Laptop immer auf dem Tisch stand.

Meiner Meinung nach ist eine Mischung am besten: zwei Tage zu Hause und drei Tage im Büro. So bleibt man in Kontakt, hat aber trotzdem Ruhe für schwierige Aufgaben.

Was denken Sie darüber? Könnten Sie in Ihrem Beruf überhaupt von zu Hause arbeiten?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Tajriba, ijobiy va salbiy tomonlar hamda o‘z fikringiz — hammasi bormi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question:
                    "Fikr bildirish iboralari („Meiner Meinung nach“, „Ich finde, dass …“) va misollar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question:
                    "O‘tgan zamon va ergash gaplar to‘g‘ri tuzildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Muloqot",
                  question:
                    "Hamkoringizga savol berib, suhbatni davom ettirdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Teil 2 monolog emas, suhbat: matn — faqat turtki. Baholovchi sizning tajribangiz va fikringizni eshitishni kutadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihre Kollegin Frau Demir verlässt die Firma. Planen Sie zusammen mit Ihrer Partnerin die Abschiedsfeier.",
      hint: "Taklif kiriting, hamkorning taklifini qabul qiling yoki asosli rad eting va oxirida kelishuvni yakunlang.",
      blocks: [
        {
          id: "b1sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde die Feier gern am Freitagnachmittag im Büro machen. Ein Restaurant ist mir zu teuer.",
              },
              {
                voice: "female",
                text: "Und als Geschenk schlage ich einen Blumenstrauß vor. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b1-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "termin", label: "🗓 Wann? (Tag, Uhrzeit)" },
                { key: "ort", label: "📍 Wo? (Büro, Restaurant, Park)" },
                { key: "essen", label: "🍽 Essen und Getränke" },
                { key: "geschenk", label: "🎁 Geschenk" },
                { key: "gaeste", label: "👥 Wer wird eingeladen?" },
              ],
              sample: `Freitagnachmittag finde ich gut, aber im Büro ist es vielleicht etwas eng. Wie wäre es, wenn wir uns um 17 Uhr im Park neben der Firma treffen? Wenn es regnet, können wir immer noch ins Büro gehen.

Beim Essen schlage ich vor, dass jeder etwas mitbringt — dann wird es nicht teuer. Ich könnte Plov kochen, das reicht für zehn Personen.

Ein Blumenstrauß ist schön, aber er hält nur eine Woche. Vielleicht könnten wir zusätzlich einen Gutschein für ein Fotostudio kaufen? Frau Demir fotografiert doch so gern. Wenn jeder zehn Euro gibt, kommen wir gut hin.

Einladen würde ich das ganze Team und auch Herrn Krause, er hat lange mit ihr zusammengearbeitet.

Also: Freitag, 17 Uhr im Park, jeder bringt etwas mit, und wir kaufen Blumen und einen Gutschein. Sind Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (vaqt, joy, ovqat, sovg‘a, mehmonlar) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning ikkala taklifiga munosabat bildirdingizmi (rozilik yoki muqobil taklif)?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Taklif va kelishuv iboralari („Wie wäre es, wenn …“, „Ich schlage vor …“, „Einverstanden“) ishlatildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni umumlashtirib tasdiqladingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Teil 3 da eng ko‘p ball muzokaraga beriladi: o‘z taklifingizni asoslang va hamkoringiznikiga aniq javob bering.",
            },
          ],
        },
      ],
    },
  ],
};
