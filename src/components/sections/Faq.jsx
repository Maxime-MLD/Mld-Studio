import { useState } from "react";
import ScrollRevealText from "../ScrollRevealText.jsx";
import { faqItems } from "../../data/faq.js";
import { useFaqAnimation } from "../../scripts/faq.js";

// Section Faq : accordéon des questions fréquentes.
// Les props sont optionnelles et par défaut identiques à l'usage d'origine :
// <Faq /> sur l'accueil se comporte exactement comme avant. Elles permettent de
// réutiliser le même composant (même style, même accordéon) sur d'autres pages,
// comme la page légale, avec un autre jeu de questions.
function Faq({
  items = faqItems,
  eyebrow = "FAQ",
  titleLines = ["Avant de", "commencer."],
  contactHref = "#contact",
  id = "faq",
}) {
  const [activeFaq, setActiveFaq] = useState(0);
  const sectionRef = useFaqAnimation();

  return (
    <section ref={sectionRef} id={id} className="faq-section" aria-labelledby={`${id}-title`}>
      <div className="faq-top-accent" aria-hidden="true" />

      <div className="faq-inner">
        <header className="faq-header">
          <div className="faq-heading">
            <p>{eyebrow}</p>
            <ScrollRevealText
              as="h2"
              id={`${id}-title`}
              aria-label={titleLines.join(" ")}
              lines={titleLines}
            />
          </div>
        </header>

        <div className="faq-content">
          <div className="faq-list">
            {items.map((item, index) => {
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

        <a className="faq-contact" href={contactHref}>
          <span className="faq-contact-label">
            <span>Démarrer un projet</span>
            <span aria-hidden="true" data-label="Démarrer un projet" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Faq;
