import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 * Teil 1: 5 matn ↔ 10 sarlavha (har biri 5 ball)
 * Teil 2: uzun matn, 5 ta MC (har biri 5 ball)
 * Teil 3: 10 vaziyat ↔ 12 e'lon yoki x (har biri 2,5 ball)
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "Avval sarlavhalarni o‘qing. Har matnda asosiy fikrni toping — tafsilotlar chalg‘itadi.",
      bank: [
        { key: "a", label: "Wohnen ohne eigenes Auto" },
        { key: "b", label: "Wenn der Nachbar zum Kollegen wird" },
        { key: "c", label: "Sport im Büro — eine neue Idee" },
        { key: "d", label: "Alte Kleidung, neues Leben" },
        { key: "e", label: "Lernen, wann man will" },
        { key: "f", label: "Gemeinsam kochen gegen die Einsamkeit" },
        { key: "g", label: "Urlaub auf dem Bauernhof" },
        { key: "h", label: "Weniger Papier in den Schulen" },
        { key: "i", label: "Einkaufen ohne Verpackung" },
        { key: "j", label: "Wenn Großeltern mit anpacken" },
      ],
      blocks: [
        {
          id: "b1l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "In Freiburg gibt es ein Viertel, in dem fast niemand ein Auto besitzt. Wer hier einzieht, unterschreibt, dass er auf einen eigenen Wagen verzichtet. Dafür gibt es Busse alle fünf Minuten, ein Carsharing-Angebot und breite Radwege. Viele Bewohner sagen, dass sie das Auto nicht vermissen — im Gegenteil: Die Straßen seien ruhiger und die Kinder könnten draußen spielen.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Der Laden „ohne“ in Leipzig verkauft Nudeln, Reis und Waschmittel nur lose. Die Kundinnen und Kunden bringen ihre eigenen Gläser und Flaschen mit und füllen ab, wie viel sie brauchen. Inhaberin Nadine Kraus erklärt: „Am Anfang war es für viele ungewohnt. Heute kommen die Leute mit ganzen Taschen voller Behälter.“ Müll entsteht so gut wie keiner.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Zweimal in der Woche treffen sich in einem Kölner Gemeindehaus zwanzig Menschen zwischen 25 und 80 Jahren. Sie schneiden Gemüse, kochen zusammen und essen an einem langen Tisch. Die Idee kam von einer Studentin, die selbst neu in der Stadt war. „Es geht nicht ums Essen“, sagt sie. „Es geht darum, dass niemand allein am Abend sitzt.“",
              },
              {
                key: "4",
                title: "Text 4",
                body: "An einer Realschule in Bremen bekommen die Schülerinnen und Schüler seit einem Jahr keine Arbeitsblätter mehr aus Papier. Alle Aufgaben stehen auf einem Tablet, Hefte gibt es nur noch für Notizen. Die Schule spart dadurch jedes Jahr rund 200.000 Blatt. Nicht alle Lehrkräfte waren begeistert, aber inzwischen möchte kaum jemand zurück.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Aus alten Jeans werden Taschen, aus Hemden werden Kinderkleider: In einer kleinen Werkstatt in Dresden arbeiten fünf Schneiderinnen, die früher in einer Fabrik tätig waren. Die Kleidungsstücke, die sie verarbeiten, stammen aus Altkleidercontainern. Was zu kaputt ist, wird zu Putzlappen — weggeworfen wird fast nichts.",
              },
            ],
          },
          items: [
            {
              id: "b1-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "a",
              explanation:
                "Matn butun mahalla mashinasiz yashashi haqida — „Wohnen ohne eigenes Auto“.",
            },
            {
              id: "b1-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "i",
              explanation:
                "Mahsulotlar o‘ram (Verpackung) siz, o‘z idishi bilan sotib olinadi.",
            },
            {
              id: "b1-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "f",
              explanation:
                "Birga pishirish yolg‘izlikka qarshi: „niemand allein am Abend sitzt“.",
            },
            {
              id: "b1-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "h",
              explanation: "Maktabda qog‘oz o‘rniga planshet — kamroq qog‘oz.",
            },
            {
              id: "b1-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "d",
              explanation:
                "Eski kiyimdan yangi buyum tikiladi — „Alte Kleidung, neues Leben“.",
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
      hint: "Savollar matn tartibida keladi. Har javob uchun matndagi tayanch jumlani toping.",
      blocks: [
        {
          id: "b1l2-b1",
          stimulus: {
            kind: "text",
            title: "Vier Tage arbeiten, drei Tage frei",
            body: `Seit anderthalb Jahren arbeiten die 42 Mitarbeiterinnen und Mitarbeiter einer Softwarefirma in Kassel nur noch vier Tage pro Woche — bei gleichem Gehalt. Geschäftsführerin Ruth Aslan hatte die Idee, nachdem drei erfahrene Kollegen innerhalb weniger Monate gekündigt hatten. „Wir konnten nicht mehr Geld bieten als die großen Firmen in Frankfurt. Also mussten wir etwas anderes bieten: Zeit.“

Der Anfang war schwierig. In den ersten Wochen blieben Aufgaben liegen, und einige Kunden beschwerten sich, weil freitags niemand ans Telefon ging. Deshalb änderte das Team seine Arbeitsweise: Besprechungen dauern heute höchstens 30 Minuten, und E-Mails werden nur zweimal am Tag bearbeitet. „Wir haben gemerkt, wie viel Zeit wir vorher verloren haben“, sagt der Entwickler Milan Horvath.

Nach einem Jahr zog die Firma Bilanz. Der Umsatz war leicht gestiegen, die Zahl der Krankheitstage dagegen um fast ein Drittel gesunken. Trotzdem warnt Aslan davor, das Modell überall zu kopieren: „Bei uns funktioniert es, weil wir unsere Termine selbst planen können. In einem Krankenhaus oder in einem Restaurant wäre das etwas ganz anderes.“

Ganz ohne Nachteile ist die kurze Woche nicht. Wer Kinder hat, findet an vier langen Arbeitstagen manchmal kaum Zeit für die Familie. Zwei Mitarbeiterinnen arbeiten deshalb weiterhin fünf Tage, dafür mit kürzeren Tagen. „Das Wichtigste ist nicht die Vier-Tage-Woche“, sagt Aslan. „Das Wichtigste ist, dass die Leute selbst mitentscheiden.“`,
          },
          items: [
            {
              id: "b1-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Warum hat die Firma die Vier-Tage-Woche eingeführt?",
              options: [
                { key: "a", label: "Weil die Kunden es verlangt haben." },
                {
                  key: "b",
                  label: "Weil mehrere gute Mitarbeiter gekündigt hatten.",
                },
                { key: "c", label: "Weil es zu wenig Arbeit gab." },
              ],
              correct: "b",
              explanation:
                "Uch tajribali xodim ishdan bo‘shagach, firma pul o‘rniga „Zeit“ taklif qilishga qaror qildi.",
            },
            {
              id: "b1-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Was war am Anfang ein Problem?",
              options: [
                { key: "a", label: "Freitags war niemand erreichbar." },
                { key: "b", label: "Die Mitarbeiter wollten nicht mitmachen." },
                { key: "c", label: "Die Firma musste Gehälter kürzen." },
              ],
              correct: "a",
              explanation:
                "„einige Kunden beschwerten sich, weil freitags niemand ans Telefon ging“.",
            },
            {
              id: "b1-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Wie hat das Team seine Arbeit verändert?",
              options: [
                { key: "a", label: "Es arbeitet jetzt am Wochenende." },
                { key: "b", label: "Besprechungen und E-Mails wurden begrenzt." },
                { key: "c", label: "Es hat neue Mitarbeiter eingestellt." },
              ],
              correct: "b",
              explanation:
                "Yig‘ilishlar 30 daqiqadan oshmaydi, elektron xatlar kuniga ikki marta ko‘riladi.",
            },
            {
              id: "b1-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was zeigt die Bilanz nach einem Jahr?",
              options: [
                {
                  key: "a",
                  label: "Der Umsatz sank, aber die Stimmung war besser.",
                },
                {
                  key: "b",
                  label: "Umsatz und Krankheitstage blieben gleich.",
                },
                {
                  key: "c",
                  label: "Der Umsatz stieg leicht, die Krankheitstage sanken.",
                },
              ],
              correct: "c",
              explanation:
                "„Der Umsatz war leicht gestiegen, die Zahl der Krankheitstage … gesunken.“",
            },
            {
              id: "b1-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was sagt Ruth Aslan über andere Betriebe?",
              options: [
                {
                  key: "a",
                  label: "Jede Firma sollte das Modell übernehmen.",
                },
                {
                  key: "b",
                  label: "In manchen Bereichen ist das Modell schwer möglich.",
                },
                { key: "c", label: "Nur große Firmen können es sich leisten." },
              ],
              correct: "b",
              explanation:
                "Kasalxona yoki restoran misolida: u yerda „etwas ganz anderes“ — model har joyda ishlamaydi.",
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
      hint: "Har vaziyatda hal qiluvchi shart bor: vaqt, narx, joy yoki shart-sharoit.",
      bank: [
        { key: "a", label: "Nachhilfe Mathematik" },
        { key: "b", label: "Hundebetreuung Pfote" },
        { key: "c", label: "Möbel-Flohmarkt" },
        { key: "d", label: "Wohnungsübergabe & Reinigung" },
        { key: "e", label: "Gitarrenunterricht" },
        { key: "f", label: "Fahrgemeinschaft Kassel–Erfurt" },
        { key: "g", label: "Schwimmkurs für Erwachsene" },
        { key: "h", label: "Laptop-Reparatur am selben Tag" },
        { key: "i", label: "Bewerbungsfotos" },
        { key: "j", label: "Garten mieten" },
        { key: "k", label: "Kinderfahrrad abzugeben" },
        { key: "l", label: "Nähkurs für Anfänger" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Nachhilfe Mathematik",
                body: "Lehramtsstudentin (7. Semester) hilft Schülerinnen und Schülern der Klassen 5 bis 10. 15 € pro Stunde, bei mir zu Hause oder online. Auch in den Ferien.",
              },
              {
                key: "b",
                title: "Hundebetreuung Pfote",
                body: "Sie sind im Urlaub oder lange im Büro? Wir holen Ihren Hund ab und bringen ihn abends zurück. Auch am Wochenende. 18 € pro Tag.",
              },
              {
                key: "c",
                title: "Möbel-Flohmarkt",
                body: "Jeden ersten Samstag im Monat, 9–15 Uhr, Halle 3. Tische, Stühle, Schränke — gebraucht und günstig. Transport gegen Aufpreis möglich.",
              },
              {
                key: "d",
                title: "Wohnungsübergabe & Reinigung",
                body: "Wir reinigen Ihre Wohnung vor der Übergabe an den Vermieter: Fenster, Küche, Bad. Festpreis ab 180 €. Termine kurzfristig möglich.",
              },
              {
                key: "e",
                title: "Gitarrenunterricht",
                body: "Musiker mit 10 Jahren Erfahrung unterrichtet Anfänger, Dienstag bis Donnerstag ab 16 Uhr. Erste Stunde kostenlos. Instrument wird gestellt.",
              },
              {
                key: "f",
                title: "Fahrgemeinschaft Kassel–Erfurt",
                body: "Ich fahre jeden Freitag um 15 Uhr nach Erfurt und sonntags zurück. Zwei Plätze frei, 12 € pro Fahrt. Nichtraucher, gern auch mit Gepäck.",
              },
              {
                key: "g",
                title: "Schwimmkurs für Erwachsene",
                body: "Sie können nicht schwimmen? Kein Problem. Kleine Gruppen (max. 6 Personen), montags 19–20 Uhr, 10 Termine, 95 €.",
              },
              {
                key: "h",
                title: "Laptop-Reparatur",
                body: "Display, Akku, Tastatur — Reparatur meist am selben Tag. Kostenvoranschlag gratis. Mo–Sa 10–19 Uhr, Bahnhofstraße 4.",
              },
              {
                key: "i",
                title: "Bewerbungsfotos",
                body: "Professionelle Fotos für Ihre Bewerbung, in 20 Minuten fertig. Ohne Termin, Mo–Fr 9–18 Uhr. 39 € inklusive digitaler Dateien.",
              },
              {
                key: "j",
                title: "Garten mieten",
                body: "Kleiner Garten (200 m²) mit Wasseranschluss am Stadtrand zu vermieten, 40 € im Monat. Gartenhäuschen vorhanden, kein Übernachten erlaubt.",
              },
              {
                key: "k",
                title: "Kinderfahrrad abzugeben",
                body: "Fahrrad, 20 Zoll, für Kinder von 6 bis 9 Jahren, guter Zustand. Gegen eine kleine Spende an den Kindergarten abzugeben.",
              },
              {
                key: "l",
                title: "Nähkurs für Anfänger",
                body: "In vier Abenden lernen Sie, eine Tasche und ein Kissen zu nähen. Nähmaschinen sind vorhanden. Donnerstags 18–21 Uhr, 60 €.",
              },
            ],
          },
          items: [
            {
              id: "b1-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Tochter (13) schreibt in Mathematik nur schlechte Noten. Sie suchen jemanden, der regelmäßig mit ihr übt.",
              correct: "a",
              explanation: "5–10-sinflar uchun matematikadan repetitor.",
            },
            {
              id: "b1-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie ziehen aus Ihrer Wohnung aus und haben keine Zeit, sie selbst sauber zu machen.",
              correct: "d",
              explanation:
                "Uy egasiga topshirishdan oldingi tozalash xizmati — aynan shu holat.",
            },
            {
              id: "b1-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie brauchen für Ihre Bewerbung ein gutes Foto, haben aber erst morgen früh Zeit und wollen keinen Termin machen.",
              correct: "i",
              explanation: "„Ohne Termin, Mo–Fr 9–18 Uhr“ — navbatsiz.",
            },
            {
              id: "b1-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie fahren jedes Wochenende zu Ihrer Familie nach Erfurt und möchten Benzinkosten sparen.",
              correct: "f",
              explanation: "Har juma Erfurtga birga borish — 12 € dan.",
            },
            {
              id: "b1-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Laptop lässt sich nicht mehr aufladen und Sie brauchen ihn dringend für die Arbeit.",
              correct: "h",
              explanation: "„Akku … Reparatur meist am selben Tag“.",
            },
            {
              id: "b1-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind 34 und haben als Kind nie schwimmen gelernt. Jetzt möchten Sie es endlich lernen.",
              correct: "g",
              explanation: "Kattalar uchun suzish kursi, kichik guruhlarda.",
            },
            {
              id: "b1-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten oft bis 19 Uhr und wissen nicht, wer tagsüber mit Ihrem Hund spazieren geht.",
              correct: "b",
              explanation: "Itni ertalab olib ketib, kechqurun qaytaradi.",
            },
            {
              id: "b1-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Für Ihre neue Wohnung brauchen Sie einen Tisch und Stühle, möchten aber wenig Geld ausgeben.",
              correct: "c",
              explanation: "Ishlatilgan mebel bozori — arzon stol va stullar.",
            },
            {
              id: "b1-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten am Wochenende einen Deutschkurs für Ihren Mann finden, der samstags stattfindet.",
              correct: "x",
              explanation:
                "E’lonlar orasida nemis tili kursi umuman yo‘q — javob x.",
            },
            {
              id: "b1-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Sohn (7) hat Geburtstag und wünscht sich ein Fahrrad. Sie haben gerade wenig Geld.",
              correct: "k",
              explanation:
                "6–9 yosh uchun velosiped, kichik xayriya evaziga beriladi.",
            },
          ],
        },
      ],
    },
  ],
};
