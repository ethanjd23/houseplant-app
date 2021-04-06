import * as express from "express";

import db from '../../db';
import { ReqUser } from "../../db/models";

const router = express.Router();

router.get("/", async (req: ReqUser, res) => {
    try {
        res.json(await db.plantsDB.getAll());
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({errormsg: error});
    }
})

router.get('/id', async (req, res) => {
    let plantid = Number(req.params.id);
    try {
        res.json(await db.plantsDB.getOne(plantid))
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;