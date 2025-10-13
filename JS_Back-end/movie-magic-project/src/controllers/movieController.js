import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    // console.log(req.body); // (add action)
    movieService.create(req.body);
    res.redirect('/');
});

movieController.get(`/:id`, (req, res) => {
    const movie = movieService.getOne(req.params.id);

    res.render('details', { movie })
});

export default movieController;