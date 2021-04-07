import * as express from "express";

import apiRouter from "./api";
import authRouter from "./auth";
import trefleRouter from "./trefle";

const router = express.Router();

router.use("/api", apiRouter);
router.use("/auth", authRouter);
router.use("/trefle", trefleRouter);

export default router;
