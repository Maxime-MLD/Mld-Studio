import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogRoad from "../assets/images/blog-road.webp";
import blogRoadMobile from "../assets/images/blog-road-mobile.webp";
import "../styles/ArticlePage.css";
import { buildArticleGraph } from "../seo/articleSeo.js";
import ArticleRelatedLinks from "../components/article/ArticleRelatedLinks.jsx";

const article = {
  headline: "7 erreurs SEO qui limitent votre visibilité à Roanne",
  description:
    "Découvrez sept erreurs techniques et éditoriales qui compliquent la visibilité d'un site professionnel à Roanne, avec des corrections concrètes.",
  path: "/blog/erreurs-seo-local-roanne",
  image: blogRoad,
  datePublished: "2026-07-29",
  dateModified: "2026-08-20",
};

// Page d'article : « 7 erreurs qui empêchent votre site d’être trouvé à Roanne et ses environs »
export default function ArticleErreursSeoPage() {
  return (
    <>
      <SEO
        title="7 erreurs SEO à corriger à Roanne"
        path={article.path}
        description={article.description}
        image={blogRoad}
        imageAlt="Analyse des erreurs SEO d'un site professionnel à Roanne"
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
              src={blogRoad}
              srcSet={`${blogRoadMobile} 800w, ${blogRoad} 1920w`}
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
              <span>7 erreurs</span>
              <span>qui bloquent votre visibilité</span>
              <span>à Roanne</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & SEO /{" "}
              <time dateTime="2026-07-29">29 juillet 2026</time> / Par Maxime Lagraa
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
                srcSet={`${blogRoadMobile} 800w, ${blogRoad} 1920w`}
                sizes="(max-width: 809px) calc(100vw - 40px), 36vw"
                alt="Audit SEO local et erreurs de visibilité à Roanne"
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
                Mettre un site en ligne ne garantit ni son indexation ni sa
                visibilité. Google doit pouvoir accéder aux pages, comprendre
                leur sujet et proposer un résultat utile à la personne qui
                effectue la recherche. Ces sept erreurs sont fréquentes sur les
                sites d’artisans, commerces et petites entreprises de
                <strong> Roanne</strong> et de la <strong>Loire</strong>.
              </p>

              <h2>1. Décrire son activité avec un contenu trop vague</h2>
              <p>
                Une page intitulée « Nos services » qui ne détaille ni la
                prestation, ni le public, ni la zone couverte fournit peu
                d’informations. Expliquez concrètement le problème résolu, votre
                méthode et les limites du service. Mentionnez Roanne ou une
                commune voisine uniquement lorsque cela apporte une information
                réelle, sans répéter artificiellement la ville dans chaque
                phrase.
              </p>

              <h2>2. Rendre le contenu essentiel dépendant d’une interaction</h2>
              <p>
                Le texte principal, les liens et les métadonnées doivent être
                accessibles au chargement de la page. Google déconseille de
                charger le contenu essentiel uniquement après un clic, un
                balayage ou une saisie. Pour une application React, le
                pré-rendu permet aussi de fournir un HTML complet aux moteurs et
                aux robots de partage avant l’exécution de JavaScript.
              </p>

              <h2>3. Négliger la vitesse et la stabilité sur mobile</h2>
              <p>
                Une image hero trop lourde, un JavaScript important ou un
                déplacement de mise en page peut rendre la première visite
                pénible. Mesurez le LCP, l’INP et le CLS, puis corrigez en
                priorité l’élément principal visible. Google précise néanmoins
                que de bons Core Web Vitals ne remplacent pas un contenu
                pertinent : performance et utilité doivent progresser ensemble.
              </p>

              <h2>4. Proposer moins d’informations sur smartphone</h2>
              <p>
                Google utilise la version mobile du contenu pour l’indexation.
                Le responsive peut réorganiser une page, mais il ne doit pas
                supprimer les informations importantes, les titres, les liens
                ou les données structurées. Les accordéons restent possibles si
                leur contenu est présent dans le HTML et accessible sans
                difficulté.
              </p>

              <h2>5. Dupliquer les titles, descriptions ou canonicals</h2>
              <p>
                Chaque URL indexable doit posséder un title descriptif, une
                description utile et une canonical cohérente. Deux titles ou
                deux descriptions dans le même document rendent le signal moins
                clair. Une canonical ne corrige pas une mauvaise architecture :
                les doublons inutiles doivent être redirigés vers l’URL retenue.
              </p>

              <h2>6. Isoler les pages sans liens internes</h2>
              <p>
                Les moteurs découvrent une grande partie des pages grâce aux
                liens. Un article sans lien depuis le blog, absent du sitemap et
                sans relation avec les services du site est plus difficile à
                comprendre. Reliez les contenus proches avec des ancres
                descriptives. Par exemple, l’article sur{" "}
                <a href="/blog/google-maps-roanne-fiche-optimisee">
                  l’optimisation d’une fiche Google Business
                </a>{" "}
                complète naturellement ce guide.
              </p>

              <h2>7. Publier des preuves ou coordonnées incohérentes</h2>
              <p>
                Une marque écrite différemment, deux emails concurrents ou des
                avis fictifs fragilisent la confiance. Utilisez la même identité
                publique, le même téléphone et le même email sur les pages du
                site. Présentez les maquettes comme des concepts tant qu’elles
                ne correspondent pas à de vrais clients, et ne publiez une note
                que lorsqu’elle est vérifiable.
              </p>

              <h2>Contrôle rapide avant publication</h2>
              <ul>
                <li>une seule version canonique de chaque URL ;</li>
                <li>un H1 clair et un contenu visible sans interaction ;</li>
                <li>une navigation mobile contenant les mêmes informations ;</li>
                <li>des liens internes vers les services et articles connexes ;</li>
                <li>un sitemap contenant toutes les pages indexables ;</li>
                <li>des coordonnées et preuves exactes.</li>
              </ul>

              <ArticleRelatedLinks currentPath={article.path} />

              <h2>Sources officielles</h2>
              <ul className="article-sources">
                <li>
                  <a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Indexation orientée mobile
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Expérience sur la page
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Guide de démarrage SEO
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
