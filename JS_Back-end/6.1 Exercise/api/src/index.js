import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from '../routes.js';
import mongoose from 'mongoose';



const app = express();
try {
    mongoose.connect('mongodb://localhost:27017/', {
        dbName: 'furniture-sept-2025-REST'
    });
    console.log('Successfully connected to DB!');

} catch (err) {
    console.log('DB connection failure!');
    console.error(err.message);
}

app.use(cors());

app.use(express.json());








app.use(routes);

app.listen(3030, () => console.log('Server is listening on http://localhost:3030'));
