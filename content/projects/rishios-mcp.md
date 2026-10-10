+++
title = "RishiOS MCP"
weight = 5
template = "projects/page.html"

[extra]
shortSummary = "Talent evaluation tools for role-specific assessment, scorecard validation, and explicit evidence checks."
problem = "A shared hiring framework is hard to apply consistently when role expectations, evidence, and assessment decisions are disconnected."
summary = "An MCP server that applies role- and level-specific assessment weights, validates scorecards, and checks recorded evidence against a defined hiring rule."
audience = "Talent leaders and hiring teams seeking consistent standards across a growing hiring organization."
value = "Makes assessment criteria and rule-based results explicit for a hiring team to examine."
category = "Talent Evaluation"
section = "talent"
year = 2026
order = 1
featured = false
detail = true
status = "flagship"
visibility = "private"
tags = ["TypeScript", "MCP SDK", "Zod", "Talent OS", "Evaluation"]
metrics = ["Role and level weighting", "Scorecard validation", "Evidence checks"]
contactHref = "mailto:rpbanerjee@outlook.com?subject=RishiOS%20MCP%20walkthrough"
contactLabel = "Request walkthrough"
+++

## The problem

RishiOS addresses a problem I care about: keeping a shared hiring standard connected to the notes, assessments, and decisions people make every day.

## What I built

The current MCP server brings together assessment tools and reusable prompts. Its implemented tools support:

- Applying assessment weights for the role and level.
- Calculating a result from supplied rubric scores.
- Validating scorecards and normalising invalid score values.
- Providing assessment guidance and checks for misleading signals.
- Retrieving an evolving hiring rule and evaluating recorded evidence against it.

The newer rule-based work connects the written requirements for a job with evidence of AI-building experience and coachability. It can surface an incomplete job definition or an outstanding assessment step alongside the result and its reasons. The criteria are still being refined.

Built in TypeScript with the MCP SDK and Zod, the server makes these checks available within an MCP workflow. It works with the scores and observations supplied to it; it does not independently establish that a candidate’s claims are true.

## How it fits my practice

I want the hiring team to be able to explain how it reached a view. A visible framework gives us something to question: whether the criteria fit the work, whether the evidence supports the assessment, and where another conversation would help.

That connects RishiOS to my work on [defining great and developing interviewers](../../advisory/#define-great-before-designing-the-interview). The software applies the recorded rules. People remain responsible for interpreting the evidence and making the hiring decision.

## Where the work stands

The current implementation focuses on evaluation, scorecard checks, and an evolving evidence rule. The broader talent operating-system specification describes a wider direction. Automated learning from overrides, drift detection, and a persistent audit trail are not claimed here as delivered features.
