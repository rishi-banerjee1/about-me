import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    shortSummary: z.string(),
    summary: z.string(),
    category: z.string(),
    section: z.string(),
    year: z.number(),
    order: z.number(),
    featured: z.boolean().default(false),
    detail: z.boolean().default(true),
    status: z.enum(["flagship", "active", "supporting", "prototype", "archive"]),
    visibility: z.enum(["public", "private"]),
    tags: z.array(z.string()),
    metrics: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    homepage: z.string().url().optional(),
    npm: z.string().url().optional(),
    marketplace: z.string().url().optional(),
    youtube: z.string().url().optional(),
    dashboard: z.string().url().optional(),
    homebrew: z.string().url().optional(),
    contactHref: z.string().optional(),
    contactLabel: z.string().optional()
  })
});

export const collections = { projects };
