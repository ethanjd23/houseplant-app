import * as express from "express";

const router = express.Router();

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;