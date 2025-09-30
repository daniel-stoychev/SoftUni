import mongoose from "mongoose";
import Human from "./models/Humans.js";
import Course from "./models/Course.js";

// const atlasDBUrl = 'mongodb+srv://danibg11_db_user:gXcUwvX6vrip8Kpj@cluster0.nvyr2zo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
// const people = await Human.find();

// console.log(people);

// CRUD - create, read, update, delete

// ===== CREATE method #1 (PREFERED -> directly saves to DB)
// const personCreate = await Human.create({ name: 'Petkan', age: 33 });
// console.log(personCreate);

// /===== CREATE method #2 (FIRST saves to the Node.jс/server memory then we have to use save() to save in DB)

// const newPerson = new Human({ name: 'Petkan2', age: 24 });
// await newPerson.save();
// console.log(newPerson);


// ===== READ
// const allPeople = await Human.find();
// console.log(allPeople);

// filtered students
// const result = await Human.find({ age: 33 });  //returns []
// console.log(result);

// const result = await Human.findOne({ age: 33 });  //returns {}
// console.log(result);

// Other methods:
// await Human.findById


// ===== UPDATE 
// Methods / await Human. :
// Human.findByIdAndUpdate('ID', { new data })
// Human.findOneAndUpdate({age: 33}, {age: 23}) = updateOne - > update first that meets the criteria
// Human.updateMany({age: 18}, {age: 20}) - > NOT RECOMMENDED!


// ===== DELETE
// Methods / await Human. :
// Human.findByIdAndDelete('ID')
// Human.deleteOne = Human.findByIdAndDelete
// .deleteMany

// ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== MONGOOSE QUERIES / REQUESTS

// - comparison MongoDB operators

// greater than $gt
// const olderPeople = await Human.find({ age: { $gt: 25 } });
// console.log(olderPeople);

// - comparison Mongoose operators

// const olderPeople = await Human.find().where('age').gt(25);
// console.log(olderPeople);

// Human.find({}).where('facultyNumber').equals('2345'); --- Mongoose DB query
// Human.find({facultyNumber: '2345'}); --- MONGO DB query

// Select specific data from result
// Sorting

// ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== RELATIONS

// Create course

// await Course.create({ name: 'History' });

// Create new student with course reference

// await Human.create({
//     name: 'Iv4o',
//     age: 22,
//     course: '68dc0847f9cb5f50efac3ff3'
// });

// await Human.create({
//     name: 'Iva21',
//     age: 32,
//     course: '68dc1bf83b596d7fd4c2ca5f'
// });

// Retrieve person in course

const studentInCourse = await Human.findOne({ name: 'Iva21' }).exists('course').populate('course');
console.log(studentInCourse);

// const result = await Human.findById(personInCourse.course);
// console.log(result);
