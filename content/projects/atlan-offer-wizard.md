+++
title = "Atlan Offer Wizard"
weight = 4
template = "projects/page.html"

[extra]
shortSummary = "Personalized offer pages generated from ATS data. Turns a transactional moment into a candidate experience artifact."
summary = "I built personalised offer ceremony pages that turn ATS context into a three-act candidate narrative. Triggered from Ashby at roughly $0.006 per page."
category = "Talent Experience Product"
section = "talent"
year = 2026
order = 6
featured = false
detail = true
status = "flagship"
visibility = "private"
tags = ["Cloudflare Workers", "Hono", "Claude", "Ashby API", "Hiring"]
metrics = ["~$0.006 per page", "3-act offer narrative", "ATS-triggered generation"]
contactHref = "mailto:rpbanerjee@outlook.com?subject=Atlan%20Offer%20Wizard%20walkthrough"
contactLabel = "Request walkthrough"
+++

## The problem

Most companies handle the offer stage with flat PDFs and generic email templates. It is one of the highest-leverage moments in hiring (the candidate is deciding), and we were treating it like admin.

## What I built

The system triggers from ATS state in Ashby, pulls interview and offer context, and generates a personalized page structured as a three-act story:

- who the candidate is and what stood out
- the connection between the candidate and Atlan
- the offer, presented with context

Recruiters get a shareable link instead of a copy-paste email. Each page costs roughly $0.006 to generate. Runs on Cloudflare Workers + Hono.

## How it changed things

I turned an inconsistent communication moment into a structured candidate experience. Offer content no longer begins as a blank email, and generation is automatic once the ATS state changes.
