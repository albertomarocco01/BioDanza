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
                    {[
                        { title: "Mente", desc: "Identificare le credenze limitanti." },
                        { title: "Corpo", desc: "Ascoltare i sintomi come alleati." },
                        { title: "Emozione", desc: "Liberare il dolore del passato." }
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto border border-accent-metamedicina/20 rotate-45 flex items-center justify-center">
                                <span className="font-serif text-accent-metamedicina text-xl">0{i + 1}</span>
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
