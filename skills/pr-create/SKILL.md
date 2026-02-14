---
name: pull-request-create
description: "Create a draft PR using gh CLI. Compares diff with the default branch, extracts ticket/issue from branch name if present, and generates a professional PR description. Use when: (1) ready to open a pull request, (2) need to create PR with proper formatting, (3) want automated PR description from git diff, (4) creating draft PR for review."
---

# Pull Request Create

## Overview
Create a draft PR using `gh` CLI.
Compare diff with the default branch (main/master) only. Keep it concise and professional.

## When to Use
Use this command when you're ready to open a pull request for your changes. It automates PR creation with proper formatting based on your git diff.

## Process
1. **Ask user**: "Would you like to run a self-review checklist before creating the PR?"
   - If yes: Run the pull-request-self-review skill first
   - If no: Continue with PR creation
2. Detect default branch: `git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@'` or use `main`/`master` as fallback
5. Analyze the git diff against default branch (don't run tests)
6. Generate PR following the format below
7. Create draft PR: `gh pr create --draft`

## PR Format

**Title**: `Imperative summary` (or just `Imperative summary` 
- Example: `Remove feature toggle for new checkout flow`

**Description**: Focus on **why** and key changes
- What changed and why (1-2 sentences)
- Main modifications (bullet points if multiple)
- For architectural changes: be visual (diagrams/before-after)
- **Skip redundant sections** (Testing, Risks) unless the change is high-impact

**When to include Impact/Risks**:
- Breaking changes
- Performance implications
- Data migrations
- Security changes
- Otherwise: omit it

## Rules
- Professional and concise (not verbose)
- Prefer "why" over detailed "what"
- Let the code diff speak for itself
- No filler content