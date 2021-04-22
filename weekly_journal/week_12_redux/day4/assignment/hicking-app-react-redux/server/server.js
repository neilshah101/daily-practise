const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/hickingreactdb'
const db = pgp(connectionString)

app.use(cors())
app.use(express.json())

app.get('/all-location', (req, res) => {


    db.any('SELECT geo_id, latitude, longitude FROM geos')
        .then(geos => {
            res.json(geos)
        })
})


app.post('/add-location', (req, res) => {

    const latitude = req.body.latitude
    const longitude = req.body.longitude
    

    db.none('INSERT INTO geos(latitude, longitude) VALUES($1, $2)', [latitude, longitude])
        .then(() => {
            console.log("location added to the db")
            res.json({success: true, message: 'location has been added!'})
        })
})

app.delete('/delete-location/:geo_id', (req,res)=>{
    const geo_id = req.params.geo_id
    db.none('DELETE FROM geos WHERE geo_id = $1',[geo_id]) 
        .then(() => {
            res.json({success: true, message: 'location has been deleted!'})
        })
    
})

app.listen(8081, () => {
    console.log('Server is running...')
})