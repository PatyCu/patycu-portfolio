import type { PortfolioProject } from "./PROJECTS"

export const SIDE_PROJECTS: PortfolioProject[] = [
    {
        id: "oriol-and-paty-wedding",
        title: "Oriol i Paty's Wedding",
        organisation: "Personal project",
        description: "My wedding website and registry, built with React and deployed with Netlify.",
        categoryIds: ["side-projects"],
        kind: "side",
        link: "https://oriolipaty.com",
        github: "https://github.com/PatyCu/wedding",
        image: "/projects/oriolipaty_screenshot.jpg",
        tags: ["React", "Netlify"],
        artifacts: []
    },
    {
        id: "portfolio-v1",
        title: "this.portfolio · v1",
        organisation: "Personal project",
        description:
            "The first version of this portfolio, handcrafted with Astro and TypeScript and deployed with Netlify. The screenshot captures that original static portfolio.",
        categoryIds: ["side-projects"],
        kind: "side",
        link: "https://patycuenca.com",
        github: "https://github.com/PatyCu/patycu-portfolio",
        image: "/projects/patycuenca_screenshot.jpg",
        tags: ["Astro", "TypeScript", "Netlify", "Handcrafted"],
        artifacts: []
    },
    {
        id: "portfolio-interactive-cv",
        title: "this.portfolio · interactive CV",
        organisation: "Personal project",
        description:
            "The AI-driven evolution of this portfolio into an interactive CV: a more sophisticated, evidence-led way to explore my experience, projects, and product-engineering craft. Built iteratively with AI as an engineering collaborator and currently in development.",
        categoryIds: ["side-projects"],
        kind: "side",
        link: null,
        github: "https://github.com/PatyCu/patycu-portfolio",
        image: "/projects/portfolio-interactive-cv.png",
        tags: ["Astro", "TypeScript", "Interactive CV", "AI-assisted development"],
        artifacts: []
    }
]
