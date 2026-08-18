import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 05 · Mündliche Prüfung — 3 Teil, 75 ball.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihre Gesprächspartnerin noch nicht. Stellen Sie sich vor und stellen Sie ihr Fragen.",
      blocks: [
        {
          id: "b1e-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "female",
                text: "Guten Tag. Ich heiße Irina Petrova, ich komme aus der Ukraine und arbeite als Friseurin. Seit zwei Jahren lebe ich hier. Und Sie?",
              },
              {
                voice: "female",
                text: "Und wie haben Sie Deutsch gelernt — im Kurs oder eher bei der Arbeit?",
              },
            ],
          },
          items: [
            {
              id: "b1e-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf" },
                { key: "sprache", label: "Wie Sie Deutsch lernen" },
                { key: "plaene", label: "Pläne" },
                { key: "frage", label: "Fragen an die Partnerin" },
              ],
              sample: `Guten Tag, Frau Petrova. Ich heiße Anvar Salimov und komme aus Fergana in Usbekistan. Seit zwei Jahren wohne ich in Leipzig, zusammen mit meiner Frau und unserem Sohn.

Ich arbeite als Fahrer bei einer Spedition. Die Arbeit gefällt mir, aber ich möchte später etwas anderes machen.

Deutsch habe ich zuerst im Integrationskurs gelernt, jeden Vormittag. Am meisten hilft mir aber die Arbeit — ich rede jeden Tag mit Kunden, und am Anfang war das ziemlich anstrengend.

Mein Plan ist das Zertifikat B1 und danach eine Weiterbildung zum Disponenten. Dafür brauche ich bessere Sprachkenntnisse.

Darf ich Sie auch etwas fragen? Arbeiten Sie in einem Salon oder selbstständig? Und war die Anerkennung Ihrer Ausbildung schwierig?`,
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
                  question: "Turli tuzilmalar va bog‘lovchilar ishlatildimi?",
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
                "„Am meisten hilft mir …“ — tajribangizni baholashning tabiiy va foydali shakli.",
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
      blocks: [
        {
          id: "b1e-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Viele Menschen arbeiten heute in Berufen, die sie ursprünglich nicht gelernt haben. Eine Untersuchung zeigt: Rund ein Drittel der Beschäftigten in Deutschland übt einen anderen Beruf aus als den, für den sie ausgebildet wurden. Für die einen ist das eine Chance, für die anderen ein Zeichen dafür, dass die Ausbildung nicht zum Arbeitsmarkt passt.`,
          },
          items: [
            {
              id: "b1e-sp-063",
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
              sample: `Das Thema betrifft mich direkt. Ich habe in Usbekistan Wirtschaft studiert und arbeite hier als Fahrer. Am Anfang hat mich das gestört — ich hatte das Gefühl, fünf Jahre umsonst studiert zu haben.

Inzwischen sehe ich auch Vorteile. Ich habe schnell Arbeit gefunden, und im Betrieb merken sie, dass ich mit Zahlen und Kunden umgehen kann. Deshalb darf ich jetzt manchmal die Touren planen.

Nachteile gibt es natürlich. Man verdient oft weniger, als man mit dem eigenen Abschluss verdienen könnte. Und man muss noch einmal von unten anfangen, mit dreißig oder vierzig.

In Usbekistan ist es ähnlich, aber aus anderen Gründen: Dort gibt es viele Absolventen und wenige passende Stellen. Fast jeder Bekannte von mir arbeitet in einem anderen Bereich.

Meiner Meinung nach ist ein Wechsel kein Problem, solange er freiwillig ist. Schlimm wird es, wenn jemand jahrelang unter seiner Qualifikation arbeitet, weil ein Abschluss nicht anerkannt wird.

Wie war das bei Ihnen — konnten Sie in Ihrem Beruf weiterarbeiten?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Tajriba, ijobiy va salbiy tomonlar hamda fikringiz bormi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Fikr bildirish iboralari va misollar ishlatildimi?",
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
                  question: "Hamkoringizga savol berdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "„solange er freiwillig ist“ — shart bilan farqlangan fikr B1 da yuqori baholanadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Deutschkurs möchte einen Ausflug für die Gruppe organisieren. Planen Sie ihn gemeinsam mit Ihrer Partnerin.",
      blocks: [
        {
          id: "b1e-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde in eine andere Stadt fahren, zum Beispiel nach Dresden. Mit dem Zug sind wir in eineinhalb Stunden da.",
              },
              {
                voice: "female",
                text: "Und wegen des Geldes: Jeder zahlt seine Fahrkarte selbst, oder? Ein Gruppenticket ist kompliziert.",
              },
            ],
          },
          items: [
            {
              id: "b1e-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "ziel", label: "📍 Wohin?" },
                { key: "termin", label: "🗓 Wann?" },
                { key: "fahrt", label: "🚆 Wie kommen wir hin?" },
                { key: "kosten", label: "💶 Kosten" },
                { key: "programm", label: "🗺 Was machen wir dort?" },
              ],
              sample: `Dresden finde ich gut, da war ich noch nie. Nur eineinhalb Stunden — das passt für einen Tag.

Beim Ticket würde ich Ihnen widersprechen: Ein Gruppenticket ist zwar etwas Aufwand, aber für fünf Personen kostet es zusammen etwa 30 Euro statt 25 Euro pro Person. Ich kann das übernehmen, ich habe die App sowieso.

Als Termin schlage ich Samstag, den 12. Oktober vor. Sonntags fahren weniger Züge, und einige aus dem Kurs arbeiten am Sonntag.

Vor Ort würde ich vormittags die Altstadt anschauen und nachmittags in ein Museum gehen — aber nur, wenn es regnet. Bei gutem Wetter lieber an die Elbe.

Und zum Essen: Statt Restaurant könnten wir etwas mitnehmen. Im Kurs sind mehrere Leute, für die ein Restaurantessen teuer wäre.

Also: Samstag, den 12. Oktober nach Dresden, Gruppenticket über mich, Altstadt und je nach Wetter Museum oder Elbe, Essen bringen wir mit. Sind Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (joy, vaqt, yo‘l, xarajat, dastur) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question: "Hamkorning ikkala taklifiga munosabat bildirdingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif va kelishuv iboralari ishlatildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni umumlashtirdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Hisob-kitob bilan e’tiroz („30 Euro statt 25 Euro pro Person“) muzokarada eng ishonarli usul.",
            },
          ],
        },
      ],
    },
  ],
};
