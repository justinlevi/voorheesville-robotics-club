import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100, 'Title must be 100 characters or less'),
    description: z.string().max(160, 'Description must be 160 characters or less'),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Projects collection schema
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(160),
    date: z.coerce.date(),
    status: z.enum(['completed', 'in-progress']),
    tech: z.array(z.string()),
    team: z.array(z.string()),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  projects,
};
