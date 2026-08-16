import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Projets", href: "#projets" },
  { label: "Journal", href: "#journal" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "MLD Swiss",
    services: ["Identité", "Développement"],
    year: "2026",
    className: "project-sand",
    imagePosition: "50% 54%",
  },
  {
    name: "Nomade",
    services: ["Web design", "Développement"],
    year: "2026",
    className: "project-petrol",
    imagePosition: "68% 48%",
  },
  {
    name: "Ligne 42",
    services: ["Design", "Référencement"],
    year: "2026",
    className: "project-ember",
    imagePosition: "34% 56%",
  },
];

const services = [
  {
    title: "Site vitrine monopage",
    priceLabel: "À partir de",
    price: "1 000 € TTC",
    description: [
      "Une page unique, moderne et structurée pour présenter votre activité, vos services et transformer rapidement les visiteurs en demandes de contact.",
      "Le site est responsive, rapide et préparé pour le SEO local afin que vos futurs clients vous trouvent facilement dans votre zone.",
    ],
    imagePosition: "48% 50%",
  },
  {
    title: "Site vitrine multipage",
    priceLabel: "À partir de",
    price: "1 500 € TTC",
    description: [
      "Un site moderne composé d’une page principale et de 1 à 5 pages supplémentaires pour organiser clairement votre activité : prestations, réalisations, à propos ou contact.",
      "La navigation, la vitesse, le responsive et les bases du SEO local sont travaillés ensemble pour informer, rassurer et être trouvé localement.",
    ],
    imagePosition: "64% 48%",
  },
  {
    title: "Site vitrine signature",
    priceLabel: "À partir de",
    price: "2 500 € TTC",
    description: [
      "Une expérience web haut de gamme de 1 à 5 pages, conçue après une recherche approfondie de votre activité, de vos clients et de votre univers visuel.",
      "Design exclusif, animations premium et interactions sur mesure : un site que personne d’autre n’aura, rapide, responsive et pensé pour mettre votre savoir-faire en valeur tout en renforçant votre visibilité locale.",
    ],
    imagePosition: "50% 56%",
  },
  {
    title: "Fiche Google Business",
    priceLabel: "Tarif",
    price: "200 € TTC",
    description: [
      "Création et optimisation de votre fiche Google avec les bonnes catégories, vos services, vos coordonnées, votre zone d’intervention et une présentation claire.",
      "Une base complète pour apparaître plus efficacement dans Google Maps et dans les recherches locales liées à votre activité.",
    ],
    imagePosition: "34% 52%",
  },
  {
    title: "Maintenance & hébergement",
    priceLabel: "Abonnement",
    price: "39 € TTC / mois",
    description: [
      "Hébergement, surveillance technique et maintenance courante pour conserver un site rapide, disponible et correctement mis à jour.",
      "Jusqu’à trois demandes de modification par mois, d’une heure maximum chacune, pour changer vos textes ou images et importer de nouveaux visuels.",
    ],
    imagePosition: "72% 50%",
  },
];

const clientReviews = [
  {
    id: "sophie",
    quote: "Nous avons lancé le site en deux semaines et obtenu nos premiers clients dès la troisième. D’autres agences prenaient des mois pour livrer deux fois moins.",
    name: "Sophie Andersen",
    role: "Cofondatrice",
    note: "Les résultats parlent d’eux-mêmes. Le nouveau site présente enfin notre activité avec la clarté et la précision que nous recherchions.",
    image: "/assets/client-sophie.jpg",
  },
  {
    id: "julien",
    quote: "Le site nous ressemble vraiment. Il est rapide, lisible et nos demandes de devis sont aujourd’hui beaucoup plus qualifiées.",
    name: "Julien Morel",
    role: "Fondateur — Atelier Morel",
    note: "Une collaboration directe et structurée, depuis la recherche du design jusqu’à la mise en ligne.",
    image: "/assets/client-julien.jpg",
  },
  {
    id: "claire",
    quote: "Notre positionnement est devenu évident dès la première visite. Le site valorise notre savoir-faire sans en faire trop.",
    name: "Claire Dumas",
    role: "Dirigeante — Studio Dumas",
    note: "Le résultat est singulier, simple à utiliser et parfaitement cohérent sur mobile comme sur ordinateur.",
    image: "/assets/client-claire.jpg",
  },
];

