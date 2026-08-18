import { useEffect, useRef } from "react";

// Section Prestations : apparition au scroll + parallaxe des visuels ouverts.
// Recalcule la parallaxe quand la prestation active change (activeService).
export function usePrestationsAnimation(activeService) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && section.classList.add("is-visible"),
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frameId = 0;
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;
      section.querySelectorAll(".service-visual").forEach((visual) => {
        const rect = visual.getBoundingClientRect();
        if (rect.height <= 1 || rect.bottom < 0 || rect.top > viewportHeight) return;

        const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const travel = Math.min(52, rect.height * 0.12);
        const offset = ((progress - 0.5) * 2 * travel).toFixed(2);
        visual.style.setProperty("--service-image-y", `${offset}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const transitionTimer = window.setTimeout(updateParallax, 750);

    return () => {
      window.clearTimeout(transitionTimer);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeService]);

  return sectionRef;
}
