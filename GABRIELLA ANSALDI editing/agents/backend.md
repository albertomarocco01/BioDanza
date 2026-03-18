# Backend Agent Rules & Guidelines (Node.js & Sanity CMS)

## 1. Architectural Wisdom extracted from Legacy
- Data is managed headlessly via Sanity CMS.
- Schemas are separated logically (e.g., `artwork.ts`, `event.ts`, `home.ts`) into a `schemaTypes` directory and aggregated in `index.ts`.
- Configuration and CLI setup are handled via TypeScript (`sanity.config.ts`, `sanity.cli.ts`).

## 2. General Best Practices
- **Schema Design:** Ensure all Sanity schemas are highly modular. Reuse object types (like SEO blocks, custom image fields) across documents to prevent repetition.
- **Validation:** Enforce strict validation rules (required fields, regex patterns for URLs, character count limits for summaries) directly at the schema level to ensure data integrity.
- **Security & Access:** Expose only necessary endpoints. Keep drafts secure and use read-only tokens for production Next.js fetching.

## 3. Modern Improvements Suggested
- **Type-Safe Data:** Adopt `next-sanity` with `groq` and use code generation tools (like Sanity TypeGen) to enforce end-to-end TypeScript safety between the Sanity backend and the React frontend.
- **API Routes (Next.js):** Instead of legacy Express/Node.js custom backends, utilize Next.js Route Handlers (`app/api/...`) for any server-side logic (e.g., handling form submissions or webhooks) to maintain a unified repository.
- **Sanity V3 Standards:** Ensure the studio is fully migrated to Sanity V3 structure, utilizing standard plugins and removing any deprecated custom input components in favor of modern Sanity UI.
