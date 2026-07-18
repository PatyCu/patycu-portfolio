import type { PortfolioProject, ProjectCategoryId } from "../../data/PROJECTS"

export type ProjectFilterId = "all" | ProjectCategoryId

export interface ProjectFilter {
    id: ProjectFilterId
    label: string
}

export const PROJECT_FILTERS: ProjectFilter[] = [
    { id: "all", label: "All" },
    { id: "platform-engineering", label: "Platform engineering" },
    { id: "product-engineering", label: "Product engineering" },
    { id: "client-delivery", label: "Client delivery" },
    { id: "side-projects", label: "Side projects" }
]

export function getProjectsForFilter(projects: PortfolioProject[], filterId: ProjectFilterId): PortfolioProject[] {
    if (filterId === "all") {
        return projects
    }

    return projects.filter((project) => project.categoryIds.includes(filterId))
}

export function getProjectFilter(filterId: ProjectFilterId): ProjectFilter {
    const filter = PROJECT_FILTERS.find((candidate) => candidate.id === filterId)

    if (!filter) {
        throw new Error(`Unknown project filter: ${filterId}`)
    }

    return filter
}
