import User from "../models/User.js"

export default {
    async register(email, password) {
        const user = await User.create(email, password);
        return user;
    }
}