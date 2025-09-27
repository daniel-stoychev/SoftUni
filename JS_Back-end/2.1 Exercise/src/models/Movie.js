import { v4 as uuid } from 'uuid';  // bibliotec for unique IDs / npm i uuid

const movies = [
    {
        _id: '1',
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        imageUrl: 'https://i.pinimg.com/236x/fd/84/34/fd8434cc3ae7c0626c4d344a79ecf4c4.jpg',
        director: 'Frank Darabont',
        year: '1994',
        rating: 3.3,
        category: 'Classic'
    },
    {
        _id: '2',
        title: 'The Dark Knight',
        genre: 'Drama',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        director: 'Christopher Nolan',
        year: '2008',
        rating: 9.0,
        category: 'Superhero'
    },
    {
        _id: '3',
        title: 'Interstellar',
        genre: 'Adventure',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        imageUrl: 'https://i.ebayimg.com/images/g/Zo4AAOSwuZRn5XHn/s-l1200.jpg',
        director: 'Christopher Nolan',
        year: '2014',
        rating: 8.7,
        category: 'Space Exploration'
    }
];


export default class Movie {
    constructor(data) {
        Object.assign(this, data);
        // HERE WE CREATE THE MOVIE OBJECT IN THE MEMORY
        this._id = uuid();
    }

    static find(filter = {}) {
        let result = movies.slice();

        if (filter._id) {
            result = movies.filter(movie => movie._id === filter._id)
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
        let result = movies.at(0);
        if (filter._id) {
            result = movies.find(movie => movie._id === filter._id)
        }
        return result; // returns an Object
    }

    get id() {
        return this._id;
    }

    save() {
        movies.push(this);
        console.log(movies);
        // HERE WE SAVE THE MOVIE OBJECT IN THE SPECIAL MEMORY FOR ALL MOVIES
        return this;
    }


}