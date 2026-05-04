# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for Rishi Banerjee. Zola static site (Rust), deployed to GitHub Pages at `rishi-banerjee1.github.io/about-me/`. Positioning: "TA Leader Who Builds Systems & Ships Tools."

## Commands

```bash
# Local dev server (hot reload)
zola serve

# Build + copy to docs/ + add .nojekyll
./build.sh

# Deploy
git add -A && git commit -m "..." && git push origin main
```

**CRITICAL:** Always use `./build.sh` — it runs `zola build`, wipes `docs/`, copies `public/` output, and creates `docs/.nojekyll`. The `.nojekyll` file is essential or GitHub Pages will run Jekyll and may strip CSS/assets.

## Critical Rules

1. **Never mention names of other people** — use titles/roles and company names only (e.g., "Engineering Manager, FAANG" not personal names)
2. **Base path**: Set in `config.toml` as `base_url`. Zola's `get_url()` handles the `/about-me/` prefix automatically — no manual helper needed.
3. **Analytics**: GoatCounter at `rishisite.goatcounter.com`
4. **Book reference**: "Raising the Bar: Building High-Density Teams in the Age of AI" — Amazon India link: `https://www.amazon.in/dp/B0FQMWW9RR`
5. **Title**: Global Head of Talent Acquisition at kAIgentic
6. **Real screenshots only** — never AI-generated composites or mock-ups

## Architecture

Zola static site with Tera templates. Zero dependencies — single binary, no node_modules.

- `content/projects/` — Markdown files with TOML frontmatter, one per project (source of truth for all project data)
- `content/_index.md` — Homepage entry point (uses `templates/index.html`)
- `content/projects/_index.md` — Projects section config (sort_by, page_template)
- `templates/index.html` — Homepage: hero, logos, about, featured projects, experience, expertise, testimonials, education, CTA
- `templates/projects/section.html` — Projects listing (flagship + active + supporting)
- `templates/projects/page.html` — Individual project detail pages
- `templates/partials/` — nav.html, footer.html, project-card.html
- `templates/base.html` — HTML shell, fonts, dark mode, scripts
- `config.toml` — Site config + all static data (experience, stats, organizations, testimonials, etc.) in `[extra]`
- `static/css/global.css` — All styles
- `static/assets/` — Images, logos
- `docs/` — Built output served by GitHub Pages (generated via `./build.sh`, never edit manually)

### Project Frontmatter Fields

```toml
[extra]
featured = true         # shows on homepage flagship grid
detail = true           # gets its own /projects/slug/ page
section = "flagship"    # "flagship" | "supporting"
order = 1               # sort order (lower = first)
visibility = "public"   # "public" | "private"
status = "flagship"     # displayed as a badge
```

Note: `weight` in the top-level frontmatter controls Zola's sort order. `extra.order` is kept for template access.

### Deploying a Content Change

1. Edit the relevant `.md` file in `content/projects/`
2. Run `./build.sh`
3. `git add -A && git commit -m "..." && git push origin main`
4. GitHub Pages auto-deploys from `docs/` on push (~30s)

## File Roles

| File | Role | Generated? |
|------|------|-----------|
| `content/projects/*.md` | Project content — source of truth | No |
| `config.toml` | Site config + all non-project data (experience, stats, etc.) | No |
| `templates/index.html` | Homepage template | No |
| `templates/projects/section.html` | Projects listing page | No |
| `templates/projects/page.html` | Project detail page template | No |
| `templates/partials/project-card.html` | Reusable project card partial | No |
| `templates/partials/nav.html` | Navigation bar | No |
| `templates/partials/footer.html` | Site footer | No |
| `templates/base.html` | Base HTML layout | No |
| `static/css/global.css` | All CSS styles | No |
| `static/assets/` | Images and logos | No |
| `build.sh` | Build script (zola build + docs/ copy) | No |
| `docs/` | Built static output for GitHub Pages | Yes — via `./build.sh` |
| `public/` | Zola intermediate build output (gitignored) | Yes |
