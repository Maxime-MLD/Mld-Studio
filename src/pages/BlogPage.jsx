import { useEffect } from "react";
import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Conseils from "../components/sections/Conseils.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import { faqBlogItems } from "../data/faq-blog.js";
import "./BlogPage.css";

// Page /blog (journal). Réutilise STRICTEMENT le système du site :
//   - Navbar + hero sombre (même hauteur ~90vh + ligne centrale que la page
//     Réalisations) ;
//   - <Conseils /> pour la grille d'articles : ce sont EXACTEMENT les mêmes
//     articles que la section « Conseils et actualités » de l'accueil ;
//   - <Faq> existant (ligne centrale, titre à gauche collé à la ligne,
//     accordéon à droite), alimenté avec des questions propres au blog ;
//   - <Contact /> et <Footer /> tels quels.
export default function BlogPage() {
  // Parallaxe verticale des images de cartes au scroll :
  // L'image monte/descend à l'intérieur du cadre fixe de la carte.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    const getImgs = () =>
      Array.from(
        document.querySelectorAll(
          ".blog-articles .news-card-image img, .blog-articles .news-feature-card > img",
        ),
      );

    let ticking = false;
    const update = () => {
      const viewport = window.innerHeight;
      const imgs = getImgs();
      imgs.forEach((img) => {
        const card = img.closest(".news-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewport + 100) return;
        const progress = Math.min(
          1,
          Math.max(0, (viewport - rect.top) / (viewport + rect.height)),
        );
        const offset = (0.5 - progress) * 90; // ±45px de déplacement fluide
        img.style.setProperty("--card-parallax-y", `${offset.toFixed(1)}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    const timer = setTimeout(update, 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <SEO
        title="Blog"
        path="/blog"
        description="Conseils et actualités MLD Dev : création de sites vitrines, référencement local et présence en ligne à Roanne et dans la Loire."
      />

      <main>
        <Navbar />

        {/* Bande sombre : titre de page + grain (même hauteur que /realisations). */}
        <section className="blog-hero" aria-labelledby="blog-hero-title">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="blog-hero-content">
            <div className="blog-hero-grid">
              <div className="blog-hero-left">
                <p className="blog-hero-sub">
                  Ce que nous apprenons en créant des sites qui{" "}
                  <strong>performent.</strong> Voici nos conseils{" "}
                  <strong>en pratique.</strong>
                </p>
              </div>

              <div className="blog-hero-right">
                <h1 id="blog-hero-title" className="blog-hero-title">
                  <span>Derniers</span>
                  <span>articles.</span>
                </h1>
              </div>
            </div>

            <div className="blog-hero-bottom">
              <span className="blog-hero-year">2026©</span>
            </div>
          </div>
        </section>

        {/* Grille d'articles : mêmes articles que la section Conseils de l'accueil.
            Enveloppée dans .blog-articles pour passer les cartes en carrés
            uniformes UNIQUEMENT ici (l'accueil garde sa grille bento). */}
        <div className="blog-articles">
          <Conseils />
        </div>

        {/* FAQ du blog : composant Faq existant, questions propres au blog. */}
        <Faq
          items={faqBlogItems}
          eyebrow="FAQ"
          titleLines={["Avant de", "Commencer."]}
          contactHref="#contact"
          id="faq-blog"
        />

        {/* Contact + Footer réutilisés tels quels. */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
