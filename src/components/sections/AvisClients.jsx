import { useState } from "react";
import Noise from "../Noise.jsx";
import { clientReviews } from "../../data/avis-clients.js";
import { useAvisAnimation } from "../../scripts/avis-clients.js";

// Section AvisClients : carrousel d'avis avec portrait en parallaxe.
function AvisClients() {
  const [activeReview, setActiveReview] = useState(0);
  const review = clientReviews[activeReview];
  const sectionRef = useAvisAnimation(activeReview);

  const showPreviousReview = () => {
    setActiveReview(
      (current) => (current - 1 + clientReviews.length) % clientReviews.length,
    );
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % clientReviews.length);
  };

  return (
    <section
      ref={sectionRef}
      id="avis"
      className="reviews-section"
      aria-labelledby="reviews-title"
    >
      <div className="reviews-inner">
        <header className="reviews-header">
          <p className="reviews-label">Avis clients</p>
          <h2 id="reviews-title">
            <span>Avis de nos</span>{" "}
            <span>clients.</span>
          </h2>
        </header>

        <article
          className="review-featured review-slide"
          key={review.id}
          aria-live="polite"
        >
          <div className="reviews-intro-row">
            <p className="reviews-intro-copy">
              Nous laissons les <strong>résultats parler.</strong> Mais parfois, les personnes derrière ont <strong>quelque chose à ajouter.</strong>
            </p>
            <div
              className="review-controls"
              aria-label="Navigation des avis clients"
            >
              <button
                className="review-control review-control-previous"
                type="button"
                onClick={showPreviousReview}
                aria-label="Avis précédent"
              >
                ‹
              </button>
              <button
                className="review-control review-control-next"
                type="button"
                onClick={showNextReview}
                aria-label="Avis suivant"
              >
                ›
              </button>
            </div>
          </div>

          <div className="review-copy">
            <svg className="review-quote-icon" width="36" height="28" viewBox="0 0 40 32" fill="currentColor" aria-hidden="true">
              <path d="M0 32V18.286L8.889 0H17.778L11.111 16H17.778V32H0ZM22.222 32V18.286L31.111 0H40L33.333 16H40V32H22.222Z"/>
            </svg>
            <blockquote>"{review.quote}"</blockquote>
            <div className="review-author">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>

          <div className="review-visual-column">

            <div
              className="review-image-stage"
              aria-label={review.pending ? "Emplacement du premier avis client" : `Portrait de ${review.name}`}
            >
              <img
                className="review-image-background"
                src={review.image}
                alt=""
                aria-hidden="true"
              />
              <Noise className="media-noise" opacity={0.11} />
              <figure className="review-image-foreground">
                <img
                  src={review.image}
                  alt={review.pending ? "" : `Portrait de ${review.name}`}
                />
              </figure>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AvisClients;
