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
    const isPublished = req.body.isPublished == "on" ? true : false

    db.none('INSERT INTO blogs(title,body,is_published) VALUES($1, $2, $3)', [title, body, isPublished])
        .then(() => {
            res.redirect('/blogs')
        })
})

app.post('/delete-blog/:post_id', (req, res) => {
    const postid = req.params.post_id
    db.none('DELETE FROM blogs WHERE post_id = $1', [postid])
        .then(() => {
            console.log("deleted")
            res.redirect('/blogs')
        })
})

app.get('/update-blog/:post_id', (req, res) => {
    const postid = req.params.post_id
    db.any('SELECT post_id, title, body, date_created, date_updated, is_published FROM blogs WHERE post_id = $1;', [postid])
        .then(blogs => {
            res.render('update-blog', { blogs: blogs })
        })

})

app.post('/update-blog/:post_id', (req, res) => {
    let post_id = req.params.post_id
    let title = req.body.title
    let body = req.body.body
        // console.log(post_id)

    db.none('UPDATE blogs SET title = $1, body = $2 WHERE post_id = $3;', [title, body, post_id])
        .then(() => {
            console.log('updated blog')
            res.redirect('/blogs')
        })


})




app.listen(3000, () => {
    console.log('Server is running...')
})