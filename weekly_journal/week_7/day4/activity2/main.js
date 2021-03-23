const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')

const addmovieprouter = require('./routes/addmovie')
const movierouter = require('./routes/movies')





global.moviesarr = [
    { title: "avatar", description: "good movie", genre: "scifi", image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg", id: 1 },
    { title: "avatar", description: "nice movie", genre: "action", image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg", id: 2 }

]

app.use(express.urlencoded())

// declare the name of js file for movies 
app.use("/addmovie", addmovieprouter)
app.use("/movies", movierouter)


app.use(session({
    secret: 'THISISSECRETKEY',
    saveUninitialized: true
}))



app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


let users = [
    { username: "neil", age: 32 },
    { username: "aki", age: 62 }

]

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const name = req.body.name
    const age = req.body.age

    if (req.session) {
        req.session.name = name
        req.session.age = age
    }
    res.redirect('/profile')
})


app.get('/profile', (req, res) => {
    const name = req.session.name
    const age = req.session.age

    res.render('profile', { name: name, age: age })

})






app.listen(3000, () => {
    console.log('Server is running...')
})