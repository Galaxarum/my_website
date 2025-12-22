/// <reference path="./types/project.d.ts" />
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z, ZodType } from 'zod'

export default defineContentConfig({
    collections: {
        projects: defineCollection<ProjectT>({
            type: 'data',
            source: 'projects.csv',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                side: z.boolean().default(false),
                link: z.string().url().optional(),
                img: z.string().url().optional(),
                year_from: z.number().int().nullable(),
                year_to: z.number().int().default(new Date().getFullYear()),
            }) as ZodType<ProjectT>
        })
    }
})
