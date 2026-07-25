export interface OffHoursCard {
    id: string
    title: string
    description: string
    theme: string
}

export const OFF_HOURS_CARDS: OffHoursCard[] = [
    {
        id: "books",
        title: "Books & imaginary worlds",
        description:
            "I’m an introvert, so my idea of recharging usually involves being left alone with a book. Preferably somewhere that doesn’t exist. Lately, that means sci-fi, epic fantasy, dystopias... and yes, romantasy. I’m a proud FaeLover and I refuse to apologize for it. Turns out, throwing my hyperactive brain into someone else’s imaginary world is a pretty effective way to get it to shut up for a while.",
        theme: "bg-dark-turquoise text-cream"
    },
    {
        id: "travel",
        title: "Going places",
        description:
            "I’ve seen a fair bit of the world, sometimes with company, sometimes on my own. I love both for different reasons. Shared adventures are more exciting and challenges feel a little less daunting. Travelling solo is different: you pay more attention, connect more easily with the people and places around you, and inevitably learn a thing or two about yourself along the way.",
        theme: "bg-sea text-cream"
    },
    {
        id: "food-and-wine",
        title: "Foodie, no cooking",
        description:
            "Food is one of my favourite ways to explore. New flavours, unfamiliar dishes, and getting a glimpse into a culture through what and how people eat. Living in a city with such a rich food scene helps. I obsessively catalogue places I love and places I want to try on Google Maps. At this point, that list is basically a treasure trove. I might start charging for access.",
        theme: "bg-coral text-ink"
    },
    {
        id: "cats",
        title: "Mother of cats",
        description:
            "Kiwi and Murri are family. Not my children, but certainly not less important. Two big cats with big personalities, weird little rituals, and the occasional not-so-little health problem. I care about them deeply, which means trying to understand their tiny furry brains, becoming suspiciously knowledgeable about feline health, and learning how to love them on their own terms.",
        theme: "border border-ink/5 bg-white text-ink"
    },
    {
        id: "wine",
        title: "Beyond the bottle",
        description:
            "What fascinates me about wine is everything beyond drinking it. It’s this strange mix of art, craft and science, intrinsically tied to the land, its climate, its history and its people. I love learning how winemakers turn all of that into something you can pour into a glass. Conveniently, this obsession pairs extremely well with travelling and eating.",
        theme: "border border-ink/5 bg-white text-ink"
    },
    {
        id: "arts-and-crafts",
        title: "Serial hobbyist",
        description:
            "I’m a serial hobbyist with two left hands. Crochet, painting by numbers, diamond painting... I love picking up something new, learning how it works, getting reasonably competent at it, and then inevitably finding the next thing to try. Arts and crafts give my engineering brain somewhere else to play. Kintsugi (金継ぎ) is currently on the backlog.",
        theme: "bg-sea text-cream"
    }
]
