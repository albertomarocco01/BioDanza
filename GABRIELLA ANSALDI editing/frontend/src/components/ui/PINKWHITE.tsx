"use client";

import React, { useEffect, useRef } from "react";

const PETAL_PATHS = [
  "M10,0 C15,5 18,18 13,36 C11,40 9,40 7,36 C3,18 5,5 10,0 Z",
  "M10,0 C16,4 19,17 13,37 C11,41 8,40 6,36 C2,17 4,4 10,0 Z",
  "M10,0 C14,6 18,19 12,37 C10,41 7,40 5,36 C1,17 5,6 10,0 Z",
  "M10,0 C16,4 19,18 11,37 C9,41 6,39 4,35 C1,17 4,4 10,0 Z",
  "M10,0 C15,3 20,16 13,38 C11,42 8,41 6,37 C2,16 5,4 10,0 Z",
];

// Colori: 0 = bianco crema, 1 = rosa cipria
const PETAL_COLORS = [
  { fill: "255, 252, 240", stroke: "210, 195, 165" }, // bianco
  { fill: "242, 185, 195", stroke: "196, 130, 148" }, // rosa
];

interface Petal {
  id: number;
  x: number;
  duration: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  swayAmount: number;
  swaySpeed: number;
  opacity: number;
  pathIndex: number;
  colorIndex: number;
  startTime: number;
}

let petalIdCounter = 0;

function createPetal(): Petal {
  return {
    id: petalIdCounter++,
    x: Math.random() < 0.5
      ? Math.random() * 28 - 5
      : 77 + Math.random() * 28,
    duration: 6000 + Math.random() * 6000,
    size: 1.9 + Math.random() * 1.0,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 120,
    swayAmount: 30 + Math.random() * 60,
    swaySpeed: 2 + Math.random() * 3,
    opacity: 0.75 + Math.random() * 0.25,
    pathIndex: Math.floor(Math.random() * PETAL_PATHS.length),
    colorIndex: Math.random() < 0.5 ? 0 : 1, // 50% bianchi, 50% rosa
    startTime: performance.now() + Math.random() * 8000,
  };
}

const CONTINUOUS_COUNT = 20;

export default function PinkAndWhitePetalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    petalsRef.current = Array.from({ length: CONTINUOUS_COUNT }, () => createPetal());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const paths2D = PETAL_PATHS.map((d) => new Path2D(d));

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal, index) => {
        const elapsed = now - petal.startTime;
        if (elapsed < 0) return;

        const progress = elapsed / petal.duration;

        if (progress > 1) {
          petalsRef.current[index] = {
            ...createPetal(),
            startTime: now + Math.random() * 1000,
          };
          return;
        }

        const y = -30 + progress * (canvas.height + 60);
        const sway = Math.sin((elapsed / 1000) * (Math.PI * 2 / petal.swaySpeed)) * petal.swayAmount;
        const x = (petal.x / 100) * canvas.width + sway;
        const rot = (petal.rotation + (elapsed / 1000) * petal.rotationSpeed) * (Math.PI / 180);

        let alpha = petal.opacity;
        if (progress < 0.08) alpha *= progress / 0.08;
        if (progress > 0.85) alpha *= (1 - progress) / 0.15;

        const color = PETAL_COLORS[petal.colorIndex];

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.scale(petal.size, petal.size);

        ctx.fillStyle = `rgba(${color.fill}, ${alpha})`;
        ctx.strokeStyle = `rgba(${color.stroke}, ${alpha * 0.7})`;
        ctx.lineWidth = 0.5 / petal.size;

        ctx.fill(paths2D[petal.pathIndex]);
        ctx.stroke(paths2D[petal.pathIndex]);

        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
