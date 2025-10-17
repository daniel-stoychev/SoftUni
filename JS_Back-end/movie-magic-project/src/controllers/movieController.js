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

movieController.get(`/:_id`, async (req, res) => {

    const movie = await movieService.getOne(req.params._id);

    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));

    res.render('details', { movie, pageTitle: 'Details', rating: ratingViewData })
});

// add cast page

movieController.get('/:_id/attach', async (req, res) => {

    const movie = await movieService.getOne(req.params._id);

    res.render('casts/cast-attach', { movie, pageTitle: 'Attach cast' });
});

export default movieController;