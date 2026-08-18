import { useEffect, useRef, useState } from "react";

// Section Methode : compteurs animés (projets livrés, temps de chargement,
// taux de sur-mesure) déclenchés à l'entrée dans le viewport.
export function useMethodeCounters() {
  const sectionRef = useRef(null);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frameId = 0;
    let hasPlayed = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.classList.add("is-visible");

      if (prefersReducedMotion) {
        setCountProgress(1);
        return;
      }

      const startedAt = performance.now();
      const duration = 1600;
      const update = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration);
        setCountProgress(1 - ((1 - elapsed) ** 3));
        if (elapsed < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && reveal(),
      { threshold: 0.16 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return {
    sectionRef,
    projectCount: Math.round(24 * countProgress),
    loadingTime: (1.5 * countProgress).toFixed(1).replace(".", ","),
    tailoredRate: Math.round(100 * countProgress),
  };
}
