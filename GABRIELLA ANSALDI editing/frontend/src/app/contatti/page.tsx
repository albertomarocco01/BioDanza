"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContattiPage() {
    return (
        <div className="max-w-4xl mx-auto px-8 py-32 min-h-screen flex flex-col items-center justify-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6 uppercase tracking-widest">Contatti</h1>
                <p className="font-cursive text-xl md:text-2xl text-text-secondary italic">Inizia il tuo cammino con me</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full bg-primary-dark/20 p-12 md:p-20 text-center border border-text-primary/10 shadow-sm relative overflow-hidden"
            >
                {/* Decorative element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-accent-metamedicina/30" />

                <div className="space-y-12 relative z-10">
                    <div>
                        <h2 className="font-display text-4xl text-text-primary mb-6">Maria Gabriella Ansaldi</h2>
                        <p className="font-serif text-lg opacity-80 leading-relaxed max-w-xl mx-auto">
                            Sono disponibile per sessioni individuali e per fornirti tutte le informazioni necessarie sui percorsi di gruppo.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                        <div className="space-y-4">
                            <h3 className="font-serif uppercase tracking-[0.2em] text-sm font-bold opacity-60">Telefono</h3>
                          <a href="tel:+393338003218" className="block font-serif text-xl md:text-2xl whitespace-nowrap hover:text-accent-biodanza transition-colors">
                                +39 333 800 3218
                           </a>
                        </div>
                        <div className="w-[1px] h-16 bg-text-primary/10 hidden md:block" />
                        <div className="space-y-4">
                            <h3 className="font-serif uppercase tracking-[0.2em] text-sm font-bold opacity-60">Email</h3>
                            <a href="mailto:info@mariagabriellaansaldi.it" className="block font-serif text-xl md:text-2xl hover:text-accent-biodanza transition-colors">
                                info@mariagabriellaansaldi.it
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-text-primary/10">
                        <h3 className="font-serif uppercase tracking-[0.2em] text-sm font-bold opacity-60 mb-4">Come prenotare una consulenza</h3>
                        <p className="font-serif text-base opacity-80 max-w-md mx-auto mb-6">
                            Puoi contattarmi telefonicamente o via email per fissare un primo incontro conoscitivo, senza impegno. Sarò felice di ascoltarti.
                        </p>
                    </div>

                    <div className="pt-8">
                        <h3 className="font-serif uppercase tracking-[0.2em] text-sm font-bold opacity-60 mb-6">Seguimi sui Social</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.facebook.com/m.gabry.ansaldi" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all text-xl font-display aria-label='Facebook'">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-1/3 h-1/3"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                             </a>
                             <a href="https://www.instagram.com/gabrybiodanza/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all text-xl font-display aria-label='Instagram'">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-1/3 h-1/3"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                             </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
