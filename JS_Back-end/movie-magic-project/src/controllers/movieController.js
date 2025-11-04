import { Router } from "express";
import movieService from "../services/movieService.js";
import castController from "./castController.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
    if (req.isAuthenticated) {
        console.log(req.user.email);

    }
    res.render('movies/create', { pageTitle: 'Add movie' });
});

movieController.post('/create', isAuth, async (req, res) => {
    // console.log(req.body); // (add action)
    await movieService.create(req.body, req.user.id);

    res.redirect('/');
});

movieController.get(`/:_id`, async (req, res) => {
    const movie = await movieService.getOneDetailed(req.params._id);

    // const movieCast = await castService.getAll({ includes: movie.casts });
    // console.log(movieCast);

    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));
    // const isCreator = req.user?.id && movie.creator == req.user.id;
    const isCreator = movie.creator && movie.creator.equals(req.user?.id);

    res.render('movies/details', { movie, pageTitle: 'Details', rating: ratingViewData, isCreator })
});

// add cast page

movieController.get('/:_id/attach', async (req, res) => {

    const movie = await movieService.getOne(req.params._id);
    const casts = await castService.getAll({ excludes: movie.casts }); // remves added casts to the dropdown options

    res.render('casts/cast-attach', { movie, casts, pageTitle: 'Attach cast' });
});

movieController.post('/:_id/attach', async (req, res) => {

    const movieID = req.params._id;
    const castID = req.body.cast;

    await movieService.attach(movieID, castID);

    res.redirect(`/movies/${movieID}`);
});

movieController.get('/:_id/delete', async (req, res) => {
    const movieId = req.params._id;
    const movie = await movieService.getOne(movieId);
    const isCreator = movie.creator && movie.creator.equals(req.user?.id);
    if (isCreator) {
        await movieService.delete(movieId);
        res.redirect('/');
    } else {
        throw new Error("Not creator - cannot delete!");

    }

});

movieController.get('/:_id/edit', async (req, res) => {
    const movieId = req.params._id;
    const movie = await movieService.getOne(movieId);
    console.log(movie);

    res.render('movies/edit', { movie });
});

movieController.post('/:_id/edit', async (req, res) => {
    const movieId = req.params._id;
    await movieService.edit(movieId, req.body);

    res.redirect(`/movies/${movieId}`);
});

export default movieController;