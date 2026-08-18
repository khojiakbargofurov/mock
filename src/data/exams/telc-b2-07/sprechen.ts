import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 07 · Mündliche Prüfung — 3 Teil, 75 ball. */
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
          id: "b2g-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Mehrsprachigkeit",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Mit mehreren Sprachen leben — Chance oder Belastung?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· Wo begegnet Mehrsprachigkeit im Alltag? Nennen Sie Beispiele.
· Wie ist die Situation in Ihrem Heimatland?
· Welche Vorteile hat sie — für Einzelne und für die Gesellschaft?
· Welche Schwierigkeiten sehen Sie?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2g-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung" },
                { key: "alltag", label: "Beispiele aus dem Alltag" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile" },
                { key: "grenzen", label: "Schwierigkeiten" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute darüber sprechen, ob das Leben mit mehreren Sprachen eher eine Chance oder eine Belastung ist.

Im Alltag begegnet mir Mehrsprachigkeit ständig: in der Kita meiner Tochter, wo Kinder aus neun Ländern sind, in meinem Betrieb, wo auf der Baustelle drei Sprachen gemischt werden, und zu Hause, wo wir Usbekisch sprechen und die Kinder untereinander Deutsch.

In Usbekistan ist das übrigens normal. Fast jeder spricht Usbekisch und Russisch, viele zusätzlich Tadschikisch. Niemand hält das für ein Problem — es wird einfach nicht darüber gesprochen.

Die Vorteile sind gut belegt. Wer mehrere Sprachen hat, wechselt leichter die Perspektive und lernt weitere Sprachen schneller. Für die Gesellschaft ist es ein wirtschaftlicher Vorteil: Meine Firma hat einen Auftrag bekommen, weil ein Kollege mit den Lieferanten in seiner Sprache verhandeln konnte.

Schwierigkeiten sehe ich vor allem in der Schule. Wenn die Förderung fehlt, bleibt in beiden Sprachen etwas auf halbem Weg stehen — und dann wird die Mehrsprachigkeit tatsächlich zur Belastung.

Mein Fazit: Mehrsprachigkeit ist eine Chance, aber keine, die von allein aufgeht. Sie braucht Unterstützung, vor allem in Kita und Schule.`,
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
                "„keine, die von allein aufgeht“ — xulosani cheklab berish B2 da yuqori baholanadi.",
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
      blocks: [
        {
          id: "b2g-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Sie sagen, Eltern sollten zu Hause ihre Sprache sprechen. Aber wäre es für die Kinder nicht einfacher, wenn überall Deutsch gesprochen würde?",
              },
              {
                voice: "female",
                text: "Und Förderung in der Kita kostet Geld. Ist das nicht Aufgabe der Familien statt des Staates?",
              },
            ],
          },
          items: [
            {
              id: "b2g-sp-063",
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
              sample: `Auf den ersten Blick klingt das logisch, und ich verstehe den Gedanken.

In der Praxis funktioniert es aber nicht so. Eltern geben nur die Sprache weiter, die sie wirklich beherrschen. Wir haben es selbst versucht: drei Monate nur Deutsch — und unsere Gespräche zu Hause wurden deutlich ärmer, weil ich damals keine Geschichten erzählen konnte. Genau dieses Erzählen ist aber das, was Kinder brauchen.

Zu Ihrem zweiten Punkt: Da widerspreche ich deutlich. Familien können vieles leisten, aber sie können keine Sprachförderung ersetzen, für die man eine Ausbildung braucht. Und die Kosten entstehen ohnehin — nur später, wenn Kinder in der Schule Unterstützung brauchen oder eine Klasse wiederholen.

Man muss allerdings zugeben, dass nicht jede Kita das leisten kann, solange die Gruppen so groß sind.

Wie sehen Sie das — sollte die Förderung verpflichtend sein oder freiwillig bleiben?`,
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
                  question:
                    "„Auf den ersten Blick …“, „Da widerspreche ich deutlich“ ishlatildimi?",
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
                "„Die Kosten entstehen ohnehin — nur später“ — xarajat dalilini vaqt bo‘yicha o‘girish kuchli usul.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Die Kita Ihrer Kinder möchte ein Angebot für mehrsprachige Familien einführen. Planen Sie es gemeinsam mit Ihrer Partnerin.",
      blocks: [
        {
          id: "b2g-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde einen Elternabend zum Thema Sprache machen — einmal im Jahr, mit einer Fachkraft.",
              },
              {
                voice: "female",
                text: "Und einladen würde ich per Aushang und E-Mail. Das ist am wenigsten Aufwand. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b2g-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "angebot", label: "📚 Welches Format?" },
                { key: "zielgruppe", label: "👥 Wen wollen wir erreichen?" },
                { key: "sprachen", label: "🗣 Welche Sprachen?" },
                { key: "kosten", label: "💶 Aufwand und Finanzierung" },
                { key: "erfolg", label: "📊 Wie messen wir den Erfolg?" },
              ],
              sample: `Ein Elternabend ist ein guter Anfang, erreicht aber erfahrungsgemäß genau die Familien nicht, um die es geht. Wer sich sprachlich unsicher fühlt, kommt zu einer Veranstaltung mit Vortrag eher nicht.

Ich würde deshalb ein regelmäßiges, niedrigschwelliges Format vorschlagen: ein Elterncafé alle zwei Wochen, parallel zur Bringzeit, mit Kaffee und ohne Anmeldung. Einmal im Jahr zusätzlich der Fachvortrag, den Sie vorgeschlagen haben.

Bei den Sprachen würde ich mit den drei häufigsten in der Kita anfangen — bei uns Türkisch, Russisch und Arabisch — und Eltern bitten, beim Übersetzen zu helfen.

Bei der Einladung muss ich Ihnen widersprechen. Aushang und E-Mail sind bequem, werden aber oft nicht gelesen. Wirksamer ist die persönliche Ansprache durch die Erzieherinnen an der Tür.

Der Aufwand hält sich in Grenzen: zwei Stunden pro Termin, dazu einmal im Jahr das Honorar für die Fachkraft, etwa 300 Euro. Dafür gibt es Mittel aus dem Programm für Familienbildung.

Den Erfolg würde ich an der Zahl der Familien messen, die zum zweiten Mal kommen — nicht an der Zahl beim ersten Termin.

Also: Elterncafé plus jährlicher Vortrag, drei Sprachen, persönliche Einladung, 300 Euro Honorar, Auswertung nach einem Jahr. Wären Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (format, auditoriya, tillar, xarajat, baholash) muhokama qilindimi?",
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
                "„an der Zahl der Familien, die zum zweiten Mal kommen“ — muvaffaqiyat mezonini aniq belgilash B2 da kuchli tugatish.",
            },
          ],
        },
      ],
    },
  ],
};
