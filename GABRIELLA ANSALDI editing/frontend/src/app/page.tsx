"use client";

// ─── CSS Scroll Snap + Zen Dynamic Stability (V4) ───
// • Universal use of 100dvh for absolute viewport stability.
// • Footer integrated as a final, stable snap-end point.
// • Liquid transitions refined (amount: 0.5) for precise trigger timing.
// • Jitter fix: removed overflow-hidden on sections, added flex-shrink-0.

import React, { useRef, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";

// ─── LIQUID VARIANT: organic entrance for each section's inner content ───
const liquidVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section height token (Dynamic Viewport Height for mobile stability) ───
const SECTION_H = "h-[100dvh] min-h-[100dvh]";

export default function Home() {
  // Ref to the scroll-snap host container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Ref to the final CTA section for anchor button navigation
  const ctaRef = useRef<HTMLElement>(null);

  // ─── scrollToCTA: smooth-scrolls within the snap container to the CTA section ───
  const scrollToCTA = useCallback(() => {
    // block: 'end' ensures we land precisely at the CTA before the footer snap
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  return (
    // ─── PARENT CONTAINER: Scroll Snap Host ───
    // Using overflow-y-auto and h-[100dvh] for native stability and mobile chrome protection
    <div
      ref={scrollContainerRef}
      className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#FFF8E6] text-[#4B5749] overflow-x-hidden"
    >

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO CON FIORE IN RILIEVO
          ══════════════════════════════════════════ */}
      {/* pt-20 added to compensate for fixed header height (80px) */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 gap-6 relative flex-shrink-0 pt-20`}
      >

        {/* 🌸 FIORE DI LOTO 🌸 — absolute, right-positioned, behind text */}
        <motion.img
          src="/fiore-loto.png"
          alt="Fiore di Loto delicato"
          initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
          animate={{ opacity: 0.95, rotate: 15, scale: 0.9 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[20%] md:top-[45%] md:-translate-y-1/2 right-[-4%] md:right-[2%] lg:right-[8%] w-48 md:w-72 lg:w-88 drop-shadow-2xl pointer-events-none z-0"
        />

        {/* TESTI DELLA HERO — above flower (z-10) */}
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

        {/* ─── "INIZIA IL CAMMINO" — anchor button to CTA ─── */}
        <motion.button
          onClick={scrollToCTA}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-8 flex flex-col items-center relative z-10 cursor-pointer group bg-transparent border-none outline-none"
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
          SECTION 2 — DOMANDA CATALIZZATRICE 1
          ══════════════════════════════════════════ */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 relative flex-shrink-0`}
      >
        <motion.div
          variants={liquidVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            &quot;Forse questa volta da solo non ce la faccio?&quot;
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            A volte il peso che portiamo è troppo grande per le nostre sole spalle. Riconoscerlo non è debolezza: è il primo atto di coraggio verso il cambiamento.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — DOMANDA CATALIZZATRICE 2
          ══════════════════════════════════════════ */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 relative flex-shrink-0`}
      >
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
          SECTION 4 — DOMANDA CATALIZZATRICE 3
          ══════════════════════════════════════════ */}
      <section
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 relative flex-shrink-0`}
      >
        <motion.div
          variants={liquidVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            &quot;Posso ritrovare la gioia di essere vivo, pienamente?&quot;
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            Il percorso dalla sofferenza alla fioritura passa attraverso il corpo, la mente e le emozioni. Non sei qui per sopravvivere, ma per riscoprire la tua luce.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — CHIUSURA / CTA (Anchor Target)
          ══════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start px-6 md:px-12 relative flex-shrink-0`}
      >
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
      {/* snap-end ensures the footer aligns perfectly at the bottom of the scroll journey */}
      <section className="h-auto min-h-[40vh] snap-end relative z-10 flex-shrink-0">
        <Footer />
      </section>

    </div>
  );
}