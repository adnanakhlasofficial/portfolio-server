import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { env } from "../config/env";
import { JwtPayload } from "jsonwebtoken";
import { cookieName } from "../constant";

export const checkAuth =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies[cookieName.jwtAccess];

      if (!token) {
        throw new Error("Authentication required. Please log in to continue.");
      }

      const decode = verifyToken(
        token,
        env.JWT_ACCESS_SECRET,
        res
      ) as JwtPayload;

      req.user = decode;

      next();
    } catch (error) {
      next(error);
    }
  };
