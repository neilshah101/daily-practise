const express = require('express')
const { route } = require('./addmovie')
const router = express.Router()
const authenticate = require('../authentication/auth') // importing authenticate function 

router.get('/', authenticate, (req, res) => {
    if (moviesarr.length > 0) {
        const name = req.session.name
        const username = req.session.username
        moviesarr = moviesarr.filter((movie) => movie.username == username)
        console.log(moviesarr)
        res.render('movies', { allmovies: moviesarr, allusers: users })
    } else {
        res.render('addmoviespage', { message: 'No movies in collection' })
    }
})





// route for finding movie info 
router.get('/:id', authenticate, (req, res) => {

    const usernamename = req.session.usernamename

    const id = req.params.id
    const choosemovie = moviesarr.find((movie) => movie.id == id)

    res.render('movie-info', { choosedmovie: choosemovie, usernamename: usernamename })
})





// route for posting a new movie
router.post("/movie-post", authenticate, (req, res) => {


    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const image = req.body.posterurl
    const username = req.session.username


    let movie = { title: title, description: description, genre: genre, image: image, id: Math.floor(100000 + Math.random() * 900000), username: username }
    moviesarr.push(movie)
    console.log(movie)
    console.log(moviesarr)
    res.render('addmoviespage', { choosedmovie: movie, username: username })
})


// route for deleting a  movie
router.post("/delete", authenticate, (req, res) => {

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