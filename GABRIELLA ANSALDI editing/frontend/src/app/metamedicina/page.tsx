"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MetamedicinaPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, -220]);
    const flowerX = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div ref={containerRef} className="relative min-h-[200vh]">

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center p-8 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="font-serif text-5xl md:text-8xl text-accent-metamedicina mb-6 uppercase tracking-widest"
                >
                    Metamedicina
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="font-cursive text-2xl md:text-4xl text-text-secondary italic"
                >
                    Lavoro Individuale — L'Ascolto Profondo
                </motion.p>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-8 py-24 relative z-10 space-y-32">
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-text-primary">Oltre la Medicina</h2>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        La Metamedicina non è solo una tecnica, è un'arte di guarigione che va oltre la semplice soppressione del sintomo. Significa "andare oltre" la medicina tradizionale per cercare la causa psicosomatica del malessere.
                    </p>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        Fondata da Claudia Rainville, ci insegna che ogni dolore o malattia è un segnale che il nostro corpo ci invia per parlarci di un conflitto interiore irrisolto.
                    </p>
                </div>

                <div className="p-12 border border-accent-metamedicina/30 bg-accent-metamedicina/5 backdrop-blur-sm rounded-sm text-center space-y-6">
                    <h3 className="font-serif text-2xl md:text-4xl text-accent-metamedicina">Consulenze Individuali</h3>
                    <p className="font-serif text-lg max-w-2xl mx-auto">
                        Attraverso il dialogo e l'ascolto empatico, ti accompagno nel decifrare i messaggi del tuo corpo per ritrovare l'equilibrio e la serenità.
                    </p>
                    <div className="pt-8">
                        <p className="font-serif italic text-sm opacity-70">Per prenotare una consulenza:</p>
                        <p className="font-serif text-xl mt-2">Visita la sezione <a href="/contatti" className="underline hover:text-accent-metamedicina transition-colors">Contatti</a></p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 pb-24">
                    {/* ========================================== */}
                    {/* LINE-ART SVG ICONS — Brain, Body, Heart    */}
                    {/* Style: thin strokes, no fills, elegant     */}
                    {/* Wrapped in motion.div for hover effects    */}
                    {/* NOT clickable — purely visual anchors      */}
                    {/* ========================================== */}
                    {[
                       {
    title: "Mente",
    desc: "Identificare le credenze limitanti.",
    /* SVG: Mente — Phosphor Brain Outline adapted to Brand Style */
    svg: (
        <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#4B5749"
            strokeWidth="4.5" // Spessore calibrato per il viewBox 256 per matchare l'1.2 del Cuore
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-20 h-20"
            aria-label="Simbolo Mente (Cervello)"
        >
            {/* Struttura cerebrale */}
            <circle cx="128" cy="72" r="16" />
            <circle cx="144" cy="136" r="16" />
            <path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" />
            <line x1="128" y1="56" x2="128" y2="24.39" />
            <polyline points="214.38 88 184 88 154.24 123.71" />
        </svg>
    ),
},
                        {
                            title: "Corpo",
                            desc: "Ascoltare i sintomi come alleati.",
                            /* SVG 2: Corpo — Elegant human figure in meditative Lotus pose */
                            svg: (
                                <svg
                                    viewBox="0 0 80 80"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="#4B5749"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-20 h-20"
                                    aria-label="Simbolo Corpo (Meditazione)"
                                >
                                    {/* Head centered near the top */}
                                    <circle cx="40" cy="18" r="5" />
                                    {/* Spine curving gently downwards */}
                                    <path d="M 40 23 Q 42 40 40 55" />
                                    {/* Arms as graceful arcs resting on knees */}
                                    <path d="M 40 30 Q 25 40 20 52" />
                                    <path d="M 40 30 Q 55 40 60 52" />
                                    {/* Crossed legs in a smooth infinity-like curve */}
                                    <path d="M 20 52 Q 40 65 60 52 Q 50 60 40 55 Q 30 60 20 52" />
                                </svg>
                            ),
                        },
                        {
                            title: "Emozione",
                            desc: "Liberare il dolore del passato.",
                            /* SVG 3: Heart — Anatomical-symbolic heart with pulse wave */
                            svg: (
                                <svg
                                    viewBox="0 0 80 80"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="#4B5749"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-20 h-20"
                                    aria-label="Simbolo Emozione (Cuore)"
                                >
                                    {/* Heart outer contour */}
                                    <path d="M40,66 C40,66 10,50 10,30 C10,22 16,14 26,14 C30,14 34,16 37,19 C38,20 39,21 40,22 C41,21 42,20 43,19 C46,16 50,14 54,14 C64,14 70,22 70,30 C70,50 40,66 40,66 Z" />
                                    {/* Inner heart detail — aorta suggestion */}
                                    <path d="M36,22 C34,18 30,16 26,16" opacity="0.4" strokeWidth="0.8" />
                                    <path d="M44,22 C46,18 50,16 54,16" opacity="0.4" strokeWidth="0.8" />
                                    {/* Pulse / heartbeat wave through center */}
                                    <polyline points="22,38 30,38 34,28 38,46 42,32 46,42 50,38 58,38" strokeWidth="1" opacity="0.5" />
                                    {/* Subtle radiating ripples */}
                                    <path d="M40,10 L40,6" opacity="0.2" strokeWidth="0.8" />
                                    <path d="M28,12 L24,8" opacity="0.2" strokeWidth="0.8" />
                                    <path d="M52,12 L56,8" opacity="0.2" strokeWidth="0.8" />
                                    {/* Inner warmth glow — concentric arc */}
                                    <path d="M30,36 Q40,28 50,36" opacity="0.15" strokeWidth="0.8" />
                                    <path d="M28,42 Q40,32 52,42" opacity="0.1" strokeWidth="0.8" />
                                </svg>
                            ),
                        },
                    ].map((item, i) => (
                        /* Each icon wrapped in motion.div for hover effect — NOT clickable */
                        <div key={i} className="text-center space-y-5 flex flex-col items-center">
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="w-20 h-20 mx-auto flex items-center justify-center cursor-default"
                            >
                                {item.svg}
                            </motion.div>
                            <h4 className="font-serif text-xl text-text-primary">{item.title}</h4>
                            <p className="font-serif text-sm text-text-primary/70 max-w-[200px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
