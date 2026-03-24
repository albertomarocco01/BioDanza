"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MetamedicinaPage() {
    return (
        <div className="relative min-h-[200vh]">
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center p-8 text-center relative z-10 overflow-hidden">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif text-5xl md:text-8xl text-accent-metamedicina mb-6 uppercase tracking-widest"
                >
                    Metamedicina
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-cursive text-2xl md:text-4xl text-text-secondary italic"
                >
                    Lavoro Individuale — L&apos;Ascolto Profondo
                </motion.p>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-8 py-24 relative z-10 space-y-32">
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-text-primary">Oltre la Medicina</h2>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        La Metamedicina non è solo una tecnica, è un&apos;arte di guarigione che va oltre la semplice soppressione del sintomo. Significa &quot;andare oltre&quot; la medicina tradizionale per cercare la causa psicosomatica del malessere.
                    </p>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-text-primary/90">
                        Fondata da Claudia Rainville, ci insegna che ogni dolore o malattia è un segnale che il nostro corpo ci invia per parlarci di un conflitto interiore irrisolto.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Mente",
                            desc: "Identificare le credenze limitanti.",
                            svg: (
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4B5749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" aria-label="Simbolo Mente">
                                    <circle cx="12" cy="6.5" r="1.5" />
                                    <circle cx="13.5" cy="12.5" r="1.5" />
                                    <path d="M11.25 20.25H6.75a.75.75 0 0 1-.75-.75v-4.07l-2.4-1.18a.75.75 0 0 1-.35-.97L5.25 9.75a7.5 7.5 0 1 1 12 6l.75 6" />
                                    <line x1="12" y1="5" x2="12" y2="2.3" />
                                    <polyline points="20.1 8.25 17.25 8.25 14.46 11.6" />
                                </svg>
                            ),
                        },
                        {
                            title: "Corpo",
                            desc: "Ascoltare i sintomi come alleati.",
                            svg: (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4B5749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" aria-label="Simbolo Corpo">
                                    <path d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75" />
                                    <path d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18" />
                                    <path d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261" />
                                    <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" />
                                </svg>
                            ),
                        },
                        {
                            title: "Emozione",
                            desc: "Liberare il dolore del passato.",
                            svg: (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4B5749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20" aria-label="Simbolo Emozione">
                                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                                    <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                                </svg>
                            ),
                        },
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-5 flex flex-col items-center">
                            <div className="w-20 h-20 mx-auto flex items-center justify-center cursor-default">
                                {item.svg}
                            </div>
                            <h4 className="font-serif text-xl text-text-primary">{item.title}</h4>
                            <p className="font-serif text-sm text-text-primary/70 max-w-[200px]">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="p-12 border border-accent-metamedicina/30 bg-accent-metamedicina/5 backdrop-blur-sm rounded-sm text-center space-y-6 pb-24">
                    <h3 className="font-serif text-2xl md:text-4xl text-accent-metamedicina">Consulenze Individuali</h3>
                    <p className="font-serif text-lg max-w-2xl mx-auto">
                        Attraverso il dialogo e l&apos;ascolto empatico, ti accompagno nel decifrare i messaggi del tuo corpo per ritrovare l&apos;equilibrio e la serenità.
                    </p>
                    <div className="pt-8">
                        <p className="font-serif italic text-sm opacity-70">Per prenotare una consulenza:</p>
                        <p className="font-serif text-xl mt-2">Visita la sezione <a href="/contatti" className="underline hover:text-accent-metamedicina transition-colors">Contatti</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}