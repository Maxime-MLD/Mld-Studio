import { useEffect, useRef } from "react";

// Section Constat : apparition au scroll + parallaxe verticale de l'image
// pilotée par les variables CSS --section-progress et --image-parallax-y.
export function useConstatAnimation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.18 },
    );

    observer.observe(section);

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      section.style.setProperty("--section-progress", progress.toFixed(3));
      const imageOffset = (0.5 - progress) * 150;
      section.style.setProperty("--image-parallax-y", `${imageOffset.toFixed(1)}px`);
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
