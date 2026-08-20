import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import aboutMax from "../assets/images/about-max.webp";
import "./AboutPage.css";

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
        title="À propos"
        path="/a-propos"
        description="MLD Studio, c'est Maxime : création de sites web modernes et sur-mesure pour les entreprises de Roanne et de la Loire."
      />

      <main>
        <Navbar />

        {/* Hero : noir + grain + ligne centrale, titre collé à droite de la ligne. */}
        <section className="about-hero" aria-labelledby="about-title">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="about-hero-inner">
            <h2 id="about-title" className="about-hero-title">
              <span>MLD</span>
              <span>Studio</span>
            </h2>
            <p className="about-hero-sub">
              Nous créons des <strong>sites web</strong> pour des entreprises
              soucieuses des <strong>résultats</strong>.
            </p>
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
                src={aboutMax}
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
                Basé à <strong>Roanne</strong>, nous travaillons avec les
                entreprises <strong>locales</strong> et de la{" "}
                <strong>Loire</strong>.
              </p>
              <p>
                Sites vitrines et <strong>référencement local</strong> à{" "}
                <strong>Roanne</strong>, Riorges, Le Coteau, Mably, Charlieu ...
                et dans toute la <strong>Loire</strong> — pour être trouvé par
                vos futurs clients.
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
