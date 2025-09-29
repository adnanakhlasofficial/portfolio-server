import { Router } from "express";
import { BlogsController } from "./blogs.controller";
import { checkAuth } from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { CreateBlog, UpdateBlog, UpdateBlogPublishedStatus } from "./blogs.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(CreateBlog),
  BlogsController.createBlog
);

router.get("/", checkAuth(), BlogsController.getAllBlogs);
router.get("/published", BlogsController.getAllPublishedBlogs);
router.get("/:slug", BlogsController.getSingleBlog);

router.put(
  "/:slug",
  checkAuth(),
  checkRequest(UpdateBlog),
  BlogsController.updateBlog
);
router.patch(
  "/publish/:slug",
  checkAuth(),
  checkRequest(UpdateBlogPublishedStatus),
  BlogsController.updateBlogPublishedStatus
);

router.delete("/:slug", checkAuth(), BlogsController.deleteBlog);

export const BlogsRouter = router;
