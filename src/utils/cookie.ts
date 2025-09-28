import { Response } from "express";

export function setCookie(res: Response, name: string, token: string) {
  res.cookie(name, token, {
    httpOnly: true,
    secure: true,
    sameSite: false,
  });
}

export function clearCookie(res: Response, name: string) {
  res.clearCookie(name, {
    httpOnly: true,
    secure: false,
    sameSite: false,
  });
}
