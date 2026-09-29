export const PROJECT_CATEGORY_IDS = [
    "platform-engineering",
    "product-engineering",
    "client-delivery",
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
        id: "glovo-product-engineering",
        title: "Search, Ads & Quick-Commerce",
        organisation: "Glovo",
        description:
            "Engineering leadership across consumer Search, AdTech, Product Page, Catalog, and Quick-Commerce, balancing product delivery with reliability, maintainability, and long-term engineering investment.",
        categoryIds: ["product-engineering"],
        kind: "work",
        link: null,
        github: null,
        image: "/projects/glovo.png",
        tags: ["Search", "AdTech", "Machine learning", "Backend", "iOS", "Android", "Reliability"],
        artifacts: [
            {
                title: "Search & Product Page",
                description:
                    "Search experiences and shared Product Page capabilities, including integration with Delivery Hero services and extraction from the monolith.",
                link: null
            },
            {
                title: "Ads platform",
                description:
                    "Partner and brand advertising placements supported by stronger engineering practices and architectural investment.",
                link: null
            },
            {
                title: "Catalog & Quick-Commerce",
                description: "Backend and mobile product engineering across Catalog and Quick-Commerce experiences.",
                link: null
            }
        ]
    },
    {
        id: "mural-core-experiences",
        title: "Visual collaboration tool",
        organisation: "Mural",
        description:
            "Core visual-collaboration experiences spanning the canvas and native device apps, with engineering ownership of product quality and clearer decision-making across distributed teams.",
        categoryIds: ["product-engineering"],
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
        title: "Dashboard Ecosystem",
        organisation: "New Relic",
        description:
            "A multi-team product-and-platform organisation building customer-facing data products alongside shared visualisation and backend foundations used across New Relic.",
        categoryIds: ["platform-engineering", "product-engineering"],
        kind: "work",
        link: "https://newrelic.com/platform/dashboards",
        github: null,
        image: "/projects/new-relic.png",
        tags: ["React", "Node.js", "TypeScript", "AWS", "D3"],
        artifacts: [
            {
                title: "Dashboards, Data Explorer & Query Builder",
                description:
                    "Customer-facing data products, including a rebuilt Query Builder foundation and the incrementally delivered Data Explorer.",
                link: null
            },
            {
                title: "Vizco",
                description: "A declarative data-visualisation library extending D3 and used across product teams.",
                link: null
            },
            {
                title: "Shared dashboarding platform",
                description:
                    "Backend services and shared capabilities scaled to support a growing portfolio of products and usage.",
                link: null
            }
        ]
    },
    {
        id: "typeform-rendering-engine",
        title: "The Rendering Engine",
        organisation: "Typeform",
        description:
            "A modern React application that replaced an increasingly unmaintainable monolith and became responsible for displaying forms and collecting responses.",
        categoryIds: ["product-engineering"],
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
        description:
            "Bespoke election software commissioned for a specific electoral event, supporting the operational journey from voting through counting and reporting results on a fixed election date.",
        categoryIds: ["client-delivery"],
        kind: "work",
        link: "https://www.scytl.com/en/products/election-night-reporting/",
        github: null,
        image: "/projects/scytl.png",
        tags: ["JavaScript", "RFC", "Java", "Election systems"],
        artifacts: []
    },
    {
        id: "altran-client-product-engineering",
        title: "Unemployment platform",
        organisation: "Altran",
        description: "Two consultancy projects: a public-sector J2EE application and custom POS firmware.",
        categoryIds: ["client-delivery"],
        kind: "work",
        link: null,
        github: null,
        image: "/projects/altran.jpg",
        tags: ["Java", "J2EE", "C", "Firmware", "Oracle 10", "BEA WebLogic 8.1"],
        artifacts: [
            {
                title: "SICAS",
                description: "The J2EE application used to manage unemployment for the local government of Catalonia.",
                link: null
            },
            {
                title: "POS terminal firmware",
                description: "Custom firmware in C for Ingenico POS terminals.",
                link: null
            }
        ]
    }
]