const faqItems = [
  {
    question: "Quelle formule choisir pour mon activité ?",
    answer:
      "Le monopage convient à une offre concise, le multipage permet de détailler plusieurs services et la formule Signature crée une expérience entièrement sur mesure. Nous validons ensemble le format le plus pertinent selon vos objectifs, vos contenus et votre budget.",
  },
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "En général, comptez 1 à 2 semaines pour un monopage, 2 à 4 semaines pour un multipage et 4 à 6 semaines pour un site Signature. Le délai dépend surtout du volume de contenu, des fonctionnalités et de la rapidité des retours.",
  },
  {
    question: "Le référencement local est-il inclus ?",
    answer:
      "Oui. Chaque site bénéficie de bases SEO locales solides : structure claire, balises essentielles, contenu orienté vers votre zone d’activité, responsive et performance. La fiche Google Business peut compléter ce travail pour renforcer votre présence dans Google Maps.",
  },
  {
    question: "Que comprend la création d’une fiche Google ?",
    answer:
      "La prestation comprend la configuration des informations principales, des catégories, services, horaires, coordonnées, zone d’intervention et visuels. La fiche est optimisée pour présenter clairement votre activité, et vous en restez pleinement propriétaire.",
  },
  {
    question: "Mon site sera-t-il rapide et responsive ?",
    answer:
      "Oui. Chaque interface est adaptée aux mobiles, tablettes et ordinateurs. Les images, le code et les animations sont optimisés afin de conserver une navigation fluide, un chargement rapide et une expérience cohérente sur chaque écran.",
  },
  {
    question: "Comment fonctionnent la maintenance et l’hébergement ?",
    answer:
      "L’abonnement à 39 € TTC par mois comprend l’hébergement, la surveillance technique, la maintenance courante et jusqu’à trois demandes de modification par mois, d’une heure maximum chacune, pour vos textes, images ou nouveaux visuels.",
  },
];

const pricingPlans = [
  {
    name: "Essentiel",
    description: "Un site monopage moderne, clair et prêt à présenter votre activité.",
    price: "1 000 €",
    suffix: "TTC",
  },
  {
    name: "Multipage",
    description: "Plus d’espace pour détailler vos services et développer votre visibilité.",
    price: "1 500 €",
    suffix: "TTC",
  },
  {
    name: "Signature",
    description: "Une expérience premium, recherchée et entièrement conçue sur mesure.",
    price: "2 500 €",
    suffix: "TTC",
  },
];

const pricingFeatures = [
  { label: "Format du site", values: ["Monopage", "Multipage", "Sur mesure"] },
  { label: "Nombre de pages", values: ["1 page", "2 à 6 pages", "1 à 5 pages"] },
  { label: "Design moderne", values: ["Inclus", "Inclus", "Inclus"] },
  { label: "Recherche créative", values: ["Essentielle", "Personnalisée", "Direction complète"], info: "Analyse de votre activité, de vos clients et recherche d’une direction visuelle adaptée." },
  { label: "Responsive", values: ["Inclus", "Inclus", "Inclus"] },
  { label: "Performance", values: ["Optimisée", "Optimisée", "Avancée"] },
  { label: "SEO local", values: ["Bases incluses", "Bases incluses", "Avancé"], info: "Structure, balises et contenu préparés pour renforcer votre visibilité dans votre zone." },
  { label: "Animations", values: ["Fluides", "Avancées", "Premium"] },
  { label: "Délai indicatif", values: ["1–2 semaines", "2–4 semaines", "4–6 semaines"] },
  { label: "Fiche Google Business", values: ["+ 200 € TTC", "+ 200 € TTC", "+ 200 € TTC"] },
  { label: "Maintenance & hébergement", values: ["39 € / mois", "39 € / mois", "39 € / mois"] },
];

