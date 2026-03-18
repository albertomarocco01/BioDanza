# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Progetto: Sito Web "Maria Gabriella Ansaldi"
## Lingua target: Esclusivamente Italiano

### 1. OVERVIEW & OBIETTIVI
Il sito web rappresenta la presenza digitale di Maria Gabriella Ansaldi, professionista specializzata nella **Relazione d'Aiuto**. Il portale si rivolge a un **target trasversale** (uomini e donne di ogni età) che vive una situazione di disagio o sofferenza fisica/emotiva. 

L'obiettivo primario del sito è accogliere l'utente in uno "spazio protetto" digitale, offrendo ascolto empatico e sensibile. Il percorso narrativo deve illustrare il passaggio dal **sollievo immediato** alla **crescita personale**, fino al raggiungimento dell'**autonomia e indipendenza**, favorendo l'espressione dei propri talenti. 

Il lavoro si sviluppa attraverso l'interazione costante di tre livelli dell'Essere Umano: **Corpo, Mente ed Emozioni**, utilizzando due strumenti principali:
* **Lavoro di Gruppo:** Biodanza.
* **Lavoro Individuale:** Consulenze Individuali (Metamedicina).

L'infrastruttura manterrà un'esperienza utente (UX) fluida e contemporanea basata sullo scrollytelling per accompagnare l'utente nella sua "richiesta di aiuto".

### 2. DESIGN SYSTEM & UI/UX (Per Frontend Agent)
L'identità visiva è pulita, eterea e legata all'ascolto e all'introspezione. Tutti i colori devono essere configurati nel file `tailwind.config.js`. **Nota importante: È vietato l'uso di texture visive (es. carta, rumore) o sfondi generativi animati, al fine di mantenere un'estetica massimamente pulita e focalizzata sul contenuto.**

**Tipografia:**
* **Logo / Display:** "Centaur"
* **Frasi brevi / Citazioni / Slogan / Domande introspettive:** "Quintessential" *(particolarmente importante per le frasi di "richiesta d'aiuto" come "Forse questa volta da solo/sola non ce la faccio?")*
* **Body copy (descrizioni lunghe):** "Average"

**Palette Colori (HEX) e Mappatura Semantica:**
Il design utilizzerà un sistema di colori per identificare le diverse aree di lavoro:
* **Base UI & Struttura Globale (Lo "Spazio Protetto"):**
    * Sfondo Primario: `#FFF8E6` (Avorio/Crema) - Base luminosa e accogliente.
    * Sfondo Secondario: `#E9EFF4` (Azzurro/Grigio chiarissimo) - Per staccare alcune sezioni.
    * Testo Primario: `#4B5749` (Verde Bosco/Olivo) - Per titoli principali e logo.
    * Testo Secondario/Contrasti: `#5E2F00` (Marrone Terra).
* **Sezione BIODANZA (Lavoro di Gruppo / Corpo e Vitalità):**
    * Colore Accento: `#DE84A8` (Rosa Antico/Petalo).
* **Sezione METAMEDICINA E CONSULENZE (Lavoro Individuale / Mente, Emozioni e Psicosomatica):**
    * Colore Accento: `#502FC8` (Viola/Indaco).

**Stile Visivo e Componenti:**
* **Sfondi Puliti:** Le sezioni del sito avranno sfondi a tinta piatta o con gradienti statici molto leggeri basati sulla palette. L'obiettivo è creare uno spazio visivo calmo e senza distrazioni.
* **Scrollytelling Empatico:** Utilizzo di animazioni basate sullo scroll (es. fade-in dei testi, lievi spostamenti) per guidare l'utente tra i contenuti testuali.
* **Trattamento Immagini:** Filtro o effetto stile "Risograph" (tramite CSS `mix-blend-mode` o filtri SVG) sulle fotografie per un'estetica artistica e coerente.

### 3. ARCHITETTURA DELL'INFORMAZIONE & CONTENUTI (Per SEO e Supervisor Agent)
L'header di navigazione sarà minimalista e non conterrà la voce "Home". La sitemap è strutturata come segue:

* **HOME (Accessibile solo cliccando sul Logo):** Introduzione alla Relazione d'Aiuto. Scrollytelling incentrato sulle domande catalizzatrici (es. *"Forse questa volta ho bisogno di aiuto?"*).
* **BIOGRAFIA:** Presentazione di Maria Gabriella come professionista dell'ascolto attento ed empatico. Formazione, competenze e la filosofia dietro il suo approccio.
* **PERCORSI:** Pagina centrale divisa in due macro-aree:
    * *Lavoro di Gruppo (Biodanza):* Crescita collettiva e informazioni sui corsi.
    * *Lavoro Individuale (Consulenze / Metamedicina):* Crescita individuale e approccio psicosomatico.
* **PUBBLICAZIONI:** Sezione dedicata ai libri scritti dall'autrice. Pulsanti Call-to-Action in uscita per l'acquisto su piattaforme esterne.
* **CONTATTI:** Riferimenti diretti (Telefono, Email, link Social). Area chiara su come prenotare una prima consulenza.

### 4. REQUISITI TECNICI (Per Backend & Frontend Agent)
* **Stack:** Node.js, React, Tailwind CSS, librerie per animazioni (es. Framer Motion per le animazioni di scroll).
* **Header / Navigazione:** Nessuna label testuale "Home" nel menu. Link alla homepage associato esclusivamente al logo.
* **Gestione Dati (CMS):** Dati dinamici (Corsi, Eventi) gestiti tramite Sanity.
* **E-commerce & Booking:** ASSENTI. Usare link esterni per i libri e contatti testuali per le consulenze.