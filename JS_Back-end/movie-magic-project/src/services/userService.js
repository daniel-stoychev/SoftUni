import User from "../models/User.js";
import bcrypt from "bcrypt";

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
        console.log("All valid!");


    }
}