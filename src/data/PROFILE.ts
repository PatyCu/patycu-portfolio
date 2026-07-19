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
        "I lead autonomous, accountable engineering teams that deliver quality software incrementally. I am a product engineer at heart: I care about quality from code and architecture to product thinking, polished UI, and thoughtful UX.",
    summary: [
        "I have spent 20 years working in technology: 8 years as a software engineer and 14 years leading engineering teams, including mentoring other Engineering Managers.",
        "I am a Senior Engineering Manager with 14+ years of experience leading software engineering teams, after 8 years as a software developer. As a leader of leaders, I have built and scaled multi-team engineering organisations, developed Engineering Managers, and led cross-functional teams across consumer products, SaaS, and engineering platforms.",
        "I am particularly effective at bringing structure to ambiguity, restoring team health, strengthening ownership, and aligning engineering execution with product and business priorities. My leadership experience spans mobile, backend, and frontend platforms, observability, and collaborative SaaS products.",
        "I am a product engineer at heart. I care about software engineering as a craft: quality at code and architecture level, product thinking, polished UI, and thoughtful UX.",
        "I build autonomous, accountable teams that deliver quality software incrementally, learn from their mistakes, and have the support they need to grow. I am exploring AI-assisted development hands-on so I can understand the shift in our craft and help the teams I lead navigate it thoughtfully."
    ],
    currentFocus: "Exploring AI-assisted development",
    highlights: [
        {
            label: "Experience",
            value: "20",
            valueAccent: { text: "y", tone: "coral" },
            description:
                "20 years in technology, building products people rely on—from early ideas to polished, scalable experiences. Product engineering is my craft, and I care about getting every layer right."
        },
        {
            label: "Leadership",
            value: "14",
            valueAccent: { text: "y", tone: "sea" },
            description:
                "Building and scaling multi-team engineering organisations, hiring and developing Engineering Managers, and aligning cross-functional teams around product and business priorities."
        },
        {
            label: "Community",
            value: "10",
            valueAccent: { text: "+", tone: "ink" },
            description:
                "Years spent mentoring new leaders and helping build more inclusive teams, including founding Glovo's Women in Tech Circle."
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
