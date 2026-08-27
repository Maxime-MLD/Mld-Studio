import { useState, useRef } from "react";
import ScrollRevealText from "../ScrollRevealText.jsx";
import { services } from "../../data/prestations.js";
import { usePrestationsAnimation } from "../../scripts/prestations.js";

// Carrousel de visuels (utilisé pour « monopage », « multipage » et « signature »).
// Réutilise .service-visual pour conserver le ratio 16:9 stable sans collapse de hauteur.
function ServiceCarousel({ images, imagePosition }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const touchStartRef = useRef(null);

  const go = (e, direction) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIndex((i) => (i + direction + count) % count);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Détection du geste de swipe horizontal (seuil 30px)
    if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Glissement vers la gauche -> image suivante
        go(null, 1);
      } else {
        // Glissement vers la droite -> image précédente
        go(null, -1);
      }
    }
  };

  return (
    <div className="service-carousel-container">
      <figure
        className="service-visual service-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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

      {/* Indicateurs de pagination (. ou - sous l'image) */}
      <div className="service-carousel-pagination" aria-label="Sélectionner une photo">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`service-carousel-dot ${i === index ? "is-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(i);
            }}
            aria-label={`Photo ${i + 1} sur ${count}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
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
          <ScrollRevealText
            as="p"
            id="services-title"
            className="services-intro services-intro-reveal"
            aria-label="Chaque projet commence par la compréhension de votre activité, de vos clients et de ce qui les empêche aujourd’hui de vous choisir."
            lines={[
              "Chaque projet commence par la",
              <>
                <strong>compréhension de votre activité</strong>, de vos clients
              </>,
              <>
                et de ce qui les empêche aujourd’hui de{" "}
                <strong>vous choisir.</strong>
              </>,
            ]}
          />
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
