import { useEffect, useRef } from "react";

// Section Realisations (bloc d'intro « Nous créons des sites web ») :
// apparition au scroll + parallaxe de l'image via --build-image-y.
export function useRealisationsAnimation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < -50 || rect.top > viewport + 50) {
        ticking = false;
        return;
      }
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      const imageOffset = (0.5 - progress) * 110;
      section.style.setProperty("--build-image-y", `${imageOffset.toFixed(1)}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (prefersReducedMotion || ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return sectionRef;
}

// Marquee de titre à vitesse uniforme et boucle infinie continue sans à-coup
export function useProjectMarquee(selector = ".portfolio-section") {
  useEffect(() => {
    const SPEED = 75; // px/s : vitesse linéaire constante (calquée sur Paysagiste)

    const updateMarquees = () => {
      const wrappers = document.querySelectorAll(`${selector} .project-marquee-wrapper`);
      wrappers.forEach((wrapper) => {
        const group = wrapper.querySelector(".project-marquee-group");
        if (!group) return;
        const groupWidth = group.getBoundingClientRect().width;
        if (!groupWidth) return;
        const duration = groupWidth / SPEED;
        const allGroups = wrapper.querySelectorAll(".project-marquee-group");
        allGroups.forEach((g) => {
          g.style.animationDuration = `${duration.toFixed(2)}s`;
        });
      });
    };

    updateMarquees();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateMarquees);
    }
    window.addEventListener("resize", updateMarquees);
    return () => window.removeEventListener("resize", updateMarquees);
  }, [selector]);
}
