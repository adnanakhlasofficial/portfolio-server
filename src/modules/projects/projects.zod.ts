import z from "zod";

export const CreateProject = z.object({
  title: z.string(),
  description: z.string(),
  thumbnail: z.url(),
  features: z.array(z.string()),
  liveLink: z.url(),
  clientRepoLink: z.url(),
  serverRepoLink: z.url(),
});

export const UpdateProject = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.url().optional(),
  features: z.array(z.string()).optional(),
  liveLink: z.url().optional(),
  clientRepoLink: z.url().optional(),
  serverRepoLink: z.url().optional(),
});
