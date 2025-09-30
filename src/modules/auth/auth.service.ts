import bcrypt from "bcrypt";
import { prisma } from "../../libs/prisma";
import { generateToken } from "../../utils/jwt";
import { ILogin } from "./auth.interface";

const login = async (payload: ILogin) => {
  const { email: payloadEmail, password } = payload;

  const resUser = await prisma.admin.findUnique({
    where: {
      email: payloadEmail,
    },
  });

  if (!resUser) {
    throw new Error("Invalid credentials");
  }

  const isPasswordOK = await bcrypt.compare(password, resUser.password);

  if (!isPasswordOK) {
    throw new Error("Invalid credentials");
  }

  const { id, email } = resUser;

  const token = generateToken({ id, email });

  return token;
};

export const AuthService = { login };
