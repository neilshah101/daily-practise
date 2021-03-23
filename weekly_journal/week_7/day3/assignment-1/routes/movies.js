const express = require('express')
const { route } = require('./addmovie')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('movies', { allmovies: moviesarr })
})





// route for getting movie info 
router.get('/:id', (req, res) => {


    const id = req.params.id
    const choosemovie = moviesarr.find((movie) => movie.id == id)

    res.render('movie-info', { choosedmovie: choosemovie })
})





// route for posting a new movie
router.post("/movie-post", (req, res) => {


    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const image = req.body.posterurl


    let movie = { title: title, description: description, genre: genre, image: image, id: Math.floor(100000 + Math.random() * 900000) }
    moviesarr.push(movie)
    console.log(movie)
    console.log(moviesarr)
    res.redirect("/addmovie")
})


// route for deleting a  movie
router.post("/delete", (req, res) => {

    const id = req.body.id

    moviesarr = moviesarr.filter((movie) => movie.id != id)
    console.log(moviesarr)
    res.redirect("/movies")
})

router.get('/genre/:genre', (req, res) => {

    // delet from genre is not working rest all working
    const selgenre = req.params.genre
    let movies = moviesarr.filter((movie) => movie.genre == selgenre)
    res.render('genre', { genrechoosedmovie: movies })
})

module.exports = router