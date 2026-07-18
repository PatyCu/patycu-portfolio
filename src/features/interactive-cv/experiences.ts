import type { CvPerspectiveId } from "../../data/CV_PERSPECTIVES"
import type { ExperienceEntry, ExperienceRoleTypeId } from "../../data/EXPERIENCE"

export type ExperienceFilterId = "all" | ExperienceRoleTypeId

export interface ExperienceFilter {
    id: ExperienceFilterId
    label: string
}

export const EXPERIENCE_FILTERS: ExperienceFilter[] = [
    { id: "all", label: "All roles" },
    { id: "leader-of-leaders", label: "Leader of leaders" },
    { id: "team-lead", label: "Team lead" },
    { id: "software-engineer", label: "Software Engineer" }
]

export function experienceMatchesPerspective(experience: ExperienceEntry, perspectiveId: CvPerspectiveId): boolean {
    return experience.perspectives.includes(perspectiveId)
}

export function getExperiencesForPerspective(
    experiences: ExperienceEntry[],
    perspectiveId: CvPerspectiveId
): ExperienceEntry[] {
    return experiences.filter((experience) => experienceMatchesPerspective(experience, perspectiveId))
}

export function getExperiencesForFilter(
    experiences: ExperienceEntry[],
    filterId: ExperienceFilterId
): ExperienceEntry[] {
    if (filterId === "all") {
        return experiences
    }

    return experiences.filter((experience) => experience.roleTypes.includes(filterId))
}

export function getExperienceAnchorId(experience: ExperienceEntry): string {
    return `experience-${experience.id}`
}
