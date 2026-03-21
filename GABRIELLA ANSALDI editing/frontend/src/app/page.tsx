"use client";

// ─── CSS Scroll Snap + Zen Dynamic Stability (V5) ───
// • PetalRain component added — canvas-based falling petals
// • Burst triggered on every snap section change
// • "Inizia il cammino" button moved lower (mt-16)

import React, { useRef, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";
import PetalRain from "@/components/ui/WhitePetalRain";

// ─── LIQUID VARIANT ───
const liquidVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const SECTION_H = "h-[100dvh] min-h-[100dvh]";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const scrollToCTA = useCallback(() => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#FFF8E6] text-[#4B5749] overflow-x-hidden"
    >
      {/* ─── PETAL RAIN — fixed canvas layer, listens to scroll container ─── */}
      <PetalRain scrollContainer={scrollContainerRef} />

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════ */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 gap-6 relative flex-shrink-0 pt-20`}
      >
        {/* 🌸 FIORE DI LOTO */}
        <motion.img
          src="/fiore-loto.png"
          alt="Fiore di Loto delicato"
          initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
          animate={{ opacity: 0.95, rotate: 15, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[20%] md:top-[45%] md:-translate-y-1/2 right-[-4%] md:right-[2%] lg:right-[8%] w-[192px] md:w-[288px] lg:w-[352px] drop-shadow-2xl pointer-events-none z-0"
        />

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-sm md:text-base uppercase tracking-[0.3em] opacity-60 relative z-10"
        >
          Maria Gabriella Ansaldi &bull; Relazione d&apos;Aiuto
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-cursive text-5xl md:text-7xl lg:text-8xl leading-tight italic max-w-5xl text-center relative z-10"
        >
          &quot;Forse questa volta ho bisogno di aiuto?&quot;
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="font-serif text-xl md:text-2xl text-[#5E2F00] max-w-2xl leading-relaxed text-center relative z-10"
        >
          Sei in uno spazio protetto. Un luogo dove il tuo sentire viene ascoltato, accolto e mai giudicato.
        </motion.p>

        {/* ─── "INIZIA IL CAMMINO" — spostato più in basso con mt-16 ─── */}
        <motion.button
          onClick={scrollToCTA}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-16 flex flex-col items-center relative z-10 cursor-pointer group bg-transparent border-none outline-none"
          aria-label="Scorri verso il basso fino alla sezione finale"
        >
          <span className="font-serif text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:opacity-100 transition-opacity duration-300">
            Inizia il cammino
          </span>
          <div className="w-[1px] h-20 bg-[#4B5749]/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-[#4B5749]/80"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: [0.45, 0, 0.55, 1] }}
            />
          </div>
        </motion.button>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — DOMANDA CATALIZZATRICE 2
          ══════════════════════════════════════════ */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 relative flex-shrink-0`}
      >
        {/* 🌸 FIORE ROSA (SINISTRA) */}
        <motion.img
          src="/images/assets/fiore-rosa.png"
          alt="Fiore rosa"
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 0.92, rotate: -12, scale: 1.15 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[20%] md:top-[45%] md:-translate-y-1/2 left-[-4%] md:left-[2%] lg:left-[8%] w-[192px] md:w-[288px] lg:w-[352px] drop-shadow-2xl pointer-events-none z-0"
        />

        <motion.div
          variants={liquidVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            &quot;E se il mio corpo stesse cercando di dirmi qualcosa?&quot;
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            Ogni sintomo, ogni tensione, ogni disagio è un messaggio d&apos;amore dal profondo di noi stessi. Imparare ad ascoltarlo apre la porta a una comprensione più vasta.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — CHIUSURA / CTA
          ══════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className={`${SECTION_H} w-full flex flex-col items-center justify-end snap-start px-6 md:px-12 relative flex-shrink-0 pb-24`}
      >
        {/* 🌸 6 ANIMATED FLOWERS 🌸 */}
        {[
          // LEFT SIDE
          { className: "w-16 md:w-20 left-[1%] top-[10%]", rotate: -15, hoverRotate: -20, i: 0 },
          { className: "w-24 md:w-32 left-[3%] top-[45%]", rotate: -5, hoverRotate: -10, i: 1 },
          { className: "w-32 md:w-44 left-[0%] top-[68%]", rotate: -20, hoverRotate: -25, i: 2 },
          // RIGHT SIDE
          { className: "w-16 md:w-20 right-[1%] top-[15%]", rotate: 10, hoverRotate: 15, i: 3 },
          { className: "w-24 md:w-32 right-[3%] top-[50%]", rotate: 18, hoverRotate: 23, i: 4 },
          { className: "w-32 md:w-44 right-[0%] top-[72%]", rotate: 8, hoverRotate: 13, i: 5 },
        ].map((f) => (
          <motion.img
            key={f.i}
            src="/images/assets/fiore-rosa2.png"
            alt="Fiore decorativo"
            initial={{ opacity: 0, scale: 0.85, rotate: f.rotate }}
            animate={{ opacity: 0.88, scale: [1, 1.04, 1], rotate: f.rotate }}
            whileHover={{ 
              scale: 1.12, 
              rotate: f.hoverRotate,
              transition: { type: "spring", stiffness: 200, damping: 12 } 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3.5 + f.i * 0.4, 
              ease: "easeInOut" 
            }}
            className={`absolute pointer-events-auto z-0 drop-shadow-xl cursor-default ${f.className}`}
          />
        ))}

        <motion.div
          variants={liquidVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="font-cursive text-3xl md:text-5xl text-[#5E2F00] max-w-3xl leading-relaxed italic">
            &quot;Se senti che è arrivato il momento, io sono qui.&quot;
          </p>
          <h2 className="font-serif text-4xl md:text-6xl">
            Maria Gabriella Ansaldi
          </h2>
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed">
            Ti accompagno in un cammino di ascolto profondo e trasformazione, attraverso il lavoro di gruppo e le consulenze individuali.
          </p>
          <a
            href="/percorsi"
            className="px-10 py-4 border border-[#4B5749]/30 font-serif uppercase tracking-[0.2em] text-sm text-[#4B5749] hover:bg-[#4B5749] hover:text-[#FFF8E6] transition-all duration-300 rounded-full"
          >
            Scopri i Percorsi
          </a>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL SNAP POINT — FOOTER
          ══════════════════════════════════════════ */}
      <section className="h-auto snap-end relative z-10 flex-shrink-0">
        <Footer />
      </section>

    </div>
  );
}
