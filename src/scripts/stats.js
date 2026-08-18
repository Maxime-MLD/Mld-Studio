import { useEffect, useRef, useState } from "react";

// Section Stats : compteurs animés (note Google + % de recommandations)
// déclenchés à l'entrée dans le viewport.
export function useStatsCounters() {
  const sectionRef = useRef(null);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frameId = 0;
    let hasPlayed = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const playCounters = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.classList.add("is-visible");

      if (prefersReducedMotion) {
        setCountProgress(1);
        return;
      }

      const startedAt = performance.now();
      const duration = 1500;
      const update = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - ((1 - elapsed) ** 3);
        setCountProgress(eased);
        if (elapsed < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && playCounters(),
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return {
    sectionRef,
    rating: (4.9 * countProgress).toFixed(1),
    referrals: Math.round(80 * countProgress),
  };
}
