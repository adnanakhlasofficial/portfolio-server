import { AuthRouter } from "../modules/auth/auth.route";
import { Router } from "express";
import { BlogsRouter } from "../modules/blogs/blogs.route";
import { ProjectRouter } from "../modules/projects/projects.route";

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
    path: "/blogs",
    router: BlogsRouter,
  },
  {
    path: "/projects",
    router: ProjectRouter,
  },
];

routes.forEach((route: IRoute) => {
  router.use(route.path, route.router);
});

export default router;
