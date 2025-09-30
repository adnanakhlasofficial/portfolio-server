import { Prisma } from "@prisma/client";

export type TAdmin = Pick<
  Prisma.AdminCreateInput,
  "name" | "email" | "bio" | "skills" | "password"
>;
