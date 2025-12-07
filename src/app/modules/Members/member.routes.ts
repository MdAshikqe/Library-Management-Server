import express from "express";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getAllMembers);
router.get("/:id", MemberControllers.getByIdMember);
router.patch("/:id", MemberControllers.updateByIdMember);
router.delete("/:id", MemberControllers.deleteByIdMember);
export const MemberRoutes = router;
