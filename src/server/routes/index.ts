import * as express from 'express';

import apiRouter from "./api"

const router = express.Router();

router.get('/api', apiRouter);

export default router;