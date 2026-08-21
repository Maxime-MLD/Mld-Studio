import { useState } from "react";
import Noise from "../Noise.jsx";
import { services } from "../../data/prestations.js";
import { usePrestationsAnimation } from "../../scripts/prestations.js";

// Carrousel de visuels (utilisé pour « multipage » et « signature »).
// Réutilise .service-visual pour conserver le ratio 16:9 stable sans collapse de hauteur.
function ServiceCarousel({ images, imagePosition }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (e, direction) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + direction + count) % count);
  };

  return (
    <figure className="service-visual service-carousel">
      <div className="service-carousel-track">
        {images.map((imgSrc, i) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt={`Aperçu ${i + 1} d’une prestation web MLD`}
            loading="eager"
            decoding="async"
            className={`service-carousel-img ${i === index ? "is-active" : ""}`}
            style={{ objectPosition: imagePosition }}
          />
        ))}
      </div>
      <Noise className="media-noise" opacity={0.11} />

      <button
        type="button"
        className="service-carousel-arrow service-carousel-prev"
        onClick={(e) => go(e, -1)}
        aria-label="Image précédente"
      >
        <i aria-hidden="true" />
      </button>
      <button
        type="button"
        className="service-carousel-arrow service-carousel-next"
        onClick={(e) => go(e, 1)}
        aria-label="Image suivante"
      >
        <i aria-hidden="true" />
      </button>
    </figure>
  );
}

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
                    {service.images ? (
                      <ServiceCarousel
                        images={service.images}
                        imagePosition={service.imagePosition}
                      />
                    ) : (
                      <figure className="service-visual">
                        <img
                          src={service.image}
                          alt="Aperçu d’une création web MLD"
                          loading="lazy"
                          decoding="async"
                          style={{ objectPosition: service.imagePosition }}
                        />
                        <Noise className="media-noise" opacity={0.11} />
                      </figure>
                    )}
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
