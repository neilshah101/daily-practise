const express = require('express')
const router = express.Router()
const authenticate = require('../authentication/auth') // importing authenticate function 


router.get('/', authenticate, (req, res) => {
    res.render('addmoviespage', { allmovies: moviesarr })
})




router.get('/movieapi', authenticate, (req, res) => {

    res.json(moviesarr)
})
























module.exports = router