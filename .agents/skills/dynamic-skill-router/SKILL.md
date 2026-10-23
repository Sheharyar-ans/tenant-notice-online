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
