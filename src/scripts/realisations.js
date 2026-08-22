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

// Parallaxe verticale fluide sur les images d'arrière-plan et de premier plan au scroll
export function useProjectParallax(selector = ".portfolio-section") {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const slides = document.querySelectorAll(`${selector} .project-slide`);
    if (!slides.length) return undefined;

    let ticking = false;
    const updateParallax = () => {
      const viewport = window.innerHeight;
      slides.forEach((slide) => {
        const track = slide.querySelector(".project-pinned-track") || slide;
        const rect = track.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewport + 100) return;

        const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
        const bgOffset = (0.5 - progress) * 120;
        const fgOffset = (0.5 - progress) * 80;

        slide.style.setProperty("--project-bg-y", `${bgOffset.toFixed(1)}px`);
        slide.style.setProperty("--project-fg-y", `${fgOffset.toFixed(1)}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [selector]);
}
