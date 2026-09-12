import { useState } from "react";
import Noise from "../Noise.jsx";
import ScrollRevealText from "../ScrollRevealText.jsx";
import { useAvisAnimation } from "../../scripts/avis-clients.js";
import { clientReviews } from "../../data/avis-clients.js";
import logoMLD from "../../assets/images/logo-mld-studio.png";

function StarRating({ rating = 5, className = "review-stars" }) {
  const rounded = Math.round(Number(rating) || 5);
  return (
    <div
      className={className}
      role="img"
      aria-label={`${rating} sur 5 étoiles`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`review-star ${star <= rounded ? "is-filled" : "is-empty"}`}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

// Section AvisClients : carrousel d'avis clients authentiques avec portrait en parallaxe.
function AvisClients() {
  const [activeReview, setActiveReview] = useState(0);
  const sectionRef = useAvisAnimation(activeReview);

  const reviews = clientReviews;
  const currentReview = reviews[activeReview] || reviews[0];

  const showPreviousReview = () => {
    if (reviews.length <= 1) return;
    setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNextReview = () => {
    if (reviews.length <= 1) return;
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  if (!currentReview) return null;

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
          <ScrollRevealText
            as="h2"
            id="reviews-title"
            aria-label="Avis de nos clients"
            lines={["Avis de nos", "clients."]}
          />
        </header>

        <article
          className="review-featured review-slide"
          key={currentReview.id || activeReview}
          aria-live="polite"
        >
          <div className="reviews-intro-row">
            <p className="reviews-intro-copy">
              Nous laissons les <strong>résultats parler.</strong> Mais parfois, les personnes derrière ont <strong>quelque chose à ajouter.</strong>
            </p>
            {reviews.length > 1 && (
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
            )}
          </div>

          <div className="review-copy">
            <svg
              className="review-quote-icon"
              viewBox="0 0 40 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 32V18.286L8.889 0H17.778L11.111 16H17.778V32H0ZM22.222 32V18.286L31.111 0H40L33.333 16H40V32H22.222Z" />
            </svg>

            <blockquote>
              "{currentReview.quote}"
            </blockquote>

            <div className="review-author">
              <StarRating rating={currentReview.rating} />
              <strong>{currentReview.name}</strong>
              <span>
                {currentReview.role}
                {currentReview.source && (
                  <small className="review-source"> · Avis {currentReview.source}</small>
                )}
              </span>
            </div>
          </div>

          <div className="review-visual-column">
            <div
              className="review-image-stage"
              aria-label={`Photo de profil ou logo pour ${currentReview.name}`}
            >
              <img
                className="review-image-background"
                src={currentReview.image || logoMLD}
                alt=""
                aria-hidden="true"
              />
              <Noise className="media-noise" opacity={0.11} />
              <figure className="review-image-foreground">
                <img
                  src={currentReview.image || logoMLD}
                  alt={currentReview.name}
                  loading="lazy"
                  decoding="async"
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
