import { useEffect, useState } from "react"

import type { CvPerspectiveId } from "../../data/CV_PERSPECTIVES"
import ExperienceExplorer from "./ExperienceExplorer"
import PerspectiveExplorer from "./PerspectiveExplorer"
import ProjectExplorer from "./ProjectExplorer"
import { DEFAULT_CV_PERSPECTIVE_ID, getCvPerspectiveIdFromSearch, getSearchForCvPerspective } from "./perspectives"

export default function InteractiveCv() {
    const [activePerspectiveId, setActivePerspectiveId] = useState<CvPerspectiveId>(DEFAULT_CV_PERSPECTIVE_ID)

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
        <>
            <PerspectiveExplorer activePerspectiveId={activePerspectiveId} onSelectPerspective={selectPerspective} />
            <ExperienceExplorer />
            <ProjectExplorer />
        </>
    )
}
