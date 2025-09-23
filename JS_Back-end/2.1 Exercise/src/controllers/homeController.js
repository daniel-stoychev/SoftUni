import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get('/', (req, res) => {
    const movies = movieService.getAll();
    console.log(movies);


    res.render('home', { movies });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});



homeController.get('/search', (req, res) => {
    res.render('search');
});



export default homeController;