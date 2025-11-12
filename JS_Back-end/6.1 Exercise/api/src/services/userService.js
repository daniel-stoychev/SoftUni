import User from "../models/User.js"
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";

export default {
    async register(email, password) {
        const user = await User.create({ email, password });

        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };

    },
    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User or password invalid!");

        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("User or password invalid!");
        }

        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    }
}