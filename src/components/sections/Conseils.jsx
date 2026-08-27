import { useEffect } from "react";
import Noise from "../Noise.jsx";
import ScrollRevealText from "../ScrollRevealText.jsx";
import { newsArticles } from "../../data/conseils.js";
import { useConseilsAnimation } from "../../scripts/conseils.js";

// Section Conseils : grille éditoriale (journal / actualités).
function Conseils({ fullFeatureImage = false }) {
  const sectionRef = useConseilsAnimation();

  useEffect(() => {
    // Sur la page Blog, les cartes suivent immédiatement la héro : le
    // chargement natif différé suffit et évite de décoder les 4 images ensemble.
    if (fullFeatureImage) return undefined;

    const section = sectionRef.current;
    if (!section) return undefined;

    const sources = Array.from(section.querySelectorAll(".news-card img"))
      .map((image) => image.src)
      .filter((source, index, list) => source && list.indexOf(source) === index);

    let cancelled = false;
    let idleId = 0;
    let sourceIndex = 0;
    let started = false;

    const schedule = (callback) => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(callback, { timeout: 500 });
      } else {
        idleId = window.setTimeout(callback, 32);
      }
    };

    const warmNextImage = () => {
      if (cancelled || sourceIndex >= sources.length) return;

      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.src = sources[sourceIndex];
      sourceIndex += 1;

      const continueWarmup = () => {
        if (!cancelled) schedule(warmNextImage);
      };

      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).finally(continueWarmup);
      } else {
        image.onload = continueWarmup;
        image.onerror = continueWarmup;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();
        schedule(warmNextImage);
      },
      { rootMargin: "1800px 0px" },
    );

    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, [fullFeatureImage, sectionRef]);

  return (
    <section
      ref={sectionRef}
      id="journal"
      className="news-section"
      aria-labelledby="news-title"
    >
      <div className="news-inner">
        <div className="news-heading-row">
          {!fullFeatureImage && (
            <a className="news-more" href="/blog">
              <span className="news-more-label">
                <span>Voir plus</span>
                <span aria-hidden="true">Voir plus</span>
              </span>
            </a>
          )}
          <ScrollRevealText
            as="h2"
            id="news-title"
            aria-label="Conseils et actualités"
            lines={["Conseils et", "actualités."]}
          />
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
                    src={
                      fullFeatureImage || !article.avatarImage
                        ? article.image
                        : article.avatarImage
                    }
                    srcSet={
                      fullFeatureImage && article.imageMobile
                        ? `${article.imageMobile} 800w, ${article.image} 1024w`
                        : undefined
                    }
                    sizes={
                      fullFeatureImage
                        ? "(max-width: 809px) calc(100vw - 40px), 42vw"
                        : undefined
                    }
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    style={{ objectPosition: article.imagePosition }}
                  />
                  {fullFeatureImage && (
                    <Noise className="media-noise" opacity={0.11} />
                  )}
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
                      srcSet={
                        article.imageMobile
                          ? `${article.imageMobile} 800w, ${article.image} 1024w`
                          : undefined
                      }
                      sizes="(max-width: 809px) calc(100vw - 40px), 42vw"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
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
