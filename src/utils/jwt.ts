import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
import { Prisma } from "@prisma/client";

export async function generateToken(data: Prisma.AdminCreateInput) {
  const token = jwt.sign(data, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_AT,
  } as SignOptions);
  return token;
}
