import { useState } from "react";
import { navItems } from "../../data/nav.js";
import { useMenuBodyLock } from "../../scripts/hero.js";

function Brand() {
  return (
    <a className="brand" href="/" aria-label="MLD, accueil">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-name">MLD</span>
    </a>
  );
}

// Navigation du site : identité, navigation desktop, CTA et menu mobile.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useMenuBodyLock(menuOpen);

  return (
    <header className="site-header">
      <div className="header-identity">
        <Brand />
        <span className="header-divider" aria-hidden="true">
          |
        </span>
        <p className="header-tagline">
          Studio design & développement, pour des sites qui convertissent.
        </p>
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
        <span aria-hidden="true" data-label="Démarrer un projet" />
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

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
      >
        <nav aria-label="Navigation mobile">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <small>0{index + 1}</small>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="mobile-project-link"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Démarrer un projet{" "}
          <span aria-hidden="true">
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
              <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
export { Brand };
