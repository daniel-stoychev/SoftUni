import Movie from "../models/Movie.js";

export default {
    getAll() {
        return Movie.find();
    },

    getOne(movieId) {
        return Movie.findOne({ _id: movieId })
    },
    create(movieData) {
        console.log(movieData);
        const movie = new Movie(movieData);

        return movie.save();

    }
}