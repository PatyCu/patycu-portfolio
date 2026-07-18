import { describe, expect, it } from "vitest"

import { EXPERIENCE } from "../../data/EXPERIENCE"
import {
    experienceMatchesPerspective,
    getExperienceAnchorId,
    getExperiencesForFilter,
    getExperiencesForPerspective
} from "./experiences"

describe("CV experience", () => {
    it.each([
        ["leadership", 8],
        ["product-engineering", 8],
        ["ai-assisted-development", 1]
    ] as const)("returns the evidence related to the %s perspective", (perspectiveId, expectedCount) => {
        expect(getExperiencesForPerspective(EXPERIENCE, perspectiveId)).toHaveLength(expectedCount)
    })

    it("matches an experience against its configured perspectives", () => {
        const glovoExperience = EXPERIENCE[0]

        expect(experienceMatchesPerspective(glovoExperience, "leadership")).toBe(true)
        expect(experienceMatchesPerspective(glovoExperience, "ai-assisted-development")).toBe(false)
    })

    it("creates a stable deep-link target from the experience ID", () => {
        expect(getExperienceAnchorId(EXPERIENCE[0])).toBe("experience-glovo-engineering-manager")
    })

    it.each([
        ["all", 11],
        ["leader-of-leaders", 2],
        ["team-lead", 5],
        ["software-engineer", 3]
    ] as const)("returns the roles in the %s filter", (filterId, expectedCount) => {
        expect(getExperiencesForFilter(EXPERIENCE, filterId)).toHaveLength(expectedCount)
    })
})
