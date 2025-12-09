import User from "../models/User.js"
import bcrypt from 'bcrypt';
import generateAuthToken from "../utils/tokenUtil.js";

export default {
    async register(email, username, password, repeatPassword) {
        const user = await User.findOne({ email })
        if (user) {
            throw new Error("User already exists!");

        }

        if (password !== repeatPassword) {
            throw new Error("Password mismatch!");

        }
        const createdUser = await User.create({ email, username, password });
        const token = generateAuthToken(createdUser);
        return token;
    },

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Username or password incorrect!");

        }

        const isValid = await bcrypt.compare(password, user.password);


        if (!isValid) {
            throw new Error("Username or password incorrect!");
        }

        const token = generateAuthToken(user);

        return token;

    }
}