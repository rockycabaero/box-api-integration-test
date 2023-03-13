import { Request, Response, Router } from "express";
import GetBoxUserClient from "./core/GetBoxUserClient";

const router = Router({ mergeParams: true });

// create a folder
router.post("/:folderId", async (req: Request, res: Response) => {
  const { userId, folderId } = req.params;
  const { name } = req.body;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId) throw new Error("`folderId` is required");
    if (!name) throw new Error("folder `name` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.folders.create(folderId, name);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// delete a folder by folderId
router.delete("/:folderId", async (req: Request, res: Response) => {
  const { userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.folders.delete(folderId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// rename a folder by folderId
router.put("/:folderId", async (req: Request, res: Response) => {
  const { userId, folderId } = req.params;
  const { name } = req.body;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId) throw new Error("`folderId` is required");
    if (!name) throw new Error("`name` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.folders.update(folderId, { name });

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// list all files in a folder
router.get("/:folderId/files", async (req: Request, res: Response) => {
  const { userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId && String(folderId) !== "0")
      throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.folders.getItems(folderId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// delete a folder by folderId
router.delete("/:folderId", async (req: Request, res: Response) => {
  const { userId, folderId } = req.params;

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const client = GetBoxUserClient(userId);
    const result = await client.folders.delete(folderId);

    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

// upload file in a folder
router.post("/:folderId/upload", async (req: any, res: Response) => {
  const { userId, folderId } = req.params;
  const client = GetBoxUserClient(userId);

  try {
    if (!userId) throw new Error("`userId` is required");
    if (!folderId) throw new Error("`folderId` is required");

    const result = await client.files.uploadFile(
      folderId,
      req.files.file.name,
      req.files.file.data
    );
    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

export default router;
