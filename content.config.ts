/// <reference path="./types/index.d.ts" />
import { defineCollection, defineContentConfig } from '@nuxt/content'
import {z} from 'zod'

export const projectObj = z.object({
    title: z.string(),
    description: z.string(),
    side: z.boolean().default(false),
    link: z.string().url().optional(),
    image: z.string().url().optional(),
    icon: z.string().url().optional(),
    year_from: z.number().int().nullable(),
    year_to: z.number().int().nullable(),
})
export const publicationObj = z.object({
    Name: z.string().nonempty(),
    DOI: z.string().url().nonempty().nullable(),
    'Publication Year': z.number().int().nullable(),
    Venue: z.string().nonempty().nullable(),
    '🔬 Progetto di ricerca': z.string().nonempty().nullable(),
    Type: z.string().nullable(),
})

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'data',
            source: 'projects.csv',
            schema:  projectObj
        }),
        publications: defineCollection({
            type: 'data',
            source: 'publications.csv',
            schema: publicationObj
        })
    }
})
