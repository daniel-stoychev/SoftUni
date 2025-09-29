
import mongoose from "mongoose";


//Create schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: [18, 'Age need to be at least 18']
    }
});

// Create model
const Person = mongoose.model('Human', peopleSchema);

export default Person;