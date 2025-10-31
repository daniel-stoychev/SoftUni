import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

// validates authentication
export default function authMiddleware(req, res, next) {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodeToken = jwt.verify(token, JWT_SECRET);
        req.user = decodeToken;
        req.isAuthenticated = true;

        res.locals.isAuthenticated = true;
        res.locals.user = decodeToken;

        next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
}

// checks if user is authenticated or NOT
export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        res.redirect('/auth/login');
    }
    next();
}

// checks if user is guest or NOT
export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        res.redirect('/');
    }
    next();
}