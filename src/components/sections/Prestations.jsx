import { useState } from "react";
import Noise from "../Noise.jsx";
import { services } from "../../data/prestations.js";
import { usePrestationsAnimation } from "../../scripts/prestations.js";

// Section Prestations : accordéon des offres avec parallaxe des visuels.
function Prestations() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = usePrestationsAnimation(activeService);

  return (
    <section
      ref={sectionRef}
      id="prestations"
      className="services-section"
      aria-labelledby="services-title"
    >
      <div className="services-top-accent" aria-hidden="true" />

      <div className="services-inner">
        <header className="services-header">
          <p>Prestations</p>
          <p id="services-title" className="services-intro">
            Chaque projet commence par la{" "}
            <strong>compréhension de votre activité</strong>, de vos clients et
            de ce qui les empêche aujourd’hui de <strong>vous choisir.</strong>
          </p>
        </header>

        <div className="services-list">
          {services.map((service, index) => {
            const isOpen = activeService === index;
            const panelId = `service-panel-${index + 1}`;

            return (
              <article
                key={service.title}
                className={`service-item ${isOpen ? "is-open" : ""}`}
              >
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

                <div
                  id={panelId}
                  className="service-details"
                  aria-hidden={!isOpen}
                >
                  <div className="service-details-inner">
                    <div className="service-copy">
                      {service.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <figure className="service-visual">
                      <img
                        src={service.image}
                        alt="Aperçu d’une création web MLD"
                        style={{ objectPosition: service.imagePosition }}
                      />
                      <Noise className="media-noise" opacity={0.11} />
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

export default Prestations;
