# TenantNotice.online - Strategic Implementation Plan

## Executive Summary
TenantNotice.online is an authoritative, unmetered, client-side legal document generation engine and statutory guidance portal. The platform provides complete jurisdictional segregation between the United States (US) and the United Kingdom (UK) legal regimes to ensure exact statutory compliance, eliminate legal cross-contamination, and maximize programmatic SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) authority.

## Active Skills & Technical Discovery
The project leverages the following core architectural capabilities:
- **Design System & Semantic UI**: High-fidelity Tailwind CSS utility architecture, Google Fonts (Inter, Plus Jakarta Sans, JetBrains Mono), responsive typography, and print-specialized styling.
- **Frontend State & Document Compiler Engine**: Pure zero-dependency client-side vanilla JavaScript reactive state engine. Form updates mutate the legal preview in real time with zero server roundtrips, ensuring privacy and speed.
- **Search Systems Strategy (SEO / GEO / AIO / AEO)**: Semantic heading hierarchies, 45-word direct answer capsules for AI ingestion (Google AI Overviews, Perplexity, GPT), valid JSON-LD schemas (FAQPage, WebApplication, BreadcrumbList, Organization, WebSite), and strict internal linking meshes.
- **Security & Crawl Infrastructure**: Cloudflare edge headers (`_headers`), robust `robots.txt` honoring modern AI bots, `sitemap.xml`, `llms.txt`, and `llms-full.txt`.

## Phased Implementation Roadmap

### Phase 0: Foundations & Memory Initialization
- Create structured tracking documents: `PLAN.md`, `ARCHITECTURE.md`, `TASK_QUEUE.md`.
- Establish Git baseline and push tracking records to `main` branch.

### Phase 1: Jurisdictional Isolation & Global Homepage
- Develop `/index.html` featuring:
  - Hero section with live client-side tool search and filter across jurisdictions and acts.
  - Gateway cards with custom SVG emblems for US and UK portals.
  - Cross-jurisdiction tenancy comparison matrix (notice periods, cure windows, judicial grounds).
  - 3-column featured legal guides grid.
  - Bi-directional hreflang tags (`en-US`, `en-GB`, `x-default`).

### Phase 2: United States Portal & Statutory Suite
- Deploy `/us/index.html` with state filtering buttons (California, Texas, Florida, New York, and multi-state).
- Build 4 comprehensive state-compliant document generators:
  1. `/us/30-day-notice-to-vacate.html` (Cal. Civ. Code § 1946.1, Tex. Prop. Code § 24.005, Fla. Stat. § 83.57, NY RPL § 226-c).
  2. `/us/3-day-pay-rent-or-quit.html` (Cal. CCP § 1161(2), Fla. Stat. § 83.56(3), Tex. Prop. Code § 24.005).
  3. `/us/security-deposit-demand.html` (Cal. Civ. Code § 1950.5, Tex. Prop. Code § 92.103, Fla. Stat. § 83.49).
  4. `/us/24-hour-notice-to-enter.html` (Cal. Civ. Code § 1954 and privacy covenants).

### Phase 3: United Kingdom Portal (2026 Reforms Compliant)
- Deploy `/uk/index.html` aligned with the modern Renters' Rights Act framework.
- Build 4 comprehensive UK tenancy tools:
  1. `/uk/section-8-notice-to-quit.html` (Housing Act 1988 reformed Schedule 2 possession grounds, Ground 8 and Ground 1A).
  2. `/uk/tenant-notice-to-quit.html` (Periodic tenancy termination, statutory two-month notice calculation).
  3. `/uk/tenancy-deposit-demand.html` (Housing Act 2004 Section 213 compliance, 1-3x penalty rules for unprotected deposits).
  4. `/uk/section-13-rent-challenge.html` (Section 13 Form 4 rent increase challenge to the First-tier Tribunal).

### Phase 4: Client-Side Document Compiler & Print Engine
- Split-screen interactive interface (input control fields on left, live letterhead preview on right).
- High-fidelity typography mimicking physical legal documents.
- Print CSS `@media print` styling configured for standard 1-inch margins on US Letter and A4 papers, eliminating web UI chrome.
- Instant copy-to-clipboard functionality with active toast feedback.

### Phase 5: Search & AI Authority Architecture
- Formulate 45-word direct answer capsules beneath single H1 tags for direct snippet and AI overview extraction.
- Compile 1,000 to 1,400 words of rich statutory guidance, delivery of process instructions, timeline matrices, and pitfalls on every tool page.
- Strict typography rules: no em-dashes and no formulaic AI tropes.
- Structured JSON-LD markup on every page: FAQPage, WebApplication, BreadcrumbList, Organization, and WebSite schemas.

### Phase 6: Pillar-Cluster Internal Linking Mesh
- Embedded 3-column related utilities component on all generator tools.
- Educational legal guides in `/guides/` with minimum 4 contextual internal links per article.
- HTML5 breadcrumb navigation paths on every page.
- Complete outbound link hygiene (zero third-party links except Web3Forms endpoint).

### Phase 7: Brand Assets, Security Hardening & Trust Infrastructure
- Custom `/favicon.svg` with dark navy (#0f172a) and emerald accent (#059669).
- Cloudflare security headers via `_headers`.
- Modern search crawl configuration: `robots.txt`, `llms.txt`, `llms-full.txt`, and `sitemap.xml`.
- Institutional compliance suite under `/legal/`: About Us, Contact Us, Privacy Policy, Terms of Service, Disclaimer.

### Phase 8: Deployment & Git Verification
- Verify all links, schemas, and responsive layouts.
- Commit and push complete production codebase to GitHub repository.
