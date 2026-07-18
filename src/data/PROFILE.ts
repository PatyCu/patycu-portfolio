export interface ProfileLink {
    label: string
    href: string
}

export interface ProfileFact {
    value: string
    label: string
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
    currentFocus: string
    facts: ProfileFact[]
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
    currentFocus: "Exploring AI-assisted development",
    facts: [
        { value: "20 years", label: "working in technology" },
        { value: "14 years", label: "leading engineering teams" },
        { value: "8 years", label: "as a software developer" }
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
