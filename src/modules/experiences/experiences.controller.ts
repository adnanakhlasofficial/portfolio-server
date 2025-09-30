import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";
import { ExperiencesService } from "./experiences.service";
import { IExperience } from "./experiences.interface";

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;
  const payload = req.body as IExperience;
  console.log(payload);

  const data = await ExperiencesService.createExperience(payload, id);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "",
    data,
  });
});

const getAllExperiences = catchAsync(async (_req: Request, res: Response) => {
  const data = await ExperiencesService.getAllExperiences();

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "All experiences have been retrieved successfully.",
    data,
  });
});

const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await ExperiencesService.getSingleExperience(slug);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Experience details retrieved successfully.",
    data,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await ExperiencesService.deleteExperience(slug);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Experience has been deleted successfully.",
    data,
  });
});

const updateExperience = catchAsync(async (_req: Request, res: Response) => {
  sendResponse(res, { status: httpStatus.CREATED, success: true, message: "" });
});

export const ExperiencesController = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  deleteExperience,
  updateExperience,
};
