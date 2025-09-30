import { Router } from "express";
import { ExperiencesController } from "./experiences.controller";
import { checkAuth } from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { CreateExperience } from "./experiences.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(CreateExperience),
  ExperiencesController.createExperience
);

export const ExperiencesRouter = router;
