"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BiodanzaPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const flowerY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div ref={containerRef} className="relative min-h-[200vh]">
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center p-8 text-center relative z-10 overflow-hidden">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif text-5xl md:text-8xl text-accent-biodanza mb-6 uppercase tracking-widest"
                >
                    Biodanza
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-cursive text-2xl md:text-4xl text-text-secondary italic"
                >
                    Lavoro di Gruppo — La Danza della Vita
                </motion.p>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-8 py-24 relative z-10 space-y-32">
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-text-primary">Cos&apos;è la Biodanza?</h2>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        La Biodanza è un sistema di accelerazione dei processi integrativi a livello cellulare, metabolico, neuroendocrino, immunologico ed esistenziale, mediante "vivencias" indotte dalla musica, dal canto, dal movimento e da situazioni di incontro in gruppo.
                    </p>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        Fondata da Rolando Toro Araneda, questa disciplina ci invita a riscoprire la gioia di vivere e la sacralità dell&apos;incontro umano.
                    </p>
                </div>

                <div className="grid md:grid-grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl md:text-4xl text-accent-biodanza">I Corsi Settimanali</h3>
                        <p className="font-serif text-lg">
                            Vieni a sperimentare la Biodanza con me. Lezioni aperte a tutti, non è richiesta alcuna esperienza precedente.
                        </p>
                        <div className="p-6 border border-accent-biodanza/20 bg-accent-biodanza/5 rounded-sm">
                            <p className="font-serif font-bold italic">Prossimo appuntamento:</p>
                            <p className="font-serif mt-2 italic">Contattami per scoprire i turni attivi e le prove gratuite.</p>
                        </div>
                    </div>
                    <div className="relative aspect-square border border-text-primary/10 rounded-sm overflow-hidden bg-primary-dark/50 flex items-center justify-center">
                        <span className="font-serif text-xs opacity-50 uppercase tracking-widest">Foto Gallery / Risograph placeholder</span>
                    </div>
                </div>

                <div className="pt-24 border-t border-text-primary/10 text-center space-y-8">
                    <h3 className="font-serif text-2xl md:text-4xl">Il Mio Libro</h3>
                    <p className="font-serif text-lg max-w-xl mx-auto">
                        Ho raccolto anni di esperienza e amore per questa disciplina in una pubblicazione dedicata a chi vuole approfondire il sentiero della Biodanza.
                    </p>
                    <a
                        href="https://www.amazon.it/Meccanismi-azione-della-biodanza-illustrata/dp/8899065071/ref=sr_1_1?crid=1LMWVY0IYGZEH&dib=eyJ2IjoiMSJ9.oa6ejN7ZK--Q9MS-AOF4nA.E75eb4CPqbW_TOByVLvR09mOm0lNJxGAIq5rF0UMlfM&dib_tag=se&keywords=meccanismi+di+biodanza&qid=1773916742&sprefix=meccanismi+di+biodanza%2Caps%2C301&sr=8-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-accent-biodanza text-white font-serif uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform"
                    >
                        Acquista il libro
                    </a>
                </div>
            </section>
        </div>
    );
}