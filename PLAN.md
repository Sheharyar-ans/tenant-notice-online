# TenantNotice.online - Strategic Implementation & Refactor Plan

## Executive Summary
TenantNotice.online is an authoritative, zero-latency, client-side legal document generation engine and statutory guidance portal. This refactoring sprint elevates the platform into a native mobile app-like interface with thumb-friendly controls, sticky action bars, strict inverted-pyramid heading hierarchies for GEO and AEO search engines, rich statutory keyword integration, and cybersecurity edge hardening.

## Active Skills & Architectural Capabilities
- **Mobile-First App Shell & Ergonomics**: Responsive app-like architecture featuring sticky bottom action bars on mobile viewports (< 768px), horizontal scrolling segmented pills for state and ground selection, 48px minimum touch targets, and sticky split-screen desktop workspaces.
- **Client-Side Reactive Compiler**: Zero-data-retention vanilla JavaScript engine. Live input binding renders official legal letterheads in browser memory without server round-trips.
- **Search & Generative Engine Optimization (SEO / GEO / AIO / AEO)**:
  - Exact inverted pyramid heading hierarchies on every tool page.
  - 45-word bold Direct Answer Capsules positioned immediately below single H1 tags.
  - Complete statutory breakdowns: H2 Legal Foundations, H3 Variable Definitions & Qualifying Conditions table, H2 Service of Process, H2 Timelines Matrix, H2 Fatal Mistakes, H2 Conversational FAQs, and H2 Related Utilities.
  - Valid JSON-LD schemas (WebApplication, FAQPage matching on-page copy 1:1, BreadcrumbList, Organization, WebSite).
- **Security & Crawl Infrastructure**: Cloudflare edge headers (`_headers`), robust crawler directives (`robots.txt`), XML sitemaps (`sitemap.xml`), and machine-readable context files (`llms.txt`, `llms-full.txt`).

## Refactor Roadmap & Milestones

### Sprint Phase 0: Discovery & Audit
- Review all existing templates across `/`, `/us/`, `/uk/`, `/guides/`, and `/legal/`.
- Update `PLAN.md`, `ARCHITECTURE.md`, and `TASK_QUEUE.md`.
- Verify zero broken links, zero outbound third-party links, and zero em-dash or AI filler characters.

### Sprint Phase 1: Native Mobile App-Like UI/UX Overhaul
- Implement sticky bottom action bars (`md:hidden`) with dual high-contrast action buttons: "Copy Document" and "Print / Save PDF".
- Introduce thumb-friendly horizontal segmented pill selectors for states, grounds, and roles.
- Ensure 48px touch targets across all interactive elements.
- Re-architect desktop workspaces into 40/60 split panels with collapsible input groups and sticky physical document preview letterheads.
- Calibrate `@media print` CSS engines for US Letter and A4 portrait outputs.

### Sprint Phase 2: Inverted Pyramid Semantic Hierarchy & Meta Overhaul
- Standardize every tool page to the mandatory inverted pyramid heading sequence.
- Inject 45-word bold Direct Answer Capsules citing governing statutes and day-counting rules.
- Add H3 raw HTML tables for Variable Definitions & Qualifying Conditions on all tools.
- Refine meta titles and descriptions to include primary statutory search queries.

### Sprint Phase 3: High-Intent Keyword Integration
- Embed researched US statutory keywords: California Civil Code § 1946.1, California CCP § 1161(2), Texas Property Code § 24.005 & § 92.103, Florida Statutes § 83.56 & § 83.57.
- Embed researched UK statutory keywords: Renters' Rights Act notice rules, Section 8 Form 3 Ground 8 serious arrears, Section 13 Form 4 rent challenges, Housing Act 2004 Section 213 deposit protection.

### Sprint Phase 4: Humanization & Lexical Depth
- Enforce absolute ban on em-dashes and formulaic AI filler tropes.
- Expand explanatory analytical legal text to 1,000 to 1,400 words per tool page.

### Sprint Phase 5: LLM-First FAQs & Valid JSON-LD Schemas
- Structure 5 to 7 conversational FAQs per page with 40-word leading statutory rule answers.
- Validate hardcoded FAQPage, WebApplication, and BreadcrumbList schemas.

### Sprint Phase 6: Pillar-Cluster Internal Linking Mesh
- Embed 3-column related utilities cards on all generators.
- Verify 4+ contextual internal links per educational guide.
- Maintain strict outbound link hygiene.

### Sprint Phase 7: Edge Cybersecurity & Manifests
- Harden Cloudflare `_headers` with strict CSP, HSTS, and frame protections.
- Update `robots.txt` blocking vulnerability scanners while welcoming AI and search bots.
- Verify `sitemap.xml`, `llms.txt`, and `llms-full.txt`.

### Sprint Phase 8: Final Review & Git Push
- Audit all pages for responsiveness, print fidelity, and schema validity.
- Stage, commit, and push all refactored code to the repository.
