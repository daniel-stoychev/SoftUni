const movies = [
    {
        id: '1',
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        imageUrl: 'https://i.pinimg.com/236x/fd/84/34/fd8434cc3ae7c0626c4d344a79ecf4c4.jpg',
        director: 'Frank Darabont',
        year: 1994,
        rating: 9.3,
        category: 'Classic'
    },
    {
        id: '2',
        title: 'The Dark Knight',
        genre: 'Action, Crime, Drama',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        director: 'Christopher Nolan',
        year: 2008,
        rating: 9.0,
        category: 'Superhero'
    },
    {
        id: '3',
        title: 'Interstellar',
        genre: 'Sci-Fi, Drama, Adventure',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        imageUrl: 'https://i.ebayimg.com/images/g/Zo4AAOSwuZRn5XHn/s-l1200.jpg',
        director: 'Christopher Nolan',
        year: 2014,
        rating: 8.7,
        category: 'Space Exploration'
    }
];


export default class Movie {
    constructor(data) {
        Object.assign(this, data);

    }

    static find() {
        return movies.slice();
    }

    save() {
        movies.push(this);
        console.log(movies);

        return this;
    }


}