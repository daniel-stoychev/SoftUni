import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
        return Movie.find(filter);
    },

    getOne(movieId) {
        return Movie.findOne({ _id: movieId })
    },
    async create(movieData) {
        console.log(movieData);
        const movie = new Movie(movieData);

        return movie.save();

    }
}