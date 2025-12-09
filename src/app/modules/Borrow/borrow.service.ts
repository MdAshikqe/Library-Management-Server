import { prisma } from "../../../lib/prisma";

const createBorrow = async (data: any) => {
  await prisma.member.findFirstOrThrow({
    where: {
      isDeleted: false,
    },
  });
  const result = await prisma.borrowRecord.create({
    data,
  });
  return result;
};

const retunBook = async (borrowId: string) => {
  console.log("===========", borrowId);
  const today = new Date();
  const dateString = `${today.getDate().toString().padStart(2, "0")}-${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${today.getFullYear()}`;
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: borrowId,
      member: {
        isDeleted: false,
      },
    },
  });
  const result = await prisma.borrowRecord.updateMany({
    data: {
      returnDate: dateString,
    },
  });
  return result;
};
export const BorrowService = {
  createBorrow,
  retunBook,
};
