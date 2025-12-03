import { Request, Response } from "express";
import { BookServices } from "./books.service";
import sendResponse from "../../shared/sendResponse";
import status from "http-status";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import { bookSearchFields, booksFilterableFields } from "./book.constant";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookServices.createBook(req);

  // res.status(200).json({
  //   success: true,
  //   message: "Book create successfully",
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Create a book successfully ",
    data: result,
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, booksFilterableFields);
  const options = pick(req.query, bookSearchFields);
  const result = await BookServices.getAllBook(filter, options);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBook,
};
