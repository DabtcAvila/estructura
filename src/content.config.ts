import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(["pensiones", "laboral", "datos"]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Estructura"),
    draft: z.boolean().default(false),
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { articulos };
