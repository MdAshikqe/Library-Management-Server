import { prisma } from "../../../lib/prisma";

const createBook = async (req: any) => {
  const result = await prisma.book.create({
    data: req.body,
  });
  return result;
};

const getAllBook = async () => {
  const result = await prisma.book.findMany();

  return result;
};

export const BookServices = {
  createBook,
  getAllBook,
};
