import { Member } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { IMemberData } from "./member.interface";

const createMember = async (data: any) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

export const MemberService = {
  createMember,
};
