import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 * B1 dagi tuzilma, lekin matnlar uzunroq va mavhumroq:
 * gazeta maqolalari, statistika, jamiyat va kasb mavzulari.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      hint: "Sarlavha matnning asosiy fikrini bildiradi — bitta detalga qarab tanlamang.",
      bank: [
        { key: "a", label: "Erfahrene Kollegen als Wegweiser" },
        { key: "b", label: "Wenn die Innenstadt den Fußgängern gehört" },
        { key: "c", label: "Schlaf als Wettbewerbsvorteil" },
        { key: "d", label: "Museen entdecken die Nacht" },
        { key: "e", label: "Digitale Hilfe von Ehrenamtlichen" },
        { key: "f", label: "Handwerk sucht Nachwuchs" },
        { key: "g", label: "Wohnen und Arbeiten unter einem Dach" },
        { key: "h", label: "Sport auf Rezept" },
        { key: "i", label: "Zweite Karriere nach dem Studium" },
        { key: "j", label: "Weniger Lärm durch Tempolimit" },
      ],
      blocks: [
        {
          id: "b2l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Seit Anfang des Jahres begleitet in einem Maschinenbauunternehmen in Chemnitz jede neu eingestellte Fachkraft eine erfahrene Kollegin oder ein erfahrener Kollege — ein Jahr lang, mit festen Terminen alle zwei Wochen. Die Personalleitung hatte beobachtet, dass die meisten Kündigungen in den ersten zwölf Monaten erfolgten. Seit der Einführung des Programms ist die Zahl der frühen Kündigungen um mehr als die Hälfte zurückgegangen. Interessant ist ein Nebeneffekt: Auch die Mentorinnen und Mentoren bewerten ihre eigene Arbeit seitdem positiver.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Wer in Regensburg heute durch die Altstadt geht, hört vor allem Stimmen und Fahrradklingeln. Seit die Stadt den Autoverkehr zwischen zehn und zwanzig Uhr aus dem Zentrum verbannt hat, ist es dort deutlich ruhiger geworden. Einzelhändler hatten zunächst mit sinkenden Umsätzen gerechnet und protestiert. Eine Untersuchung der Universität zeigt nun: Die Zahl der Besucher ist gestiegen, allerdings bleiben sie länger und kaufen anders ein — mehr in kleinen Geschäften, weniger sperrige Waren.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Etwa 40 Ehrenamtliche, viele davon selbst über 60, helfen in Hamburger Stadtteilzentren beim Ausfüllen von Online-Formularen, beim Einrichten von Handys und bei Videotelefonaten mit der Familie. Die Nachfrage ist so groß, dass es an manchen Standorten Wartelisten gibt. „Es geht selten um Technik allein“, sagt eine Helferin. „Oft geht es darum, dass jemand Zeit hat und nicht mit den Augen rollt, wenn man dieselbe Frage zum dritten Mal stellt.“",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Immer mehr Ärztinnen und Ärzte verordnen Bewegung wie ein Medikament: zwölf Wochen Ausdauertraining bei Bluthochdruck, Krafttraining bei Rückenschmerzen. Die Krankenkassen beteiligen sich in vielen Fällen an den Kosten. Studien zeigen, dass regelmäßige Bewegung bei bestimmten Beschwerden ähnlich wirksam sein kann wie Tabletten. Kritisch bleibt die Umsetzung: Wer im Schichtdienst arbeitet oder zwei Kinder betreut, findet die empfohlenen drei Stunden pro Woche oft nicht.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Nach dem Bachelor in Kulturwissenschaften begann Lena Sorge eine Ausbildung zur Tischlerin — und ist damit kein Einzelfall. Bundesweit steigt die Zahl der Menschen mit Hochschulabschluss, die anschließend eine Lehre beginnen. Betriebe reagieren unterschiedlich: Manche freuen sich über gut ausgebildete Bewerber, andere fürchten, dass diese nach kurzer Zeit weiterziehen. Für Sorge war die Entscheidung eindeutig: „Ich wollte am Abend sehen, was ich den Tag über gemacht habe.“",
              },
            ],
          },
          items: [
            {
              id: "b2-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "a",
              explanation:
                "Yangi xodimlarga tajribali hamkasb biriktiriladi — mentorlik dasturi.",
            },
            {
              id: "b2-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "b",
              explanation:
                "Markazda avtomobil taqiqlangan, shahar piyodalarga tegishli bo‘lgan.",
            },
            {
              id: "b2-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "e",
              explanation:
                "Ko‘ngillilar raqamli masalalarda yordam beradi — „Digitale Hilfe von Ehrenamtlichen“.",
            },
            {
              id: "b2-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "h",
              explanation:
                "Shifokorlar harakatni dori kabi „retsept“ bilan tavsiya qiladi.",
            },
            {
              id: "b2-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "i",
              explanation:
                "Oliy ma’lumotdan keyin hunar o‘rganish — ikkinchi karyera yo‘li.",
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
      hint: "B2 da javob ko‘pincha to‘g‘ridan-to‘g‘ri aytilmaydi — xulosa chiqarish kerak.",
      blocks: [
        {
          id: "b2l2-b1",
          stimulus: {
            kind: "text",
            title: "Wem gehört die Stadt am Abend?",
            body: `Als die Stadt Mannheim vor drei Jahren beschloss, zwölf Plätze und Parks bis Mitternacht zu beleuchten und für Veranstaltungen freizugeben, war der Widerstand groß. Anwohnerinnen und Anwohner fürchteten Lärm, Müll und schlaflose Nächte. Heute gilt das Projekt in der Verwaltung als Erfolg — allerdings aus Gründen, die zu Beginn kaum jemand genannt hätte.

Der ursprüngliche Gedanke war wirtschaftlich: Gastronomie und Einzelhandel sollten von längeren Öffnungszeiten profitieren. Diese Erwartung hat sich nur teilweise erfüllt. Die Umsätze der Lokale rund um die Plätze stiegen zwar leicht, in zwei Fällen jedoch gar nicht. Deutlich verändert hat sich dagegen die Zusammensetzung der Besucher. Wo vorher fast ausschließlich junge Männer unterwegs waren, sind heute abends auch Familien, ältere Menschen und Frauen allein anzutreffen. Die Stadtsoziologin Anke Reuther, die das Projekt begleitet hat, erklärt das mit einem einfachen Mechanismus: „Sobald ein Ort belebt ist, fühlen sich mehr Menschen sicher, und je mehr Menschen kommen, desto sicherer wird er tatsächlich.“

Ganz ohne Konflikte lief es nicht. Im ersten Sommer gingen 214 Beschwerden bei der Stadt ein, die meisten wegen Musik nach 22 Uhr. Die Verwaltung reagierte, indem sie feste Zeiten für Lautsprecher festlegte und an jedem Platz zwei sogenannte Nachtmoderatoren einsetzte — Beschäftigte, die vermitteln, bevor die Polizei gerufen wird. Im zweiten Jahr sank die Zahl der Beschwerden auf 61.

Kritik kommt inzwischen aus einer anderen Richtung. Mehrere Initiativen weisen darauf hin, dass die belebten Plätze fast alle in der Innenstadt liegen, während in den Randbezirken abends weiterhin wenig stattfinde. „Man hat die Aufenthaltsqualität dort verbessert, wo sie ohnehin am höchsten war“, heißt es in einer Stellungnahme. Die Stadt hat angekündigt, in der nächsten Phase drei Standorte außerhalb des Zentrums einzubeziehen. Ob das Konzept dort ebenso funktioniert, ist offen: Die Erfahrung aus anderen Städten zeigt, dass belebte Nächte vor allem dort entstehen, wo tagsüber schon viele Menschen unterwegs sind.`,
          },
          items: [
            {
              id: "b2-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was war das ursprüngliche Ziel des Projekts?",
              options: [
                { key: "a", label: "Mehr Sicherheit auf den Plätzen" },
                {
                  key: "b",
                  label: "Höhere Einnahmen für Geschäfte und Lokale",
                },
                { key: "c", label: "Weniger Beschwerden von Anwohnern" },
              ],
              correct: "b",
              explanation:
                "„Der ursprüngliche Gedanke war wirtschaftlich“ — savdo va restoranlar foyda ko‘rishi kutilgan.",
            },
            {
              id: "b2-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Was sagt der Text über die wirtschaftlichen Ergebnisse?",
              options: [
                { key: "a", label: "Sie sind hinter den Erwartungen geblieben." },
                { key: "b", label: "Die Umsätze haben sich verdoppelt." },
                { key: "c", label: "Alle Lokale mussten schließen." },
              ],
              correct: "a",
              explanation:
                "Umidlar „nur teilweise“ oqlandi: o‘sish oz, ikki holatda umuman bo‘lmadi.",
            },
            {
              id: "b2-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Wie erklärt die Soziologin die Veränderung?",
              options: [
                {
                  key: "a",
                  label: "Durch mehr Polizei auf den Plätzen",
                },
                {
                  key: "b",
                  label: "Belebte Orte wirken sicherer und ziehen mehr Menschen an.",
                },
                {
                  key: "c",
                  label: "Durch günstigere Preise in der Gastronomie",
                },
              ],
              correct: "b",
              explanation:
                "„Sobald ein Ort belebt ist, fühlen sich mehr Menschen sicher …“ — o‘zaro kuchayuvchi jarayon.",
            },
            {
              id: "b2-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Wie ging die Stadt mit den Beschwerden um?",
              options: [
                {
                  key: "a",
                  label: "Sie schloss die Plätze nach 22 Uhr wieder.",
                },
                {
                  key: "b",
                  label: "Sie setzte auf Regeln und vermittelndes Personal.",
                },
                { key: "c", label: "Sie erhöhte die Zahl der Polizisten." },
              ],
              correct: "b",
              explanation:
                "Karnaylar uchun aniq vaqt belgilandi va „Nachtmoderatoren“ ishga qo‘yildi.",
            },
            {
              id: "b2-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Welche Kritik wird am Ende genannt?",
              options: [
                {
                  key: "a",
                  label: "Das Projekt kostet zu viel Geld.",
                },
                {
                  key: "b",
                  label: "Es verbessert vor allem Orte, die schon attraktiv waren.",
                },
                {
                  key: "c",
                  label: "Die Anwohner wurden nicht befragt.",
                },
              ],
              correct: "b",
              explanation:
                "„Man hat die Aufenthaltsqualität dort verbessert, wo sie ohnehin am höchsten war.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 11 bis 20 und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige kann nur einmal verwendet werden. Gibt es keine passende Anzeige, wählen Sie x.",
      hint: "Har vaziyatda bitta shart hal qiluvchi: vaqt, shakl (onlayn/oflayn), narx yoki shart-sharoit.",
      bank: [
        { key: "a", label: "Bewerbungscoaching" },
        { key: "b", label: "Coworking am Stadtrand" },
        { key: "c", label: "Business English kompakt" },
        { key: "d", label: "Steuerberatung für Selbstständige" },
        { key: "e", label: "Betriebliche Kinderbetreuung" },
        { key: "f", label: "Weiterbildung Projektmanagement" },
        { key: "g", label: "Fahrgemeinschaft Bremen–Hamburg" },
        { key: "h", label: "Werkstatt für Elektrogeräte" },
        { key: "i", label: "Ferienwohnung im Harz" },
        { key: "j", label: "Nachhilfe Physik (Oberstufe)" },
        { key: "k", label: "Umzugsunternehmen" },
        { key: "l", label: "Fotostudio für Firmenporträts" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Bewerbungscoaching",
                body: "Einzelberatung für Fach- und Führungskräfte: Unterlagen, Gehaltsverhandlung, Vorstellungsgespräch. Termine auch abends und online. 90 Minuten, 120 €.",
              },
              {
                key: "b",
                title: "Coworking am Stadtrand",
                body: "Feste Schreibtische ab 140 € im Monat, Tagesticket 15 €. Besprechungsraum, Drucker, Küche. Geöffnet Mo–Fr 7–21 Uhr, gute Anbindung mit dem Bus.",
              },
              {
                key: "c",
                title: "Business English kompakt",
                body: "Zwei Wochenenden, Niveau B2/C1: Präsentationen, Telefonate, E-Mails. Kleine Gruppen (max. 8). 380 €, inklusive Material.",
              },
              {
                key: "d",
                title: "Steuerberatung für Selbstständige",
                body: "Erstberatung kostenlos. Wir übernehmen Buchhaltung und Steuererklärung für Freiberufler und kleine Betriebe. Digitale Belegübergabe möglich.",
              },
              {
                key: "e",
                title: "Betriebliche Kinderbetreuung",
                body: "Ihre Firma sucht eine Lösung für Mitarbeitende mit Kindern? Wir bauen Betreuungsplätze im Unternehmen auf und übernehmen die Organisation.",
              },
              {
                key: "f",
                title: "Weiterbildung Projektmanagement",
                body: "Berufsbegleitend, sechs Monate, freitagabends und samstags. Mit anerkanntem Zertifikat. Förderung durch Bildungsgutschein möglich.",
              },
              {
                key: "g",
                title: "Fahrgemeinschaft Bremen–Hamburg",
                body: "Ich fahre montags früh nach Hamburg und donnerstags zurück. Ein Platz frei, 10 € pro Strecke, Abfahrt 6.15 Uhr ab Bremen Hauptbahnhof.",
              },
              {
                key: "h",
                title: "Werkstatt für Elektrogeräte",
                body: "Reparatur von Kaffeemaschinen, Staubsaugern und Küchengeräten. Kostenvoranschlag 15 €, wird bei Reparatur angerechnet. Mo–Sa.",
              },
              {
                key: "i",
                title: "Ferienwohnung im Harz",
                body: "70 m², zwei Schlafzimmer, WLAN, Waschmaschine. Ab 65 € pro Nacht, Haustiere erlaubt. Auch für längere Aufenthalte im Winter.",
              },
              {
                key: "j",
                title: "Nachhilfe Physik",
                body: "Physikstudentin unterstützt Schülerinnen und Schüler der Oberstufe, auch bei der Vorbereitung auf das Abitur. Online oder in Göttingen, 22 €/Stunde.",
              },
              {
                key: "k",
                title: "Umzugsunternehmen",
                body: "Komplettservice mit Verpackung, Möbelmontage und Entsorgung. Festpreisangebot nach kostenloser Besichtigung. Auch kurzfristig.",
              },
              {
                key: "l",
                title: "Fotostudio für Firmenporträts",
                body: "Einheitliche Mitarbeiterfotos für Website und Intranet — wir kommen in Ihr Unternehmen. Ab 20 Personen Sonderpreis.",
              },
            ],
          },
          items: [
            {
              id: "b2-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben sich selbstständig gemacht und wissen nicht, wie Sie Ihre Buchhaltung organisieren sollen.",
              correct: "d",
              explanation: "Mustaqil ishlovchilar uchun soliq maslahati.",
            },
            {
              id: "b2-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Firma möchte alle Mitarbeitenden für die neue Website fotografieren lassen.",
              correct: "l",
              explanation:
                "Studiya kompaniyaga kelib, bir xil uslubda portret suratga oladi.",
            },
            {
              id: "b2-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten Vollzeit und möchten nebenbei eine anerkannte Qualifikation im Projektmanagement erwerben.",
              correct: "f",
              explanation:
                "Ish bilan birga: juma kechqurun va shanba, sertifikat bilan.",
            },
            {
              id: "b2-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie bereiten sich auf ein Vorstellungsgespräch vor und möchten üben, über Ihr Gehalt zu sprechen.",
              correct: "a",
              explanation: "Kouchingda „Gehaltsverhandlung“ aynan mashq qilinadi.",
            },
            {
              id: "b2-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie brauchen nur an einzelnen Tagen einen ruhigen Arbeitsplatz außerhalb Ihrer Wohnung.",
              correct: "b",
              explanation: "Kunlik chipta 15 € — doimiy shartnoma shart emas.",
            },
            {
              id: "b2-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Sohn schreibt bald Abitur und hat große Schwierigkeiten in Physik.",
              correct: "j",
              explanation: "Yuqori sinf va abitur tayyorgarligi — fizika repetitori.",
            },
            {
              id: "b2-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Kaffeemaschine ist defekt, und Sie möchten vorher wissen, was die Reparatur kostet.",
              correct: "h",
              explanation:
                "„Kostenvoranschlag 15 €, wird bei Reparatur angerechnet“ — narx oldindan ma’lum.",
            },
            {
              id: "b2-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie beginnen eine Stelle in Hamburg, wohnen aber weiter in Bremen und suchen eine günstige Mitfahrmöglichkeit.",
              correct: "g",
              explanation: "Dushanba–payshanba Bremen–Gamburg qatnovi.",
            },
            {
              id: "b2-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten Ihr Englisch für Präsentationen und Telefonate verbessern, haben aber nur an Wochenenden Zeit.",
              correct: "c",
              explanation: "Ikki dam olish kunidagi kompakt Business English kursi.",
            },
            {
              id: "b2-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen für Ihr Team einen Raum mit Technik für eine zweitägige Konferenz mit 60 Gästen.",
              correct: "x",
              explanation:
                "60 kishilik konferensiya zali haqida e’lon yo‘q — Coworking’dagi kichik yig‘ilish xonasi bunga yetmaydi.",
            },
          ],
        },
      ],
    },
  ],
};
