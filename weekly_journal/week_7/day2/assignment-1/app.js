const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.static('css'))

app.get('/', (req, res) => {
    res.render('addtrip')
})


trips = []

app.post('/itenary', (req, res) => {
    const city = req.body.city
    const fromdate = req.body.fromdate
    const todate = req.body.todate
    const image = req.body.imagelink

    let trip = { city: city, fromdate: fromdate, todate: todate, image: image }
    trips.push(trip)
    res.redirect("/")
})


app.get('/itenary', (req, res) => {
    res.render('itenary', { alltrips: trips, totaltrips: trips.lengths })
})







app.listen(3002, () => {
    console.log('Server is running...')
})