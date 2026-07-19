import { describe, expect, it } from "vitest"

import { EXPERIENCE } from "../data/EXPERIENCE"
import { getExperienceAnchorId, getExperiencesForFilter } from "./experience-filtering"

describe("CV experience", () => {
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
