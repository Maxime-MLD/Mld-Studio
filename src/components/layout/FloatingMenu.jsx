import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./FloatingMenu.css";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Affichage du bouton flottant au scroll (> 120px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors d'un changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className={`floating-menu-wrapper ${isVisible ? "is-visible" : ""} ${isOpen ? "is-open" : ""}`}>
      {/* Backdrop sombre flouté */}
      <div
        className={`floating-menu-backdrop ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Carte du menu ouvert */}
      <div
        className={`floating-menu-card ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
        <div className="floating-menu-content">
          <div className="floating-menu-top">
            {/* Colonne Gauche : Navigation */}
            <div className="floating-menu-left">
              <span className="floating-menu-heading">Menu</span>
              <nav className="floating-menu-nav">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="floating-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Colonne Droite : Contact & Légal */}
            <div className="floating-menu-right">
              <span className="floating-menu-heading">Contact</span>
              <div className="floating-menu-contact-info">
                <a
                  href="mailto:contact@mld-studio.fr"
                  className="floating-contact-link"
                  onClick={() => setIsOpen(false)}
                >
                  contact@mld-studio.fr
                </a>
                <a
                  href="tel:+33662599771"
                  className="floating-contact-link"
                  onClick={() => setIsOpen(false)}
                >
                  +33 6 62 59 97 71
                </a>
              </div>

              <div className="floating-menu-legal">
                <Link
                  to="/politique-confidentialite"
                  className="floating-legal-link"
                  onClick={() => setIsOpen(false)}
                >
                  Politique de confidentialité
                </Link>
                <Link
                  to="/mentions-legales"
                  className="floating-legal-link"
                  onClick={() => setIsOpen(false)}
                >
                  Mentions légales
                </Link>
              </div>
            </div>
          </div>

          {/* Bouton CTA en bas de carte */}
          <Link
            to="/contact"
            className="floating-menu-cta"
            onClick={() => setIsOpen(false)}
          >
            Démarrer un projet
          </Link>
        </div>
      </div>

      {/* Bouton Burger / Close flottant au centre bas */}
      <button
        className={`floating-menu-btn ${isOpen ? "is-active" : ""}`}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <span className="floating-menu-icon" aria-hidden="true">
          <span className="icon-bar bar-1" />
          <span className="icon-bar bar-2" />
          <span className="icon-bar bar-3" />
        </span>
      </button>
    </div>
  );
}
