import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { MemberService } from "./memmber.service";
import sendResponse from "../../shared/sendResponse";
import status from "http-status";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await MemberService.createMember(data);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
};
