import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogThink from "../assets/images/blog-think.webp";
import "./ArticlePage.css";

// Page d'article : « Monopage ou multipage : que choisir dans la Loire ? »
export default function ArticleMonopageMultipagePage() {
  return (
    <>
      <SEO
        title="Site monopage ou multipage : que choisir dans la Loire ?"
        path="/blog/site-monopage-multipage-loire"
        description="Comparatif complet entre site internet monopage et multipage pour choisir la formule idéale selon vos objectifs dans la Loire."
      />

      <main>
        <Navbar />

        {/* Hero avec image de la card en fond + Noise + ligne centrale */}
        <section className="article-hero" aria-labelledby="article-title">
          <div className="article-hero-bg" aria-hidden="true">
            <img src={blogThink} alt="" />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Monopage ou multipage :</span>
              <span>que choisir</span>
              <span>dans la Loire&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Conception / <strong>18 juillet 2026</strong>
            </p>
          </div>
        </section>

        {/* Contenu principal : gris, ligne centrale, cascade en haut et en bas */}
        <section
          className="article-main"
          aria-label="Contenu de l'article : Monopage ou multipage dans la Loire"
        >
          <div className="article-main-accent-top" aria-hidden="true" />
          <div className="article-main-accent-bottom" aria-hidden="true" />

          <div className="article-inner">
            <p className="article-eyebrow">Article / Architecture</p>

            {/* Visuel latéral à gauche */}
            <figure className="article-side-visual">
              <img
                src={blogThink}
                alt="Architecture de site monopage ou multipage dans la Loire"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                Avant de lancer un projet web à <strong>Roanne</strong> ou dans
                la <strong>Loire</strong>, une question essentielle se pose :
                vaut-il mieux concentrer votre message sur une{" "}
                <strong>page unique (monopage)</strong> ou déployer un{" "}
                <strong>site multipage</strong> structuré ?
              </p>

              <h3>1. Le site vitrine monopage (One-Page)</h3>
              <p>
                <strong>Pour qui ?</strong> Les artisans, professions libérales,
                ou activités de service avec une offre claire et directe.
              </p>
              <p>
                <strong>Les avantages :</strong> Tout le contenu essentiel est
                regroupé dans un parcours fluide. Le visiteur défile sans
                friction, ce qui optimise la vitesse de chargement sur mobile et
                favorise une prise de contact rapide par téléphone ou devis.
              </p>

              <h3>2. Le site vitrine multipage</h3>
              <p>
                <strong>Pour qui ?</strong> Les entreprises avec plusieurs
                métiers distincts, un catalogue étendu de réalisations, ou une
                ambition forte de référencement sur plusieurs secteurs.
              </p>
              <p>
                <strong>Les avantages :</strong> Une page dédiée pour chaque
                prestation permet de positionner des mots-clés spécifiques sur
                Google. C'est le format idéal pour détailler son expertise et
                bâtir une crédibilité institutionnelle.
              </p>

              <h3>3. Le verdict pour votre entreprise</h3>
              <p>
                Si votre priorité est d’avoir une présence percutante, moderne et
                rapide à mettre en place avec un budget maîtrisé, optez pour le{" "}
                <strong>monopage</strong>. Si vous avez besoin de cibler
                plusieurs villes ou d'expliquer des expertises très distinctes,
                choisissez le <strong>multipage</strong>.
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
