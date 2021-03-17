const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())


app.get('/add-customer', (req, res) => {
    res.render('add-customer')
})

app.post('/confirmations', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    let customer = { name: name, age: age }
    res.render('confirmations', { name: name, age: age })

})

app.listen(3000, () => {
    console.log('Server is running...')
})