"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── ANIMAZIONI SCROLL: HERO ───
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // ─── ANIMAZIONI SCROLL: FIORE IN PARALLASSE ───
  // Il loto si muove leggermente verso l'alto per creare profondità
  const flowerY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  // ─── ANIMAZIONI SCROLL: DOMANDA 1 ───
  const q1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const q1Y = useTransform(scrollYProgress, [0.15, 0.25], [40, 0]);

  // ─── ANIMAZIONI SCROLL: DOMANDA 2 ───
  const q2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const q2Y = useTransform(scrollYProgress, [0.35, 0.45], [40, 0]);

  // ─── ANIMAZIONI SCROLL: DOMANDA 3 ───
  const q3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const q3Y = useTransform(scrollYProgress, [0.55, 0.65], [40, 0]);

  // ─── ANIMAZIONI SCROLL: CHIUSURA / CTA ───
  const ctaOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.75, 0.85], [40, 0]);

  return (
    // Il contenitore è alto 500vh per permettere un lungo scroll
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#FFF8E6] text-[#4B5749]">

      {/* Viewport fisso in cui si animano gli elementi */}
      {/* FIX: overflow-hidden → overflow-x-hidden to stop clipping vertical text while preventing horizontal scroll */}
      <div className="sticky top-20 flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-x-hidden">

        {/* ─── HERO CON FIORE IN RILIEVO ─── */}
        {/* FIX: added gap-6 for vertical spacing between text blocks; increased padding for breathing room */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 flex flex-col gap-6 items-center justify-center px-6 py-12 md:px-12 md:py-16 text-center"
        >
          {/* 🌸 FIORE DI LOTO 🌸 */}
          {/* Spostato a destra (lg:right-[15%]), abbassato (top-[35%]) e ruotato di 15 gradi */}
          <motion.img
            src="/fiore-loto.png" // <- Assicurati che sia il PNG trasparente ritagliato
            alt="Fiore di Loto delicato"
            style={{ y: flowerY }}
            initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 0.95, rotate: 15, scale: 0.9 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            className="absolute top-[15%] md:top-[40%] md:-translate-y-1/2 right-[-4%] md:right-[2%] lg:right-[8%] w-48 md:w-72 lg:w-88 drop-shadow-2xl pointer-events-none z-0"
          />

          {/* TESTI DELLA HERO */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-sm md:text-base uppercase tracking-[0.3em] opacity-60"
          >
            Maria Gabriella Ansaldi &bull; Relazione d'Aiuto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="font-cursive text-5xl md:text-7xl lg:text-8xl leading-tight italic max-w-5xl relative z-10"
          >
            "Forse questa volta ho bisogno di aiuto?"
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="font-serif text-xl md:text-2xl text-[#5E2F00] max-w-2xl leading-relaxed relative z-10"
          >
            Sei in uno spazio protetto. Un luogo dove il tuo sentire viene ascoltato, accolto e mai giudicato.
          </motion.p>

          {/* INDICATORE DI SCROLL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="font-serif text-[10px] uppercase tracking-[0.4em] mb-4">
              Inizia il cammino
            </span>
            <div className="w-[1px] h-20 bg-[#4B5749]/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-[#4B5749]/80"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: [0.45, 0, 0.55, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ─── DOMANDA CATALIZZATRICE 1 ─── */}
        {/* FIX: added gap-6 for vertical spacing between text blocks */}
        <motion.div
          style={{ opacity: q1Opacity, y: q1Y }}
          className="absolute inset-0 flex flex-col gap-6 items-center justify-center px-6 py-12 md:px-12 md:py-16 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            "Forse questa volta da solo non ce la faccio?"
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            A volte il peso che portiamo è troppo grande per le nostre sole spalle. Riconoscerlo non è debolezza: è il primo atto di coraggio verso il cambiamento.
          </p>
        </motion.div>

        {/* ─── DOMANDA CATALIZZATRICE 2 ─── */}
        {/* FIX: added gap-6 for vertical spacing between text blocks */}
        <motion.div
          style={{ opacity: q2Opacity, y: q2Y }}
          className="absolute inset-0 flex flex-col gap-6 items-center justify-center px-6 py-12 md:px-12 md:py-16 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            "E se il mio corpo stesse cercando di dirmi qualcosa?"
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            Ogni sintomo, ogni tensione, ogni disagio è un messaggio d'amore dal profondo di noi stessi. Imparare ad ascoltarlo apre la porta a una comprensione più vasta.
          </p>
        </motion.div>

        {/* ─── DOMANDA CATALIZZATRICE 3 ─── */}
        {/* FIX: added gap-6 for vertical spacing between text blocks */}
        <motion.div
          style={{ opacity: q3Opacity, y: q3Y }}
          className="absolute inset-0 flex flex-col gap-6 items-center justify-center px-6 py-12 md:px-12 md:py-16 text-center"
        >
          <p className="font-cursive text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-relaxed italic">
            "Posso ritrovare la gioia di essere vivo, pienamente?"
          </p>
          <div className="w-16 h-[1px] bg-[#4B5749]/20" />
          <p className="font-serif text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            Il percorso dalla sofferenza alla fioritura passa attraverso il corpo, la mente e le emozioni. Non sei qui per sopravvivere, ma per riscoprire la tua luce.
          </p>
        </motion.div>

        {/* ─── CHIUSURA / CTA ─── */}
        {/* FIX: added gap-6 for vertical spacing between text blocks */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-0 flex flex-col gap-6 items-center justify-center px-6 py-12 md:px-12 md:py-16 text-center"
        >
          <p className="font-cursive text-3xl md:text-5xl text-[#5E2F00] max-w-3xl leading-relaxed italic">
            "Se senti che è arrivato il momento, io sono qui."
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

      </div>
    </div>
  );
}