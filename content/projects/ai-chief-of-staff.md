+++
title = "AI Chief of Staff"
weight = 7
template = "projects/page.html"

[extra]
shortSummary = "Triage assistant for Slack, Gmail, and Calendar. Classifies work, drafts responses, tracks items to resolution."
summary = "Reads across Slack, Gmail, and Calendar. Classifies incoming work by urgency, drafts responses, and maintains a durable ledger of open items."
category = "Agentic Workflow"
section = "active"
year = 2026
order = 7
featured = false
detail = true
status = "active"
visibility = "private"
tags = ["Python", "Slack", "Gmail", "Google Calendar", "Agentic triage"]
metrics = ["Morning briefing", "P0 monitor", "Durable ledger"]
contactHref = "mailto:rpbanerjee@outlook.com?subject=AI%20Chief%20of%20Staff"
contactLabel = "Request walkthrough"
+++

## The problem

Important work gets buried under message volume. Slack, Gmail, and calendar invites act like three separate inboxes. Triage is a daily tax.

## What I built

The system reads across all three sources, classifies work by urgency and action type, drafts responses where useful, and keeps a ledger of what is still open versus resolved.

Runs on scheduled automations. Maintains durable state between runs. It knows what was flagged yesterday and whether it was closed. Morning briefings surface the P0 items before the day starts.

## Why a ledger matters

Most triage agents produce summaries. Summaries are disposable. You read them once and the context is gone. A ledger persists. It tracks items to resolution and creates accountability.
