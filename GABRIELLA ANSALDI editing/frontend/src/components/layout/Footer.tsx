"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const handleBrandClick = (e: React.MouseEvent) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="w-screen bg-accent-biodanza/60 backdrop-blur-md border-t border-white/20 py-8 px-8 mt-auto left-[calc(-50vw+50%)] relative">
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-text-primary">

                {/* Quick Links (Moved to Left) */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <h4 className="font-serif font-bold uppercase tracking-widest text-xs mb-1">Esplora</h4>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/biografia" className="font-serif text-sm opacity-70 hover:opacity-100 transition-opacity">Biografia</Link>
                        <Link href="/percorsi" className="font-serif text-sm opacity-70 hover:opacity-100 transition-opacity">Percorsi</Link>
                        <Link href="/eventi" className="font-serif text-sm opacity-70 hover:opacity-100 transition-opacity">Eventi</Link>
                        <Link href="/pubblicazioni" className="font-serif text-sm opacity-70 hover:opacity-100 transition-opacity">Pubblicazioni</Link>
                    </nav>
                </div>

                {/* Brand (Moved to Center) */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <Link href="/" onClick={handleBrandClick} className="inline-block group">
                        <span className="font-display text-2xl tracking-wider block">Maria Gabriella Ansaldi</span>
                        <span className="font-serif text-[10px] uppercase tracking-[0.2em] opacity-60 mt-0.5 block">Metodo • Cuore • Anima</span>
                    </Link>
                    <p className="font-serif text-sm opacity-70 max-w-[220px] pt-1 leading-normal">
                        Un viaggio di trasformazione attraverso l&apos;ascolto profondo e il movimento vitale.
                    </p>
                    <div className="flex justify-center space-x-3 pt-1">
                        <a href="https://www.facebook.com/m.gabry.ansaldi" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                            className="w-8 h-8 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/gabrybiodanza/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="w-8 h-8 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                    </div>
                </div>

                {/* Contact (Right) */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <h4 className="font-serif font-bold uppercase tracking-widest text-xs mb-1">Contatti</h4>
                    <div className="font-serif space-y-2 opacity-70 text-sm">
                        <p><a href="tel:+393338003218" className="hover:opacity-100 transition-opacity">+39 333 800 3218</a></p>
                        <p><a href="mailto:info@mariagabriellaansaldi.it" className="hover:opacity-100 transition-opacity break-all">info@mariagabriellaansaldi.it</a></p>
                    </div>
                </div>

            </div>

            <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-text-primary/10 text-xs font-serif opacity-50 text-center">
                <p>&copy; {new Date().getFullYear()} Maria Gabriella Ansaldi. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}
