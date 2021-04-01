import * as express from 'express';

import plantsinformationRouter from './plantsInformation'

const router = express.Router();

router.use('/plantsinformation', plantsinformationRouter)

export default router;