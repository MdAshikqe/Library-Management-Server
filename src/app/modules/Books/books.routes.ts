import express from "express";
import { BookControllers } from "./books.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBook);
router.get("/:bookId", BookControllers.getByIdBook);

export const BookRoutes = router;
