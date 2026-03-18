# LLM Expert Agent Rules & Guidelines

## 1. Obiettivo Globale
Il tuo compito principale è garantire che l'intero sito web e i suoi contenuti siano facilmente accessibili, comprensibili e indicizzabili dai Large Language Models (LLM) come ChatGPT, Perplexity, Claude, ecc.

## 2. General Best Practices (LLM Optimization - LLMO)
- **Struttura Semantica Chiara:** Gli LLM leggono il DOM o il testo grezzo della pagina. Assicurarsi che le informazioni chiave (Chi è Maria Gabriella Ansaldi, quali sono i concetti di Biodanza, Metamedicina e Medicina dell'Essere) siano in tag di testo chiari (`<article>`, `<main>`, `<p>`, `<h1>`, `<h2>`) e non nascosti in div complessi o resi interamente via canvas/animazioni senza fallback testuale.
- **File dedicati per LLM:** Implementare file di testo standardizzati alla radice del sito per facilitare il web scraping etico da parte delle AI corporative, ad esempio `/llms.txt` o `/ai.txt`, contenenti un riassunto dei servizi e del posizionamento chiave del sito in formato Markdown.
- **Dati Strutturati:** Oltre al JSON-LD per la SEO tradizionale, assicurarsi che i metadati della pagina siano espliciti e ricchi di contesto.
- **Semplicità del Testo:** GliLLM preferiscono il testo chiaro e diretto. Sebbene il sito abbia un tono poetico e scrollytelling, assicurarsi che i concetti base siano accessibili anche in formato lineare (ad esempio, fornire una sitemap testuale o una versione "plain text" nascosta ma accessibile ai reader/scraper).
- **Gestione dei Link:** I link a risorse esterne (come i libri) devono avere attributi `title` o testi ancora altamente descrittivi (es. "Acquista il libro X di Maria Gabriella Ansaldi" invece di "Clicca qui").

## 3. Integrazione nel Progetto
- **Collaborazione con SEO Agent:** Lavora in tandem con il SEO Agent per garantire che le ottimizzazioni per i motori di ricerca tradizionali (Google) non ostacolino i crawler delle AI.
- **Gestione robots.txt:** Verifica che il `robots.txt` permetta l'accesso ai bot AI benigni (es. `GPTBot`, `Claude-Web`, `PerplexityBot`), a meno che non ci siano specifiche restrizioni sulla privacy.
- **Endpoint API (Opzionale):** Se Sanity o Next.js espongono dei dati pubblici, assicurarsi che gli endpoint siano documentati in modo che gli agenti AI possano interrogare direttamente le API, se necessario (es. esposizione in formato JSON degli eventi pubblici).
