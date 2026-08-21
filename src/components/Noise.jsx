import { useEffect, useRef } from "react";
import "../styles/Noise.css";

// Déplacements francs et irréguliers, comme une pellicule qui change d'une
// image à l'autre. Le débordement de 256 px du calque absorbe chaque saut.
const NOISE_OFFSETS = [
  [-159, -73],
  [-91, -151],
  [-31, -219],
  [47, -137],
  [121, -61],
  [-207, -19],
  [-133, -193],
  [83, -101],
];

const NOISE_STRENGTH = 0.88;

function Noise({ opacity = 0.05, fps = 8, className = "" }) {
  const containerRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const container = containerRef.current;
    if (!layer || !container) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fps <= 0 || reducedMotion) return undefined;

    let animationId = 0;
    let isVisible = false;
    let last = 0;
    let frameIndex = 0;
    const interval = 1000 / fps;

    const renderFrame = () => {
      const [x, y] = NOISE_OFFSETS[frameIndex];
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frameIndex = (frameIndex + 1) % NOISE_OFFSETS.length;
    };

    renderFrame();

    const loop = (time) => {
      if (!isVisible) return;
      if (time - last >= interval) {
        last = time - ((time - last) % interval);
        renderFrame();
      }
      animationId = window.requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            last = 0;
            animationId = window.requestAnimationFrame(loop);
          }
        } else {
          isVisible = false;
          if (animationId) {
            window.cancelAnimationFrame(animationId);
            animationId = 0;
          }
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, [fps]);

  return (
    <div
      ref={containerRef}
      className={`noise-overlay ${className}`.trim()}
      style={{ opacity: opacity * NOISE_STRENGTH }}
      aria-hidden="true"
    >
      <i ref={layerRef} className="noise-layer" />
    </div>
  );
}

export default Noise;
