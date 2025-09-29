import mongoose from "mongoose";
import Person from "./models/Student.js";

const atlasDBUrl = 'mongodb+srv://danibg11_db_user:gXcUwvX6vrip8Kpj@cluster0.nvyr2zo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const localDB = 'mongodb://localhost:27017';

//Connect to DB
try {
    // await mongoose.connect('mongodb://localhost:27017/testDB');
    await mongoose.connect(localDB, { dbName: 'testDB' });
    console.log('DB connection successfully');

} catch (err) {
    console.log('cannot connect to DB', err.message);

}

// Get all people
const people = await Person.find();

console.log(people);




