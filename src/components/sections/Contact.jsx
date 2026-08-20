import Noise from "../Noise.jsx";
import FooterMark from "../layout/FooterMark.jsx";
import { useContactAnimation } from "../../scripts/contact.js";
import contactImage from "../../assets/images/contact-image.webp";

// Section Contact : visuel, coordonnées et formulaire « Démarrez un projet ».
// Partage le fond sombre du bas de page avec le Footer (voir .contact-section).
function Contact() {
  const sectionRef = useContactAnimation();

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <Noise className="noise-behind" opacity={0.11} />

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-left-column">
            <div className="footer-visual">
              <div className="footer-image-panel">
                <img src={contactImage} alt="Création graphique MLD Studio" />
                <Noise className="media-noise" opacity={0.11} />
                <div className="footer-visual-logo">
                  <FooterMark />
                </div>
                <div className="footer-person">
                  <strong>Maxime- MLD Studio</strong>
                  <img
                    src="/assets/pricing-portrait.jpg"
                    alt="Portrait de Maxime Lagraa"
                  />
                </div>
              </div>
              <div className="footer-person-note">
                <p>
                  Je réponds personnellement à votre demande et vous propose une
                  première direction claire.
                </p>
                <span>Direction créative</span>
              </div>
            </div>

            <div className="footer-contact-block">
              <p className="footer-eyebrow">Contact</p>
              <address>
                <strong>Roanne 42300</strong>
                <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a>
              </address>
              <p>Nous répondons habituellement aux demandes sous 24h.</p>
              <a
                className="footer-brand-link"
                href="#accueil"
                aria-label="MLD, retour à l’accueil"
              >
                <FooterMark withName />
              </a>
            </div>
          </div>

          <div className="footer-project-column">
            <header className="footer-project-heading">
              <h2>
                <span>Démarrez un</span>
                <span>projet.</span>
              </h2>
              <p>
                Que vous ayez un brief complet ou une simple idée, nous sommes
                là pour lui donner forme. Aucun discours commercial inutile —
                seulement une prochaine étape claire.
              </p>
            </header>

            <form
              className="footer-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                <span>
                  Nom <b aria-hidden="true">*</b>
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Alex Martin"
                  required
                />
              </label>

              <label>
                <span>
                  Adresse e-mail <b aria-hidden="true">*</b>
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="exemple@email.com"
                  required
                />
              </label>

              <label>
                <span>
                  Quel service recherchez-vous ? <b aria-hidden="true">*</b>
                </span>
                <span className="footer-select-wrap">
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Sélectionner un service
                    </option>
                    <option value="monopage">Site vitrine monopage</option>
                    <option value="multipage">Site vitrine multipage</option>
                    <option value="signature">Site vitrine signature</option>
                    <option value="google">Fiche Google Business</option>
                    <option value="maintenance">
                      Maintenance & hébergement
                    </option>
                  </select>
                </span>
              </label>

              <label>
                <span>
                  Message <b aria-hidden="true">*</b>
                </span>
                <textarea
                  name="message"
                  placeholder="Parlez-nous de votre activité, de vos objectifs et de votre projet…"
                  required
                />
              </label>

              <div className="footer-form-actions">
                <button type="submit">
                  <span className="footer-button-label">
                    <span>Envoyer le message</span>
                    <span aria-hidden="true">Envoyer le message</span>
                  </span>
                </button>
                <p>
                  En envoyant ce formulaire, vous acceptez notre{" "}
                  <a href="#confidentialite">politique de confidentialité</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
