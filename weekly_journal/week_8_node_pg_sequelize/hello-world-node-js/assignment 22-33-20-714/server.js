const express = require('express')

const app = express()

var session = require('express-session')

const pgp = require('pg-promise')()

const connectionString = 'postgres://localhost:5432/blogsdb'

const db = pgp(connectionString)

var bcrypt = require('bcryptjs')


app.use(session({
    secret: 'superman',
    resave: false,
    saveUninitialized: true
}))


const usersrouter = require('./routes/users')




app.use(express.urlencoded())

app.use("/users", usersrouter)

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.get('/blogs', (req, res) => {

    let post_id = req.body.post_d

    db.any('SELECT post_id, title, body, date_created FROM blogs')
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
    const user_id = req.session.userId

    db.none('INSERT INTO blogs(title,body,is_published,user_id) VALUES($1, $2, $3, $4)', [title, body, isPublished, user_id])
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

app.get('/my-blogs', (req, res) => {

    let user_id = req.session.userId

    db.any('SELECT post_id, title, body,date_created, date_updated, is_published , user_id FROM blogs WHERE user_id = $1', [user_id])
        .then(blogs => {
            res.render('my-blogs', { blogs: blogs })
        })
})




app.get('/blog-detail/:post_id', (req, res) => {
    let post_id = req.params.post_id
    db.any('SELECT blogs.post_id, blogs.title, blogs.body, blogs.date_created, comments.comment FROM blogs JOIN comments ON blogs.post_id = comments.post_id WHERE blogs.post_id = $1', [post_id])
        .then((blog) => {
            res.render('blog-detail', { blogs: blog })
        })
})



app.post('/blogs/comment/:post_id', (req, res) => {
    let comment = req.body.comment
    let post_id = req.params.post_id
    let userId = req.session.userId
    db.none('INSERT INTO comments(comment, post_id, user_id) VALUES($1, $2, $3)', [comment, post_id, userId])
        .then((blog) => {
            res.redirect('/blogs')
        })

})


app.listen(3000, () => {
    console.log('Server is running...')
})