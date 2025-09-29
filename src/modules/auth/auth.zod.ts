import z from "zod";

export const LoginZod = z.object({
  email: z.email(),
  password: z.string(),
});

export const UpdatePassword = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
});
