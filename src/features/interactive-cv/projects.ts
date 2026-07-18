import type { PortfolioProject, ProjectCategoryId } from "../../data/PROJECTS"

export type ProjectFilterId = "all" | Exclude<ProjectCategoryId, "side-projects">

export interface ProjectCategory {
    id: ProjectCategoryId
    label: string
}

export interface ProjectFilter {
    id: ProjectFilterId
    label: string
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
    { id: "product-and-ux", label: "Product & UX" },
    { id: "platforms-and-data", label: "Platforms & data" },
    { id: "delivery-systems", label: "Delivery systems" },
    { id: "side-projects", label: "Side projects" }
]

export const PROJECT_FILTERS: ProjectFilter[] = [
    { id: "all", label: "All" },
    ...PROJECT_CATEGORIES.filter(
        (category): category is ProjectCategory & { id: ProjectFilterId } => category.id !== "side-projects"
    )
]

export function getProjectsForFilter(projects: PortfolioProject[], filterId: ProjectFilterId): PortfolioProject[] {
    if (filterId === "all") {
        return projects
    }

    return projects.filter((project) => project.categoryIds.includes(filterId))
}

export function getProjectCategory(categoryId: ProjectCategoryId): ProjectCategory {
    const category = PROJECT_CATEGORIES.find((candidate) => candidate.id === categoryId)

    if (!category) {
        throw new Error(`Unknown project category: ${categoryId}`)
    }

    return category
}
