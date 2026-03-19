import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-primary-dark/30 border-t border-text-primary/10 mt-32 py-16 px-8 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Brand / Logo */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <Link href="/" className="inline-block group">
                        <span className="font-display text-3xl tracking-wider block">Maria Gabriella Ansaldi</span>
                        <span className="font-serif text-[10px] uppercase tracking-[0.2em] opacity-60">Metodo • Cuore • Anima</span>
                    </Link>
                    <p className="font-serif text-sm opacity-80 max-w-xs pt-4">
                        Un viaggio di trasformazione attraverso l'ascolto profondo e il movimento vitale.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-serif font-bold uppercase tracking-widest text-sm mb-6">Esplora</h4>
                    <nav className="flex flex-col space-y-3">
                        <Link href="/biografia" className="font-serif text-sm opacity-80 hover:opacity-100 transition-opacity">Biografia</Link>
                        <Link href="/percorsi" className="font-serif text-sm opacity-80 hover:opacity-100 transition-opacity">Percorsi</Link>
                        <Link href="/pubblicazioni" className="font-serif text-sm opacity-80 hover:opacity-100 transition-opacity">Pubblicazioni</Link>
                    </nav>
                </div>

                {/* Direct Contact */}
                <div className="space-y-4">
                    <h4 className="font-serif font-bold uppercase tracking-widest text-sm mb-6">Contatti</h4>
                    <div className="font-serif space-y-2 opacity-80 text-sm">
                        <p>Tel: <a href="tel:+393338003218" className="hover:underline">+39 333 800 3218</a></p>
                         <p>Email: <a href="mailto:info@mariagabriellaansaldi.it" className="hover:underline">info@mariagabriellaansaldi.it</a></p>
                    </div>
                    <div className="pt-6 flex justify-center md:justify-start space-x-4">
                        {/* Social Icons */}
                         <a href="https://www.facebook.com/m.gabry.ansaldi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all p-2.5 aria-label='Facebook'">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                         </a>
                         <a href="https://www.instagram.com/gabrybiodanza/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all p-2.5 aria-label='Instagram'">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                         </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-text-primary/10 flex flex-col md:flex-row justify-between items-center text-xs font-serif opacity-50">
                <p>&copy; {new Date().getFullYear()} Maria Gabriella Ansaldi. Tutti i diritti riservati.</p>
                <div className="space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                    <Link href="#" className="hover:underline">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
