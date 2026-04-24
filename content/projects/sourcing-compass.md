+++
title = "Sourcing Compass"
weight = 3
template = "projects/page.html"

[extra]
shortSummary = "An AI talent mapper that turns a job title into a full sourcing landscape in under 10 seconds."
summary = "Type a role, get a structured map of target companies, adjacent talent pools, wildcard bets, and ranked job titles, with live connection lines showing how nodes relate across categories. Built for recruiters who know that sourcing strategy starts before the Boolean search."
category = "Talent Intelligence Tool"
section = "flagship"
year = 2026
order = 3
featured = true
detail = true
status = "flagship"
visibility = "public"
tags = ["React", "Groq", "Llama 3.3", "Talent Intelligence", "Open Source"]
metrics = ["4 sourcing dimensions per query", "5 to 10 second generation time", "Zero backend, fully static"]
homepage = "https://rishi-banerjee1.github.io/Sourcing_Compass/"
github = "https://github.com/rishi-banerjee1/Sourcing_Compass"
+++

## The problem

Sourcing strategy begins with a question that most tools skip entirely: *where does this talent actually come from?* Job boards give you who's actively looking. LinkedIn gives you who exists. Neither tells you which companies to target, which non-obvious pools carry relevant experience, or which adjacent industries are worth a Boolean search.

That mapping usually happens in a recruiter's head, informally, before any search begins. It takes experience, domain knowledge, and an hour of desk research most teams don't have.

## What I built

Sourcing Compass is a one-page React app. You describe the role (title, seniority, company context, key skills, exclusions) and the AI returns four structured categories:

- **Target companies**: the most likely sources, with fit scores and tags
- **Adjacent talent pools**: consulting firms, research labs, adjacent verticals that carry transferable experience
- **Wildcard bets**: non-obvious, high-signal sources for when the standard pools are exhausted
- **Target titles**: exact and variant job titles with match confidence scores, ready to paste into a search

Nodes are connected. Hover any card and dashed lines show which companies map to which titles, which adjacent pools feed which targets. The entire result set is a graph, not a list.

## Why it matters

This replaces a specific and repeatable part of every sourcing kick-off: the landscape-mapping step that should happen before any Boolean search. It's fast enough to do live on a hiring manager call, specific enough to change actual search behaviour, and open enough that any recruiter can use it without a budget conversation.

The combination of zero backend (fully static, Groq API key in the browser), instant deployment via GitHub Pages, and a UI designed for recruiters rather than engineers makes it unusually low-friction to adopt.

## Signals

- Public product, live demo, full how-to README
- Covers a gap in the recruiting toolkit that most teams paper over with experience rather than tools
- Demonstrates that useful AI products for HR can be built fast, shipped free, and used immediately
