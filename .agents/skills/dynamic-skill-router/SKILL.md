---
name: dynamic-skill-router
description: Zero-footprint on-demand dynamic skill gateway. Matches user intent and executes specialized engineering, design, 3D, SEO, editorial, and architecture skills dynamically in-memory from GitHub without saving to disk.
---

# Zero-Footprint Dynamic Skill Router

## Purpose
The `dynamic-skill-router` acts as a centralized, ultra-lightweight execution gateway for the `Sheharyar-ans/antigravity-master-skills` hub. It eliminates local token bloat and disk overhead by dynamically resolving, fetching, and executing skills **in-memory** on demand.

---

## 🔒 Crucial Execution Rule: Zero Local Footprint
* **In-Memory Only:** When a skill is needed, fetch its raw instructions into context memory using `read_url_content` or `curl.exe -s <url>`.
* **Zero Disk Writes:** **NEVER** save, clone, or download the fetched `SKILL.md` or its assets to `./.agents/skills/` or any local directory.
* **Strict Adherence:** Execute the task immediately following the fetched instructions, maintaining the exact guidelines, standards, and rules defined in the remote skill protocol.

---

## 🗺️ Master Skill Lookup Registry

Base Raw URL:
`https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/`

| Category | Skill Name | Primary Intent / Trigger Keywords | Remote Raw GitHub URL |
| :--- | :--- | :--- | :--- |
| **WordPress** | `wordpress-theme-development` | Block themes, theme.json, template hierarchy, WP 7.0 | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wordpress-theme-development/SKILL.md` |
| **WordPress** | `wp-block-development` | Gutenberg blocks, block.json, register_block_type | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-block-development/SKILL.md` |
| **WordPress** | `wp-block-themes` | Full site editing, FSE, style variations | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-block-themes/SKILL.md` |
| **WordPress** | `wp-interactivity-api` | Reactive store, data-wp-* directives, client state | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-interactivity-api/SKILL.md` |
| **WordPress** | `wp-performance` | DB query optimization, autoload options, profiling | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-performance/SKILL.md` |
| **WordPress** | `wp-plugin-development` | Plugins, hooks, settings API, security nonces | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-plugin-development/SKILL.md` |
| **WordPress** | `wp-wpcli-and-ops` | WP-CLI commands, db export/import, search-replace | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wp-wpcli-and-ops/SKILL.md` |
| **WordPress** | `wordpress-router` | Triage WP repository, classify codebase architecture | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/wordpress/wordpress-router/SKILL.md` |
| **Frontend** | `ui-ux-pro-max` | Design intelligence, 79 styles, 192 palettes, fonts | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/ui-ux-pro-max/SKILL.md` |
| **Frontend** | `design-taste-frontend` | Anti-slop frontend, Awwwards aesthetic, award UI | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/design-taste-frontend/SKILL.md` |
| **Frontend** | `frontend-design` | Visual hierarchy, typography, modern contrast | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/frontend-design/SKILL.md` |
| **Frontend** | `creative-ui` | Experimental UI, asymmetric layouts, magnetic nav | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/creative-ui/SKILL.md` |
| **Frontend** | `design-system` | Tokens architecture, spacing scales, design tokens | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/design-system/SKILL.md` |
| **Frontend** | `responsive-design` | Mobile-first layout, fluid breakpoints, typography | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/responsive-design/SKILL.md` |
| **Frontend** | `interpreter-design` | Minimal, utilitarian, OpenAI/ChatGPT styled UX | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/interpreter-design/SKILL.md` |
| **Frontend** | `accessibility` | WCAG 2.1 AA/AAA compliance, ARIA, screen readers | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/frontend/accessibility/SKILL.md` |
| **Motion & 3D** | `gsap-motion` | GSAP ScrollTrigger, scrub, pin, timeline reveals | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/gsap-motion/SKILL.md` |
| **Motion & 3D** | `threejs-web` | Three.js, React Three Fiber, WebGL, custom shaders | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/threejs-web/SKILL.md` |
| **Motion & 3D** | `3d-assets` | GLTF/GLB optimization, Draco compression, HDRI | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/3d-assets/SKILL.md` |
| **Motion & 3D** | `3d-environments` | Virtual rooms, WebGL backgrounds, 3D studios | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/3d-environments/SKILL.md` |
| **Motion & 3D** | `3d-icons` | Glass, chrome, neon, clay, floating 3D icons | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/3d-icons/SKILL.md` |
| **Motion & 3D** | `3d-avatars` | Digital 3D characters, facial consistency, lighting | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/3d-avatars/SKILL.md` |
| **Motion & 3D** | `cinematic-scroll` | Scroll-driven storytelling, video scrubbing | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/cinematic-scroll/SKILL.md` |
| **Motion & 3D** | `cinematic-video-web` | WebM/MP4 dual format, video compression, posters | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/motion-3d/cinematic-video-web/SKILL.md` |
| **SEO & GEO** | `agentic-seo` | Full SEO audit, schema JSON-LD, Core Web Vitals | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/agentic-seo/SKILL.md` |
| **SEO & GEO** | `seo-geo-optimizer` | GEO for ChatGPT, Perplexity, Google AI Overviews | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/seo-geo-optimizer/SKILL.md` |
| **SEO & GEO** | `seo-content` | Pillar-cluster internal linking, search intent, FAQ | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/seo-content/SKILL.md` |
| **SEO & GEO** | `technical-seo` | Robots.txt, sitemaps, canonicals, Open Graph, meta | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/technical-seo/SKILL.md` |
| **SEO & GEO** | `competitor-profiling` | Competitor footprint, keyword overlap, backlink gap | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/competitor-profiling/SKILL.md` |
| **SEO & GEO** | `competitor-teardown-agent` | Competitor funnel analysis, social and ad teardown | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/competitor-teardown-agent/SKILL.md` |
| **SEO & GEO** | `openseo-suite` | Keyword clustering, prompt research, local SEO | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/seo/openseo-suite/` |
| **Content** | `humanizer` | Purge 26 AI writing tells, ban em-dashes, human tone | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/humanizer/SKILL.md` |
| **Content** | `stop-slop` | Eliminate filler phrases, clichés, generic cadence | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/stop-slop/SKILL.md` |
| **Content** | `copywriting` | Landing page copy, conversion hooks, value messaging | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/copywriting/SKILL.md` |
| **Content** | `email-marketing` | Email sequences, newsletters, deliverability setup | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/email-marketing/SKILL.md` |
| **Content** | `marketing-psychology` | Behavioral mental models, psychological leverage | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/marketing-psychology/SKILL.md` |
| **Content** | `conversion-optimization` | CRO principles, A/B testing, friction reduction | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content/conversion-optimization/SKILL.md` |
| **Backend** | `fastapi-pro` | FastAPI async APIs, Pydantic V2, SQLAlchemy 2.0 | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/fastapi-pro/SKILL.md` |
| **Backend** | `nextjs-app-router-patterns` | Next.js 14+ App Router, RSC, SSR/SSG patterns | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/nextjs-app-router-patterns/SKILL.md` |
| **Backend** | `postgresql-architecture` | PostgreSQL schema modeling, indexing, query plans | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/postgresql-architecture/SKILL.md` |
| **Backend** | `rag-implementation` | Vector embeddings, RAG pipelines, LLM knowledge | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/rag-implementation/SKILL.md` |
| **Backend** | `graphify` | Tree-sitter AST knowledge graph mapping | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/graphify/SKILL.md` |
| **Backend** | `context-mode` | Context sandboxing, persistent memory, token cache | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/backend/context-mode/SKILL.md` |
| **QA & DevOps** | `playwright-cli` | Browser automation, Playwright end-to-end tests | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/playwright-cli/SKILL.md` |
| **QA & DevOps** | `browser-testing` | Cross-browser functional tests, console error audits | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/browser-testing/SKILL.md` |
| **QA & DevOps** | `visual-qa` | Screenshot-driven visual regression, overflow audit | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/visual-qa/SKILL.md` |
| **QA & DevOps** | `core-web-vitals` | Field and lab benchmarks for LCP, INP, and CLS | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/core-web-vitals/SKILL.md` |
| **QA & DevOps** | `web-performance` | Code splitting, bundle budgeting, lazy loading | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/web-performance/SKILL.md` |
| **QA & DevOps** | `web-security` | XSS, CSRF, CSP headers, secrets protection | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/web-security/SKILL.md` |
| **QA & DevOps** | `web-quality-audit` | Evidence-led full quality audits (A11y, Perf, SEO) | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/web-quality-audit/SKILL.md` |
| **QA & DevOps** | `deployment` | Production CI/CD pipelines (Vercel, Cloud Run) | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/qa/deployment/SKILL.md` |
| **Integrations** | `firecrawl-build` | Clean Markdown web extraction, deep search | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/integrations/firecrawl-build/SKILL.md` |
| **Integrations** | `firecrawl-scrape` | Single-page structured extraction via Firecrawl | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/integrations/firecrawl-scrape/SKILL.md` |
| **Integrations** | `stts` | Speech-to-Text & Text-to-Speech loop via Chrome API | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/integrations/stts/SKILL.md` |
| **Orchestration** | `web-experience-orchestrator`| Master autonomous factory layer and 20-step pipeline | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/orchestration/web-experience-orchestrator/SKILL.md` |
| **Orchestration** | `web-experience-architect` | Architecture level decisions (Level 0-5 blueprints) | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/orchestration/web-experience-architect/SKILL.md` |
| **Orchestration** | `web-experience-intelligence`| Visual critique, self-optimization engine | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/orchestration/web-experience-intelligence/SKILL.md` |
| **Orchestration** | `ai-asset-pipeline` | Prompt engineering for production visual assets | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/orchestration/ai-asset-pipeline/SKILL.md` |
| **Orchestration** | `skill-creator` | Dynamic custom skill generation protocol | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/orchestration/skill-creator/SKILL.md` |
| **SenseNova** | `sn-da-excel-workflow` | Excel analysis, multi-sheet, formulas, data orchestrator | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-da-excel-workflow/SKILL.md` |
| **SenseNova** | `sn-da-image-caption` | Image understanding, OCR, visual chart/diagram extraction | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-da-image-caption/SKILL.md` |
| **SenseNova** | `sn-da-large-file-analysis` | Massive Excel files (>10k rows), memory-safe streaming | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-da-large-file-analysis/SKILL.md` |
| **SenseNova** | `sn-da-non-spreadsheet-analysis` | Document parsing & data analysis for Word, PDF, PPT | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-da-non-spreadsheet-analysis/SKILL.md` |
| **SenseNova** | `sn-deep-research` | Deep systematic research, competitor analysis, benchmarking | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-deep-research/SKILL.md` |
| **SenseNova** | `sn-deepresearch-cli` | SenseNova deep research command-line execution | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-deepresearch-cli/SKILL.md` |
| **SenseNova** | `sn-image-base` | Multimodal image generation, low-level APIs, base layer | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-image-base/SKILL.md` |
| **SenseNova** | `sn-image-doctor` | Diagnostic environment check for image skills & API keys | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-image-doctor/SKILL.md` |
| **SenseNova** | `sn-image-imitate` | Reference image style transfer, aesthetic mimicry | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-image-imitate/SKILL.md` |
| **SenseNova** | `sn-image-resume` | Designed portfolio resume visual generation from markdown | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-image-resume/SKILL.md` |
| **SenseNova** | `sn-infographic` | Professional infographics, layout archetypes, graphics | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-infographic/SKILL.md` |
| **SenseNova** | `sn-md-to-html-report` | Convert markdown research to styled publication-ready HTML | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-md-to-html-report/SKILL.md` |
| **SenseNova** | `sn-motion-html` | Continuous-shot motion HTML stories & interactive decks | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-motion-html/SKILL.md` |
| **SenseNova** | `sn-ppt-creative` | Highly stylized creative presentation deck generation | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-creative/SKILL.md` |
| **SenseNova** | `sn-ppt-dazzle` | Dynamic animated single-file HTML presentation decks | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-dazzle/SKILL.md` |
| **SenseNova** | `sn-ppt-doctor` | PPT diagnostic tool for Playwright, parsing, fonts | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-doctor/SKILL.md` |
| **SenseNova** | `sn-ppt-entry` | Primary entry router for slide decks, PPT, PPTX generation | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-entry/SKILL.md` |
| **SenseNova** | `sn-ppt-standard` | Corporate & business slide decks, clean layout standards | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-standard/SKILL.md` |
| **SenseNova** | `sn-ppt-story` | Narrative presentation pitch decks, story structures | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-story/SKILL.md` |
| **SenseNova** | `sn-ppt-tools` | Image search, media download, and asset tools for PPT | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-tools/SKILL.md` |
| **SenseNova** | `sn-ppt-workbench` | Visual slide preview, inspection, and editing workbench | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-ppt-workbench/SKILL.md` |
| **SenseNova** | `sn-prepare-citations` | Footnote citation cleanup, deduplication, references | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-prepare-citations/SKILL.md` |
| **SenseNova** | `sn-proactive-agent` | Autonomous background tracker, project milestones check-in | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-proactive-agent/SKILL.md` |
| **SenseNova** | `sn-report-format-discovery`| Recommend best research deliverable format based on intent | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-report-format-discovery/SKILL.md` |
| **SenseNova** | `sn-research-report` | Executive research reports, comparisons, structured write-up | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-research-report/SKILL.md` |
| **SenseNova** | `sn-search-academic` | Academic paper search, arXiv, Semantic Scholar, citations | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-academic/SKILL.md` |
| **SenseNova** | `sn-search-code` | GitHub repos, issues, code snippets, developer Q&A | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-code/SKILL.md` |
| **SenseNova** | `sn-search-finance` | Stock market tickers, financial reports, K-lines, filings | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-finance/SKILL.md` |
| **SenseNova** | `sn-search-image` | High-relevance web image discovery via Serper.dev | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-image/SKILL.md` |
| **SenseNova** | `sn-search-market-cn` | China market research, industry macro data, listed companies | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-market-cn/SKILL.md` |
| **SenseNova** | `sn-search-social-cn` | Chinese social platforms (Bilibili, Zhihu, Xiaohongshu) | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-social-cn/SKILL.md` |
| **SenseNova** | `sn-search-social-en` | English social platforms (Reddit, Twitter/X, YouTube) | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-social-en/SKILL.md` |
| **SenseNova** | `sn-search-social-media` | Multi-platform community discussions, tech trend tracking | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-social-media/SKILL.md` |
| **SenseNova** | `sn-search-year-report` | Corporate annual reports, official filings, disclosures | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-search-year-report/SKILL.md` |
| **SenseNova** | `sn-team-harness` | Multi-agent team coordination & execution harness | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-team-harness/SKILL.md` |
| **SenseNova** | `sn-update` | SenseNova skills self-updater & package synchronizer | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/sensenova/sn-update/SKILL.md` |
| **Content Engine** | `high-converting-aeo-seo` | Direct answer blocks, AI Overviews, Perplexity citation, product-led AEO/SEO | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content-engine/high-converting-aeo-seo/SKILL.md` |
| **Content Engine** | `geo-content-optimizer` | CITE and CORE-EEAT validation gates, AI citability scoring, entity keyword optimization | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content-engine/geo-content-optimizer/SKILL.md` |
| **Content Engine** | `seo-content-writer` | 5-phase SEO content engine, JTBD long-form B2B writing, section drafting | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content-engine/seo-content-writer/SKILL.md` |
| **Content Engine** | `geo-content-writer` | Programmatic backlog-first GEO, SearchGPT/Gemini/Perplexity structure, citation fanout | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content-engine/geo-content-writer/SKILL.md` |
| **Content Engine** | `agentic-seo-content` | Heading hierarchy analysis, keyword intent clustering, E-E-A-T evidence quality gates | `https://raw.githubusercontent.com/Sheharyar-ans/antigravity-master-skills/main/skills/content-engine/agentic-seo-content/SKILL.md` |

---

## ⚡ Execution Protocol Step-by-Step

```
User Prompt
     │
     ▼
[Match Intent in Master Table]
     │
     ▼
[Fetch Raw SKILL.md In-Memory] ──► (read_url_content OR curl.exe -s)
     │
     ▼
[Zero Disk Write Enforced]
     │
     ▼
[Apply Skill Rules & Deliver Solution]
```

1. **Detect Intent:** Evaluate the user's task against the lookup table.
2. **Fetch In-Memory:** Use `read_url_content` or `curl.exe -s <url>` to pull the raw markdown directly into execution context.
3. **Execute Protocol:** Follow the instructions, constraints, and quality gates specified in the fetched skill.
4. **Never Write to Disk:** Ensure no copies of the fetched skill are persisted to disk.
