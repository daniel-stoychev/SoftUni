import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

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

userSchema.pre('save', function () {
    this.password = bcrypt.hash(this.password, 12);
});

export default User = model('User', userSchema);