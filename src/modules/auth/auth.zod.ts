import z from "zod";

export const LoginZod = z.object({
  email: z.email(),
  password: z.string(),
});
