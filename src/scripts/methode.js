import { useEffect, useRef } from "react";

export function useMethodeCounters() {
  const sectionRef = useRef(null);
  const projectCountRef = useRef(null);
  const tailoredRateRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frameId = 0;
    let hasPlayed = false;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const reveal = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.classList.add("is-visible");

      if (prefersReducedMotion) {
        if (projectCountRef.current) projectCountRef.current.textContent = "20+";
        if (tailoredRateRef.current) tailoredRateRef.current.textContent = "100%";
        return;
      }

      const startedAt = performance.now();
      const duration = 1600;
      const update = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - (1 - elapsed) ** 3;
        if (projectCountRef.current) {
          projectCountRef.current.textContent = `${Math.round(20 * eased)}+`;
        }
        if (tailoredRateRef.current) {
          tailoredRateRef.current.textContent = `${Math.round(100 * eased)}%`;
        }
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
    projectCountRef,
    tailoredRateRef,
  };
}
