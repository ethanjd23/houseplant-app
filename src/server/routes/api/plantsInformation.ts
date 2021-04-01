import * as express from "express";

import db from '../../db';


const router = express.Router();

router.get('/id', async (req, res) => {
    let plantid = Number(req.params.id);
    try {
        res.json(await db.plantsinformationDB.getOne(plantid))
    } catch (error) {
        console.log(error);
    }
})

export default router;