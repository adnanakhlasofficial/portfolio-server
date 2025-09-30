import { env } from "../../config/env";
import { prisma } from "../../libs/prisma";
import bcrypt from "bcrypt";
import { TAdmin } from "./admin.interface";

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

  await prisma.admin.update({
    where: {
      id: adminId,
    },
    data: {
      password: newHashedPassword,
    },
  });
  return;
};

const getAdminDetails = async () => {
  const data = await prisma.admin.findFirst({
    select: {
      name: true,
      email: true,
      bio: true,
      skills: true,
      createdAt: true,
      updatedAt: true,
      _count: true,
    },
  });
  return data;
};

const updateAdmin = async (id: string, { password, ...payload }: TAdmin) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
  });

  const isPasswordOK = await bcrypt.compare(
    password,
    admin?.password as string
  );

  if (!isPasswordOK) {
    throw new Error("Invalid credentials");
  }

  const data = await prisma.admin.update({
    where: {
      id,
    },
    data: payload,
    select: {
      name: true,
      email: true,
      bio: true,
      skills: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

export const AdminService = { updatePassword, getAdminDetails, updateAdmin };
