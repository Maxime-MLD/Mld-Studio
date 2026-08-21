import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import blogRoanne from "../assets/images/blog-roanne.webp";
import blogRoanneMobile from "../assets/images/blog-roanne-mobile.webp";
import "../styles/ArticlePage.css";
import { buildArticleGraph } from "../seo/articleSeo.js";
import ArticleRelatedLinks from "../components/article/ArticleRelatedLinks.jsx";

const article = {
  headline: "Pourquoi créer un site internet professionnel à Roanne en 2026 ?",
  description:
    "Découvrez comment un site professionnel aide une entreprise de Roanne à être trouvée, rassurer ses prospects et générer des demandes qualifiées.",
  path: "/blog/importance-site-internet-roanne-2026",
  image: blogRoanne,
  datePublished: "2026-08-16",
  dateModified: "2026-08-20",
};

// Page d'article : « Quelle est l'importance d'avoir un site internet pour les professionnels à Roanne en 2026 ? »
// Reprend rigoureusement la structure, les marges, la ligne centrale et le système visuel de la page À propos.
export default function ArticleRoannePage() {
  return (
    <>
      <SEO
        title="Créer un site internet à Roanne en 2026"
        path={article.path}
        description={article.description}
        image={blogRoanne}
        imageAlt="Site internet professionnel conçu pour une entreprise de Roanne"
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
              src={blogRoanne}
              srcSet={`${blogRoanneMobile} 800w, ${blogRoanne} 1200w`}
              sizes="100vw"
              alt=""
              width="1200"
              height="800"
              decoding="async"
              fetchPriority="high"
            />
            <Noise className="media-noise" opacity={0.14} />
          </div>

          <div className="article-hero-inner">
            <h1 id="article-title" className="article-hero-title">
              <span>Quelle est</span>
              <span>l'importance d'un site</span>
              <span>à Roanne en 2026&nbsp;?</span>
            </h1>
            <p className="article-hero-sub">
              Conseils & Stratégie /{" "}
              <time dateTime="2026-08-16">16 août 2026</time> / Par Maxime Lagraa
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
                srcSet={`${blogRoanneMobile} 800w, ${blogRoanne} 1200w`}
                sizes="(max-width: 809px) calc(100vw - 40px), 36vw"
                alt="Présence web des entreprises à Roanne"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Corps de texte à droite de la ligne centrale */}
            <div className="article-text">
              <p>
                À <strong>Roanne</strong> comme ailleurs, un prospect peut
                découvrir une entreprise depuis Google, un réseau social, une
                recommandation ou une carte de visite. Le site internet sert de
                point de référence commun : il explique clairement ce que vous
                proposez, à qui vous vous adressez et comment vous contacter.
                Son rôle n’est pas seulement d’être « présent en ligne », mais
                d’aider une personne à prendre une décision.
              </p>

              <h2>1. Être visible au moment où le besoin apparaît</h2>
              <p>
                Une page structurée autour d’un service précis permet aux
                moteurs de recherche de comprendre votre activité. Le titre de
                la page, ses sous-titres, ses textes, ses liens et ses images
                doivent répondre à une intention réelle : par exemple « création
                de site internet à Roanne » ou « site vitrine pour artisan dans
                la Loire ». Google rappelle dans son guide SEO qu’une structure
                logique, des URL descriptives et des liens clairs facilitent la
                compréhension d’un site par les utilisateurs comme par les
                moteurs.
              </p>

              <h2>2. Donner des preuves avant le premier échange</h2>
              <p>
                Un prospect ne peut pas deviner la qualité de votre travail. Il
                a besoin de voir vos services, votre méthode, vos tarifs ou
                fourchettes, vos réalisations et de vrais retours clients. Une
                présentation cohérente réduit l’incertitude et donne un cadre à
                la discussion. Tant que MLD Studio ne dispose pas de projets
                clients publiables, la page des{" "}
                <a href="/realisations">concepts créatifs</a> est clairement
                présentée comme telle : mieux vaut une démonstration honnête
                qu’une fausse étude de cas.
              </p>

              <h2>3. Transformer une visite en demande qualifiée</h2>
              <p>
                Un site utile répond avant même l’appel aux questions les plus
                fréquentes : zone desservie, type de prestation, budget de
                départ, délai indicatif et déroulement du projet. Le formulaire
                peut ensuite demander uniquement les informations nécessaires.
                Vous gagnez du temps et le prospect sait ce qui va se passer
                après l’envoi de son message.
              </p>

              <h2>4. Construire une base durable pour le SEO local</h2>
              <p>
                Le référencement local ne consiste pas à répéter le nom d’une
                ville partout. Il faut présenter une offre réelle, une zone
                d’intervention précise, des coordonnées cohérentes et des
                contenus utiles. Pour une activité couvrant Roanne, Mably,
                Riorges, Le Coteau ou Villerest, une page de service solide est
                préférable à plusieurs pages presque identiques qui changent
                seulement le nom de la commune.
              </p>

              <h2>5. Un site rapide et responsive reste indispensable</h2>
              <p>
                Google utilise la version mobile du contenu pour l’indexation.
                Le site doit donc proposer les mêmes informations importantes
                sur téléphone et ordinateur, avec une navigation lisible et des
                boutons accessibles. Les Core Web Vitals sont utiles pour
                mesurer l’expérience, mais Google précise qu’un score parfait
                ne remplace ni la pertinence ni la qualité du contenu. Le bon
                objectif est un site rapide qui aide réellement son visiteur.
              </p>

              <h2>6. Que doit contenir un bon site vitrine ?</h2>
              <ul>
                <li>une proposition de valeur compréhensible dès le premier écran ;</li>
                <li>des services détaillés avec leurs limites et leurs bénéfices ;</li>
                <li>des preuves authentiques : projets, avis, méthode et identité ;</li>
                <li>une zone d’intervention et des coordonnées cohérentes ;</li>
                <li>un appel à l’action simple sur mobile comme sur ordinateur ;</li>
                <li>des mentions légales et une politique de confidentialité accessibles.</li>
              </ul>

              <p>
                Le choix du format dépend ensuite de la quantité d’informations
                et de vos objectifs de référencement. Notre comparatif{" "}
                <a href="/blog/site-monopage-multipage-loire">
                  entre site monopage et multipage
                </a>{" "}
                vous aide à choisir une structure adaptée.
              </p>

              <ArticleRelatedLinks currentPath={article.path} />

              <h2>Sources officielles</h2>
              <ul className="article-sources">
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">
                    Google Search Central — Guide de démarrage SEO
                  </a>
                </li>
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
