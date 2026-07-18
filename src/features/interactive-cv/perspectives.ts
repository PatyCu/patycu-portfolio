import {
    CV_PERSPECTIVES,
    CV_PERSPECTIVE_IDS,
    type CvPerspective,
    type CvPerspectiveId
} from "../../data/CV_PERSPECTIVES"

export const DEFAULT_CV_PERSPECTIVE_ID: CvPerspectiveId = "leadership"

export function isCvPerspectiveId(value: string | null): value is CvPerspectiveId {
    return value !== null && CV_PERSPECTIVE_IDS.some((perspectiveId) => perspectiveId === value)
}

export function getCvPerspective(id: CvPerspectiveId): CvPerspective {
    const perspective = CV_PERSPECTIVES.find((candidate) => candidate.id === id)

    if (!perspective) {
        throw new Error(`Unknown CV perspective: ${id}`)
    }

    return perspective
}

export function getCvPerspectiveIdFromSearch(search: string): CvPerspectiveId {
    const perspectiveId = new URLSearchParams(search).get("view")

    return isCvPerspectiveId(perspectiveId) ? perspectiveId : DEFAULT_CV_PERSPECTIVE_ID
}

export function getSearchForCvPerspective(search: string, perspectiveId: CvPerspectiveId): string {
    const searchParams = new URLSearchParams(search)

    if (perspectiveId === DEFAULT_CV_PERSPECTIVE_ID) {
        searchParams.delete("view")
    } else {
        searchParams.set("view", perspectiveId)
    }

    const nextSearch = searchParams.toString()

    return nextSearch ? `?${nextSearch}` : ""
}
