"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Biografia", href: "/biografia" },
    { name: "Percorsi", href: "/percorsi", hasDropdown: true },
    { name: "Pubblicazioni", href: "/pubblicazioni" },
    { name: "Contatti", href: "/contatti" },
];

const percorsiDropdown = [
    { name: "Biodanza", href: "/biodanza" },
    { name: "Consulenze Individuali", href: "/metamedicina" },
];

export default function Header() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Desktop: Hover logic with 300ms delay to prevent flickering
    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    // Mobile: Toggle on click
    const toggleDropdown = (e: React.MouseEvent) => {
        // Only toggle on mobile (for simplicity, we track state and the click will toggle)
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-primary/60 backdrop-blur-md border-b border-text-primary/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* LOGO Placeholder */}
                <Link href="/" className="flex items-center group">
                    <div className="w-12 h-12 border-2 border-text-primary flex items-center justify-center rounded-sm group-hover:bg-text-primary group-hover:text-primary transition-all duration-300">
                        <span className="font-display text-sm font-bold">LOGO</span>
                    </div>
                    <div className="ml-4 flex flex-col">
                        <span className="font-display text-xl leading-none tracking-wider">Maria Gabriella Ansaldi</span>
                        <span className="font-serif text-[10px] uppercase tracking-[0.2em] opacity-80 mt-1 pl-1">Metodo • Cuore • Anima</span>
                    </div>
                </Link>

                {/* Navigation and Socials */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.href}
                                className="relative"
                                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                            >
                                {item.hasDropdown ? (
                                    <div className="flex items-center group/btn">
                                        <Link
                                            href={item.href}
                                            className={`font-serif text-sm uppercase tracking-widest hover:text-text-secondary transition-colors ${pathname === item.href || pathname.startsWith(item.href) ? "text-text-secondary font-bold" : "text-text-primary"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                        <button 
                                            onClick={toggleDropdown}
                                            className="ml-1 p-1 text-text-primary/50 group-hover/btn:text-text-secondary transition-colors"
                                            aria-label="Apri menu Percorsi"
                                        >
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="12" height="12" 
                                                viewBox="0 0 24 24" 
                                                fill="none" stroke="currentColor" strokeWidth="3" 
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                                            >
                                                <path d="M6 9l6 6 6-6"/>
                                            </svg>
                                        </button>

                                        {/* Dropdown Menu (Desktop) */}
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-primary/95 backdrop-blur-xl border border-text-primary/10 shadow-2xl py-2 z-[110]"
                                                >
                                                    {percorsiDropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-6 py-3 font-serif text-[11px] uppercase tracking-[0.2em] text-text-primary hover:bg-text-primary/5 hover:text-text-secondary transition-all"
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`font-serif text-sm uppercase tracking-widest hover:text-text-secondary transition-colors ${pathname === item.href ? "text-text-secondary font-bold" : "text-text-primary"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4 border-l border-text-primary/20 pl-8">
                        <a href="https://www.facebook.com/m.gabry.ansaldi" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary transition-colors" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/gabrybiodanza/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary transition-colors" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                </div>

                {/* Mobile menu toggle placeholder */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Simplified mobile dropdown trigger for "Percorsi" */}
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`text-[10px] uppercase tracking-widest px-3 py-1 border border-text-primary/20 rounded-full transition-all ${isDropdownOpen ? "bg-text-primary text-primary" : "text-text-primary"}`}
                    >
                        Percorsi {isDropdownOpen ? "−" : "+"}
                    </button>
                    
                    <button className="text-text-primary p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu (Overlay) */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-primary/95 backdrop-blur-lg border-b border-text-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col py-4 px-6 space-y-4">
                            {percorsiDropdown.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="font-serif text-sm uppercase tracking-widest text-text-primary hover:text-text-secondary transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
