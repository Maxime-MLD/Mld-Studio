import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import "../styles/LegalPage.css";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page introuvable"
        path="/404"
        description="Cette page n'existe pas ou a été déplacée."
        noindex
      />
      <main className="legal-page">
        <Navbar />
        <section className="legal-hero" aria-labelledby="not-found-title">
          <Noise className="noise-behind" opacity={0.11} />
          <div className="legal-hero-inner">
            <p className="legal-hero-eyebrow">Erreur 404</p>
            <h1 id="not-found-title" className="legal-hero-title">
              <span>Page</span>{" "}
              <span>introuvable.</span>
            </h1>
            <p className="legal-hero-sub">
              L'adresse demandée n'existe plus ou comporte une erreur.
            </p>
            <a className="legal-back" href="/">
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
                  <line x1="9.5" y1="6" x2="2.5" y2="6" />
                  <polyline points="6 2.5 2.5 6 6 9.5" />
                </svg>
              </span>{" "}
              Retour à l'accueil
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
