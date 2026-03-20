"use client";

import React, { useEffect, useRef, useCallback } from "react";

const PETAL_PATHS = [
  "M10,0 C15,5 18,18 13,36 C11,40 9,40 7,36 C3,18 5,5 10,0 Z",
  "M10,0 C16,4 19,17 13,37 C11,41 8,40 6,36 C2,17 4,4 10,0 Z",
  "M10,0 C14,6 18,19 12,37 C10,41 7,40 5,36 C1,17 5,6 10,0 Z",
  "M10,0 C16,4 19,18 11,37 C9,41 6,39 4,35 C1,17 4,4 10,0 Z",
  "M10,0 C15,3 20,16 13,38 C11,42 8,41 6,37 C2,16 5,4 10,0 Z",
];

interface Petal {
  id: number;
  x: number;         // posizione orizzontale iniziale (vw %)
  delay: number;     // ritardo partenza (ms)
  duration: number;  // durata caduta (ms)
  size: number;      // scala
  rotation: number;  // rotazione iniziale (deg)
  rotationSpeed: number; // velocità rotazione (deg/s)
  swayAmount: number;    // ampiezza oscillazione laterale (px)
  swaySpeed: number;     // velocità oscillazione (s)
  opacity: number;
  pathIndex: number;
  isBurst: boolean;
  startTime: number; // timestamp assoluto di partenza
}

let petalIdCounter = 0;

function createPetal(isBurst = false): Petal {
  return {
    id: petalIdCounter++,
    // Concentra i petali nelle fasce laterali (0-25% e 75-100%)
    x: Math.random() < 0.5
      ? Math.random() * 28 - 5        // fascia sinistra: -5% → 23%
      : 77 + Math.random() * 28,      // fascia destra:  77% → 105%
    delay: isBurst ? Math.random() * 400 : Math.random() * 8000,
    duration: 6000 + Math.random() * 6000,
    size: 1.9 + Math.random() * 1.0, //DIMENSIONE
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 120,
    swayAmount: 30 + Math.random() * 60,
    swaySpeed: 2 + Math.random() * 3,
    opacity: 0.75 + Math.random() * 0.3, //REGOLAZIONE OPACITA' 
    pathIndex: Math.floor(Math.random() * PETAL_PATHS.length),
    isBurst,
    startTime: performance.now() + (isBurst ? Math.random() * 400 : Math.random() * 8000),
  };
}

const CONTINUOUS_COUNT = 15; // PETALI SEMPRE ATTIVI
const BURST_COUNT = 13;      // PETALI AL BURST

export default function PetalRain({ scrollContainer }: { scrollContainer: React.RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const rafRef = useRef<number>(0);
  const lastScrollSection = useRef<number>(-1);

  // ─── Init continuous petals ───
  useEffect(() => {
    petalsRef.current = Array.from({ length: CONTINUOUS_COUNT }, () => createPetal(false));
  }, []);

  // ─── Burst on section change ───
  const triggerBurst = useCallback(() => {
    const burst = Array.from({ length: BURST_COUNT }, () => createPetal(true));
    petalsRef.current.push(...burst);
  }, []);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.round(scrollTop / sectionHeight);
      if (currentSection !== lastScrollSection.current) {
        lastScrollSection.current = currentSection;
        triggerBurst();
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainer, triggerBurst]);

  // ─── Canvas render loop ───
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

    // Pre-parse SVG paths into Path2D
    const paths2D = PETAL_PATHS.map((d) => new Path2D(d));

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const toRemove: number[] = [];

      petalsRef.current.forEach((petal, index) => {
        const elapsed = now - petal.startTime;
        if (elapsed < 0) return; // not started yet

        const progress = elapsed / petal.duration; // 0 → 1

        if (progress > 1) {
          if (petal.isBurst) {
            // burst petals: remove when done
            toRemove.push(index);
          } else {
            // continuous petals: recycle
            petalsRef.current[index] = {
              ...createPetal(false),
              startTime: now + Math.random() * 1000,
            };
          }
          return;
        }

        // Position
        const y = -30 + progress * (canvas.height + 60);
        const sway = Math.sin((elapsed / 1000) * (Math.PI * 2 / petal.swaySpeed)) * petal.swayAmount;
        const x = (petal.x / 100) * canvas.width + sway;

        // Rotation
        const rot = (petal.rotation + (elapsed / 1000) * petal.rotationSpeed) * (Math.PI / 180);

        // Fade in/out
        let alpha = petal.opacity;
        if (progress < 0.08) alpha *= progress / 0.08;
        if (progress > 0.85) alpha *= (1 - progress) / 0.15;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.scale(petal.size, petal.size);

        // Petal fill — soft white/cream
        ctx.fillStyle = `rgba(255, 252, 240, ${alpha})`;
        ctx.strokeStyle = `rgba(210, 195, 165, ${alpha * 0.6})`;
        ctx.lineWidth = 0.5 / petal.size;

        ctx.fill(paths2D[petal.pathIndex]);
        ctx.stroke(paths2D[petal.pathIndex]);

        ctx.restore();
      });

      // Remove finished burst petals (in reverse to preserve indices)
      toRemove.reverse().forEach((i) => petalsRef.current.splice(i, 1));

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