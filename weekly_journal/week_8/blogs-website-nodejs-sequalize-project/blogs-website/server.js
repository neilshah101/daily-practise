const express = require('express')
const app = express()
var session = require('express-session')
const models = require('./models')

// importing bcryptjs 
var bcrypt = require('bcryptjs');

app.use(express.urlencoded())

// initialize a session 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// configure mustache 
const mustacheExpress = require('mustache-express')
    // setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

// view all movies
app.get('/movies', (req, res) => {
    models.Movie.findAll({})
        .then(movies => {
            res.json(movies)
                // res.render('movies', { movies: movies })
        })
})


// post a new movie
app.post('/add-movie', (req, res) => {

    const title = req.body.title
    const rating = parseInt(req.body.rating)
    const director = req.body.director
    const genre = req.body.genre

    let movie = models.Movie.build({
        title: title,
        rating: rating,
        director: director,
        genre: genre,
    })

    movie.save().then((savedMovie) => {
        console.log(savedMovie)
        res.json({ message: 'Movie is saved!' })
    })

})


//delete existing movie
app.post('/delete-movie', (req, res) => {
    const movieId = req.body.movieId

    models.Movie.destroy({
        where: {
            id: movieId
        }
    }).then(deletedMovie => {
        res.redirect('/movies')
    })
})



//update a movie.
app.post('/update-movie', (req, res) => {

    const movieId = req.body.movieId
    const title = req.body.title
    const rating = req.body.rating
    const director = req.body.director
    const genre = req.body.genre
    models.Movie.update({
        title: title,
        rating: rating,
        director: director,
        genre: genre,
    }, {
        where: {
            id: movieId
        }
    }).then(updatedMovie => {
        res.redirect('/movies')
    })
})


//get movie by genre
app.get('/movies/:genre', (req, res) => {
    const genre = req.params.genre

    models.Movie.findAll({
        where: {
            genre: genre
        }
    }).then((movie) => {
        res.json(movie)
    })
})






app.listen(3000, () => {
    console.log('Server is running...')
})