import { Request, Response } from "express";
import { sendResponse } from "../../utils/send-response";
import { authService } from "./auth.service";
import { clearCookie, setCookie } from "../../utils/cookie";
import { cookieName } from "../../constant";

async function login(req: Request, res: Response) {
  const payload = req.body;

  const serviceResponse = await authService.login(payload);

  setCookie(res, cookieName.jwtAccess, serviceResponse);

  sendResponse(res, {
    status: 200,
    message: "Authentication successful. Admin access granted.",
    success: true,
  });
}

async function logout(_req: Request, res: Response) {
  clearCookie(res, cookieName.jwtAccess);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Logout successful. See you again soon!",
  });
}

export const authController = { login, logout };
