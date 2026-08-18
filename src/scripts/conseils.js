import { useReveal } from "./reveal.js";

// Section Conseils : simple apparition au scroll.
export function useConseilsAnimation() {
  return useReveal({ threshold: 0.08 });
}
