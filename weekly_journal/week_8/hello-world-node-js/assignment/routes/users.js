const express = require('express')
const router = express.Router()

var session = require('express-session')

const pgp = require('pg-promise')()

const connectionString = 'postgres://localhost:5432/blogsdb'

const db = pgp(connectionString)

var bcrypt = require('bcryptjs')

router.use(session({
    secret: 'superman',
    resave: false,
    saveUninitialized: true
}))


router.get('/', (req, res) => {
    res.render('login')
})

router.get('/registration', (req, res) => {
    res.render('registration')
})


router.post('/registration', (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (!error) {
                db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
                    .then(() => {
                        res.redirect('/users')
                    })
            }
        })
    })

})


router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function(error, result) {
                if (result) {
                    if (req.session) {
                        req.session.userId = user.user_id
                        req.session.username = user.username

                        res.redirect('/blogs')
                    }

                } else {
                    res.send('Invalid password')
                }
            })

        }).catch((error) => {
            console.log(error)
            res.send('User not found!')
        })

})


router.get('/logout', function(req, res, next) {


    req.session.destroy(err => {
        console.log('user signed out');
    })

    res.redirect('/users');
});










module.exports = router