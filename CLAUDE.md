# Claude Code repository instructions

Follow the root [`AGENTS.md`](AGENTS.md) before editing, building, reviewing, or publishing this site. It is the canonical source for the Zola version, source tree, design system, local preview command, CI checks, GitHub Pages settings, and release path.

The site uses Zola with TOML, Markdown, Tera, and plain CSS/JavaScript. Run `./build.sh` to regenerate `docs/`; do not edit generated files by hand. Make changes on a `codex/` topic branch, stage explicit paths, and wait for the required `Website CI / Build and verify` check and owner approval before a pull request is merged to `main`.
