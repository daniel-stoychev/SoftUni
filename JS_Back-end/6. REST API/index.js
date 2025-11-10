import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.use(routes);






mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'REST-lecture-sept-2025',
});


app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));

