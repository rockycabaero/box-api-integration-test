import { Request, Response, Router } from "express";
import { createReadStream } from "fs";
import { join } from "path";
import GetBoxUserClient from "./core/GetBoxUserClient";

const router = Router({ mergeParams: true });

// list files on root folder
router.get("/", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const client = GetBoxUserClient(userId);

  try {
    if (!userId) throw new Error("`userId` is required");
    const result = await client.folders.getItems("0");

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.post("/upload", async (req: Request, res: Response) => {
  const { userId } = req.params;

  const client = GetBoxUserClient(userId);
  const stream = createReadStream(join(__dirname, "./test/testfile.json"));

  try {
    if (!userId) throw new Error("`userId` is required");

    const result = await client.files.uploadFile(
      "0",
      `${Date.now()}.json`,
      stream
    );
    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

export default router;
