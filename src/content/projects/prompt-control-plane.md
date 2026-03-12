---
title: Prompt Control Plane
shortSummary: Deterministic prompt governance for production LLM systems, with stronger proof points than most prompt tooling.
summary: Score, route, enforce policy, lock config, and audit prompt decisions before they ever reach a model. Public product, npm package, and GitHub Action.
category: Prompt Governance
section: flagship
year: 2026
order: 1
featured: true
detail: true
status: flagship
visibility: public
tags:
  - TypeScript
  - MCP
  - npm
  - GitHub Action
  - Enterprise
metrics:
  - 20 MCP tools
  - 11 CLI commands
  - Zero LLM calls inside
homepage: https://getpcp.site/
github: https://github.com/rishi-banerjee1/prompt-control-plane
npm: https://www.npmjs.com/package/pcp-engine
marketplace: https://github.com/marketplace/actions/prompt-control-plane
---
## The problem

Most organizations now monitor models, versions, and tokens, but the prompt layer is still unmanaged text. That means no clear answer to basic governance questions: who changed this instruction, what risk did it introduce, and can the behavior be reproduced later?

## What I built

Prompt Control Plane is a deterministic governance layer for prompts. It adds structure before execution: risk scoring, policy enforcement, cross-provider routing, and a tamper-evident audit trail. It ships in three useful surfaces at once:

- an MCP server for AI-native workflows
- a CLI for local and CI usage
- a GitHub Action for pull-request quality gates

## Why it matters

The differentiator is that the engine itself does not call an LLM. It enforces rules, structure, and repeatability around the prompt surface, which keeps the system deterministic, cheaper to run, and easier to reason about in production.

## Signals

- Public product site, public package, and public GitHub Action
- Strong fit with engineering governance, not just prompt tinkering
- Clear connection to the larger thesis of making fuzzy judgment more durable