const newsArticles = [
  {
    title: "Combien coûte un site internet professionnel à Roanne en 2026 ?",
    date: "16 août 2026",
    dateTime: "2026-08-16",
    href: "/blog/prix-site-internet-roanne",
    image: "/assets/hero.png",
    imagePosition: "50% 52%",
    variant: "portrait",
  },
  {
    title: "Comment apparaître sur Google Maps à Roanne avec une fiche optimisée ?",
    date: "8 août 2026",
    dateTime: "2026-08-08",
    href: "/blog/google-maps-roanne-fiche-optimisee",
    image: "/assets/client-sophie.jpg",
    imagePosition: "50% 66%",
    variant: "feature",
  },
  {
    title: "Monopage ou multipage : que choisir dans la Loire ?",
    date: "29 juil. 2026",
    dateTime: "2026-07-29",
    href: "/blog/site-monopage-multipage-loire",
    image: "/assets/client-sophie.jpg",
    imagePosition: "50% 36%",
    variant: "tall",
  },
  {
    title: "7 erreurs qui empêchent votre site d’être trouvé à Roanne et ses environs",
    date: "18 juil. 2026",
    dateTime: "2026-07-18",
    href: "/blog/erreurs-seo-local-roanne",
    image: "/assets/pricing-portrait.jpg",
    imagePosition: "50% 38%",
    variant: "landscape",
  },
];

function Brand() {
  return (
    <a className="brand" href="#accueil" aria-label="MLD, accueil">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-name">MLD.</span>
    </a>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-identity">
        <Brand />
        <span className="header-divider" aria-hidden="true">|</span>
        <p className="header-tagline">Studio design & développement, pour des sites qui convertissent.</p>
      </div>

      <nav className="desktop-nav" aria-label="Navigation principale">
        {navItems.map((item, index) => (
          <span className="nav-item" key={item.label}>
            <a href={item.href}>{item.label}</a>
            {index < navItems.length - 1 && <i aria-hidden="true">/</i>}
          </span>
        ))}
      </nav>

      <a className="project-cta" href="#contact">
        <span>Démarrer un projet</span>
        <span aria-hidden="true">Démarrer un projet</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Navigation mobile">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              <small>0{index + 1}</small>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="mobile-project-link" href="#contact" onClick={() => setMenuOpen(false)}>
          Démarrer un projet <span>↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main id="accueil" className="hero">
      <img className="hero-image" src="/assets/hero.png" alt="Ordinateur en aluminium posé sur un bloc de pierre noire" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="hero-axis-lines" aria-hidden="true">
        <i className="axis-v-top" />
        <i className="axis-v-bottom" />
        <i className="axis-h-left" />
        <i className="axis-h-right" />
      </div>

      <section className="hero-frame" aria-labelledby="hero-title">
        <i className="corner-marker marker-top-left" aria-hidden="true" />
        <i className="corner-marker marker-top-right" aria-hidden="true" />
        <i className="corner-marker marker-bottom-left" aria-hidden="true" />
        <i className="corner-marker marker-bottom-right" aria-hidden="true" />

        <div className="hero-frame-content">

        <p className="version">(2026 — Version 1.0.2)</p>

        <div className="title-wrap">
          <p className="hero-brand-title" aria-label="MLD. Studio">
            <span className="title-main">MLD.</span>
            <span className="title-studio">Studio</span>
          </p>
        </div>

        <div className="hero-copy">
          <p>
            Nous réunissons <strong>stratégie, design et ingénierie</strong> dans une seule boucle
            <strong> haute performance</strong>. <strong>Votre vision</strong>, exécutée avec
            <strong> précision</strong> et pensée d’abord pour la <strong>conversion</strong>.
          </p>
        </div>

        <div className="profile">
          <span className="profile-avatar" aria-hidden="true">ML</span>
          <p><strong>Maxime Lagraa</strong><br />Designer & développeur</p>
        </div>

        <h1 id="hero-title" className="hero-seo-title">Création de site internet à Roanne.</h1>

        <div className="disciplines" aria-label="Nos expertises">
          <span>Design</span>
          <i>/</i>
          <span>Développement</span>
          <i>/</i>
          <span>Marketing</span>
        </div>
        </div>
      </section>

      <div className="hero-signature" aria-label="Site signature">
        <span>SITE</span>
        <em>signature.</em>
      </div>

      <div className="local-time">
        <span>Heure locale :</span>
        <time>Paris — 13:30</time>
      </div>

    </main>
  );
}

function StrategySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.18 },
    );

    observer.observe(section);

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      section.style.setProperty("--section-progress", progress.toFixed(3));
      const imageOffset = (0.5 - progress) * 150;
      section.style.setProperty("--image-parallax-y", `${imageOffset.toFixed(1)}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (prefersReducedMotion || ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="strategie" className="strategy-section" aria-labelledby="strategy-title">
      <div className="strategy-grid-lines" aria-hidden="true">
        <i />
        <i />
      </div>

      <div className="strategy-inner">
        <div className="strategy-meta reveal-item" aria-label="Informations du studio">
          <span>Lancé</span>
          <span>24+ projets</span>
          <span>2019–26©</span>
        </div>

        <h2 id="strategy-title" className="strategy-title" aria-label="Stratégie avant les pixels">
          <span>Stratégie</span>
          <span>avant les</span>
          <span>pixels.</span>
        </h2>

        <div className="strategy-copy reveal-item">
          <p>
            Les visiteurs décident s’ils font <strong>confiance</strong> à votre site avant même
            d’en lire un mot. Cette crédibilité se joue <strong>presque instantanément</strong> :
            dans <strong>l’espace, la typographie, l’image et la structure.</strong>
          </p>
          <a href="#a-propos">À propos <span>↗</span></a>
        </div>

        <figure className="strategy-visual reveal-item">
          <img src="/assets/hero.png" alt="Détail d’un ordinateur en aluminium dans un décor architectural" />
        </figure>

        <div className="strategy-stat reveal-item">
          <strong>12+</strong>
          <p>Secteurs dans lesquels nos sites dépassent les standards habituels.</p>
        </div>
      </div>
    </section>
  );
}

function BuildSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.2 },
    );

    observer.observe(section);

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      const imageOffset = (0.5 - progress) * 110;
      section.style.setProperty("--build-image-y", `${imageOffset.toFixed(1)}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (prefersReducedMotion || ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projets" className="build-section" aria-labelledby="build-title">
      <div className="build-inner">
        <p className="build-era build-reveal">2019–26©</p>

        <h2 id="build-title" className="build-title" aria-label="Nous créons des sites web">
          <span>Nous</span>
          <span>créons des</span>
          <span>sites web.</span>
        </h2>

        <p className="build-copy build-reveal">
          Là où <strong>avancer devient évident</strong>, naturel et impossible à compliquer.
        </p>

        <figure className="build-visual build-reveal">
          <img src="/assets/hero.png" alt="Ordinateur MLD dans un décor architectural en noir et blanc" />
        </figure>

        <a className="build-scroll build-reveal" href="#realisations">
          <span>↓</span> Voir les projets
        </a>

        {/* <a className="showreel-control build-reveal" href="#showreel" aria-label="Voir le showreel MLD">
          <span>Showreel</span>
          <i aria-hidden="true">▶</i>
        </a> */}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="realisations" className="portfolio-section" aria-label="Projets sélectionnés">
      {projects.map((project, index) => (
        <article key={project.name} className={`project-slide ${project.className}`}>
          <div className="project-backdrop" aria-hidden="true">
            <img src="/assets/hero.png" alt="" style={{ objectPosition: project.imagePosition }} />
          </div>

          <div className="project-pinned-track">
            <div className="project-stage">

              <p className="project-number">(0{index + 1})</p>
              <p className="project-label">Portfolio</p>
              <h3 aria-label={project.name}>
                {Array.from({ length: 6 }).map((_, repeatIndex) => (
                  <span key={repeatIndex} aria-hidden={repeatIndex !== 0}>{project.name}</span>
                ))}
              </h3>

              <a className="project-media" href="#contact" aria-label={`Découvrir le projet ${project.name}`}>
                <img src="/assets/hero.png" alt={`Aperçu du projet ${project.name}`} style={{ objectPosition: project.imagePosition }} />
              </a>

              <div className="project-details">
                <strong>{project.name}</strong>
                <p>{project.services.map((service) => <span key={service}>{service}</span>)}</p>
                <time>{project.year}</time>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function ReputationSection() {
  const sectionRef = useRef(null);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frameId = 0;
    let hasPlayed = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const playCounters = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.classList.add("is-visible");

      if (prefersReducedMotion) {
        setCountProgress(1);
        return;
      }

      const startedAt = performance.now();
      const duration = 1500;
      const update = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - ((1 - elapsed) ** 3);
        setCountProgress(eased);
        if (elapsed < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && playCounters(),
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const rating = (4.9 * countProgress).toFixed(1);
  const referrals = Math.round(80 * countProgress);

  return (
    <section ref={sectionRef} id="a-propos" className="reputation-section" aria-labelledby="reputation-title">
      <div className="reputation-inner">
        <header className="reputation-header">
          <p>Pourquoi nous&nbsp;?</p>
          <h2 id="reputation-title">
            <span>Bati sur la</span>
            <span>réputation.</span>
          </h2>
        </header>

        <div className="reputation-rows">
          <div className="reputation-row reputation-row-left">
            <article className="reputation-card reputation-card-dark">
              <p>Note moyenne des clients<br />sur Google</p>
              <div className="reputation-card-bottom">
                <strong aria-label={`Note moyenne ${rating} sur 5`}>/{rating}+</strong>
                <a href="#contact">Nos avis <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>

          <div className="reputation-row reputation-row-right">
            <article className="reputation-card reputation-card-light">
              <p>Notre activité vient des<br />recommandations directes</p>
              <div className="reputation-card-bottom">
                <strong aria-label={`${referrals} pour cent de recommandations`}>/{referrals}%</strong>
                <a href="#contact">Démarrer un projet <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>

          <div className="reputation-trust-row" aria-hidden="true">
            <div className="reputation-trust-mark">
              <img src="/assets/hero.png" alt="" />
              <span>MLD.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frameId = 0;
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;
      section.querySelectorAll(".service-visual").forEach((visual) => {
        const rect = visual.getBoundingClientRect();
        if (rect.height <= 1 || rect.bottom < 0 || rect.top > viewportHeight) return;

        const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const travel = Math.min(52, rect.height * 0.12);
        const offset = ((progress - 0.5) * 2 * travel).toFixed(2);
        visual.style.setProperty("--service-image-y", `${offset}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const transitionTimer = window.setTimeout(updateParallax, 750);

    return () => {
      window.clearTimeout(transitionTimer);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeService]);

  return (
    <section ref={sectionRef} id="prestations" className="services-section" aria-labelledby="services-title">
      <div className="services-top-accent" aria-hidden="true" />

      <div className="services-inner">
        <header className="services-header">
          <p>Prestations</p>
          <p id="services-title" className="services-intro">
            Chaque projet commence par la <strong>compréhension de votre activité</strong>, de vos clients et de ce qui les empêche aujourd’hui de <strong>vous choisir.</strong>
          </p>
        </header>

        <div className="services-list">
          {services.map((service, index) => {
            const isOpen = activeService === index;
            const panelId = `service-panel-${index + 1}`;

            return (
              <article key={service.title} className={`service-item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="service-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveService(isOpen ? -1 : index)}
                >
                  <span className="service-heading">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{service.title}</strong>
                  </span>

                  <span className="service-price">
                    <span aria-hidden={!isOpen}>
                      <small>{service.priceLabel}</small>
                      <strong>{service.price}</strong>
                    </span>
                    <i aria-hidden="true" />
                  </span>
                </button>

                <div id={panelId} className="service-details" aria-hidden={!isOpen}>
                  <div className="service-details-inner">
                    <div className="service-copy">
                      {service.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <figure className="service-visual">
                      <img src="/assets/hero.png" alt="Aperçu d’une création web MLD" style={{ objectPosition: service.imagePosition }} />
                    </figure>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="services-bottom-accent" aria-hidden="true" />
    </section>
  );
}

function MethodSection() {
  const sectionRef = useRef(null);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frameId = 0;
    let hasPlayed = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.classList.add("is-visible");

      if (prefersReducedMotion) {
        setCountProgress(1);
        return;
      }

      const startedAt = performance.now();
      const duration = 1600;
      const update = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration);
        setCountProgress(1 - ((1 - elapsed) ** 3));
        if (elapsed < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && reveal(),
      { threshold: 0.16 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const projectCount = Math.round(24 * countProgress);
  const loadingTime = (1.5 * countProgress).toFixed(1).replace(".", ",");
  const tailoredRate = Math.round(100 * countProgress);

  return (
    <section ref={sectionRef} id="methode" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="method-label">Notre méthode</p>

        <div className="method-layout">
          <div className="method-stats" aria-label="Quelques chiffres">
            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong>{projectCount}+</strong>
                <p>Projets <b>livrés</b> avec une expérience pensée pour <b>convertir</b>.</p>
              </div>
            </article>

            <article className="method-stat method-stat-left">
              <i aria-hidden="true" />
              <div>
                <strong>{loadingTime} S</strong>
                <p>Temps de chargement visé avant une <b>première interaction fluide</b>.</p>
              </div>
            </article>

            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong>{tailoredRate}%</strong>
                <p>Des créations <b>sur mesure</b>, rapides et entièrement <b>responsives</b>.</p>
              </div>
            </article>
          </div>

          <div className="method-message">
            <h2 id="method-title">
              <span>Chaque projet</span>
              <span>commence par</span>
              <span>un problème</span>
              <span>à résoudre.</span>
            </h2>

            <div className="method-quote">
              <p><strong>Je ne cherche pas le volume.</strong> Je choisis les projets où mon approche peut créer une <strong>différence mesurable</strong>. Chaque site est conçu pour durer, évoluer et rester unique.</p>
              <div className="method-author">
                <span>ML</span>
                <p><strong>Maxime Lagraa</strong><small>Designer &amp; développeur — MLD.</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-top-accent" aria-hidden="true" />

      <div className="faq-inner">
        <header className="faq-header">
          <div className="faq-heading">
            <p>FAQ</p>
            <h2 id="faq-title">
              <span>Avant de</span>
              <span>commencer.</span>
            </h2>
          </div>
        </header>

        <div className="faq-content">
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index;
              const itemId = `faq-answer-${index}`;

              return (
                <article
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  style={{ "--faq-index": index }}
                  key={item.question}
                >
                  <button
                    className="faq-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={itemId}
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  >
                    <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-question">{item.question}</span>
                    <i aria-hidden="true" />
                  </button>

                  <div id={itemId} className="faq-answer" aria-hidden={!isOpen}>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <a className="faq-contact" href="#contact">
          <span className="faq-contact-label">
            <span>Démarrer un projet</span>
            <span aria-hidden="true">Démarrer un projet</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function PricingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tarifs" className="pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-inner">
        <div className="pricing-thought">
          <div className="pricing-thought-top">
            <p className="pricing-label">Notre façon de penser</p>

            <div className="pricing-profile">
              <figure>
                <img src="/assets/pricing-portrait.jpg" alt="Portrait de la direction créative MLD" />
              </figure>
              <div className="pricing-profile-copy">
                <strong>MLD Studio</strong>
                <p>Direction créative<br />Design &amp; développement</p>
              </div>
            </div>
          </div>

          <div className="pricing-quote-row">
            <blockquote>
              <span className="pricing-quote-line">« Le plus difficile dans la création</span>
              <span className="pricing-quote-line">d’un site n’est pas le code —</span>
              <span className="pricing-quote-line">c’est de <strong>savoir quoi retirer.</strong></span>
              <span className="pricing-quote-line">Chaque élément qui n’aide pas</span>
              <span className="pricing-quote-line">le visiteur <strong>travaille contre vous.</strong> »</span>
            </blockquote>
            <p>Nous traitons la <strong>simplicité</strong> comme une <strong>discipline</strong>, jamais comme un raccourci.</p>
          </div>
        </div>

        <div className="pricing-content">
          <div className="pricing-title-row">
            <h2 id="pricing-title">Tarifs.</h2>
          </div>

          <div className="pricing-desktop-table">
            <div className="pricing-plan-heads">
              <div aria-hidden="true" />
              {pricingPlans.map((plan) => (
                <article key={plan.name}>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </article>
              ))}
            </div>

            <div className="pricing-price-row">
              <p>Fonctionnalités</p>
              {pricingPlans.map((plan) => (
                <p key={plan.name}>
                  <strong>{plan.price}</strong>
                  <small>{plan.suffix}</small>
                </p>
              ))}
            </div>

            <div className="pricing-feature-list">
              {pricingFeatures.map((feature) => (
                <div className="pricing-feature-row" key={feature.label}>
                  <p>
                    {feature.label}
                    {feature.info && <span className="pricing-info" data-tooltip={feature.info} tabIndex="0" aria-label={feature.info}>i</span>}
                  </p>
                  {feature.values.map((value, index) => <span key={`${feature.label}-${pricingPlans[index].name}`}>{value}</span>)}
                </div>
              ))}
            </div>

            <div className="pricing-actions">
              <span aria-hidden="true" />
              {pricingPlans.map((plan) => (
                <a href="#contact" key={plan.name}>
                  <span>Démarrer</span>
                  <span aria-hidden="true">Démarrer</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pricing-mobile-plans">
            {pricingPlans.map((plan, planIndex) => (
              <article className="pricing-mobile-plan" key={plan.name}>
                <header>
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <p><strong>{plan.price}</strong><small>{plan.suffix}</small></p>
                </header>
                <dl>
                  {pricingFeatures.map((feature) => (
                    <div key={feature.label}>
                      <dt>{feature.label}</dt>
                      <dd>{feature.values[planIndex]}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#contact"><span>Démarrer</span></a>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing-bottom-accent" aria-hidden="true" />
    </section>
  );
}

function ReviewsSection() {
  const sectionRef = useRef(null);
  const [activeReview, setActiveReview] = useState(0);
  const review = clientReviews[activeReview];

  const showPreviousReview = () => {
    setActiveReview((current) => (current - 1 + clientReviews.length) % clientReviews.length);
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % clientReviews.length);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const visual = section.querySelector(".review-image-stage");
    let frameId = 0;
    let ticking = false;

    const updateParallax = () => {
      const rect = visual.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const centered = (progress - 0.5) * 2;
        const backgroundTravel = Math.min(34, rect.height * 0.08);
        const foregroundTravel = Math.min(48, rect.height * 0.12);
        visual.style.setProperty("--review-bg-y", `${(centered * backgroundTravel).toFixed(2)}px`);
        visual.style.setProperty("--review-fg-y", `${(centered * foregroundTravel).toFixed(2)}px`);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeReview]);

  return (
    <section ref={sectionRef} id="avis" className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-inner">
        <header className="reviews-header">
          <h2 id="reviews-title">
            <span>Avis de nos</span>
            <span>clients.</span>
          </h2>
          <p>Avis clients</p>
        </header>

        <article className="review-featured review-slide" key={review.id} aria-live="polite">
          <div className="review-copy">
            <blockquote>"{review.quote}"</blockquote>
            <div className="review-author">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>

          <div className="review-visual-column">
            <p>{review.note}</p>
            <div className="review-controls" aria-label="Navigation des avis clients">
              <button className="review-control review-control-previous" type="button" onClick={showPreviousReview} aria-label="Avis précédent">‹</button>
              <button className="review-control review-control-next" type="button" onClick={showNextReview} aria-label="Avis suivant">›</button>
            </div>
            <div className="review-image-stage" aria-label={`Portrait de ${review.name}`}>
              <img className="review-image-background" src={review.image} alt="" aria-hidden="true" />
              <figure className="review-image-foreground">
                <img src={review.image} alt={`Portrait de ${review.name}`} />
              </figure>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function NewsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="news-section" aria-labelledby="news-title">
      <div className="news-inner">
        <div className="news-heading-row">
          <a className="news-more" href="/blog">
            <span className="news-more-label">
              <span>Voir plus</span>
              <span aria-hidden="true">Voir plus</span>
            </span>
          </a>
          <h2 id="news-title">
            <span>Conseils et</span>
            <span>actualités.</span>
          </h2>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <a
              className={`news-card news-card-${article.variant}`}
              href={article.href}
              key={article.title}
              aria-label={`${article.title}, publié le ${article.date}`}
            >
              {article.variant === "feature" ? (
                <div className="news-feature-card">
                  <img
                    src={article.image}
                    alt=""
                    aria-hidden="true"
                    style={{ objectPosition: article.imagePosition }}
                  />
                  <span className="news-arrow" aria-hidden="true">↗</span>
                  <div className="news-card-copy">
                    <h3>{article.title}</h3>
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </div>
                </div>
              ) : (
                <>
                  <figure className="news-card-image">
                    <img
                      src={article.image}
                      alt=""
                      aria-hidden="true"
                      style={{ objectPosition: article.imagePosition }}
                    />
                  </figure>
                  <div className="news-card-copy">
                    <h3>{article.title}</h3>
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterMark({ withName = false }) {
  return (
    <span className="footer-mark" aria-hidden="true">
      <span className="brand-mark">
        <i />
        <i />
        <i />
      </span>
      {withName && <strong>MLD.</strong>}
    </span>
  );
}

function SiteFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-left-column">
            <div className="footer-visual">
              <div className="footer-image-panel">
                <img src="/assets/hero.png" alt="Création graphique MLD Studio" />
                <div className="footer-visual-shade" aria-hidden="true" />
                <div className="footer-visual-logo">
                  <FooterMark />
                </div>
                <div className="footer-person">
                  <strong>Maxime Lagraa</strong>
                  <img src="/assets/pricing-portrait.jpg" alt="Portrait de Maxime Lagraa" />
                </div>
              </div>
              <div className="footer-person-note">
                <p>Je réponds personnellement à votre demande et vous propose une première direction claire.</p>
                <span>Direction créative</span>
              </div>
            </div>

            <div className="footer-contact-block">
              <p className="footer-eyebrow">Contact</p>
              <address>
                <strong>Roanne 42300</strong>
                <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a>
              </address>
              <p>Nous répondons habituellement aux demandes sous deux jours ouvrés.</p>
              <a className="footer-brand-link" href="#accueil" aria-label="MLD, retour à l’accueil">
                <FooterMark withName />
              </a>
            </div>
          </div>

          <div className="footer-project-column">
            <header className="footer-project-heading">
              <h2><span>Démarrez un</span><span>projet.</span></h2>
              <p>Que vous ayez un brief complet ou une simple idée, nous sommes là pour lui donner forme. Aucun discours commercial inutile — seulement une prochaine étape claire.</p>
            </header>

            <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                <span>Nom <b aria-hidden="true">*</b></span>
                <input type="text" name="name" autoComplete="name" placeholder="Alex Martin" required />
              </label>

              <label>
                <span>Adresse e-mail <b aria-hidden="true">*</b></span>
                <input type="email" name="email" autoComplete="email" placeholder="exemple@email.com" required />
              </label>

              <label>
                <span>Quel service recherchez-vous ? <b aria-hidden="true">*</b></span>
                <span className="footer-select-wrap">
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Sélectionner un service</option>
                    <option value="monopage">Site vitrine monopage</option>
                    <option value="multipage">Site vitrine multipage</option>
                    <option value="signature">Site vitrine signature</option>
                    <option value="google">Fiche Google Business</option>
                    <option value="maintenance">Maintenance & hébergement</option>
                  </select>
                </span>
              </label>

              <label>
                <span>Message <b aria-hidden="true">*</b></span>
                <textarea name="message" placeholder="Parlez-nous de votre activité, de vos objectifs et de votre projet…" required />
              </label>

              <div className="footer-form-actions">
                <button type="submit">
                  <span className="footer-button-label">
                    <span>Envoyer le message</span>
                    <span aria-hidden="true">Envoyer le message</span>
                  </span>
                </button>
                <p>En envoyant ce formulaire, vous acceptez notre <a href="#confidentialite">politique de confidentialité</a>.</p>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal" id="confidentialite">
            <a href="#confidentialite">Politique de confidentialité</a>
            <a href="#mentions">Mentions légales</a>
          </div>

          <div className="footer-directory">
            <div>
              <p className="footer-eyebrow">Navigation</p>
              <nav aria-label="Navigation du pied de page">
                <a href="#accueil">Accueil</a>
                <a href="#realisations">Réalisations</a>
                <a href="#services">Services</a>
                <a href="#journal">Journal</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div>
              <p className="footer-eyebrow">Nous trouver</p>
              <address>
                <strong>Roanne, Loire<br />42300 France</strong>
                <span>Du lundi au vendredi<br />09:00 — 18:00</span>
              </address>
            </div>
          </div>

          <div className="footer-copyright">
            <span>© 2026 MLD. Tous droits réservés.</span>
            <span className="footer-created">Créé par <FooterMark withName /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <StrategySection />
      <BuildSection />
      <PortfolioSection />
      <ReputationSection />
      <ServicesSection />
      <MethodSection />
      <FaqSection />
      <PricingSection />
      <ReviewsSection />
      <NewsSection />
      <SiteFooter />
    </>
  );
}

export default App;
