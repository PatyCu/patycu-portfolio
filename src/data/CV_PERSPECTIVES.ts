export const CV_PERSPECTIVE_IDS = ["leadership", "product-engineering", "ai-assisted-development"] as const

export type CvPerspectiveId = (typeof CV_PERSPECTIVE_IDS)[number]

export interface CvPerspective {
    id: CvPerspectiveId
    label: string
    kicker: string
    title: string
    summary: string
    signals: string[]
}

export const CV_PERSPECTIVES: CvPerspective[] = [
    {
        id: "leadership",
        label: "Engineering leadership",
        kicker: "People, systems, and delivery",
        title: "I build the conditions for engineering teams to do their best work.",
        summary:
            "My focus is helping autonomous, accountable teams deliver quality software while growing their careers. I have led individual contributors, Engineering Managers, and multi-team product areas through growth, change, and demanding delivery environments.",
        signals: ["Autonomous teams", "Leader of leaders", "Mentoring", "Operational excellence"]
    },
    {
        id: "product-engineering",
        label: "Product engineering",
        kicker: "Quality from architecture to interface",
        title: "I care about the whole product, not only the layer I happen to own.",
        summary:
            "I approach software engineering as a craft: sound architecture and maintainable code should support useful products with thoughtful UI and UX. My experience spans product teams, platforms, design systems, data visualisation, and frontend foundations.",
        signals: ["Product thinking", "Architecture", "UI and UX", "Frontend craft"]
    },
    {
        id: "ai-assisted-development",
        label: "AI-assisted development",
        kicker: "Learning by building",
        title: "I am using AI to expand what I can design, build, and review.",
        summary:
            "This interactive CV is my current experiment: an AI-driven project delivered in small, reviewable phases. I use AI as an engineering collaborator while keeping architectural decisions, code quality, manual verification, and final judgment firmly human-led.",
        signals: ["Human-led decisions", "Iterative delivery", "Code review", "AI tooling"]
    }
]
