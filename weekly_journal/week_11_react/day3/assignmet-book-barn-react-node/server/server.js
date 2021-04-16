const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/booksreactdb'
const db = pgp(connectionString)

app.use(cors())
app.use(express.json())


app.get('/all-books', (req, res) => {


    db.any('SELECT book_id, title, genre, publisher, year, imagelink FROM books')
        .then(book => {
            res.json(book)
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




app.listen(8080, () => {
    console.log('Server is running...')
})