import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { IJwtPayload } from "../../types";
import { ProjectService } from "./projects.service";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/send-response";
import { IProject } from "./projects.interface";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const admin = req.user as IJwtPayload;

  const data = await ProjectService.createProject(payload, admin);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Project has been created successfully.",
    data,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const data = await ProjectService.getAllProjects();

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "All projects have been retrieved successfully.",
    data,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await ProjectService.getSingleProject(slug);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Project details retrieved successfully.",
    data,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await ProjectService.deleteProject(slug);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Project has been deleted successfully.",
    data,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const payload = req.body as IProject;
  const data = await ProjectService.updateProject(slug, payload);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Project has been updated successfully.",
    data,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
