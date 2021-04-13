import * as express from 'express';

import plantsRouter from './plants'
import userplantsRouter from './userplants'
import requestRouter from './requestedplants'

const router = express.Router();

router.use('/plants', plantsRouter);
router.use('/userplants', userplantsRouter);
router.use('/request', requestRouter);

export default router;