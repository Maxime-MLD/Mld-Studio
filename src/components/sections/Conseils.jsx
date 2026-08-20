import Noise from "../Noise.jsx";
import { newsArticles } from "../../data/conseils.js";
import { useConseilsAnimation } from "../../scripts/conseils.js";

// Section Conseils : grille éditoriale (journal / actualités).
function Conseils() {
  const sectionRef = useConseilsAnimation();

  return (
    <section
      ref={sectionRef}
      id="journal"
      className="news-section"
      aria-labelledby="news-title"
    >
      <div className="news-inner">
        <div className="news-heading-row">
          <a className="news-more" href="/blog">
            <span className="news-more-label">
              <span>Voir plus</span>
              <span aria-hidden="true">Voir plus</span>
            </span>
          </a>
          <h2 id="news-title">
            <span>Conseils et</span>
            <span>actualités.</span>
          </h2>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <a
              className={`news-card news-card-${article.variant}`}
              href={article.href}
              key={article.title}
              aria-label={`${article.title}, publié le ${article.date}`}
            >
              {article.variant === "feature" ? (
                <div className="news-feature-card">
                  <img
                    src={article.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: article.imagePosition }}
                  />
                  <svg
                    className="news-arrow"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <polyline points="9 6 18 6 18 15" />
                  </svg>
                  <div className="news-card-copy">
                    <h3>{article.title}</h3>
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </div>
                </div>
              ) : (
                <>
                  <figure className="news-card-image">
                    <img
                      src={article.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: article.imagePosition }}
                    />
                    <Noise className="media-noise" opacity={0.11} />
                  </figure>
                  <div className="news-card-copy">
                    <h3>{article.title}</h3>
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Conseils;
