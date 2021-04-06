import * as express from "express";
import * as jwt from "jsonwebtoken";
import { authenticate } from 'passport';

import config from "../../config";
import { ReqUser } from "../../db/models";

const router = express.Router();

router.post("/", authenticate('local'), async (req: ReqUser, res) => {
    try {
      const token = jwt.sign(
        { userid: req.user.id, email: req.user.email, role: req.user.role },
        config.auth.secret
      );
      res.json(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;