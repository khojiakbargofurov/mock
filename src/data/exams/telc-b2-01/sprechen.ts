import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Mündliche Prüfung — 3 Teil, 75 ball (har biri 25).
 * B1 dan farqi: birinchi qism taqdimot, ikkinchisi muhokama.
 * 20 daqiqa tayyorgarlik beriladi.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Präsentation. Stellen Sie Ihr Thema in etwa drei Minuten vor: Einleitung, Hauptteil mit Beispielen und ein kurzer Schluss.",
      hint: "Taqdimotni tuzilma bilan qiling: kirish → 2–3 fikr → xulosa. Har fikrga misol keltiring.",
      blocks: [
        {
          id: "b2sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Ehrenamtliche Arbeit",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Ehrenamtliche Arbeit — warum engagieren sich Menschen freiwillig?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· Was versteht man unter ehrenamtlicher Arbeit? Nennen Sie Beispiele.
· Welche Bedeutung hat das Ehrenamt in Ihrem Heimatland?
· Welche Vorteile hat es für die Gesellschaft und für die Freiwilligen selbst?
· Welche Schwierigkeiten oder Grenzen sehen Sie?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung", hint: "Ich möchte über … sprechen." },
                { key: "definition", label: "Was ist gemeint? Beispiele" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile" },
                { key: "grenzen", label: "Schwierigkeiten" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute über ehrenamtliche Arbeit sprechen, also über Tätigkeiten, für die man kein Geld bekommt: Feuerwehr, Sportvereine, Nachhilfe für Kinder oder Hilfe für ältere Nachbarn.

In Usbekistan ist das Ehrenamt im westlichen Sinne weniger organisiert, dafür ist die Nachbarschaftshilfe sehr stark. Bei einer Hochzeit oder einem Trauerfall hilft die ganze Mahalla, ohne dass jemand darum bitten muss.

Für die Gesellschaft hat das enorme Vorteile: Viele Angebote gäbe es sonst gar nicht — Sportvereine könnten ohne freiwillige Trainer kaum existieren. Die Freiwilligen selbst gewinnen ebenfalls: Kontakte, Erfahrung und oft auch Sprachpraxis. Ein Freund von mir hat sein Deutsch vor allem beim Fußballtraining verbessert, nicht im Kurs.

Es gibt allerdings Grenzen. Wer Vollzeit arbeitet und Kinder hat, findet kaum Zeit. Außerdem darf ehrenamtliche Arbeit nicht dazu führen, dass der Staat sich zurückzieht und Aufgaben abgibt, für die er verantwortlich ist.

Mein Fazit: Ehrenamt ist wertvoll, aber es ist eine Ergänzung und kein Ersatz für bezahlte Arbeit.`,
              criteria: [
                {
                  id: "c1",
                  label: "Tuzilma",
                  question:
                    "Taqdimotda aniq kirish, asosiy qism va xulosa bo‘ldimi?",
                  points: 8,
                },
                {
                  id: "c2",
                  label: "Mazmun va misollar",
                  question:
                    "Barcha nuqtalar yoritildimi va har fikrga misol keltirildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Ifoda boyligi",
                  question:
                    "B2 darajadagi bog‘lovchilar va iboralar („dafür“, „allerdings“, „im Gegensatz dazu“) ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Ravonlik va to‘g‘rilik",
                  question:
                    "Uzoq to‘xtalishlarsiz gapira oldingizmi; grammatik xatolar tushunishga xalaqit bermadimi?",
                  points: 4,
                },
              ],
              explanation:
                "telc B2 Teil 1 da tuzilma alohida baholanadi — kirish va xulosani albatta ayting.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Diskussion. Reagieren Sie auf die Fragen und Einwände Ihrer Partnerin und begründen Sie Ihre Position.",
      hint: "Fikringizni himoya qiling, lekin hamkorning dalilini ham tan oling („Das stimmt, allerdings …“).",
      blocks: [
        {
          id: "b2sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Sie haben gesagt, ehrenamtliche Arbeit sei wertvoll. Aber besteht nicht die Gefahr, dass Firmen und Behörden bezahlte Stellen streichen, weil Freiwillige die Arbeit übernehmen?",
              },
              {
                voice: "female",
                text: "Und wie soll jemand, der Vollzeit arbeitet und Kinder hat, überhaupt Zeit dafür finden? Ist das nicht ein Luxus für wenige?",
              },
            ],
          },
          items: [
            {
              id: "b2-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "zustimmen", label: "Zustimmen / einschränken" },
                { key: "argument", label: "Gegenargument" },
                { key: "beispiel", label: "Beispiel aus der Praxis" },
                { key: "nachfrage", label: "Nachfrage an die Partnerin" },
              ],
              sample: `Das ist ein berechtigter Einwand, und ich stimme Ihnen teilweise zu. Es gibt tatsächlich Bereiche, in denen Freiwillige Aufgaben übernehmen, die eigentlich bezahlt werden müssten — in der Pflege zum Beispiel.

Allerdings würde ich unterscheiden: Wenn ein Verein einen Ausflug organisiert, ersetzt das keine Arbeitsstelle. Problematisch wird es erst, wenn öffentliche Aufgaben systematisch auf Freiwillige verlagert werden. Deshalb bin ich dafür, klare Grenzen zu ziehen: Was zur Grundversorgung gehört, muss bezahlt werden.

Zum zweiten Punkt: Sie haben recht, dass Zeit ein Problem ist. Genau deshalb finde ich Modelle sinnvoll, bei denen Betriebe ihren Mitarbeitenden zwei Tage im Jahr für ehrenamtliche Arbeit freistellen. In meiner früheren Firma gab es das, und die Beteiligung war überraschend hoch.

Wie sehen Sie das — sollte der Staat solche Freistellungen vorschreiben, oder sollte das freiwillig bleiben?`,
              criteria: [
                {
                  id: "c1",
                  label: "Munosabat bildirish",
                  question:
                    "Hamkorning ikkala e’tiroziga aniq javob berdingizmi?",
                  points: 8,
                },
                {
                  id: "c2",
                  label: "Asoslash",
                  question:
                    "Fikringizni dalil va misol bilan quvvatladingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Muzokara vositalari",
                  question:
                    "Qisman rozilik va e’tiroz iboralari („Da stimme ich zu, allerdings …“) ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Suhbatni davom ettirish",
                  question: "Hamkoringizga qarshi savol berdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "B2 muhokamasida faqat „ja/nein“ emas, qisman rozilik va aniq chegara qo‘yish yuqori baholanadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Betrieb möchte einen Freiwilligentag organisieren. Planen Sie die Veranstaltung gemeinsam mit Ihrer Partnerin.",
      hint: "Taklif kiriting, muqobil variantlarni taqqoslang va oxirida aniq qaror bilan yakunlang.",
      blocks: [
        {
          id: "b2sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde den Freiwilligentag im Frühling machen, am besten an einem Freitag. Ein Samstag wäre schwierig, weil viele Kolleginnen dann keine Betreuung für ihre Kinder haben.",
              },
              {
                voice: "female",
                text: "Bei der Aufgabe schlage ich vor, dass wir den Garten eines Altenheims neu anlegen. Oder haben Sie eine bessere Idee?",
              },
            ],
          },
          items: [
            {
              id: "b2-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "termin", label: "🗓 Termin und Dauer" },
                { key: "projekt", label: "🤝 Welches Projekt?" },
                { key: "teilnahme", label: "👥 Wer nimmt teil? Freiwillig?" },
                { key: "kosten", label: "💶 Kosten und Material" },
                { key: "info", label: "📣 Wie informieren wir das Team?" },
              ],
              sample: `Ein Freitag im Frühling klingt gut, damit sind wir uns einig. Ich würde allerdings vorschlagen, den Tag auf sechs Stunden zu begrenzen — von neun bis fünfzehn Uhr —, damit auch Teilzeitkräfte mitmachen können.

Der Garten des Altenheims ist eine schöne Idee. Ich würde jedoch zwei Projekte anbieten, weil nicht alle körperlich schwer arbeiten können oder wollen. Als Alternative könnten einige Kolleginnen in der Stadtbibliothek beim digitalen Beratungsangebot helfen.

Die Teilnahme sollte auf jeden Fall freiwillig bleiben; wer nicht mitmacht, arbeitet normal weiter. Sonst entsteht Druck, und genau das wäre beim Thema Ehrenamt das falsche Signal.

Für Material — Pflanzen, Erde, Werkzeug — würde ich ein Budget von etwa 500 Euro beantragen. Die Geschäftsführung hat so etwas letztes Jahr schon bewilligt.

Informieren würde ich das Team zuerst in der Teamsitzung und danach per E-Mail mit einer Anmeldeliste. Sind wir uns einig: Freitag im April, zwei Projekte zur Auswahl, freiwillige Teilnahme, 500 Euro Budget?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (vaqt, loyiha, ishtirok, xarajat, xabar berish) kelishildimi?",
                  points: 8,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning takliflarini qabul qildingiz yoki asoslab o‘zgartirdingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Taklif, qiyoslash va kelishuv iboralari xilma-xil ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question:
                    "Oxirida aniq qarorni umumlashtirib tasdiqladingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "B2 Teil 3 da nafaqat kelishuv, balki muqobil variantlarni taqqoslash va qarorni asoslash kutiladi.",
            },
          ],
        },
      ],
    },
  ],
};
