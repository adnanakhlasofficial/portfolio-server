import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import { AdminService } from "./admin.service";

const updatePassword = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;
  const { newPassword, oldPassword } = req.body;
  await AdminService.updatePassword(oldPassword, id, newPassword);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Your password has been updated successfully.",
  });
});

const getAdminDetails = catchAsync(async (req: Request, res: Response) => {
  const data = await AdminService.getAdminDetails();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin details retrieved successfully.",
    data,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;
  const payload = req.body;
  const data = await AdminService.updateAdmin(id, payload);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin details updated successfully.",
    data,
  });
});

export const AdminController = { updatePassword, getAdminDetails, updateAdmin };
