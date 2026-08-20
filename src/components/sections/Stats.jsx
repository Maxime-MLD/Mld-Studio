import { useStatsCounters } from "../../scripts/stats.js";
import statsImage from "../../assets/images/stats-image.webp";

// Section « Bâti sur la réputation » : note Google + % de recommandations.
function Stats() {
  const { sectionRef, ratingRef, referralsRef } = useStatsCounters();

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
          <h2 id="reputation-title">
            <span>Bati sur la</span>
            <span>réputation.</span>
          </h2>
        </header>

        <div className="reputation-rows">
          <div className="reputation-row reputation-row-left">
            <article className="reputation-card reputation-card-dark">
              <p>
                Note moyenne des clients
                <br />
                sur Google
              </p>
              <div className="reputation-card-bottom">
                <strong ref={ratingRef} aria-label="Note moyenne 4.9 sur 5">
                  /4.9+
                </strong>
                <a href="#contact">
                  Nos avis <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>

          <div className="reputation-row reputation-row-right">
            <article className="reputation-card reputation-card-light">
              <p>
                Notre activité vient des
                <br />
                recommandations directes
              </p>
              <div className="reputation-card-bottom">
                <strong
                  ref={referralsRef}
                  aria-label="80 pour cent de recommandations"
                >
                  /80%
                </strong>
                <a href="#contact">
                  Démarrer un projet <span aria-hidden="true">↗</span>
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
