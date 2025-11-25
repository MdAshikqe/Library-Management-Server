import { Request, Response } from "express";
import { BookService } from "./books.service";

const createBook = async (req: Request, res: Response) => {
  console.log("=======", req.body);
  const result = await BookService.createBook(req);

  res.status(200).json({
    success: false,
    message: "Book create successfully",
    data: result,
  });
};

export const BookController = {
  createBook,
};
