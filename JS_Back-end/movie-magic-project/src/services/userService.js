import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = 'e5dr6ft7g68h9j0k-9j8h7g6f5d45f6g7h8j';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Username or password invalid!");

        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Username or password invalid!");
        }

        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

        return token;
    }
}