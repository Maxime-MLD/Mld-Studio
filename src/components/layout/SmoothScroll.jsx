import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Moteur de défilement inertiel haut de gamme (Lenis / Momentum Scrolling)
export default function SmoothScroll({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respecte les préférences d'accessibilité (motion réduite)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.3, // Défilement plus rapide et réactif (effet léger)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Réactivité instantanée avec amorti doux
      orientation: "vertical",
      gestureOrientation: "vertical",
      // 3. Activation exclusive à la souris/pavé tactile
      smoothWheel: true,
      wheelMultiplier: 1.0, // On reste à 1 pour que le défilement ne paraisse pas "trop rapide" ou incontrôlable

      // 4. DESACTIVATION de l'effet sur mobile / écrans tactiles (Crucial !)
      smoothTouch: false,
      touchMultiplier: 1.0, // Inutile si smoothTouch est à false, mais assure la sécurité

      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Gestion fluide des clics sur les liens d'ancres (<a href="#...">)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href === "#" || !href) return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: 0, duration: 1.3 });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.lenis;
    };
  }, []);

  // Une transition de route repositionne le moteur existant sans le détruire
  // puis le recréer. Cela évite un à-coup et une nouvelle boucle RAF au montage
  // initial des pages Blog et Article.
  useEffect(() => {
    const lenis = lenisRef.current;
    const target = location.hash
      ? document.querySelector(location.hash)
      : null;

    if (lenis) {
      lenis.scrollTo(target || 0, { immediate: true });
    } else if (target) {
      target.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  return children;
}
