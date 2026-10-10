# Repository guidance

These rules are the source of truth for agents and maintainers working on this site. Read them before changing or publishing the website.

## Stack and build

- This is a Zola 0.22.1 static site using TOML, Markdown, Tera templates, and plain CSS/JavaScript.
- There is no Node, npm, Sass, or frontend framework. Do not add one for routine site work.
- `config.toml` sets the canonical base URL to `https://rishi-banerjee1.github.io/about-me`.
- Run `./build.sh` to build the site and copy the complete Zola output to `docs/`. The script also creates `docs/.nojekyll`, which GitHub Pages needs to serve the generated files as-is.
- `docs/` is the GitHub Pages publishing directory. It is generated output: never edit it by hand. Commit its changes after running `./build.sh`.
- `static/` is copied into the generated site, including the standalone `static/founder-hindsight/` page.

## Source map

- `content/` holds the Markdown pages and project records.
- `templates/` and `templates/partials/` hold the Tera layouts and shared page components.
- `config.toml` holds the site configuration and shared navigation/profile data.
- `static/css/global.css` is the global stylesheet and the source for the site's design tokens.
- `static/` holds images, documents, and static pages.
- `scripts/check_site.py` checks required output, the Pages marker, and local links and anchors in generated HTML.
- `.github/workflows/site-ci.yml` is the required build and link-integrity gate for pull requests and main-branch updates.

## Design and content

- Preserve the shared navigation, footer, light/dark theme, spacing, and responsive conventions in the existing templates.
- Use the existing CSS custom properties and Manrope body/Fraunces display type. The visual system uses warm parchment surfaces, deep navy text, teal accents, and restrained amber.
- Keep pages accessible: semantic landmarks, heading order, visible focus, useful link text, and the existing mobile navigation behavior.
- Keep copy grounded in source material in this repository and materials the owner has provided. Do not invent metrics, quotes, credentials, or outcomes. Do not expose private repository details.
- Do not name other people in public site copy. Do not use comparisons to position the site owner. Do not use em dashes in shipped copy.

## Site positioning

- Position business outcomes around hiring efficiency and effectiveness, team capability, and dependable delivery. Never frame lower cost or cost reduction as the goal; do not relabel cost savings as effectiveness metrics.

- Present Rishi and his work, ideas, and recruiting practice. The intended takeaway is that he is worth connecting with, not that he is seeking a job.
- Use conversational invitations such as "Say hello" and "exchange notes on Talent". Do not restore role-availability statements, mandate intake forms, or job-seeking CTAs.
- Distinguish finding and assessing AI-native talent from building AI-native recruiting systems. Keep both visible. SEO must use relevant content and descriptive metadata, never keyword stuffing or ranking guarantees. The book has a dedicated `/raising-the-bar/` landing page.
- Give interview framework building and AI-native recruiting explicit, source-backed coverage. Keep private implementation details private.
- Current local review checkpoint: `work/connection-positioning-checkpoint.md`. The owner approved publication of this revision after review. Future revisions still require approval.

## Art & Craft page intent

- Establish personal recruiting credibility through search ownership, sourcing, assessment, candidate engagement, stakeholder counsel, closing, and mentoring.
- The book is supporting source material, with a discreet reference. Do not turn the page into a book summary or promotion.
- Do not restore the selected-outcomes strip. Use confirmed career scope, recommendations, and relevant work artifacts; unconfirmed anecdotes must not be presented as facts.

## Local preview and verification

```bash
zola serve --interface 127.0.0.1 --port 1111 --base-url http://127.0.0.1:1111 --no-port-append
./build.sh
python3 scripts/check_site.py
```

The `--no-port-append` option matters when the local base URL already contains a port. Without it, Zola appends the port again and the CSS URL breaks.

## Release path

- Work on a topic branch named `codex/<short-description>`. Never commit or push site changes directly to `main`.
- Before review, run `./build.sh`, `python3 scripts/check_site.py`, and `git diff --check`; visually inspect the changed pages at desktop and mobile widths when layout changes.
- Include the generated `docs/` changes and `docs/.nojekyll` with their source changes. CI fails if a clean rebuild changes or adds files under `docs/` that were not committed.
- Stage explicit paths only. Do not use `git add -A`; local `output/`, `tmp/`, `work/`, and environment folders are not site inputs.
- Open a pull request to `main` and require the `Website CI / Build and verify` check to pass. Obtain the owner's explicit approval before merging any site change. A merge to `main` publishes `docs/` through GitHub Pages.
- Do not bypass branch protections or treat a successful local build as approval to publish.

## GitHub Pages settings

- Repository: `rishi-banerjee1/about-me`.
- Publishing source: branch `main`, directory `/docs`.
- The configured site address is `https://rishi-banerjee1.github.io/about-me/`.
- `main` requires pull requests and the `Website CI / Build and verify` status check, enforces the rule for administrators, and blocks force pushes and branch deletion.
- The CI workflow is pinned to Zola 0.22.1 and pins each GitHub Action to a full commit SHA. Review and update these pins deliberately when upgrading.
