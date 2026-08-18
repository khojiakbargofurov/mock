import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 05 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Wenn das Handy im Unterricht bleibt" },
        { key: "b", label: "Ein Laden nur für Reste" },
        { key: "c", label: "Weniger Papier in der Arztpraxis" },
        { key: "d", label: "Wohnen für Hilfe" },
        { key: "e", label: "Sport in der Mittagspause" },
        { key: "f", label: "Wenn Rentner unterrichten" },
        { key: "g", label: "Ein Bad für das ganze Viertel" },
        { key: "h", label: "Fahrräder statt Lieferwagen" },
        { key: "i", label: "Gemeinsam gegen die Einsamkeit" },
        { key: "j", label: "Urlaub ohne Flugzeug" },
      ],
      blocks: [
        {
          id: "b1e-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "In einem Laden in Bremen gibt es nur Lebensmittel, die woanders nicht mehr verkauft werden dürfen: Joghurt kurz vor dem Ablaufdatum, Möhren mit ungewöhnlicher Form, Kartons mit kleinen Schäden. Die Preise liegen 30 bis 60 Prozent unter denen im Supermarkt. Anfangs kamen vor allem Studierende. Inzwischen, sagt die Betreiberin, sei die Kundschaft ganz gemischt — „das Thema ist in der Mitte angekommen“.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Studierende wohnen mietfrei bei älteren Menschen und helfen dafür im Haushalt oder im Garten. Die Regel lautet: eine Stunde Hilfe pro Quadratmeter und Monat. Wichtig sei ein klarer Vertrag, sagt die Koordinatorin einer Vermittlungsstelle: Pflege gehöre ausdrücklich nicht dazu. Gelingt das Zusammenleben, profitieren beide Seiten — nicht nur finanziell, sondern auch gegen die Einsamkeit im Alter.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Ein Paketdienst in Freiburg liefert die Innenstadt seit zwei Jahren ausschließlich mit Lastenrädern aus. Die Pakete kommen morgens per Lkw an einen Umschlagpunkt am Stadtrand; von dort übernehmen sechs Fahrerinnen und Fahrer. Die Zustellung ist nach Angaben der Firma nicht teurer geworden, weil Parkplatzsuche und Bußgelder wegfallen. Bei Regen allerdings dauert alles deutlich länger.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "An einer Gesamtschule in Kiel unterrichten seit einem Jahr acht Ruheständlerinnen und Ruheständler einzelne Stunden: eine ehemalige Ingenieurin Mathematik, ein früherer Journalist Deutsch. Sie ersetzen keine Lehrkräfte, sondern übernehmen Förderstunden in kleinen Gruppen. Die Schulleitung ist zufrieden, warnt aber vor zu großen Erwartungen: Der Einsatz sei freiwillig und lasse sich nicht planen wie ein Stundenplan.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Immer mehr Menschen verzichten bewusst auf Flugreisen. Eine Befragung zeigt: Für 41 Prozent ist der Preis der Hauptgrund, für 28 Prozent das Klima, für den Rest die Bequemlichkeit — Nachtzüge und Fernbusse sind besser geworden. Reisebüros berichten von steigender Nachfrage nach Zielen in Deutschland und den Nachbarländern. Die Reisen dauern länger, werden aber häufig auch länger gebucht.",
              },
            ],
          },
          items: [
            {
              id: "b1e-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "b",
              explanation: "Faqat sotilmaydigan mahsulotlar sotiladigan do‘kon.",
            },
            {
              id: "b1e-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "d",
              explanation: "Yordam evaziga bepul yashash.",
            },
            {
              id: "b1e-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "h",
              explanation: "Yuk mashinasi o‘rniga yuk velosipedlari.",
            },
            {
              id: "b1e-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "f",
              explanation: "Pensionerlar maktabda dars beradi.",
            },
            {
              id: "b1e-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "j",
              explanation: "Samolyotsiz sayohat qilish tendensiyasi.",
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
      blocks: [
        {
          id: "b1e-l2-b1",
          stimulus: {
            kind: "text",
            title: "Ein Jahr Schichtdienst — und dann?",
            body: `Als Melanie Ruf vor sechs Jahren in der Pflege anfing, war ihr klar, dass es keine Nine-to-five-Stelle wird. „Ich wusste, dass ich Wochenenden arbeite. Was ich unterschätzt habe, war der Wechsel.“ Früh, spät, wieder früh — der Körper komme nie zur Ruhe.

Nach vier Jahren stellte sie einen Antrag: nur noch Frühdienst, dafür weniger Stunden. Die Stationsleitung lehnte zunächst ab, weil sonst zu wenige für den Spätdienst blieben. Erst als zwei Kolleginnen kündigten, kam Bewegung in die Sache. Heute arbeitet Ruf 30 Stunden, ausschließlich früh.

Finanziell war das ein Einschnitt: Die Zuschläge für Nacht- und Wochenendarbeit fallen weg, dazu die geringere Stundenzahl. „Unterm Strich sind es 500 Euro weniger im Monat. Das muss man sich leisten können — und viele können es nicht.“

Was sie überrascht hat: Ihre Beschwerden verschwanden schneller als gedacht. Nach drei Monaten schlief sie wieder durch, die Kopfschmerzen wurden seltener.

Ruf plädiert deshalb dafür, das Thema früher anzusprechen. „Viele halten durch, bis der Arzt sie krankschreibt. Dann ist es teuer — für alle. Ein Gespräch nach zwei Jahren wäre billiger als eine Kündigung nach acht.“`,
          },
          items: [
            {
              id: "b1e-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was hat Melanie Ruf am Anfang unterschätzt?",
              options: [
                { key: "a", label: "Die Arbeit am Wochenende" },
                { key: "b", label: "Den ständigen Schichtwechsel" },
                { key: "c", label: "Die schwere körperliche Arbeit" },
              ],
              correct: "b",
              explanation: "„Was ich unterschätzt habe, war der Wechsel.“",
            },
            {
              id: "b1e-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Warum wurde ihr Antrag zuerst abgelehnt?",
              options: [
                { key: "a", label: "Weil sie zu kurz im Betrieb war." },
                { key: "b", label: "Weil dann zu wenige für den Spätdienst da wären." },
                { key: "c", label: "Weil sie keine Begründung hatte." },
              ],
              correct: "b",
              explanation: "„weil sonst zu wenige für den Spätdienst blieben“.",
            },
            {
              id: "b1e-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was änderte die Situation?",
              options: [
                { key: "a", label: "Die Kündigung von zwei Kolleginnen" },
                { key: "b", label: "Ein Attest vom Arzt" },
                { key: "c", label: "Ein neuer Chef" },
              ],
              correct: "a",
              explanation: "„Erst als zwei Kolleginnen kündigten, kam Bewegung in die Sache.“",
            },
            {
              id: "b1e-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was sagt sie über das Geld?",
              options: [
                { key: "a", label: "Sie verdient etwa gleich viel." },
                { key: "b", label: "Sie verdient deutlich weniger." },
                { key: "c", label: "Sie verdient mehr als vorher." },
              ],
              correct: "b",
              explanation: "„Unterm Strich sind es 500 Euro weniger im Monat.“",
            },
            {
              id: "b1e-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wofür plädiert sie?",
              options: [
                { key: "a", label: "Für frühere Gespräche über die Belastung" },
                { key: "b", label: "Für höhere Zuschläge" },
                { key: "c", label: "Für die Abschaffung des Schichtdienstes" },
              ],
              correct: "a",
              explanation:
                "„Ein Gespräch nach zwei Jahren wäre billiger als eine Kündigung nach acht.“",
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
      bank: [
        { key: "a", label: "Babysitter-Vermittlung" },
        { key: "b", label: "Bewerbungsfotos & Beratung" },
        { key: "c", label: "Chorprobe: neue Stimmen" },
        { key: "d", label: "Entrümpelung von Kellern" },
        { key: "e", label: "Ferienbetreuung im Zoo" },
        { key: "f", label: "Gartenhilfe gegen Gemüse" },
        { key: "g", label: "Handy-Vertragsberatung" },
        { key: "h", label: "Kochkurs: schnelle Küche" },
        { key: "i", label: "Laufband & Fitness zu Hause" },
        { key: "j", label: "Sprachkurs am Wochenende" },
        { key: "k", label: "Tauschring im Viertel" },
        { key: "l", label: "Winterreifen: Montage" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1e-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Babysitter-Vermittlung",
                body: "Wir vermitteln geprüfte Betreuungspersonen, auch kurzfristig und abends. Vermittlungsgebühr 25 €, Stundenlohn nach Absprache.",
              },
              {
                key: "b",
                title: "Bewerbungsfotos & Beratung",
                body: "Professionelle Fotos plus eine halbe Stunde Beratung zu Ihren Unterlagen. 75 €, Termine auch samstags.",
              },
              {
                key: "c",
                title: "Chorprobe: neue Stimmen",
                body: "Unser Chor probt donnerstags 19–21 Uhr und sucht Sängerinnen und Sänger. Vorkenntnisse nicht nötig, drei Proben zum Ausprobieren gratis.",
              },
              {
                key: "d",
                title: "Entrümpelung von Kellern",
                body: "Wir räumen Keller und Dachböden, entsorgen fachgerecht und fegen aus. Pauschale ab 180 €, Termin innerhalb einer Woche.",
              },
              {
                key: "e",
                title: "Ferienbetreuung im Zoo",
                body: "Eine Woche Ferienprogramm für Kinder von 7 bis 12 Jahren, täglich 9–15 Uhr, mit Tierpflegern unterwegs. 120 € pro Woche.",
              },
              {
                key: "f",
                title: "Gartenhilfe gegen Gemüse",
                body: "Ich habe einen großen Garten, aber wenig Zeit. Wer mithilft, bekommt einen Teil der Ernte. Kein Geld, nur Gemüse.",
              },
              {
                key: "g",
                title: "Handy-Vertragsberatung",
                body: "Wir vergleichen Ihren Tarif mit aktuellen Angeboten und kündigen auf Wunsch. Beratung 15 €, unabhängig von Anbietern.",
              },
              {
                key: "h",
                title: "Kochkurs: schnelle Küche",
                body: "Vier Abende, jeweils drei Gerichte in unter 30 Minuten. Dienstags 18–21 Uhr, 95 € inklusive Zutaten.",
              },
              {
                key: "i",
                title: "Laufband & Fitness zu Hause",
                body: "Gebrauchtes Laufband, zwei Jahre alt, kaum benutzt. 250 €, nur Abholung — es wiegt 90 Kilo.",
              },
              {
                key: "j",
                title: "Sprachkurs am Wochenende",
                body: "Deutsch B1 kompakt, samstags 9–14 Uhr, zehn Termine, 240 €. Für Berufstätige mit Schichtdienst geeignet.",
              },
              {
                key: "k",
                title: "Tauschring im Viertel",
                body: "Sie können nähen, jemand anderes kann Fahrräder reparieren: Wir tauschen Leistungen ohne Geld. Treffen jeden ersten Montag.",
              },
              {
                key: "l",
                title: "Winterreifen: Montage",
                body: "Montage und Auswuchten in 45 Minuten, ohne Termin. Mo–Sa 8–18 Uhr, 45 € für vier Räder.",
              },
            ],
          },
          items: [
            {
              id: "b1e-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten im Schichtdienst und können nur am Wochenende einen Kurs besuchen.",
              correct: "j",
              explanation: "„Für Berufstätige mit Schichtdienst geeignet“ — shanba kunlari.",
            },
            {
              id: "b1e-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie zahlen seit Jahren viel für Ihr Handy und wissen nicht, ob der Tarif noch passt.",
              correct: "g",
              explanation: "Mustaqil tarif maslahati.",
            },
            {
              id: "b1e-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie kommen abends spät von der Arbeit und kochen deshalb fast nie selbst.",
              correct: "h",
              explanation: "30 daqiqadan kam vaqtda tayyorlanadigan taomlar kursi.",
            },
            {
              id: "b1e-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie brauchen für Ihre Bewerbung ein Foto und möchten auch Ihre Unterlagen prüfen lassen.",
              correct: "b",
              explanation: "Surat + hujjatlar bo‘yicha maslahat.",
            },
            {
              id: "b1e-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In den Sommerferien arbeiten Sie und suchen ein Programm für Ihren Sohn (9).",
              correct: "e",
              explanation: "7–12 yosh uchun bir haftalik ta’til dasturi.",
            },
            {
              id: "b1e-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Keller ist voll mit alten Möbeln und Sie haben kein Auto für die Entsorgung.",
              correct: "d",
              explanation: "Yerto‘lani bo‘shatish va chiqindini olib ketish.",
            },
            {
              id: "b1e-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie können gut nähen und würden gern etwas dafür bekommen — aber Geld ist Ihnen nicht wichtig.",
              correct: "k",
              explanation: "Pulsiz xizmat almashinuvi halqasi.",
            },
            {
              id: "b1e-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie singen gern, haben aber nie in einem Chor gesungen und möchten es erst testen.",
              correct: "c",
              explanation: "„drei Proben zum Ausprobieren gratis“.",
            },
            {
              id: "b1e-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie brauchen am Donnerstagabend kurzfristig jemanden für Ihre Tochter (3).",
              correct: "a",
              explanation: "„auch kurzfristig und abends“ — enaga vositachiligi.",
            },
            {
              id: "b1e-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen eine günstige Wohnung für sich und Ihre Familie.",
              correct: "x",
              explanation: "E’lonlar orasida kvartira taklifi yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
