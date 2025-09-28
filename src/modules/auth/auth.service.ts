import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";
import { ILogin } from "./auth.interface";

const prisma = new PrismaClient();

async function login(payload: ILogin) {
  const { email, password } = payload;

  const user = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordOK = await bcrypt.compare(password, user.password);

  if (!isPasswordOK) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user);

  return token;
}

export const authService = { login };
