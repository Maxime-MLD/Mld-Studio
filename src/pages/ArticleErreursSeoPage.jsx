import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogRoad from "../assets/images/blog-road.webp";
import "./ArticlePage.css";

// Page d'article : « 7 erreurs qui empêchent votre site d’être trouvé à Roanne et ses environs »
export default function ArticleErreursSeoPage() {
  return (
    <>
      <SEO
        title="7 erreurs qui bloquent votre visibilité à Roanne et ses environs"
        path="/blog/erreurs-seo-local-roanne"
        description="Découvrez les 7 pièges fréquents qui empêchent un site professionnel d'apparaître sur Google à Roanne et comment les corriger."
      />

      <main>
        <Navbar />

        {/* Hero avec image de la card en fond + Noise + ligne centrale */}
        <section className="article-hero" aria-labelledby="article-title">
          <div className="article-hero-bg" aria-hidden="true">
            <img src={blogRoad} alt="" />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>7 erreurs</span>
              <span>qui bloquent votre visibilité</span>
              <span>à Roanne</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & SEO / <strong>29 juillet 2026</strong>
            </p>
          </div>
        </section>

        {/* Contenu principal : gris, ligne centrale, cascade en haut et en bas */}
        <section
          className="article-main"
          aria-label="Contenu de l'article : 7 erreurs SEO local à Roanne"
        >
          <div className="article-main-accent-top" aria-hidden="true" />
          <div className="article-main-accent-bottom" aria-hidden="true" />

          <div className="article-inner">
            <p className="article-eyebrow">Article / Référencement</p>

            {/* Visuel latéral à gauche */}
            <figure className="article-side-visual">
              <img
                src={blogRoad}
                alt="Audit SEO local et erreurs de visibilité à Roanne"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                Avoir un site en ligne ne garantit pas d'attirer des clients. Si
                votre site est introuvable sur Google à <strong>Roanne</strong>{" "}
                ou dans la <strong>Loire</strong>, l'une de ces{" "}
                <strong>7 erreurs courantes</strong> en est très probablement la
                cause.
              </p>

              <h3>1. Oublier de cibler précisément Roanne et ses communes</h3>
              <p>
                Un site qui parle de ses services sans jamais mentionner{" "}
                <strong>Roanne</strong>, <strong>Riorges</strong> ou le{" "}
                <strong>bassin roannais</strong> dans ses titres et balises clés
                est invisible pour les algorithmes locaux de Google.
              </p>

              <h3>2. Un temps de chargement trop long</h3>
              <p>
                Plus de <strong>53% des visiteurs quittent un site</strong> qui
                met plus de 3 secondes à s'afficher sur mobile. Un site lourd ou
                mal optimisé est pénalisé par Google dans son positionnement.
              </p>

              <h3>3. Une mauvaise expérience sur smartphone</h3>
              <p>
                Aujourd’hui, Google évalue et classe les sites web uniquement
                sur leur <strong>version mobile (Mobile-First)</strong>. Un
                texte trop petit ou un menu illisible sur téléphone fait chuter
                vos conversions.
              </p>

              <h3>4. Des coordonnées (NAP) incohérentes</h3>
              <p>
                Si votre <strong>Nom</strong>, votre <strong>Adresse</strong> ou
                votre <strong>Numéro de téléphone</strong> diffèrent entre votre
                site, votre fiche Google et vos annuaires, Google perd confiance
                et rétrograde votre position.
              </p>

              <h3>5. Un contenu générique sans preuves concrètes</h3>
              <p>
                Des textes impersonnels sans photos de réalisations ni retours
                clients n'incitent personne à l'action. Vos prospects ont besoin
                de voir votre travail réel pour vous contacter.
              </p>

              <h3>6. Ne pas déclarer les zones d'intervention voisines</h3>
              <p>
                Ne vous limitez pas au centre de Roanne : intégrez
                naturellement les communes limitrophes (Le Coteau, Mably,
                Charlieu, Commelle-Vernay) pour élargir votre zone de chalandise.
              </p>

              <h3>7. L'absence d'appels à l'action visibles</h3>
              <p>
                Un numéro de téléphone masqué ou un formulaire trop long
                découragent les prospects. Un bouton d'appel direct en un clic
                sur mobile multiplie immédiatement vos contacts.
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
