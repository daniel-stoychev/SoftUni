import Movie from "../models/Movie.js";

export default {
    async getAll(filter) {
        const result = await Movie.find(filter);
        // const result = await Movie.find(filter).lean();
        //await Movie.find(filter) - query of document
        // lean() makes object from document and resilves "Handlebars: Access has been denied to resolve the property" error

        return result;
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