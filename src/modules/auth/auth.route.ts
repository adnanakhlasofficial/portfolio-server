import { Router } from "express";
import { AuthController } from "./auth.controller";
import { LoginZod } from "./auth.zod";
import { checkRequest } from "../../middlewares/check-zod-schema";

const router = Router();

router.post("/login", checkRequest(LoginZod), AuthController.login);
router.post("/logout", AuthController.logout);

export const AuthRouter = router;
