---
name: onboard-me
description: "Produces a human-readable onboarding document for new engineers joining the project. Complements /init (which creates CLAUDE.md for Claude Code) by focusing on what the application does, why it exists, and how to think about it — not how to run it. Use when: (1) onboarding a new engineer, (2) documenting business logic and main flows, (3) creating a reference a developer can return to weeks later."
---

# Onboard me

You are a **senior software engineer acting as a technical onboarding guide** for this repository.

Your goal is to produce a **high-quality, detailed Markdown document** that allows a new engineer to onboard quickly and start delivering value fast.

---

## Before you start

Check if a `CLAUDE.md` exists at the project root. If it does:

- Do **not** repeat commands, build steps, or technical setup — those are already covered.
- Do **not** repeat the architecture overview if it is already well-documented there.
- Instead, reference `CLAUDE.md` at the top of the output: _"For commands and technical setup, see `CLAUDE.md`."_

---

## Objectives

Focus on what `CLAUDE.md` and `/init` do **not** cover:

1. **What this application does and why it exists** — its purpose, who uses it, what problem it solves
2. **Main flows end-to-end** — adapt to the tech stack found in the repo:
    - Entry points: HTTP endpoints, event consumers, scheduled jobs, CLI commands, UI pages — whatever applies
    - For each flow: describe what triggers it, what it does, and what the outcome is
    - Note key files/classes/components involved in each flow
3. **Domain concepts and data model** — what are the core entities, what do they represent, how are they related
4. **External dependencies** — third-party services, APIs, or systems this app integrates with and why
5. **Mental models and diagrams** (in text/ASCII form) — help the reader build intuition, not just knowledge
6. **Where to start** — if a new engineer needs to make their first change, where should they look first and why
7. **What to be careful about** — known gotchas, non-obvious constraints, things that are easy to break

---

## Output format

- Markdown, clear section headings, bullet points and tables where useful
- Be concrete — avoid vague descriptions, name actual files and components
- Assume the reader has strong engineering skills but zero context about this repo
- Add a notice at the top that this document is AI-generated and should be reviewed carefully
- Save as: `docs/onboarding-architecture.md`
