const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
var authenticate = require('./authentication/auth')
const http = require('http').Server(app)
const io = require('socket.io')(http)


const addmovieprouter = require('./routes/addmovie')
const movierouter = require('./routes/movies')
const homerouter = require('./routes/home')

app.use('/js', express.static('js'))

app.get('/chat', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})

allChatMessages = []



global.users = [
    { name: "neil", email: "neilshah101@gmail.com", username: "neilshah", password: "123456", id: 1 },
    { name: "aki", email: "neilshah102@gmail.com", username: "akishah", password: "123456", id: 2 }

]

global.moviesarr = [
    { title: "avatar", description: "good movie", genre: "scifi", image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg", id: 1, username: "neilshah" },
    { title: "avatar", description: "nice movie", genre: "action", image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg", id: 2, username: "akishah" }

]



app.use(express.urlencoded())

//using the session package
app.use(session({
    secret: 'THISISSECRETKEY',
    saveUninitialized: true
}))

// declare the name of js file for movies 
app.use("/addmovie", addmovieprouter)
app.use("/movies", movierouter)
app.use("/home", homerouter)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



io.on('connection', (socket) => {
    console.log('User connected!')

    io.emit('Movieverse', (allChatMessages))

    socket.on('disconnect', () => {
        console.log('User disconnected!')
    })

    // listen on a channel 
    /*
    socket.on('Houston', (message) => {
        io.emit('Houston', message) 
    }) */

    socket.on('Movieverse', (chat) => {
        allChatMessages.push(chat)
        io.emit('Movieverse', allChatMessages)
    })

})


http.listen(3000, () => {
    console.log('Server is running...')
})