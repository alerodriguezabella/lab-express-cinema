const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: { type: [String] },
  image: { type: String, required: true },
  description: { type: String },
  showtimes: { type: [String] },
},
{ timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;