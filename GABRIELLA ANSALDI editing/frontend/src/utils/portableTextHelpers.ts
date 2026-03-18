// Esempio: src/utils/portableTextHelpers.ts

import { PortableTextBlock, PortableTextList } from '@/types/sanity/SanityTypes'; // Assumendo che tu abbia salvato i tipi in questo percorso

/**
 * Estrae il testo semplice da un array di Sanity Portable Text (PortableTextList)
 * ed esclude qualsiasi formattazione o elemento non testuale.
 * @param blocks Array di blocchi di Sanity Portable Text.
 * @returns Una stringa di testo semplice.
 */
export function portableTextToPlainText(blocks: PortableTextList): string {
  if (!blocks || blocks.length === 0) return '';
  
  return blocks
    // Filtra solo i blocchi di tipo 'block' che contengono testo
    .filter((block): block is PortableTextBlock => 
      block?._type === 'block' && 
      Array.isArray(block.children)
    )
    // Mappa per estrarre il testo dai 'span' (i nodi figlio di testo)
    .map(block => block.children
      .map(span => span.text)
      .join('')
    )
    // Unisci i blocchi (paragrafi) con un punto e uno spazio.
    .join('. '); 
}