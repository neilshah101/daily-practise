const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const fetch = require('node-fetch')
const authenticate = require('./authMiddleware')
const connectionString = 'postgres://localhost:5432/booksreactdb'
const db = pgp(connectionString)

app.use(cors())
app.use(express.json())


app.get('/all-books/:user_id', authenticate , (req, res) => {
    const user_id = req.params.user_id
    db.any('SELECT book_id, title, genre, publisher, year, imagelink FROM books WHERE user_id= $1',[user_id])
        .then((books) => {
            res.json(books)
        })

    
})

app.post('/add-book', (req, res) => {

    const title = req.body.title
    const genre = req.body.genre
    const publisher = req.body.publisher 
    const year = req.body.year
    const imagelink = req.body.imagelink

    db.none('INSERT INTO books(title, genre, publisher, year, imagelink) VALUES($1, $2, $3, $4, $5)', [title, genre, publisher, year, imagelink])
        .then(() => {
            res.json({success: true, message: 'book has been added!'})
        })
})


app.delete('/delete-book/:book_id', (req,res)=>{
    const book_id = req.params.book_id
    db.none('DELETE FROM books WHERE book_id = $1',[book_id]) 
        .then(() => {
            res.json({success: true, message: 'book has been deleted!'})
        })
    
})


app.put('/update-book/:book_id', (req, res) => {
    let book_id = req.params.book_id
    const title = req.body.title
    const genre = req.body.genre
    const publisher = req.body.publisher 
    const year = req.body.year
    const imagelink = req.body.imagelink
    console.log(req.body)

    db.none('UPDATE books SET title = $1, genre = $2, publisher = $3, year = $4, imagelink = $5  WHERE book_id = $6;', [title, genre, publisher, year, imagelink, book_id])
        .then(() => {
            console.log('updated book')
            res.json({success: true, message: 'book has been updated!'})
        })


})

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email ;
    

    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (!error) {
                db.none('INSERT INTO users(username, password, email) VALUES($1, $2, $3)', [username, hash, email])
                    .then(() => {
                        res.json({sucess: true, message : "user has been added "})
                    })
            }
        })
    })
})


app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function(error, result) {
                if (result) {
                    const token = jwt.sign({ username: username }, 'ITSSUPERSECRET')
                    res.json({success: true, token: token, username: username, user_id:user.user_id })

                } else {
                    res.json({success: false, message: "invalid username or password"})
                }
            })

        }).catch((error) => {
            console.log(error)
            res.send('User not found!')
        })

        .0
})



app.listen(8080, () => {
    console.log('Server is running...')
})







// 'SELECT  username FROM users WHERE username = $1', [username]