import { navItems } from "../../data/nav.js";

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

// En-tête du site : identité, navigation desktop, CTA et menu mobile.
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

      <a className="project-cta" href="/contact">
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
        <a className="mobile-project-link" href="/contact" onClick={() => setMenuOpen(false)}>
          Démarrer un projet <span>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
export { Brand };
