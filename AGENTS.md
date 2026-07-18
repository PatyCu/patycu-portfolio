# AGENTS.md

This file guides Codex when working in this repository. For architecture details, see
[docs/onboarding-architecture.md](docs/onboarding-architecture.md).

## Product Direction

This portfolio is evolving from a static personal site into an interactive CV. The experience must work at two levels:

- A visitor can understand Paty's profile and strengths in roughly 30 seconds without interacting.
- A recruiter or hiring manager can explore roles, competencies, projects, and supporting evidence in greater depth.

Sophistication must improve comprehension. Avoid interactions that hide essential information, create navigation dead ends,
or exist only as visual novelty.

## Commands

```bash
pnpm dev           # Development server at http://localhost:4321
pnpm build         # Astro type-check followed by a production build
pnpm preview       # Preview the production build locally
pnpm typecheck     # Astro and TypeScript checks only
pnpm lint          # ESLint for maintained source and configuration files
pnpm test          # Focused unit tests for interactive CV domain behavior
pnpm format        # Format maintained files with Prettier
pnpm format:check  # Check formatting without modifying files
pnpm validate      # Formatting, lint, tests, type-check, and production build
```

Vitest protects interactive CV domain behavior such as filtering, state transitions, and URL mapping. Keep tests focused on
logic that is valuable to protect; do not test framework implementation details for coverage alone.

Deploy to production with `pnpm build && ntl deploy --prod`.

## Architecture

Astro remains responsible for routing, layouts, metadata, blog content, server rendering, and the production build. The
interactive CV will use React only where persistent client-side state or coordinated interactions justify it.

The intended homepage boundary is:

```text
src/data/*.ts
    -> typed CV domain and selection logic
    -> Astro page composition and server-rendered React components
    -> selective client hydration for interactive CV behavior
    -> production output
```

The initial HTML must contain the important CV content. Client-side JavaScript enhances the experience; it must not be the
only way to access core information.

Keep these responsibilities separate:

- `src/data/`: factual portfolio content and stable identifiers
- Domain modules: types, relationships, filtering, and selection rules
- Astro components and pages: document structure, routing, metadata, and composition
- React feature components: coordinated interactive state and presentation
- External integrations: isolated behind typed modules with explicit failure behavior

Do not migrate the blog or static routes to React merely for consistency. A runtime API, database, authentication, or AI
chat feature requires a separate architectural decision.

## Engineering Principles

- Use staff-level judgment: optimize for correctness, accessibility, maintainability, and clear trade-offs.
- Prefer simple, explicit solutions and existing project patterns before adding abstractions.
- Keep changes scoped to the current phase. Do not modify unrelated files.
- Give modules one cohesive responsibility and a clear reason to change.
- Keep factual content out of presentation components.
- Keep filtering and mapping logic pure and independently testable.
- Treat pages as composition roots rather than containers for domain logic.
- Preserve strict TypeScript. Do not use `any` to bypass modeling work.
- Use semantic HTML first and add JavaScript only when it materially improves the experience.
- Treat keyboard behavior, focus, reduced motion, responsive layout, and readable no-interaction content as requirements.
- Do not invent professional claims, outcomes, metrics, or relationships to satisfy a design.
- Explain material architectural decisions and their trade-offs.

## Iterative Workflow

Portfolio redesign work stays on `codex/lovable-design-iteration` unless the user explicitly chooses another branch.

For each phase, complete work in this order:

1. State the exact scope and expected behavior.
2. Inspect the relevant code and configuration.
3. Implement only the agreed slice.
4. Run `pnpm validate` and any focused tests that exist for the changed behavior.
5. Start the site and provide a concise manual verification checklist, changed-file list, and architectural notes.
6. Pause for the user's UI test and code review.
7. Address feedback and rerun validation.
8. Commit only after the user approves the phase.

Never stage or commit unrelated pre-existing changes. Treat console errors and warnings as part of the current phase: resolve
them or explain why a safe fix is out of scope.

Ask for confirmation before adding a production dependency. When a task changes runtime, package-manager, or global-tool
requirements, verify the local environment matches before marking the task complete.

Before starting a new branch of work, sync with `origin/main` and verify the baseline build:

```bash
git fetch origin main
git log HEAD..origin/main --oneline
git rebase origin/main  # only when behind and the worktree is safe to rebase
pnpm build
```

Never push without a clean `pnpm build`.

## Manual Verification Standard

Every visual or interactive phase must include focused checks for:

- Desktop and mobile layouts at representative widths
- Keyboard-only navigation and visible focus
- Browser back, forward, reload, and deep links when URL state is affected
- Reduced-motion behavior when animation changes
- External links and image failure states when relevant
- Browser console errors and warnings
- Blog and static-route regressions when shared layouts change
- Production preview for final or deployment-sensitive phases

## Project Conventions

- Content changes belong in typed files under `src/data/`.
- New blog posts are Markdown files under `src/pages/posts/`.
- Public images belong in `public/` and use root-relative paths such as `/projects/example.png`.
- Use `pnpm`; do not add another lockfile.
- Do not add comments unless complex logic cannot be made clearer through naming or structure.
