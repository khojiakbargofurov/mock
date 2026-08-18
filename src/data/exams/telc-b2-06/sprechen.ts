import type { ExamModule } from "@/lib/exam/types";

/** telc B2 · Übungstest 06 · Mündliche Prüfung — 3 Teil, 75 ball. */
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
          id: "b2f-sp1-b1",
          stimulus: {
            kind: "text",
            title: "Thema: Leben auf dem Land",
            body: `Bereiten Sie eine kurze Präsentation zum Thema „Leben auf dem Land — Rückzug oder Zukunft?“ vor.

Gehen Sie dabei auf folgende Punkte ein:
· Wie hat sich das Leben auf dem Land verändert? Nennen Sie Beispiele.
· Wie ist die Situation in Ihrem Heimatland?
· Welche Vorteile hat das Land, welche Nachteile?
· Wer ist besonders betroffen, wenn Angebote wegfallen?
· Ihr Fazit`,
          },
          items: [
            {
              id: "b2f-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 120,
              speakSec: 240,
              cards: [
                { key: "einleitung", label: "Einleitung" },
                { key: "wandel", label: "Was hat sich verändert?" },
                { key: "heimat", label: "Situation im Heimatland" },
                { key: "vorteile", label: "Vorteile und Nachteile" },
                { key: "betroffene", label: "Wer ist betroffen?" },
                { key: "fazit", label: "Fazit" },
              ],
              sample: `Ich möchte heute darüber sprechen, ob das Leben auf dem Land ein Rückzug ist oder eine Zukunft hat.

Verändert hat sich vor allem die Infrastruktur. In meinem Dorf gab es vor zwanzig Jahren einen Laden, eine Schule und eine Arztpraxis. Heute gibt es davon nichts mehr — dafür schnelles Internet, was viele unterschätzen.

In der Türkei, woher meine Familie kommt, ist die Bewegung ähnlich: Junge Leute ziehen in die Städte, in den Dörfern bleiben die Älteren. Dort ist die Familie allerdings noch stärker das soziale Netz.

Die Vorteile liegen auf der Hand: bezahlbarer Wohnraum, Ruhe, Platz für Kinder. Die Nachteile ebenso: lange Wege, wenig Auswahl bei Ärzten und Schulen, und ohne Auto geht praktisch nichts.

Genau da sehe ich die Betroffenen. Wer ein Auto und Homeoffice hat, für den ist das Land attraktiv. Für Jugendliche, für Ältere ohne Führerschein und für Familien mit kleinem Einkommen ist es dagegen eine Falle.

Mein Fazit: Das Land hat eine Zukunft, aber nur, wenn Mobilität und Grundversorgung gesichert sind. Sonst wird es zum Wohnort für die, die es sich aussuchen können.`,
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
                "„Wohnort für die, die es sich aussuchen können“ — yakunda kuchli va esda qoladigan formulirovka.",
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
          id: "b2f-sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning e’tirozlari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Sie fordern mehr Busse auf dem Land. Aber die fahren doch nachweislich leer. Ist das nicht Geldverschwendung?",
              },
              {
                voice: "female",
                text: "Und wäre es nicht ehrlicher zu sagen: Wer aufs Land zieht, entscheidet sich eben für lange Wege?",
              },
            ],
          },
          items: [
            {
              id: "b2f-sp-063",
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
              sample: `Dass viele Busse leer fahren, bestreite ich gar nicht — das sieht man ja jeden Tag.

Die Frage ist nur, was daraus folgt. Ein Bus, der um 6.20 Uhr und um 17.10 Uhr fährt, passt zu keiner Schicht und zu keinem Arzttermin. Die geringe Auslastung ist damit eher das Ergebnis eines schlechten Angebots als ein Beweis für fehlenden Bedarf. In unserer Nachbargemeinde wurde ein Rufbus eingeführt, und die Fahrgastzahlen haben sich innerhalb eines Jahres verdreifacht.

Zu Ihrem zweiten Punkt: Da muss ich deutlich widersprechen. Viele Menschen entscheiden sich nicht für das Land, sie sind dort geboren oder finden in der Stadt keine bezahlbare Wohnung. Eine Sechzehnjährige, die zur Berufsschule muss, hat diese Wahl gar nicht getroffen.

Man muss allerdings zugeben, dass nicht jede Strecke zu halten ist. Ich würde deshalb bei den Randzeiten ansetzen, nicht beim ganzen Netz.

Wie sehen Sie das — wäre ein Rufbus für Sie eine akzeptable Lösung?`,
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
                    "„bestreite ich gar nicht“, „Da muss ich widersprechen“ kabi iboralar ishlatildimi?",
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
                "Aniq shaxsni misol qilish („Eine Sechzehnjährige, die zur Berufsschule muss“) mavhum bahsni jonlantiradi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihre Gemeinde möchte ein Mobilitätsangebot für ältere Menschen einführen. Planen Sie es gemeinsam mit Ihrer Partnerin.",
      blocks: [
        {
          id: "b2f-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde einen Fahrdienst mit Ehrenamtlichen aufbauen. Das kostet die Gemeinde fast nichts.",
              },
              {
                voice: "female",
                text: "Die Buchung sollte über eine App laufen — das ist am einfachsten zu organisieren. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b2f-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 240,
              cards: [
                { key: "angebot", label: "🚐 Welche Form?" },
                { key: "buchung", label: "📞 Wie wird gebucht?" },
                { key: "personen", label: "👥 Wer fährt?" },
                { key: "kosten", label: "💶 Finanzierung" },
                { key: "erfolg", label: "📊 Wie messen wir den Erfolg?" },
              ],
              sample: `Ein ehrenamtlicher Fahrdienst ist ein guter Anfang, ich sehe aber zwei Risiken: Versicherung und Verlässlichkeit. Wenn am Dienstag niemand Zeit hat, fällt die Fahrt zum Arzt aus. Ich würde deshalb einen kleinen Bus mit einer bezahlten Teilzeitkraft vorschlagen, ergänzt durch Ehrenamtliche.

Bei der Buchung muss ich Ihnen widersprechen. Wenn es nur eine App gibt, erreichen wir genau die Zielgruppe nicht — viele über achtzig haben kein Smartphone. Wie wäre es, wenn wir zusätzlich eine Telefonnummer einrichten, die zweimal täglich besetzt ist?

Zur Finanzierung: Es gibt Landesmittel für Mobilität im ländlichen Raum, die etwa siebzig Prozent abdecken. Den Rest könnte die Gemeinde übernehmen, dazu ein Fahrpreis von zwei Euro pro Fahrt — das schafft auch Verbindlichkeit.

Den Erfolg würde ich nicht nur an den Fahrgastzahlen messen, sondern auch daran, wie viele Fahrten zu Arztterminen führen. Genau darum geht es ja.

Also: Kleinbus mit Teilzeitkraft und Ehrenamtlichen, Buchung per App und Telefon, Förderung plus zwei Euro pro Fahrt, Auswertung nach einem Jahr. Wären Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Beshta nuqta (shakl, buyurtma, kim, moliya, baholash) muhokama qilindimi?",
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
                "„das schafft auch Verbindlichkeit“ — chora foydasini qo‘shimcha dalil bilan asoslash B2 da yaxshi baholanadi.",
            },
          ],
        },
      ],
    },
  ],
};
