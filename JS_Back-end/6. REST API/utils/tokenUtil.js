import jwt from 'jsonwebtoken';

export function generateUserToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, 'CRYTVuybIUNOimPOijuhygtvcr', { expiresIn: '2h' });

    return token;
}