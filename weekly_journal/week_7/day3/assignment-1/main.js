const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

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

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



app.listen(3000, () => {
    console.log('Server is running...')
})