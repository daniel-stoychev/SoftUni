import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        requied: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [6, 'Password must be at least 6 chars long!']
    }
});

export default User = model('User', userSchema);