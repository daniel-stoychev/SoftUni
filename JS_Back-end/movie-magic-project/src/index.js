import express from "express";
import handlebars from "express-handlebars";
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
app.use(express.urlencoded()); // factory method 

//setup routes
app.use(routes);








app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});


