const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => 
    res.render('index')
);

router.get('/movies',(req, res) => {
    Movie.find()
        .then((movies) => {
            res.render('movies', {movies})
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/movies/:id', (req,res) => {
    let {id} = req.params
    Movie.findById(id)
        .then((movie) => {
            res.render('movies-details', {movie})
            console.log(movie)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;
