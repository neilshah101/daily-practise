const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('addmoviespage', { allmovies: moviesarr })
})


router.get('/movieapi', (req, res) => {

    res.json(moviesarr)
})
























module.exports = router