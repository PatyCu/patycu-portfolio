import { useState } from "react"

import { PROJECTS, type PortfolioProject } from "../../data/PROJECTS"
import { SIDE_PROJECTS } from "../../data/SIDE_PROJECTS"
import { PROJECT_FILTERS, getProjectFilter, getProjectsForFilter, type ProjectFilterId } from "./projects"

const placeholderThemes = [
    "bg-dark-turquoise text-cream",
    "bg-white text-ink",
    "bg-sea text-cream",
    "bg-coral text-ink"
]

const portfolioProjects = [...PROJECTS, ...SIDE_PROJECTS]

function getPlaceholderIndex(projectId: string): number {
    return portfolioProjects
        .slice(
            0,
            portfolioProjects.findIndex((project) => project.id === projectId)
        )
        .filter((project) => !project.image).length
}

interface ProjectCardProps {
    project: PortfolioProject
    placeholderIndex: number
}

function ProjectCard({ project, placeholderIndex }: ProjectCardProps) {
    const categories = project.categoryIds.map((categoryId) => getProjectFilter(categoryId).label).join(" · ")
    const placeholderTheme = placeholderThemes[placeholderIndex % placeholderThemes.length]

    return (
        <details className="expandable-card group overflow-hidden rounded-3xl border border-ink/5 bg-white transition-[background-color,border-color,color,box-shadow] duration-300 open:bg-dark-turquoise open:text-cream open:shadow-soft">
            <summary className="cursor-pointer list-none rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral [&::-webkit-details-marker]:hidden">
                {project.image ? (
                    <div className="project-visual relative aspect-[16/10] overflow-hidden bg-sand">
                        <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                        />
                        <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent px-6 pb-5 pt-16 text-cream"
                            aria-hidden="true"
                        >
                            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-coral">
                                {project.kind === "work" ? project.organisation : "Side project"}
                            </p>
                            <p className="mt-2 max-w-[17rem] text-2xl font-black leading-none tracking-[-0.04em]">
                                {project.title}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className={`project-visual flex aspect-[16/10] flex-col justify-between p-6 ${placeholderTheme}`}
                        aria-hidden="true"
                    >
                        <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] opacity-70">
                            {project.organisation}
                        </p>
                        <p className="max-w-[12rem] text-2xl font-black leading-none tracking-[-0.04em]">
                            {project.title}
                        </p>
                    </div>
                )}
                <span className="sr-only">View details for {project.title}</span>
            </summary>

            <div className="border-t border-ink/10 p-6 transition-colors duration-300 group-open:border-cream/15 md:p-7">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-coral">
                    {project.kind === "work" ? project.organisation : "Side project"}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-ink transition-colors duration-300 group-open:text-cream">
                    {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-open:text-cream/75">
                    {project.description}
                </p>
                <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-muted transition-colors duration-300 group-open:text-cream/65">
                    {categories}
                </p>

                {project.artifacts.length > 0 && (
                    <ul className="mt-5 space-y-4 border-t border-ink/10 pt-5 transition-colors duration-300 group-open:border-cream/15">
                        {project.artifacts.map((artifact) => (
                            <li key={artifact.title}>
                                <h4 className="text-sm font-black leading-tight text-ink transition-colors duration-300 group-open:text-cream">
                                    {artifact.title}
                                    {artifact.link && (
                                        <a
                                            href={artifact.link}
                                            className="ml-2 font-mono text-xs text-sea underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                                            aria-label={`View ${artifact.title}`}
                                        >
                                            ↗
                                        </a>
                                    )}
                                </h4>
                                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted transition-colors duration-300 group-open:text-cream/75">
                                    {artifact.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} skills`}>
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink-muted transition-colors duration-300 group-open:bg-cream/10 group-open:text-cream/70"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                {(project.link || project.github) && (
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sea transition-colors duration-300 group-open:border-cream/15 group-open:text-coral">
                        {project.link && (
                            <a
                                href={project.link}
                                className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                            >
                                View project ↗
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                            >
                                GitHub ↗
                            </a>
                        )}
                    </div>
                )}
            </div>
        </details>
    )
}

export default function ProjectExplorer() {
    const [activeFilterId, setActiveFilterId] = useState<ProjectFilterId>("all")
    const visibleProjects = getProjectsForFilter(portfolioProjects, activeFilterId)

    return (
        <section id="projects" className="scroll-mt-24 pb-24 md:pb-32" aria-labelledby="projects-heading">
            <div className="mb-8 grid gap-5 md:grid-cols-12 md:items-end">
                <div className="md:col-span-6">
                    <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-coral">
                        Selected evidence
                    </p>
                    <h2
                        id="projects-heading"
                        className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-ink md:text-5xl"
                    >
                        Projects <span className="font-serif italic">& Labs</span>
                    </h2>
                    <p className="mt-4 font-mono text-xs text-ink-muted">
                        find ~/work -type f · sorted by evidence · click to expand
                    </p>
                </div>
                <div className="print-hidden md:col-span-6 md:justify-self-end">
                    <div className="flex flex-wrap gap-2" aria-label="Filter artifacts by type">
                        {PROJECT_FILTERS.map((filter) => {
                            const isActive = filter.id === activeFilterId

                            return (
                                <button
                                    key={filter.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveFilterId(filter.id)}
                                    className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
                                        isActive
                                            ? "border-ink bg-ink text-cream"
                                            : "border-ink/20 bg-white text-ink hover:border-sea hover:text-sea"
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            )
                        })}
                    </div>
                    <p className="mt-3 text-xs text-ink-muted" aria-live="polite">
                        Showing {visibleProjects.length} of {portfolioProjects.length} artifacts
                    </p>
                </div>
            </div>

            <ol className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                    <li key={project.id}>
                        <ProjectCard project={project} placeholderIndex={getPlaceholderIndex(project.id)} />
                    </li>
                ))}
            </ol>
        </section>
    )
}
