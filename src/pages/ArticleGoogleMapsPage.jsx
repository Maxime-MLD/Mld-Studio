import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogGoogle from "../assets/images/blog-google.webp";
import "./ArticlePage.css";

// Page d'article : « Comment apparaître sur Google Maps à Roanne avec une fiche optimisée ? »
export default function ArticleGoogleMapsPage() {
  return (
    <>
      <SEO
        title="Apparaître sur Google Maps à Roanne avec une fiche optimisée"
        path="/blog/google-maps-roanne-fiche-optimisee"
        description="Guide pratique pour positionner votre entreprise dans le top 3 de Google Maps à Roanne et générer plus d'appels clients locaux."
      />

      <main>
        <Navbar />

        {/* Hero avec image de la card en fond + Noise + ligne centrale */}
        <section className="article-hero" aria-labelledby="article-title">
          <div className="article-hero-bg" aria-hidden="true">
            <img src={blogGoogle} alt="" />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Comment apparaître</span>
              <span>sur Google Maps</span>
              <span>à Roanne&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Visibilité / <strong>8 août 2026</strong>
            </p>
          </div>
        </section>

        {/* Contenu principal : gris, ligne centrale, cascade en haut et en bas */}
        <section
          className="article-main"
          aria-label="Contenu de l'article : Optimiser sa fiche Google Maps à Roanne"
        >
          <div className="article-main-accent-top" aria-hidden="true" />
          <div className="article-main-accent-bottom" aria-hidden="true" />

          <div className="article-inner">
            <p className="article-eyebrow">Article / Google Maps</p>

            {/* Visuel latéral à gauche */}
            <figure className="article-side-visual">
              <img
                src={blogGoogle}
                alt="Fiche Google Maps et visibilité locale à Roanne"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                Lorsque vos futurs clients cherchent un professionnel à{" "}
                <strong>Roanne</strong> ou dans la <strong>Loire</strong>,{" "}
                <strong>Google Maps</strong> affiche le pack local des 3
                premiers résultats. C’est à cet endroit stratégique que se jouent{" "}
                <strong>plus de 70% des appels téléphoniques directs</strong>.
              </p>

              <h3>1. Choisir la catégorie principale la plus précise</h3>
              <p>
                L'erreur classique est de choisir une catégorie trop générique.
                Sélectionnez le terme exact qui correspond à votre cœur de métier
                (ex: <em>Menuisier</em>, <em>Paysagiste</em>,{" "}
                <em>Plombier chauffagiste</em>) et complétez avec des catégories
                secondaires ciblées.
              </p>

              <h3>2. Définir votre zone d'intervention exacte</h3>
              <p>
                Renseignez clairement les communes desservies :{" "}
                <strong>Roanne</strong>, <strong>Riorges</strong>,{" "}
                <strong>Le Coteau</strong>, <strong>Mably</strong>,{" "}
                <strong>Charlieu</strong>... Google s'assure ainsi de vous
                suggérer aux internautes situés dans votre périmètre réel.
              </p>

              <h3>3. Collecter des avis clients avec des mots-clés naturels</h3>
              <p>
                Les avis récents et positifs sont le <strong>premier facteur de classement</strong>{" "}
                sur Google Maps. Encouragez vos clients satisfaits à mentionner la
                prestation réalisée et la commune dans leur commentaire pour
                renforcer votre autorité locale.
              </p>

              <h3>4. Publier des photos réelles de vos réalisations</h3>
              <p>
                Les fiches avec des visuels authentiques et réguliers de
                chantiers ou de locaux enregistrent{" "}
                <strong>42% de demandes d'itinéraire en plus</strong>. Les clients
                veulent voir la réalité de votre travail avant de vous contacter.
              </p>

              <h3>5. Lier votre fiche à un site internet localement optimisé</h3>
              <p>
                Google croise les informations de votre fiche avec celles de
                votre <strong>site web</strong>. Un site rapide, responsive et
                structuré avec les bonnes balises locales propulse votre fiche en
                tête des résultats Maps.
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
