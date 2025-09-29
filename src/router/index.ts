import { AuthRouter } from "../modules/auth/auth.route";
import { Router } from "express";
import { BlogsRouter } from "../modules/blogs/blogs.route";

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
];

routes.forEach((route: IRoute) => {
  router.use(route.path, route.router);
});

export default router;
