import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 02 · Mündliche Prüfung — 3 Teil, 75 ball (har biri 25).
 * Teil 1 taqdimot, Teil 2 munozara, Teil 3 birgalikda rejalashtirish.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Präsentation. Stellen Sie Ihr Thema in etwa drei Minuten vor: Einleitung, Hauptteil mit Beispielen und ein kurzer Schluss.",
      hint: "Kirish → 2–3 dalil (har biriga misol) → xulosa. Vaqtni taqsimlang.",
      blocks: [
        {
          id: "b2b-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Lebenslanges Lernen",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Lebenslanges Lernen — Notwendigkeit oder zusätzlicher Druck?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· Was versteht man unter lebenslangem Lernen? Nennen Sie Beispiele.
· Welchen Stellenwert hat Weiterbildung in Ihrem Heimatland?
· Welche Vorteile hat sie für die Beschäftigten und für die Betriebe?
· Welche Schwierigkeiten sehen Sie (Zeit, Kosten, Familie)?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2b-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                {
                  key: "einleitung",
                  label: "Einleitung",
                  hint: "Ich möchte über … sprechen.",
                },
                { key: "definition", label: "Was ist gemeint? Beispiele" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile" },
                { key: "grenzen", label: "Schwierigkeiten" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute über lebenslanges Lernen sprechen — also darüber, dass man auch nach der Ausbildung immer wieder Neues lernt.

Damit ist nicht nur ein Studium gemeint. Dazu gehören genauso ein Sprachkurs am Abend, eine Fortbildung im Betrieb oder das Einarbeiten in ein neues Computerprogramm. Meine Mutter zum Beispiel hat mit fünfzig gelernt, Behördenanträge online auszufüllen.

In meinem Heimatland Usbekistan spielt Weiterbildung vor allem in den Städten eine wachsende Rolle. Viele junge Leute lernen Englisch oder Programmieren, häufig privat und auf eigene Kosten. Ein System wie die Bildungsfreistellung, die es hier in einigen Bundesländern gibt, kennt man dort nicht.

Die Vorteile liegen für mich auf beiden Seiten. Beschäftigte werden sicherer im Beruf und finden leichter eine neue Stelle; Betriebe müssen seltener von außen einstellen. In meiner Klinik hat eine Kollegin eine Weiterbildung zur Praxisanleiterin gemacht — heute bildet sie selbst aus.

Trotzdem sehe ich Schwierigkeiten. Wer Schicht arbeitet und kleine Kinder hat, findet kaum Zeit dafür. Und Kurse sind teuer: Mein Fachsprachkurs hat 480 Euro gekostet.

Mein Fazit: Lebenslanges Lernen ist notwendig, darf aber nicht allein den Einzelnen überlassen werden. Wenn Betriebe Zeit und Geld beisteuern, profitieren am Ende beide Seiten.`,
              criteria: [
                {
                  id: "c1",
                  label: "Tuzilma",
                  question:
                    "Kirish, asosiy qism va xulosa aniq ajralib turdimi?",
                  points: 6,
                },
                {
                  id: "c2",
                  label: "Mazmun va misollar",
                  question:
                    "Barcha nuqtalar yoritilib, har biriga aniq misol keltirildimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Ifoda boyligi",
                  question:
                    "B2 darajadagi iboralar va bog‘lovchilar ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Ravonlik va to‘g‘rilik",
                  question:
                    "Uzoq to‘xtalishlarsiz, grammatik jihatdan asosan to‘g‘ri gapirdingizmi?",
                  points: 5,
                },
              ],
              explanation:
                "Taqdimotda „Mein Fazit“ deb yakun qilish baholovchiga tuzilmani ko‘rsatadi — bu ball beradi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Diskussion. Reagieren Sie auf die Fragen und Einwände Ihres Partners und begründen Sie Ihre Position.",
      hint: "Avval qisman rozilik bildiring, keyin qarshi dalilni bering: „Da haben Sie recht, allerdings …“",
      blocks: [
        {
          id: "b2b-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Sie sagen, Weiterbildung sei notwendig. Aber viele Kurse sind teuer und bringen am Ende gar keine bessere Stelle. Ist das nicht oft verlorene Zeit?",
              },
              {
                voice: "male",
                text: "Und sollte nicht eher der Betrieb dafür sorgen? Warum soll ich meine Freizeit opfern, damit mein Arbeitgeber davon profitiert?",
              },
            ],
          },
          items: [
            {
              id: "b2b-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "zustimmen", label: "Zustimmen / einschränken" },
                { key: "argument", label: "Gegenargument" },
                { key: "beispiel", label: "Beispiel aus der Praxis" },
                { key: "nachfrage", label: "Nachfrage an den Partner" },
              ],
              sample: `Da haben Sie teilweise recht — es gibt tatsächlich Kurse, die wenig bringen. Entscheidend ist aus meiner Sicht aber, ob ein Abschluss anerkannt wird oder nicht. Ein Zertifikat, das im Betrieb niemand kennt, hilft wirklich kaum weiter.

Trotzdem würde ich nicht von verlorener Zeit sprechen. Eine Kollegin von mir hat eine Weiterbildung zur Praxisanleiterin gemacht und verdient heute deutlich mehr. Ohne diesen Kurs hätte sie die Stelle nicht bekommen.

Was Ihren zweiten Punkt angeht: Ich stimme Ihnen zu, dass die Verantwortung nicht allein bei den Beschäftigten liegen darf. Genau deshalb halte ich Modelle für richtig, bei denen der Betrieb die Kosten übernimmt und einen Teil der Zeit als Arbeitszeit anrechnet. Bei uns ist das seit zwei Jahren so geregelt, und die Zahl der Anmeldungen hat sich seitdem etwa verdoppelt.

Man darf allerdings nicht vergessen, dass auch wir selbst profitieren — die Qualifikation bleibt ja bei uns, auch wenn wir den Arbeitgeber wechseln.

Wie ist das eigentlich in Ihrer Branche? Bekommen Sie für Fortbildungen freie Tage?`,
              criteria: [
                {
                  id: "c1",
                  label: "Munosabat bildirish",
                  question:
                    "Hamkorning ikkala e’tiroziga ham javob berdingizmi?",
                  points: 7,
                },
                {
                  id: "c2",
                  label: "Asoslash",
                  question:
                    "Har javobda dalil va misol bo‘ldimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Muzokara vositalari",
                  question:
                    "„Da haben Sie recht, allerdings …“, „Was … angeht“ kabi iboralar ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Suhbatni davom ettirish",
                  question: "Oxirida hamkoringizga savol berdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "Munozarada butunlay rad etish emas, qisman rozilik + cheklov eng yuqori baholanadi — bu B2 ning tipik vositasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Betrieb möchte ein internes Weiterbildungsprogramm einführen. Planen Sie es gemeinsam mit Ihrem Partner.",
      hint: "Variantlarni taqqoslang, tanlovingizni asoslang va oxirida aniq qaror bilan yakunlang.",
      blocks: [
        {
          id: "b2b-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde die Schulungen als Online-Kurse anbieten. Das ist am günstigsten, und jeder kann sie machen, wann er will.",
              },
              {
                voice: "male",
                text: "Bei der Zeit schlage ich vor, dass die Kollegen die Kurse in ihrer Freizeit absolvieren. Sonst fehlen sie ja im Betrieb. Wie sehen Sie das?",
              },
            ],
          },
          items: [
            {
              id: "b2b-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "inhalt", label: "📚 Welche Themen?" },
                { key: "format", label: "💻 Online, Präsenz oder gemischt?" },
                { key: "zeit", label: "🕘 Arbeitszeit oder Freizeit?" },
                { key: "kosten", label: "💶 Budget und Finanzierung" },
                { key: "evaluation", label: "📊 Wie messen wir den Erfolg?" },
              ],
              sample: `Reine Online-Kurse sehe ich kritisch. Sie sind günstig, das stimmt, aber die Abbruchquote ist erfahrungsgemäß hoch. Ich würde eine gemischte Form vorschlagen: die Theorie online, dazu einmal im Monat ein Präsenztermin, an dem Fragen besprochen werden.

Bei der Arbeitszeit muss ich Ihnen allerdings widersprechen. Wenn die Kurse komplett in der Freizeit stattfinden, machen vor allem die Kolleginnen mit kleinen Kindern nicht mit — und genau die brauchen wir. Wie wäre es, wenn wir uns die Zeit teilen: die Hälfte wird als Arbeitszeit angerechnet, die andere Hälfte bringen die Beschäftigten selbst ein?

Inhaltlich würde ich mit zwei Themen anfangen, die alle betreffen: der Umgang mit der neuen Software und Kommunikation im Kundenkontakt. Später kann man Fachthemen ergänzen.

Zum Budget: Ich habe grob gerechnet, dass wir mit etwa 8.000 Euro im ersten Jahr auskommen. Einen Teil davon könnten wir über die Weiterbildungsförderung beantragen.

Und den Erfolg würde ich nach sechs Monaten messen — mit einer kurzen anonymen Befragung und den Teilnahmezahlen.

Also: gemischtes Format, Zeit hälftig geteilt, zwei Startthemen, 8.000 Euro Budget und eine Auswertung nach einem halben Jahr. Wären Sie damit einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (mavzu, format, vaqt, byudjet, baholash) muhokama qilindimi?",
                  points: 7,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning takliflariga aniq munosabat va asoslangan muqobil berildimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "Taklif, e’tiroz va kelishuv iboralari to‘g‘ri ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question:
                    "Oxirida barcha kelishuvlarni umumlashtirib tasdiqladingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "„Da muss ich Ihnen allerdings widersprechen“ — B2 da muloyim, ammo aniq e’tiroz shakli. Undan keyin darhol muqobil taklif bering.",
            },
          ],
        },
      ],
    },
  ],
};
