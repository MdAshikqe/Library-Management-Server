import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { Prisma } from "../../../generated/prisma/client";

const globarErrorHandaler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let httpCode = status.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || "Something went wrong";
  let error = err;

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P1008") {
      message = "Operations time out";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P1017") {
      message = "Server Close";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2004") {
      message = "Database error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2007") {
      message = "Database validation error error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2016") {
      message = "Quary error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2028") {
      message = "Transaction API error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2035") {
      message = "Assertion violation on the database error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate key error";
      error = err.meta;
    }
  }
  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    if (err.message === "P1000") {
      message = "Database credentails errors";
      error = err.message;
    }
  }

  res.status(httpCode).json({
    success,
    message,
    error,
  });
};

export default globarErrorHandaler;
