
import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';


try {
    await mongoose.connect('mongodb://localhost:27017/', {
        dbName: 'nodeJS_exam_prep_cheatBase'
    })
    console.log('Database connected successfully!');

} catch (error) {
    console.log('DB connection failure!, ', error.message);

}

const app = express();

// Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}))

app.set('view engine', 'hbs')
app.set('views', 'src/views')

// Static middlewares
app.use(express.static('src/public'));

// cookie parser
app.use(cookieParser())

//body parser
app.use(express.urlencoded({ extended: false }))

// use authMidlle ware
app.use(authMiddleware);

// routes
app.use(routes);

// add gloobal error handling

app.use(errorMiddleware);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));