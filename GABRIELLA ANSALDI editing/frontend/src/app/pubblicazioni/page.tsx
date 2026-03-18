"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PubblicazioniPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6 uppercase tracking-widest">Pubblicazioni</h1>
                <p className="font-cursive text-xl md:text-2xl text-text-secondary italic">Pagine per l'anima</p>
            </motion.div>

            <div className="bg-primary-dark/20 border border-text-primary/10 p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">

                {/* Book Cover Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[300px] aspect-[2/3] bg-primary-dark/80 shadow-2xl relative flex flex-col items-center justify-center p-6 border-l-8 border-accent-biodanza/50"
                >
                    <div className="absolute inset-0 bg-primary-dark/10" />
                    <span className="font-serif text-xs uppercase tracking-widest opacity-60 absolute top-8">Libro in Uscita</span>
                    <h2 className="font-display text-3xl text-center text-text-primary z-10">[Titolo del Libro]</h2>
                    <span className="font-cursive italic mt-4 z-10 text-center opacity-80">"Sottotitolo o citazione emozionale"</span>
                    <span className="font-serif text-xs uppercase tracking-widest opacity-60 absolute bottom-8">Maria Gabriella Ansaldi</span>
                </motion.div>

                {/* Book Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 space-y-8"
                >
                    <h3 className="font-display text-4xl text-text-primary mb-2">Una sintesi del cammino</h3>
                    <p className="font-serif text-lg leading-relaxed opacity-90">
                        In questo libro ho raccolto le essenze di anni di lavoro, ascolto e condivisione. Non è un semplice manuale teorico, ma un accompagnamento pratico e poetico per chiunque desideri intraprendere un viaggio di scoperta interiore.
                    </p>
                    <p className="font-serif text-lg leading-relaxed opacity-90">
                        Attraverso storie, spunti di riflessione e chiavi di lettura ispirate alla Metamedicina e alla Biodanza, il testo offre uno specchio in cui guardarsi con dolcezza e onestà, per riscoprire la propria forza vitale.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-text-primary text-primary font-serif uppercase tracking-widest text-sm hover:bg-text-secondary transition-colors text-center w-full sm:w-auto inline-block">
                            Acquista su Amazon
                        </a>
                        <a href="#" className="px-8 py-4 border border-text-primary/20 font-serif uppercase tracking-widest text-sm hover:border-text-primary transition-colors text-center w-full sm:w-auto">
                            Leggi un estratto
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
