import * as express from "express";
import { authenticate } from "passport";

import db from '../../db';


const router = express.Router();

router.get('/id', async (req, res) => {
    let userid = Number(req.params.id);
    try {
        res.json(await db.userplantsDB.getUserPlants(userid));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


export default router;