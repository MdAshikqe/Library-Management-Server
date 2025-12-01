import express from "express";
import { BookControllers } from "./books.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBook);

export const BookRoutes = router;
