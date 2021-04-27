const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken');
app.use(cors())


app.get('/token', (req,res) => {
     const token = jwt.sign({username: 'johndoe'}, 'secret')
     res.json ({token : token})
})




app.listen(8080, () => {
    console.log('Server is running...')
})