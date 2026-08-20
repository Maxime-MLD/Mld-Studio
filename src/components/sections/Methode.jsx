import { useMethodeCounters } from "../../scripts/methode.js";
import avatarImage from "../../assets/images/avatar.webp";

// Section Methode : chiffres clés animés + citation de la direction.
function Methode() {
  const {
    sectionRef,
    projectCountRef,
    loadingTimeRef,
    tailoredRateRef,
  } = useMethodeCounters();

  return (
    <section
      ref={sectionRef}
      id="methode"
      className="method-section"
      aria-labelledby="method-title"
    >
      <div className="method-inner">
        <p className="method-label">Notre méthode</p>

        <div className="method-layout">
          <div className="method-stats" aria-label="Quelques chiffres">
            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong ref={projectCountRef}>20+</strong>
                <p>
                  Projets <b>livrés</b> avec une expérience pensée pour{" "}
                  <b>convertir</b>.
                </p>
              </div>
            </article>

            <article className="method-stat method-stat-left">
              <i aria-hidden="true" />
              <div>
                <strong ref={loadingTimeRef}>3,2 S</strong>
                <p>
                  Temps de chargement visé avant une{" "}
                  <b>première interaction fluide</b>.
                </p>
              </div>
            </article>

            <article className="method-stat method-stat-right">
              <i aria-hidden="true" />
              <div>
                <strong ref={tailoredRateRef}>100%</strong>
                <p>
                  Des créations <b>sur mesure</b>, rapides et entièrement{" "}
                  <b>responsives</b>.
                </p>
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
              <p>
                <strong>Je ne cherche pas le volume.</strong> Je choisis les
                projets où mon approche peut créer une{" "}
                <strong>différence mesurable</strong>. Chaque site est conçu
                pour durer, évoluer et rester unique.
              </p>
              <div className="method-author">
                <figure className="method-author-avatar">
                  <img src={avatarImage} alt="Portrait de Maxime Lagraa" />
                </figure>
                <p>
                  <strong>Maxime - MLD Studio</strong>
                  <small>Designer &amp; développeur — MLD.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methode;
