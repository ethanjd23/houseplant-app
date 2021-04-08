import * as express from 'express';

import postsRouter from './posts';
import repliesRouter from './replies';

const router = express.Router();

router.use('/posts', postsRouter);
router.use('/replies', repliesRouter);

export default router;