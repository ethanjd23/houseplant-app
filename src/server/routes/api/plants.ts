import * as express from "express";
import * as jwt from "jsonwebtoken";
import config from "../../config";

import db from '../../db';


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const bearerToken = req.headers.authorization?.split(' ');
        const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
        console.log(token);
        if (!bearerToken || !token) {
            res.sendStatus(401);
            return;
        }

        const payload = jwt.verify(token, config.auth.secret);
        console.log(payload);
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