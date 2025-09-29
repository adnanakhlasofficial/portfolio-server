import { Router } from "express";
import { AuthController } from "./auth.controller";
import { LoginZod, UpdatePassword } from "./auth.zod";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { checkAuth } from "../../middlewares/check-auth";

const router = Router();

router.post("/login", checkRequest(LoginZod), AuthController.login);
router.post("/logout", AuthController.logout);
router.patch(
  "/update-password",
  checkAuth(),
  checkRequest(UpdatePassword),
  AuthController.updatePassword
);

export const AuthRouter = router;
