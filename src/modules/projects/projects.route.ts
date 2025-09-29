import { Router } from "express";
import { checkAuth } from "../../middlewares/check-auth";
import { ProjectController } from "./projects.controller";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { CreateProject, UpdateProject } from "./projects.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(CreateProject),
  ProjectController.createProject
);
router.get("/", ProjectController.getAllProjects);
router.get("/:slug", ProjectController.getSingleProject);
router.delete("/:slug", checkAuth(), ProjectController.deleteProject);
router.put(
  "/:slug",
  checkAuth(),
  checkRequest(UpdateProject),
  ProjectController.updateProject
);

export const ProjectRouter = router;
