import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import routes from "./routes.js";

const app = express();

//setup hamdlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//setup middlewares
//setup static files 
app.use(express.static('src/public'));
//setup URL encoded
app.use(express.urlencoded()); // factory method / parses the data that is under the request stream 

//setup routes
app.use(routes);

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});

// database connection
const localDB = 'mongodb://localhost:27017';

try {
    await mongoose.connect(localDB, { dbName: 'movie_magic_projectDB' });
    console.log('DB connected successfully!');
} catch (error) {
    console.error('Cannot connect to DB, ', error.message)
}


