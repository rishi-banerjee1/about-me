+++
title = "BlindBench"
weight = 3
template = "projects/page.html"

[extra]
shortSummary = "Compare 100+ LLMs with model identities hidden, shared prompts, response scores, and failure analysis."
summary = "Open-source arena that blind-tests 100+ AI models on real prompts from 4 Kaggle datasets. Generates trust scores, win rates, and classifies 10 failure types. BYOK support keeps API keys client-side."
audience = "AI builders and technical leaders choosing models for work that needs more than a demo."
value = "Replaces vendor-led model selection with comparable evidence from real prompts and failure patterns."
category = "AI Evaluation"
section = "ai"
year = 2026
order = 3
featured = false
detail = true
status = "flagship"
visibility = "public"
tags = ["React", "Supabase", "Vite", "TailwindCSS", "Kaggle", "Open Source"]
metrics = ["106+ models tested", "4 Kaggle datasets", "10 failure types", "Zero key storage"]
homepage = "https://rishi-banerjee1.github.io/blindbench/"
github = "https://github.com/rishi-banerjee1/blindbench"
+++

## The problem

I wanted to compare models on the same prompts without seeing their names first, then look closely at where their answers failed. BlindBench grew out of that interest in making model choices easier to examine.

## What I built

I built BlindBench as an open-source evaluation arena. I use real prompts from 4 Kaggle datasets, run those prompts through 100+ models, and score responses on correctness, reasoning depth, and failure patterns. I keep model names hidden during evaluation so judgment is less biased.

Key design choices:

- **Blind testing**: Model identities hidden during evaluation to reduce brand bias.
- **Truth scoring**: Composite score based on correctness, reasoning quality, and consistency.
- **Failure classification**: 10 distinct failure types (hallucination, logic errors, refusal bias, etc.) tracked per model.
- **Bring-a-key mode**: API keys are encrypted in transit, used once, and never stored. Free-tier models work without a key.

## Architecture

React + Vite frontend deployed to GitHub Pages. Supabase backend with Edge Functions that proxy LLM calls server-side. Materialized views power the leaderboard and failure analytics. Four seeded Kaggle datasets provide the evaluation corpus.

## Distribution

- [Live arena](https://rishi-banerjee1.github.io/blindbench/): test models immediately
- [GitHub repo](https://github.com/rishi-banerjee1/blindbench): full source, seed scripts, deployment guide
