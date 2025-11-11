import jwt from 'jsonwebtoken';

const SECRET = 'CRYTVuybIUNOimPOijuhygtvcr';

export default function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization || '';
    if (!authHeader) {
        return res.status(401).json({ message: 'No authorization header' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).json({ message: 'Invalid authorization header' });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme) || !token) {
        return res.status(401).json({ message: 'Invalid authorization format' });
    }

    try {
        const payload = jwt.verify(token, SECRET);
        // attach user payload to req.user
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
