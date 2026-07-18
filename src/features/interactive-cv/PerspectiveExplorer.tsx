import { useEffect, useState } from "react"

import { CV_PERSPECTIVES, type CvPerspectiveId } from "../../data/CV_PERSPECTIVES"
import {
    DEFAULT_CV_PERSPECTIVE_ID,
    getCvPerspective,
    getCvPerspectiveIdFromSearch,
    getSearchForCvPerspective
} from "./perspectives"

export default function PerspectiveExplorer() {
    const [activePerspectiveId, setActivePerspectiveId] = useState<CvPerspectiveId>(DEFAULT_CV_PERSPECTIVE_ID)
    const activePerspective = getCvPerspective(activePerspectiveId)

    useEffect(() => {
        const syncPerspectiveWithUrl = () => {
            setActivePerspectiveId(getCvPerspectiveIdFromSearch(window.location.search))
        }

        syncPerspectiveWithUrl()
        window.addEventListener("popstate", syncPerspectiveWithUrl)

        return () => window.removeEventListener("popstate", syncPerspectiveWithUrl)
    }, [])

    const selectPerspective = (perspectiveId: CvPerspectiveId) => {
        if (perspectiveId === activePerspectiveId) {
            return
        }

        setActivePerspectiveId(perspectiveId)

        const nextSearch = getSearchForCvPerspective(window.location.search, perspectiveId)
        const nextUrl = `${window.location.pathname}${nextSearch}${window.location.hash}`

        window.history.pushState(null, "", nextUrl)
    }

    return (
        <section className="pb-24 md:pb-32" aria-labelledby="perspective-heading">
            <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                    <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-coral">
                        Choose a perspective
                    </p>
                    <h2
                        id="perspective-heading"
                        className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-ink md:text-5xl"
                    >
                        Explore the same career through a different lens.
                    </h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-ink-muted md:col-span-5 md:text-base">
                    The facts stay the same. Each perspective foregrounds the evidence most relevant to what you want to
                    understand.
                </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)]">
                <div className="flex flex-col gap-2" aria-label="CV perspectives">
                    {CV_PERSPECTIVES.map((perspective, index) => {
                        const isActive = perspective.id === activePerspectiveId

                        return (
                            <button
                                key={perspective.id}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => selectPerspective(perspective.id)}
                                className={`group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
                                    isActive
                                        ? "border-ink bg-ink text-cream"
                                        : "border-ink/10 bg-white text-ink hover:border-sea"
                                }`}
                            >
                                <span>
                                    <span className="mb-1 block font-mono text-[0.62rem] uppercase tracking-[0.16em] opacity-60">
                                        0{index + 1}
                                    </span>
                                    <span className="font-bold">{perspective.label}</span>
                                </span>
                                <span
                                    className={`text-xl transition-transform group-hover:translate-x-1 ${
                                        isActive ? "text-coral" : "text-sea"
                                    }`}
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </button>
                        )
                    })}
                </div>

                <article
                    className="flex min-h-80 flex-col justify-between rounded-[2rem] bg-sea p-7 text-cream shadow-soft md:p-10"
                    aria-live="polite"
                >
                    <div>
                        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
                            {activePerspective.kicker}
                        </p>
                        <h3 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                            {activePerspective.title}
                        </h3>
                        <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/85 md:text-lg">
                            {activePerspective.summary}
                        </p>
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-2" aria-label={`${activePerspective.label} themes`}>
                        {activePerspective.signals.map((signal) => (
                            <li
                                key={signal}
                                className="rounded-full border border-cream/25 bg-cream/10 px-3 py-1.5 text-xs font-bold"
                            >
                                {signal}
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    )
}
