import * as express from 'express';
import { Login } from 'login';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Main');
});

<Route exact path="/login">
  <Login />
</Route>

export default router;