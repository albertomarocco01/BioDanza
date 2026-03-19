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

                <div className="grid md:grid-cols-3 gap-8 pb-24">
                    {/* SVGs INJECTED: Three symbolic Metamedicina icons — monochrome, transparent background */}
                    {[
                        {
                            title: "Mente",
                            desc: "Identificare le credenze limitanti.",
                            /* SVG 1: Balance / Homeostasis — horizontal beam, two suspended circles */
                            svg: (
                                <svg
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="#4B5749"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-16 h-16"
                                    aria-label="Simbolo Equilibrio"
                                >
                                    {/* Fulcrum */}
                                    <line x1="32" y1="20" x2="32" y2="50" />
                                    <polyline points="26,50 32,46 38,50" />
                                    {/* Beam */}
                                    <line x1="12" y1="20" x2="52" y2="20" />
                                    {/* Left pendant */}
                                    <line x1="14" y1="20" x2="14" y2="33" />
                                    <circle cx="14" cy="38" r="5" />
                                    {/* Right pendant */}
                                    <line x1="50" y1="20" x2="50" y2="33" />
                                    <circle cx="50" cy="38" r="5" />
                                    {/* Apex pivot */}
                                    <circle cx="32" cy="20" r="2" fill="#4B5749" strokeWidth="0" />
                                </svg>
                            ),
                        },
                        {
                            title: "Corpo",
                            desc: "Ascoltare i sintomi come alleati.",
                            /* SVG 2: Connection / Pathway — curved flowing path with three nodes */
                            svg: (
                                <svg
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="#4B5749"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-16 h-16"
                                    aria-label="Simbolo Connessione"
                                >
                                    {/* Flowing S-curve path */}
                                    <path d="M12,48 C12,28 32,36 32,20 C32,8 52,16 52,8" />
                                    {/* Nodes along path */}
                                    <circle cx="12" cy="48" r="4" />
                                    <circle cx="32" cy="20" r="4" />
                                    <circle cx="52" cy="8" r="4" />
                                    {/* Radiating marks at each node */}
                                    <line x1="6" y1="44" x2="4" y2="42" />
                                    <line x1="6" y1="53" x2="4" y2="55" />
                                    <line x1="28" y1="14" x2="26" y2="11" />
                                    <line x1="36" y1="14" x2="38" y2="11" />
                                </svg>
                            ),
                        },
                        {
                            title: "Emozione",
                            desc: "Liberare il dolore del passato.",
                            /* SVG 3: Bloom / Harmony — six-petal lotus radiating from centre */
                            svg: (
                                <svg
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="#4B5749"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-16 h-16"
                                    aria-label="Simbolo Fioritura"
                                >
                                    {/* Six petals as ellipses rotated around centre */}
                                    <ellipse cx="32" cy="22" rx="5" ry="11" />
                                    <ellipse cx="32" cy="22" rx="5" ry="11" transform="rotate(60 32 32)" />
                                    <ellipse cx="32" cy="22" rx="5" ry="11" transform="rotate(120 32 32)" />
                                    <ellipse cx="32" cy="22" rx="5" ry="11" transform="rotate(180 32 32)" />
                                    <ellipse cx="32" cy="22" rx="5" ry="11" transform="rotate(240 32 32)" />
                                    <ellipse cx="32" cy="22" rx="5" ry="11" transform="rotate(300 32 32)" />
                                    {/* Centre */}
                                    <circle cx="32" cy="32" r="3" />
                                </svg>
                            ),
                        },
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-4 flex flex-col items-center">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center">
                                {item.svg}
                            </div>
                            <h4 className="font-serif text-xl">{item.title}</h4>
                            <p className="font-serif text-sm opacity-80">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
