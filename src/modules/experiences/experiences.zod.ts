import z from "zod";

export const CreateExperience = z.object({
  title: z.string().trim(),
  description: z.string().trim(),
  company: z.string().trim(),
  location: z.string().trim(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime().optional(),
});

export const UpdateExperience = z.object({
  title: z.string().trim().optional(),
  description: z.string().trim().optional(),
  company: z.string().trim().optional(),
  location: z.string().trim().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional(),
});
