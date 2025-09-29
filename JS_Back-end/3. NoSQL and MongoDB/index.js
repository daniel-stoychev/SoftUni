import { MongoClient } from "mongodb";
import { log } from "node:console";

const client = new MongoClient('mongodb://localhost:27017'); // connection with the client which URL/db to use

const database = client.db('testDB');
const databaseCollection = database.collection('testCollection');

const people = await databaseCollection.find().toArray();

console.log(people);
