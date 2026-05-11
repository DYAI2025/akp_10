import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MapPin, Calendar, ArrowRight, Mail, Phone, Send, ChevronUp, Filter, Ruler, HardHat, Lightbulb, Leaf, Shield, Users, Award, Building2, Wrench } from "lucide-react";
import { projects, categories } from "./data/projects";
import { publications, pubTypes } from "./data/publications";
import { vitaEntries, achievements } from "./data/vita";
import { partnerCategories } from "./data/partners";

// ── Navigation ──
const navItems = [
  { id: "hero", label: "Start" },
  { id: "philosophy", label: "Büro" },
  { id: "services", label: "Leistungen" },
  { id: "projects", label: "Projekte" },
  { id: "vita", label: "Geschichte" },
  { id: "publications", label: "Publikationen" },
  { id: "partners", label: "Netzwerk" },
  { id: "contact", label: "Kontakt" },
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("hero")} className="flex flex-col" aria-label="Zur Startsektion scrollen">
          <span className={`text-sm font-bold tracking-widest uppercase ${scrolled ? "text-gray-900" : "text-white"}`}>
            AKP
          </span>
          <span className={`text-[10px] tracking-wider uppercase ${scrolled ? "text-gray-500" : "text-white/70"}`}>
            Architekten Kauschke + Partner
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs tracking-widest uppercase hover:opacity-60 transition-opacity ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className={`w-5 h-5 ${scrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-navigation" className="lg:hidden bg-white border-t">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-6 py-4 text-sm tracking-widest uppercase text-gray-700 border-b border-gray-100 hover:bg-gray-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-architecture.jpg"
          alt="AKP Architekten - Moderne Wohnbebauung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase">Seit 1991 · Berlin</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8">
            Architektur als
            <br />
            <span className="font-normal">verantwortlicher Prozess</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            Vom städtebaulichen Kontext über wirtschaftliche Konstruktion und technische Ausführung
            bis zur langfristigen Nutzbarkeit. Seit 1991 begleiten wir Bauherren durch alle
            Leistungsphasen.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 bg-white text-gray-900 px-8 py-4 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Projekte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {[
              { label: "Jahre Erfahrung", value: "30+" },
              { label: "Projekte realisiert", value: "50+" },
              { label: "Leistungsphasen", value: "1–9" },
              { label: "Typologien", value: "8+" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-light text-white">{s.value}</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}

// ── Philosophy ──
function Philosophy() {
  const principles = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Kontext statt Stilvorgabe",
      text: "Es gibt keine materialdogmatische Architekturhaltung. Die Lösung ergibt sich aus Ort, Funktion, Wirtschaftlichkeit und Bauherrenziel.",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      title: "Wirtschaftlichkeit als Entwurfsfaktor",
      text: "Kostenminimierung durch Vorfertigung, intelligente Haustechnik und bewährte Konstruktionen — ohne Abstriche bei der Qualität.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Technische Planungssicherheit",
      text: "CAD, 3D-Datentransfer, AVA und digitale Planung sind historisch im Büro verankert und bilden die Basis für präzise Umsetzung.",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Stadtreparatur",
      text: "Baulückenschließung, Arrondierung, Blockrandschließung und behutsame Stadterneuerung — bestehende Stadt weiterbauen.",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Ökologie als Maßgabe",
      text: "Solarkollektoren, Geothermie, Regenwasserversickerung, begrünte Dächer — ökologische Maßnahmen werden projektbezogen und wirtschaftlich integriert.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Generalplanerkompetenz",
      text: "Vom Entwurf bis zur Schlüsselübergabe: vollständige Betreuung aller neun Leistungsphasen mit eingespieltem Fachplanernetzwerk.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-900" />
            <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Büro & Haltung</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-2xl">
            Architektur, die städtebaulichen Kontext, wirtschaftliche Realisierbarkeit und technische Planungssicherheit zusammenführt.
          </h2>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {principles.map((p, i) => (
            <div key={i} className="bg-white p-8 md:p-10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 group-hover:text-gray-900 group-hover:border-gray-900 transition-colors">
                  {p.icon}
                </div>
                <span className="text-gray-300 text-xs font-mono">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 bg-gray-50 border-l-2 border-gray-900">
          <blockquote className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            „Wir planen keine Stilarchitektur. Wir entwickeln Gebäude aus dem Ort, der Aufgabe und dem Budget — mit technischer Präzision und städtebaulicher Verantwortung."
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-gray-400" />
            <span className="text-gray-400 text-sm">Hans-Gerhard Kauschke, Gründer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──
function Services() {
  const services = [
    {
      phase: "1–3",
      title: "Entwurf & Vorplanung",
      items: ["Grundstücksanalyse", "Städtebauliches Konzept", "Entwurfsplanung", "Genehmigungsplanung"],
    },
    {
      phase: "4–6",
      title: "Ausführung & Ausschreibung",
      items: ["Ausführungsplanung", "Ausschreibung", "Vergabe", "Kostenermittlung"],
    },
    {
      phase: "7–9",
      title: "Bauleitung & Übergabe",
      items: ["Bauleitung", "Abrechnung", "Schlüsselübergabe", "Gewährleistung"],
    },
  ];

  const consulting = [
    { icon: <HardHat className="w-5 h-5" />, title: "Generalplanung", desc: "Vollständige Betreuung aller Leistungsphasen vom Entwurf bis zur Schlüsselübergabe." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Energieberatung", desc: "Energieausweise, Green-Building-Konzepte, integrale Planung zwischen Architektur und Haustechnik." },
    { icon: <Ruler className="w-5 h-5" />, title: "Stadtplanung", desc: "Städtebauliche Konzepte, Baulückenschließung, Nachverdichtung, Blockrandschließung." },
    { icon: <Wrench className="w-5 h-5" />, title: "Sanierung & Modernisierung", desc: "Altbaumodernisierung, Dachausbau, Bestandsertüchtigung, energetische Sanierung." },
    { icon: <Shield className="w-5 h-5" />, title: "Bauherrenvertretung", desc: "Unabhängige Interessenvertretung, optimiertes Preis-Leistungs-Verhältnis, Baufirmenauswahl." },
    { icon: <Award className="w-5 h-5" />, title: "Wettbewerbsbeiträge", desc: "Konzeptionelle und konzeptionell-wettbewerbliche Beiträge für öffentliche und private Bauherren." },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-900" />
            <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Leistungen</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-2xl">
            Von der ersten Analyse bis zur Schlüsselübergabe
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
            AKP bietet vollständige konzeptionelle, inhaltliche, finanzielle und technische
            Architekten-, Generalplaner-, Ingenieur- und Stadtplanungsleistungen.
          </p>
        </div>

        {/* Leistungsphasen */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100">
              <div className="text-3xl font-light text-gray-200 mb-2">§ {s.phase}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Beratungsfelder */}
        <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">Beratungsfelder</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {consulting.map((c, i) => (
            <div key={i} className="bg-white p-8">
              <div className="text-gray-300 mb-4">{c.icon}</div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">{c.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Typologien */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">Projekttypologien</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Wohnungsbau", "Hotelbau", "Ferienanlagen", "Kindergärten", "Schulen",
              "Studentenwohnen", "Seniorenwohnen", "Gesundheits- & Pflegebauten",
              "Sakralbauten", "Verwaltungsbauten", "Gewerbebauten", "Industriebauten",
              "Sanierung", "Modernisierung", "Restaurierung",
            ].map((t, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Projects ──
function Projects() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const filtered = activeCategory === "Alle"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  const projectImages = [
    "/images/hero-architecture.jpg",
    "/images/project-residential.jpg",
    "/images/project-cultural.jpg",
    "/images/project-commercial.jpg",
    "/images/project-office.jpg",
    "/images/project-healthcare.jpg",
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-900" />
            <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
            Ausgewählte Projekte
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-xs tracking-wider uppercase text-gray-400">Filter</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="text-left group border border-gray-100 hover:border-gray-300 transition-all bg-white"
              aria-label={`Projektdetails öffnen: ${project.title}`}
            >
              <div className="h-48 md:h-56 relative overflow-hidden">
                <img
                  src={projectImages[project.imageIndex]}
                  alt={`${project.title} in ${project.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{project.location}</span>
                  {project.year && (
                    <>
                      <span className="text-gray-300">·</span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </>
                  )}
                </div>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.category.slice(0, 3).map((cat, i) => (
                    <span key={i} className="text-[10px] tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-1">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Project count */}
        <div className="mt-8 text-center">
          <span className="text-sm text-gray-400">
            {filtered.length} {filtered.length === 1 ? "Projekt" : "Projekte"} gefunden
          </span>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 pt-20" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description">
          <div
            className="bg-white max-w-3xl w-full mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
              <span className="text-xs tracking-wider uppercase text-gray-400">Projektdetail</span>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-gray-100" aria-label="Projektdetails schließen">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <img
              src={projectImages[selectedProject.imageIndex]}
              alt={`${selectedProject.title} in ${selectedProject.location}`}
              className="h-48 md:h-64 w-full object-cover"
            />

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {selectedProject.location}
                </span>
                {selectedProject.year && (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {selectedProject.year}
                  </span>
                )}
              </div>

              <h2 id="project-dialog-title" className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                {selectedProject.title}
              </h2>

              <p id="project-dialog-description" className="text-gray-600 leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* Detail tabs */}
              <div className="space-y-4">
                {Object.entries(selectedProject.details).map(([key, value]) => (
                  <div key={key} className="border-t border-gray-100 pt-4">
                    <h4 className="text-xs tracking-wider uppercase text-gray-400 mb-2">{key}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {selectedProject.category.map((cat, i) => (
                  <span key={i} className="text-[10px] tracking-wider uppercase text-gray-500 bg-gray-100 px-3 py-1">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Vita / Timeline ──
function Vita() {
  return (
    <section id="vita" className="py-24 md:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-white/40" />
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Geschichte</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Über 30 Jahre Planungserfahrung
          </h2>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {achievements.map((a, i) => (
            <div key={i} className="bg-white/5 p-6 border border-white/10">
              <div className="text-3xl font-light">{a.value}</div>
              <div className="text-white/40 text-xs tracking-wider uppercase mt-1">{a.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {vitaEntries.map((entry, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row mb-12 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-2 h-2 bg-white/60 rounded-full -translate-x-[3px] md:-translate-x-1 mt-6" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className="text-xs tracking-wider uppercase text-white/30">{entry.period}</span>
                <h3 className="text-lg font-medium mt-2 mb-2">{entry.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Publications ──
function Publications() {
  const [activeType, setActiveType] = useState("Alle");
  const filtered = activeType === "Alle"
    ? publications
    : publications.filter((p) => p.type === activeType);

  return (
    <section id="publications" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-900" />
            <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Publikationen</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-2xl">
            Fachdiskurs & Expertise
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
            Mehr als 27 Veröffentlichungen in deutsch- und englischsprachiger Fachpresse
            über Architektur, Theorie, Ökologie und Computereinsatz im Planungsalltag.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {pubTypes.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all ${
                activeType === t
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
              aria-pressed={activeType === t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-px">
          {filtered.map((pub, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-5 border-b border-gray-100 group">
              <span className="text-xs text-gray-300 font-mono w-16 shrink-0">{pub.year}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {pub.title}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[10px] tracking-wider uppercase text-gray-400 bg-gray-50 px-3 py-1">
                  {pub.type}
                </span>
                <span className="text-xs text-gray-300">{pub.publication}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Partners ──
function Partners() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section id="partners" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-900" />
            <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Netzwerk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-2xl">
            Unser Planungsnetzwerk
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
            Komplexe Bauaufgaben werden mit eingespielten Fachpartnern aus Tragwerksplanung,
            Technischer Ausrüstung, Brandschutz, Vermessung, Landschaftsplanung und Energieberatung gesteuert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {partnerCategories.map((cat, i) => (
            <div key={i} className="bg-white border border-gray-100">
              <button
                onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openCategory === cat.name}
                aria-controls={`partner-category-${i}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-xs font-mono">0{i + 1}</span>
                  <h3 className="text-sm font-medium text-gray-900">{cat.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">{cat.partners.length} Partner</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openCategory === cat.name ? "rotate-180" : ""}`} />
                </div>
              </button>
              {openCategory === cat.name && (
                <div id={`partner-category-${i}`} className="px-6 pb-6 pt-0">
                  <ul className="space-y-2">
                    {cat.partners.map((p, j) => (
                      <li key={j} className="text-sm text-gray-500 leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ─
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", location: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gray-900" />
              <span className="text-gray-400 text-xs tracking-[0.3em] uppercase">Kontakt</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight mb-8">
              Projekt besprechen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12">
              Ob Neubau, Sanierung oder Wettbewerbsbeitrag — sprechen Sie uns an.
              Wir beraten Sie in allen Leistungsphasen von der ersten Idee bis zur Schlüsselübergabe.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Adresse</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Hohenzollerndamm 12<br />
                    10717 Berlin-Wilmersdorf
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Telefon</div>
                  <div className="text-sm text-gray-500 mt-1">+49 (0)30 862 20-51</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-gray-900">E-Mail</div>
                  <div className="text-sm text-gray-500 mt-1">info@architekten-kauschke.de</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center">
                <div className="text-green-700 font-medium mb-2">Nachricht gesendet</div>
                <div className="text-green-600 text-sm">Wir melden uns in Kürze bei Ihnen.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">E-Mail *</label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="Ihre E-Mail"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">Telefon</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="Telefonnummer"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">Projekttyp</label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white"
                    >
                      <option value="">Auswählen…</option>
                      <option>Wohnungsbau</option>
                      <option>Pflege & Gesundheit</option>
                      <option>Büro & Verwaltung</option>
                      <option>Gewerbe & Industrie</option>
                      <option>Sanierung & Modernisierung</option>
                      <option>Wettbewerb</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">Ort des Projekts</label>
                  <input
                    id="contact-location"
                    name="location"
                    autoComplete="address-level2"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="Stadt / Region"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs tracking-wider uppercase text-gray-400 mb-2">Nachricht *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none"
                    placeholder="Beschreiben Sie Ihr Vorhaben…"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors w-full md:w-auto justify-center"
                >
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-sm font-bold tracking-widest uppercase mb-2">AKP</div>
            <div className="text-xs text-white/40 tracking-wider uppercase">
              Architekten Kauschke + Partner
            </div>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Planungssicherheit, Stadtreparatur, Bauherrenvertretung, Kostenbewusstsein
              und jahrzehntelange Erfahrung.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-wider uppercase text-white/40 mb-4">Kontakt</div>
            <div className="text-sm text-white/60 space-y-2">
              <div>Hohenzollerndamm 12</div>
              <div>10717 Berlin-Wilmersdorf</div>
              <div className="pt-2">+49 (0)30 862 20-51</div>
              <div>info@architekten-kauschke.de</div>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-wider uppercase text-white/40 mb-4">Rechtliches</div>
            <div className="text-sm text-white/40 space-y-2">
              <div>Architektenkammer-Nr. 06750</div>
              <div>Inhaltlich verantwortlich gemäß §10 Abs. 3 MDStV:</div>
              <div>Dipl.-Ing. Hans-Gerhard Kauschke</div>
              <div className="pt-2">© 1991–2025 AKP Architekten Kauschke + Partner</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20">© 2025 AKP Architekten Kauschke + Partner</span>
          <div className="flex items-center gap-6">
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors">Impressum</button>
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors">Datenschutz</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Scroll to top ──
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
      aria-label="Nach oben scrollen"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}

// ── App ──
export default function App() {
  return (
    <div className="antialiased">
      <Navigation />
      <Hero />
      <Philosophy />
      <Services />
      <Projects />
      <Vita />
      <Publications />
      <Partners />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
