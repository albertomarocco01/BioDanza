"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Biografia", href: "/biografia" },
    { name: "Percorsi", href: "/percorsi" },
    { name: "Pubblicazioni", href: "/pubblicazioni" },
    { name: "Contatti", href: "/contatti" },
];

export default function Header() {
    const pathname = usePathname();

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

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-serif text-sm uppercase tracking-widest hover:text-text-secondary transition-colors ${pathname === item.href ? "text-text-secondary font-bold" : "text-text-primary"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu toggle placeholder */}
                <div className="md:hidden">
                    <button className="text-text-primary p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
