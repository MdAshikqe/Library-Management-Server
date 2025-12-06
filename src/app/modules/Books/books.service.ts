import { Book, Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { PaginationHelpers } from "../../helpers/paginationHelper";
import { IPagination } from "../../interface/pagination";
import { bookSearchFields } from "./book.constant";
import { IBookFilterRequest } from "./book.interface";

const createBook = async (req: any) => {
  const result = await prisma.book.create({
    data: req.body,
  });
  return result;
};

const getAllBook = async (params: IBookFilterRequest, options: IPagination) => {
  const { page, limit, skip } =
    PaginationHelpers.calculationPagination(options);
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.BookWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: bookSearchFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.BookWhereInput = { AND: andConditions };

  const result = await prisma.book.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : { createdAt: "desc" },
  });
  const total = await prisma.book.count({
    where: whereCondition,
  });
  return {
    metaData: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getByIdBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  return result;
};

const updateByIdBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book> => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data,
  });
  return result;
};

const deleteByIdBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBook,
  getByIdBook,
  updateByIdBook,
  deleteByIdBook,
};
