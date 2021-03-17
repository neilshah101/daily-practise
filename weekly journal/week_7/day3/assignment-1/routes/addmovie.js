const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('addmoviespage', { allmovies: moviesarr })
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
router.post("/movie-delete", (req, res) => {


    const id = req.body.id


    moviesarr = moviesarr.filter((movie) => movie.id != id)
    console.log(moviesarr)
    res.redirect("/addmovie")
})

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre
    const moviegenre = moviesarr.find((movie) => movie.genre)
})




















module.exports = router