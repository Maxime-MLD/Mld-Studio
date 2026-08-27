import { useState } from "react";
import { Link } from "react-router-dom";
import Noise from "../Noise.jsx";
import ScrollRevealText from "../ScrollRevealText.jsx";
import FooterMark from "../layout/FooterMark.jsx";
import { useContactAnimation } from "../../scripts/contact.js";
import contactImage from "../../assets/images/contact-image.webp";
import avatarImage from "../../assets/images/avatar.webp";

// Section Contact : visuel, coordonnées et formulaire « Démarrez un projet ».
// Partage le fond sombre du bas de page avec le Footer (voir .contact-section).
function Contact() {
  const sectionRef = useContactAnimation();
  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
    revision: 0,
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const updateFormState = (status, message) => {
    setFormState((current) => ({
      status,
      message,
      revision: current.revision + 1,
    }));
  };

  const validateField = (name, rawValue) => {
    const value = typeof rawValue === "string" ? rawValue.trim() : "";

    if (name === "name") {
      if (!value) return "Indiquez votre nom.";
      if (value.length < 2) return "Votre nom doit contenir au moins 2 caractères.";
    }

    if (name === "email") {
      if (!value) return "Indiquez votre adresse e-mail.";
      if (!value.includes("@")) {
        return "Ajoutez le symbole @ à votre adresse e-mail.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value)) {
        return "Saisissez une adresse e-mail valide, par exemple nom@domaine.fr.";
      }
    }

    if (name === "service" && !value) {
      return "Sélectionnez le service qui vous intéresse.";
    }

    if (name === "message") {
      if (!value) return "Décrivez brièvement votre projet.";
      if (value.length < 10) {
        return "Ajoutez quelques précisions : 10 caractères minimum.";
      }
    }

    return "";
  };

  const validateForm = (payload) => {
    const fields = ["name", "email", "service", "message"];
    return fields.reduce((errors, field) => {
      const error = validateField(field, payload[field]);
      if (error) errors[field] = error;
      return errors;
    }, {});
  };

  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    if (!name || name === "company") return;

    const error = validateField(name, value);
    setFieldErrors((current) => {
      const next = { ...current };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    if (!name || !fieldErrors[name]) return;

    const error = validateField(name, value);
    setFieldErrors((current) => {
      const next = { ...current };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });

    if (formState.status === "error") updateFormState("idle", "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const validationErrors = validateForm(payload);
    const invalidFields = Object.keys(validationErrors);

    setFieldErrors(validationErrors);

    if (invalidFields.length > 0) {
      updateFormState("idle", "");

      const firstField = form.elements.namedItem(invalidFields[0]);
      requestAnimationFrame(() => firstField?.focus());
      return;
    }

    updateFormState("sending", "Envoi en cours…");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (payload.company) {
        form.reset();
        setFieldErrors({});
        updateFormState("success", "Merci, votre message a bien été envoyé.");
        return;
      }

      if (!accessKey) {
        throw new Error(
          "Le formulaire est temporairement indisponible. Écrivez-nous à contact@mld-studio.fr.",
        );
      }

      delete payload.company;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          access_key: accessKey,
          from_name: "Site MLD Studio",
          subject: `Nouvelle demande MLD Studio — ${payload.service}`,
          replyto: payload.email,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        if (response.status === 429) {
          throw new Error(
            "Trop de tentatives rapprochées. Patientez quelques minutes avant de réessayer.",
          );
        }
        throw new Error(
          "Le message n’a pas pu être envoyé. Réessayez ou écrivez-nous directement.",
        );
      }

      form.reset();
      setFieldErrors({});
      updateFormState(
        "success",
        "Merci, votre message a bien été envoyé. Je vous réponds sous 24 h.",
      );
    } catch (error) {
      updateFormState(
        "error",
        error instanceof Error
          ? error.message
          : "Envoi impossible. Écrivez-nous à contact@mld-studio.fr.",
      );
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
                    src={avatarImage}
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
              <ScrollRevealText
                as="h2"
                aria-label="Démarrez un projet"
                lines={["Démarrez un", "projet."]}
              />
              <p>
                Que vous ayez un <strong>brief complet</strong> ou une{" "}
                <strong>simple idée</strong>, nous sommes là pour lui donner
                forme. Aucun discours commercial inutile — seulement une{" "}
                <strong>prochaine étape claire</strong>.
              </p>
            </header>

            <form
              className="footer-form"
              onSubmit={handleSubmit}
              onBlur={handleFieldBlur}
              onChange={handleFieldChange}
              noValidate
            >
              <label className="form-honeypot" aria-hidden="true">
                <span>Entreprise</span>
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
              <label className={fieldErrors.name ? "is-invalid" : undefined}>
                <span>
                  Nom <b aria-hidden="true">*</b>
                </span>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Alex Martin"
                  minLength="2"
                  maxLength="100"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                  required
                />
                {fieldErrors.name && (
                  <span
                    className="form-field-error"
                    id="contact-name-error"
                    role="alert"
                  >
                    {fieldErrors.name}
                  </span>
                )}
              </label>

              <label className={fieldErrors.email ? "is-invalid" : undefined}>
                <span>
                  Adresse e-mail <b aria-hidden="true">*</b>
                </span>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="exemple@email.com"
                  maxLength="160"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                  required
                />
                {fieldErrors.email && (
                  <span
                    className="form-field-error"
                    id="contact-email-error"
                    role="alert"
                  >
                    {fieldErrors.email}
                  </span>
                )}
              </label>

              <label className={fieldErrors.service ? "is-invalid" : undefined}>
                <span>
                  Quel service recherchez-vous ? <b aria-hidden="true">*</b>
                </span>
                <span className="footer-select-wrap">
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    aria-invalid={Boolean(fieldErrors.service)}
                    aria-describedby={
                      fieldErrors.service ? "contact-service-error" : undefined
                    }
                    required
                  >
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
                {fieldErrors.service && (
                  <span
                    className="form-field-error"
                    id="contact-service-error"
                    role="alert"
                  >
                    {fieldErrors.service}
                  </span>
                )}
              </label>

              <label className={fieldErrors.message ? "is-invalid" : undefined}>
                <span>
                  Message <b aria-hidden="true">*</b>
                </span>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Parlez-nous de votre activité, de vos objectifs et de votre projet…"
                  minLength="10"
                  maxLength="3000"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? "contact-message-error" : undefined
                  }
                  required
                />
                {fieldErrors.message && (
                  <span
                    className="form-field-error"
                    id="contact-message-error"
                    role="alert"
                  >
                    {fieldErrors.message}
                  </span>
                )}
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
                aria-atomic="true"
                key={formState.revision}
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
