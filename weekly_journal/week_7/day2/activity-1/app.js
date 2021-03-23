const express = require('express')
const app = express()
const mustacheexpress = require('mustache-express')

app.engine('mustache', mustacheexpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('server is running')
})