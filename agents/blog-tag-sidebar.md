# Agent Prompt: Complete the Blog Tag Filtering Sidebar

## Context

This is an Astro portfolio/blog project using Tailwind CSS for styling.

The blog listing page (`src/pages/blog.astro`) has a partially implemented tag filtering sidebar.
Currently, the sidebar (`<nav>`) is hardcoded with placeholder links (`Tag 1`, `Tag 2`, `Tag 3`)
that point nowhere (`href="#"`). The goal is to make this fully dynamic and functional.

Blog posts live in `src/pages/posts/*.md` and each one declares a `tags` array in its frontmatter:

```md
---
tags: ["Engineering Management", "role description", "the 3 P's"]
---
```

The individual blog post page layout is at `src/layouts/BlogLayout.astro`.
The blog post card component used in the listing is at `src/components/BlogPost.astro`.

---

## Task

### 1. Create a reusable `TagList` component

Create `src/components/TagList.astro`. This component will be used in at least two places:
- The blog listing page sidebar (for filtering)
- Potentially each individual blog post page (to display that post's tags)

The component should accept the following props:
- `tags`: `string[]` — the list of tags to render
- `activeTag` (optional): `string` — the currently selected tag, if any, so it can be highlighted

Render each tag as a link. For the blog listing page context, a tag link should navigate to
`/blog?tag=<tag-name>` (URL-encoded). The component should visually distinguish the active tag.

Keep the component clean, typed (use Astro's `Props` interface), and self-documenting.

### 2. Update `src/pages/blog.astro`

- Derive the full list of unique tags from all posts (using `Astro.glob`).
- Read the active tag from the URL query parameter `tag` (use `Astro.url.searchParams`).
- Filter the displayed posts when a tag is active — only show posts that include that tag.
- Replace the hardcoded `<nav>` with the new `<TagList>` component, passing the derived tags
  and the active tag.
- Add a "clear filter" affordance when a tag is active (e.g., an "All posts" link that goes
  back to `/blog`).

### 3. (Optional but recommended) Surface tags on blog post pages

In `src/layouts/BlogLayout.astro`, render the post's tags using the same `<TagList>` component,
sourced from `frontmatter.tags`. This gives readers a way to discover related content by topic.

---

## Constraints & expectations

- Do not hardcode any tag names anywhere. All tags must be derived from post frontmatter.
- The `TagList` component must be the single source of truth for tag rendering — do not
  duplicate tag markup across pages.
- Preserve the existing two-column flex layout in `blog.astro` (posts 5/6, sidebar 1/6).
- Do not change the visual design of the rest of the page; only add to it.
- Use Tailwind utility classes consistently with the existing codebase style (dark background,
  `text-cyan-500` for interactive/accent elements, `text-slate-300/70` for secondary text).
- No JavaScript frameworks or client-side state — Astro's server-side rendering is sufficient
  for this feature. Tag filtering should work via URL query parameters and a full page reload.
- Code should be readable without comments: clear prop names, obvious component boundaries.
  Add a comment only where the logic is non-obvious (e.g., the deduplication step).

---

## Definition of Done

The task is not complete until all of the following are verified:

### 1. Project runs clean

Run the dev server and confirm there are no errors or warnings in the terminal output:

```bash
npm run dev
```

The server must start successfully with 0 errors and 0 warnings. Fix any TypeScript,
Astro, or Tailwind issues before considering the task done.

### 2. Feature verification (via HTTP)

Start the dev server in the background, then use `curl` to fetch the rendered HTML and
assert the expected output. The server runs at `http://localhost:4321` by default.

- **Tags are dynamic, not hardcoded:** fetch `/blog` and confirm the HTML contains none
  of the placeholder strings `Tag 1`, `Tag 2`, `Tag 3`. Confirm it does contain tag
  values that match the `tags` arrays declared in the post frontmatter files.
- **Tag filtering works:** fetch `/blog?tag=<a-real-tag>` (URL-encoded) and confirm the
  HTML only includes post titles/descriptions that belong to that tag, and excludes
  posts that do not carry it.
- **Active tag is marked up:** fetch `/blog?tag=<a-real-tag>` and confirm the active tag
  has a distinguishing attribute or class in the rendered HTML (e.g., `aria-current`,
  an `active` class, or an inline style) that is absent for the other tags.
- **Clear filter link is present when filtered:** fetch `/blog?tag=<a-real-tag>` and
  confirm the HTML contains a link back to `/blog` (the "All posts" affordance).
- **No tag produces a server error:** for every unique tag found in post frontmatter,
  fetch `/blog?tag=<tag>` and assert the response status is 200.
- **Tags on post pages (if implemented):** fetch an individual post URL and confirm its
  tags appear in the HTML and link to `/blog?tag=...`.

### 3. No regressions

Confirm that the rest of the blog page looks and behaves as before:
- The two-column layout is intact (posts left, sidebar right).
- Existing post cards render correctly.
- Navigation back to `/blog` from a post page still works.
