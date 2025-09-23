import express from 'express'
import handlebars from 'express-handlebars'
import routes from './routes.js';

const app = express();

//Setup Handlebars (engive)
app.engine('hbs', handlebars.engine({
    extname: 'hbs', //setup for .hbs files
}));

app.set('view engine', 'hbs'); // setup variable to use hbs as view engine
app.set('views', 'src/views');  // setup views folder location


// Setup middlewares

app.use(express.static('src/public'));
app.use(express.urlencoded()); // returns middleware that reads if there is data in the request 
// tream and if there are, it will parse them automatically /(factory method)

// Routes
app.use(routes);
// ----------------


//Server start
app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});