import * as express from 'express';

import plantsRouter from './plants'
import userplantsRouter from './userplants'

const router = express.Router();

router.use('/plants', plantsRouter)
router.use('/userplants', userplantsRouter);

export default router;