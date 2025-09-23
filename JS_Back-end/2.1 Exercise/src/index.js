import express from 'express'
import handlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';

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
app.use(homeController);
app.use(movieController);
// ----------------


//Server start
app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});