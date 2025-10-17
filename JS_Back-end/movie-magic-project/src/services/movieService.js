import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        //General fix for own property problem
        let query = Movie.find();
        // const result = await Movie.find(filter).lean();
        //await Movie.find(filter) - query of document
        // lean() makes object from document and resilves "Handlebars: Access has been denied to resolve the property" error

        if (filter.title) {
            //partial match
            // query = query.filter(movie => movie.title.toLocaleLowerCase().includes(filter.title.toLocaleLowerCase()));
            query = query.find({ title: { $regex: filter.title, $options: 'i' } });
        }

        if (filter.genre) {
            //exact match
            // query = query.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase());
            query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } });
        }

        if (filter.year) {
            // result = result.filter(movie => movie.year === filter.year);
            query = query.where('year').equals(filter.year);
        }


        return query;
    },

    async getOne(id) {
        // const result = await Movie.findOne({ _id: id });
        const result = await Movie.findById(id);
        return result;
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating);
        // const movie = new Movie(movieData);

        // return movie.save();
        return Movie.create(movieData);
    },
    async attach(movieId, castId) {
        const movie = await Movie.findById(movieId);
        movie.casts.push(castId);
        return movie.save();
    }
}