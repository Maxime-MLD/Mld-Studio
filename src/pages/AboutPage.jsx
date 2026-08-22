import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import aboutMld from "../assets/images/about-mld.webp";
import "../styles/AboutPage.css";
import { buildGraph } from "../seo/jsonld/graph.js";
import { buildBreadcrumb } from "../seo/jsonld/breadcrumb.js";
import { organizationJsonLd } from "../seo/jsonld/organization.js";
import { personJsonLd } from "../seo/jsonld/person.js";

// Page /a-propos. Réutilise STRICTEMENT le système du site :
//   - <Navbar />, <Contact />, <Footer /> existants ;
//   - <Noise> pour le grain (même composant que Contact / autres pages) ;
//   - ligne verticale centrale + effet cascade (bloc demi-largeur qui déborde,
//     cf. .faq-top-accent) entre hero → main et main → Contact ;
//   - style H2 92px et style de paragraphe (muté + mots forts) des sections.
export default function AboutPage() {
  return (
    <>
      <SEO
        title="À propos de notre studio web à Roanne"
        path="/a-propos"
        description="Découvrez MLD Studio et Maxime Lagraa, designer et développeur de sites internet modernes à Roanne, dans la Loire et partout en France."
        jsonLd={buildGraph(
          organizationJsonLd,
          personJsonLd,
          buildBreadcrumb([
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos" },
          ]),
        )}
      />

      <main>
        <Navbar />

        {/* Hero : noir + grain + ligne centrale, titre collé à droite de la ligne. */}
        <section className="about-hero" aria-labelledby="about-title">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="about-hero-content">
            <div className="about-hero-grid">
              <div className="about-hero-left">
                <p className="about-hero-sub">
                  Nous créons des <strong>sites web</strong> pour des entreprises
                  soucieuses des <strong>résultats</strong>.
                </p>
              </div>

              <div className="about-hero-right">
                <h1 id="about-title" className="about-hero-title">
                  <span>MLD</span>{" "}
                  <span>Studio</span>
                </h1>
              </div>
            </div>

            <div className="about-hero-bottom">
              <span className="about-hero-year">2026©</span>
            </div>
          </div>
        </section>

        {/* Contenu principal : gris, ligne centrale, cascade en haut et en bas. */}
        <section className="about-main" aria-label="À propos de MLD Studio">
          <div className="about-main-accent-top" aria-hidden="true" />
          <div className="about-main-accent-bottom" aria-hidden="true" />

          <div className="about-inner">
            <p className="about-eyebrow">À propos</p>

            {/* Photo à gauche, en bas du conteneur — [PHOTO_A_PROPOS] à remplacer. */}
            <figure className="about-photo">
              <img
                src={aboutMld}
                alt="Maxime, créateur de MLD Studio"
                width="360"
                height="454"
                loading="lazy"
              />
              <Noise className="media-noise" opacity={0.11} />
            </figure>

            {/* Texte de présentation, collé à droite de la ligne. */}
            <div className="about-text">
              <p>
                Je suis <strong>Maxime</strong>, créateur de{" "}
                <strong>MLD Studio</strong>. Je conçois des{" "}
                <strong>sites web modernes</strong> et <strong>premium</strong>{" "}
                pour les entreprises de <strong>Roanne</strong> et de la Loire.
              </p>
              <p>
                Des sites <strong>sur-mesure</strong>, que l'on ne voit pas
                partout. Pensés pour vous démarquer et inspirer confiance dès le
                premier regard.
              </p>
              <p>
                Mon objectif : rendre les entreprises locales{" "}
                <strong>visibles sur internet</strong>, avec un site qui leur
                ressemble et qui attire vraiment des clients.
              </p>
              <p>
                Basé à <strong>Roanne</strong>, je travaille à distance avec des
                entreprises de la <strong>Loire</strong> et de toute la
                <strong> France</strong>.
              </p>
              <p>
                Sites vitrines et <strong>référencement local</strong> à{" "}
                <strong>Roanne</strong>, Riorges, Le Coteau, Mably, Villerest,
                Charlieu et dans toute la <strong>Loire</strong> — pour être
                trouvé par vos futurs clients.
              </p>
              <p>
                Chaque projet est suivi <strong>directement par moi</strong>, de
                la première discussion jusqu’à la mise en ligne. Vous gardez un
                interlocuteur unique pour le contenu, le design, le
                développement et les ajustements techniques.
              </p>
              <p>
                Le travail commence par la compréhension de votre activité : vos
                services, vos clients, leurs questions et les éléments qui
                doivent les rassurer. Cette base permet de construire une
                hiérarchie claire avant de choisir les couleurs, les images ou
                les animations.
              </p>
              <p>
                Les sites sont développés pour être <strong>responsives</strong>
                , accessibles et rapides. Les animations servent la lecture et
                la perception de qualité ; elles ne doivent pas masquer le
                contenu ni ralentir inutilement la navigation sur mobile.
              </p>
              <p>
                MLD Studio travaille sans boutique ni accueil physique. Les
                échanges, validations et livraisons se font à distance, ce qui
                permet d’accompagner aussi bien une entreprise du bassin
                roannais qu’un client situé ailleurs en France.
              </p>
              <p>
                La transparence fait partie de la méthode : les maquettes
                personnelles sont présentées comme des <strong>concepts</strong>
                , et seuls les projets ou avis authentiques seront publiés comme
                des références clients.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Footer réutilisés tels quels. */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
