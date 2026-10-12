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

The tool examines how the conversation was structured, how evidence was gathered, and where judgment may need more support. The feedback gives interviewers something concrete to practise in their next interview while helping hiring teams build a more consistent approach to assessment.

## How I use the feedback

I review the tool’s feedback with the interviewer against the role standard. Where did a follow-up uncover useful evidence? Where did the conversation move on before we understood the candidate’s contribution? What conclusion does the record support, and what remains unanswered? That gives the interviewer one or two things to practise in the next conversation.

A [worked coaching example](../../advisory/#from-an-impression-to-an-assessment) shows the wider practice. [Advisory](../../advisory/#define-great-before-designing-the-interview) explains how I develop the role standard before interviews begin.

## The framework work around the tool

The newer framework work defines the evidence a role requires, gives each interviewer an area to examine, and records confirmed evidence, unanswered questions, and demonstrated gaps separately. For AI-building roles, the inquiry follows a system through real use: what the person shipped, owned, operated, measured, and learned.

This framework is being developed separately from the transcript tool. The newer criteria are not presented as implemented automated scoring features. Interviewers and hiring leaders still interpret the evidence and own the decision.

Explore my approach to [finding and assessing AI-native talent](../../ai-native-talent/) and [building interview frameworks](../../advisory/#hiring-and-interview-architecture).

## Design decision

The tool supports interviewer development rather than replacing the interviewer or making the hiring decision. Explicit bias safeguards help surface moments where an assessment may rely on pattern matching rather than evidence.
