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

// console.log(people);

// CRUD - create, read, update, delete

//===== CREATE method #1 (PREFERED -> directly saves to DB)
// const personCreate = await Person.create({ name: 'Petkan', age: 33 });
// console.log(personCreate);

///===== CREATE method #2 (FIRST saves to the Node.jс/server memory then we have to use save() to save in DB)

// const newPerson = new Person({ name: 'Petkan2', age: 24 });
// await newPerson.save();
// console.log(newPerson);


//===== READ
// const allPeople = await Person.find();
// console.log(allPeople);

//filtered students
// const result = await Person.find({ age: 33 });  //returns []
// console.log(result);

// const result = await Person.findOne({ age: 33 });  //returns {}
// console.log(result);

// Other methods:
// await Person.findById


//===== UPDATE 
// Methods / await Person. :
// Person.findByIdAndUpdate('ID', { new data })
// Person.findOneAndUpdate({age: 33}, {age: 23}) = updateOne - > update first that meets the criteria
// Person.updateMany({age: 18}, {age: 20}) - > NOT RECOMMENDED!


//===== DELETE
// Methods / await Person. :
// Person.findByIdAndDelete('ID')
// Person.deleteOne = Person.findByIdAndDelete
// .deleteMany


