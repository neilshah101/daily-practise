const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('home', { allmovies: moviesarr })
})




//for registering new use
router.get('/register', (req, res) => {
    res.render('register', { allmovies: moviesarr })
})

//for posting  new user
router.post('/register', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    user = { name: name, email: email, username: username, password: password, id: Math.floor(100000000 + Math.random() * 900000000) }
    users.push(user)
    console.log(user)
    console.log(users)
    res.render('home', { message: " login with your new credentials" })
})

router.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    const persistedUser = users.find((user) => {
        return user.username == username && user.password == password
    })

    if (persistedUser) {
        if (req.session) {
            req.session.username = username
        }
        res.redirect("/movies")
    } else {
        res.render("home", { message: "Username or password is incorrect" })
    }
})


router.get('/logout', function(req, res, next) {


    req.session.destroy(err => {
        console.log(err);
    })

    res.redirect('/home');
});









module.exports = router