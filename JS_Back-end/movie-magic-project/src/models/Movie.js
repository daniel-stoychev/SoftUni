import { v4 as uuid } from 'uuid';
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/movies.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);

export default class Movie {
    static find(filter = {}) {
        let result = db.movies.slice();
        if (filter.title) {
            //partial match
            result = result.filter(movie => movie.title.toLocaleLowerCase().includes(filter.title.toLocaleLowerCase()));
        }

        if (filter.genre) {
            //exact match
            result = result.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase());
        }

        if (filter.year) {
            result = result.filter(movie => movie.year === filter.year);
        }

        return result;
    }

    static findOne(id) {
        const slectedMovie = db.movies.find(movie => movie._id === id);
        return slectedMovie;
    }

    constructor(movieData) {
        this._id = uuid();
        Object.assign(this, movieData)
    }

    // get id() {
    //     return this._id;
    // }

    async save() {
        db.movies.push(this);
        const dbSerialized = JSON.stringify(db, null, 2)
        await fs.writeFile('./src/movies.json', dbSerialized)

        return this;
    }
}