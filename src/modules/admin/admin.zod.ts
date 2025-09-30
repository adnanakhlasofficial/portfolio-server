import z from "zod";

export const UpdatePassword = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
});

export const UpdateAdminDetails = z.object({
  name: z.string().trim().optional(),
  email: z.email().trim().optional(),
  password: z.string(),
  bio: z.string().trim().optional(),
  skills: z.string().trim().optional(),
});
