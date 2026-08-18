import { useMethodeCounters } from "../../scripts/methode.js";

// Section Methode : chiffres clés animés + citation de la direction.
function Methode() {
  const { sectionRef, projectCount, loadingTime, tailoredRate } = useMethodeCounters();

  return (
    <section ref={sectionRef} id="methode" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="method-label">Notre méthode</p>

        <div className="method-layout">
          <div className="method-stats" aria-label="Quelques chiffres">
            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong>{projectCount}+</strong>
                <p>Projets <b>livrés</b> avec une expérience pensée pour <b>convertir</b>.</p>
              </div>
            </article>

            <article className="method-stat method-stat-left">
              <i aria-hidden="true" />
              <div>
                <strong>{loadingTime} S</strong>
                <p>Temps de chargement visé avant une <b>première interaction fluide</b>.</p>
              </div>
            </article>

            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong>{tailoredRate}%</strong>
                <p>Des créations <b>sur mesure</b>, rapides et entièrement <b>responsives</b>.</p>
              </div>
            </article>
          </div>

          <div className="method-message">
            <h2 id="method-title">
              <span>Chaque projet</span>
              <span>commence par</span>
              <span>un problème</span>
              <span>à résoudre.</span>
            </h2>

            <div className="method-quote">
              <p><strong>Je ne cherche pas le volume.</strong> Je choisis les projets où mon approche peut créer une <strong>différence mesurable</strong>. Chaque site est conçu pour durer, évoluer et rester unique.</p>
              <div className="method-author">
                <span>ML</span>
                <p><strong>Maxime Lagraa</strong><small>Designer &amp; développeur — MLD.</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methode;
