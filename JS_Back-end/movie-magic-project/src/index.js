import express from "express";
import handlebars from "express-handlebars";
import homeController from "./controllers/homeController.js";


const app = express();

//setup hamdlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//setup static files
app.use(express.static('src/public'));

//setup modular router
app.use(homeController);







app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});


