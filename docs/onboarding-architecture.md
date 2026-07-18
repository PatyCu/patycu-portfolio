# Architecture and Onboarding Guide

## Product

This repository contains Paty Cuenca's portfolio and blog. The portfolio is evolving into an interactive CV that supports
both a fast recruiter-friendly overview and deeper exploration of professional evidence.

The design reference is the Lovable project in `PatyCu/sea-whispers-code`, but this repository keeps its own content,
architecture, accessibility requirements, and deployment model.

## Current Stack

| Concern         | Technology                                    |
| --------------- | --------------------------------------------- |
| Framework       | Astro 5                                       |
| Interactive UI  | React 19 through Astro's React 4 integration  |
| Styling         | Tailwind CSS 4                                |
| Language        | TypeScript with Astro's strict configuration  |
| Content         | Typed TypeScript data and Markdown blog posts |
| Font            | Barlow through Fontsource                     |
| Deployment      | Netlify adapter and CLI                       |
| Package manager | pnpm 10                                       |
| Quality         | Astro Check, ESLint, Prettier, and Vitest     |

There is no database, runtime API, or authentication.

## Current Runtime Model

Astro owns the document, routes, layouts, and build. Portfolio content is stored in `src/data/`, imported by section
components, and composed in `src/pages/index.astro`.

```text
src/data/*.ts
    -> Astro components
    -> src/pages/index.astro
    -> astro check and astro build
    -> Netlify output
```

The homepage server-renders the interactive CV's default perspective and hydrates that feature for URL-backed perspective
selection. Blog routes remain framework-free and are rendered from files under `src/pages/` and `src/pages/posts/`.

## Target Interactive-CV Architecture

Astro remains the application shell. React is limited to the coordinated interactive CV experience.

```text
Typed portfolio content
    -> CV domain types and pure selection/filtering rules
    -> Astro page and layout composition
    -> server-rendered React CV feature
    -> selective hydration in the browser
```

The expected responsibility boundaries are:

| Layer               | Responsibility                                                    |
| ------------------- | ----------------------------------------------------------------- |
| `src/data/`         | Factual content, stable IDs, and relationships between evidence   |
| CV domain modules   | Types, filters, selections, and URL-state mapping                 |
| Astro pages/layouts | Routing, metadata, page shell, blog, and composition              |
| Astro UI components | Static or progressively enhanced presentation                     |
| React CV feature    | Shared interactive state and coordinated CV exploration           |
| Integration modules | Future external services with typed inputs, outputs, and failures |

React components will still be server-rendered so the initial HTML contains the important CV content. Hydration must enhance
rather than unlock the core information.

## Interaction Principles

- The default view communicates the complete professional profile without requiring interaction.
- Perspective and competency filters emphasize evidence; they do not rewrite or silently remove professional history.
- Roles, projects, and competencies use stable IDs for relationships rather than duplicated display strings.
- Meaningful filter and URL-state logic stays outside presentation components and receives focused tests.
- Shareable state uses URLs only when it improves navigation and does not create fragile links.
- Print output provides a conventional CV representation independent of interactive state.
- AI-backed conversation is not part of the initial architecture. It would require a separate decision covering APIs,
  secrets, cost, abuse prevention, privacy, and grounding.

## Repository Structure

```text
public/                       Static assets served as-is
src/
  components/                 Reusable Astro components
    blog/                     Blog presentation
    experience/               Career presentation
    layout/                   Header and footer
    projects/                 Work and side-project presentation
    recommendations/          Testimonials
    ui/                       Small reusable primitives
  data/                       Typed portfolio content
  icons/                      Astro SVG components
  img/                        Source-managed images
  layouts/                    Page document shells
  pages/                      File-based routes and Markdown posts
  styles/                     Global Tailwind entry point and tokens
astro.config.mjs              Astro, Tailwind, and Netlify configuration
eslint.config.mjs             Maintained-source lint rules and ignores
package.json                  Commands and dependencies
tsconfig.json                 Strict TypeScript configuration
```

Interactive CV folders should be added only when the corresponding boundary exists in code. Do not create placeholder
layers in anticipation of later phases.

## Routes

| Source                  | Route      | Purpose                             |
| ----------------------- | ---------- | ----------------------------------- |
| `src/pages/index.astro` | `/`        | Portfolio and future interactive CV |
| `src/pages/blog.astro`  | `/blog`    | Blog listing and tag filtering      |
| `src/pages/posts/*.md`  | `/posts/*` | Individual blog posts               |

## Content Flow

Experience, projects, side projects, and recommendations live in typed arrays under `src/data/`. Components should not own
factual portfolio content. When the interactive CV introduces perspectives, competencies, and evidence relationships, those
also belong in typed data or domain modules rather than JSX.

Images placed in `public/` use root-relative URLs such as `/projects/example.png`.

## Development and Validation

```bash
pnpm install
pnpm dev
pnpm validate
pnpm preview
```

`pnpm validate` checks formatting, maintained-source lint rules, focused unit tests, Astro/TypeScript diagnostics, and the
production build. Generated output such as `.astro/`, `.netlify/`, and `dist/` is excluded from source linting and
formatting.

Vitest tests non-trivial CV domain behavior independently from presentation components. Add tests alongside meaningful
filtering, state transitions, and URL mapping rather than testing framework implementation details for coverage alone.

## Deployment

Netlify builds the project with `pnpm build`. Manual production deployment uses:

```bash
pnpm build && ntl deploy --prod
```

Production deployment is outside the normal implementation phase and requires an explicit request.
