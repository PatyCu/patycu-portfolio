import { describe, expect, it } from "vitest"

import { PROJECTS } from "../../data/PROJECTS"
import { SIDE_PROJECTS } from "../../data/SIDE_PROJECTS"
import { getProjectCategory, getProjectsForFilter } from "./projects"

describe("CV projects", () => {
    it.each([
        ["all", 5],
        ["product-and-ux", 3],
        ["platforms-and-data", 1],
        ["delivery-systems", 2]
    ] as const)("returns the work projects in the %s filter", (filterId, expectedCount) => {
        expect(getProjectsForFilter(PROJECTS, filterId)).toHaveLength(expectedCount)
    })

    it("keeps side projects as a separate collection", () => {
        expect(SIDE_PROJECTS).toHaveLength(3)
        expect(SIDE_PROJECTS.every((project) => project.categoryIds.includes("side-projects"))).toBe(true)
    })

    it("returns the presentation label for every project category", () => {
        expect(getProjectCategory("platforms-and-data").label).toBe("Platforms & data")
        expect(getProjectCategory("side-projects").label).toBe("Side projects")
    })
})
