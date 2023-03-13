import { Router } from "express";
import users from "./users";
import files from "./files";
import folders from "./folders";
import fileupload from "express-fileupload";

const router = Router();
router.use(fileupload());

router.use("/users", users);
router.use("/users/:userId/folders", folders);
router.use("/users/:userId/folders/:folderId/files", files);

export default router;
