---
name: pull-request-self-review
description: "Checklist for self-reviewing code BEFORE opening a pull request. Covers functionality, code quality, security, and project conventions. Use when: (1) about to open a pull request, (2) want to ensure changes meet quality standards, (3) need a systematic review before team review, (4) catching issues early before code review."
---

# Pull Request Self Review

## Overview
Checklist for self-reviewing your code BEFORE opening a pull request. Use this to catch issues early and speed up the review process.

## When to Use
Before creating or updating a pull request.

## Process
1. Run through each category below against the current diff (`git diff` against the default branch)
2. Flag any items that fail or need attention
3. Present a summary to the user with pass/fail per category
4. If all pass: confirm ready for PR creation
5. If issues found: list them and ask the user how to proceed

## Review Categories

### Functionality
- [ ] Code does what it's supposed to do
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] No obvious bugs or logic errors

### Code Quality
- [ ] Code is readable and well-structured
- [ ] Functions are small and focused
- [ ] Variable names are descriptive
- [ ] No code duplication
- [ ] Follows project conventions (check `CLAUDE.md`)

### Security
- [ ] No obvious security vulnerabilities
- [ ] Input validation is present where needed
- [ ] Sensitive data is handled properly
- [ ] No hardcoded secrets or credentials

## Rules
- Be specific about what fails and why
- Suggest fixes, not just problems
- Focus on the diff only — don't review unchanged code