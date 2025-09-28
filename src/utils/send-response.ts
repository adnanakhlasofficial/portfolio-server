import { Response } from "express";

interface IResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export function sendResponse<T>(res: Response, data: IResponse<T>) {
  console.log("call");
  console.log(res);
  res.status(data.status).json({
    success: data.success,
    message: data.message,
    ...(data?.data && { data: data.data }),
  });
}
