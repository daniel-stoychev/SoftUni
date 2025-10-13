import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
        console.log(filter);

        return Movie.find(filter);
    },

    getOne(id) {
        return Movie.findOne(id);
    },

    create(movieData) {
        const movie = new Movie(movieData);

        return movie.save();
    }
}