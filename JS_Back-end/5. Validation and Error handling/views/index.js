import express from 'express';
import handlebars from 'express-handlebars';
import validator from 'validator';
import mongoose, { MongooseError } from 'mongoose';
import User from './models/User.js';

const app = express();

await mongoose.connect('mongodb://localhost:27017', {
    dbName: 'test-sept2025'
})

app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.get('/register', (req, res) => {
    res.render('register', { layout: false });
});

app.post('/register', async (req, res) => {
    const userData = req.body;

    // Validate email using validator library
    // const isEmailValid = validator.isEmail(userData.email);

    // if (!isEmailValid) {
    //     res.status(400).send('Email is invalid!');
    // }

    // Sanitize email
    // const user = {
    //     ...formData,
    //     email: formData.email.trim().toLowerCase(),
    // };

    // 1. Return to register page
    // 2. Keep entered data
    // 3. Show appropriate message

    try {
        const ceratedUser = await User.create(userData);

        console.log(ceratedUser);
    } catch (err) {
        // console.log(err instanceof MongooseError);
        // console.log(err.errors.age.message)
        // console.log(err.errors.age.value)

        // Get the first error message
        const firstErrorMessage = Object.values(err.errors).at(0).message;

        // Keep the form data data filled
        return res.status(400).render('register', {
            user: userData,
            layout: false,
            error: firstErrorMessage
        });
    }

    res.redirect('/');
});


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
