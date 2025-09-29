import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
import { Prisma } from "@prisma/client";
import { Response } from "express";
import { sendResponse } from "./send-response";
import httpStatus from "http-status-codes";

interface IUser extends Omit<Prisma.AdminCreateInput, "password"> {}

export const generateToken = async (data: IUser) => {
  const token = jwt.sign(data, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_AT,
  } as SignOptions);
  return token;
};

export const verifyToken = (token: string, secret: string, res: Response) => {
  const decode = jwt.verify(token, secret);

  if (!decode) {
    sendResponse(res, {
      status: httpStatus.UNAUTHORIZED,
      success: false,
      message: "Unauthorized access",
    });
  }

  return decode;
};
