import express from "express";
import { BorrowController } from "./borrow.controller";
const router = express.Router();

router.post("/", BorrowController.createBorrow);
router.patch("/", BorrowController.retunBook);

export const BorrowRoutes = router;
export const ReturnBook = router;
