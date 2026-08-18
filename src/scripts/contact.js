import { useReveal } from "./reveal.js";

// Section Contact : apparition au scroll du bloc formulaire.
export function useContactAnimation() {
  return useReveal({ threshold: 0.06 });
}
