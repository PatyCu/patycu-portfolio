import { describe, expect, it } from "vitest"

import { PROJECTS } from "../data/PROJECTS"
import { SIDE_PROJECTS } from "../data/SIDE_PROJECTS"
import { getProjectFilter, getProjectsForFilter } from "./project-filtering"

const portfolioProjects = [...PROJECTS, ...SIDE_PROJECTS]

describe("CV projects", () => {
    it.each([
        ["all", 9],
        ["platform-engineering", 1],
        ["product-engineering", 4],
        ["client-delivery", 2],
        ["side-projects", 3]
    ] as const)("returns the projects in the %s filter", (filterId, expectedCount) => {
        expect(getProjectsForFilter(portfolioProjects, filterId)).toHaveLength(expectedCount)
    })

    it("returns the presentation label for a project filter", () => {
        expect(getProjectFilter("client-delivery").label).toBe("Client delivery")
    })
})
