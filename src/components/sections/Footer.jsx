import { Link } from "react-router-dom";
import Noise from "../Noise.jsx";
import FooterMark from "../layout/FooterMark.jsx";
import { useFooterAnimation } from "../../scripts/footer.js";

// Footer : barre de bas de page (mentions légales, navigation, coordonnées).
// Prolonge le fond sombre de la section Contact.
function Footer() {
  const footerRef = useFooterAnimation();

  return (
    <footer ref={footerRef} className="site-footer">
      <Noise className="noise-behind" opacity={0.11} />

      <div className="footer-inner">
        <div className="footer-bottom">
          <div className="footer-legal" id="confidentialite">
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
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

export default Footer;
