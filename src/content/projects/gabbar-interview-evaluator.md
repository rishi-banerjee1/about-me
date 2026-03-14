---
title: Gabbar Interview Evaluator
shortSummary: Interview evaluation skill that applies a 7-layer hiring doctrine to transcripts. Outputs scorecards, risk classifications, and scaling assessments.
summary: Takes interview transcripts and forces structure around the decision. Scores on agency, judgment, and craft — the dimensions most debriefs skip.
category: Interview Evaluation
section: active
year: 2026
order: 6
featured: false
detail: true
status: active
visibility: private
tags:
  - Claude Code
  - Evaluation
  - Hiring doctrine
  - Bias safeguards
metrics:
  - 7-layer doctrine
  - Structured scorecards
  - 4x scaling assessment
contactHref: mailto:rpbanerjee@outlook.com?subject=Gabbar%20Interview%20Evaluator
contactLabel: Request walkthrough
---
## The problem

Interview debriefs over-index on charisma, recency, or whichever interviewer speaks most confidently. The hardest dimensions — agency, judgment under ambiguity, real craft motivation — get evaluated least consistently.

## What I built

Gabbar takes a transcript and outputs a structured scorecard: risk classification, scaling assessment (will this person grow with the environment or plateau), and explicit bias flags.

The doctrine is 7 layers deep. Each layer targets a specific evaluation dimension. The system forces the debrief conversation to address what actually matters instead of defaulting to gut feel.

## Design decision

Built explicit bias safeguards into the evaluation loop. The system flags when a score might be driven by pattern-matching on demographics rather than evidence. Most evaluation tools skip this entirely.
