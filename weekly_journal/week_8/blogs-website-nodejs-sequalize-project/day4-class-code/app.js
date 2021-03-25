
const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const models = require('./models')
const { Op } = require("sequelize");
const session = require('express-session')
const postRoutes = require('./routes/postRoutes')

app.use(express.urlencoded()) // middleware 1 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

// configure routes 
app.use('/posts', postRoutes) 

app.get('/add-movie', (req, res) => {
    res.render('add-movie')
})

app.get('/reviews', (req, res) => {

    models.Review.findAll({
        include: [
            {
                model: models.Movie, 
                as: 'movie'
            }
        ]
    })
    .then(reviews => res.json(reviews))

})

app.get('/', (req, res) => {

    if(req.session) {
        req.session.counter = 99
    }

    models.Movie.findAll({})
    .then(movies => res.render('index', {movies: movies}))
})

// movie details route 
app.get('/movies/:movieId', (req, res) => {

    const movieId = parseInt(req.params.movieId) 

    models.Movie.findByPk(movieId, {
        include: [
            {
                model: models.Review, 
                as: 'reviews'
            }
        ]
    }) 
    .then(movie => {
        console.log(movie) 
        res.render('movie-details', {movie: movie})
    })

})


app.post('/add-review', (req, res) => {

    const movieId = req.body.movieId
    const title = req.body.title 
    const name = req.body.name 

    let review = models.Review.build({
        movieId: movieId, 
        title: title, 
        name: name 
    })

    // save the review 
    review.save().then(savedReview => {
        res.send("Review saved")
    }).catch((error) => {
        res.send("Unable to save movie")
    })

})

/*
app.get('/movies/:genre', (req, res) => {

    const genre = req.params.genre

    models.Movie.findAll({
        where: {
            genre: {
                [Op.iLike]: genre 
            }
        }
    }).then(movies => res.json(movies))

}) */

app.post('/delete-movie', (req, res) => {

    const movieId = parseInt(req.body.movieId) 

    /*
    models.Movie.findByPk(movieId)
        .then(movie => {
            movie.destroy() 
      }) */

    models.Movie.destroy({
        where: {
            id: movieId 
        }
    }).then((_) => res.redirect('/'))

})

app.post('/add-movie', (req, res) => {

    const title = req.body.title
    const rating = parseInt(req.body.rating)
    const director = req.body.director

    let movie = models.Movie.build({
        title: title,
        rating: rating,
        director: director
    })

    movie.save().then(savedMovie => {
        res.redirect('/')
    })

})

app.listen(3000,() => {
    console.log('Server is running...')
})

/*
 ORM 

 Allows to map your models/classes to tables in the relational database 
 Model properties are mapped to Tables columns

*/