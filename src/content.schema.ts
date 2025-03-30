import { file, glob } from "astro/loaders";
import { z, defineCollection, reference } from "astro:content";


export const blogCollection = defineCollection ({
    loader: glob({  pattern: "**/[^_]*.{md,mdx}", base:"./src/data/blog"}),
    schema : z.object({
        title: z.string().max(120),
        description : z.string().max(180),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
        relatedPosts: z.array(reference("blog")).optional(),
        author: reference("authors"),
        publishedDate: z.coerce.string()
    })
});

export const authorsCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.json" ,base: "./src/data/authors"}),
    schema: z.object({
        name: z.string().min(5),
        image : z.object({
            src: z.string(),
            alt: z.string()
        }),
        post : z.enum(["ceo","staff","cons","dev","part"]),
        joined: z.coerce.date()
    })
});
