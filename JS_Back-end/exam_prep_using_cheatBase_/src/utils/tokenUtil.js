import jwt from 'jsonwebtoken';
import { JWT_secret } from "../config/constants.js";
export default function generateAuthToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,

    }

    const token = jwt.sign(payload, JWT_secret, { expiresIn: '2h' });

    return token;
}