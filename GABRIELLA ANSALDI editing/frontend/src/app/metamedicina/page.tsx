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
                            /* SVG 1: Brain — Detailed cerebral outline with sulci and neural nodes */
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
                                    aria-label="Simbolo Mente (Cervello)"
                                >
                                    {/* Left hemisphere outer contour */}
                                    <path d="M40,64 C40,64 36,62 30,58 C22,52 14,44 14,34 C14,28 16,22 20,18 C24,14 30,12 36,12 C38,12 39,12 40,13" />
                                    {/* Right hemisphere outer contour */}
                                    <path d="M40,64 C40,64 44,62 50,58 C58,52 66,44 66,34 C66,28 64,22 60,18 C56,14 50,12 44,12 C42,12 41,12 40,13" />
                                    {/* Left sulci / folds */}
                                    <path d="M22,28 C26,24 34,22 38,26" opacity="0.6" />
                                    <path d="M18,38 C24,34 32,33 38,36" opacity="0.5" />
                                    <path d="M24,48 C28,44 34,43 38,46" opacity="0.4" />
                                    {/* Right sulci / folds */}
                                    <path d="M58,28 C54,24 46,22 42,26" opacity="0.6" />
                                    <path d="M62,38 C56,34 48,33 42,36" opacity="0.5" />
                                    <path d="M56,48 C52,44 46,43 42,46" opacity="0.4" />
                                    {/* Central fissure */}
                                    <line x1="40" y1="13" x2="40" y2="64" strokeDasharray="2 3" opacity="0.35" />
                                    {/* Neural connection nodes */}
                                    <circle cx="28" cy="30" r="1.5" fill="#4B5749" stroke="none" />
                                    <circle cx="52" cy="30" r="1.5" fill="#4B5749" stroke="none" />
                                    <circle cx="32" cy="42" r="1.2" fill="#4B5749" stroke="none" />
                                    <circle cx="48" cy="42" r="1.2" fill="#4B5749" stroke="none" />
                                    <circle cx="40" cy="24" r="1" fill="#4B5749" stroke="none" />
                                    {/* Synaptic arcs */}
                                    <path d="M28,30 Q40,22 52,30" opacity="0.25" strokeWidth="0.8" />
                                    <path d="M32,42 Q40,36 48,42" opacity="0.25" strokeWidth="0.8" />
                                    {/* Brain stem */}
                                    <path d="M38,64 Q40,70 42,64" opacity="0.5" />
                                </svg>
                            ),
                        },
                        {
                            title: "Corpo",
                            desc: "Ascoltare i sintomi come alleati.",
                            /* SVG 2: Body — Minimalist somatic silhouette with energy meridian */
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
                                    aria-label="Simbolo Corpo (Figura Umana)"
                                >
                                    {/* Head */}
                                    <circle cx="40" cy="14" r="6" />
                                    {/* Neck */}
                                    <line x1="40" y1="20" x2="40" y2="24" />
                                    {/* Torso outline — left */}
                                    <path d="M40,24 C36,24 30,26 28,30 C26,34 26,42 28,48 L34,48" />
                                    {/* Torso outline — right */}
                                    <path d="M40,24 C44,24 50,26 52,30 C54,34 54,42 52,48 L46,48" />
                                    {/* Waist connection */}
                                    <path d="M34,48 Q40,50 46,48" />
                                    {/* Left arm */}
                                    <path d="M28,30 C24,32 18,36 16,40" />
                                    <circle cx="15" cy="41" r="1.2" fill="#4B5749" stroke="none" />
                                    {/* Right arm */}
                                    <path d="M52,30 C56,32 62,36 64,40" />
                                    <circle cx="65" cy="41" r="1.2" fill="#4B5749" stroke="none" />
                                    {/* Left leg */}
                                    <path d="M36,48 C34,54 32,62 30,70" />
                                    {/* Right leg */}
                                    <path d="M44,48 C46,54 48,62 50,70" />
                                    {/* Central energy meridian (chakra line) */}
                                    <line x1="40" y1="24" x2="40" y2="48" strokeDasharray="1.5 3" opacity="0.3" />
                                    {/* Energy nodes along spine */}
                                    <circle cx="40" cy="28" r="1" fill="#4B5749" stroke="none" opacity="0.5" />
                                    <circle cx="40" cy="34" r="1" fill="#4B5749" stroke="none" opacity="0.5" />
                                    <circle cx="40" cy="40" r="1" fill="#4B5749" stroke="none" opacity="0.5" />
                                    <circle cx="40" cy="46" r="1" fill="#4B5749" stroke="none" opacity="0.5" />
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
