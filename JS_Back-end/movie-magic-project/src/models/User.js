import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', async function (next) {
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(this.password, salt);
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const User = model('User', userSchema);

export default User;