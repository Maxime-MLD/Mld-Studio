import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import { realisationsPageProjects } from "../data/realisations-page.js";
import { faqRealisationsItems } from "../data/faq-realisations.js";
import { useProjectMarquee } from "../scripts/realisations.js";
import "./RealisationsPage.css";

// Page /realisations.
export default function RealisationsPage() {
  const fallbackImage = "/assets/hero.png";

  const handleImageError = (event) => {
    if (!event.currentTarget.src.endsWith(fallbackImage)) {
      event.currentTarget.src = fallbackImage;
    }
  };

  useProjectMarquee(".realis-projects");

  return (
    <>
      <SEO
        title="Réalisations"
        path="/realisations"
        description="Découvrez les sites vitrines créés par MLD Dev pour des artisans, restaurants et commerces à Roanne et dans la Loire."
      />

      <main>
        <Navbar />
        {/* Bande sombre : titre de page + grain (calqué sur Mattis /work). */}
        <section className="realis-hero" aria-labelledby="realis-hero-title">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="realis-hero-content">
            <div className="realis-hero-grid">
              <div className="realis-hero-left">
                <p className="realis-hero-sub">
                  Nous concevons des sites qui <strong>performent.</strong>
                  <br />
                  Voici à quoi cela ressemble <strong>en pratique.</strong>
                </p>
              </div>

              <div className="realis-hero-right">
                <h1 id="realis-hero-title" className="realis-hero-title">
                  <span>Projets</span>
                  <span>réalisés.</span>
                </h1>
              </div>
            </div>

            <div className="realis-hero-bottom">
              <span className="realis-hero-year">2019–26©</span>
            </div>
          </div>
        </section>

        {/* Liste des projets : classes existantes = ligne centrale + scroll
            épinglé + images au-dessus de la ligne. Scopée par .realis-projects
            pour masquer la ligne sur mobile sans toucher la home. */}
        <section
          className="portfolio-section realis-projects"
          aria-label="Projets réalisés"
        >
          {realisationsPageProjects.map((project, index) => {
            const image = project.image || fallbackImage;

            return (
              <article key={index} className="project-slide">
                <div className="project-backdrop" aria-hidden="true">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    style={{ objectPosition: project.imagePosition }}
                    onError={handleImageError}
                  />
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

                    {/* Chaque projet ouvre le site en ligne dans un nouvel onglet. */}
                    <a
                      className="project-media"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le site du projet ${project.name} (nouvel onglet)`}
                    >
                      <img
                        src={image}
                        alt={project.alt || `Aperçu du projet ${project.name}`}
                        loading="lazy"
                        style={{ objectPosition: project.imagePosition }}
                        onError={handleImageError}
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
            );
          })}
        </section>

        {/* Cascade vers la FAQ : l'accent .faq-top-accent du composant Faq
            déborde sur le portfolio sombre = même effet que sur la home. */}
        <Faq
          items={faqRealisationsItems}
          eyebrow="FAQ"
          titleLines={["Avant de", "Commencer."]}
          contactHref="#contact"
          id="faq-realisations"
        />

        {/* Contact + Footer réutilisés tels quels. */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
