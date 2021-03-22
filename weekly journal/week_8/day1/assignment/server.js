const express = require('express')
const app = express()

const pgp = require('pg-promise')()

const connectionString = 'postgres://localhost:5432/blogsdb'

const db = pgp(connectionString)

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.get('/blogs', (req, res) => {
    db.any('SELECT post_id, title, body,date_created, date_updated, is_published FROM blogs')
        .then(blogs => {
            res.render('blogs', { blogs: blogs })
        })
})

app.get('/add-blog', (req, res) => {
    res.render('add-blog')
})

app.post('/add-blog', (req, res) => {

    const title = req.body.title
    const body = req.body.body
    const is_published = req.body.is_published = "on" ? true : false

    db.none('INSERT INTO blogs(title,body,is_published) VALUES($1, $2, $3)', [title, body, is_published])
        .then(() => {
            res.redirect('/blogs')
        })
})








app.listen(3000, () => {
    console.log('Server is running...')
})