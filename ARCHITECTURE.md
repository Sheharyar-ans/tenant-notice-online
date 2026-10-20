# TenantNotice.online - Technical Architecture Documentation

## Architectural Overview
TenantNotice.online is built as a zero-latency, client-side static web application with complete jurisdictional separation between the United States (`/us/`) and the United Kingdom (`/uk/`). The platform does not store user data, transmit form inputs, or require account creation. All document compilation occurs locally inside the browser DOM.

```
tenantnotice.online/
├── index.html                 # Global jurisdiction gateway and cross-border matrix
├── favicon.svg                # Navy and emerald SVG icon
├── _headers                   # Cloudflare edge security headers
├── robots.txt                 # Search and AI crawler directives
├── sitemap.xml                # Canonical XML sitemap covering all 20+ URLs
├── llms.txt                   # LLM context route summary
├── llms-full.txt              # Detailed LLM contextual statutory knowledge
├── PLAN.md                    # Strategic implementation roadmap
├── ARCHITECTURE.md            # Technical specifications and design system
├── TASK_QUEUE.md              # Granular development backlog
├── us/                        # United States Jurisdiction Subdirectory
│   ├── index.html             # US state index and interactive filter portal
│   ├── 30-day-notice-to-vacate.html
│   ├── 3-day-pay-rent-or-quit.html
│   ├── security-deposit-demand.html
│   └── 24-hour-notice-to-enter.html
├── uk/                        # United Kingdom Jurisdiction Subdirectory
│   ├── index.html             # UK statutory index and Renters' Rights portal
│   ├── section-8-notice-to-quit.html
│   ├── tenant-notice-to-quit.html
│   ├── tenancy-deposit-demand.html
│   └── section-13-rent-challenge.html
├── guides/                    # Authoritative Pillar Legal Guides
│   ├── us-eviction-process-guide.html
│   ├── uk-renters-rights-act-guide.html
│   └── security-deposit-return-rights.html
└── legal/                     # Trust and Institutional Compliance Suite
    ├── about-us.html
    ├── contact-us.html
    ├── privacy-policy.html
    ├── terms-of-service.html
    └── disclaimer.html
```

## Client-Side Document Compiler Engine
Each legal generator employs an isolated, high-performance vanilla JavaScript compiler module.
- **State Capture**: Input event listeners capture field values on `input` and `change` events.
- **Statutory Computation**:
  - Automatically calculates cure deadlines and notice periods based on user-selected state statutes or UK ground categories.
  - Formats monetary figures in USD ($) or GBP (£) with commas and decimals.
  - Dynamically updates legal citations and formal warning notices in real time.
- **DOM Hydration**: Interpolates sanitized user values into designated `data-bind` target elements inside the preview container.

## Dedicated Print CSS Engine (@media print)
When the user triggers document generation via the "Print / Save as PDF" button (`window.print()`), the print engine applies strict rules:
- **Element Culling**: Strips navigation header, footer, interactive form controls, FAQs, legal explanatory guides, and breadcrumbs (`display: none !important`).
- **Page Dimensions**: Enforces standard dimensions (`@page { size: letter portrait; margin: 1in; }` for US, `@page { size: A4 portrait; margin: 25mm; }` for UK).
- **Monochrome Typography**: Sets high-contrast black text on pure white paper (`#000000` text, `#ffffff` background).
- **Orphan / Widow Control**: Employs `page-break-inside: avoid` on formal signature blocks and critical declaration clauses.

## Search and AI Optimization (SEO / GEO / AIO / AEO)
- **Direct Answer Capsule**: Placed immediately below each page's single `h1` element, formatted as a 45-word bold block for direct extraction by AI search engines.
- **Structured Data Schemas**:
  - `WebApplication`: Identifies the tool name, browser requirements, free pricing tier, and operating system compatibility.
  - `FAQPage`: Exact 1:1 match between on-page FAQ items and JSON-LD schema questions/answers.
  - `BreadcrumbList`: Structured hierarchical navigation path.
  - `Organization` & `WebSite`: Publisher identity, logos, and search capabilities.
- **Hreflang Tags**: Strict regional targeting (`en-US` for `/us/`, `en-GB` for `/uk/`, `x-default` for `/`).

## Content Integrity & Style Directives
- **Punctuation Standard**: Em-dashes are strictly prohibited across all documents and UI copy. Standard commas, parentheses, or periods are used exclusively.
- **Voice and Tone**: Objective, authoritative, statutory legal language without buzzwords or repetitive AI padding.
- **Outbound Link Hygiene**: Zero third-party hyperlinks across the entire domain. Statutory citations remain plain text. The only external API communication is the Web3Forms submission on `/legal/contact-us.html`.
