import { describe, expect, it } from "vitest"

import {
    DEFAULT_CV_PERSPECTIVE_ID,
    getCvPerspective,
    getCvPerspectiveIdFromSearch,
    getSearchForCvPerspective,
    isCvPerspectiveId
} from "./perspectives"

describe("CV perspectives", () => {
    it("recognises only configured perspective IDs", () => {
        expect(isCvPerspectiveId("leadership")).toBe(true)
        expect(isCvPerspectiveId("product-engineering")).toBe(true)
        expect(isCvPerspectiveId("unknown")).toBe(false)
        expect(isCvPerspectiveId(null)).toBe(false)
    })

    it("uses leadership when the URL does not contain a valid perspective", () => {
        expect(getCvPerspectiveIdFromSearch("")).toBe(DEFAULT_CV_PERSPECTIVE_ID)
        expect(getCvPerspectiveIdFromSearch("?view=unknown")).toBe(DEFAULT_CV_PERSPECTIVE_ID)
    })

    it("reads a valid perspective from the URL", () => {
        expect(getCvPerspectiveIdFromSearch("?source=linkedin&view=product-engineering")).toBe("product-engineering")
    })

    it("updates perspective state without discarding unrelated query parameters", () => {
        expect(getSearchForCvPerspective("?source=linkedin", "ai-assisted-development")).toBe(
            "?source=linkedin&view=ai-assisted-development"
        )
        expect(getSearchForCvPerspective("?source=linkedin&view=product-engineering", "leadership")).toBe(
            "?source=linkedin"
        )
    })

    it("returns the content for the selected perspective", () => {
        expect(getCvPerspective("product-engineering").label).toBe("Product engineering")
    })
})
