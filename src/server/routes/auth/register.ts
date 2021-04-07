import * as express from "express";
import * as jwt from "jsonwebtoken";

import config from "../../config";
import db from "../../db";
import { ReqUser } from "../../db/models";
import { generateHash } from "../../utils/passwords";

const router = express.Router();

router.post("/", async (req: ReqUser, res) => {
  const newUser = req.body;
  try {
    newUser.password = generateHash(newUser.password);
    const result = await db.usersDB.insert(newUser);
    const token = jwt.sign(
      { userid: result.insertId, email: newUser.email, role: newUser.role },
      config.auth.secret
    );
    res.json(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
