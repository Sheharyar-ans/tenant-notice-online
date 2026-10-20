# TenantNotice.online - Sprint Task Backlog: Mobile App UI/UX & AEO Refactor

## Phase 0: Skills Discovery, Repository Audit & Task Management
- [x] Enumerate active Antigravity skills and inspect existing HTML files
- [x] Update PLAN.md with mobile app UI and AEO inverted pyramid roadmap
- [x] Update ARCHITECTURE.md with mobile shell and 40/60 split specifications
- [x] Update TASK_QUEUE.md with granular sprint checklist
- [x] Verify zero broken links, zero em-dashes, and zero external links

## Phase 1: Native Mobile App-Like UI/UX Architecture
- [x] Add sticky bottom mobile action bar (Copy Document + Print / Save PDF) across all 8 tools
- [x] Implement thumb-friendly horizontal segmented pill selectors for states, grounds, and roles
- [x] Enforce 48px minimum touch targets and generous tap spacing across all inputs and triggers
- [x] Structure left panel into collapsible collapsible groups (Parties, Property, Dates, Terms)
- [x] Enforce desktop 40/60 split-panel workspace with sticky letterhead preview
- [x] Update `@media print` CSS hiding mobile action bars, nav, forms, accordions, and footers

## Phase 2: Inverted Pyramid Heading Hierarchy & Meta Specifications
- [x] Refactor `/us/30-day-notice-to-vacate.html` to exact inverted pyramid (H1 -> Capsule -> Workspace -> H2 Foundation -> H3 Definitions Table -> H2 Service -> H2 Timelines Table -> H2 Fatal Mistakes -> H2 FAQs -> H2 Related Utilities)
- [x] Refactor `/us/3-day-pay-rent-or-quit.html` to exact inverted pyramid
- [x] Refactor `/us/security-deposit-demand.html` to exact inverted pyramid
- [x] Refactor `/us/24-hour-notice-to-enter.html` to exact inverted pyramid
- [x] Refactor `/uk/section-8-notice-to-quit.html` to exact inverted pyramid
- [x] Refactor `/uk/tenant-notice-to-quit.html` to exact inverted pyramid
- [x] Refactor `/uk/tenancy-deposit-demand.html` to exact inverted pyramid
- [x] Refactor `/uk/section-13-rent-challenge.html` to exact inverted pyramid
- [x] Format meta titles (50-60 chars) and meta descriptions (140-155 chars)

## Phase 3: High-Intent Keyword Integration & Statutory Fidelity
- [x] Embed US keywords in headings, body, and schema ("california 30 day notice to vacate template free", "california civil code 1946.1 notice", "3 day notice to pay rent or quit florida statute 83.56", "texas property code 24.005 notice to vacate", "security deposit return demand letter california 21 days civil code 1950.5", "24 hour notice to enter premises california civil code 1954")
- [x] Embed UK keywords in headings, body, and schema ("section 8 notice form 3 ground 8 template free", "renters rights act notice rules", "tenant notice to quit periodic tenancy 2 months", "tenancy deposit scheme refund demand letter housing act 2004", "section 13 rent increase challenge form 4")

## Phase 4: Strict Humanization & Editorial Mass
- [x] Enforce 1,000 to 1,400 words of rich legal explanatory content per tool
- [x] Audit for absolute ban on em-dashes and AI clichés ("delve into", "tapestry", "in today's fast-paced world", "furthermore", "testament to", "it is important to remember", "a beacon of")

## Phase 5: Conversational LLM-First FAQs & Valid JSON-LD Schemas
- [x] Format 5 to 7 conversational FAQs per page with 40-word leading statutory rule answers
- [x] Verify 1:1 match between on-page HTML FAQs and JSON-LD `FAQPage` schema
- [x] Embed `WebApplication`, `BreadcrumbList`, `Organization`, and `WebSite` schemas

## Phase 6: Site-Wide Pillar-Cluster Internal Linking Mesh
- [x] Verify 3-column related utilities cards on all 8 generators
- [x] Audit educational guides for 4+ in-text contextual internal links
- [x] Verify zero outbound third-party hyperlinks (only Web3Forms permitted)

## Phase 7: Edge Cybersecurity & Manifests
- [x] Verify `_headers` with Cloudflare edge CSP, HSTS, frame-ancestors
- [x] Update `robots.txt` blocking aggressive vulnerability scanners while welcoming AI bots
- [x] Verify `sitemap.xml`, `llms.txt`, and `llms-full.txt`

## Phase 8: Commit & GitHub Push
- [x] Run full repository verification
- [x] Stage, commit, and push with commit message: `feat(core): implement mobile app UI layout, strict AEO heading hierarchy, statutory keyword mesh, and security hardening`
