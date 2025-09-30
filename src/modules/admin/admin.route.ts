import { Router } from "express";
import { UpdateAdminDetails, UpdatePassword } from "./admin.zod";
import { checkAuth } from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { AdminController } from "./admin.controller";

const router = Router();

router.get("/", checkAuth(), AdminController.getAdminDetails);
router.put(
  "/",
  checkAuth(),
  checkRequest(UpdateAdminDetails),
  AdminController.updateAdmin
);
router.patch(
  "/update-password",
  checkAuth(),
  checkRequest(UpdatePassword),
  AdminController.updatePassword
);

export const AdminRouter = router;
