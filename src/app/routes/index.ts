import express from "express";
import { BookRoutes } from "../modules/Books/books.routes";
import { MemberRoutes } from "../modules/Members/member.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
