import User from "../models/User.js"
import { generateUserToken } from "../utils/tokenUtil.js";
import bcrypt from 'bcrypt';

export default {
    async register(userData) {
        return await User.create(userData);
    },
    async login(username, password) {
        if (!username || !password) {
            throw new Error("Username & Password required!");
        }

        const user = await User.findOne({ username });


        if (!user) {
            throw new Error("Username or pass unvalid!");
        }

        const isValid = await bcrypt.compare(password, user.password);


        if (!isValid) {
            throw new Error("Username or pass invalid!");
        }

        const token = generateUserToken(user);

        return token;

    }
}