import { AuthRouter } from "../modules/auth/auth.route";
import { Router } from "express";
import { BlogsRouter } from "../modules/blogs/blogs.route";
import { ProjectRouter } from "../modules/projects/projects.route";
import { AdminRouter } from "../modules/admin/admin.route";
import { ExperiencesRouter } from "../modules/experiences/experiences.route";

interface IRoute {
  path: string;
  router: Router;
}

const router = Router();

const routes: IRoute[] = [
  {
    path: "/auth",
    router: AuthRouter,
  },
  {
    path: "/admin",
    router: AdminRouter,
  },
  {
    path: "/blogs",
    router: BlogsRouter,
  },
  {
    path: "/projects",
    router: ProjectRouter,
  },
  {
    path: "/experiences",
    router: ExperiencesRouter,
  },
];

routes.forEach((route: IRoute) => {
  router.use(route.path, route.router);
});

export default router;
