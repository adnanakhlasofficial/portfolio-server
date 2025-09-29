import { Response } from "express";

interface IResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export function sendResponse<T>(res: Response, data: IResponse<T>) {
  res.status(data.status).json({
    success: data.success,
    message: data.message,
    ...(typeof data.data !== "undefined" && { data: data.data }),
  });
}
