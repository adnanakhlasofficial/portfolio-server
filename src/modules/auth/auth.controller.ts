import { Request, Response } from "express";
import { sendResponse } from "../../utils/send-response";
import { AuthService } from "./auth.service";
import { clearCookie, setCookie } from "../../utils/cookie";
import { cookieName } from "../../constant";
import { catchAsync } from "../../utils/catch-async";
import httpStatus from "http-status-codes";

const login = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const data = await AuthService.login(payload);

  setCookie(res, cookieName.jwtAccess, data);

  sendResponse(res, {
    status: httpStatus.OK,
    message: "Authentication successful. Admin access granted.",
    success: true,
  });
});

const logout = catchAsync(async (_req: Request, res: Response) => {
  clearCookie(res, cookieName.jwtAccess);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Logout successful. See you again soon!",
  });
});

export const AuthController = { login, logout };
