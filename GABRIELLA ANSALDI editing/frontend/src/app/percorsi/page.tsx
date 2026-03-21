"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PinkAndWhitePetalRain from "@/components/ui/PINKWHITE";

export default function PercorsiPage() {
    return (
        <div className="relative min-h-screen">

            {/* ─── PIOGGIA PETALI ROSA + BIANCHI ─── */}
            <PinkAndWhitePetalRain />

            <div className="max-w-6xl mx-auto px-8 py-24 min-h-screen relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6 uppercase tracking-widest">Percorsi</h1>
                    <p className="font-cursive text-xl md:text-2xl text-text-secondary italic">Due vie per il ritorno a te</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 relative">

                    {/* Vertical Divider for Desktop */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-text-primary/10 hidden md:block" />

                    {/* ─── LAVORO DI GRUPPO ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="group flex flex-col items-center text-center p-8 md:p-12 bg-primary-dark/20 border border-text-primary/5 hover:border-accent-biodanza/30 transition-all duration-500"
                    >
                        <span className="font-serif text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4">Lavoro di Gruppo</span>
                        <h2 className="font-display text-4xl text-accent-biodanza mb-4 uppercase tracking-widest">Biodanza</h2>
                        <h3 className="font-cursive text-xl text-text-secondary mb-8">Crescita collettiva attraverso il movimento</h3>
                        <p className="font-serif text-lg leading-relaxed opacity-80 mb-6 max-w-sm">
                            Un sistema di integrazione umana basato su musica, movimento ed emozione. Attraverso il gruppo, riscopriamo la vitalità e la gioia del contatto autentico.
                        </p>
                        <div className="w-full border-t border-text-primary/10 pt-6 mt-auto space-y-3">
                            <p className="font-serif text-sm opacity-60">Corsi settimanali • Seminari • Ritiri</p>
                        </div>
                        <Link
                            href="/biodanza"
                            className="mt-8 font-serif uppercase tracking-widest text-sm border-b border-text-primary/30 pb-1 hover:border-accent-biodanza text-text-primary hover:text-accent-biodanza transition-all"
                        >
                            Scopri la Biodanza
                        </Link>
                    </motion.div>

                    {/* ─── LAVORO INDIVIDUALE ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group flex flex-col items-center text-center p-8 md:p-12 bg-primary-dark/20 border border-text-primary/5 hover:border-accent-metamedicina/30 transition-all duration-500"
                    >
                        <span className="font-serif text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4">Lavoro Individuale</span>
                        <h2 className="font-display text-4xl text-accent-metamedicina mb-4 uppercase tracking-widest">Consulenze</h2>
                        <h3 className="font-cursive text-xl text-text-secondary mb-8">Crescita individuale e ascolto psicosomatico</h3>
                        <p className="font-serif text-lg leading-relaxed opacity-80 mb-6 max-w-sm">
                            L'approccio della Metamedicina permette di decodificare il linguaggio del corpo e delle emozioni, sciogliendo i blocchi interiori attraverso un dialogo empatico e profondo.
                        </p>
                        <div className="w-full border-t border-text-primary/10 pt-6 mt-auto space-y-3">
                            <p className="font-serif text-sm opacity-60">Consulenze individuali • Sessioni online e in presenza</p>
                        </div>
                        <Link
                            href="/metamedicina"
                            className="mt-8 font-serif uppercase tracking-widest text-sm border-b border-text-primary/30 pb-1 hover:border-accent-metamedicina text-text-primary hover:text-accent-metamedicina transition-all"
                        >
                            Scopri le Consulenze
                        </Link>
                    </motion.div>

                </div>

                {/* Introspective CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-32 text-center"
                >
                    <p className="font-cursive text-xl md:text-2xl text-text-secondary italic max-w-2xl mx-auto">
                        &quot;Non sai quale percorso fa per te? Contattami per una prima consulenza conoscitiva gratuita.&quot;
                    </p>
                    <Link
                        href="/contatti"
                        className="inline-block mt-8 px-10 py-4 bg-text-primary text-primary font-serif uppercase tracking-[0.2em] text-sm hover:bg-text-secondary transition-colors"
                    >
                        Prenota un incontro
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}