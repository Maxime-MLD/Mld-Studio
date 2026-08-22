import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogThink from "../assets/images/blog-think.webp";
import blogThinkMobile from "../assets/images/blog-think-mobile.webp";
import "../styles/ArticlePage.css";
import { buildArticleGraph } from "../seo/articleSeo.js";
import ArticleRelatedLinks from "../components/article/ArticleRelatedLinks.jsx";

const article = {
  headline: "Site monopage ou multipage : que choisir pour son entreprise ?",
  description:
    "Comparez les avantages, limites, budgets et possibilités SEO d'un site monopage et d'un site multipage avant de choisir votre structure.",
  path: "/blog/site-monopage-multipage-loire",
  image: blogThink,
  datePublished: "2026-07-18",
  dateModified: "2026-08-20",
};

// Page d'article : « Monopage ou multipage : que choisir dans la Loire ? »
export default function ArticleMonopageMultipagePage() {
  return (
    <>
      <SEO
        title="Site monopage ou multipage : que choisir ?"
        path={article.path}
        description={article.description}
        image={blogThink}
        imageAlt="Choix de l'architecture d'un site monopage ou multipage"
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
              src={blogThink}
              srcSet={`${blogThinkMobile} 800w, ${blogThink} 2560w`}
              sizes="100vw"
              alt=""
              width="2560"
              height="1707"
              decoding="async"
              fetchPriority="high"
            />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Monopage ou multipage :</span>{" "}
              <span>que choisir</span>{" "}
              <span>dans la Loire&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Conception /{" "}
              <time dateTime="2026-07-18">18 juillet 2026</time> / Par Maxime Lagraa
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
                srcSet={`${blogThinkMobile} 800w, ${blogThink} 2560w`}
                sizes="(max-width: 809px) calc(100vw - 40px), 36vw"
                alt="Architecture de site monopage ou multipage dans la Loire"
                width="2560"
                height="1707"
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
                <strong>site multipage</strong> structuré ? La réponse dépend du
                nombre d’offres, du parcours commercial, du contenu disponible
                et de vos objectifs de référencement.
              </p>

              <h2>1. Le site monopage : un parcours unique et concentré</h2>
              <p>
                Un monopage réunit la proposition de valeur, les services, la
                méthode, les preuves, les tarifs et le contact sur une même URL.
                Il convient à une activité avec une offre principale facile à
                expliquer. Le visiteur suit un récit continu et peut accéder aux
                sections grâce à des ancres de navigation.
              </p>
              <p>
                <strong>Ses avantages :</strong> contenu plus simple à produire,
                message concentré, navigation directe et maintenance légère. Il
                peut être particulièrement efficace pour une campagne, un
                lancement ou une petite entreprise qui souhaite présenter une
                offre unique avec un budget maîtrisé.
              </p>
              <p>
                <strong>Ses limites :</strong> toutes les intentions de recherche
                doivent cohabiter sur la même page. Si vous proposez plusieurs
                métiers très différents, le contenu devient long et chaque
                service dispose de moins d’espace pour répondre précisément aux
                questions des prospects.
              </p>

              <h2>2. Le site multipage : une URL pour chaque sujet important</h2>
              <p>
                Un multipage sépare l’accueil, les prestations, les réalisations,
                l’à-propos, le blog et le contact. Il convient aux entreprises
                qui ont plusieurs services, des cas clients à détailler ou un
                besoin éditorial régulier. Chaque page peut répondre à une
                intention principale et posséder son propre title, H1 et contenu.
              </p>
              <p>
                <strong>Ses avantages :</strong> davantage d’espace pour
                expliquer chaque offre, un maillage interne plus riche et des
                pages plus simples à partager. Google recommande une organisation
                logique et des URL descriptives pour aider les utilisateurs et
                les moteurs à comprendre les relations entre les contenus.
              </p>
              <p>
                <strong>Ses limites :</strong> il demande plus de textes, de
                visuels et de maintenance. Créer six pages presque vides n’est
                pas meilleur qu’un monopage complet. Chaque URL doit avoir une
                utilité propre et un contenu suffisamment distinct.
              </p>

              <h2>3. Le multipage n’est pas automatiquement meilleur pour le SEO</h2>
              <p>
                Le nombre de pages ne constitue pas, à lui seul, un avantage de
                classement. Un site multipage devient intéressant lorsqu’il
                permet de répondre plus complètement à plusieurs besoins. À
                l’inverse, des pages créées uniquement pour répéter une ville ou
                un mot-clé peuvent dégrader l’expérience et diluer la qualité
                globale.
              </p>

              <h2>4. Le monopage n’est pas automatiquement plus rapide</h2>
              <p>
                Une seule page peut charger de nombreuses images, vidéos et
                animations. La performance dépend surtout du poids des médias,
                du JavaScript, des polices et de la façon dont les ressources
                sont chargées. Un multipage bien construit peut ne charger que
                les éléments nécessaires à la page consultée. Dans les deux cas,
                il faut mesurer le LCP, l’INP et le CLS sur mobile.
              </p>

              <h2>5. Choisir selon votre situation</h2>
              <ul>
                <li><strong>Une offre principale et peu de contenu :</strong> le monopage est généralement suffisant.</li>
                <li><strong>Plusieurs services distincts :</strong> le multipage permet de les expliquer séparément.</li>
                <li><strong>Des réalisations détaillées :</strong> prévoyez des pages d’études de cas.</li>
                <li><strong>Une stratégie éditoriale :</strong> le multipage facilite un blog et des clusters thématiques.</li>
                <li><strong>Un lancement rapide :</strong> commencez par un monopage conçu pour pouvoir évoluer.</li>
              </ul>

              <h2>6. Prévoir l’évolution dès le départ</h2>
              <p>
                Le choix n’est pas définitif. Un monopage peut devenir un
                multipage si la navigation, les composants et les URL sont
                pensés proprement. L’important est d’éviter les changements
                d’adresse inutiles et de prévoir des redirections si une URL doit
                évoluer. Consultez les{" "}
                <a href="/#services">formules proposées par MLD Studio</a> pour
                comparer les niveaux de contenu et d’accompagnement.
              </p>

              <ArticleRelatedLinks currentPath={article.path} />

              <h2>Sources officielles</h2>
              <ul className="article-sources">
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Organisation du site et liens internes
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/crawling-indexing/url-structure" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Bonnes pratiques pour les URL
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Contenu utile et centré sur les personnes
                  </a>
                </li>
              </ul>

              <div className="article-cta-row">
                <a className="article-back-link" href="/blog">
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
                  Retour à tous les articles
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
