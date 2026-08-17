import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 02 · Mündliche Prüfung — 3 Teil, 75 ball (har biri 25).
 * Hamkorning gaplari TTS orqali o'qiladi.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihren Gesprächspartner noch nicht. Stellen Sie sich vor und stellen Sie ihm Fragen.",
      hint: "2–3 daqiqa. O‘zingiz haqingizda gapiring va kamida ikkita savol bering.",
      blocks: [
        {
          id: "b1b-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "male",
                text: "Guten Tag. Mein Name ist Ahmet Yildiz. Ich bin in Duisburg geboren, meine Eltern kommen aus der Türkei. Ich arbeite als Busfahrer und mache gerade eine Weiterbildung. Und Sie? Wo wohnen Sie und was machen Sie?",
              },
              {
                voice: "male",
                text: "Was gefällt Ihnen an Deutschland am besten — und was war für Sie am Anfang schwierig?",
              },
            ],
          },
          items: [
            {
              id: "b1b-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf / Studium" },
                { key: "alltag", label: "Alltag, Freizeit" },
                { key: "anfang", label: "Anfang in Deutschland" },
                { key: "frage", label: "Fragen an den Partner" },
              ],
              sample: `Guten Tag, Herr Yildiz. Ich heiße Dilnoza Rakhimova und komme aus Samarkand in Usbekistan. Seit drei Jahren wohne ich in Leipzig, zusammen mit meinem Mann und unserem Sohn.

Von Beruf bin ich Krankenschwester. Im Moment arbeite ich halbtags und besuche daneben einen Deutschkurs, weil ich meinen Abschluss anerkennen lassen möchte.

In meiner Freizeit lese ich gern und gehe mit meinem Sohn schwimmen. Am Wochenende kochen wir oft usbekisch — das erinnert uns an zu Hause.

Am Anfang war die Sprache das Schwierigste, besonders am Telefon. Was mir hier sehr gefällt, ist, dass alles gut organisiert ist.

Darf ich Sie auch etwas fragen? Wie lange fahren Sie schon Bus? Und was für eine Weiterbildung machen Sie gerade?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Barcha nuqtalar bo‘yicha gapirdingizmi va hamkorga kamida ikkita savol berdingizmi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question:
                    "Turli tuzilmalar va bog‘lovchilar („seit“, „daneben“, „besonders“) ishlatildimi?",
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
                "„Was war am Anfang schwierig?“ kabi savolga o‘tgan zamonda javob bering: „Am Anfang war die Sprache das Schwierigste.“",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Gespräch über ein Thema. Lesen Sie den kurzen Text. Berichten Sie über Ihre Erfahrungen, sagen Sie Ihre Meinung und reagieren Sie auf Ihren Partner.",
      hint: "Matnni takrorlamang — o‘z tajribangiz, vatandagi holat va fikringizni ayting.",
      blocks: [
        {
          id: "b1b-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Immer mehr Menschen kaufen ihre Lebensmittel im Internet. In deutschen Großstädten bestellt inzwischen jede vierte Person mindestens einmal im Monat Essen nach Hause. Befürworter sagen, das spare Zeit und sei für ältere Menschen eine große Hilfe. Kritiker warnen vor mehr Verpackungsmüll und davor, dass kleine Läden in den Stadtteilen verschwinden.`,
          },
          items: [
            {
              id: "b1b-sp-063",
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
              sample: `Ich habe selbst schon zweimal Lebensmittel online bestellt, als mein Sohn krank war und ich nicht aus dem Haus konnte. Damals war ich sehr froh darüber.

Der größte Vorteil ist meiner Meinung nach die Zeit. Für ältere Menschen oder für Familien mit kleinen Kindern ist das wirklich eine Hilfe. Außerdem kauft man vielleicht weniger spontan ein.

Es gibt aber auch Nachteile. Mich hat gestört, wie viel Plastik dabei war — für zehn Produkte drei Tüten. Und ich finde es schade, wenn die kleinen Geschäfte im Viertel schließen müssen, denn dort trifft man auch seine Nachbarn.

In Usbekistan ist das noch ganz anders. Bei uns geht man auf den Basar, sucht das Gemüse selbst aus und handelt über den Preis. Online bestellen tun bisher vor allem junge Leute in Taschkent.

Ich persönlich bestelle nur, wenn es nicht anders geht. Wie machen Sie das? Kaufen Sie lieber im Laden ein?`,
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
                  question:
                    "Fikr bildirish iboralari va aniq misollar ishlatildimi?",
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
                "Vatandagi holat bilan solishtirish B1 da yuqori baholanadi — bu sizga qo‘shimcha gapirish materiali beradi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. In Ihrem Deutschkurs endet das Semester. Planen Sie zusammen mit Ihrem Partner einen gemeinsamen Ausflug für die Gruppe.",
      hint: "Taklif kiriting, hamkorning taklifiga aniq javob bering va oxirida kelishuvni yakunlang.",
      blocks: [
        {
          id: "b1b-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde vorschlagen, dass wir in den Zoo gehen. Das ist nicht weit und für alle interessant.",
              },
              {
                voice: "male",
                text: "Und wegen des Geldes: Vielleicht zahlt jeder seinen Eintritt selbst? Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b1b-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "ziel", label: "📍 Wohin? (Zoo, Museum, Wanderung)" },
                { key: "termin", label: "🗓 Wann? (Tag, Uhrzeit)" },
                { key: "anfahrt", label: "🚌 Wie kommen alle hin?" },
                { key: "kosten", label: "💶 Kosten" },
                { key: "einladung", label: "✉️ Wer informiert die Gruppe?" },
              ],
              sample: `Der Zoo ist keine schlechte Idee, aber im Kurs sind auch drei Leute über sechzig — da wäre viel Laufen vielleicht anstrengend. Wie wäre es, wenn wir stattdessen eine Schifffahrt machen? Da sitzt man, kann reden und sieht trotzdem etwas.

Als Termin schlage ich Samstag, den 20. September vor, so gegen elf Uhr. Am Sonntag arbeiten einige aus dem Kurs.

Zum Treffpunkt: Ich würde sagen, wir treffen uns alle direkt an der Haltestelle vor der Schule und fahren zusammen mit der Straßenbahn. Dann verläuft sich niemand.

Mit den Kosten bin ich einverstanden — jeder zahlt seine Fahrkarte selbst. Für Getränke könnten wir aber eine kleine Kasse machen, zum Beispiel drei Euro pro Person.

Und die Gruppe informiere gern ich, ich schreibe heute Abend eine Nachricht in unsere Kursgruppe.

Also: Samstag um elf, Schifffahrt, Treffpunkt an der Haltestelle, jeder zahlt selbst. Einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (joy, vaqt, yo‘l, xarajat, xabar berish) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question:
                    "Hamkorning ikkala taklifiga munosabat bildirdingizmi (rozilik yoki asosli muqobil)?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question:
                    "„Wie wäre es, wenn …“, „Ich schlage vor“, „Einverstanden“ kabi iboralar ishlatildimi?",
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
                "Muqobil taklifni sabab bilan bering: „…, aber im Kurs sind auch drei Leute über sechzig — deshalb …“. Shunda rad etish qo‘pol tuyulmaydi.",
            },
          ],
        },
      ],
    },
  ],
};
