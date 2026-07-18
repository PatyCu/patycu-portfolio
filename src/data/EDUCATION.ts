export interface Education {
    id: string
    institution: string
    qualification: string
    originalQualification: string
    projectArea: string
    project: string
    grade: string
}

export const EDUCATION: Education[] = [
    {
        id: "computer-engineering-second-cycle",
        institution: "Enginyeria La Salle",
        qualification: "Computer Engineering — Second Cycle",
        originalQualification: "Ingeniería Informática (segundo ciclo)",
        projectArea: "Compilers",
        project: "An application for the automated construction of compiler tools.",
        grade: "Excellent"
    },
    {
        id: "technical-engineering-computer-systems",
        institution: "Enginyeria La Salle",
        qualification: "Technical Engineering in Computer Systems — Three-Year Degree",
        originalQualification: "Ingeniería Técnica en Informática de Sistemas",
        projectArea: "Operating systems",
        project: "Page replacement algorithms: analysis and simulation.",
        grade: "Excellent"
    }
]
