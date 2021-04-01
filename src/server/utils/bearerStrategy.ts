import * as jwt from "jsonwebtoken";
import config from "../config";

export function validateToken(req, res) {
    const bearerToken = req.headers.authorization?.split(' ');
        const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
        console.log(token);
        if (!bearerToken || !token) {
            return res.sendStatus(401);
        }

        const payload = jwt.verify(token, config.auth.secret);
        console.log(payload);
}