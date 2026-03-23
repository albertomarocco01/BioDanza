"use client";

/**
 * WhitePetalRain — tsParticles v3 implementation
 *
 * npm install @tsparticles/react @tsparticles/engine @tsparticles/slim
 *
 * Replace {{PETAL_IMAGE_PATH}} with the actual asset path before use,
 * e.g. /images/white-lotus-petal.png
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ICoordinates, ISourceOptions } from "@tsparticles/engine";

// ─── Constants ───────────────────────────────────────────────────────────────
const CONTINUOUS_COUNT = 15;
const BURST_COUNT = 13;

/** Pixel width of each lateral spawn band (% of viewport, clamped 0-100) */
const LEFT_MIN = 0;
const LEFT_MAX = 23;
const RIGHT_MIN = 77;
const RIGHT_MAX = 100;

// ─── Module-level container ref for burst calls ───────────────────────────────
let _container: Container | null = null;

function fireBurst(count: number): void {
  if (!_container || _container.destroyed) return;

  for (let i = 0; i < count; i++) {
    const onLeft = Math.random() < 0.5;
    const pct = onLeft
      ? LEFT_MIN + Math.random() * (LEFT_MAX - LEFT_MIN)
      : RIGHT_MIN + Math.random() * (RIGHT_MAX - RIGHT_MIN);

    const pos: ICoordinates = {
      x: (pct / 100) * window.innerWidth,
      y: -20,
    };

    const delay = Math.random() * 400;
    setTimeout(() => {
      if (_container && !_container.destroyed) {
        _container.particles.push(1, undefined, undefined, undefined);
        // Manually place: use addParticle with position
        _container.particles.addParticle(pos);
      }
    }, delay);
  }
}

// ─── tsParticles configuration ────────────────────────────────────────────────
const particleOptions: ISourceOptions = {
  fpsLimit: 60,
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 0, // Controlled entirely by emitters
      density: { enable: false },
    },
    shape: {
      type: "image",
      options: {
        image: {
          src: "/white-lotus-petal.png",
          width: 100,
          height: 100,
        },
      },
    },
    // ── Size (scale) — varies per particle ─────────────────────────────────
    size: {
      value: { min: 14, max: 28 },
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
        startValue: "random",
      },
    },
    // ── Opacity — fade-in at top, fade-out at bottom via life.opacity ───────
    opacity: {
      value: { min: 0.45, max: 0.92 },
      animation: {
        enable: true,
        speed: 0.35,
        sync: false,
        startValue: "min",
        destroy: "none",
      },
    },
    // ── Rotation (Z-axis) ────────────────────────────────────────────────────
    rotate: {
      value: { min: 0, max: 360 },
      direction: "random",
      animation: {
        enable: true,
        speed: { min: 5, max: 20 },
        sync: false,
      },
    },
    // ── Tilt (X-axis pitch — pseudo-3D) ─────────────────────────────────────
    tilt: {
      enable: true,
      value: { min: 0, max: 360 },
      direction: "random",
      animation: {
        enable: true,
        speed: { min: 3, max: 14 },
        sync: false,
      },
    },
    // ── Roll (Y-axis yaw effect) ─────────────────────────────────────────────
    roll: {
      enable: true,
      speed: { min: 5, max: 16 },
      darken: { enable: true, value: 20 },
    },
    // ── Wobble (horizontal sway / wind) ─────────────────────────────────────
    wobble: {
      enable: true,
      distance: { min: 22, max: 65 },
      speed: {
        angle: { min: 4, max: 12 },
        move: 2,
      },
    },
    // ── Movement ─────────────────────────────────────────────────────────────
    move: {
      enable: true,
      direction: "bottom",
      speed: { min: 1.2, max: 3.8 },
      straight: false,
      random: true,
      outModes: { default: "out" },
      gravity: {
        enable: true,
        acceleration: 0.12,
        maxSpeed: 4.5,
      },
    },
    // ── Lifecycle / fade ─────────────────────────────────────────────────────
    life: {
      duration: {
        sync: false,
        value: { min: 7, max: 15 },
      },
      count: 1,
    },
  },
  // ── Two emitters: left band + right band (side-concentration) ──────────────
  emitters: [
    {
      // Left lateral zone: 0-23% of viewport width
      position: { x: 11.5, y: 0 },
      size: { width: 23, height: 0 },
      rate: {
        quantity: 1,
        delay: 16 / CONTINUOUS_COUNT, // evenly spread CONTINUOUS_COUNT/2 from each side
      },
      life: { count: 0 }, // emit forever
      particles: {
        move: { direction: "bottom" },
        life: { count: 1 },
      },
    },
    {
      // Right lateral zone: 77-100% of viewport width
      position: { x: 88.5, y: 0 },
      size: { width: 23, height: 0 },
      rate: {
        quantity: 1,
        delay: 16 / CONTINUOUS_COUNT,
      },
      life: { count: 0 },
      particles: {
        move: { direction: "bottom" },
        life: { count: 1 },
      },
    },
  ],
  detectRetina: true,
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function PetalRain({
  scrollContainer,
}: {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
}) {
  const [engineReady, setEngineReady] = useState(false);
  const lastScrollSection = useRef<number>(-1);

  // ── One-time engine initialisation ──────────────────────────────────────────
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  // ── Store container reference and wire burst ─────────────────────────────────
  const onParticlesLoaded = useCallback(async (container?: Container) => {
    _container = container ?? null;
  }, []);

  // ── Scroll-based burst trigger ───────────────────────────────────────────────
  useEffect(() => {
    const el = scrollContainer.current;
    if (!el) return;

    const handleScroll = () => {
      const currentSection = Math.round(el.scrollTop / window.innerHeight);
      if (currentSection !== lastScrollSection.current) {
        lastScrollSection.current = currentSection;
        fireBurst(BURST_COUNT);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollContainer]);

  if (!engineReady) return null;

  return (
    <Particles
      id="tsparticles-petalrain"
      className="fixed inset-0 pointer-events-none z-50"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50 }}
      particlesLoaded={onParticlesLoaded}
      options={particleOptions}
    />
  );
}