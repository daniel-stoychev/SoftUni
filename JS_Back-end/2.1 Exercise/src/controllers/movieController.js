import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieService.create(movieData);

    res.redirect('/');

});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId)

    //Rating - temprary solution
    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));

    res.render('details', { movie, rating: ratingViewData })

});

movieController.get('/search', async (req, res) => {
    const filter = req.query;

    const movies = await movieService.getAll(filter);
    console.log(movies);


    res.render('search', { movies, pageTitle: 'Search Movies' });
});

export default movieController;