import * as jwt from 'jsonwebtoken';
import {User} from '../models';

module.exports = exports = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        next("Token not found");
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = await jwt.verify(token, 'verysecretkey');
        const user = await User.findById(decoded.uid);
        if (!user) {
            next("User not found");
        }
        req.user = user;
        next();
    } catch (e) {
        next(401, "Token not found");
    }
};
