"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";

const liquidVariant: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const SECTION_H = "h-[100dvh] min-h-[100dvh]";

export default function BiodanzaPage() {
    return (
        <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#FFF8E6] text-[#4B5749] overflow-x-hidden">

            {/* ══════════════════════════════════════════
                SEZIONE 1 — HERO
                ══════════════════════════════════════════ */}
            <section className={`${SECTION_H} w-full flex flex-col items-center justify-center snap-start p-8 text-center relative z-10 overflow-hidden flex-shrink-0 pt-20`}>
                {/* 🌿 SFONDO IN SOTTOIMPRESSIONE — filigrana Biodanza */}
                <img
                    src="/BiodanzaSfondo.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ opacity: 0.60, mixBlendMode: "luminosity", zIndex: 0, objectPosition: "110% center" }}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif text-5xl md:text-8xl text-[#5B8BD0] mb-6 uppercase tracking-widest relative z-10"
                >
                    Biodanza
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-cursive text-2xl md:text-4xl text-text-secondary italic relative z-10"
                >
                    Lavoro di Gruppo — La Danza della Vita
                </motion.p>
            </section>

            {/* ══════════════════════════════════════════
                SEZIONE 2 — COS'È LA BIODANZA
                ══════════════════════════════════════════ */}
            <section className={`${SECTION_H} w-full flex flex-col items-center justify-start snap-start px-6 md:px-12 relative flex-shrink-0 pt-36`}>
                <motion.div
                    variants={liquidVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-col items-center gap-8 text-center max-w-3xl"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-[#5B8BD0]">
                        Cos&apos;è la Biodanza?
                    </h2>
                    <div className="w-16 h-[1px] bg-[#4B5749]/20" />
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-[#4B5749]/90">
                        La Biodanza è un sistema di accelerazione dei processi integrativi a livello cellulare, metabolico, neuroendocrino, immunologico ed esistenziale, mediante <em>vivencias</em> indotte dalla musica, dal canto, dal movimento e da situazioni di incontro in gruppo.
                    </p>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-[#4B5749]/90">
                        Fondata da Rolando Toro Araneda negli anni Sessanta, nasce dall&apos;osservazione che certi tipi di musica, abbinati a specifici movimenti e al calore del contatto umano, producono stati di profondo benessere e riattivano la forza vitale sopita. Non è danza come spettacolo né come tecnica: è un&apos;esperienza vissuta nel presente, dove il corpo diventa la porta d&apos;ingresso verso la propria autenticità.
                    </p>
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-[#4B5749]/90">
                        Ogni sessione è un rito collettivo in cui si coltivano cinque linee di vivencia — vitalità, sessualità, creatività, affettività e trascendenza — sciogliendo le tensioni accumulate e restituendo fluidità, presenza e gioia di vivere.
                    </p>
                </motion.div>
            </section>

            {/* ══════════════════════════════════════════
                SEZIONE 3 — IL VIAGGIO INTERIORE
                ══════════════════════════════════════════ */}
            <section className={`min-h-[80dvh] w-full flex flex-col items-center justify-start snap-start px-6 md:px-12 relative flex-shrink-0 pt-36 pb-24`}>
                <motion.div
                    variants={liquidVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-col items-center gap-8 text-center max-w-3xl"
                >
                    <p className="font-cursive text-4xl md:text-6xl italic text-[#5E2F00] leading-relaxed">
                        &quot;Il corpo non mente. <span className="text-[#5B8BD0] font-bold">Sa sempre</span> la via verso casa.&quot;
                    </p>
                    <div className="w-16 h-[1px] bg-[#4B5749]/20" />
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-[#4B5749]/90">
                        Ho accompagnato centinaia di persone in questo viaggio. Ne ho raccolto l&apos;essenza — i meccanismi, le emozioni, le trasformazioni — in un libro pensato per chi vuole portare la Biodanza dentro di sé anche al di là delle sessioni.
                    </p>
                    <a
                        href="https://www.amazon.it/Meccanismi-azione-della-biodanza-illustrata/dp/8899065071/ref=sr_1_1?crid=1LMWVY0IYGZEH&dib=eyJ2IjoiMSJ9.oa6ejN7ZK--Q9MS-AOF4nA.E75eb4CPqbW_TOByVLvR09mOm0lNJxGAIq5rF0UMlfM&dib_tag=se&keywords=meccanismi+di+biodanza&qid=1773916742&sprefix=meccanismi+di+biodanza%2Caps%2C301&sr=8-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 border border-[#4B5749]/30 font-serif uppercase tracking-[0.2em] text-sm text-[#4B5749] hover:bg-[#4B5749] hover:text-[#FFF8E6] transition-all duration-300 rounded-full"
                    >
                        Scopri il libro
                    </a>
                    <a
                        href="/contatti"
                        className="font-serif text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                    >
                        Vuoi partecipare a un incontro? Scrivimi →
                    </a>
                </motion.div>
            </section>

            {/* ══════════════════════════════════════════
                FOOTER — snap-end, scorre naturalmente
                ══════════════════════════════════════════ */}
            <section className="h-auto snap-end relative z-10 flex-shrink-0">
                <Footer />
            </section>

        </div>
    );
}
