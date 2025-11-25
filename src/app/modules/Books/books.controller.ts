import { Request, Response } from "express";
import { BookService } from "./books.service";
import sendResponse from "../../shared/sendResponse";
import status from "http-status";

const createBook = async (req: Request, res: Response) => {
  console.log("=======", req.body);
  const result = await BookService.createBook(req);

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
};

export const BookController = {
  createBook,
};
