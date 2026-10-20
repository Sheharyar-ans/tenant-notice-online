# ⚖️ TenantNotice : Dual-Jurisdiction Statutory Tenancy & Legal Document Engines

> Zero-latency, client-side legal document compilers and statutory guidance engines engineered for the United States and the United Kingdom. Fully compliant with California Civil Code, Texas Property Code, Florida Statutes, and the UK Renters' Rights Act.

[![Deployment: Cloudflare Pages](https://img.shields.io/badge/Deployment-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://tenantnotice.online/)
[![Live Production](https://img.shields.io/badge/Live_URL-tenantnotice.online-059669?style=for-the-badge&logo=google-chrome&logoColor=white)](https://tenantnotice.online/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0284c7?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Architecture: Client-Side](https://img.shields.io/badge/Architecture-100%25_Client--Side-0f172a?style=for-the-badge&logo=javascript&logoColor=white)](https://tenantnotice.online/)
[![Jurisdictions: US & UK](https://img.shields.io/badge/Jurisdictions-US_(State_Codes)_%26_UK_(Parliamentary)-334155?style=for-the-badge&logo=databricks&logoColor=white)](https://tenantnotice.online/)
[![Security: Grade A+](https://img.shields.io/badge/Security-A%2B_Strict_CSP_%26_HSTS-10b981?style=for-the-badge&logo=shield&logoColor=white)](https://tenantnotice.online/)

---

## 🌐 Live Production Access

Explore the live, production-deployed platform:
👉 **[https://tenantnotice.online/](https://tenantnotice.online/)**

### Quick Navigational Hubs
- **[United States Tenancy Suite](https://tenantnotice.online/us/)**: California, Texas, Florida, and New York document engines.
- **[United Kingdom Tenancy Suite](https://tenantnotice.online/uk/)**: Renters' Rights Act, Section 8, Section 13, and Deposit schemes.
- **[Client-Side Print & PDF Engine](#5-architectural--security-highlights)**: Zero-margin, standard legal letterhead printer.
- **[Statutory Framework Matrix](#4-statutory-legal-framework-matrix)**: Comparative statutory authority table.

---

## 💡 Executive Overview & The Problem Solved

### The Problem
Traditional legal document services lock essential statutory eviction notices and tenancy dispute letters behind predatory **$39 to $59 per month recurring subscriptions**. Even worse, legacy generic template portals provide outdated, one-size-fits-all forms that fail judicial muster in local county and magistrates' courts:
- Blending US common law notices with UK statutory tenancies.
- Ignoring landmark legislation like the **UK Renters' Rights Act** (abolishing Section 21 no-fault evictions).
- Overlooking strict state-specific day-counting rules (such as California CCP Section 1161(2) and Florida Statute Section 83.56(3) requiring the exclusion of weekends and judicial holidays).
- Storing sensitive tenant and landlord personally identifiable information (PII) on vulnerable third-party databases.

### The Solution: TenantNotice
TenantNotice operates as an **unmetered, 100% free, client-side legal technology platform**. Every document compiles entirely inside the user's browser memory (HTML5 / Vanilla JavaScript) with zero backend round-trips and zero data retention:
1. **Strict Jurisdictional Isolation**: Independent `/us/` and `/uk/` directory silos prevent cross-border statutory confusion.
2. **Instant Reactive DOM Binding**: Legal letterheads update live with zero server latency as form parameters are adjusted.
3. **App-Like Ergonomics**: Features sticky mobile action bars, segmented horizontal pill selectors, 48px touch targets, and a 40/60 desktop split workspace.
4. **Zero Outbound Link Mesh**: Keeps users protected from external tracking redirects while optimizing generative search discovery (AEO/GEO).

---

## 🏛️ Statutory Legal Framework Matrix

| Jurisdiction | Document / Tool Name | Legal / Statutory Authority | Route Path | Mandatory Statutory Rule / Notice Period |
| :--- | :--- | :--- | :--- | :--- |
| **US (California)** | 30-Day Notice to Vacate | California Civ. Code § 1946.1, AB 1482 | `/us/30-day-notice-to-vacate.html` | 30 days for occupancy under 1 year; 60 days for 1+ year tenancies. Requires just cause under AB 1482 where applicable. |
| **US (California)** | 3-Day Notice to Pay or Quit | California Code of Civ. Proc. § 1161(2) | `/us/3-day-pay-rent-or-quit.html` | 3 full judicial days. Explicitly excludes Saturdays, Sundays, and legal court holidays. Demands exact base rent only. |
| **US (Texas)** | Notice to Vacate for Nonpayment | Texas Property Code § 24.005 | `/us/3-day-pay-rent-or-quit.html` | Minimum 3 days written notice prior to eviction filing unless written lease specifies a different timeframe. |
| **US (Texas)** | Security Deposit Demand | Texas Property Code § 92.103 & § 92.109 | `/us/security-deposit-demand.html` | 30 calendar days to return deposit following surrender and written forwarding address. 3x penalty for bad faith. |
| **US (Florida)** | 3-Day Notice to Pay or Quit | Florida Statutes § 83.56(3) | `/us/3-day-pay-rent-or-quit.html` | 3 business days excluding Saturdays, Sundays, and legal holidays. Day of service is excluded. |
| **US (California)** | Security Deposit Demand | California Civ. Code § 1950.5 | `/us/security-deposit-demand.html` | Strict 21 calendar day post-move-out deadline for itemized deductions and refunds. Statutory bad-faith penalty up to 2x deposit. |
| **US (California)** | 24-Hour Notice to Enter | California Civ. Code § 1954 | `/us/24-hour-notice-to-enter.html` | 24 hours advance written notice (48 hours for initial inspections). Permitted only during normal business hours. |
| **UK (National)** | Section 8 Notice to Quit | Housing Act 1988 (Reformed Schedule 2) | `/uk/section-8-notice-to-quit.html` | Replaces abolished Section 21. Ground 8 requires 3 months serious rent arrears (4 weeks notice). Ground 1A sale requires 4 months notice. |
| **UK (National)** | Tenant Notice to Quit | Housing Act 1988 (Periodic Tenancies) | `/uk/tenant-notice-to-quit.html` | 2 calendar months written notice for assured periodic tenancies, aligned with the expiration of a rental period. |
| **UK (National)** | Tenancy Deposit Demand | Housing Act 2004 § 213 & § 214 | `/uk/tenancy-deposit-demand.html` | Deposit must be registered in DPS/TDS/MyDeposits within 30 days. Failure triggers mandatory 1x to 3x compensation penalty. |
| **UK (National)** | Section 13 Rent Challenge | Housing Act 1988 § 13 (Form 4) | `/uk/section-13-rent-challenge.html` | Referral to First-tier Tribunal (Property Chamber). Tribunal cannot increase rent beyond landlord proposed figure. |

---

## ⚡ Architectural & Security Highlights

### 1. Pure Browser-Side Reactive Compiler
- Engineered with vanilla JavaScript without bulky frameworks or external dependencies.
- Client-side event listeners compile user inputs into formal legal letterheads with zero latency.
- Completely immune to database breaches: personal tenancy data never touches a server.

### 2. High-Precision Print & PDF Engine
- Uses custom `@media print` rules with zero margin bleed.
- Automatically hides all non-document chrome (headers, navigation, parameters form, FAQs, mobile bars, footers).
- Calibrated to `@page { margin: 15mm; size: auto; }` for US-Letter (`/us/`) and A4 (`/uk/`) paper sizes.
- Zero parent padding, zero top whitespace, and zero absolute positioning offsets guarantee documents start immediately at the top edge of page 1.

### 3. Enterprise Edge Security on Cloudflare Pages
Configured via root `/_headers` file:
```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://api.web3forms.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com; frame-ancestors 'none';
```

### 4. Generative Engine Optimization (AEO / GEO / AIO)
- **Strict Inverted Pyramid**: Every tool features a single high-intent H1 followed immediately by a **45-word bold Direct Answer Capsule** specifically written for AI Overviews and Perplexity extraction.
- **Machine-Readable Schemas**: Embedded `WebApplication`, `BreadcrumbList`, `Organization`, and `FAQPage` JSON-LD schemas matching on-page copy 1:1.
- **AI Context Protocols**: Root `/llms.txt` and `/llms-full.txt` provide machine-readable documentation indexes for LLM crawlers.

---

## 📁 Directory Structure Tree

```text
tenant-notice-online/
├── .gitignore                          # Production Git exclusion hygiene
├── _headers                            # Cloudflare Pages edge security headers
├── ARCHITECTURE.md                     # Technical architecture documentation
├── favicon.svg                         # Vector legal scales & navy tile icon
├── index.html                          # Global home & jurisdiction selector
├── llms.txt                            # Machine-readable LLM context summary
├── llms-full.txt                       # Exhaustive legal reference knowledge base
├── PLAN.md                             # Strategic implementation roadmap
├── README.md                           # Master open-source documentation
├── robots.txt                          # Crawler directives & exploit scanner blocks
├── sitemap.xml                         # Comprehensive multi-region XML sitemap
├── TASK_QUEUE.md                       # Granular sprint execution backlog
│
├── us/                                 # United States Jurisdictional Suite
│   ├── index.html                      # US national hub & statutory directory
│   ├── 30-day-notice-to-vacate.html    # California Civ. Code § 1946.1 & Texas § 24.005
│   ├── 3-day-pay-rent-or-quit.html     # California CCP § 1161(2) & Florida § 83.56(3)
│   ├── security-deposit-demand.html    # California Civ. Code § 1950.5 (21 days)
│   └── 24-hour-notice-to-enter.html    # California Civ. Code § 1954 & quiet enjoyment
│
├── uk/                                 # United Kingdom Jurisdictional Suite
│   ├── index.html                      # UK national hub & Renters' Rights Act portal
│   ├── section-8-notice-to-quit.html   # Form 3 Schedule 2 possession notice
│   ├── tenant-notice-to-quit.html      # 2-month rolling periodic tenant termination
│   ├── tenancy-deposit-demand.html     # Housing Act 2004 § 213 custodial schemes
│   └── section-13-rent-challenge.html  # Form 4 First-tier Tribunal referral utility
│
├── guides/                             # Authoritative Legal Guidance & Analysis
│   ├── us-eviction-process-guide.html  # Comprehensive US judicial eviction timelines
│   ├── uk-renters-rights-act-guide.html# Parliamentary tenancy reforms & s.21 abolition
│   └── security-deposit-return-rights.html # Small claims court deposit recovery handbook
│
└── legal/                              # Institutional & Compliance Policies
    ├── about-us.html                   # Mission, methodology, and legal standards
    ├── contact-us.html                 # Encrypted Web3Forms contact submission
    ├── disclaimer.html                 # Self-help legal assistance disclaimer
    ├── privacy-policy.html             # GDPR and CPRA client-side privacy policy
    └── terms-of-service.html           # Website terms and conditions
```

---

## 🛠️ Local Development & Static Preview

Because TenantNotice is engineered with 100% static HTML5, CSS3, and modern client-side JavaScript, it requires no compilation, bundler, or heavy runtime dependencies.

### Option 1: Python HTTP Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/Sheharyar-ans/tenant-notice-online.git

# Navigate into the project directory
cd tenant-notice-online

# Launch a local development server
python -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000/`.

### Option 2: VS Code Live Server
1. Open the cloned folder in **Visual Studio Code**.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 3: Node.js (npx serve)
```bash
npx -y serve .
```

---

## 👨‍💻 Designed, Built & Maintained by Sheharyar Siraj

**Lead Legal-Tech Software Architect & Principal Frontend Engineer**

Passionate about crafting privacy-first, zero-overhead web utilities that empower individuals with unmetered access to authoritative legal documentation and high-performance user interfaces.

- **GitHub Profile**: [@Sheharyar-ans](https://github.com/Sheharyar-ans)
- **Repository**: [https://github.com/Sheharyar-ans/tenant-notice-online](https://github.com/Sheharyar-ans/tenant-notice-online)
- **Project Role**: Designed, Architected & Engineered by Sheharyar Siraj

👉 **[Visit Developer Profile & Portfolio](https://github.com/Sheharyar-ans)**

---

## 📄 Legal Disclaimers & Licensing

### Open-Source License
This repository is licensed under the **[MIT License](LICENSE)**. You are free to inspect, fork, and adapt this software for personal and commercial purposes.

### General Legal Disclaimer
TenantNotice provides self-help software utilities and informational legal templates. **TenantNotice is not a law firm, attorney referral service, or solicitor's practice.** The documents, statutory citations, calculation tools, and procedural guides provided on this website do not constitute legal advice. Landlord-tenant laws are subject to frequent local amendment, municipal rent control ordinances, and jurisdictional variation. Users requiring formal legal counsel should consult a licensed attorney in their respective state or a qualified solicitor in England and Wales.