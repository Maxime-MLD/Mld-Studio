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
              <span>Page</span>
              <span>introuvable.</span>
            </h1>
            <p className="legal-hero-sub">
              L'adresse demandée n'existe plus ou comporte une erreur.
            </p>
            <a className="legal-back" href="/">
              ← Retour à l'accueil
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
