export interface Publication {
  year: string;
  title: string;
  publication: string;
  type: string;
  author?: string;
}

export const publications: Publication[] = [
  { year: "2003", title: "Architektur in Berlin, Jahrbuch 2003 — Wohnungsbau und Geschäftsentwicklung Pestalozzistraße 45–46", publication: "Architektur in Berlin", type: "Eigene Projekte" },
  { year: "1997", title: "Von der industriellen Vorfertigung zur orthopädischen Anfertigung — Genshagen", publication: "architektur aktuell", type: "Eigene Projekte" },
  { year: "1991", title: "Sporthalle der Stadt Fujisawa, Japan — Fumihiko Maki", publication: "Deutsche Bauzeitschrift", type: "Internationale Architektur" },
  { year: "1990", title: "Fährterminal Zeebrügge, Niederlande — Fumihiko Maki", publication: "Deutsche Bauzeitschrift", type: "Internationale Architektur" },
  { year: "1990", title: "Trennung des Jun Port Island Gebäudes in Kobe, Japan — Tadao Ando", publication: "Deutsche Bauzeitschrift", type: "Internationale Architektur" },
  { year: "1989", title: "Japanische Kunst in Central Point — Bruce Goff", publication: "Architektur Aktuell", type: "Internationale Architektur" },
  { year: "1989", title: "Museumspavillon für japanische Kunst in Los Angeles — Bruce Goff", publication: "Architektur und Technik", type: "Internationale Architektur" },
  { year: "1989", title: "Wenn die Form zum Ornament wird… ist dann die Funktion die Folge der Ästhetik?!", publication: "Architektur und Bau. Installation", type: "Theorie & Diskurs" },
  { year: "1989", title: "Museumspavillon für japanische Kunst in LA/USA — Bruce Goff", publication: "Deutsche Bauzeitschrift", type: "Internationale Architektur" },
  { year: "1987", title: "Ist die Funktion die Folge der Ästhetik?!", publication: "Architektur und Technik", type: "Theorie & Diskurs" },
  { year: "1987", title: "CAD — Die Hardware", publication: "Architektur und Bau. Installation", type: "Digitale Planung" },
  { year: "1987", title: "Energiestadt Davis", publication: "deutsche bauzeitung", type: "Ökologie & Stadt" },
  { year: "1987", title: "Die Treppe hinunter — Hochhausarchitektur", publication: "The Fifth Column", type: "Zukunft & Hochhaus" },
  { year: "1987", title: "CAD/D in der Architektur: die bessere Baukunst?", publication: "Architektur und Bau. Installation", type: "Digitale Planung" },
  { year: "1987", title: "Die Fahrradhauptstadt der USA", publication: "Aktuelles Bauen/Plan", type: "Ökologie & Stadt" },
  { year: "1986", title: "Die Vorliebe für Superlative", publication: "Allgemeine Bauzeitung", type: "Zukunft & Hochhaus" },
  { year: "1986", title: "Super Highrise — Eine neue Generation von Hochhäusern in den USA", publication: "Architect & Builder", type: "Zukunft & Hochhaus" },
  { year: "1986", title: "Super-Wolkenkratzer der Zukunft", publication: "The Futurist", type: "Zukunft & Hochhaus" },
  { year: "1986", title: "Super Highrise — Ein amerikanischer Traum: Der Tod der Stadt?", publication: "Architektur und Bau. Installation", type: "Zukunft & Hochhaus" },
  { year: "1986", title: "Das Chaos nicht automatisieren", publication: "Aktuelles Bauen/Plan", type: "Digitale Planung" },
  { year: "1986", title: "Eine neue Generation von Wolkenkratzern", publication: "Bauwelt", type: "Zukunft & Hochhaus" },
  { year: "1986", title: "Hoher Preis ist keine Garantie für Qualität", publication: "Aktuelles Bauen/Plan", type: "Digitale Planung" },
  { year: "1986", title: "Hochsaison", publication: "Aktuelles Bauen", type: "Zukunft & Hochhaus" },
  { year: "1985", title: "Höhenwahnsinn", publication: "Aktuelles Bauen/Plan", type: "Zukunft & Hochhaus" },
];

export const pubTypes = ["Alle", "Eigene Projekte", "Internationale Architektur", "Digitale Planung", "Ökologie & Stadt", "Zukunft & Hochhaus", "Theorie & Diskurs"];
