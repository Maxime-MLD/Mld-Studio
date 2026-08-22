import Noise from "../Noise.jsx";
import { projects } from "../../data/realisations.js";
import {
  useRealisationsAnimation,
  useProjectMarquee,
} from "../../scripts/realisations.js";
import reaImage from "../../assets/images/rea-image.webp";
import reaImageMobile from "../../assets/images/rea-image-mobile.webp";

// Bloc d'introduction « Nous créons des sites web » qui mène à la diapo.
function RealisationsIntro() {
  const sectionRef = useRealisationsAnimation();

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="build-section"
      aria-labelledby="build-title"
    >
      <div className="build-inner">
        <p className="build-era build-reveal">2026©</p>

        <h2
          id="build-title"
          className="build-title"
          aria-label="Nous créons des sites web"
        >
          <span>Nous</span>{" "}
          <span>créons des</span>{" "}
          <span>sites web.</span>
        </h2>

        <p className="build-copy build-reveal">
          Là où avancer devient <strong>évident, naturel</strong> et{" "}
          <strong>impossible à compliquer.</strong>
        </p>

        <figure className="build-visual build-reveal">
          <picture>
            <source
              media="(max-width: 809px)"
              srcSet={reaImageMobile}
              type="image/webp"
            />
            <img
              src={reaImage}
              alt="Ordinateur MLD dans un décor architectural en noir et blanc"
              loading="lazy"
              decoding="async"
              width="2560"
              height="1708"
            />
          </picture>
          <Noise className="media-noise" opacity={0.11} />
        </figure>

        <a className="build-scroll build-reveal" href="#realisations">
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
              <line x1="6" y1="2" x2="6" y2="9.5" />
              <polyline points="2.5 6 6 9.5 9.5 6" />
            </svg>
          </span>{" "}
          Voir les projets
        </a>
      </div>
    </section>
  );
}

// Diapo des 3 projets sélectionnés (pinned scroll).
function RealisationsSlides() {
  useProjectMarquee("#realisations");

  return (
    <section
      id="realisations"
      className="portfolio-section"
      aria-label="Concepts de sites sélectionnés"
    >
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="project-slide"
          style={{ "--project-ratio": project.aspectRatio || "16 / 10" }}
        >
          <div className="project-backdrop" aria-hidden="true">
            <img
              src={project.image}
              alt=""
              decoding="async"
              loading={index === 0 ? "eager" : "lazy"}
              style={{ objectPosition: project.imagePosition }}
            />
          </div>

          <div className="project-pinned-track">
            <div className="project-stage">
              <p className="project-number">(0{index + 1})</p>
              <p className="project-label">Concept</p>
              <div
                className="project-marquee-wrapper"
                role="heading"
                aria-level="3"
                aria-label={project.name}
              >
                {/* Marquee purement décoratif : le texte est rendu via ::before
                    (data-text) pour ne pas dupliquer le nom ~16× dans le DOM.
                    Le nom sémantique reste dans .project-details + aria-label. */}
                <div className="project-marquee-group" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, repeatIndex) => (
                    <span key={repeatIndex} data-text={project.name} />
                  ))}
                </div>
                <div className="project-marquee-group" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, repeatIndex) => (
                    <span key={repeatIndex} data-text={project.name} />
                  ))}
                </div>
              </div>

              {/* Au-dessus du titre blanc mais sous l'image principale : le
                  grain marque les lettres sans rendre le texte transparent. */}
              <Noise className="project-stage-noise" opacity={0.15} />

              <a
                className="project-media"
                href="#contact"
                aria-label={`Créer un projet inspiré du ${project.name}`}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    decoding="async"
                    loading={index === 0 ? "eager" : "lazy"}
                    style={{ objectPosition: project.imagePosition }}
                  />
                )}
              </a>

              <div className="project-details">
                <strong>{project.name}</strong>
                <p>
                  {project.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </p>
                <time>{project.year}</time>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

// Section Realisations : l'intro + la diapo des 3 projets.
function Realisations() {
  return (
    <>
      <RealisationsIntro />
      <RealisationsSlides />
    </>
  );
}

export default Realisations;
