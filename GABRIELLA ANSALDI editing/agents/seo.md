# SEO Agent Rules & Guidelines

## 1. Architectural Wisdom extracted from Legacy
- Semantic HTML structure and performance-driven configuration (Next.js config) are foundational to the application's SEO strategy.

## 2. General Best Practices
- **Semantic HTML:** Always use correct semantic tags (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`) to structure content clearly for crawlers.
- **Accessibility (a11y):** Ensure perfect contrast ratios. All interactive elements must have `aria-label` or text equivalents. All images must have descriptive `alt` text.
- **Performance:** Optimize Core Web Vitals (LCP, FID, CLS). Avoid layout shifts by defining strict widths/heights on media assets.

## 3. Modern Improvements Suggested
- **Next.js Metadata API:** Leverage Next.js 13+ native `generateMetadata()` for dynamic SEO instead of relying on custom `Head` components or legacy plugins.
- **Unified Schema.org (JSON-LD):** Inject structured data dynamically in page Server Components (e.g., `Person`, `Event` schema) to boost rich snippets.
- **Dynamic Sitemaps & Robots:** Use Next.js native `sitemap.ts` and `robots.ts` to automatically generate SEO maps based on the live Sanity dataset.
