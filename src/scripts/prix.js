import { useReveal } from "./reveal.js";

// Section Prix : simple apparition au scroll.
export function usePrixAnimation() {
  return useReveal({ threshold: 0.08 });
}
