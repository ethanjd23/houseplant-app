import * as express from 'express';
import db from './db';

const router = express.Router();


router.get('/api/plants', async (req, res) => {
    try {
        let plants = await DB.plants.getAll();
        res.json(plants);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/plants/:id', async (req, res) => {
    try {
        let plants = await DB.plants.getOne(req.params.id);
        res.json(plants);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});



export default router;