const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

const addmovieprouter = require('./routes/addmovie')





global.moviesarr = []

app.use(express.urlencoded())

// declare the name of js file for movies 
app.use("/addmovie", addmovieprouter)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



app.listen(3000, () => {
    console.log('Server is running...')
})