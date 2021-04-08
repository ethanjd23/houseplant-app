import * as express from "express";

import apiRouter from "./api";
import authRouter from "./auth";
import trefleRouter from "./trefle";
import forumRouter from "./forum";

const router = express.Router();

router.use("/api", apiRouter);
router.use("/auth", authRouter);
router.use("/trefle", trefleRouter);
router.use("/forum", forumRouter);

export default router;