/**
 * Spaziature & Design Tokens — Controllo centralizzato
 *
 * Modificare qui per propagare i cambiamenti su tutto il sito.
 * I valori sono classi Tailwind; cambiare un singolo token
 * aggiorna automaticamente ogni componente che lo usa.
 */

// ─────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────
export const layout = {
  /** Larghezza massima del contenuto principale */
  maxWidth: "max-w-7xl",
  /** Larghezza ridotta per testo lungo (articoli, bio) */
  maxWidthNarrow: "max-w-5xl",
  /** Larghezza contenuto medio (contatti, dettaglio) */
  maxWidthMedium: "max-w-4xl",
  /** Larghezza per paragrafi centrati */
  maxWidthProse: "max-w-2xl",
  /** Margine orizzontale automatico per centrare */
  centerX: "mx-auto",
} as const;

// ─────────────────────────────────────────────
// SPAZIATURE — Padding orizzontale
// ─────────────────────────────────────────────
export const paddingX = {
  /** Padding orizzontale standard per sezioni, footer, pagine */
  section: "px-8",
  /** Padding orizzontale compatto (header, nav) */
  header: "px-6",
  /** Padding orizzontale mobile-friendly per sezioni */
  sectionMd: "px-6 md:px-12",
} as const;

// ─────────────────────────────────────────────
// SPAZIATURE — Padding verticale pagine
//
//   L'header è fisso h-24 (96px).
//   pageTop = pt-32 (128px) → 32px di respiro visibile sotto l'header.
//   QUESTO È IL RIFERIMENTO: preso dalla pagina Contatti.
//   Cambiare pageTop qui aggiorna Biografia, Percorsi, Pubblicazioni, Contatti.
// ─────────────────────────────────────────────
export const paddingY = {
  /** ← MASTER: distanza dal top dell'header al contenuto della pagina */
  pageTop: "pt-32",
  /** Padding inferiore standard delle pagine */
  pageBottom: "pb-24",
  /** Shorthand verticale completo per pagine intere */
  page: "pt-32 pb-24",
  /** Padding verticale footer */
  footer: "py-8",
  /** Padding verticale sezione piccola */
  sectionSm: "py-6",
  /** Padding verticale sezione standard */
  sectionMd: "py-12",
  /** Padding verticale sezione grande */
  sectionLg: "py-24",
  /** Padding interno card/box */
  cardInner: "p-6",
  /** Padding interno card grande */
  cardInnerLg: "p-12 md:p-20",
  /** Padding bottone CTA */
  ctaButton: "px-10 py-4",
  /** Padding bottone CTA grande */
  ctaButtonLg: "px-12 py-5",
  /** Padding icone social piccole */
  socialIconSm: "p-2.5",
  /** Padding icone social grandi */
  socialIconLg: "p-4",
} as const;

// ─────────────────────────────────────────────
// SPAZIATURE — Gap e spacing tra elementi
// ─────────────────────────────────────────────
export const spacing = {
  /** Gap griglia footer a 3 colonne */
  footerGrid: "gap-8",
  /** Gap griglia standard */
  gridMd: "gap-12",
  /** Gap griglia ampio */
  gridLg: "gap-16",
  /** Gap standard tra elementi flex */
  flex: "gap-6",
  /** Spazio verticale compatto */
  stackSm: "space-y-2",
  /** Spazio verticale standard */
  stackMd: "space-y-4",
  /** Spazio verticale ampio */
  stackLg: "space-y-6",
  /** Spazio orizzontale compatto */
  inlineSm: "space-x-4",
  /** Spazio orizzontale ampio */
  inlineMd: "space-x-8",
  /** Margine + padding separatore inferiore (es. bottom bar footer) */
  dividerTop: "mt-8 pt-6",
} as const;

// ─────────────────────────────────────────────
// TIPOGRAFIA — Famiglie
// ─────────────────────────────────────────────
export const fontFamily = {
  /** Testo corpo, descrizioni, link nav (Average) */
  body: "font-serif",
  /** Logo, nome brand, titoli display (Centaur) */
  display: "font-display",
  /** Slogan, citazioni, testi evocativi (Quintessential) */
  cursive: "font-cursive",
} as const;

// ─────────────────────────────────────────────
// TIPOGRAFIA — Dimensioni
// ─────────────────────────────────────────────
export const fontSize = {
  /** Tagline sotto logo, micro-label */
  tagline: "text-[10px]",
  /** Copyright, note legali */
  legal: "text-xs",
  /** Nav link, descrizioni, label */
  body: "text-sm",
  /** Testo paragrafo standard */
  paragraph: "text-base",
  /** Sottotitoli, intro sezione */
  subtitle: "text-lg md:text-xl",
  /** Titoli sezione piccola */
  headingSm: "text-2xl",
  /** Titoli sezione media */
  headingMd: "text-3xl md:text-5xl",
  /** Titoli h1 pagina */
  pageTitle: "text-5xl md:text-7xl",
  /** Hero / display grande */
  display: "text-7xl md:text-8xl",
} as const;

// ─────────────────────────────────────────────
// TIPOGRAFIA — Stile
// ─────────────────────────────────────────────
export const textStyle = {
  /** Etichette, titoli sezione */
  label: "uppercase tracking-widest font-bold",
  /** Tagline brand */
  tagline: "uppercase tracking-[0.2em] opacity-60",
  /** Nome brand */
  brandName: "tracking-wider",
  /** Testo dimmed standard */
  muted80: "opacity-80",
  /** Testo secondario/legale */
  muted50: "opacity-50",
  /** Hover link con opacity */
  linkHover: "hover:opacity-100 transition-opacity",
} as const;

// ─────────────────────────────────────────────
// BORDI E DIVISORI
// ─────────────────────────────────────────────
export const borders = {
  dividerTop: "border-t border-text-primary/10",
  dividerBottom: "border-b border-text-primary/10",
  socialIcon: "border border-text-primary/20",
  card: "border border-text-primary/10",
} as const;

// ─────────────────────────────────────────────
// COMPOSIZIONI — Titolo di pagina
//   h1 standard con sottotitolo in corsivo
// ─────────────────────────────────────────────
export const pageHero = {
  /** Wrapper del blocco titolo */
  wrapper: "text-center mb-16",
  /** h1 della pagina */
  title: `${fontFamily.body} ${fontSize.pageTitle} text-text-primary mb-6 uppercase tracking-widest`,
  /** Sottotitolo in corsivo */
  subtitle: `${fontFamily.cursive} text-xl md:text-2xl text-text-secondary italic`,
} as const;

// ─────────────────────────────────────────────
// COMPOSIZIONI — Footer
// ─────────────────────────────────────────────
export const footerTokens = {
  wrapper: `w-full bg-primary-dark/30 ${borders.dividerTop} ${paddingY.footer} ${paddingX.section} mt-auto`,
  grid: `${layout.maxWidth} ${layout.centerX} grid grid-cols-1 md:grid-cols-3 ${spacing.footerGrid} text-text-primary`,
  sectionTitle: `${fontFamily.body} ${textStyle.label} ${fontSize.body} mb-6 text-center`,
  navLink: `${fontFamily.body} ${fontSize.body} ${textStyle.muted80} ${textStyle.linkHover}`,
  socialButton: `w-10 h-10 rounded-full ${borders.socialIcon} flex items-center justify-center hover:bg-text-primary hover:text-primary transition-all ${paddingY.socialIconSm}`,
  bottomBar: `${layout.maxWidth} ${layout.centerX} ${spacing.dividerTop} ${borders.dividerTop} ${textStyle.muted50} ${fontFamily.body} ${fontSize.legal} text-center`,
} as const;
