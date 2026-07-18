export const PROJECT_CATEGORY_IDS = [
    "product-and-ux",
    "platforms-and-data",
    "delivery-systems",
    "side-projects"
] as const

export type ProjectCategoryId = (typeof PROJECT_CATEGORY_IDS)[number]
export type ProjectKind = "work" | "side"

export interface ProjectArtifact {
    title: string
    description: string
    link: string | null
}

export interface PortfolioProject {
    id: string
    title: string
    organisation: string
    description: string
    categoryIds: ProjectCategoryId[]
    kind: ProjectKind
    link: string | null
    github: string | null
    image: string | null
    tags: string[]
    artifacts: ProjectArtifact[]
}

export const PROJECTS: PortfolioProject[] = [
    {
        id: "mural-core-experiences",
        title: "Mural core experiences",
        organisation: "Mural",
        description: "Core visual-collaboration experiences spanning the canvas and native device apps.",
        categoryIds: ["product-and-ux"],
        kind: "work",
        link: "https://mural.co",
        github: null,
        image: "/projects/mural.png",
        tags: ["React", "React Native", "TypeScript", "Cypress"],
        artifacts: [
            {
                title: "Canvas Core",
                description: "The product's core visual-collaboration experience.",
                link: "https://mural.co"
            },
            {
                title: "Devices",
                description: "Mural apps for iOS, Android, Windows, and Mac.",
                link: "https://mural.co"
            }
        ]
    },
    {
        id: "new-relic-product-ecosystem",
        title: "New Relic product ecosystem",
        organisation: "New Relic",
        description: "Customer-facing data products and shared visualisation foundations across New Relic.",
        categoryIds: ["product-and-ux", "platforms-and-data"],
        kind: "work",
        link: "https://newrelic.com/platform/dashboards",
        github: null,
        image: "/projects/new-relic.png",
        tags: ["React", "Node.js", "TypeScript", "AWS", "D3"],
        artifacts: [
            {
                title: "Dashboards",
                description: "Meaningful, custom visualisations of customer data.",
                link: "https://newrelic.com/platform/dashboards"
            },
            {
                title: "Data Explorer & Query Builder",
                description: "Flexible and visual ways for customers to explore and query their data.",
                link: "https://newrelic.com/platform/dashboards"
            },
            {
                title: "Vizco",
                description: "A declarative data-visualisation library extending D3 and used across product teams.",
                link: null
            }
        ]
    },
    {
        id: "typeform-rendering-engine",
        title: "The Rendering Engine",
        organisation: "Typeform",
        description: "The core product software responsible for rendering the forms customers create.",
        categoryIds: ["product-and-ux"],
        kind: "work",
        link: "https://www.typeform.com/",
        github: null,
        image: "/projects/typeform.png",
        tags: ["JavaScript", "React", "Vanilla JS"],
        artifacts: []
    },
    {
        id: "scytl-election-night-reporting",
        title: "Election Night Reporting",
        organisation: "Scytl",
        description: "A product that enables customers to report election results.",
        categoryIds: ["delivery-systems"],
        kind: "work",
        link: "https://www.scytl.com/en/products/election-night-reporting/",
        github: null,
        image: null,
        tags: ["JavaScript", "RFC", "Java"],
        artifacts: []
    },
    {
        id: "altran-sicas",
        title: "SICAS",
        organisation: "Altran",
        description: "Sistema d'Intermediació de les Comunitats Autònomes.",
        categoryIds: ["delivery-systems"],
        kind: "work",
        link: null,
        github: null,
        image: "/projects/soc.png",
        tags: ["Java", "Oracle 10", "BEA WebLogic 8.1"],
        artifacts: []
    }
]
