import { useState } from "react"

import { EXPERIENCE } from "../../data/EXPERIENCE"
import {
    EXPERIENCE_FILTERS,
    getExperienceAnchorId,
    getExperiencesForFilter,
    type ExperienceFilterId
} from "./experiences"

export default function ExperienceExplorer() {
    const [activeFilterId, setActiveFilterId] = useState<ExperienceFilterId>("all")
    const activeFilterLabel = EXPERIENCE_FILTERS.find((filter) => filter.id === activeFilterId)?.label
    const visibleExperiences = getExperiencesForFilter(EXPERIENCE, activeFilterId)

    return (
        <section id="experience" className="scroll-mt-24 pb-24 md:pb-32" aria-labelledby="experience-heading">
            <div className="mb-8 grid gap-5 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                    <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-coral">
                        Career evidence
                    </p>
                    <h2
                        id="experience-heading"
                        className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-ink md:text-5xl"
                    >
                        Working <span className="font-serif italic">experience</span>
                    </h2>
                    <p className="mt-4 font-mono text-xs text-ink-muted">cat ~/history/career.md · click to expand</p>
                </div>

                <div className="print-hidden md:col-span-5 md:justify-self-end">
                    <div className="flex flex-wrap gap-2" aria-label="Filter experience by role type">
                        {EXPERIENCE_FILTERS.map((filter) => {
                            const isActive = filter.id === activeFilterId
                            const count = getExperiencesForFilter(EXPERIENCE, filter.id).length

                            return (
                                <button
                                    key={filter.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveFilterId(filter.id)}
                                    className={`rounded-full border px-4 py-2.5 text-left text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
                                        isActive
                                            ? "border-ink bg-ink text-cream"
                                            : "border-ink/20 bg-white text-ink hover:border-sea hover:text-sea"
                                    }`}
                                >
                                    {filter.label} ({count})
                                </button>
                            )
                        })}
                    </div>
                    <p className="mt-3 text-xs text-ink-muted" aria-live="polite">
                        Showing {visibleExperiences.length} of {EXPERIENCE.length} roles
                    </p>
                </div>
            </div>

            <ol className="grid gap-4">
                {visibleExperiences.map((experience) => {
                    const anchorId = getExperienceAnchorId(experience)
                    const location =
                        experience.location === "Remote" && experience.workArrangement?.toLowerCase().includes("remote")
                            ? undefined
                            : experience.location
                    const metadata = [experience.companyType, experience.workArrangement, location]
                        .filter((value, index, values) => value && values.indexOf(value) === index)
                        .join(" · ")

                    return (
                        <li key={experience.id} id={anchorId} className="scroll-mt-24">
                            <details className="expandable-card group overflow-hidden rounded-3xl border border-ink/5 bg-white transition-[background-color,border-color,color,box-shadow] duration-300 open:bg-dark-turquoise open:text-cream open:shadow-soft">
                                <summary className="cursor-pointer list-none rounded-3xl p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral md:p-7 [&::-webkit-details-marker]:hidden">
                                    <span className="min-w-0">
                                        <span className="mb-2 flex flex-wrap items-center gap-2">
                                            <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink-muted transition-colors duration-300 group-open:text-coral">
                                                {experience.startDate} — {experience.endDate ?? "Present"}
                                            </span>
                                            {activeFilterId !== "all" && activeFilterLabel && (
                                                <span className="rounded-full bg-sea/10 px-2.5 py-1 text-[0.64rem] font-bold text-sea transition-colors duration-300 group-open:bg-cream/10 group-open:text-cream">
                                                    Matches {activeFilterLabel}
                                                </span>
                                            )}
                                        </span>
                                        <span className="block text-xl font-black tracking-[-0.025em] text-ink transition-colors duration-300 group-open:text-cream md:text-2xl">
                                            {experience.title}
                                        </span>
                                        <span className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                            <span className="text-lg font-black text-coral">{experience.company}</span>
                                            <span className="text-xs text-ink-muted transition-colors duration-300 group-open:text-cream/65 md:text-sm">
                                                · {metadata}
                                            </span>
                                        </span>
                                        <span className="mt-3 block max-w-3xl text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-open:text-cream/75">
                                            {experience.description}
                                        </span>
                                    </span>
                                </summary>

                                <div className="border-t border-ink/10 px-5 pb-6 pt-5 transition-colors duration-300 group-open:border-cream/15 md:px-7 md:pb-8">
                                    <h3 className="text-sm font-black uppercase tracking-[0.08em] text-ink transition-colors duration-300 group-open:text-coral">
                                        Evidence in this role
                                    </h3>
                                    <ul className="mt-3 grid gap-2 md:grid-cols-2">
                                        {experience.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex gap-3 text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-open:text-cream/75"
                                            >
                                                <span className="text-coral" aria-hidden="true">
                                                    →
                                                </span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className="mt-6 flex flex-wrap gap-2"
                                        aria-label={`${experience.title} themes`}
                                    >
                                        {experience.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink-muted transition-colors duration-300 group-open:bg-cream/10 group-open:text-cream/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </details>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}
