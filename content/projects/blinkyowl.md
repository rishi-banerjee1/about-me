+++
title = "BlinkyOwl"
weight = 10
template = "projects/page.html"

[extra]
shortSummary = "Automated kids video pipeline with safety checks, run telemetry, and a public dashboard."
summary = "A video pipeline for educational YouTube Shorts: generation, checks before upload, publishing, and run telemetry. The channel and dashboard show public output from a private system."
audience = "Education and media operators building safe, repeatable short-form video programs."
value = "Connects video production, pre-upload checks, and run telemetry in one workflow."
category = "Autonomous Media System"
section = "archive"
year = 2026
order = 10
featured = false
detail = true
status = "active"
visibility = "private"
tags = ["Python", "Remotion", "YouTube API", "Observability", "Run Feedback"]
metrics = ["4 safety gates", "Daily autonomous run", "Live dashboard"]
youtube = "https://youtube.com/@BlinkyOwl"
dashboard = "https://tinyhero-obs.surge.sh/"
contactHref = "mailto:rpbanerjee@outlook.com?subject=BlinkyOwl%20walkthrough"
contactLabel = "Request walkthrough"
+++

## The problem

Educational video creation is repetitive, expensive, and hard to sustain consistently. A single short normally means ideation, scripting, illustration, voice, edit, upload, and analytics review. I wanted to explore how those steps could work together in a repeatable pipeline.

## What I built

BlinkyOwl connects topic selection, narration, visual planning, audio, rendering, upload, and analytics in one pipeline. Safety checks run before upload. Run telemetry helps identify where the next cycle needs adjustment.

## Why it matters

This project brought several interests together for me:

- multi-step orchestration
- strict kids-content safety gates
- observability and post-run telemetry
- run feedback used to adjust later work while keeping safety checks in place

## What is public

The repo is private. The public channel and dashboard show output and run status:

- [YouTube channel](https://youtube.com/@BlinkyOwl)
- [Observability dashboard](https://tinyhero-obs.surge.sh/)

The internal implementation and detailed controls are not public.
