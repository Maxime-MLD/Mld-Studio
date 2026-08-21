import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogGoogle from "../assets/images/blog-google.webp";
import blogGoogleMobile from "../assets/images/blog-google-mobile.webp";
import "../styles/ArticlePage.css";
import { buildArticleGraph } from "../seo/articleSeo.js";
import ArticleRelatedLinks from "../components/article/ArticleRelatedLinks.jsx";

const article = {
  headline: "Comment optimiser sa fiche Google Business à Roanne ?",
  description:
    "Guide pratique pour vérifier son éligibilité, compléter sa fiche Google Business et améliorer sa visibilité locale à Roanne.",
  path: "/blog/google-maps-roanne-fiche-optimisee",
  image: blogGoogle,
  datePublished: "2026-08-08",
  dateModified: "2026-08-20",
};

// Page d'article : « Comment apparaître sur Google Maps à Roanne avec une fiche optimisée ? »
export default function ArticleGoogleMapsPage() {
  return (
    <>
      <SEO
        title="Optimiser sa fiche Google Business à Roanne"
        path={article.path}
        description={article.description}
        image={blogGoogle}
        imageAlt="Optimisation d'une fiche Google Business à Roanne"
        type="article"
        publishedTime={article.datePublished}
        modifiedTime={article.dateModified}
        jsonLd={buildArticleGraph(article)}
      />

      <main>
        <Navbar />

        {/* Hero avec image de la card en fond + Noise + ligne centrale */}
        <section className="article-hero" aria-labelledby="article-title">
          <div className="article-hero-bg" aria-hidden="true">
            <img
              src={blogGoogle}
              srcSet={`${blogGoogleMobile} 800w, ${blogGoogle} 1920w`}
              sizes="100vw"
              alt=""
              width="1920"
              height="2560"
              decoding="async"
              fetchPriority="high"
            />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Comment apparaître</span>
              <span>sur Google Maps</span>
              <span>à Roanne&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Visibilité /{" "}
              <time dateTime="2026-08-08">8 août 2026</time> / Par Maxime Lagraa
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
                srcSet={`${blogGoogleMobile} 800w, ${blogGoogle} 1920w`}
                sizes="(max-width: 809px) calc(100vw - 40px), 36vw"
                alt="Fiche Google Maps et visibilité locale à Roanne"
                width="1920"
                height="2560"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                Une fiche Google Business peut apparaître dans Google Search et
                Maps lorsqu’un internaute cherche une entreprise ou un lieu à
                proximité. Elle doit toutefois représenter une activité
                éligible et réelle. Il n’existe aucune méthode permettant
                d’acheter une meilleure position : Google explique que les
                résultats locaux reposent principalement sur la pertinence, la
                distance et la notoriété.
              </p>

              <h2>1. Vérifier d’abord l’éligibilité de l’entreprise</h2>
              <p>
                Une entreprise doit avoir un contact en personne avec ses
                clients pendant ses horaires déclarés pour être éligible. Une
                activité exclusivement en ligne n’est normalement pas admise.
                Une entreprise qui se déplace chez ses clients peut fonctionner
                comme entreprise de zone de service et masquer son adresse
                résidentielle. Cette vérification doit précéder toute
                optimisation afin d’éviter une suspension du profil.
              </p>

              <h2>2. Compléter les informations avec précision</h2>
              <p>
                Le nom, la catégorie, le téléphone, les horaires et le site web
                doivent correspondre à la réalité. La catégorie principale doit
                décrire le cœur de métier, et non une liste de mots-clés. Les
                catégories secondaires servent uniquement aux autres activités
                réellement proposées. Les mêmes coordonnées doivent apparaître
                sur le site et sur les profils professionnels pertinents.
              </p>

              <h2>3. Définir une zone de service réaliste</h2>
              <p>
                Pour un professionnel qui se déplace, les communes renseignées
                doivent correspondre à sa zone d’intervention habituelle. Il
                vaut mieux indiquer Roanne, Riorges, Mably, Le Coteau, Villerest
                ou Charlieu seulement si ces zones sont réellement desservies.
                Ajouter une longue liste de villes ne garantit pas une meilleure
                visibilité et ne remplace pas la proximité avec la personne qui
                effectue la recherche.
              </p>

              <h2>4. Demander des avis authentiques, sans contrepartie</h2>
              <p>
                Google autorise l’envoi d’un lien ou d’un QR code pour inviter
                un client à partager son expérience. En revanche, offrir une
                remise ou un cadeau en échange d’un avis est interdit. Les avis
                doivent refléter une expérience véritable. Répondre de façon
                professionnelle, y compris aux critiques, aide aussi les futurs
                clients à comprendre votre manière de travailler.
              </p>

              <h2>5. Ajouter des photos qui montrent la réalité</h2>
              <p>
                Des photos récentes de l’équipe, du lieu accessible au public,
                des produits ou des interventions peuvent aider un prospect à
                se projeter. Elles doivent être nettes, représentatives et
                respecter les droits des personnes photographiées. Pour une
                activité sans local public, il est inutile de simuler une
                façade : montrez plutôt le travail, les outils et les résultats.
              </p>

              <h2>6. Relier la fiche à une page web cohérente</h2>
              <p>
                Le site associé doit expliquer la prestation, la zone couverte
                et les moyens de contact. Une page rapide et responsive aide le
                visiteur qui souhaite en savoir plus après avoir consulté la
                fiche. Elle ne doit pas multiplier des pages locales presque
                identiques. Pour repérer les principaux problèmes, consultez
                notre guide des{" "}
                <a href="/blog/erreurs-seo-local-roanne">
                  erreurs de référencement local à éviter
                </a>.
              </p>

              <h2>7. Suivre les résultats sans promettre une position</h2>
              <p>
                Mesurez les appels, clics vers le site, demandes d’itinéraire et
                messages sur une période suffisamment longue. Une évolution ne
                doit pas être attribuée à une seule modification sans recul.
                Aucune agence ne peut garantir une place précise dans Maps : la
                distance et la concurrence varient selon chaque recherche.
              </p>

              <ArticleRelatedLinks currentPath={article.path} />

              <h2>Sources officielles</h2>
              <ul className="article-sources">
                <li>
                  <a href="https://support.google.com/business/answer/13763036?hl=fr" target="_blank" rel="noopener noreferrer">
                    Google Business Profile — Éligibilité d’une entreprise
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/business/answer/7091?hl=fr" target="_blank" rel="noopener noreferrer">
                    Google Business Profile — Améliorer son classement local
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/business/answer/3474122?hl=fr" target="_blank" rel="noopener noreferrer">
                    Google Business Profile — Obtenir davantage d’avis
                  </a>
                </li>
              </ul>

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
