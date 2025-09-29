import { Request, Response, NextFunction } from "express";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const catchAsync =
  (handler: AsyncHandler): AsyncHandler =>
  (req, res, next) =>
    handler(req, res, next).catch((err) => next(err));
