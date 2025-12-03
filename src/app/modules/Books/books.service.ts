import { prisma } from "../../../lib/prisma";
import { IPagination } from "../../interface/pagination";
import { IBookFilterRequest } from "./book.interface";

const createBook = async (req: any) => {
  const result = await prisma.book.create({
    data: req.body,
  });
  return result;
};

const getAllBook = async (params: IBookFilterRequest, options: IPagination) => {
  const result = await prisma.book.findMany();
  return result;
};

export const BookServices = {
  createBook,
  getAllBook,
};
