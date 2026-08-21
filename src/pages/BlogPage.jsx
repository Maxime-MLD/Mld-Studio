import { useEffect } from "react";
import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Conseils from "../components/sections/Conseils.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import { faqBlogItems } from "../data/faq-blog.js";
import "../styles/BlogPage.css";
import { buildGraph } from "../seo/jsonld/graph.js";
import { buildBreadcrumb } from "../seo/jsonld/breadcrumb.js";

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

    const items = Array.from(
      document.querySelectorAll(
        ".blog-articles .news-card-image img, .blog-articles .news-feature-card > img",
      ),
    )
      .map((img) => ({
        img,
        card: img.closest(".news-card"),
        lastOffset: null,
      }))
      .filter((item) => item.card);

    const itemByCard = new Map(items.map((item) => [item.card, item]));
    const activeItems = new Set(items);

    let ticking = false;
    let frameId = 0;
    const update = () => {
      const viewport = window.innerHeight;
      const measurements = [];

      // Regroupe les lectures de layout avant les écritures CSS afin de ne pas
      // provoquer plusieurs recalculs de mise en page dans la même frame.
      activeItems.forEach((item) => {
        const rect = item.card.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (viewport - rect.top) / (viewport + rect.height)),
        );
        measurements.push([item, `${((0.5 - progress) * 90).toFixed(1)}px`]);
      });

      measurements.forEach(([item, offset]) => {
        if (item.lastOffset === offset) return;
        item.img.style.setProperty("--card-parallax-y", offset);
        item.lastOffset = offset;
      });

      ticking = false;
      frameId = 0;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      frameId = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const item = itemByCard.get(entry.target);
          if (!item) return;
          if (entry.isIntersecting) activeItems.add(item);
          else activeItems.delete(item);
        });
        requestUpdate();
      },
      { rootMargin: "120px 0px" },
    );

    items.forEach((item) => observer.observe(item.card));
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <>
      <SEO
        title="Conseils création de site et SEO local"
        path="/blog"
        description="Conseils MLD Studio sur la création de sites vitrines, le référencement local et la présence en ligne à Roanne et dans la Loire."
        jsonLd={buildGraph(
          buildBreadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Conseils et actualités", path: "/blog" },
          ]),
        )}
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
          <Conseils fullFeatureImage />
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
