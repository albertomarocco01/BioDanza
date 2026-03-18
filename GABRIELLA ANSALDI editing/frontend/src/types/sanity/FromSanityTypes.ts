// types/sanity/FromSanity.ts
import type { PortableTextBlock } from "./SanityTypes";
import type { SanityImage } from "./SanityTypes";

// —————————————————————————————————————————————————————————
// 🏠 HOME
// —————————————————————————————————————————————————————————
export type HomeQueryResult = {
  heroDesktop: SanityImage;
  heroMobile: SanityImage;
};

// —————————————————————————————————————————————————————————
// ℹ️ ABOUT & CONTATTI
// —————————————————————————————————————————————————————————

// Sottotipi per gli array
export type SoloExhibition = {
  _key: string;
  title: string;
  location: string;
  period: string;
};

export type Award = {
  _key: string;
  awardName: string;
  contest: string;
  year: string;
};

// Tipo principale per la pagina
export type ContactPageData = {
  artistPhoto: SanityImage;
  bio: PortableTextBlock[];
  soloExhibitions: SoloExhibition[];
  awards: Award[];
  careerHighlights: PortableTextBlock[];
}
// —————————————————————————————————————————————————————————
// 🎨 OPERE (Artworks)
// —————————————————————————————————————————————————————————

export type ArtworkCategory = "Acqua" | "Figurativo" | "Paesaggi" | "Commissioni";

// 2. LA PREVIEW (Per la pagina "Tutte le opere")
// src/types/sanity/FromSanityTypes.ts
export type SanityImageWithMeta = {
  asset: {
    _ref?: string; // Manteniamo il ref per sicurezza
    url: string;
    metadata: {
      lqip?: string; // La stringa per il blur
      dimensions: {
        aspectRatio: number;
        width?: number;
        height?: number;
      };
    };
  };
};


// TIPO PER LA LISTA (Mosaico)
export type ArtworkPreview = {
  title: string;
  slug: string;
  category: ArtworkCategory;
  artworkType: 'single' | 'collection';
  year?: string;      
  technique?: string; 
  
  // Immagine principale con metadati
  mainImage?: SanityImageWithMeta;

  // Opere della collezione (solo anteprima)
  collectionWorks?: {
    mainImage: SanityImageWithMeta;
    // Aggiungi qui altri campi se servono nella preview della collezione
    slug: string; 
  }[];
};

// 4. LA PAGINA SINGOLA (Dettaglio)
export type ArtworkBySlug = {
  title: string;
  slug: string;
  category: ArtworkCategory;
  artworkType: 'single' | 'collection';
  description?: string;
  year?: string;
  technique?: string;
  dimensions?: string;
  
  // Immagine principale
  mainImage?: SanityImageWithMeta;

  // Galleria immagini
  gallery?: SanityImageWithMeta[];

  // Opere figlie (se è una collezione)
  collectionWorks?: {
    title: string;
    slug: string;
    category: string;
    year?: string;
    technique?: string;
    mainImage?: SanityImageWithMeta;
  }[];
};

// —————————————————————————————————————————————————————————
// 📅 EVENTI
// —————————————————————————————————————————————————————————

export type EventCategory = "Mostra" | "Evento" | "Recensione" | string;

export type EventPreview = {
  title: string;
  slug: { current: string }; // Sanity restituisce un oggetto per lo slug, non una stringa diretta
  subtitle?: string;         // <--- CAMPO AGGIUNTO (Opzionale)
  category: EventCategory;
  date: string;              // ISO String dal backend
  mainImage: SanityImage;
};

export type EventBySlug = {
  title: string;
  slug: string;
  date?: string;
  category?: string;
  
  // 🔥 CORREZIONE: Qui definiamo che è Rich Text, non stringa
  description?: PortableTextBlock[]; 
  
  mainImage?: SanityImageWithMeta;
  gallery?: SanityImageWithMeta[];
};