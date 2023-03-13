import { Request, Response, Router } from "express";
import GetBoxUserClient from "./core/GetBoxUserClient";

const router = Router({ mergeParams: true });

//get file data by fileId
router.get("/:fileId", async (req: Request, res: Response) => {
  const { fileId, userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!fileId) throw new Error("`fileId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.files.get(fileId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// delete file by fileId
router.delete("/:fileId", async (req: Request, res: Response) => {
  const { fileId, userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!fileId) throw new Error("`fileId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.files.delete(fileId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// download file by fileId
router.get("/:fileId/download", async (req: Request, res: Response) => {
  const { fileId, userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!fileId) throw new Error("`fileId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.files.getDownloadURL(fileId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

export default router;
