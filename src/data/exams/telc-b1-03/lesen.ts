import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 03 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "Sarlavha matnning butun mazmunini qamrashi kerak, bitta detalni emas.",
      bank: [
        { key: "a", label: "Ein Betrieb ohne festen Chef" },
        { key: "b", label: "Wenn Rentner wieder arbeiten" },
        { key: "c", label: "Sprache lernen am Küchentisch" },
        { key: "d", label: "Ferien auf Zeit tauschen" },
        { key: "e", label: "Das Ende der Plastiktüte" },
        { key: "f", label: "Schüler unterrichten Senioren" },
        { key: "g", label: "Sport für den Rücken im Betrieb" },
        { key: "h", label: "Ein Haus für mehrere Generationen" },
        { key: "i", label: "Weniger Autos vor der Schule" },
        { key: "j", label: "Musik gegen die Stille" },
      ],
      blocks: [
        {
          id: "b1c-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Morgens standen vor der Grundschule in Bad Vilbel jeden Tag dreißig Autos in zweiter Reihe. Seit einem Jahr ist die Straße zwischen halb acht und neun für Autos gesperrt. Eltern halten an einer Haltestelle 300 Meter weiter, die Kinder gehen den Rest zu Fuß. Die Zahl der gefährlichen Situationen ist deutlich gesunken, und die meisten Eltern sagen inzwischen, dass ihre Kinder wacher im Unterricht ankommen.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "In einer Werkstatt in Bielefeld gibt es keine Abteilungsleiter mehr. Die 28 Beschäftigten entscheiden in einer wöchentlichen Runde selbst, wer welchen Auftrag übernimmt. Urlaub trägt jeder selbst ein; nur wenn zu wenige da wären, wird gesprochen. Die Inhaberin hält sich heraus. „Die Leute wissen besser als ich, wie viel Zeit ein Auftrag braucht“, sagt sie. Die Fehlerquote sei seitdem nicht gestiegen.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Zweimal im Monat kommen zehn ältere Damen und Herren in ein Gymnasium in Halle. Dort zeigen ihnen Schülerinnen und Schüler der zehnten Klasse, wie man Videoanrufe führt, Fahrkarten kauft oder Fotos verschickt. Die Jugendlichen bekommen dafür keine Note. „Am Anfang war ich nervös“, erzählt ein Schüler. „Aber es macht Spaß, wenn jemand plötzlich seine Enkel auf dem Bildschirm sieht.“",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Familie Reichert wohnt seit drei Jahren mit den Großeltern und einer befreundeten Familie in einem umgebauten Bauernhof. Jede Partei hat eine eigene Wohnung, Küche und Bad. Gemeinsam genutzt werden Waschraum, Garten und ein großer Raum für Feste. Streit gebe es selten, sagt Frau Reichert, aber Regeln seien nötig: „Wir haben alles aufgeschrieben — wer wann putzt, wer den Rasen mäht.“",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Wer alt genug für die Rente ist, muss nicht aufhören: In Deutschland arbeiten inzwischen über eine Million Menschen über 65 weiter. Die meisten tun es in Teilzeit und nicht nur wegen des Geldes. Eine Befragung zeigt: Für zwei Drittel sind Kontakte und eine feste Aufgabe der wichtigere Grund. Kritisch wird es dort, wo die Rente allein nicht reicht — das betrifft vor allem Frauen mit langen Familienpausen.",
              },
            ],
          },
          items: [
            {
              id: "b1c-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "i",
              explanation: "Maktab oldidagi ko‘cha mashinalar uchun yopildi.",
            },
            {
              id: "b1c-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "a",
              explanation: "Bo‘lim boshliqlari yo‘q — xodimlar o‘zi qaror qiladi.",
            },
            {
              id: "b1c-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "f",
              explanation: "O‘quvchilar keksalarga texnikani o‘rgatadi.",
            },
            {
              id: "b1c-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "h",
              explanation: "Bir uyda bir necha avlod birga yashaydi.",
            },
            {
              id: "b1c-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "b",
              explanation: "Pensiya yoshidagilar ishlashda davom etadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text und die Aufgaben 6 bis 10. Wählen Sie die richtige Lösung a, b oder c.",
      hint: "Javob variantlari matndagi so‘zlarni takrorlashi mumkin — mazmunga qarang.",
      blocks: [
        {
          id: "b1c-l2-b1",
          stimulus: {
            kind: "text",
            title: "Zwei Jahre auf dem Land",
            body: `Als Jana Prieß vor zwei Jahren ihre Stelle in einer Hamburger Agentur kündigte und in ein Dorf mit 600 Einwohnern zog, hielten ihre Freunde das für eine Phase. „Alle haben gesagt: In einem halben Jahr bist du zurück“, erzählt die 34-Jährige und lacht. Zurück ist sie bis heute nicht.

Ausschlaggebend war nicht die Sehnsucht nach Natur, sondern eine Rechnung. In Hamburg zahlte sie für 42 Quadratmeter 890 Euro. Für das Haus im Dorf zahlt sie mit ihrem Partner 620 Euro — bei fünf Zimmern und einem Garten. Ihre Arbeit als Grafikerin macht sie weiter, drei Kunden hat sie behalten, zwei neue kamen dazu.

Doch der Anfang war härter als gedacht. Der nächste Supermarkt ist sieben Kilometer entfernt, der Bus fährt dreimal am Tag. „Ohne Auto geht hier gar nichts. Das war für mich als Städterin eine Umstellung.“ Auch der Kontakt zu den Nachbarn brauchte Zeit: Erst als sie im zweiten Jahr beim Dorffest half, wurde sie richtig eingeladen.

Was sie überrascht hat, ist die Arbeitsdisziplin. „Zu Hause im Homeoffice, ohne Kollegen, muss man sich selbst organisieren. Ich brauche feste Zeiten, sonst arbeite ich bis abends um zehn.“

Ob sie für immer bleibt, weiß sie nicht. Ein Punkt macht ihr Sorgen: Die Grundschule im Nachbarort soll geschlossen werden. „Solange man keine Kinder hat, merkt man das nicht. Aber es ist ein Thema.“`,
          },
          items: [
            {
              id: "b1c-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Wie haben ihre Freunde auf den Umzug reagiert?",
              options: [
                { key: "a", label: "Sie hielten ihn für vorübergehend." },
                { key: "b", label: "Sie fanden ihn mutig." },
                { key: "c", label: "Sie sind mitgezogen." },
              ],
              correct: "a",
              explanation: "„In einem halben Jahr bist du zurück“ — vaqtinchalik deb o‘ylashgan.",
            },
            {
              id: "b1c-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Was war der Hauptgrund für den Umzug?",
              options: [
                { key: "a", label: "Die Nähe zur Natur" },
                { key: "b", label: "Die niedrigeren Wohnkosten" },
                { key: "c", label: "Eine neue Stelle" },
              ],
              correct: "b",
              explanation:
                "„nicht die Sehnsucht nach Natur, sondern eine Rechnung“ — 890 evro o‘rniga 620.",
            },
            {
              id: "b1c-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was war am Anfang schwierig?",
              options: [
                { key: "a", label: "Sie verlor ihre Kunden." },
                { key: "b", label: "Das Haus war zu klein." },
                { key: "c", label: "Ohne Auto kam sie kaum weiter." },
              ],
              correct: "c",
              explanation: "Do‘kon 7 km, avtobus kuniga uch marta.",
            },
            {
              id: "b1c-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Wie kam sie in Kontakt mit den Nachbarn?",
              options: [
                { key: "a", label: "Durch die Hilfe beim Dorffest" },
                { key: "b", label: "Durch ihre Arbeit" },
                { key: "c", label: "Durch den Bus" },
              ],
              correct: "a",
              explanation:
                "„Erst als sie im zweiten Jahr beim Dorffest half, wurde sie richtig eingeladen.“",
            },
            {
              id: "b1c-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was bereitet ihr Sorgen?",
              options: [
                { key: "a", label: "Die steigenden Mieten" },
                { key: "b", label: "Die mögliche Schließung der Grundschule" },
                { key: "c", label: "Der Verlust ihrer Kunden" },
              ],
              correct: "b",
              explanation: "„Die Grundschule im Nachbarort soll geschlossen werden.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 11 bis 20 und die Anzeigen a bis l. Welche Anzeige passt zu welcher Situation? Jede Anzeige kann nur einmal verwendet werden. Gibt es keine passende Anzeige, wählen Sie x.",
      hint: "Har vaziyatda hal qiluvchi shart bor: vaqt, narx, shart-sharoit.",
      bank: [
        { key: "a", label: "Sprachtandem Deutsch–Russisch" },
        { key: "b", label: "Kleiderreparatur & Änderungen" },
        { key: "c", label: "Winterdienst" },
        { key: "d", label: "Ferienjob im Lager" },
        { key: "e", label: "Musikschule: Klavier" },
        { key: "f", label: "Küche zu verschenken" },
        { key: "g", label: "Lauftreff für Anfänger" },
        { key: "h", label: "Hausaufgabenhilfe" },
        { key: "i", label: "Autowerkstatt: TÜV-Termine" },
        { key: "j", label: "Wohnung zur Zwischenmiete" },
        { key: "k", label: "Foto-Workshop" },
        { key: "l", label: "Second-Hand-Bücher" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1c-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Sprachtandem Deutsch–Russisch",
                body: "Ich (Deutsche, 29) möchte Russisch lernen und biete dafür Deutsch an. Einmal pro Woche, abends, in einem Café. Kostenlos.",
              },
              {
                key: "b",
                title: "Kleiderreparatur & Änderungen",
                body: "Hosen kürzen, Reißverschluss wechseln, Jacken enger machen. Abgabe Mo–Fr 9–18 Uhr, fertig meist in drei Tagen. Ab 8 €.",
              },
              {
                key: "c",
                title: "Winterdienst",
                body: "Wir räumen Schnee vor Ihrem Haus, auch früh morgens vor sieben. Vertrag für die ganze Saison, 25 € pro Monat.",
              },
              {
                key: "d",
                title: "Ferienjob im Lager",
                body: "Für Juli und August suchen wir Studierende ab 18 Jahren, Frühschicht 6–14 Uhr, 14 € pro Stunde. Keine Erfahrung nötig.",
              },
              {
                key: "e",
                title: "Musikschule: Klavier",
                body: "Einzelunterricht für Kinder und Erwachsene, 30 oder 45 Minuten pro Woche. Erste Stunde kostenlos, danach ab 25 €.",
              },
              {
                key: "f",
                title: "Küche zu verschenken",
                body: "Vollständige Einbauküche mit Herd und Spüle, 8 Jahre alt, guter Zustand. Abbau und Transport müssen Sie selbst organisieren.",
              },
              {
                key: "g",
                title: "Lauftreff für Anfänger",
                body: "Jeden Dienstag 18.30 Uhr am Stadtpark. Wir laufen langsam, niemand bleibt zurück. Kostenlos, ohne Anmeldung.",
              },
              {
                key: "h",
                title: "Hausaufgabenhilfe",
                body: "Betreuung für Schülerinnen und Schüler der Klassen 1 bis 6, Mo–Do 14–17 Uhr im Familienzentrum. 5 € pro Nachmittag.",
              },
              {
                key: "i",
                title: "Autowerkstatt: TÜV-Termine",
                body: "Hauptuntersuchung ohne lange Wartezeit, Termine auch samstags. Kleine Mängel reparieren wir direkt vor Ort.",
              },
              {
                key: "j",
                title: "Wohnung zur Zwischenmiete",
                body: "Möblierte Zweizimmerwohnung von Februar bis Juli zu vermieten, 540 € warm. Nur für den ganzen Zeitraum.",
              },
              {
                key: "k",
                title: "Foto-Workshop",
                body: "An zwei Samstagen lernen Sie die wichtigsten Einstellungen Ihrer Kamera. Für Anfänger, 79 € inklusive Material.",
              },
              {
                key: "l",
                title: "Second-Hand-Bücher",
                body: "Romane, Kinderbücher und Sachbücher ab 1 €. Geöffnet Mi und Sa 10–16 Uhr im Gemeindehaus.",
              },
            ],
          },
          items: [
            {
              id: "b1c-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre neue Hose ist zu lang und Sie können nicht nähen.",
              correct: "b",
              explanation: "„Hosen kürzen“ — kiyim tuzatish xizmati.",
            },
            {
              id: "b1c-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind Studentin und suchen für die Sommerferien eine bezahlte Arbeit.",
              correct: "d",
              explanation: "Iyul–avgust uchun talabalar qidirilyapti.",
            },
            {
              id: "b1c-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Sohn (8) kommt nachmittags allein nach Hause und schafft die Aufgaben nicht.",
              correct: "h",
              explanation: "1–6-sinflar uchun uy vazifasiga yordam.",
            },
            {
              id: "b1c-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten mit dem Laufen anfangen, trauen sich aber nicht allein.",
              correct: "g",
              explanation: "Boshlovchilar uchun guruh, „niemand bleibt zurück“.",
            },
            {
              id: "b1c-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Auto muss zur Hauptuntersuchung, aber Sie haben nur samstags Zeit.",
              correct: "i",
              explanation: "„Termine auch samstags“.",
            },
            {
              id: "b1c-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sprechen Russisch und möchten kostenlos Ihr Deutsch verbessern.",
              correct: "a",
              explanation: "Tandem: nemis tili evaziga rus tili, bepul.",
            },
            {
              id: "b1c-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie machen ein Praktikum von Februar bis Juli und brauchen so lange eine Wohnung.",
              correct: "j",
              explanation: "Fevraldan iyulgacha — aynan shu muddat.",
            },
            {
              id: "b1c-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind 70 und schaffen es im Winter nicht mehr, morgens den Gehweg frei zu machen.",
              correct: "c",
              explanation: "Qorni tozalash xizmati, ertalab yettidan oldin ham.",
            },
            {
              id: "b1c-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Tochter (11) möchte ein Instrument lernen und erst einmal ausprobieren.",
              correct: "e",
              explanation: "„Erste Stunde kostenlos“ — sinab ko‘rish mumkin.",
            },
            {
              id: "b1c-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen für Ihre Wohnung einen günstigen gebrauchten Kühlschrank.",
              correct: "x",
              explanation:
                "Oshxona bepul beriladi, lekin muzlatgich haqida hech narsa yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
