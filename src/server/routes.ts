import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Main');
});




>>>>>>> f271f21d96233748d01b529079431c98880a39ce
export default router;