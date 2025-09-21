import express from 'express'
import handlebars from 'express-handlebars'

const app = express();

//Setup Handlebars (engive)
app.engine('hbs', handlebars.engine({
    extname: 'hbs', //setup for .hbs files
}));

app.set('view engine', 'hbs'); // setup variable to use hbs as view engine
app.set('views', 'src/views');  // setup views folder location


// Setup middlewares

app.use(express.static('src/public'))

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// ----------------


//Server start
app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});