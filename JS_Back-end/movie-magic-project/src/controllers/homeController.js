import { Router } from "express";
import movieService from "../services/movieService.js"

const homeController = Router();

//render homePage
homeController.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', { movies });
});

//render aboutPage
homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;