import { useEffect, useRef } from "react";

// Helper partagé : ajoute la classe "is-visible" à la section dès qu'elle entre
// dans le viewport. Utilisé par les sections dont l'animation se limite à
// l'apparition au scroll.
export function useReveal({ threshold = 0.12, once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}
