import { Request, Response, Router } from "express";
import { isEmpty } from "lodash";
import { uuid } from "uuidv4";
import GetBoxEnterPriseClient from "./core/GetBoxEnterpriseClient";

const router = Router();

// get all users api
router.get("/", async (req: Request, res: Response) => {
  const users = await GetBoxEnterPriseClient().getUsers();
  return res.status(200).json(users);
});

// create user api
router.post("/", async (req: Request, res: Response) => {
  const { name, login } = req.body;

  if (isEmpty(name) || isEmpty(login)) {
    return res.status(400).json({
      message: "name and login are required",
    });
  }

  const user = await GetBoxEnterPriseClient().addUser(login, name, {
    is_platform_access_only: true,
    extenal_app_user_id: uuid(),
    role: GetBoxEnterPriseClient().userRoles.USER,
  });

  return res.status(200).json(user);
});

export default router;
