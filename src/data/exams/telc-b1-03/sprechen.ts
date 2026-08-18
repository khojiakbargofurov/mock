import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 03 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihre Gesprächspartnerin noch nicht. Stellen Sie sich vor und stellen Sie ihr Fragen.",
      hint: "2–3 daqiqa: o‘zingiz haqingizda gapiring va kamida ikkita savol bering.",
      blocks: [
        {
          id: "b1c-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "female",
                text: "Guten Tag. Ich heiße Ana Ferreira und komme aus Portugal. Ich arbeite seit vier Jahren als Köchin in einem Hotel. Und Sie? Was machen Sie hier in Deutschland?",
              },
              {
                voice: "female",
                text: "Und wie sieht Ihr Alltag aus — arbeiten Sie und lernen Sie gleichzeitig?",
              },
            ],
          },
          items: [
            {
              id: "b1c-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf / Ausbildung" },
                { key: "alltag", label: "Ein normaler Tag" },
                { key: "ziele", label: "Pläne für die Zukunft" },
                { key: "frage", label: "Fragen an die Partnerin" },
              ],
              sample: `Guten Tag, Frau Ferreira. Mein Name ist Bekzod Toshev, ich komme aus Buchara in Usbekistan und wohne seit zwei Jahren in Erfurt.

Ich bin ebenfalls Koch, arbeite aber in einem kleinen Restaurant, nicht im Hotel. Zurzeit mache ich beides: Ich arbeite fünf Tage in der Woche und besuche zweimal pro Woche abends einen Deutschkurs.

Ein normaler Tag beginnt bei mir spät, weil ich oft bis Mitternacht arbeite. Vormittags lerne ich, nachmittags gehe ich zur Arbeit.

Mein Ziel ist das Zertifikat B1. Danach möchte ich eine Ausbildung als Küchenmeister anfangen — dafür brauche ich die Sprache.

Darf ich Sie auch etwas fragen? Wie haben Sie am Anfang Deutsch gelernt? Und ist die Arbeit im Hotel anders als im Restaurant?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Barcha nuqtalar bo‘yicha gapirdingizmi va kamida ikkita savol berdingizmi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question:
                    "Turli tuzilmalar va bog‘lovchilar („zurzeit“, „danach“, „dafür“) ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "Fe’l shakllari va so‘z tartibi asosan to‘g‘rimi?",
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
                "Kelajak rejalari haqida „möchte“ va „mein Ziel ist …“ bilan gapirish B1 da kutiladi.",
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
      hint: "Matnni takrorlamang — tajribangiz, vatandagi holat va fikringizni ayting.",
      blocks: [
        {
          id: "b1c-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Immer mehr Menschen leben allein: In deutschen Großstädten ist inzwischen fast jeder zweite Haushalt ein Einpersonenhaushalt. Für die einen bedeutet das Freiheit und Ruhe, für die anderen höhere Kosten und weniger Kontakte. Fachleute weisen darauf hin, dass besonders ältere Menschen darunter leiden, wenn sie über Tage mit niemandem sprechen.`,
          },
          items: [
            {
              id: "b1c-sp-063",
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
              sample: `Ich habe das erste Jahr in Deutschland allein gewohnt, in einem Zimmer in Erfurt. Am Anfang war ich froh: Niemand hat mich gestört, ich konnte lernen, wann ich wollte.

Nach ein paar Monaten hat mir aber etwas gefehlt. Nach der Arbeit war die Wohnung einfach still. Ich habe deshalb angefangen, Fußball zu spielen, nur um Leute zu treffen.

In Usbekistan ist das ganz anders. Dort leben oft drei Generationen zusammen, und allein zu wohnen ist eher ungewöhnlich. Das hat Vorteile — man ist nie einsam —, aber man hat auch fast keine Privatsphäre.

Meiner Meinung nach kommt es auf das Alter an. Für junge Leute ist Alleinwohnen gut, man wird selbstständig. Für ältere Menschen finde ich es gefährlich, wenn niemand nach ihnen schaut.

Wie ist das bei Ihnen? Wohnen Sie allein, und würden Sie es wieder so machen?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Tajriba, ijobiy va salbiy tomonlar hamda o‘z fikringiz bormi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Fikr bildirish iboralari va aniq misollar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "O‘tgan zamon va ergash gaplar to‘g‘ri tuzildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Muloqot",
                  question: "Hamkoringizga savol berib, suhbatni davom ettirdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "„Es kommt darauf an …“ — B1 da fikrni farqlab aytishning eng foydali iborasi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ein Kollege verlässt nach zehn Jahren die Firma. Planen Sie zusammen mit Ihrer Partnerin ein Abschiedsgeschenk und eine kleine Feier.",
      hint: "Taklif kiriting, hamkorning taklifiga aniq javob bering, oxirida yakunlang.",
      blocks: [
        {
          id: "b1c-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde ihm einen Gutschein für ein Restaurant schenken. Das ist einfach und passt immer.",
              },
              {
                voice: "female",
                text: "Und die Feier — sollen wir das in der Mittagspause machen? Dann muss niemand länger bleiben.",
              },
            ],
          },
          items: [
            {
              id: "b1c-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "geschenk", label: "🎁 Welches Geschenk?" },
                { key: "geld", label: "💶 Wer sammelt Geld?" },
                { key: "termin", label: "🗓 Wann feiern wir?" },
                { key: "ort", label: "📍 Wo?" },
                { key: "rede", label: "🎤 Wer sagt ein paar Worte?" },
              ],
              sample: `Ein Gutschein ist praktisch, das stimmt. Aber nach zehn Jahren finde ich ihn etwas unpersönlich. Wie wäre es, wenn wir zusätzlich ein Fotoalbum machen? Jeder klebt ein Bild und schreibt einen Satz dazu.

Beim Geld würde ich vorschlagen, dass ich sammle — ich sitze sowieso am Eingang. Zehn Euro pro Person sollten reichen.

Die Mittagspause ist mir ehrlich gesagt zu kurz, eine halbe Stunde für zehn Jahre ist wenig. Könnten wir am Freitag um sechzehn Uhr anfangen? Freitags gehen die meisten früher, und dann hat niemand Stress.

Als Ort schlage ich den großen Besprechungsraum vor. Draußen ist es um diese Zeit schon kalt.

Und die Rede — würden Sie das übernehmen? Sie arbeiten am längsten mit ihm zusammen. Ich kümmere mich dafür um Kuchen und Getränke.

Also: Fotoalbum und Gutschein, ich sammle das Geld, Freitag sechzehn Uhr im Besprechungsraum, und Sie sagen ein paar Worte. Passt das so?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (sovg‘a, pul, vaqt, joy, nutq) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning ikkala taklifiga munosabat bildirdingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "„Wie wäre es, wenn …“, „Ich schlage vor“, „Passt das?“ ishlatildimi?",
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
                "Vazifani bo‘lishish („Ich kümmere mich um …, Sie übernehmen …“) muzokara ballini oshiradi.",
            },
          ],
        },
      ],
    },
  ],
};
