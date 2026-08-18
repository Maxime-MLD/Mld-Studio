import { useReveal } from "./reveal.js";

// Section Faq : simple apparition au scroll.
export function useFaqAnimation() {
  return useReveal({ threshold: 0.12 });
}
