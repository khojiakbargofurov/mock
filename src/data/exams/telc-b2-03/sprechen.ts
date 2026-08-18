import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 03 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Präsentation. Stellen Sie Ihr Thema in etwa drei Minuten vor: Einleitung, Hauptteil mit Beispielen und ein kurzer Schluss.",
      hint: "Kirish → 2–3 dalil (har biriga misol) → xulosa.",
      blocks: [
        {
          id: "b2c-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Wohnen in der Stadt oder auf dem Land",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Wohnen in der Stadt oder auf dem Land — was spricht wofür?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· Worin unterscheiden sich Stadt und Land heute konkret?
· Wie ist die Situation in Ihrem Heimatland?
· Welche Vorteile hat das Leben auf dem Land, welche die Stadt?
· Welche Probleme sehen Sie (Verkehr, Mieten, Versorgung)?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2c-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung", hint: "Ich möchte über … sprechen." },
                { key: "unterschiede", label: "Konkrete Unterschiede" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile beider Seiten" },
                { key: "probleme", label: "Probleme" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute über die Frage sprechen, ob man besser in der Stadt oder auf dem Land wohnt.

Die Unterschiede sind heute weniger groß als früher, aber sie liegen woanders. Internet und Onlinehandel gibt es überall; entscheidend sind inzwischen Kinderbetreuung, Ärzte und der Nahverkehr. In meinem Dorf fährt der Bus dreimal am Tag, der nächste Kinderarzt ist zwanzig Kilometer entfernt.

In Usbekistan ist der Unterschied deutlich schärfer. Junge Leute ziehen nach Taschkent, weil dort die Universitäten und die gut bezahlten Stellen sind. Auf dem Land bleiben oft die Älteren zurück — ähnlich wie hier in manchen Regionen.

Für das Land spricht vor allem der Preis: Wir zahlen für ein Haus mit Garten weniger als früher für zweiundvierzig Quadratmeter in der Stadt. Dazu kommt die Ruhe. Für die Stadt sprechen die kurzen Wege und die Auswahl — an Arbeitsplätzen, Schulen und Ärzten.

Probleme sehe ich auf beiden Seiten. In den Städten steigen die Mieten so stark, dass Pflegekräfte oder Erzieherinnen dort kaum noch wohnen können. Auf dem Land ist man ohne Auto praktisch abgeschnitten, was besonders ältere Menschen trifft.

Mein Fazit: Es gibt keine allgemein bessere Lösung. Entscheidend ist die Lebensphase — mit kleinen Kindern und einem Auto ist das Land attraktiv, im Alter oder ohne Führerschein wird es schwierig.`,
              criteria: [
                {
                  id: "c1",
                  label: "Tuzilma",
                  question: "Kirish, asosiy qism va xulosa aniq ajralib turdimi?",
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
                  question: "B2 darajadagi iboralar va bog‘lovchilar ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Ravonlik va to‘g‘rilik",
                  question:
                    "Uzoq to‘xtalishlarsiz va grammatik jihatdan asosan to‘g‘ri gapirdingizmi?",
                  points: 5,
                },
              ],
              explanation:
                "Ikki tomonni ham ko‘rsatib, keyin farqlangan xulosa berish („Es kommt auf die Lebensphase an“) B2 da yuqori baholanadi.",
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
      hint: "Qisman rozilik + cheklov: „Das stimmt, allerdings …“",
      blocks: [
        {
          id: "b2c-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Sie sagen, das Land sei günstiger. Aber rechnen Sie das Auto ein? Zwei Autos, Sprit und Versicherung — da ist der Preisvorteil schnell weg.",
              },
              {
                voice: "female",
                text: "Und ist es nicht so, dass gerade Familien am Ende doch wieder in die Stadt ziehen, sobald die Kinder älter werden?",
              },
            ],
          },
          items: [
            {
              id: "b2c-sp-063",
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
              sample: `Da haben Sie einen wichtigen Punkt angesprochen. Das Auto rechnen viele tatsächlich nicht mit ein — bei uns sind es etwa 350 Euro im Monat für zwei Fahrzeuge.

Trotzdem bleibt am Ende ein Vorteil. Der Unterschied bei der Miete beträgt in unserer Region rund 600 Euro. Selbst mit dem zweiten Auto bleiben wir also deutlich darunter. Anders sähe es aus, wenn beide Partner täglich fünfzig Kilometer pendeln müssten.

Was Ihren zweiten Punkt angeht: Da stimme ich Ihnen teilweise zu. Sobald die Kinder in die weiterführende Schule kommen, wird es aufwendig — man fährt ständig. In meinem Dorf sind aber gerade zwei Familien geblieben, weil eine Buslinie zur Gesamtschule eingerichtet wurde. Das zeigt für mich, dass es weniger an der Stadt liegt als an der Infrastruktur.

Man muss allerdings zugeben, dass diese Infrastruktur vielerorts eher abgebaut als ausgebaut wird.

Wie ist das bei Ihnen — würden Sie mit Kindern aufs Land ziehen?`,
              criteria: [
                {
                  id: "c1",
                  label: "Munosabat bildirish",
                  question: "Hamkorning ikkala e’tiroziga ham javob berdingizmi?",
                  points: 7,
                },
                {
                  id: "c2",
                  label: "Asoslash",
                  question: "Har javobda dalil va misol bo‘ldimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Muzokara vositalari",
                  question:
                    "„Da haben Sie recht, allerdings …“, „Was … angeht“ ishlatildimi?",
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
                "Raqamlar bilan javob berish („350 evro / 600 evro“) B2 munozarasida eng ishonarli vosita.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Sprachkurs möchte zum Abschluss ein Projekt durchführen. Planen Sie es gemeinsam mit Ihrer Partnerin.",
      hint: "Variantlarni taqqoslang, tanlovni asoslang, aniq qaror bilan yakunlang.",
      blocks: [
        {
          id: "b2c-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde eine Broschüre über unsere Heimatländer machen. Das ist übersichtlich und jeder kann etwas beitragen.",
              },
              {
                voice: "female",
                text: "Und zur Finanzierung: Vielleicht zahlt jeder zwanzig Euro? Dann müssen wir niemanden fragen.",
              },
            ],
          },
          items: [
            {
              id: "b2c-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "idee", label: "💡 Welches Projekt?" },
                { key: "aufgaben", label: "👥 Wer macht was?" },
                { key: "zeit", label: "🗓 Zeitplan" },
                { key: "kosten", label: "💶 Finanzierung" },
                { key: "publikum", label: "📣 Wen wollen wir erreichen?" },
              ],
              sample: `Eine Broschüre ist eine solide Idee, aber ehrlich gesagt liest die am Ende kaum jemand. Wie wäre es, wenn wir stattdessen einen Abend mit Essen und kurzen Vorträgen organisieren? Jeder stellt sein Land in fünf Minuten vor und bringt ein Gericht mit.

Bei den Aufgaben würde ich vorschlagen, dass wir drei kleine Gruppen bilden: eine für den Raum und die Technik, eine für die Einladungen und eine für das Essen. So hängt nicht alles an zwei Leuten.

Zeitlich sehe ich den letzten Kurstag als zu knapp an — da schreiben viele noch Prüfung. Besser wäre die Woche danach, etwa Freitagabend um achtzehn Uhr.

Zwanzig Euro pro Person halte ich für zu viel, gerade weil einige im Kurs nicht arbeiten. Wenn jeder ein Gericht mitbringt, brauchen wir eigentlich nur Getränke — dafür würden fünf Euro reichen. Für den Raum könnten wir die Volkshochschule fragen; die stellt Räume für Kursprojekte kostenlos zur Verfügung.

Einladen würde ich nicht nur unseren Kurs, sondern auch die Parallelgruppe und die Lehrkräfte.

Also: Länderabend statt Broschüre, drei Arbeitsgruppen, Freitag nach den Prüfungen, fünf Euro pro Person, Raum über die VHS. Wären Sie damit einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (g‘oya, vazifalar, vaqt, moliya, auditoriya) muhokama qilindimi?",
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
                  question: "Taklif, e’tiroz va kelishuv iboralari to‘g‘ri ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida barcha kelishuvlarni umumlashtirdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "Muqobil taklifni ijtimoiy dalil bilan asoslash („gerade weil einige im Kurs nicht arbeiten“) muzokarada kuchli ta’sir qiladi.",
            },
          ],
        },
      ],
    },
  ],
};
