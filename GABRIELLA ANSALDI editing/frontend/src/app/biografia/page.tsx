"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChiSonoPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6 uppercase tracking-widest">Biografia</h1>
                <p className="font-cursive text-xl md:text-2xl text-text-secondary italic">Professionista dell'ascolto attento ed empatico</p>
            </motion.div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

                {/* Photo — ASSET INJECTED: gabriella.png */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-[3/4] w-full border border-text-primary/10 bg-white/50 p-2 shadow-sm rotate-[-2deg]"
                >
                    <Image
                        src="/gabriella.png"
                        alt="Maria Gabriella Ansaldi — Ritratto"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </motion.div>

                {/* Biography Text */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8 font-serif text-lg leading-relaxed opacity-90"
                >
                    <p>
                        Il mio incontro con i percorsi di trasformazione non è nato da una teoria, ma da un'esigenza profonda dell'anima. Un richiamo a comprendere i meccanismi sottili che legano il corpo, le emozioni e lo spirito in un'unica meravigliosa sinfonia.
                    </p>
                    <p>
                        Ho dedicato gran parte della mia vita allo studio e alla sperimentazione di discipline che permettessero di risvegliare il potenziale umano. La <strong>Biodanza</strong> mi ha insegnato il linguaggio del corpo in movimento, la potenza dell'incontro con "l'altro" in un contesto di sacralità e gioia.
                    </p>
                    <p>
                        Parallelamente, la <strong>Metamedicina</strong> mi ha fornito le chiavi per decodificare il linguaggio invisibile dei sintomi, permettendomi di comprendere come ogni dolore o malessere sia, in realtà, un messaggio d'amore del nostro essere interiore che chiede attenzione e cura.
                    </p>
                    <div className="pl-6 border-l-2 border-accent-biodanza/30 italic my-12 text-xl text-text-secondary">
                        "Accompagno le persone a riscoprire la propria luce autentica, oltre le difese e le corazze, in uno spazio di profonda accettazione."
                    </div>
                    <p>
                        Oggi metto la mia esperienza al servizio di chi desidera intraprendere un cammino di consapevolezza. Che sia attraverso le classi settimanali di Biodanza, o attraverso consulenze individuali di Metamedicina, il mio intento è sempre e solo uno: creare lo spazio affinché la tua essenza possa fiorire.
                    </p>
                </motion.div>
            </div>

            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Gallery Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-white/40 border border-text-primary/10 flex items-center justify-center">
                        <span className="font-serif text-[10px] uppercase">Photo {i}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
