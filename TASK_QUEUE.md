# TenantNotice.online - Sprint Task Backlog: Master Refactor & 10-Article Blog Hub

## Phase 0: Skills Discovery, Repository Audit & Task Management
- [x] Enumerate active Antigravity skills and inspect existing repository structure
- [x] Update PLAN.md, ARCHITECTURE.md, and TASK_QUEUE.md to track 10-article blog rollout
- [x] Verify zero third-party outbound links and strict internal linking requirements

## Phase 1: Print & PDF Engine Alignment
- [x] Enforce `@page { margin: 15mm; size: auto; }` and zero-margin root flow on tools
- [x] Completely eliminate all UI chrome, navbars, forms, and footers in `@media print`
- [x] Eliminate phantom parent container paddings and offsets

## Phase 2: Mobile App-Like UI/UX Architecture
- [x] Sticky bottom mobile action bar (Copy Document + Print / Save PDF) on tools
- [x] Segmented horizontal pill selectors for states, grounds, and forms
- [x] 48px minimum touch targets across all buttons and inputs
- [x] Desktop 40/60 split workspace with live DOM preview

## Phase 3: Dedicated Blog Hub & 10 Statutory Legal Articles (1,200 - 1,500 words each)
- [x] Create `/blog/index.html` with instant live search filter, jurisdictional category tabs, and card grid
- [x] Article 1: `/blog/california-30-day-vs-60-day-notice-to-vacate-rules.html` (Cal. Civ. Code § 1946.1)
- [x] Article 2: `/blog/california-ab-1482-tenant-protection-act-just-cause-evictions.html` (AB 1482 rent caps & just cause)
- [x] Article 3: `/blog/texas-property-code-24-005-notice-to-vacate-procedure.html` (Texas 3-day notice & JP Court)
- [x] Article 4: `/blog/florida-statute-83-56-three-day-notice-rent-calculation.html` (Florida holiday/weekend exclusion)
- [x] Article 5: `/blog/security-deposit-return-demand-letters-california-texas-florida.html` (Tri-state deposit deadlines & penalties)
- [x] Article 6: `/blog/renters-rights-act-complete-guide-section-21-abolition.html` (Section 21 abolition & periodic conversion)
- [x] Article 7: `/blog/reformed-section-8-notice-form-3-ground-8-rent-arrears.html` (Ground 8 3-month arrears & 4-week notice)
- [x] Article 8: `/blog/ground-1a-landlord-intention-to-sell-notice-rules.html` (Ground 1A 4-month sale notice rules)
- [x] Article 9: `/blog/tenant-statutory-notice-to-quit-periodic-tenancy.html` (Periodic tenancy 2-month tenant termination)
- [x] Article 10: `/blog/challenging-section-13-rent-increases-first-tier-tribunal.html` (Form 4 tribunal referral & market rent)

## Phase 4: Strict Humanization & Editorial Mass
- [x] Verify each of the 10 articles contains between 1,200 and 1,500 words
- [x] Enforce absolute ban on em-dashes across all articles and meta tags
- [x] Enforce absolute ban on AI filler tropes ("delve into", "tapestry", "in today's fast-paced world", "furthermore", "testament to", "a beacon of")
- [x] Embed 45-word bold Direct Answer Capsules under primary H1 on all articles

## Phase 5: LLM-First FAQs & Valid JSON-LD Schemas
- [x] Embed 5 to 7 conversational FAQs per blog article with 40-word leading statutory rules
- [x] Embed valid `BlogPosting` JSON-LD schema on all 10 articles
- [x] Embed valid `FAQPage` JSON-LD schema matching on-page questions 1:1
- [x] Embed valid `BreadcrumbList` schema (Home > Blog Hub > Article)

## Phase 6: Pillar-Cluster Internal Linking Mesh
- [x] Embed at least 4 contextual in-content internal links per blog article
- [x] Update 3-column Related Utilities grid on all 8 generator tools linking to companion blog articles
- [x] Maintain zero outbound third-party hyperlinks (only Web3Forms permitted)

## Phase 7: Edge Cybersecurity & Search Manifests
- [x] Update `/sitemap.xml` referencing all 30+ URLs
- [x] Update `/llms.txt` and `/llms-full.txt` with blog articles
- [x] Update `/ai-catalog.json` with blog endpoints
- [x] Verify `/favicon.svg` linked across all `<head>` sections
- [x] Recompile production `css/styles.min.css`

## Phase 8: GitHub Deployment
- [x] Run full repository verification (word counts, em-dashes, schema validation, anchor audit)
- [ ] Stage, commit, and push all files to `origin main` with exact commit message:
  `feat(core): fix print spacing bug, deploy mobile app layout, launch 10-article legal blog hub, and enforce strict AEO humanization`
