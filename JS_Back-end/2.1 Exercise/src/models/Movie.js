import { v4 as uuid } from 'uuid';  // bibliotec for unique IDs / npm i uuid
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);


export default class Movie {
    constructor(data) {
        Object.assign(this, data);
        // HERE WE CREATE THE MOVIE OBJECT IN THE MEMORY
        this._id = uuid();
    }

    static find(filter = {}) {
        let result = db.movies.slice();

        if (filter._id) {
            result = db.movies.filter(movie => movie._id === filter._id)
        };

        if (filter.title) {
            // TODO search by title, partial match, case insensitive 
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()));
        }

        if (filter.genre) {
            // TODO search by genre, exact match, case insensitive 
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        }

        if (filter.year) {
            // TODO search by year, exact match 
            result = result.filter(movie => movie.year === filter.year)
        }

        return result // returns an Array
    }

    static findOne(filter = {}) {
        let result = db.movies.at(0);
        if (filter._id) {
            result = db.movies.find(movie => movie._id === filter._id)
        }
        return result; // returns an Object
    }

    get id() {
        return this._id;
    }

    async save() {
        db.movies.push(this);

        const dbSerialized = JSON.stringify(db, null, 2);

        await fs.writeFile('./src/db.json', dbSerialized)

        // HERE WE SAVE THE MOVIE OBJECT IN THE SPECIAL MEMORY FOR ALL db.MOVIES
        return this;
    }


}