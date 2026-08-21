import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import { buildGraph } from "../seo/jsonld/graph.js";
import { buildBreadcrumb } from "../seo/jsonld/breadcrumb.js";
import { siteConfig } from "../seo/siteConfig.js";
import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contactez votre studio web à Roanne"
        path="/contact"
        description="Présentez votre projet de site internet à MLD Studio. Réponse personnelle sous 24 h, du lundi au vendredi, à Roanne et partout en France."
        jsonLd={buildGraph(
          {
            "@type": "ContactPage",
            "@id": `${siteConfig.url}/contact#webpage`,
            url: `${siteConfig.url}/contact`,
            name: "Contact MLD Studio",
            description:
              "Coordonnées et formulaire de contact de MLD Studio, studio de création de sites internet à Roanne.",
            isPartOf: { "@id": `${siteConfig.url}/#website` },
            about: { "@id": `${siteConfig.url}/#organization` },
          },
          buildBreadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />

      <main className="contact-page">
        <Navbar />

        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="contact-page-hero-content">
            <div className="contact-page-hero-grid">
              <div className="contact-page-hero-left">
                <p className="contact-page-hero-sub">
                  Un échange direct avec la personne qui va <strong>concevoir</strong>
                  {" "}et <strong>développer votre site.</strong>
                </p>
              </div>

              <div className="contact-page-hero-right">
                <h1 id="contact-page-title" className="contact-page-hero-title">
                  <span>Parlons de</span>
                  {" "}
                  <span>votre projet.</span>
                </h1>
              </div>
            </div>

            <div className="contact-page-hero-bottom">
              <span className="contact-page-year">2026©</span>
            </div>
          </div>
        </section>

        <section className="contact-page-intro" aria-labelledby="contact-intro-title">
          <div className="contact-page-accent-top" aria-hidden="true" />
          <div className="contact-page-accent-bottom" aria-hidden="true" />

          <div className="contact-page-intro-inner">
            <div className="contact-page-intro-aside">
              <p className="contact-page-eyebrow">Premier échange</p>
              <ol className="contact-page-steps">
                <li><span>01</span>Votre besoin</li>
                <li><span>02</span>Une direction claire</li>
                <li><span>03</span>Un devis adapté</li>
              </ol>
            </div>

            <div className="contact-page-intro-copy">
              <h2 id="contact-intro-title">
                <span>Commençons</span>
                {" "}
                <span>simplement.</span>
              </h2>
              <p>
                Décrivez votre activité, vos objectifs et ce qui vous bloque
                aujourd’hui. <strong>Je vous réponds personnellement</strong> avec
                une première orientation, sans rendez-vous commercial inutile.
              </p>
              <div className="contact-page-direct">
                <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a>
                <a href="tel:+33662599771">06 62 59 97 71</a>
                <span>Du lundi au vendredi — 9 h à 19 h</span>
              </div>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
