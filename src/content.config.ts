// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Required loader in newer Astro versions

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
    date: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };