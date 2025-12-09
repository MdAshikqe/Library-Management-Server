import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { BorrowService } from "./borrow.service";
import sendResponse from "../../shared/sendResponse";
import status from "http-status";

const createBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.createBorrow(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const retunBook = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  const result = await BorrowService.retunBook(borrowId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book returned successfully",
    data: result,
  });
});

export const BorrowController = {
  createBorrow,
  retunBook,
};
