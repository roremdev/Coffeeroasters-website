import { z, defineCollection } from 'astro:content'

export const collections = {
    products: defineCollection({
        schema: z.object({
            title: z.string(),
            image: z.string(),
            price: z.number(),
        }),
    }),
}
