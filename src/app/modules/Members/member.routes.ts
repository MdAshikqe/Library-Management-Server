import express from "express";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getAllMembers);

export const MemberRoutes = router;
