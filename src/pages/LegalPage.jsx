import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import "../styles/LegalPage.css";

// Un bloc légal (numéro + titre + contenu). Réutilisé par les deux pages.
export function LegalBlock({ num, title, children }) {
  return (
    <div className="legal-block">
      <div className="legal-block-head">
        <span className="legal-block-num">{num}</span>
        <h2>{title}</h2>
      </div>
      <div className="legal-block-body">{children}</div>
    </div>
  );
}

// Mise en page partagée des pages légales (hero + corps + FAQ éventuelle +
// Contact + Footer). Le CONTENU (blocs) est passé en children → chaque page a
// son propre contenu distinct : plus de contenu dupliqué entre les deux URL.
export default function LegalPage({
  seoTitle,
  seoDescription,
  path,
  heroLines,
  heroSub,
  date = "18 août 2026",
  children,
  faqItems,
  faqTitleLines,
  otherPage,
}) {
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={path}
        noindex={true}
      />

      <main className="legal-page">
        {/* Bande sombre : titre de page + grain. */}
        <section className="legal-hero">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="legal-hero-inner">
            <p className="legal-hero-eyebrow">Informations légales</p>
            <h1 className="legal-hero-title">
              {heroLines.map((line, i) => (
                <span key={line}>
                  {i > 0 ? " " : ""}
                  {line}
                </span>
              ))}
            </h1>
            <p className="legal-hero-sub">{heroSub}</p>
            <p className="legal-hero-date">Dernière mise à jour : {date}</p>
          </div>
        </section>

        {/* Corps clair : ligne verticale centrale + cascade + grille titre/texte. */}
        <section className="legal-body">
          <div className="legal-body-accent" aria-hidden="true" />

          <div className="legal-inner">{children}</div>

          <div className="legal-links">
            {otherPage && (
              <Link className="legal-back" to={otherPage.path}>
                {otherPage.label} →
              </Link>
            )}
            <Link className="legal-back" to="/">
              ← Retour à l’accueil
            </Link>
          </div>
        </section>

        {faqItems && (
          <Faq
            items={faqItems}
            eyebrow="FAQ"
            titleLines={faqTitleLines}
            contactHref="#contact"
            id="faq-legal"
          />
        )}

        <Contact />
        <Footer />
      </main>
    </>
  );
}
