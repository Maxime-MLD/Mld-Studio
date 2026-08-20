import Noise from "../Noise.jsx";
import { projects } from "../../data/realisations.js";
import {
  useRealisationsAnimation,
  useProjectMarquee,
} from "../../scripts/realisations.js";
import reaImage from "../../assets/images/rea-image.webp";

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
          <span>Nous</span>
          <span>créons des</span>
          <span>sites web.</span>
        </h2>

        <p className="build-copy build-reveal">
          Là où avancer devient <strong>évident, naturel</strong> et{" "}
          <strong>impossible à compliquer.</strong>
        </p>

        <figure className="build-visual build-reveal">
          <img
            src={reaImage}
            alt="Ordinateur MLD dans un décor architectural en noir et blanc"
          />
          <Noise className="media-noise" opacity={0.11} />
        </figure>

        <a className="build-scroll build-reveal" href="#realisations">
          <span>↓</span> Voir les projets
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
      aria-label="Projets sélectionnés"
    >
      {projects.map((project, index) => (
        <article key={project.name} className="project-slide">
          <div className="project-backdrop" aria-hidden="true">
            <img
              src={project.image}
              alt=""
              decoding="async"
              loading={index === 0 ? "eager" : "lazy"}
              style={{ objectPosition: project.imagePosition }}
            />
            {/* Fond teinté sombre : le grain neutre y perd du contraste, d'où une
                valeur plus haute que sur les images de premier plan. */}
            <Noise className="media-noise" opacity={0.2} />
          </div>

          <div className="project-pinned-track">
            <div className="project-stage">
              <p className="project-number">(0{index + 1})</p>
              <p className="project-label">Portfolio</p>
              <div
                className="project-marquee-wrapper"
                role="heading"
                aria-level="3"
                aria-label={project.name}
              >
                <div className="project-marquee-group">
                  {Array.from({ length: 8 }).map((_, repeatIndex) => (
                    <span key={repeatIndex} aria-hidden={repeatIndex !== 0}>
                      {project.name}
                    </span>
                  ))}
                </div>
                <div className="project-marquee-group" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, repeatIndex) => (
                    <span key={repeatIndex}>{project.name}</span>
                  ))}
                </div>
              </div>

              <a
                className="project-media"
                href="#contact"
                aria-label={`Découvrir le projet ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.name}`}
                  decoding="async"
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{ objectPosition: project.imagePosition }}
                />
                <Noise className="media-noise" opacity={0.11} />
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
