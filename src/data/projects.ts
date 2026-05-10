export interface Project {
  id: string;
  title: string;
  category: string[];
  location: string;
  year?: string;
  description: string;
  details: {
    staedtebau?: string;
    funktion?: string;
    konstruktion?: string;
    oekologie?: string;
    wirtschaftlichkeit?: string;
  };
  imageIndex: number;
}

export const projects: Project[] = [
  {
    id: "rheinblick",
    title: "Rheinblick Wohnen",
    category: ["Wohnen", "Berlin", "Neubau", "Energie / Ökologie"],
    location: "Neuwied, Rheinland",
    year: "2003",
    description:
      "Großzügige Wohnbebauung unmittelbar hinter dem Deich zwischen Deichstraße und Rheinstraße. Wellenartige Terrassen orientieren sich zum Rhein, Tiefgarage mit ebenerdiger Erschließung minimiert Hochwasserschäden. Die Trauflinie des Daches am Rhein zeichnet die Wellenlinien der Terrassen nach.",
    details: {
      staedtebau: "Städtebauliche Einfügung am Deich mit Blockstruktur, Nachbarschaftsbezug über Geschossigkeit",
      funktion: "Wohnen über Tiefgarage, Praxisräume als Remise im Hof, luxuriöse Rheinwohnungen mit Terrassen",
      konstruktion: "Zweispänner-Konzept, Stahlbetonbauweise mit Dachlandschaft",
      oekologie: "Hochwassersensible Planung, Regenwasserversickerung, extensive Dachbegrünung",
      wirtschaftlichkeit: "Ebenerdige Tiefgaragenerschließung spart Kosten, optimierte Grundrisse",
    },
    imageIndex: 0,
  },
  {
    id: "baerensteinstrasse",
    title: "Service-Wohnen mit medizinischer Versorgung",
    category: ["Pflege & Gesundheit", "Berlin", "Neubau", "Barrierefreiheit"],
    location: "Berlin-Marzahn",
    year: "2010",
    description:
      "11-geschossiger Wohnriegel in T-Form mit zweigeschossigen Gewerbeebenen für medizinische Nahversorgung. Betreutes Wohnen und Pflegewohnen mit maximaler städtebaulicher Dichte und Integration in die typische DDR-Wohnungsbauarchitektur. Alle Seniorenwohnungen barrierefrei.",
    details: {
      staedtebau: "Nachverdichtung in Großsiedlung, Dichte mit Abstandsflächen, Typenbezug zur DDR-Architektur",
      funktion: "Ebene -1: Nahversorgung, -2: Tiefgarage, +1/+2: Dienstleistungen, +3–6: betreutes Wohnen, +7–11: Pflegewohnen",
      konstruktion: "Nord-südlicher und west-östlicher Riegel, differenzierte Erschließung",
      oekologie: "Unversiegelte Zuwegungen für Regendurchlässigkeit",
      wirtschaftlichkeit: "Maximierte Dichte, differenzierte Zugänge, PKW-Erschließung und Feuerwehrumfahrung",
    },
    imageIndex: 1,
  },
  {
    id: "pestalozzi",
    title: "Loft-, Wohn- und Geschäftsbebauung Pestalozzistraße",
    category: ["Wohnen", "Berlin", "Neubau", "Energie / Ökologie"],
    location: "Berlin-Charlottenburg",
    year: "2002",
    description:
      "Siebengeschossiges Wohn- und Geschäftshaus mit zwei viergeschossigen Stadtvillen repariert eine städtebauliche Brache. Maisonetteartige Loftwohnungen mit zweigeschossigen Lufträumen, rot-bunt geflammter Kohlebrandklinker und ökologische Ausstattung mit Solarkollektoren und Regenwasserversickerung.",
    details: {
      staedtebau: "Stadtreparatur in der Charlottenburger Blockstruktur, Blockrandschließung",
      funktion: "Loftwohnungen mit Lufträumen, Stadtvillen als Zweispänner, Ladenflächen im Erdgeschoss",
      konstruktion: "Kalksandstein, Stahl-Glas-Brückengalerie, Ahorn-Holzbohlenstufen",
      oekologie: "Solarkollektoren, Brennwerttechnik, Regenwasserversickerung, formaldehydfreie Hölzer",
      wirtschaftlichkeit: "Gesundheitlich unbedenkliche Materialien, wirtschaftliche Bauweise",
    },
    imageIndex: 4,
  },
  {
    id: "genshagen",
    title: "Ausstellungshalle und Verwaltungszentrum Genshagen",
    category: ["Gewerbe & Industrie", "Deutschland", "Neubau", "Energie / Ökologie"],
    location: "Brandenburg Park Genshagen",
    year: "1994",
    description:
      "Bifunktionales Gebäude für einen Hersteller von Gebäudereinigungsprodukten: Ausstellungshalle, Verwaltung, Schulung und Lager. Transparenter Eingang, lichtdurchflutete Ausstellungsfläche. Vorfertigung der Stahlverbundbauweise spart 30 % gegenüber konventionellem Rohbau.",
    details: {
      staedtebau: "Maximale Grundstücksausnutzung im Gewerbegebiet, Orientierung zum Wald und zur Bundesstraße",
      funktion: "Getrennte aber erreichbare Lagerhalle und Verwaltung, Ausstellungsfläche mit Tageslicht",
      konstruktion: "Pfostenriegelkonstruktion, Stahlverbundbau, Leichtmetall-Wellbleche",
      oekologie: "Wasserschutzgebiet-Auflagen, energieeffiziente Bauweise",
      wirtschaftlichkeit: "30 % Einsparung durch Vorfertigung, hochwertige Ausbauten durch Einsparungen",
    },
    imageIndex: 3,
  },
  {
    id: "wien-buerohaus",
    title: "Büro- und Geschäftshaus Wien",
    category: ["Büro & Verwaltung", "International", "Neubau", "Energie / Ökologie"],
    location: "Wien, Österreich",
    year: "2005",
    description:
      "Urbaner Büro- und Geschäftsbau in zentraler Innenstadtlage mit Tiefgarage, doppelgeschossigem Foyer, 201 Stellplätzen und innovativem Klimakonzept mit Kapillarrohrmatten, Geothermie und adiabater Kühlung. Moderne Fassade orientiert sich an der historischen Nachbarschaft.",
    details: {
      staedtebau: "Blockvolumina-Harmonisierung, öffentliche Straßenraum-Erhaltung, Tiefgaragenverlegung ins Gebäude",
      funktion: "Foyer mit Lichthof, vier Aufzüge, Ladengeschäfte mit U-Bahn-Anbindung",
      konstruktion: "Naturstein-Sockel, sandfarbene Hauptfassade, drei 6 m tiefe Lichthöfe",
      oekologie: "Kapillarrohrmatten, Geothermie, freie/adiabate Kühlung, Wärmerückgewinnung, tageslichtabhängige Beleuchtung",
      wirtschaftlichkeit: "Effiziente Erschließung, optimiertes Klimakonzept mit niedrigen Vorlauftemperaturen",
    },
    imageIndex: 0,
  },
  {
    id: "kunsthalle-bremen",
    title: "Erweiterung Kunsthalle Bremen",
    category: ["Kultur & Öffentlichkeit", "Deutschland", "Neubau", "Energie / Ökologie"],
    location: "Bremen",
    year: "2008",
    description:
      "Museumserweiterung als räumlich differenzierte, energetisch durchdachte und denkmalbewusste Ergänzung. Mäandernder Rundgang zwischen Alt- und Neubau, helle Sichtbetonoberflächen, passives Energiekonzept mit Geothermie und natürlicher Querlüftung.",
    details: {
      staedtebau: "Maximale Gebäudefuge und Lichthof zwischen Alt- und Neubau, Sichtbezüge zur historischen Situation",
      funktion: "Verschiedene Raumhöhen für Ausstellungsvariabilität, abschließbare Installationen",
      konstruktion: "Selbstverdichtender weißer Sichtbeton, anthrazitfarbene Bodenflächen mit Edelstahlfugen",
      oekologie: "Kompakte passive Bauweise, Wärmepumpe, Geothermie, natürliche Querlüftung",
      wirtschaftlichkeit: "Materialität und Farben lehnen sich an historisches Gebäude an",
    },
    imageIndex: 2,
  },
  {
    id: "studinest-rostock",
    title: "Studentenwohnen Studinest Rostock",
    category: ["Wohnen", "Deutschland", "Neubau", "Energie / Ökologie"],
    location: "Rostock",
    year: "2015",
    description:
      "Gebäudeensemble für Studentenwohnen mit ästhetischer, technischer, funktionaler und ökologischer Qualität. Solitäre lösen die Blockstruktur auf, führen Grünflächen in das Plangebiet und ermöglichen öffentliche Verbindung. Hochdämmende Fassade mit mineralischer Dämmung.",
    details: {
      staedtebau: "Blockstruktur-Auflösung, Grünverbindung von Schröderstraße zu Wallanlagen, öffentliche Durchlässigkeit",
      funktion: "20 % Fensterflächen-Regelung, externe Sonnenschutzrollos, Brandschutzverglasung nach Norden",
      konstruktion: "Luftdichte tragende Konstruktion, 20 cm mineralische Dämmung, vorgehängte hinterlüftete Fassade",
      oekologie: "Hochdämmende Kunststofffenster, mineralische Fassadenplatten, passive Bauweise",
      wirtschaftlichkeit: "Regelbasierte Wohnarchitektur mit standardisierten Bauteilen",
    },
    imageIndex: 1,
  },
  {
    id: "wohndachkuben",
    title: "Wohndachkuben – Modulares Wohnen",
    category: ["Wohnen", "Berlin", "Neubau", "Low-Cost"],
    location: "Berlin-Reinickendorf",
    year: "2016",
    description:
      "Minimal-Wohnkuben für Studenten und Flüchtlinge als Ersatz für Zelt- und Sporthallenunterbringung. Vorfertigte Holzständer-Wohnkuben auf bestehenden Flachdächern. ca. 25.000 € Baukosten pro Person, Montage innerhalb von 3–5 Tagen pro Einheit. Nachverdichtung ohne Flächenverbrauch.",
    details: {
      staedtebau: "Nachverdichtung auf bestehenden Flachdächern, keine Ghettobildung, soziale Durchmischung",
      funktion: "Einheiten für 1–6 Personen, Einbaumöbel, Demontagemöglichkeit nach 15 Jahren",
      konstruktion: "Leichtbau-Holzständer, Verankerung an Brand- und Treppenhauswänden, Kranmontage",
      oekologie: "Aufgesattelte Terrassierung, Erschließungsgärten",
      wirtschaftlichkeit: "25.000 € Baukosten pro Person, ca. 150 € Kaltmiete, Abschreibungszyklus 15 Jahre",
    },
    imageIndex: 2,
  },
  {
    id: "roelckestrasse",
    title: "Wohnungsbau Roelckestraße",
    category: ["Wohnen", "Berlin", "Neubau", "Barrierefreiheit", "Low-Cost"],
    location: "Berlin-Pankow",
    year: "2012",
    description:
      "Preisgünstiger, teilweise barrierefreier Wohnungsbau als Baulückenschließung. Fünfgeschossiges Gebäude und eingeschossige Remise zur Arrondierung des Gartenbereichs. Hanfdämmung und Wärmedämmverbundsystem zur Kostenkontrolle.",
    details: {
      staedtebau: "Stadtreparatur durch Baulückenschließung, Gartenbereich-Arrondierung",
      funktion: "Erdgeschosswohnungen barrierefrei, Gemeinschaftsflächen für Müll, Fahrräder, Kinderwagen",
      konstruktion: "Fünfgeschossige Bauweise, fensterlose Brandwand gegen Gewerbegebiet",
      oekologie: "Hanfdämmung, Wärmedämmverbundsystem",
      wirtschaftlichkeit: "Beide Gebäude nicht unterkellert, erschwingliche Baumaterialien",
    },
    imageIndex: 3,
  },
  {
    id: "botschaft-wohnen",
    title: "Wohnen für Botschaftsbedienstete – Indische Botschaft",
    category: ["Wohnen", "Berlin", "Neubau"],
    location: "Berlin-Charlottenburg",
    year: "2006",
    description:
      "Repräsentatives Apartmenthaus für Botschaftsbedienstete mit kultursensiblem Design. Traditionelles indisches Ornament im Vordach, Split-Level-Apartments, extensive Dachbegrünung, Tiefgarage mit Schleuse. Alle Apartments mit Balkon, Terrasse oder Garten.",
    details: {
      staedtebau: "Solitär an der Baugrenze, Nachbarfluchten-Folge, Garten östlich",
      funktion: "Lobby, Erholungsraum, Fitnessräume, Split-Level-Apartments, Tiefgarage mit Schleuse",
      konstruktion: "Erkerfenster, rahmenlose Eckfenster, L-förmige Überdachung",
      oekologie: "Extensive Dachbegrünung, Kleinklimaverbesserung",
      wirtschaftlichkeit: "Repräsentatives Wohnen mit privatem Garten und Sicherheit",
    },
    imageIndex: 0,
  },
  {
    id: "duisburgerstrasse",
    title: "Wohn- und Geschäftshaus Duisburgerstraße",
    category: ["Wohnen", "Berlin", "Neubau", "Energie / Ökologie"],
    location: "Berlin-Wilmersdorf",
    year: "2004",
    description:
      "Umbau einer störenden Hochgarage zu einem siebengeschossigen Wohn- und Geschäftshaus. Die Straßenfassade schließt eine städtebauliche Brache und repariert die Blockstruktur. Helle Sandsteinfassade, Meranti-Fenster, Schiffsbohlen-Eichenparkett.",
    details: {
      staedtebau: "Stadtreparatur durch Blockrandschließung, Umwidmung der Hochgarage",
      funktion: "Gewerblich genutzte Erdgeschosse, neun großzügige Wohnungen, Penthouse mit über 3 m Deckenhöhe",
      konstruktion: "Heller Sandstein, Meranti-Fenster, Schiffsbohlen-Eichenparkett, eigens entworfene Leuchten",
      oekologie: "Balkonterrassen, natürliche Belichtung",
      wirtschaftlichkeit: "Umbau statt Abriss, Detailqualität als Wertsteigerung",
    },
    imageIndex: 4,
  },
  {
    id: "regensburg-klinik",
    title: "Erweiterung Forensische Kliniken Regensburg",
    category: ["Pflege & Gesundheit", "Deutschland", "Wettbewerb"],
    location: "Regensburg",
    year: "2014",
    description:
      "Erweiterung der städtischen Kliniken um eine Forensische Klinik. Zwei Finger-Riegel mit nördlichen Ausbuchtungen für Sichtbezüge, separate Entlass-Station, Besucher-Magistrale. Selbstverdichtender weißer Sichtbeton, passive Bauweise mit Geothermie und Solarkollektoren.",
    details: {
      staedtebau: "Riegelstruktur am Hang, Bezüge zu Nachbargebäuden, landschaftlich integrierte Fluchtbarriere",
      funktion: "Jugend- und Erwachsenenforensik getrennt, Cafeteria, Versorgung und Ergotherapie rückwärtig",
      konstruktion: "Selbstverdichtender weißer Sichtbeton, großzügige Lichtzonen, farblich akzentuierte Glaserker",
      oekologie: "Passive Bauweise, Hüllflächen-Bauteilkonditionierung, Wärmepumpe, Geothermie, Solarkollektoren",
      wirtschaftlichkeit: "Identitätsstiftende Magistrale, funktional lesbare Architektur",
    },
    imageIndex: 1,
  },
  {
    id: "korback-rathaus",
    title: "Rathaus Korbach",
    category: ["Büro & Verwaltung", "Deutschland", "Neubau", "Barrierefreiheit"],
    location: "Korbach, Hessen",
    year: "2009",
    description:
      "Zurückhaltende, stadtbildverträgliche Ergänzung des historischen Rathausensembles. Gefächerte Längsgliederung schafft Sichtachsen, erweiterter Rathausvorplatz für barrierefreie Erschließung und Events. Schlanke, durchlässige Baukörper.",
    details: {
      staedtebau: "Arrondierung des historischen Ensembles, Brunnenplatz-Erweiterung, historische Dachformen aufgegriffen",
      funktion: "Barrierefreie Erreichbarkeit, Feuerwehrzugang, Verbindungen zwischen Abteilungen",
      konstruktion: "Schlanke Baukörper, aufgebrochene Fluchtlinien, Sichtbezüge",
      oekologie: "Denkmalgerechte Materialität",
      wirtschaftlichkeit: "Platzsparende, zurückhaltende Lösung",
    },
    imageIndex: 2,
  },
  {
    id: "sporthalle-neukieritzsch",
    title: "Mehrzweckhalle Neukieritzsch",
    category: ["Bildung & Freizeit", "Deutschland", "Wettbewerb", "Barrierefreiheit"],
    location: "Neukieritzsch, Sachsen",
    year: "2011",
    description:
      "Mehrzweckhalle als riegelförmiges Bindeglied zwischen Freibad und Fußballplatz. Transparente Fassade, differenzierte Zugänge für alle Nutzergruppen, Gastronomie als Schnittstelle. 8 m hohes Vordach, Teilung der Halle möglich.",
    details: {
      staedtebau: "Bindeglied zwischen Sport-, Freizeit- und Stadträumen, Neubäume",
      funktion: "Haupt-/Personal-/Liefererschließung, Restaurant, Sauna, Squash, Kraftraum, Vereinszimmer",
      konstruktion: "Zwei Gebäudekörperschlitten, Foyer mit Luftraum bis Wandelgang",
      oekologie: "Natürliche Belichtung durch transparente Fassade",
      wirtschaftlichkeit: "Barrierefreiheit mit zwei Aufzügen, flexible Hallenteilung",
    },
    imageIndex: 3,
  },
  {
    id: "altbaumodernisierung",
    title: "Altbaumodernisierung Waldowstraße",
    category: ["Sanierung & Modernisierung", "Berlin", "Bestand"],
    location: "Berlin-Pankow",
    year: "2007",
    description:
      "Sorgfältige Bestandsertüchtigung eines Altbau-Vordereckhauses mit 16 Wohnungen und drei Gewerbeeinheiten. Ursprüngliche Balkone neu eingebaut, Dachgeschoss-Balkon zur Betonung der Ecksituation, Fassaden neu verputzt mit VWS-System.",
    details: {
      staedtebau: "Bestandserhalt im gewachsenen Wohnquartier",
      funktion: "Nur Badgrundrisse verändert, Fußbodenisolierungen erneuert, Deckenbalken kontrolliert",
      konstruktion: "VWS-System, Terrassen an Fachwerk-Giebel-Konstruktionen saniert",
      oekologie: "Energetische Fassadenertüchtigung",
      wirtschaftlichkeit: "Minimal notwendige Eingriffe, Wiederherstellung verlorener Elemente",
    },
    imageIndex: 4,
  },
];

export const categories = [
  "Alle",
  "Wohnen",
  "Pflege & Gesundheit",
  "Büro & Verwaltung",
  "Gewerbe & Industrie",
  "Bildung & Freizeit",
  "Kultur & Öffentlichkeit",
  "Sanierung & Modernisierung",
  "Wettbewerb",
  "Berlin",
  "Deutschland",
  "International",
  "Neubau",
  "Bestand",
  "Low-Cost",
  "Energie / Ökologie",
  "Barrierefreiheit",
];
