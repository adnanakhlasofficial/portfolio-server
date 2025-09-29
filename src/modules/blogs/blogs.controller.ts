import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import { BlogsService } from "./blogs.service";
import { IJwtPayload } from "../../types";
import httpStatus from "http-status-codes";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const admin = req.user as IJwtPayload;

  const data = await BlogsService.createBlog(payload, admin);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Blog has been created successfully.",
    data,
  });
});

const getAllBlogs = catchAsync(async (_req: Request, res: Response) => {
  const data = await BlogsService.getAllBlogs();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All blogs have been retrieved successfully.",
    data,
  });
});

const getAllPublishedBlogs = catchAsync(
  async (_req: Request, res: Response) => {
    const data = await BlogsService.getAllPublishedBlogs();
    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: "Published blogs have been retrieved successfully.",
      data,
    });
  }
);

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const data = await BlogsService.getSingleBlog(slug);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Blog details retrieved successfully.",
    data,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const data = await BlogsService.deleteBlog(slug);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Blog has been deleted successfully.",
    data,
  });
});
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const payload = req.body;
  const data = await BlogsService.updateBlog(slug, payload);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Blog has been updated successfully.",
    data,
  });
});

const updateBlogPublishedStatus = catchAsync(
  async (req: Request, res: Response) => {
    const slug = req.params.slug;
    const payload = req.body;
    const data = await BlogsService.updateBlog(slug, payload);
    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: "Blog publication status has been updated successfully.",
      data,
    });
  }
);

export const BlogsController = {
  createBlog,
  getAllBlogs,
  getAllPublishedBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
  updateBlogPublishedStatus,
};
