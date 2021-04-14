import * as express from 'express';

const router = express.Router();

import db from '../../db';

router.post('/', async (req, res) => {
    const plant: {request: string;} = req.body;
    try {
        let result = await db.requestDB.insert(plant.request)
        res.json(await result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;