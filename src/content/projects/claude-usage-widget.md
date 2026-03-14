---
title: Claude Usage Widget
shortSummary: Native macOS menubar widget that tracks Claude usage limits in real time. Single-file Swift app, no dependencies, Homebrew install.
summary: Floating macOS widget that shows current usage, pace against time elapsed, and countdown to reset. One-command Homebrew install.
category: Developer Tooling
section: flagship
year: 2026
order: 2
featured: true
detail: true
status: flagship
visibility: public
tags:
  - Swift
  - SwiftUI
  - macOS
  - Claude API
  - Homebrew
metrics:
  - No dependencies
  - Homebrew install
  - Auto-update support
homepage: https://rishi-banerjee1.github.io/claude-usage-widget/
github: https://github.com/rishi-banerjee1/claude-usage-widget
homebrew: https://github.com/rishi-banerjee1/homebrew-ai-tools
---
## The problem

Claude usage limits reset on a timer. You hit the limit mid-workflow, the session ends, and context is lost. There was no native way to see how close you were.

## What I built

A native macOS floating widget. Shows current usage percentage, pace against elapsed time, countdown to reset, and plain-English status. Single Swift file, no dependencies, no Electron wrapper.

## Distribution

Install via Homebrew: `brew install rishi-banerjee1/ai-tools/claude-usage-widget`. Auto-updates through the tap. Product site with screenshots and install instructions at the homepage link above.

## Implementation decisions

Went native SwiftUI instead of a web wrapper. The app stays in the menubar, uses minimal resources, and does not require a background process. Single-file architecture keeps the build trivial.
