import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 04 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Präsentation. Stellen Sie Ihr Thema in etwa drei Minuten vor: Einleitung, Hauptteil mit Beispielen und ein kurzer Schluss.",
      blocks: [
        {
          id: "b2d-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Digitalisierung im Alltag",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Digitalisierung im Alltag — Erleichterung oder neue Hürde?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· In welchen Bereichen ist der Alltag digital geworden? Nennen Sie Beispiele.
· Wie ist die Entwicklung in Ihrem Heimatland?
· Welche Vorteile bringt sie, für wen?
· Wer hat Schwierigkeiten damit?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2d-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung" },
                { key: "bereiche", label: "Bereiche und Beispiele" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile" },
                { key: "huerden", label: "Hürden" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute darüber sprechen, ob die Digitalisierung unseren Alltag erleichtert oder neue Hürden schafft.

Digital ist inzwischen fast alles: Bankgeschäfte, Arzttermine, Fahrkarten, Anträge bei Behörden. Selbst der Elternabend in der Kita meines Sohnes wird über eine App organisiert.

In der Türkei, woher meine Familie kommt, ging manches sogar schneller als hier — Behördendienste laufen dort seit Jahren über ein einziges Portal. Dafür ist die Beratung vor Ort schlechter, wenn etwas nicht funktioniert.

Die Vorteile liegen auf der Hand: Zeitersparnis und Unabhängigkeit von Öffnungszeiten. Für Berufstätige im Schichtdienst ist das ein großer Gewinn — ich kann meine Anträge nachts um elf stellen.

Schwierigkeiten sehe ich vor allem bei drei Gruppen: älteren Menschen, Personen mit geringen Deutschkenntnissen und Haushalten ohne stabiles Internet. Meine Nachbarin ist 78 und kommt mit dem Portal ihrer Krankenkasse überhaupt nicht zurecht; sie ruft jedes Mal ihren Sohn an.

Mein Fazit: Digitalisierung ist eine Erleichterung, aber nur dann, wenn es einen zweiten Weg gibt. Wo der fehlt, wird aus Fortschritt schnell Ausschluss.`,
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
                  question: "Barcha nuqtalar yoritilib, misol keltirildimi?",
                  points: 8,
                },
                {
                  id: "c3",
                  label: "Ifoda boyligi",
                  question: "B2 darajadagi iboralar ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Ravonlik va to‘g‘rilik",
                  question: "Ravon va grammatik jihatdan to‘g‘ri gapirdingizmi?",
                  points: 5,
                },
              ],
              explanation:
                "Xulosada shart qo‘yish („aber nur dann, wenn …“) taqdimotni yakuniy fikr bilan mustahkamlaydi.",
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
      blocks: [
        {
          id: "b2d-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Sie sagen, es müsse immer einen zweiten Weg geben. Aber das kostet doppelt: Personal am Schalter und teure Software. Wer soll das bezahlen?",
              },
              {
                voice: "male",
                text: "Und ist es nicht so, dass sich das Problem von selbst löst? In zwanzig Jahren sind alle mit Smartphones aufgewachsen.",
              },
            ],
          },
          items: [
            {
              id: "b2d-sp-063",
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
              sample: `Der Kostenpunkt ist berechtigt, das gebe ich zu. Doppelstrukturen sind teuer, und öffentliche Haushalte sind knapp.

Allerdings entstehen auch Kosten, wenn Menschen ihre Anliegen nicht erledigen können. Wer den Antrag auf Wohngeld nicht schafft, landet später in der Schuldnerberatung — das ist am Ende teurer. In unserer Stadt musste eine Behörde die reine Online-Vergabe zurücknehmen, weil die Zahl der unbearbeiteten Fälle stark gestiegen war.

Was Ihren zweiten Punkt angeht: Da bin ich skeptisch. Es stimmt, dass Jüngere mit Technik aufwachsen. Aber die Portale werden ja nicht einfacher, sondern komplexer, und die Sprache der Formulare bleibt schwierig. Außerdem verschiebt sich das Problem nur — heute sind es die Achtzigjährigen, in zwanzig Jahren sind wir es.

Ich würde deshalb nicht zwei vollständige Systeme fordern, sondern feste offene Zeiten, etwa sechs Stunden pro Woche. Das ist finanzierbar.

Wie sehen Sie das — wäre so eine Lösung für Sie ein Kompromiss?`,
              criteria: [
                {
                  id: "c1",
                  label: "Munosabat bildirish",
                  question: "Ikkala e’tirozga ham javob berdingizmi?",
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
                  question: "„das gebe ich zu“, „Allerdings“, „Was … angeht“ ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Suhbatni davom ettirish",
                  question: "Oxirida savol berdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "„Das ist am Ende teurer“ — xarajat dalilini teskari o‘girish B2 munozarasida kuchli usul.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Betrieb möchte neue Mitarbeitende besser einarbeiten. Planen Sie ein Einarbeitungsprogramm gemeinsam mit Ihrem Partner.",
      blocks: [
        {
          id: "b2d-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde einen Ordner mit allen Informationen anlegen. Den bekommt jeder neue Kollege am ersten Tag.",
              },
              {
                voice: "male",
                text: "Und die Einarbeitung sollte die jeweilige Führungskraft übernehmen — die kennt die Aufgaben am besten. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b2d-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "inhalt", label: "📋 Was gehört ins Programm?" },
                { key: "personen", label: "👥 Wer begleitet die Neuen?" },
                { key: "dauer", label: "🗓 Wie lange dauert es?" },
                { key: "kosten", label: "💶 Aufwand und Kosten" },
                { key: "erfolg", label: "📊 Wie messen wir den Erfolg?" },
              ],
              sample: `Ein Ordner ist eine gute Grundlage, reicht aber allein nicht — erfahrungsgemäß liest den kaum jemand vollständig. Ich würde ihn mit festen Terminen kombinieren: in der ersten Woche täglich ein kurzes Gespräch, danach wöchentlich.

Bei den Personen sehe ich es etwas anders als Sie. Führungskräfte haben oft keine Zeit und sind zugleich diejenigen, die später beurteilen. Neue trauen sich dann nicht zu fragen. Besser wäre eine Patin oder ein Pate aus dem Team — jemand, der die Arbeit kennt, aber nicht vorgesetzt ist. Die Führungskraft bleibt natürlich für die fachlichen Ziele zuständig.

Zur Dauer: Ich würde drei Monate ansetzen, also parallel zur Probezeit, mit einem klaren Abschlussgespräch.

Der Aufwand hält sich in Grenzen. Rechnet man zwei Stunden pro Woche für die Patin, sind das etwa 25 Stunden pro Person — deutlich weniger, als eine Neubesetzung kostet, wenn jemand nach vier Monaten wieder geht.

Den Erfolg würde ich an zwei Dingen messen: an einer kurzen Befragung nach drei Monaten und an der Zahl der Kündigungen im ersten Jahr.

Also: Ordner plus feste Gespräche, Patenmodell statt Führungskraft, drei Monate, rund 25 Stunden Aufwand, Auswertung nach einem Jahr. Wären Sie damit einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (mazmun, kim, muddat, xarajat, baholash) muhokama qilindimi?",
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
                  question: "Taklif, e’tiroz va kelishuv iboralari ishlatildimi?",
                  points: 6,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvlarni umumlashtirdingizmi?",
                  points: 4,
                },
              ],
              explanation:
                "„Da sehe ich es etwas anders als Sie“ — muloyim, ammo aniq e’tiroz shakli; keyin darhol asos keltiriladi.",
            },
          ],
        },
      ],
    },
  ],
};
