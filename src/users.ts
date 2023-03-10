import { Request, Response, Router } from "express";
import { isEmpty } from "lodash";
import { uuid } from "uuidv4";
import GetBoxAppAuthClient from "./core/GetBoxAppAuthClient";
import GetBoxEnterPriseClient from "./core/GetBoxEnterpriseClient";
import GetBoxUserClient from "./core/GetBoxUserClient";

const router = Router();

// get all users api
router.get("/", async (req: Request, res: Response) => {
  const users = await GetBoxEnterPriseClient().getUsers();
  return res.status(200).json(users);
});

// create user api
router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  const login = null; // login is not required

  if (isEmpty(name)) {
    return res.status(400).json({
      message: "name is required",
    });
  }

  const user = await GetBoxEnterPriseClient().addUser(login, name, {
    is_platform_access_only: true,
    extenal_app_user_id: uuid(),
    role: GetBoxEnterPriseClient().userRoles.USER,
  });

  return res.status(200).json(user);
});

// delete users api
router.delete("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (isEmpty(userId)) {
    return res.status(400).json({
      message: "`userId` is required",
    });
  }

  try {
    const user = await GetBoxAppAuthClient().users.delete(userId, {
      force: true,
    });
    return res.status(200).json(user);
  } catch ({ message }) {
    return res.status(400).json({
      message,
    });
  }
});

export default router;
