export interface ProfileLink {
    label: string
    href: string
}

export interface ProfileHighlight {
    label: string
    value: string
    valueAccent?: {
        text: string
        tone: "coral" | "sea" | "ink" | "white"
    }
    description: string
}

export interface Profile {
    name: string
    shortName: string
    role: string
    location: string
    eyebrow: string[]
    headline: {
        lead: string
        accent: string
    }
    introduction: string
    summary: string[]
    currentFocus: string
    highlights: ProfileHighlight[]
    links: {
        linkedin: ProfileLink
        github: ProfileLink
    }
}

export const PROFILE: Profile = {
    name: "Paty Cuenca",
    shortName: "paty.cuenca",
    role: "Senior Engineering Manager",
    location: "Barcelona",
    eyebrow: ["Engineering Leader", "Software engineering as a craft", "Barcelona"],
    headline: {
        lead: "Building high-performing teams",
        accent: "— and staying close to the craft."
    },
    introduction:
        "I build effective engineering organisations that turn ambiguous product and technical challenges into clear priorities, healthy teams, and maintainable products.",
    summary: [
        "I am a Senior Engineering Manager with 14+ years leading software engineering teams and 8 years of prior experience as a software developer.",
        "As a leader of leaders, I have scaled multi-team organisations across observability, frontend and developer platforms, search, and SaaS. I have developed Engineering Managers and senior engineers while leading cross-functional teams in distributed environments.",
        "I am a product-minded engineering leader with strong technical foundations. I care about building healthy, maintainable products, making sound architectural trade-offs, and balancing product delivery with reliability and long-term engineering investment.",
        "I am particularly effective at turning ambiguous cross-team problems into clear priorities, restoring team health, strengthening ownership, and aligning engineering execution with product and business goals. I stay close to the craft, including exploring AI-assisted development hands-on so I can help teams adopt it thoughtfully."
    ],
    currentFocus: "Exploring AI-assisted development",
    highlights: [
        {
            label: "Experience",
            value: "22",
            valueAccent: { text: "+", tone: "coral" },
            description:
                "Years across software engineering and engineering leadership, building and evolving products from their technical foundations through reliable customer experiences."
        },
        {
            label: "Leadership",
            value: "14",
            valueAccent: { text: "+", tone: "sea" },
            description:
                "Building and scaling multi-team engineering organisations, hiring and developing Engineering Managers, and aligning cross-functional teams around product and business priorities."
        },
        {
            label: "Community",
            value: "10",
            valueAccent: { text: "+", tone: "ink" },
            description:
                "Years spent mentoring new leaders and helping build more inclusive teams, including co-founding Glovo's Women in Tech Circle with the CTO."
        },
        {
            label: "Off-hours Book Nerd",
            value: "650",
            valueAccent: { text: "+", tone: "white" },
            description:
                "A conservative estimate of books read. Retired paper-book hoarder; my Kindle became my best friend 15 years ago. Elves and fae still have my heart. Sue me."
        }
    ],
    links: {
        linkedin: {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/patriciacuenca/"
        },
        github: {
            label: "GitHub",
            href: "https://github.com/PatyCu"
        }
    }
}
