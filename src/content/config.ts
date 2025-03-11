import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
		pubDatetime: z.date(),
		ogImage: z.string().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		description: z.string(),
		body: z.string().optional(), // `rich-text` in Pages CMS maps to `string`
	}),
})

export const collections = {
	posts: postsCollection,
}
