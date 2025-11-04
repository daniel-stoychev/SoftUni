import express from 'express';
import handlebars from 'express-handlebars';
import validator from 'validator';

const app = express({ extended: false });

app.use(express.urlencoded())

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { layout: false })
});

app.get('/register', (req, res) => {
    res.render('register', { layout: false })
});

app.post('/register', (req, res) => {
    const formData = req.body;
    console.log(formData);

    // validate email
    const isEmailValid = validator.isEmail(formData.email);

    if (!isEmailValid) {
        res.status(400).send('Email is invalid!');
    }

    //sanitize
    const user = {
        email: formData.email.trim().toLowerCase(),
    }

    console.log(user);


    res.redirect('/');

    res.end();
});



app.listen(5001, () => console.log('Server is listening on http://localhost:5001'));