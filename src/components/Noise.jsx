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
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    layer.style.backgroundImage = `url(${getTile()})`;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fps <= 0 || reducedMotion) return undefined;

    let animationId;
    let last = 0;
    const interval = 1000 / fps;

    // Shifting the oversized layer by less than a tile reshuffles the grain
    // without ever exposing an edge.
    const loop = (time) => {
      if (time - last >= interval) {
        last = time;
        const x = Math.random() * TILE;
        const y = Math.random() * TILE;
        layer.style.transform = `translate(${-x}px, ${-y}px)`;
      }
      animationId = window.requestAnimationFrame(loop);
    };

    animationId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(animationId);
  }, [fps]);

  return (
    <div className={`noise-overlay ${className}`.trim()} style={{ opacity }} aria-hidden="true">
      <i ref={layerRef} className="noise-layer" />
    </div>
  );
}

export default Noise;
