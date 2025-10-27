import { type SchemaTypeDefinition } from "sanity";
import { comment } from "./comment";
import { author } from "./author";
import { category } from "./category";
import { blogPost } from "./blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, comment, author, category],
};
