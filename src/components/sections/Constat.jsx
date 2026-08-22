import Noise from "../Noise.jsx";
import { useConstatAnimation } from "../../scripts/constat.js";
import constatImage from "../../assets/images/constat-image.webp";

// Section « Stratégie avant les pixels » : le constat qui ouvre le discours.
function Constat() {
  const sectionRef = useConstatAnimation();

  return (
    <section
      ref={sectionRef}
      id="strategie"
      className="strategy-section"
      aria-labelledby="strategy-title"
    >
      <div className="strategy-grid-lines" aria-hidden="true">
        <i />
        <i />
      </div>

      <div className="strategy-inner">
        <div
          className="strategy-meta reveal-item"
          aria-label="Informations du studio"
        >
          <span>Lancé</span>
          <span>20+ projets</span>
          <span>2026©</span>
        </div>

        <h2
          id="strategy-title"
          className="strategy-title"
          aria-label="Stratégie avant les pixels"
        >
          <span>Stratégie</span>{" "}
          <span>avant les</span>{" "}
          <span>pixels.</span>
        </h2>

        <div className="strategy-copy reveal-item">
          <p>
            Les visiteurs décident s’ils font <strong>confiance</strong> à votre
            site avant même d’en lire un mot. Cette crédibilité se joue{" "}
            <strong>presque instantanément</strong> : dans{" "}
            <strong>l’espace, la typographie, l’image et la structure.</strong>
          </p>
          <a href="#a-propos">
            À propos{" "}
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

        <figure className="strategy-visual reveal-item">
          <img
            src={constatImage}
            alt="Détail d’un ordinateur en aluminium dans un décor architectural"
          />
          <Noise className="media-noise" opacity={0.11} />
        </figure>

        <div className="strategy-stat reveal-item">
          <strong>12+</strong>
          <p>
            Secteurs dans lesquels nos sites dépassent les standards habituels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Constat;
