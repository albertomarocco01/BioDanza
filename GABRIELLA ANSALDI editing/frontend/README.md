# Progetto Template

Questo è un progetto **template** pensato per Next.js con **App Router**, già organizzato per agevolare lo sviluppo e mantenere una struttura scalabile.  
Contiene già **React**, **Node** e una configurazione di base per lo sviluppo.

---

## ⚡ Caratteristiche principali
- Utilizzo di **App Router** (`src/app/`)
- Struttura **feature-first**, con cartelle per dominio
- Cartelle condivise per componenti, configurazioni e utilities
- Integrazione pronta per **Sanity** come CMS headless
- Configurazione iniziale per **testing**
- Validazione e gestione centralizzata delle **variabili d’ambiente**
- Supporto per **provider globali** (Theme, QueryClient, Auth, ecc.)

---

## 📂 Struttura delle cartelle

```txt
src/
├─ app/                 # App Router: definizione delle route
│  ├─ layout.tsx        # Root layout dell'applicazione
│  ├─ providers.tsx     # Provider globali (Theme, QueryClient, ecc.)
│  ├─ page.tsx          # Homepage
│  └─ *[dominio]/       # Cartella per ogni dominio, con il file page.tsx
│
├─ assets/              # Asset statici importabili nel bundle
│  ├─ images/           # Immagini
│  └─ fonts/            # Font
│
├─ components/          # Componenti globali e agnostici al dominio
│  ├─ layout/           # Header, Footer, Container, ecc.
│  ├─ media/            # SanityImage, VideoWithFallback, ecc.
│  └─ ui/               # UI primitives: Button, Input, Card, ecc.
│
├─ config/              # Configurazioni globali
│  ├─ constants/        # Costanti generali
│  └─ locales/          # File di localizzazione (i18n)
│
├─ features/            # Feature-based modules (per dominio)
│  └─ *[dominio]/       # Es: projects, events, manifesto
│     ├─ api/           # Query GROQ / API request per il dominio
│     ├─ components/    # Componenti specifici della feature
│     └─ types/         # Tipi TypeScript per il dominio
│
├─ hooks/               # Hook custom globali e agnostici
│
├─ lib/                 # Librerie riusabili e utilities generiche
│  └─ env.ts            # Validazione centralizzata delle variabili d’ambiente
│
├─ services/            # Integrazioni esterne
│  └─ sanity/           # Client Sanity, query helper, image builder
│
├─ stores/              # Stato globale (es. Zustand store)
│
├─ testing/             # Configurazione e utilities per i test
│
├─ types/               # Tipi globali condivisi
│
└─ utils/               # Utility functions agnostiche

