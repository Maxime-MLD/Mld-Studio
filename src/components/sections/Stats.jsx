import { useStatsCounters } from "../../scripts/stats.js";

// Section « Bâti sur la réputation » : note Google + % de recommandations.
function Stats() {
  const { sectionRef, rating, referrals } = useStatsCounters();

  return (
    <section ref={sectionRef} id="a-propos" className="reputation-section" aria-labelledby="reputation-title">
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
              <p>Note moyenne des clients<br />sur Google</p>
              <div className="reputation-card-bottom">
                <strong aria-label={`Note moyenne ${rating} sur 5`}>/{rating}+</strong>
                <a href="#contact">Nos avis <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>

          <div className="reputation-row reputation-row-right">
            <article className="reputation-card reputation-card-light">
              <p>Notre activité vient des<br />recommandations directes</p>
              <div className="reputation-card-bottom">
                <strong aria-label={`${referrals} pour cent de recommandations`}>/{referrals}%</strong>
                <a href="#contact">Démarrer un projet <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>

          <div className="reputation-trust-row" aria-hidden="true">
            <div className="reputation-trust-mark">
              <img src="/assets/hero.png" alt="" />
              <span>MLD.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
