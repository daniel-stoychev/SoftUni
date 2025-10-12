import Movie from "../models/Movie.js";

export default {
    getAll() {
        return Movie.find();
    },

    getOne(id) {
        return Movie.findOne(id);
    },

    create(movieData) {
        const movie = new Movie(movieData);

        return movie.save();
    }
}