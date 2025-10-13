import { Router } from "express";
import movieService from "../services/movieService.js"

const homeController = Router();

//render homePage
homeController.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', { movies });
});

//render search page
homeController.get('/search', (req, res) => {
    const movies = movieService.getAll();
    res.render('search', { movies });
});

//render aboutPage
homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;