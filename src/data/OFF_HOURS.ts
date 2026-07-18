export interface OffHoursCard {
    id: string
    title: string
    marker: string
    theme: string
}

export const OFF_HOURS_CARDS: OffHoursCard[] = [
    {
        id: "books",
        title: "Books & imaginary worlds",
        marker: "650+",
        theme: "bg-dark-turquoise text-cream"
    },
    {
        id: "travel",
        title: "Travel, one table at a time",
        marker: "24",
        theme: "bg-sea text-cream"
    },
    {
        id: "food-and-wine",
        title: "Good food & wine",
        marker: "✦",
        theme: "bg-coral text-ink"
    },
    {
        id: "sea",
        title: "Sparkling by the sea",
        marker: "≈",
        theme: "border border-ink/5 bg-white text-ink"
    }
]
