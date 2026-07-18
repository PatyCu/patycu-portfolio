import type { CvPerspectiveId } from "./CV_PERSPECTIVES"

export const EXPERIENCE_ROLE_TYPE_IDS = ["leader-of-leaders", "team-lead", "software-engineer"] as const

export type ExperienceRoleTypeId = (typeof EXPERIENCE_ROLE_TYPE_IDS)[number]

export type WorkArrangement = "Remote" | "Fully remote" | "Hybrid" | "On-site" | "On-site → Remote"

export interface ExperienceEntry {
    id: string
    title: string
    company: string
    companyType: string
    location: string
    workArrangement?: WorkArrangement
    startDate: string
    endDate: string | null
    description: string
    highlights: string[]
    tags: string[]
    perspectives: CvPerspectiveId[]
    roleTypes: ExperienceRoleTypeId[]
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        id: "glovo-engineering-manager",
        title: "Engineering Manager",
        company: "Glovo",
        companyType: "Delivery marketplace",
        location: "Barcelona, Spain",
        workArrangement: "Hybrid",
        startDate: "March 2024",
        endDate: null,
        description:
            "Engineering Manager for a team of backend and mobile software engineers in a fast-paced, high-bar environment.",
        highlights: [
            "Leads backend, iOS, and Android engineers.",
            "Balances product and engineering needs in fast-paced delivery.",
            "Owns team performance management in a high-bar environment.",
            "Maintains quality and operational excellence."
        ],
        tags: ["Hybrid", "Performance management", "Backend", "Mobile"],
        perspectives: ["leadership", "product-engineering"],
        roleTypes: ["team-lead"]
    },
    {
        id: "mural-senior-engineering-manager",
        title: "Senior Engineering Manager",
        company: "Mural",
        companyType: "Collaboration SaaS",
        location: "Remote",
        workArrangement: "Fully remote",
        startDate: "November 2021",
        endDate: "January 2024",
        description:
            "Software Engineering Lead for Devices and later Canvas Core, teams responsible for the product's core experience across devices.",
        highlights: [
            "Led 10 engineers and one Engineering Manager.",
            "Owned core product experiences across desktop and mobile devices.",
            "Mentored two individual contributors through the transition to Engineering Manager roles."
        ],
        tags: ["Mentor", "Remote", "Async work", "Scale down"],
        perspectives: ["leadership", "product-engineering"],
        roleTypes: ["leader-of-leaders"]
    },
    {
        id: "new-relic-senior-engineering-manager",
        title: "Senior Engineering Manager",
        company: "New Relic",
        companyType: "Observability",
        location: "Barcelona, Spain",
        workArrangement: "Remote",
        startDate: "September 2020",
        endDate: "October 2021",
        description:
            "Software Engineering Leader for Dashboards Ecosystem, a key New Relic initiative spanning customer products and internal libraries.",
        highlights: [
            "Led an ecosystem of three products and two internal libraries.",
            "Grew the organisation from one team to three teams.",
            "Led approximately 20 engineers and two Engineering Managers."
        ],
        tags: ["Observability", "Leader of leaders", "Hiring leaders", "Performance as a feature"],
        perspectives: ["leadership", "product-engineering"],
        roleTypes: ["leader-of-leaders"]
    },
    {
        id: "new-relic-engineering-manager",
        title: "Engineering Manager",
        company: "New Relic",
        companyType: "Observability",
        location: "Barcelona, Spain",
        workArrangement: "On-site → Remote",
        startDate: "April 2018",
        endDate: "August 2020",
        description: "Led the engineering team building the future of New Relic's UI platform.",
        highlights: [
            "Led five engineers and collaborated closely with a product designer.",
            "Guided the team through the transition from on-site to remote work during the pandemic.",
            "Worked across data visualisation, design systems, and platform foundations.",
            "Hired and onboarded engineers for a React-based platform team."
        ],
        tags: ["Hiring", "Onboarding", "Data visualisation", "Design system", "Platform team", "React", "D3"],
        perspectives: ["leadership", "product-engineering"],
        roleTypes: ["team-lead"]
    },
    {
        id: "typeform-engineering-manager",
        title: "Engineering Manager",
        company: "Typeform",
        companyType: "Form builder",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "January 2017",
        endDate: "April 2018",
        description:
            "Managed a team of software engineers, ensuring they had what they needed to grow the product and advance their careers.",
        highlights: [
            "Balanced product delivery with individual career development.",
            "Supported people management, conflict resolution, and performance calibration.",
            "Led engineers working with React, Vanilla JavaScript, and testing practices."
        ],
        tags: [
            "People management",
            "React",
            "Conflict resolution",
            "9-box calibration",
            "Vanilla JS",
            "Testing pyramid"
        ],
        perspectives: ["leadership", "product-engineering"],
        roleTypes: ["team-lead"]
    },
    {
        id: "caixabank-technical-project-manager",
        title: "Technical Project Manager",
        company: "CaixaBank Tech",
        companyType: "Financial services",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "July 2015",
        endDate: "December 2016",
        description:
            "Technical Project Manager in CaixaBank's Innovation department, designing proofs of concept for new opportunities.",
        highlights: [
            "Designed proofs of concept to assess technical and business viability.",
            "Coordinated project plans and internal and external contributors.",
            "Explored NLP, machine learning, ontologies, and IBM Watson."
        ],
        tags: ["NLP", "Machine learning", "Ontologies", "IBM Watson", "Elasticsearch", "Neo4j"],
        perspectives: ["leadership", "ai-assisted-development"],
        roleTypes: []
    },
    {
        id: "scytl-engineering-manager",
        title: "Engineering Manager",
        company: "Scytl",
        companyType: "Election technology",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "April 2014",
        endDate: "June 2015",
        description: "Directly responsible for delivering a group of projects through cross-functional teams.",
        highlights: [
            "Led cross-functional teams across related projects.",
            "Coordinated dependencies with other teams and project groups.",
            "Identified delivery risks and managed contingencies."
        ],
        tags: ["Conflict resolution", "Burnout management", "Delivery management"],
        perspectives: ["leadership"],
        roleTypes: ["team-lead"]
    },
    {
        id: "altran-engineering-manager",
        title: "Engineering Manager",
        company: "Altran",
        companyType: "Technology consultancy",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "January 2012",
        endDate: "October 2014",
        description: "Planned, executed, and delivered several agile and non-agile projects.",
        highlights: [
            "Managed people, resources, delivery, and scope.",
            "Worked across projects with different delivery methodologies."
        ],
        tags: ["Conflict resolution", "Burnout management", "Delivery management"],
        perspectives: ["leadership"],
        roleTypes: ["team-lead"]
    },
    {
        id: "altran-software-engineer",
        title: "Software Engineer",
        company: "Altran",
        companyType: "Technology consultancy",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "May 2007",
        endDate: "December 2013",
        description: "Developed several backend and frontend software projects.",
        highlights: [
            "Built backend systems with Java, EJB, Oracle, and WebLogic.",
            "Built web interfaces with JSP, JavaScript, HTML, and CSS."
        ],
        tags: ["Java", "EJB", "Oracle 10g", "WebLogic 8.1", "JSP", "JavaScript", "HTML", "CSS"],
        perspectives: ["product-engineering"],
        roleTypes: ["software-engineer"]
    },
    {
        id: "spoc-software-engineer",
        title: "Software Engineer",
        company: "SPOC",
        companyType: "Payment technology",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "January 2007",
        endDate: "December 2007",
        description: "Developed firmware for Ingénico Point of Sale terminals using C and the Ingedev platform.",
        highlights: ["Built embedded software for payment terminals.", "Worked with C in the Ingedev environment."],
        tags: ["C", "Firmware", "Ingedev", "POS"],
        perspectives: ["product-engineering"],
        roleTypes: ["software-engineer"]
    },
    {
        id: "spoc-software-engineering-intern",
        title: "Software Engineering Intern",
        company: "SPOC",
        companyType: "Payment technology",
        location: "Barcelona, Spain",
        workArrangement: "On-site",
        startDate: "September 2005",
        endDate: "December 2006",
        description: "Developed web experiences and maintained CMS systems and web applications.",
        highlights: ["Built web interfaces with HTML, CSS, and XML.", "Maintained content-management systems."],
        tags: ["HTML", "CSS", "XML", "CMS"],
        perspectives: ["product-engineering"],
        roleTypes: ["software-engineer"]
    }
]
