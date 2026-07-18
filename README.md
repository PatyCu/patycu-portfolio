# Paty Cuenca's Portfolio

Welcome to my portfolio 🙋🏻‍♀️

## 🥞 Tech stack

- Astro 5
- React 19 for the interactive CV
- TypeScript
- Tailwind CSS
- Vitest

## 📚 Resources

- Background from https://bg.ibelick.com/
- Fountsource: open source fonts
- Flowbite: open-source library of UI components built over tailwind
- Icons from https://svgl.vercel.app/

## 👩🏻‍💻 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`         | Installs dependencies                              |
| `pnpm dev`             | Starts local dev server at `localhost:4321`        |
| `pnpm test`            | Runs focused interactive CV unit tests             |
| `pnpm validate`        | Runs formatting, lint, tests, and production build |
| `pnpm build`           | Builds the production site to `./dist/`            |
| `pnpm preview`         | Preview your build locally, before deploying       |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check`   |
| `pnpm astro -- --help` | Get help using the Astro CLI                       |

## 🚀 Deploy to prod

The site is deployed to Production with [Netlify's CLI](https://docs.netlify.com/cli/get-started/).

1. Run a production build with `pnpm build`
2. Deploy that build with `ntl deploy --prod`
