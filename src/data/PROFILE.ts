export interface ProfileLink {
    label: string
    href: string
}

export interface ProfileHighlight {
    label: string
    value: string
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
        "I am a product engineer at heart. I care about software engineering as a craft: quality at code and architecture level, product thinking, polished UI, and thoughtful UX.",
        "I build autonomous, accountable teams that deliver quality software incrementally, learn from their mistakes, and have the support they need to grow. I am exploring AI-assisted development hands-on so I can understand the shift in our craft and help the teams I lead navigate it thoughtfully."
    ],
    currentFocus: "Exploring AI-assisted development",
    highlights: [
        {
            label: "Experience",
            value: "20y",
            description:
                "Working in technology, including 14 years leading engineering teams and 8 years as a software engineer."
        },
        {
            label: "Mentorship",
            value: "10+",
            description:
                "New and aspiring Engineering Managers supported, plus ICs growing their leadership towards management and Staff+ roles."
        },
        {
            label: "Travel",
            value: "24",
            description:
                "Countries visited. I understand cultures through food and wine; sparkling by the sea is my happy place."
        },
        {
            label: "Books",
            value: "650+",
            description:
                "A conservative estimate at around 20 books a year. Paper-book hoarder; lover of elves and fae. Sue me."
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
