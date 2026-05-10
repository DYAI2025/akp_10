export interface VitaEntry {
  year: string;
  period: string;
  title: string;
  description: string;
  type: "education" | "career" | "international" | "digital";
}

export const vitaEntries: VitaEntry[] = [
  {
    year: "1991–",
    period: "Seit 1991",
    title: "Gründung AKP Architekten Kauschke + Partner",
    description:
      "Führung eines Architekturbüros in Berlin. Planung von Wohnungs-, Hotel-, Gesundheits-, Pflege-, Sakral-, Verwaltungs-, Gewerbe- und Industriebauten im Neubau, Modernisierung, Sanierung und Restaurierung in Berlin, Deutschland und international.",
    type: "career",
  },
  {
    year: "2003",
    period: "2003",
    title: "Nominierung zum DEUBAU-Preis",
    description: "Das Büro wurde 2003 zum DEUBAU-Preis nominiert.",
    type: "career",
  },
  {
    year: "1991–1994",
    period: "1991–1994",
    title: "Architektenpartnerschaft mit Assoziationsbüro London",
    description:
      "Führung einer Architektenpartnerschaft mit zwei Partnern und 2 bis 8 Mitarbeitern in Berlin sowie Assoziationsbüro aus London. Projekte in Wohnungsbau, Verwaltungs- und Schulbau sowie Gewerbe- und Industriebau.",
    type: "career",
  },
  {
    year: "1990–1991",
    period: "Bis Dez. 1991",
    title: "Dozent Akademie Media Design",
    description:
      "Dozent für arbeitslose Akademiker aus den neuen Bundesländern. Vermittlung von Computerkenntnissen im Entwurfs- und Ausführungsbereich, Integration von Computernetzen.",
    type: "digital",
  },
  {
    year: "1990–1991",
    period: "Bis Dez. 1990",
    title: "Freischaffender Architekt — International",
    description:
      "Berlin, Bremen, Düsseldorf, Frankfurt und Tokyo. Akquisitions-, Computer-, Entwurfs- und Präsentationsberatung. Bearbeitung HOAI §15 Phase 1–3 für ein 7.000 m² und ein 87.000 m² großes Verwaltungsgebäude mit JSK Frankfurt. Beratung für Tokyo, Hong Kong, Singapur, Sydney, Auckland und Bangkok.",
    type: "international",
  },
  {
    year: "1987–1989",
    period: "Bis Apr. 1989",
    title: "Architekt in San Francisco — CAD-Integration",
    description:
      "Integration eines CAD-Systems und Aufbau einer elektronischen Detailbibliothek für ein Einkaufszentrum in San Pablo, Kalifornien. Ausführungspläne für weiteres Einkaufszentrum in Irvine, Kalifornien. Referenz: Wurster, Bernardi and Emmons.",
    type: "international",
  },
  {
    year: "1986–1988",
    period: "Bis Sep. 1988",
    title: "Projektmanagement San Francisco — Kanada-Projekte",
    description:
      "Projektmanagement, Vorentwurf und Präsentation für 11 Einfamilienhäuser in Vancouver, BC, Kanada. Mitarbeit an Mischstrukturprojekt in Oakland mit 119 Sozialbauwohnungen. Referenz: Donald MacDonald Architects, FAIA.",
    type: "international",
  },
  {
    year: "1983",
    period: "Aug. 1983",
    title: "Dipl.-Ing. / Master — Gesamtnote sehr gut",
    description: "Universität / Hochschule der Künste Berlin.",
    type: "education",
  },
  {
    year: "1980",
    period: "März 1980",
    title: "Werkarchitekt / Bachelor — Gesamtnote sehr gut",
    description: "Universität / Hochschule der Künste Berlin.",
    type: "education",
  },
  {
    year: "1977–1983",
    period: "Bis Aug. 1983",
    title: "Studentische Mitarbeit & Tutor",
    description:
      "Studentische Mitarbeit in Berliner Architekturbüros und Tutor für Prof. Axel Busch an der HdK Berlin.",
    type: "education",
  },
];

export const achievements = [
  { label: "Wettbewerbe", value: "21" },
  { label: "1. Preise", value: "2" },
  { label: "Ankäufe", value: "1" },
  { label: "Ausstellungen", value: "2" },
  { label: "DEUBAU-Nominierung", value: "1" },
  { label: "Veröffentlichungen", value: "27+" },
  { label: "Jahre Erfahrung", value: "30+" },
  { label: "Projekte realisiert", value: "50+" },
];
