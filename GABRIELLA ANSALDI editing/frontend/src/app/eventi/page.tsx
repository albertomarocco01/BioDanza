"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";

const events = [
  {
    title: "Ritiro di BioDanza e Natura",
    date: "15 - 17 Maggio 2026",
    location: "Casentino, Toscana",
    description: "Un'immersione totale nel movimento e nella natura per ritrovare l'armonia interiore attraverso il sistema BioDanza.",
    image: "/images/eventi/retreat.png",
  },
  {
    title: "Workshop: Il Risveglio dell'Anima",
    date: "22 Giugno 2026",
    location: "Torino (Centro Olistico)",
    description: "Una giornata dedicata all'esplorazione dei propri talenti e della propria luce interiore attraverso esercizi di gruppo e meditazione.",
    image: "/images/eventi/workshop.png",
  },
  {
    title: "Incontro di Meditazione e Silenzio",
    date: "10 Luglio 2026",
    location: "Online (Zoom)",
    description: "Uno spazio di quiete per ascoltare il battito del proprio cuore e ritrovare la pace nel caos quotidiano.",
    image: "/images/eventi/meditation.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function EventiPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E6] text-[#4B5749] font-serif">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-xs opacity-60 mb-4 block"
        >
          Calendario Incontri
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-7xl font-cursive italic mb-8"
        >
          Eventi e Workshop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Spazi di condivisione, crescita e ascolto profondo. Unisciti a noi in questo cammino di trasformazione.
        </motion.p>
      </section>

      {/* Events Grid */}
      <section className="px-6 md:px-12 pt-6 pb-20 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-[#4B5749]/10">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest opacity-60 font-bold">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="text-2xl font-display group-hover:italic transition-all duration-300">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70 line-clamp-3">
                  {event.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                  <span className="w-8 h-[1px] bg-[#4B5749]/30" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scopri di più</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f2ead3] py-24 px-6 md:px-12 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-cursive italic">
            Desideri partecipare a un evento?
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            I posti sono limitati per garantire un'esperienza profonda e intima. Se senti che è il momento giusto per te, contattami per prenotare il tuo posto o richiedere maggiori informazioni.
          </p>
          <Link
            href="/contatti"
            className="inline-block px-12 py-5 bg-[#4B5749] text-[#FFF8E6] rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#5E2F00] transition-colors duration-300 shadow-xl"
          >
            Contattami e Prenota
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
