import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { PaginationHelpers } from "../../helpers/paginationHelper";
import { IPagination } from "../../interface/pagination";
import { memberSearchableField } from "./member.constant";
import { IMemberFields } from "./member.interface";

const createMember = async (data: any) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

const getAllMembers = async (params: IMemberFields, options: IPagination) => {
  const { page, limit, skip } =
    PaginationHelpers.calculationPagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.MemberWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: memberSearchableField.map((field) => ({
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
  andConditions.push({
    isDeleted: false,
  });

  const whereCondition: Prisma.MemberWhereInput = { AND: andConditions };

  const result = await prisma.member.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
  });
  const total = await prisma.member.count({
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

const getByIdMember = async () => {
  console.log("get by id member");
};

export const MemberService = {
  createMember,
  getAllMembers,
  getByIdMember,
};
