import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { MemberService } from "./memmber.service";
import sendResponse from "../../shared/sendResponse";
import status from "http-status";
import pick from "../../shared/pick";
import {
  memberFiltrableField,
  memberPaginationFields,
} from "./member.constant";

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

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, memberFiltrableField);
  const options = pick(req.query, memberPaginationFields);
  const result = await MemberService.getAllMembers(filter, options);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Members retrieved successfully",
    metaData: result.metaData,
    data: result.data,
  });
});

const getByIdMember = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MemberService.getByIdMember(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getByIdMember,
};
