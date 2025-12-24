import { defineCollection, defineContentConfig } from '@nuxt/content'
import {z} from 'zod'

export const projectObj = z.object({
    title: z.string(),
    description: z.string(),
    side: z.boolean().transform(s=>Boolean(s)),
    link: z.string().url().optional(),
    image: z.string().url().optional(),
    icon: z.string().url().optional(),
    year_from: z.number().int().nullable(),
    year_to: z.number().int().nullable(),
})

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                headline: z.string(),
                image: z.string().url().optional(),
                image_alt: z.string().optional(),
            })
        }),
        projects: defineCollection({
            type: 'data',
            source: 'projects/*.yml',
            schema:  projectObj
        })
    }
})
