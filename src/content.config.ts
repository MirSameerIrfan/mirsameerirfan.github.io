import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const work = defineCollection({
	// Load Markdown and MDX files in the `src/content/work/` directory.
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		// One sentence shown in lists and under the title
		summary: z.string(),
		year: z.number(),
		role: z.string(),
		status: z.string().optional(),
		stack: z.array(z.string()),
		// Lower numbers come first
		order: z.number().default(99),
		repo: z.string().url().optional(),
		live: z.string().url().optional(),
		// Screenshot; a typographic cover is generated when this is missing
		cover: image().optional(),
		coverAlt: z.string().optional(),
	}),
});

export const collections = { blog, work };
