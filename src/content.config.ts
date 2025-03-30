import { blogCollection, authorsCollection } from "./content.schema";

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
    "blog": blogCollection,
    "authors":authorsCollection
};