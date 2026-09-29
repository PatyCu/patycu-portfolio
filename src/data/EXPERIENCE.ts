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
    roleTypes: ExperienceRoleTypeId[]
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        id: "glovo-senior-engineering-manager",
        title: "Senior Engineering Manager, Ads & Search",
        company: "Glovo",
        companyType: "Delivery marketplace",
        location: "Barcelona, Spain",
        workArrangement: "Hybrid",
        startDate: "January 2026",
        endDate: null,
        description:
            "Leads engineering across Glovo's Search and AdTech domains, managing one Engineering Manager and 17 engineers across two teams.",
        highlights: [
            "Owns engineering execution, organisational health, performance management, and leadership development across two business-critical domains.",
            "Partners with Product, Data, Commercial, and Engineering leaders to shape priorities and trade-offs around user impact and usage evidence.",
            "Reset Search engineering priorities to balance product delivery with long-term investment, enabling Product Page capabilities to move out of the monolith and increasing reuse of shared capabilities.",
            "Led Ads through repeated production incidents, pausing product delivery to restore stability, strengthen engineering practices, and address architectural issues before returning to sustained delivery.",
            "Built AI-assisted workflows that synthesise evidence from delivery, code review, technical documentation, and project work to improve performance-review quality and preparation efficiency.",
            "Co-founded the Women in Tech Circle with the CTO and leads company-wide sessions on career development, performance, and practical AI adoption."
        ],
        tags: [
            "Leader of leaders",
            "Search",
            "AdTech",
            "Machine learning",
            "Architecture",
            "Reliability",
            "AI-assisted workflows"
        ],
        roleTypes: ["leader-of-leaders"]
    },
    {
        id: "glovo-engineering-manager",
        title: "Engineering Manager",
        company: "Glovo",
        companyType: "Delivery marketplace",
        location: "Barcelona, Spain",
        workArrangement: "Hybrid",
        startDate: "March 2024",
        endDate: "December 2025",
        description:
            "Led backend and cross-functional teams across Catalog and Quick-Commerce, including backend, iOS, and Android engineers, with accountability for people, delivery, team health, quality, and reliability.",
        highlights: [
            "Turned around Catalog after an extended period without stable engineering management, resetting ways of working and ownership while preserving strong engineering standards.",
            "Addressed long-standing interpersonal conflicts and performance issues across Catalog and Quick-Commerce; achieved the highest manager-support score in the subsequent engagement survey.",
            "Mentored a newly appointed Engineering Manager and a manager transitioning from another professional discipline."
        ],
        tags: ["Team turnaround", "Catalog", "Quick-Commerce", "Performance management", "Backend", "iOS", "Android"],
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
            "Led the Devices group of 10 React Native engineers and one Engineering Manager, and Canvas Core, a team of 10 frontend engineers working with React and TypeScript, across three time zones.",
        highlights: [
            "Mentored two senior individual contributors through successful transitions into Engineering Manager roles.",
            "Led the transition from reliance on manual QA to end-to-end engineering ownership of code and product quality.",
            "Increased team autonomy by clarifying ownership and decision-making, reducing dependence on the most senior engineers and creating broader leadership opportunities.",
            "Established clear priorities and operating frameworks through significant organisational change and company scale-down."
        ],
        tags: ["Leader of leaders", "React Native", "React", "TypeScript", "Quality ownership", "Remote", "Scale down"],
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
        endDate: "November 2021",
        description:
            "Scaled and led the Dashboards Ecosystem organisation, owning Dashboards, Data Explorer, Query Builder, and the shared data-visualisation and dashboarding platform.",
        highlights: [
            "Grew the ecosystem into a multi-team organisation while maintaining product quality, strong team health, and 95% engineering retention.",
            "Hired and onboarded engineers and Engineering Managers across seniority levels, and integrated an existing backend team into the group.",
            "Turned Query Builder from a high-maintenance legacy codebase into a healthier foundation by addressing technical debt, outdated frontend dependencies, and limited test coverage.",
            "Scaled the shared backend platform and delivered Data Explorer on time and at the expected quality through visible weekly increments."
        ],
        tags: [
            "Observability",
            "Leader of leaders",
            "Hiring",
            "Platform scaling",
            "Technical debt",
            "Incremental delivery"
        ],
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
            "Led the transition from UI Platform to the DataViz and Dashboards mandate when development of the design system was paused, maintaining engagement through the change in direction.",
            "Surfaced the capacity gap created by competing product and platform responsibilities, helping secure executive sponsorship to grow the team.",
            "Built and delivered the next-generation Dashboards product while hiring, onboarding, and establishing the new team; received a company award recognising the impact."
        ],
        tags: ["Hiring", "Onboarding", "Data visualisation", "Design system", "Platform team", "React", "D3"],
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
            "Managed a cross-functional engineering and QA team responsible for core Typeform product capabilities.",
        highlights: [
            "Resolved long-standing team conflicts that were affecting collaboration and execution, rebuilding a healthier working environment.",
            "Influenced company priorities to restart the Rendering Engine programme after a previous unsuccessful attempt, replacing an increasingly unmaintainable monolith with a modern React application.",
            "Restructured the programme around clear milestones and incremental delivery, reducing risk, enabling earlier validation, and successfully launching the new Rendering Engine."
        ],
        tags: [
            "People management",
            "React",
            "Conflict resolution",
            "9-box calibration",
            "Vanilla JS",
            "Testing pyramid"
        ],
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
        roleTypes: ["software-engineer"]
    }
]
