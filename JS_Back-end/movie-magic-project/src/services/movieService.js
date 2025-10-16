import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
        return Movie.find(filter);
    },

    getOne(id) {
        return Movie.findOne(id);
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating);
        const movie = new Movie(movieData);

        return movie.save();
    }
}