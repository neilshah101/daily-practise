const express = require ('express')
const cors = require('cors')
const app = express()


app.use(cors())


const books =[
    {title:'Things Fall Apart', author:'Chinua Achebe'},
    {title:'Fairy tales', author:'Hans Christian Andersen'},
    {title:'The Divine Comedy', author:'Dante Alighieri'},
    {title:'The Epic Of Gilgamesh', author:'Unknown'},
    {title:'he Book Of Job', author:'Unknown'}
]

app.get('/all-books',(req,res) => {
    res.json(books)
})

app.listen(8080,() =>{
    console.log('server is running')
})