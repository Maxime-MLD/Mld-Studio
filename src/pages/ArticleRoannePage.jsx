import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogRoanne from "../assets/images/blog-roanne.webp";
import "./ArticlePage.css";

// Page d'article : « Quelle est l'importance d'avoir un site internet pour les professionnels à Roanne en 2026 ? »
// Reprend rigoureusement la structure, les marges, la ligne centrale et le système visuel de la page À propos.
export default function ArticleRoannePage() {
  return (
    <>
      <SEO
        title="L'importance d'un site internet à Roanne en 2026"
        path="/blog/importance-site-internet-roanne-2026"
        description="Découvrez pourquoi avoir un site internet professionnel à Roanne en 2026 est indispensable pour attirer des clients locaux et pérenniser votre activité."
      />

      <main>
        <Navbar />

        {/* Hero avec image de la card en fond + Noise + ligne centrale */}
        <section className="article-hero" aria-labelledby="article-title">
          <div className="article-hero-bg" aria-hidden="true">
            <img src={blogRoanne} alt="" />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Quelle est</span>
              <span>l'importance d'un site</span>
              <span>à Roanne en 2026&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Stratégie / <strong>16 août 2026</strong>
            </p>
          </div>
        </section>

        {/* Contenu principal : gris, ligne centrale, cascade en haut et en bas */}
        <section
          className="article-main"
          aria-label="Contenu de l'article : Importance d'un site à Roanne en 2026"
        >
          <div className="article-main-accent-top" aria-hidden="true" />
          <div className="article-main-accent-bottom" aria-hidden="true" />

          <div className="article-inner">
            <p className="article-eyebrow">Article / Roanne</p>

            {/* Visuel latéral à gauche */}
            <figure className="article-side-visual">
              <img
                src={blogRoanne}
                alt="Présence web des entreprises à Roanne"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                En 2026, les habitudes de recherche ont définitivement évolué. À{" "}
                <strong>Roanne</strong>, <strong>Riorges</strong>,{" "}
                <strong>Le Coteau</strong> et dans toute la{" "}
                <strong>Loire</strong>, plus de <strong>88% des clients</strong>{" "}
                recherchent un artisan, un commerçant ou une entreprise sur leur
                smartphone avant d'effectuer le premier contact.
              </p>

              <h3>1. Capter les clients avant vos concurrents</h3>
              <p>
                Ne pas avoir de site internet aujourd’hui, c'est laisser{" "}
                <strong>100% de ces recherches locales</strong> à vos
                concurrents. Un site bien conçu et préparé pour le SEO local à{" "}
                <strong>Roanne</strong> vous positionne au moment exact où vos
                futurs clients ont un besoin immédiat.
              </p>

              <h3>2. Inspirer confiance et justifier vos prix</h3>
              <p>
                Un site web moderne, rapide et soigné renvoie une image{" "}
                <strong>professionnelle et haut de gamme</strong>. Il valorise
                votre <strong>savoir-faire</strong>, vos avis clients et vos{" "}
                <strong>réalisations</strong>, ce qui rassure vos prospects et
                justifie naturellement vos tarifs.
              </p>

              <h3>3. Gagner du temps et qualifier vos demandes</h3>
              <p>
                Votre site travaille pour vous <strong>24h/24</strong> : il
                présente vos services, précise vos zones d'intervention et
                répond aux questions fréquentes. Vous évitez les sollicitations
                inutiles et recevez des <strong>contacts qualifiés</strong>{" "}
                prêts à concrétiser un projet.
              </p>

              <h3>4. Posséder un actif durable</h3>
              <p>
                Contrairement aux réseaux sociaux soumis aux baisses de portée
                et aux changements d’algorithmes, votre site internet vous{" "}
                <strong>appartient à 100%</strong>. C’est la vitrine officielle
                et le pilier central de la réputation de votre entreprise.
              </p>

              <div className="article-cta-row">
                <a className="article-back-link" href="/blog">
                  ← Retour à tous les articles
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Footer */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
