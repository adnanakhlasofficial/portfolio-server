import { Router } from "express";
import { BlogsController } from "./blogs.controller";
import { checkAuth } from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-zod-schema";
import { CreateBlog, UpdateBlog } from "./blogs.zod";

const router = Router();

router.post(
  "/create",
  checkAuth(),
  checkRequest(CreateBlog),
  BlogsController.createBlog
);

router.put(
  "/update/:slug",
  checkAuth(),
  checkRequest(UpdateBlog),
  BlogsController.updateBlog
);
router.get("/all-blogs", checkAuth(), BlogsController.getAllBlogs);
router.get("/all-published-blogs", BlogsController.getAllPublishedBlogs);
router.get("/:slug", BlogsController.getSingleBlog);
router.delete("/delete/:slug", checkAuth(), BlogsController.deleteBlog);

export const BlogsRouter = router;
