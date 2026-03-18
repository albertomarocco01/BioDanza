import type { Metadata, Viewport } from "next";
import { Average, Quintessential, Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configurazione Fonts
const averageFont = Average({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-average",
  display: "swap",
});

const quintessentialFont = Quintessential({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-quintessential",
  display: "swap",
});

// Fallback for Centaur (che non è su Google Fonts tipicamente)
const centaurFallback = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-centaur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Gabriella Ansaldi",
  description: "Relazione d'Aiuto — Biodanza e Consulenze Individuali",
  icons: {
    icon: "/favicon.png",
  },
};

// 🔥 AGGIUNGI QUESTO BLOCCO
export const viewport: Viewport = {
  themeColor: 'white',
  colorScheme: 'light', // Forza iOS e Android a considerare il sito 'light'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${averageFont.variable} ${quintessentialFont.variable} ${centaurFallback.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-primary text-text-primary selection:bg-accent-biodanza/20 relative min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}