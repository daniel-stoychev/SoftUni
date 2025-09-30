import mongoose from "mongoose";


//Create schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be atleast 18 years old!'],
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }
});

// Create model
const Human = mongoose.model('Human', peopleSchema);

export default Human;