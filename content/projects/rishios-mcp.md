+++
title = "RishiOS MCP"
weight = 5
template = "projects/page.html"

[extra]
shortSummary = "Talent operating system that encodes hiring doctrine into software: scoring, JD generation, calibration, and drift detection."
problem = "Hiring standards drift when role definition, assessment evidence, calibration, and decision notes live in separate workflows."
summary = "MCP server with 6 operating modes. Scores candidates, generates JDs, builds exec briefs, structures notes, runs calibration, and learns from overrides."
audience = "Talent leaders and hiring teams seeking consistent standards across a growing hiring organization."
value = "Turns hiring doctrine into repeatable, auditable operating workflows."
category = "Talent Operating System"
section = "talent"
year = 2026
order = 1
featured = false
detail = true
status = "flagship"
visibility = "private"
tags = ["TypeScript", "MCP SDK", "Zod", "Talent OS", "Evaluation"]
metrics = ["6 operating modes", "Drift detection", "Audit trail"]
contactHref = "mailto:rpbanerjee@outlook.com?subject=RishiOS%20MCP%20walkthrough"
contactLabel = "Request walkthrough"
+++

## The problem

RishiOS addresses a problem I care about: keeping a shared hiring standard connected to the notes, assessments, and decisions people make every day.

## What I built

RishiOS encodes the operating logic directly into an MCP server. Six modes:

- Score candidates on a shared framework
- Generate job descriptions aligned to the rubric
- Build executive briefs from raw context
- Structure loose interview notes into consistent formats
- Generate calibration references
- Learn from override patterns without losing the base doctrine

Built in TypeScript with the MCP SDK and Zod for runtime validation. Every decision is auditable. The system tracks what changed and why.

## Trade-off

I built RishiOS around a specific hiring framework. That makes its assumptions visible, but it also means a team needs to examine those assumptions before adopting it. I would want that conversation before putting it into a hiring workflow.
