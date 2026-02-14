# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For full architecture reference, see [docs/onboarding-architecture.md](docs/onboarding-architecture.md).

---

## Commands

```bash
pnpm dev           # Dev server at http://localhost:4321 (hot reload)
pnpm build         # Type-check (astro check) then build to ./dist/
pnpm preview       # Preview production build locally
pnpm astro check   # Type-check only, without building
pnpm exec prettier --write .  # Format all files (no pnpm script for this)
```

There is **no test suite** in this project.

Deploy to production: `pnpm build && ntl deploy --prod`

---

## Architecture

**Static Site Generation (SSG) only.** No server, no runtime API, no database. Astro pre-renders everything to HTML at build time. Zero client-side JavaScript is shipped by default (no `client:*` directives are used anywhere).

**Data flow:**

```
src/data/*.ts  →  imported by components  →  composed in src/pages/index.astro  →  astro build  →  ./dist/
```

All content (experience, projects, recommendations) lives in typed TypeScript arrays in `src/data/`. To update content, edit those files — components don't need to change.

**Routing:** File-based. `src/pages/index.astro` → `/`, `src/pages/blog.astro` → `/blog`, `src/pages/posts/*.md` → `/posts/*`.

**Dark mode:** Tailwind's `darkMode: "class"` strategy is used. The `<html>` tag in `src/layouts/Layout.astro` carries the `dark` class — this must remain for all `dark:` utility classes to apply. Custom background color: `dark-turquoise: "#323949"`.

**Build = type-check + build:** `pnpm build` runs `astro check && astro build`. TypeScript errors fail the build before any output is produced.

---

## Skills

### onboard-me

Trigger automatically when the user asks to understand the codebase, onboard to the project, get an overview, explain the architecture, or produce technical documentation.

Use the `/onboard-me` skill — it generates `docs/onboarding-architecture.md`.

### pull-request-create

Trigger automatically when the user asks to create a PR, open a pull request, or push changes for review.

Use the `/pull-request-create` skill. It will offer a self-review first, then create a draft PR via `gh` CLI.

### pull-request-self-review

Trigger automatically when the user asks to review their own changes, do a self-review, or check code before opening a PR.

Use the `/pull-request-self-review` skill. It runs a checklist against the current diff.

---

## Project Conventions

- **Content changes:** Edit `src/data/` files only — no need to touch components
- **New blog posts:** Add `.md` files to `src/pages/posts/`
- **Images:** Place in `public/`, reference with root-relative paths (e.g., `/projects/foo.png`)

## Code Style

- **No comments unless truly necessary.** Code should be self-explanatory. Only add comments for genuinely complex logic that cannot be made clearer through naming or structure.
