+++
title = "Interview Evaluator"
weight = 6
template = "projects/page.html"

[extra]
shortSummary = "Interviewer coaching and framework work connecting role standards, interview evidence, and practical feedback."
problem = "Interviewers rarely receive specific feedback on how their questions, evidence, and judgment affect a hiring decision."
summary = "A transcript-based coaching tool, with related framework work on written standards, evidence ownership, and how interviewers reach a supported judgment."
audience = "Interviewers, hiring managers, and Talent teams building stronger interviewing capability."
value = "Turns completed interviews into practical feedback that interviewers can use in the next conversation."
category = "Interviewer Enablement"
section = "talent"
year = 2025
order = 2
featured = false
detail = true
status = "active"
visibility = "private"
tags = ["Claude Code", "Interviewer Training", "Structured Hiring", "Bias Safeguards"]
metrics = ["Interviewer coaching", "Evidence-led assessment", "Framework design"]
contactHref = "mailto:rpbanerjee@outlook.com?subject=Interview%20Evaluator"
contactLabel = "Request walkthrough"
+++

## The problem

Interviewer training can stay abstract when it is separated from the interviews people actually conduct. Without a structured way to review their own conversations, interviewers have little visibility into what they do well, where they lose useful evidence, and what to improve next.

## What I built

Interview Evaluator reviews an interview transcript and gives the interviewer structured feedback on their strengths and areas for improvement. I built it as part of my interviewer training program so development could continue through the work itself.

The tool uses a seven-layer hiring doctrine to examine how the conversation was structured, how evidence was gathered, and where judgment may need more support. The feedback gives interviewers something concrete to practise in their next interview while helping hiring teams build a more consistent approach to assessment.

## The framework work around the tool

The newer work addresses the design of the interview itself: define the evidence a role requires, give each interviewer a clear area to examine, and connect the decision record to what was actually observed. A written standard should be shared before interviews begin, with changes visible to the team.

For AI-building roles, the inquiry follows a system through real use: what the person shipped, personally owned, operated, measured, and learned. Coachability is examined through reasoning: how someone explains a choice, considers a relevant challenge, and changes their view when better evidence warrants it.

The record needs to distinguish confirmed evidence, missing evidence, and demonstrated gaps. That helps the team identify a focused follow-up and gives interviewer coaching a concrete basis: which question produced useful evidence, where the conversation stopped short, and what to practise next.

This framework work is being developed separately from the transcript tool. The newer criteria are not presented here as implemented automated scoring features. The framework and interviewer guidance remain useful in a human-led interview and debrief.

Explore my approach to [finding and assessing AI-native talent](../../ai-native-talent/) and [building interview frameworks](../../advisory/#hiring-and-interview-architecture).

## Design decision

The tool supports interviewer development rather than replacing the interviewer or making the hiring decision. Explicit bias safeguards help surface moments where an assessment may rely on pattern matching rather than evidence.
