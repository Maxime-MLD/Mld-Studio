import statsImage from "../../assets/images/stats-image.webp";
import ScrollRevealText from "../ScrollRevealText.jsx";
import { useReveal } from "../../scripts/reveal.js";

// Section « Bâti sur la réputation » : note Google + % de recommandations.
function Stats() {
  const sectionRef = useReveal({ threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className="reputation-section"
      aria-labelledby="reputation-title"
    >
      <div className="reputation-inner">
        <header className="reputation-header">
          <p>Pourquoi nous&nbsp;?</p>
          <ScrollRevealText
            as="h2"
            id="reputation-title"
            aria-label="Bâti sur la confiance"
            lines={["Bâti sur la", "confiance."]}
          />
        </header>

        <div className="reputation-rows">
          <div className="reputation-row reputation-row-left">
            <article className="reputation-card reputation-card-dark">
              <p>Note moyenne des clients sur Google</p>
              <div className="reputation-card-bottom">
                <strong aria-label="Un premier avis client à venir">/5</strong>
                <a href="#avis">
                  Voir l’avis{" "}
                  <span aria-hidden="true">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          </div>

          <div className="reputation-row reputation-row-right">
            <article className="reputation-card reputation-card-light">
              <p>
                Chaque projet est suivi
                <br />
                directement par Maxime
              </p>
              <div className="reputation-card-bottom">
                <strong aria-label="Cent pour cent des projets suivis directement">
                  /100%
                </strong>
                <a href="#contact">
                  Démarrer un projet{" "}
                  <span aria-hidden="true">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          </div>

          <div className="reputation-trust-row" aria-hidden="true">
            <div className="reputation-trust-mark">
              <img src={statsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
