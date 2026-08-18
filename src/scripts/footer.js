import { useReveal } from "./reveal.js";

// Footer : apparition au scroll de la barre de bas de page.
export function useFooterAnimation() {
  return useReveal({ threshold: 0.06 });
}
