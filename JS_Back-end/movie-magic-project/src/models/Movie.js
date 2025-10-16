import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: String,       // Очаквана стойност: низ (текст)
    category: String,    // Очаквана стойност: низ (текст)
    genre: String,       // Очаквана стойност: низ (текст)
    director: String,    // Очаквана стойност: низ (текст)
    year: Number,        // Очаквана стойност: число
    imageUrl: String,    // Очаквана стойност: низ (URL)
    rating: Number,      // Очаквана стойност: число
    description: String  // Очаквана стойност: низ (текст)
});

const Movie = model('Movie', movieSchema);

export default Movie;