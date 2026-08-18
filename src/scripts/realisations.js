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
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.2 },
    );

    observer.observe(section);

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
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
