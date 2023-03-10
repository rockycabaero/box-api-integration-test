import { Router } from "express";
import users from "./users";
import files from "./files";

const router = Router();

router.use("/users", users);
router.use("/users/:userId/files", files);

export default router;
