export {};

declare global {
    type Project = {
        title: string,
        description: string,
        link?: string,
        img?: string,
        year_span?: number|number[]
    }
}