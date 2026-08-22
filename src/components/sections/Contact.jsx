import { useState } from "react";
import { Link } from "react-router-dom";
import Noise from "../Noise.jsx";
import FooterMark from "../layout/FooterMark.jsx";
import { useContactAnimation } from "../../scripts/contact.js";
import contactImage from "../../assets/images/contact-image.webp";

// Section Contact : visuel, coordonnées et formulaire « Démarrez un projet ».
// Partage le fond sombre du bas de page avec le Footer (voir .contact-section).
function Contact() {
  const sectionRef = useContactAnimation();
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState({ status: "sending", message: "Envoi en cours…" });

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.error || "Envoi impossible.");

      form.reset();
      setFormState({
        status: "success",
        message:
          "Merci, votre message a bien été envoyé. Je vous répond sous 24h.",
      });
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Envoi impossible. Écrivez-nous à contact@mld-studio.fr.",
      });
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <Noise className="noise-behind" opacity={0.11} />

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-left-column">
            <div className="footer-visual">
              <div className="footer-image-panel">
                <img
                  src={contactImage}
                  alt="Création graphique MLD Studio"
                  width="2560"
                  height="1707"
                  loading="lazy"
                  decoding="async"
                />
                <Noise className="media-noise" opacity={0.11} />
                <div className="footer-visual-logo">
                  <FooterMark />
                </div>
                <div className="footer-person">
                  <strong>Maxime- MLD Studio</strong>
                  <img
                    src="/assets/pricing-portrait.jpg"
                    alt="Portrait de Maxime Lagraa"
                    width="270"
                    height="341"
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
                <a href="tel:+33662599771">06 62 59 97 71</a>
              </address>
              <p>
                Du lundi au vendredi, de 9 h à 19 h. Réponse habituelle sous 24
                h.
              </p>
              <a
                className="footer-brand-link"
                href="/"
                aria-label="MLD, retour à l’accueil"
              >
                <FooterMark withName />
              </a>
            </div>
          </div>

          <div className="footer-project-column">
            <header className="footer-project-heading">
              <h2>
                <span>Démarrez un</span>{" "}
                <span>projet.</span>
              </h2>
              <p>
                Que vous ayez un brief complet ou une simple idée, nous sommes
                là pour lui donner forme. Aucun discours commercial inutile —
                seulement une prochaine étape claire.
              </p>
            </header>

            <form className="footer-form" onSubmit={handleSubmit}>
              <label className="form-honeypot" aria-hidden="true">
                <span>Entreprise</span>
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
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
                <button
                  type="submit"
                  disabled={formState.status === "sending"}
                  aria-busy={formState.status === "sending"}
                >
                  <span className="footer-button-label">
                    <span>Envoyer le message</span>
                    <span aria-hidden="true" data-label="Envoyer le message" />
                  </span>
                </button>
                <p>
                  Vos données servent uniquement à répondre à votre demande.
                  Voir notre{" "}
                  <Link to="/politique-confidentialite">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
              <p
                className={`footer-form-status is-${formState.status}`}
                role="status"
                aria-live="polite"
              >
                {formState.message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
