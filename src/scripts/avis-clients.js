import { useEffect, useRef } from "react";

// Section AvisClients : apparition au scroll + parallaxe double (fond/premier
// plan) du portrait. Recalcule la parallaxe au changement d'avis (activeReview).
export function useAvisAnimation(activeReview) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const visual = section.querySelector(".review-image-stage");
    let frameId = 0;
    let ticking = false;

    const updateParallax = () => {
      if (!visual) {
        ticking = false;
        return;
      }
      const rect = visual.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom >= -50 && rect.top <= viewportHeight + 50) {
        const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const centered = (progress - 0.5) * 2;
        const backgroundTravel = Math.min(34, rect.height * 0.08);
        const foregroundTravel = Math.min(48, rect.height * 0.12);
        visual.style.setProperty("--review-bg-y", `${(centered * backgroundTravel).toFixed(2)}px`);
        visual.style.setProperty("--review-fg-y", `${(centered * foregroundTravel).toFixed(2)}px`);
      }

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

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeReview]);

  return sectionRef;
}
