import express from "express";
import { BookControllers } from "./books.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);

export const BookRoutes = router;
