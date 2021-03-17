const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

const triprouter = require('./routes/itenary')
const addtriptriprouter = require('./routes/add-trip')


global.trips = []

app.use(express.urlencoded())
app.use("/addtrip", addtriptriprouter)
app.use("/itenary", triprouter)
app.use(express.static('css'))



app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')





// app.get('/addtrip', (req, res) => {
//     res.render('addtrip')
// })




// app.post('/itenary', (req, res) => {
//     const city = req.body.city
//     const fromdate = req.body.fromdate
//     const todate = req.body.todate
//     const image = req.body.imagelink

//     let trip = { city: city, fromdate: fromdate, todate: todate, image: image }
//     trips.push(trip)
//     res.redirect("/itenary")
// })


// app.get('/itenary', (req, res) => {
//     res.render('itenary', { alltrips: trips, totaltrips: trips.lengths })
// })







app.listen(3000, () => {
    console.log('Server is running...')
})