import * as express from "express";
import * as jwt from "jsonwebtoken";

import db from "../../db";
import config from "../../config";
import { compareHash } from "../../utils/passwords";

const router = express.Router();

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  try {
    // check for the user's email
    const [userFound] = await db.usersDB.find("email", email);
    // Comparing password entered with DB
    if (userFound && compareHash(password, userFound.password)) {
      const token = jwt.sign(
        { userid: userFound.id, email: userFound.email, role: userFound.role },
        config.auth.secret
      );
      res.json(token);
      return;
    }
    res.send(401).json({ message: "Invalid credentials" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
