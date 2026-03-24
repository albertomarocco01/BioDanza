"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
    {
        year: "2006",
        title: "Diploma in Biodanza",
        subtitle: "Sistema Rolando Toro Araneda",
        body: "Formazione quadriennale presso la Scuola Italiana di Biodanza. Abilitazione all'insegnamento dei cicli settimanali e alla conduzione di seminari intensivi.",
        accent: "accent-biodanza",
    },
    {
        year: "2011",
        title: "Practitioner in Metamedicina",
        subtitle: "Metodo Claudia Rainville",
        body: "Percorso certificato di tre anni nell'approccio psicosomatico della Metamedicina: decodifica del linguaggio del corpo, dell'emozione e della memoria cellulare.",
        accent: "accent-metamedicina",
    },
    {
        year: "2015",
        title: "Counseling Umanistico & Transpersonale",
        subtitle: "Scuola di Psicosomatica Integrata — Milano",
        body: "Specializzazione biennale nell'ascolto empatico e nell'accompagnamento individuale, con approccio centrato sulla persona e sul potenziale di trasformazione.",
        accent: "accent-biodanza",
    },
    {
        year: "2019",
        title: "Facilitatrice di Costellazioni Familiari",
        subtitle: "Metodo Bert Hellinger — Livello Avanzato",
        body: "Formazione intensiva nel lavoro sistemico e nelle costellazioni familiari, integrato con la lettura psicosomatica del campo relazionale e dei legami transgenerazionali.",
        accent: "accent-metamedicina",
    },
    {
        year: "2022",
        title: "Mindful Movement & Somatic Therapy",
        subtitle: "European Institute of Body-Mind Practices — Barcellona",
        body: "Approfondimento internazionale sull'integrazione soma-mente: pratiche di presenza corporea, regolazione del sistema nervoso e terapia somatica basata sull'evidenza.",
        accent: "accent-biodanza",
    },
    {
        year: "2024",
        title: "Autrice — Meccanismi di azione della Biodanza",
        subtitle: "Pubblicazione scientifica illustrata",
        body: "Redazione e pubblicazione del volume che raccoglie anni di ricerca e pratica sul campo. Il libro è disponibile su Amazon ed è adottato in alcune scuole di formazione Biodanza.",
        accent: "accent-metamedicina",
    },
];

export default function ChiSonoPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 pt-32 pb-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6 uppercase tracking-widest">Biografia</h1>
                <p className="font-cursive text-xl md:text-2xl text-text-secondary italic">Professionista dell'ascolto attento ed empatico</p>
            </motion.div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

                {/* Placeholder foto — donna bionda di spalle */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-[3/4] w-full border border-text-primary/10 bg-white/50 p-2 shadow-sm rotate-[-2deg] overflow-hidden"
                >
                    <svg
                        viewBox="0 0 300 400"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        aria-label="Placeholder ritratto"
                    >
                        {/* sfondo morbido */}
                        <defs>
                            <radialGradient id="bg" cx="50%" cy="60%" r="70%">
                                <stop offset="0%" stopColor="#f7ede2" />
                                <stop offset="100%" stopColor="#e8d5c0" />
                            </radialGradient>
                            <radialGradient id="skin" cx="50%" cy="40%" r="60%">
                                <stop offset="0%" stopColor="#f5cba7" />
                                <stop offset="100%" stopColor="#e8a87c" />
                            </radialGradient>
                            <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f0d090" />
                                <stop offset="50%" stopColor="#d4a840" />
                                <stop offset="100%" stopColor="#b8860b" />
                            </linearGradient>
                            <linearGradient id="dress" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#c8b4d4" />
                                <stop offset="100%" stopColor="#9b7aaf" />
                            </linearGradient>
                        </defs>
                        {/* sfondo */}
                        <rect width="300" height="400" fill="url(#bg)" />
                        {/* spalle / corpo */}
                        <ellipse cx="150" cy="380" rx="120" ry="80" fill="url(#dress)" />
                        <path d="M60 320 Q90 280 150 270 Q210 280 240 320 L240 400 L60 400 Z" fill="url(#dress)" />
                        {/* collo */}
                        <rect x="132" y="210" width="36" height="60" rx="12" fill="url(#skin)" />
                        {/* testa di spalle */}
                        <ellipse cx="150" cy="195" rx="55" ry="60" fill="url(#skin)" />
                        {/* capelli biondi — volumosi, di spalle */}
                        <ellipse cx="150" cy="175" rx="62" ry="68" fill="url(#hair)" />
                        <path d="M88 185 Q70 230 75 290 Q100 310 130 315 Q110 270 105 230 Q100 210 88 185 Z" fill="url(#hair)" />
                        <path d="M212 185 Q230 230 225 290 Q200 310 170 315 Q190 270 195 230 Q200 210 212 185 Z" fill="url(#hair)" />
                        {/* luccichio capelli */}
                        <ellipse cx="130" cy="148" rx="18" ry="10" fill="#fff8dc" opacity="0.45" transform="rotate(-20 130 148)" />
                    </svg>
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

            {/* ─── CERTIFICAZIONI & PORTFOLIO ─── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-32"
            >
                <div className="text-center mb-16">
                    <span className="font-serif text-[10px] uppercase tracking-[0.3em] opacity-50">Formazione & Riconoscimenti</span>
                    <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-3 uppercase tracking-widest">Certificazioni</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-primary-dark/20 border border-text-primary/10 p-8 hover:border-text-primary/25 transition-all duration-500 flex flex-col gap-3"
                        >
                            <span className="font-serif text-[10px] uppercase tracking-[0.25em] opacity-40">{cert.year}</span>
                            <h3 className="font-display text-xl text-text-primary leading-snug">{cert.title}</h3>
                            <p className="font-cursive text-sm text-text-secondary italic opacity-80">{cert.subtitle}</p>
                            <p className="font-serif text-sm leading-relaxed opacity-70 mt-1">{cert.body}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
