import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
    const payload = {
        id: user.id,
        email: user.eml
    }
    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '2h' });

    return token;
}

