import React, { useEffect, useRef } from "react";

type Props = {
  mode: string;
};

const LINE_COUNT = 40;
const STEP = 8;

function WaveBackground({ mode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frameId = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, width, height);

      let stroke: CanvasGradient | string;
      if (mode === "dark") {
        const gradient = ctx.createLinearGradient(0, height, width, 0);
        gradient.addColorStop(0, "rgba(233, 0, 255, 0.85)");
        gradient.addColorStop(0.5, "rgba(138, 30, 200, 0.8)");
        gradient.addColorStop(1, "rgba(80, 40, 180, 0.75)");
        stroke = gradient;
      } else {
        stroke = "rgba(13, 17, 22, 0.18)";
      }
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;

      for (let i = 0; i < LINE_COUNT; i++) {
        const offset = i / (LINE_COUNT - 1) - 0.5;
        ctx.beginPath();
        for (let x = -STEP; x <= width + STEP; x += STEP) {
          const p = x / width;
          // Diagonal centre line rising from bottom-left to top-right, rolling like a swell
          const centre =
            height * (0.8 - 0.6 * p) +
            Math.sin(p * 5 + t * 0.6) * height * 0.08 +
            Math.sin(p * 9 - t * 0.9) * height * 0.035;
          // Ribbon width breathes and twists along its length so the lines cross over
          const spread = Math.sin(p * 4 - t * 0.5 + offset * 0.8) * height * 0.22;
          const ripple = Math.sin(p * 14 + t * 1.3 + i * 0.15) * 3;
          const y = centre + spread * offset + ripple;
          if (x === -STEP) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      frameId = requestAnimationFrame(loop);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    resizeObserver.observe(canvas);

    // Skip drawing while the hero is scrolled out of view
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    if (reduceMotion) draw(0);
    else frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [mode]);

  return <canvas ref={canvasRef} className="wave-background" aria-hidden="true" />;
}

export default WaveBackground;
