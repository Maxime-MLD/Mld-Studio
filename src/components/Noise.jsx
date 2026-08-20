import { useEffect, useRef } from "react";
import "./Noise.css";

const TILE = 256;
const LEVELS = 16;

// One tile is enough for every instance: it is repeated, never stretched, so the
// grain keeps the same physical size whatever the viewport is.
let tileUrl = null;

function getTile() {
  if (tileUrl) return tileUrl;

  const canvas = document.createElement("canvas");
  canvas.width = TILE;
  canvas.height = TILE;

  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(TILE, TILE);
  const data = imageData.data;
  const step = 255 / (LEVELS - 1);

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.round(Math.random() * (LEVELS - 1)) * step;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  tileUrl = canvas.toDataURL();
  return tileUrl;
}

function Noise({ opacity = 0.05, fps = 24, className = "" }) {
  const containerRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const container = containerRef.current;
    if (!layer || !container) return undefined;

    layer.style.backgroundImage = `url(${getTile()})`;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fps <= 0 || reducedMotion) return undefined;

    let animationId = 0;
    let isVisible = false;
    let last = 0;
    const interval = 1000 / fps;

    const loop = (time) => {
      if (!isVisible) return;
      if (time - last >= interval) {
        last = time;
        const x = Math.random() * TILE;
        const y = Math.random() * TILE;
        layer.style.transform = `translate(${-x}px, ${-y}px)`;
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
    <div ref={containerRef} className={`noise-overlay ${className}`.trim()} style={{ opacity }} aria-hidden="true">
      <i ref={layerRef} className="noise-layer" />
    </div>
  );
}

export default Noise;
