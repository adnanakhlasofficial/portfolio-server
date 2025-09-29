import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";
import { ILogin } from "./auth.interface";
import { prisma } from "../../libs/prisma";

const login = async (payload: ILogin) => {
  const { email, password } = payload;

  const resUser = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (!resUser) {
    throw new Error("Invalid credentials");
  }

  const isPasswordOK = await bcrypt.compare(password, resUser.password);

  if (!isPasswordOK) {
    throw new Error("Invalid credentials");
  }

  const { password: notUse, ...user } = resUser;

  const token = generateToken(user);

  return token;
};

export const AuthService = { login };
