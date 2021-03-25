
const express = require('express')
const router = express.Router() 

// /posts 
router.get('/', (req, res) => {
    if(req.session) {
       res.json({counter: req.session.counter})
    }
})

module.exports = router 