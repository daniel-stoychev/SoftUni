import { Schema, model } from "mongoose";

// https://mongoosejs.com/docs/schematypes.html#string-validators
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true, // This is database index
        lowercase: true, // Sanitize email to lower case
        trim: true, // Trim sanitizer
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], // Regex validator
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Age should be at least 18'],
        max: [120, 'Age cannot be larger than 120!'],
        validate: {
            validator: function (value) {
                if (this.type === 'teacher') {
                    return value >= 22;
                }

                return true;
            },
            message: 'Teacher age should be at least 22!, {VALUE} is too low',
        }
    },
    type: {
        type: String,
        required: true,
        // enum: ['student', 'teacher'],
        enum: {
            values: ['student', 'teacher'],
            message: 'Invalid user type!'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password should be at least 8 characters long!'],
        maxLength: [100, 'Password is too long!'],
    }
});

const User = model('User', userSchema);

export default User;
