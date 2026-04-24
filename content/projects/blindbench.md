+++
title = "BlindBench"
weight = 3
template = "projects/page.html"

[extra]
shortSummary = "Blind-test 100+ LLMs side by side. Real prompts, no marketing. Just truth scores and failure analysis."
summary = "Open-source arena that blind-tests 100+ AI models on real prompts from 4 Kaggle datasets. Generates trust scores, win rates, and classifies 10 failure types. BYOK support keeps API keys client-side."
category = "AI Evaluation"
section = "flagship"
year = 2026
order = 3
featured = true
detail = true
status = "flagship"
visibility = "public"
tags = ["React", "Supabase", "Vite", "TailwindCSS", "Kaggle", "Open Source"]
metrics = ["106+ models tested", "4 Kaggle datasets", "10 failure types", "Zero key storage"]
homepage = "https://rishi-banerjee1.github.io/blindbench/"
github = "https://github.com/rishi-banerjee1/blindbench"
+++

## The problem

LLM benchmarks are run by the same companies selling the models. Marketing claims are not evidence. There was no easy way to blind-test models side by side on real prompts and see which ones actually hold up.

## What I built

BlindBench is an open-source evaluation arena. It pulls real prompts from 4 Kaggle datasets, runs them through 100+ models, and scores responses on correctness, reasoning depth, and failure patterns. The interface strips model names during evaluation so judgment is unbiased.

Key design choices:

- **Blind testing**: Model identities hidden during evaluation to eliminate brand bias.
- **Truth scoring**: Composite score based on correctness, reasoning quality, and consistency.
- **Failure classification**: 10 distinct failure types (hallucination, logic errors, refusal bias, etc.) tracked per model.
- **BYOK (Bring Your Own Key)**: API keys encrypted in transit, used once, never stored. Free-tier models work without any key.

## Architecture

React + Vite frontend deployed to GitHub Pages. Supabase backend with Edge Functions that proxy LLM calls server-side. Materialized views power the leaderboard and failure analytics. Four seeded Kaggle datasets provide the evaluation corpus.

## Distribution

- [Live arena](https://rishi-banerjee1.github.io/blindbench/): test models immediately
- [GitHub repo](https://github.com/rishi-banerjee1/blindbench): full source, seed scripts, deployment guide
