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

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'data',
            source: 'projects.csv',
            schema:  projectObj
        })
    }
})
