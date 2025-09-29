import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";
import { ILogin } from "./auth.interface";
import { prisma } from "../../libs/prisma";
import { env } from "../../config/env";

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

const updatePassword = async (
  oldPassword: string,
  adminId: string,
  newPassword: string
) => {
  const admin = await prisma.admin.findUnique({
    where: {
      id: adminId,
    },
  });

  const isPasswordOK = await bcrypt.compare(
    oldPassword,
    admin?.password as string
  );

  if (!isPasswordOK) {
    throw new Error("Invalid credentials");
  }

  const newHashedPassword = await bcrypt.hash(
    newPassword,
    Number(env.BCRYPT_SALT)
  );

  const newAdminPassword = await prisma.admin.update({
    where: {
      id: adminId,
    },
    data: {
      password: newHashedPassword,
    },
  });
  return newAdminPassword;
};

export const AuthService = { login, updatePassword };
