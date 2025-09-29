import z from "zod";

export const CreateBlog = z.object({
  title: z.string().trim(),
  content: z.string().trim(),
  published: z.boolean().optional(),
});

export const UpdateBlog = z.object({
  title: z.string().trim().optional(),
  content: z.string().trim().optional(),
  published: z.boolean().optional(),
});
