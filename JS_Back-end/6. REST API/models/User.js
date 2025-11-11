import { Schema, Types, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, 'Username is required!'],
        minLength: [6, 'Username too short!'],

    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [6, 'Password is too short!']
    }
});

userSchema.pre('save', async function () {

    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;