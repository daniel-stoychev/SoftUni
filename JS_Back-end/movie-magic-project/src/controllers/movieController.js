import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create', { pageTitle: 'Add movie' });
});

movieController.post('/create', async (req, res) => {
    // console.log(req.body); // (add action)
    await movieService.create(req.body);
    res.redirect('/');
});

movieController.get(`/:id`, (req, res) => {
    const movie = movieService.getOne(req.params.id);
    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));


    res.render('details', { movie, pageTitle: 'Details', rating: ratingViewData })
});

export default movieController;