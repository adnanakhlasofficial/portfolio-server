import { Request, Response, NextFunction } from "express";

interface IError {
  statusCode?: number;
  message?: string;
  name?: string;
  stack?: string;
}

export const globalErrorHandler = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && {
      error: {
        name: err.name,
        stack: err.stack,
      },
    }),
  });
};
